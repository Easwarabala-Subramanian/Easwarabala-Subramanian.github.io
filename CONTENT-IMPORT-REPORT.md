# Content Import Report — Attachments batch (2026-09-04)

Report on importing `Attachments/` (16 cover images + 16 description `.docx` files) into `data/books.json` and the Dog Breeds / Cat Breeds / Diseases & Disorders pages.

## Important deviation from the original instructions

The instructions referenced a **notes-app export file** (a `.docx`/markdown listing that pairs each image with its docx in order, via alt text + filename links) as the source of truth for pairing. **That file was never actually provided** — only the `Attachments/` folder itself landed in the repo.

Rather than guess pairings, each cover image was **visually read** (the covers all have the book title baked into the artwork itself) and each `.docx` was **opened and its opening text extracted**. Every image's visible title was then matched to the docx whose text begins with the same title. All 16 images and 16 docx files were successfully matched this way — no invented content, nothing paired on a guess. If you have the original notes export and want the pairing double-checked against it, it's worth a quick cross-check, but content-matching here was unambiguous (each pair's title text matched exactly, word for word).

## What was imported

15 unique catalogue entries went into `data/books.json`, each with a real cover, a full description extracted from its `.docx`, and — thanks to the Amazon links list sent separately — a working Amazon link:

**Diseases & Disorders** (5 — first real content this page has ever had):
- Congenital Rubella Virus, Clostridium Difficile, Conjunctivitis, Coxsackie Virus, Crabs

**Dog Breeds** (5):
- Bearded Collie, Australian Shepherd, Australian Cattle Dog, Australian Kelpie, Appenzeller Sennenhund

**Cat Breeds** (5):
- Cymric Cat, Devon Rex, Donskoy Cat, Exotic Shorthair, Havana Brown

The 7 cover-only entries from the previous session (Border Collie, Bernese Mountain Dog, Belgian Malinois; Birman, Aegean, American Curl, American Wirehair — no description or Amazon link yet) were folded into the same `data/books.json` so all three pages now render from one data source instead of a mix of hardcoded HTML and dynamic content.

## Duplicates found and how they were handled

- **Havana Brown — duplicate docx.** Two docx files (`65803D4D…` and `D709A36C…`) both exist for "Havana Brown," paired with the same single cover image. Their text bodies are **byte-for-byte identical**. Since there's only one cover and the description text is an exact duplicate, this was recorded as **one** catalogue entry rather than two identical cards — creating two visually identical entries would just be confusing on the live site. The second docx file is preserved in `originals/notes-export-attachments/` if you want to check it yourself.

- **Congenital Rubella Virus — duplicate cover image.** Two image files (`0C104EBB…`, 836KB and `B3220ED4…`, 423KB) show the same cover artwork, but only one docx exists for this title. The larger/higher-quality file was used as the canonical cover; the smaller duplicate is unused but preserved in `originals/notes-export-attachments/`.

- **Australian Kelpie & Appenzeller Sennenhund — superseded prior covers.** Both breeds already had a (description-less) cover on the site from an earlier session. This batch supplied **new, distinct cover art plus real descriptions and Amazon links** for both. The new entries replace the old ones; the old cover files were removed from `assets/images/covers/` (still recoverable from git history if ever needed).

## Where things live now

- `data/books.json` — the catalogue data (title, category, cover path, description, Amazon link) driving all three grid pages via `assets/js/books.js`.
- `assets/images/covers/` — compressed, web-ready covers, filenamed by title slug (e.g. `havana-brown.jpg`).
- `originals/covers/` — full-resolution versions of the same covers.
- `originals/notes-export-attachments/` — the raw `Attachments/` folder as originally supplied (UUID-named images + docx), kept as a backup / for re-verification.

## Still outstanding

- Vijay Book's Amazon link was already added in a previous step — unaffected by this import.
- Diseases & Disorders, Dog Breeds, and Cat Breeds pages still describe their series as a whole (700 / 150 / 30 titles) — these 15 entries are a growing sample, not the full catalogue. `CONTENT-CHECKLIST.md` has been left as the place to track future batches.
