# Sunjun Hwang — Personal Website

The personal website of **Sunjun Hwang (황선준)**, an independent researcher working on artificial intelligence and quantum computing, based in Vancouver for 2026–27.

**Live site:** [sjhwang.com](https://sjhwang.com)

<img width="1600" alt="Personal website" src="assets/readme-banner.png" />

## About

This site is the personal home page in a set of three sites:

| Site | What it is |
|------|------------|
| [sjhwang.com](https://sjhwang.com) | Personal website: who I am, research overview, news, life and notes (this repository) |
| [sjhwangcv.com](https://sjhwangcv.com) | Curriculum vitae, with a print-ready PDF layout ([CV](https://github.com/justinbrianhwang/CV)) |
| [sjhwangresearch.com](https://sjhwangresearch.com) | Open research portal with projects, publications and timeline ([sjhwangresearch](https://github.com/justinbrianhwang/sjhwangresearch)) |

## What's on the site

**Home** — masthead with profile photo and key numbers, About with full education history, research index, news log, contact and an interactive "Where I Am" globe.

**Research areas** (`pages/research/`)

| Page | Topics |
|------|--------|
| Quantum computing | Quantum algorithms, hybrid quantum-classical systems |
| Artificial intelligence | Deep learning, federated learning, adversarial robustness |
| Autonomous vehicles | CARLA simulation, reinforcement learning |
| AI security | Adversarial attacks, defenses, robustness analysis |
| TDA for medical data | Topological data analysis of BRCA genomic data |
| Computer systems | Compilers, architecture, operating systems, databases |
| Robotics | Motion planning, manipulation, sim-to-real, multi-robot systems |

Each page has an overview, research directions, tools and a reading list.

**Profile** — Introduce, The people who made me, Schedule, Skills & Tools & Education, Experience, Awards & Certificates, Pupils and Co-researchers, plus school pages under `pages/education/`.

**Research notes** — CS Deadlines, Conference Tier, CS Journals, Overleaf / LaTeX, Engineering Paper Writing, Open Problems and coursework notes.

## Design

- Editorial layout: serif display type, a single accent color, hairline rules and plenty of whitespace.
- Light and dark themes, following the system setting by default, with a toggle on every page.
- Respects `prefers-reduced-motion`: the intro and reveal animations are skipped.
- Responsive down to phone width.

## Project structure

```
├── index.html              # Home page
├── pages/
│   ├── research/           # One page per research area
│   ├── education/          # School pages
│   └── *.html              # Profile and research-note pages
├── css/
│   ├── style.css           # Design tokens and home page styles
│   ├── pages.css           # Shared sub-page styles
│   └── research-hero.css   # Animated heroes on research pages
├── js/
│   ├── script.js           # Intro, scroll reveal, news accordion
│   ├── theme.js            # Light/dark theme toggle
│   ├── sidebar.js          # Site-wide navigation drawer
│   └── footer.js           # Shared social footer
└── assets/                 # Photos, logos, research icons and banners
```

## Running locally

No build step — it is a static site.

```bash
git clone https://github.com/justinbrianhwang/myweb.git
cd myweb
npx serve .
```

Or open `index.html` directly in a browser.

## Deployment

Hosted on **GitHub Pages** with the custom domain `sjhwang.com` (see `CNAME`). Pushing to `main` deploys automatically.

## Links

[Google Scholar](https://scholar.google.com/citations?user=6X2EVE0AAAAJ) · [ORCID](https://orcid.org/0009-0007-5173-2876) · [LinkedIn](https://www.linkedin.com/in/sunjunhwang/) · [GitHub](https://github.com/justinbrianhwang) · [YouTube](https://www.youtube.com/@sjquantumprof) · [Medium](https://medium.com/@sunjun7559)

---

© 2026 Sunjun Hwang. All rights reserved.
