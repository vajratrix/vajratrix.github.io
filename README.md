# 🔱 Vajratrix Group

**Official website and open-source home of Vajratrix Group** — a non-profit, open-source collective building free, trustworthy software for the community.

🌐 **Live site:** [vajratrix.github.io](https://vajratrix.github.io/)
📧 **Contact:** connect2vajratrix@gmail.com
📍 **Based in:** Kolkata, West Bengal, India

---

## About

Vajratrix Group combines three forces — **C. Tech**, **S. Group**, and **P. Info** — under one non-profit vision: *Innovative. Alliance. Excellence.*

We build and maintain free, open-source tools and services, starting with:

- Productivity tracker
- MCQ practice portal

More projects are listed on the [Projects](https://vajratrix.github.io/#projects) section of our site.

## Why Open Source?

As a non-profit, we believe great software shouldn't sit behind a paywall for the people who need it most. Every tool we build here is free to use, and the code behind this website — and our products — is open for anyone to inspect, learn from, and improve.

## Repository Structure

```
├── index.html              # Vite HTML entry (head/meta/SEO/schema)
├── src/
│   ├── main.tsx             # React entry point
│   ├── App.tsx               # Assembles all page sections
│   ├── index.css              # Global styles (design tokens, layout, components)
│   └── components/             # One component per site section
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Services.tsx
│       ├── Projects.tsx
│       ├── Activities.tsx
│       ├── Team.tsx
│       ├── Feedback.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── assets/                # Logo, OG image, and other static assets
├── vite.config.ts
├── tsconfig.json
├── package.json
├── sitemap.xml              # XML sitemap for search engines
├── robots.txt                # Crawler rules
├── .github/
│   ├── workflows/deploy.yml   # Builds & deploys to GitHub Pages on push to main
│   ├── ISSUE_TEMPLATE/         # Bug report & feature request templates
│   └── PULL_REQUEST_TEMPLATE.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
└── LICENSE
```

## Contributing

We welcome contributions of all sizes — from fixing a typo to proposing a new feature. Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request, and check our [Code of Conduct](CODE_OF_CONDUCT.md).

Good places to start:
- Look for issues labeled [`good-first-issue`](../../issues?q=is%3Aissue+is%3Aopen+label%3A%22good-first-issue%22)
- Suggest improvements to accessibility, performance, or SEO
- Report bugs or broken links

## Local Development

This site is built with **React + TypeScript + Vite**. Node.js 18+ required.

```bash
git clone https://github.com/vajratrix/vajratrix.github.io.git
cd vajratrix.github.io
npm install
npm run dev
# then visit the local URL Vite prints (usually http://localhost:5173)
```

To produce a production build (this is what CI runs automatically on push to `main`):

```bash
npm run build     # outputs to dist/
npm run preview   # preview the production build locally
```

Deployment is automatic: pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. In your repo settings, set **Settings → Pages → Source** to **GitHub Actions** (instead of "Deploy from a branch").

## License

This project is licensed under the [MIT License](LICENSE) — free to use, modify, and distribute.

## Community

- 💬 Join our community (Discord link coming soon)
- ⭐ Star this repo to follow our progress
- 🐛 [Report an issue](../../issues/new/choose)

---

<sub>© 2025–2026 Vajratrix Group. Built with 🔱 in Kolkata, India.</sub>