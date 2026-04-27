# liliankloftheller.com

Personal academic website for **Dr. Lilian Kloft-Heller**, researcher at Maastricht University specializing in forensic psychology, psychopharmacology, and memory research.

**Live:** [liliankloftheller.com](https://www.liliankloftheller.com)

## What's on the site

- **Hero** with animated intro and dark/light theme toggle
- **About** — research focus, current position, background
- **Publications** — academic publication list
- **Media & Press** — appearances, interviews, public-facing work
- **Collaborate** — open invitations for research collaboration and speaking
- **Contact** form via Formspree
- **CV** page at `/cv`
- **Research** page at `/research`

Smooth scrolling powered by Lenis, animations by Framer Motion and GSAP.

## Tech stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Animations | Framer Motion, GSAP, Lenis |
| Forms | Formspree |
| Fonts | Geist Sans & Mono (local) |
| Theme | next-themes (system preference + manual toggle) |
| Hosting | Netlify (auto-deploy on push to main) |

## Running locally

```bash
npm install
npm run dev
```

Opens at [localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Deploying

Push to `main` — Netlify picks it up automatically.
