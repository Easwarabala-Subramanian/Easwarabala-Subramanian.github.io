# Content Checklist

Everything the site is still waiting on. Each item is also marked with a `<!-- TODO -->` comment in the relevant HTML file, so you (or Claude, in a future session) can grep for `TODO` to find every spot at once.

Check items off as you go — just replace `[ ]` with `[x]`.

## Amazon links

Used on the book pages and `amazon.html`. Buttons currently point to `#` or are disabled.

- [ ] Diseases & Disorders series link(s) — `books-diseases-disorders.html`, `amazon.html`
- [ ] Dog Breeds link(s) — `books-dog-breeds.html`, `amazon.html`
- [ ] Cat Breeds link(s) — `books-cat-breeds.html`, `amazon.html`
- [x] ~~Vijay Book link~~ — done (`https://www.amazon.sg/dp/B0HCVJVKC1`)
- [ ] Amazon Author Page link (optional, one central link) — `amazon.html`, `contact.html`

## Images

- [ ] Diseases & Disorders cover art — still a placeholder SVG (`assets/images/cover-diseases-disorders.svg`). No real cover has been supplied yet for this series.
- [ ] More author photos — `gallery.html` has 3 placeholder tiles left to swap for real photos (one real photo is already live on Home/About/Gallery).
- [x] ~~Dog Breeds cover art~~ — done (5 real covers added: Border Collie, Bernese Mountain Dog, Belgian Malinois, Australian Kelpie, Appenzeller Sennenhund)
- [x] ~~Cat Breeds cover art~~ — done (4 real covers added: Birman, Aegean, American Curl, American Wirehair)
- [x] ~~Vijay Book cover art~~ — done

## Contact & social

- [x] ~~Real contact email~~ — done (`easwar5762@gmail.com`)
- [ ] Social links (optional) — Instagram, Facebook, YouTube, X, etc. Leave blank if not applicable.

## Open decisions (not blockers)

- **Individual title pages vs. series pages.** With 700+ Diseases & Disorders titles and 150+/30+ breed books, each series is currently described as a whole rather than one page per book. A searchable/filterable catalogue (e.g. a JSON list + client-side search) is the recommended path once you have a full title list.
- **Launch-window wording for the e-papers.** "Weekly Astrology" (~3 months) and "Positive Paper" (~6–9 months) on `research-weekly-astrology.html` / `research-positive-paper.html` are worded relative to when the About text was written (Sep 2026) — revisit as those dates approach.
- **Custom domain.** The site works at the default `<username>.github.io` address with no extra setup. Only needed if you want something like `easwarabalasubramanian.com` — see the README's deployment section.

## Repo notes

- Original source files (the un-resized author photo, the "about me" doc, the build spec, and full-resolution book cover images) live in `originals/` — not part of the deployed site, kept as backups.
- Web-ready, compressed images the site actually uses live in `assets/images/` (covers in `assets/images/covers/`).
