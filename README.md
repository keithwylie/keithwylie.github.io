# Keith Wylie's academic website

Source for [keithwylie.github.io](https://keithwylie.github.io/), an academic website for Keith Wylie, Assistant Professor of Psychology at Flagler College.

The site is built with [Jekyll](https://jekyllrb.com/) using the [al-folio](https://github.com/alshedivat/al-folio) theme and published through GitHub Pages.

## Updating the site

- **Homepage:** `_pages/about.md`
- **Teaching overview:** `_pages/teaching.md`
- **Individual courses:** `_teaching/*.md` (course cards are generated from these files)
- **Journal publications:** `_bibliography/papers.bib`
- **Conference presentations:** `_bibliography/presentations.bib`
- **Online CV:** `_pages/cv.md` and `_data/cv.yml`
- **Profile links:** `_data/socials.yml`
- **Site-wide settings:** `_config.yml`

Changes to the `main` branch trigger the `Deploy site` GitHub Actions workflow, which builds the Jekyll site and publishes the generated files to `gh-pages`. The deploy action is configured to remove old published pages that no longer exist in the source.

## CV PDF

The online CV is generated from `_data/cv.yml`. The separate `Render a CV` workflow creates the downloadable PDF after changes to the CV or its RenderCV settings are merged to `main`. The website only shows a PDF download icon when the matching PDF exists in the build; the HTML CV remains available otherwise.

## Maintenance

Check the GitHub Actions results when updating the site. The repository also includes workflows for accessibility and broken-link checks.

Theme attribution and upstream documentation: [al-folio](https://github.com/alshedivat/al-folio).
