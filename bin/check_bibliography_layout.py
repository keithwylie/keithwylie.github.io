#!/usr/bin/env python3
"""Verify published bibliography pages render text-only entries and header controls."""
import re
from pathlib import Path

site = Path("_site")
for slug in ("publications", "presentations"):
    html = (site / slug / "index.html").read_text(encoding="utf-8")
    header = re.search(r'<header class="[^"]*bibliography-page-header[^"]*"[^>]*>(.*?)</header>', html, re.S)
    assert header, f"{slug}: missing bibliography page header"
    assert 'id="bibsearch"' in header.group(1), f"{slug}: search field outside header"
    if slug == "presentations":
        for button_id in ("show-all-presentations", "show-apls-presentations"):
            assert f'id="{button_id}"' in header.group(1), f"{slug}: {button_id} missing"
    bibliography = re.search(r'<ol class="bibliography"[^>]*>(.*?)</ol>', html, re.S)
    assert bibliography, f"{slug}: bibliography list missing"
    entries = bibliography.group(1)
    assert re.search(r'<div id="[^"]+" class="col-12">', entries), f"{slug}: entries are not full width"
    assert 'class="col col-sm-2 abbr"' not in entries, f"{slug}: image column still present"
    assert 'class="preview ' not in entries, f"{slug}: thumbnail image still present"
    print(f"{slug}: compact header and full-width, image-free entries verified")
home = (site / "index.html").read_text(encoding="utf-8")
assert 'class="preview ' in home, "About: selected-paper previews unexpectedly missing"
print("About: existing selected-publication previews preserved")
