# Content Checklist

Everything the site is still waiting on. Each item is also marked with a `<!-- TODO -->` comment in the relevant HTML file, so you (or Claude, in a future session) can grep for `TODO` to find every spot at once.

Check items off as you go — just replace `[ ]` with `[x]`.

## Amazon links

15 individual titles + the author page now have real Amazon links, wired in via `data/books.json` (see `CONTENT-IMPORT-REPORT.md` for how that batch was imported). What's left is more of the same, as more titles arrive — send them the same way (title + Amazon link) and they'll be matched into `data/books.json` by title.

- [x] ~~Vijay Book link~~ — done (`https://www.amazon.sg/dp/B0HCVJVKC1`)
- [x] ~~Amazon Author Page link~~ — done (`https://www.amazon.com/author/easwarabalasubramanian`), used on `amazon.html` and `contact.html`
- [x] ~~First batch of Dog Breeds links~~ — done (Bearded Collie, Australian Shepherd, Australian Cattle Dog, Australian Kelpie, Appenzeller Sennenhund)
- [x] ~~First batch of Cat Breeds links~~ — done (Cymric Cat, Devon Rex, Donskoy Cat, Exotic Shorthair, Havana Brown)
- [x] ~~First batch of Diseases & Disorders links~~ — done (Congenital Rubella Virus, Clostridium Difficile, Conjunctivitis, Coxsackie Virus, Crabs)
- [ ] Remaining Dog Breeds links (~145 more titles)
- [ ] Remaining Cat Breeds links (~25 more titles)
- [ ] Remaining Diseases & Disorders links (~695 more titles)
- [ ] The 4 legacy cover-only entries from the previous session still have no Amazon link or description: Border Collie, Bernese Mountain Dog, Belgian Malinois, and the 4 legacy cat covers (Birman, Aegean, American Curl, American Wirehair)

## Images

- [x] ~~Diseases & Disorders cover art~~ — done, 5 real covers added (previously a placeholder SVG)
- [x] ~~Dog Breeds cover art~~ — 9 real covers now (5 new + Border Collie, Bernese Mountain Dog, Belgian Malinois from before)
- [x] ~~Cat Breeds cover art~~ — 9 real covers now (5 new + Birman, Aegean, American Curl, American Wirehair from before)
- [x] ~~Vijay Book cover art~~ — done
- [ ] More author photos — `gallery.html` has 3 placeholder tiles left to swap for real photos (one real photo is already live on Home/About/Gallery).

## Contact & social

- [x] ~~Real contact email~~ — done (`easwar5762@gmail.com`)
- [ ] Social links (optional) — Instagram, Facebook, YouTube, X, etc. Leave blank if not applicable.

## Open decisions (not blockers)

- **Individual title pages vs. series pages.** With 700+ Diseases & Disorders titles and 150+/30+ breed books, `data/books.json` is now the extensible path for this — more entries can be appended as titles/descriptions/links arrive, without needing a page-per-book. A search/filter UI on top of it is a reasonable next step once there are enough entries to warrant one.
- **Launch-window wording for the e-papers.** "Weekly Astrology" (~3 months) and "Positive Paper" (~6–9 months) on `research-weekly-astrology.html` / `research-positive-paper.html` are worded relative to when the About text was written (Sep 2026) — revisit as those dates approach.
- **Custom domain.** The site works at the default `<username>.github.io` address with no extra setup. Only needed if you want something like `easwarabalasubramanian.com` — see the README's deployment section.

## Repo notes

- Original source files (the un-resized author photo, the "about me" doc, the build spec, full-resolution covers, and the raw notes-export `Attachments/` folder) live in `originals/` — not part of the deployed site, kept as backups.
- Web-ready, compressed images the site actually uses live in `assets/images/` (covers in `assets/images/covers/`).
- `data/books.json` + `assets/js/books.js` render the Dog Breeds / Cat Breeds / Diseases & Disorders grids dynamically. This needs the site served over http(s) (GitHub Pages, or `python3 -m http.server` locally) — opening the HTML files directly via `file://` won't load the grids, per browser CORS rules on local `fetch()`.
