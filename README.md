# Easwarabala Subramanian — Author Website

A static personal author/portfolio website for Easwarabala Subramanian: author, researcher, and independent publisher. Built as plain HTML/CSS/JS with no build step, so it deploys to GitHub Pages with zero configuration.

## Structure

```
.
├── index.html                       Home
├── about.html                       About Me (full author bio)
├── books.html                       Books hub
├── books-diseases-disorders.html    Diseases & Disorders series
├── books-pet-animals.html           Pet Animal series hub
├── books-dog-breeds.html            Dog Breeds
├── books-cat-breeds.html            Cat Breeds
├── books-vijay.html                 Vijay Book
├── research.html                    Research hub
├── research-earth-astrology.html    Earth Astrology
├── research-weekly-astrology.html   Weekly Astrology e-paper (coming soon)
├── research-positive-paper.html     Positive Paper e-paper (coming soon)
├── gallery.html                     Photo gallery
├── amazon.html                      Buy My Books (Amazon links)
├── contact.html                     Contact
├── 404.html                         Custom not-found page
├── .nojekyll                        Tells GitHub Pages not to run Jekyll processing
├── .gitignore
├── CONTENT-CHECKLIST.md             What's still needed — Amazon links, remaining cover art, etc.
├── CONTENT-IMPORT-REPORT.md         How the first Attachments/ batch was imported into data/books.json
├── data/
│   └── books.json                   Catalogue entries (title, category, cover, description, Amazon link)
├── assets/
│   ├── css/style.css                All site styling
│   ├── js/main.js                   Mobile nav toggle
│   ├── js/books.js                  Renders book cards from data/books.json by category
│   └── images/                      Photos + book covers used by the site
│       └── covers/                  Real book cover photos (dog/cat breeds, diseases, Vijay Book)
└── originals/                       Source files, not part of the deployed site (see below)
```

No templating engine is used — each page is a standalone HTML file sharing the same header/nav/footer markup and `assets/css/style.css`. This keeps the site simple to host, but means any change to the nav or footer needs to be repeated across files (there's a `build_site.py`-style generator pattern you can recreate if you want to regenerate pages from a template later — it isn't included here since the output is what matters for hosting).

## Running locally

No build step is required. From the project root, run a simple local server — this is required now, not just recommended: the Dog Breeds / Cat Breeds / Diseases & Disorders pages fetch `data/books.json` at runtime, which browsers block over a bare `file://` URL:

```bash
# Python 3
python3 -m http.server 8000

# or Node
npx serve .
```

Then visit `http://localhost:8000`.

## Deploying to GitHub Pages

1. Push this repository to GitHub.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Pick the branch (e.g. `main`) and the `/ (root)` folder, then save.
5. GitHub will publish the site at `https://<username>.github.io/<repo-name>/`.

The `.nojekyll` file at the root tells GitHub Pages to serve the files as-is, skipping Jekyll processing (not needed since this is a plain static site, but it avoids Jekyll trying to interpret any filenames starting with an underscore in the future).

### Custom domain (optional)

If you want to use a custom domain later:

1. Add a `CNAME` file at the repo root containing just your domain, e.g. `yourdomain.com`.
2. In your domain's DNS settings, add the records GitHub documents for custom domains (an `A`/`ALIAS` record to GitHub's IPs, or a `CNAME` record if using a subdomain).
3. In **Settings → Pages**, add the custom domain and enable **Enforce HTTPS** once DNS has propagated.

## Content still needed

See **[CONTENT-CHECKLIST.md](CONTENT-CHECKLIST.md)** for the full, up-to-date list (Amazon links, the Diseases & Disorders cover, more author photos, social links). Every open item is also marked with a `<!-- TODO -->` comment in the relevant HTML file — grep for `TODO` to find them all at once.

One item not tracked as a `TODO` comment: the **Weekly Astrology / Positive Paper email sign-up forms** on those two research pages are visual placeholders only (disabled inputs/buttons), not wired to any backend. Connecting them requires a form service (e.g. Mailchimp, Buttondown, a simple serverless function).

## Source files (`originals/`)

`originals/` holds files that aren't part of the deployed site: the original "about me" doc and build spec, the full-resolution author photo, full-resolution versions of the book cover images, and (`notes-export-attachments/`) the raw batch of cover images + description `.docx` files as originally supplied, before being processed into `data/books.json` — see `CONTENT-IMPORT-REPORT.md`. The site itself uses the resized, compressed copies in `assets/images/`. Keep this folder out of anything you deploy from a subfolder other than the repo root; it's harmless on GitHub Pages either way since nothing links to it.

## Notes on content

The About page text and all biographical/project facts on this site are taken directly from the author-supplied "About Me" text and are not embellished or extended beyond what was provided. Unconventional or ambitious topics (Earth Astrology, the political content in the Vijay Book) are presented factually and neutrally as the author's own stated work and perspective.
