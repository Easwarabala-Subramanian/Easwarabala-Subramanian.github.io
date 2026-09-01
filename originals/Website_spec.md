# Website Build Spec — Easwarabala Subramanian (Author Website)

## Purpose
A personal author/portfolio website for Easwarabala Subramanian, showcasing his books (700+ on Diseases & Disorders, an ongoing Pet Animal breed series, the Vijay Book), his research projects (Earth Astrology, Weekly Astrology e-paper, Positive Paper e-paper), and linking out to where his books can be bought (Amazon).

Static site, built to be hosted on GitHub Pages. Should be clean, readable, content-first — this is a personal/author site, not a SaaS marketing page. Mobile-responsive.

## Tech expectations
- Plain static site (HTML/CSS/JS) or a simple static site generator (e.g. Astro, 11ty, Jekyll — Jekyll works natively with GitHub Pages with zero build config if you want the simplest path). No backend/database needed.
- Deployable via GitHub Pages (either a `docs/` folder or a `gh-pages` branch, or GitHub Actions build — pick whichever is simplest for the generator chosen).
- Include a `README.md` explaining how to run locally and how to deploy.
- Use placeholder images where real photos aren't supplied yet, clearly marked so they're easy to swap out.

## Source content (author's own "About Me" text — use as-is for the About/Home page, don't invent facts beyond this)

> Welcome to my website. My name is Easwarabala Subramanian, and I am passionate about research, writing, and developing original ideas across a wide range of subjects.
>
> I have written around 700 books on Diseases and Disorders, covering a broad range of topics and providing readers with organized and informative material.
>
> I am also working on an extensive pet-animal book project, in which each dog breed and each cat breed is covered in a separate book. At present, around 150 books on dog breeds and 30 books on cat breeds have been uploaded, while research and writing for many more breeds are continuing.
>
> Another major area of my current research is Earth Astrology, a new concept that I am developing and exploring. Earth Astrology presents a different perspective from traditional approaches centered primarily on the Sun and Moon.
>
> As part of this project, the Weekly Astrology e-paper will be based on Earth Astrology. It is expected to be launched within the next three months in 15 languages, making this new concept accessible to readers in different parts of the world.
>
> I am also developing a Positive Paper e-paper, which is expected to be launched within the next 6 to 9 months. The long-term plan is to make it available in approximately 100 languages, with the aim of sharing positive, meaningful, and inspiring content with people around the world.
>
> My latest book is the Vijay Book, focusing on Vijay, the Chief Minister of Tamil Nadu. The book presents my perspective on Vijay, his political journey, leadership, and the broader vision explored in the book. Vijay Book is available in 50 languages worldwide, making it accessible to readers across different countries and linguistic communities.
>
> The book also presents my perspective on the concept of starting a political party and governing or ruling 97 countries around the world. This reflects my broader interest in exploring ambitious ideas about leadership, governance, society, and the future through books and research.
>
> I believe that every project is an opportunity to learn, research, and create something valuable. My work is driven by curiosity, creativity, continuous learning, and a commitment to sharing knowledge with readers around the world.
>
> There is still much more to come. Many of my projects are currently under research and development, and I look forward to bringing new books, publications, and ideas to readers worldwide.
>
> Thank you for visiting my website and taking the time to explore my work.

## Site structure / pages to build

1. **Home** — short intro/hero (photo + name + one-line tagline, e.g. "Author, Researcher, Independent Publisher"), with a few highlight cards linking to the main sections below (Books, Earth Astrology, Vijay Book), and a "Buy my books on Amazon" call-to-action.

2. **About** — the full "About Me" text above, paired with his photo.

3. **Books** (hub page, with sub-pages/sections):
   - **Diseases & Disorders series** — description of the ~700-book series (organized/informative reference material). Since there are too many to list individually unless a list is provided, describe the series and its scope; leave a clearly marked spot to add a searchable/browsable list later if he supplies titles.
   - **Pet Animal series** — sub-pages for:
     - Dog Breeds (currently ~150 books uploaded)
     - Cat Breeds (currently ~30 books uploaded)
     - Note that more breeds are in progress — include a "coming soon" note.
   - **Vijay Book** — its own page: about Vijay (Chief Minister of Tamil Nadu), his political journey, leadership, and the book's broader vision, including the author's perspective on starting a political party and governing/ruling 97 countries. Note it's available in 50 languages.
   - Each book/series entry should have a placeholder for: cover image, short description, and an "Available on Amazon" button/link (see Amazon links section below — leave as placeholder URLs to be filled in).

4. **Research / Current Projects** (hub page, with sub-pages/sections):
   - **Earth Astrology** — explain the concept (a new approach centered differently from traditional Sun/Moon-based astrology).
   - **Weekly Astrology e-paper** — based on Earth Astrology; expected launch within ~3 months, in 15 languages. Mark as "Coming Soon" with an optional email-signup placeholder (non-functional unless a form backend is added later).
   - **Positive Paper e-paper** — expected launch in 6–9 months, planned for ~100 languages, focused on positive/meaningful/inspiring content. Also "Coming Soon."

5. **Gallery / Photos** — a simple photo grid page for author photos (use the supplied photo now; leave placeholders for more).

6. **Buy My Books (Amazon)** — a dedicated page (or prominent section) collecting Amazon links for the published books. Structure it as a list/grid with book title, cover placeholder, and Amazon button — leave the `href` values as clearly marked placeholders (e.g. `<!-- TODO: Amazon link for [Book Title] -->`) since actual Amazon URLs need to be supplied.

7. **Contact** — simple contact section/page (email placeholder; add social/Amazon author page links if available).

## Content still needed from the user (leave TODOs in the code for these)
- Real photo(s) of the author — one is available now, more can be added later.
- Actual Amazon links for the books (Diseases & Disorders titles, Dog/Cat breed books, Vijay Book).
- Any book cover images.
- Contact email / social links.
- Whether he wants individual pages per book title eventually, or just per series (given ~700+ titles, a searchable/filterable list is probably better long-term than one page per book — flag this as a future enhancement, not required for v1).

## Design notes
- Keep navigation simple: Home / About / Books / Research / Gallery / Buy on Amazon / Contact.
- Warm, literary/editorial tone — not corporate. Serif or classic font pairing suits an author site.
- Since this covers unconventional/ambitious topics (Earth Astrology, the political content in the Vijay Book), present them factually and neutrally as the author's own stated work and perspective — don't editorialize.

## Deployment
- Repo should be pushed to GitHub and Pages enabled (Settings → Pages → deploy from branch/folder).
- Site should work at `https://<username>.github.io/<repo-name>/` at minimum; note in the README how to later attach a custom domain if desired.
