# AEO.co — Cohort 2 Landing Page

Single-page landing site for AEO.co Cohort 2 applications.
A Division of SmartMarketer™.

---

## Project structure

```
aeo-landing-site/
├── index.html               # Main entry point — open this in a browser
├── README.md                # This file
├── css/
│   └── styles.css           # All custom styles
├── js/
│   └── tailwind-config.js   # Brand palette + fonts extending Tailwind CDN
└── assets/
    ├── brand/
    │   └── smartmarketer-logo.avif
    ├── charts/
    │   ├── winona-share-of-voice.png
    │   └── babyrx-citation-trend.png
    └── outdoor-vitals/
        ├── ov-01-hero.jpg ... ov-13-youtube.jpg
        └── ov-adaptable.jpg
```

All asset paths in `index.html` are **relative**, so the site works equally well at the root domain (`aeo.co`) or under a subpath (`username.github.io/repo-name/`).

---

## Local preview

Just open `index.html` directly in a browser — no build step needed.

Optional: run a tiny local server for cleaner relative-path behavior:

```bash
# from inside aeo-landing-site/
python -m http.server 8000
# then visit http://localhost:8000
```

---

## Deploy to GitHub Pages

1. Create a new repo on GitHub (e.g. `aeo-landing`).
2. Push the contents of this folder to the repo root:
   ```bash
   git init
   git add .
   git commit -m "Initial landing page"
   git branch -M main
   git remote add origin https://github.com/<your-org>/<your-repo>.git
   git push -u origin main
   ```
3. In the repo on GitHub: **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: `main`  · Folder: `/ (root)`
4. Wait ~30 seconds for Pages to deploy. Your site will be live at
   `https://<your-org>.github.io/<your-repo>/`.

### Custom domain (optional)

In the same Pages settings, set a custom domain (e.g. `aeo.co` or `cohort.aeo.co`)
and add the matching DNS records (CNAME / A) at your registrar.

---

## Application form — how it works

The Cohort 2 application form sends every submission to **`aeo@smartmarketer.com`** via
[FormSubmit.co](https://formsubmit.co) — a free, no-signup, no-backend email-forwarding service.

**One-time activation:**

1. After the first form submission, FormSubmit will email a one-click confirmation link to `aeo@smartmarketer.com`.
2. Click that link once. From that point on, every submission arrives automatically.

**To change the recipient address**, edit the `action` attribute in `index.html`:

```html
<form action="https://formsubmit.co/<new-email>" method="POST">
```

---

## Maintenance

- **Update copy** — edit `index.html` directly.
- **Update styles** — edit `css/styles.css`.
- **Update palette / fonts** — edit `js/tailwind-config.js`.
- **Swap images** — drop new files into `assets/<category>/` and update the `<img src>` in `index.html`.

---

## Tech notes

- Tailwind CSS loaded via CDN (no build).
- Fonts: Inter (sans), Fraunces (display), JetBrains Mono (eyebrows / numbers).
- Single HTML file — no JavaScript framework required.
- Fully responsive (mobile · tablet · desktop).
