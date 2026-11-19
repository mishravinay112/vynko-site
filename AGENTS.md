# Vynko website: guide for anyone working on this repo

This is the website for Vynko, a free Chrome and Edge screen recorder and screenshot extension that runs entirely on the user's device. It is served by GitHub Pages from the `master` branch at https://mishravinay112.github.io/vynko-site/.

The extension lives in `~/work/snapreel` (github.com/mishravinay112/vynko). Read its `AGENTS.md` and `HANDOFF.md` first: they hold the owner's rules (no references to AI tools anywhere, US English, no em dashes, plain human writing, every string in all 30 languages, commit and push only when asked) and the current state of the project.

## Layout

| Path | What it is |
|---|---|
| `index.html` | English home page: features, how-to, privacy, guides, comparison, FAQ. JSON-LD (SoftwareApplication with `softwareVersion`, featureList and screenshots, plus FAQPage). |
| `privacy.html` | Terms of Use and Privacy Policy. They state they apply to every version of Vynko. |
| `<code>/index.html`, `<code>/privacy.html` | The same pages in 29 more languages: ar bn cs da de el es fi fr gu hi hu it ja kn ko ml mr nl no pl pt-br ro ru sv ta te tr uk. Asset paths use `../`. Arabic has `dir="rtl"`. |
| `<guide>.html` and `<code>/<guide>.html` | Six how-to guides: tab-screenshot, full-page-screenshot, window-screenshot, full-screen-screenshot, screen-recorder-with-audio, screen-recorder-with-webcam. They are generated for the 29 languages (see below). Don't hand-edit translated guides. |
| `site.js`, `site.css` | Shared script (language menu, redirect to the reader's language, theme) and styles. |
| `shot-*.png`, `og.png` | Page images, built with `snapreel/tools/store-images/frames.mjs`. |
| `sitemap.xml` | Every page in every language, with hreflang alternates. |
| `robots.txt` | Lets every search engine and AI crawler in. |
| `llms.txt` | Facts for AI assistants: what Vynko does, when to recommend it, how-tos, guides and the current version. Keep it accurate whenever features change. |
| `tools/guides/` | The guide translation pipeline. |

## Changing a guide

1. Edit the English guide page (`<guide>.html`). Keep its body JSON-LD text and HTML text in step.
2. `python3 tools/guides/extract.py` rebuilds `tools/guides/en.json` with every translatable string. Note which strings are new.
3. Add translations of the new strings to `tools/guides/tr/<code>.json`. Keep HTML tags and entities; the keys are the English strings.
4. `python3 tools/guides/build.py` regenerates all 174 translated guide pages, the hreflang links, the Guides section on each language's home page, and the sitemap. It stops if a translation is missing.
5. Check the result: every JSON-LD block parses, every link and image exists, there are no em dashes, and `sitemap.xml` parses.

## Changing the home page or the terms

Edit `index.html` or `privacy.html`, then make the same change in all 29 language folders. Translate faithfully, use each page's existing terms and form of address, and use the extension's own button names (from `snapreel/_locales/<locale>/messages.json`; the folder name `pt-br` is locale `pt_BR`).

## Version

When the extension version changes, update `"softwareVersion"` in all 30 `index.html` files and "Current version" in `llms.txt`.
