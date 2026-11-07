#!/usr/bin/env python3
"""Compress deployed JPEGs used by the homepage and teaching cards.

This runs in the temporary GitHub Actions checkout before Jekyll generates
responsive images. The original source photographs stay unchanged in Git.
"""
from __future__ import annotations

import io
import re
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
IMAGE_DIR = ROOT / "assets" / "img"
MAX_EDGE = 1800
MIN_BYTES = 200_000
JPEG_QUALITY = 80


def referenced_images() -> list[Path]:
    files = list((ROOT / "_teaching").glob("*.md")) + [ROOT / "_pages" / "about.md"]
    names: set[str] = set()
    for file in files:
        sections = file.read_text(encoding="utf-8").split("---", 2)
        if len(sections) < 3:
            continue
        front_matter = sections[1]
        names.update(
            re.findall(
                r"^\s*img:\s*/assets/img/([\w.-]+\.jpe?g)\s*$",
                front_matter,
                re.M | re.I,
            )
        )
        names.update(
            re.findall(
                r"^\s*image:\s*([\w.-]+\.jpe?g)\s*$",
                front_matter,
                re.M | re.I,
            )
        )
    return [IMAGE_DIR / name for name in sorted(names)]


def optimize(path: Path) -> tuple[int, int]:
    before = path.stat().st_size
    if before < MIN_BYTES:
        return before, before
    with Image.open(path) as original:
        image = ImageOps.exif_transpose(original).convert("RGB")
        image.thumbnail((MAX_EDGE, MAX_EDGE), Image.Resampling.LANCZOS)
        buffer = io.BytesIO()
        image.save(buffer, format="JPEG", quality=JPEG_QUALITY, optimize=True, progressive=True)
        optimized = buffer.getvalue()
    if len(optimized) < before:
        path.write_bytes(optimized)
        return before, len(optimized)
    return before, before


def main() -> None:
    total_before = total_after = 0
    for path in referenced_images():
        if not path.is_file():
            raise FileNotFoundError(f"Referenced image is missing: {path}")
        before, after = optimize(path)
        total_before += before
        total_after += after
        print(f"{path.name}: {before / 1024:.0f} -> {after / 1024:.0f} KiB")
    print(
        f"Homepage/teaching images: "
        f"{total_before / (1024 * 1024):.2f} -> "
        f"{total_after / (1024 * 1024):.2f} MiB"
    )


if __name__ == "__main__":
    main()
