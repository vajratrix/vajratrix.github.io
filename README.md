<div align="center">

# 🔱 Vajratrix Group

**Innovative. Alliance. Excellence.**

Official website and open-source home of Vajratrix Group, an open-source collective building free, trustworthy software for the community.

[![Live Site](https://img.shields.io/badge/Live%20Site-vajratrix.github.io-c9a84c?style=for-the-badge)](https://vajratrix.github.io/)
[![Daily DNA](https://img.shields.io/badge/Daily%20DNA-Live-50c878?style=for-the-badge)](https://getdailydna.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

![React](https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-2088ff?logo=githubactions&logoColor=white)

</div>

---

## About

Vajratrix Group combines three forces, **C. Tech**, **S. Group** and **P. Info**, under one shared vision. We build and maintain free, open-source tools and services for the community.

📍 Kolkata, West Bengal, India · 📧 [connect2vajratrix@gmail.com](mailto:connect2vajratrix@gmail.com) · 🌐 [vajratrix.github.io](https://vajratrix.github.io/)

## Projects

| Project | Domain | Status | Link |
| --- | --- | --- | --- |
| **Daily DNA**: free task and habit tracker | Productivity | 🟢 Live | [getdailydna.vercel.app](https://getdailydna.vercel.app) |
| **ExamForge**: free MCQ practice platform | Education | 🟡 Development & Testing | Coming soon |

## About the Maintainer

<table>
  <tr>
    <td width="180" align="center">
      <img src="public/assets/chinmoy-pathak-logo.png" alt="Chinmoy Pathak logo" width="160" />
    </td>
    <td>
      <h3>Chinmoy Pathak</h3>
      <p><strong>Founder &amp; Lead Developer, Vajratrix Group</strong><br/><em>Innovate · Inspire · Lead</em></p>
      <p>I design, build and ship the Vajratrix Group website and its open-source products, from UI and front-end architecture to CI/CD, SEO, analytics and the contact pipeline.</p>
      <p>📧 <a href="mailto:connect2vajratrix@gmail.com">connect2vajratrix@gmail.com</a> · 📍 Kolkata, India</p>
    </td>
  </tr>
</table>

### What I built in this repository

- **Front-end:** a single-page site in **React 18 + TypeScript**, one component per section (Navbar, Hero, About, Services, Projects, Team, Trust, Contact, Legal, Footer), with a responsive layout, a working mobile menu, scroll-spy navigation and fade-in-on-scroll built with `IntersectionObserver`.
- **Design system:** a custom dark-and-gold theme in a single `index.css` with design tokens, plus a custom logo and brand kit.
- **CI/CD:** a **GitHub Actions** workflow that builds with Vite and deploys to GitHub Pages on every push to `main`. The production bundle is about 175 kB (54 kB gzipped).
- **Contact system:** a **Google Apps Script** web app that delivers form submissions to Gmail, with a honeypot spam filter, a `Reply-To` header set to the sender, and distinct success messages per form.
- **SEO and analytics:** Open Graph and Twitter cards, schema.org `Organization` data, `sitemap.xml`, `robots.txt`, Google Search Console verification and Google Analytics.
- **Trust and compliance:** Privacy Policy and Terms of Use pages written to reflect what the site actually does and collects.
- **Content integrity:** a deliberate "only claim what's true" approach. Placeholder claims were removed from the site, and the full history is in the [CHANGELOG](CHANGELOG.md).

## Tech Stack

| Area | Tools |
| --- | --- |
| Framework | React 18, TypeScript 5 |
| Build | Vite 5 |
| Hosting and CI/CD | GitHub Pages, GitHub Actions |
| Forms | Google Apps Script (Web App), Gmail |
| Analytics and SEO | Google Analytics (gtag.js), schema.org, sitemap, robots.txt |

## Repository Structure

```
├── index.html                 # Vite HTML entry (head, meta, SEO, schema)
├── src/
│   ├── main.tsx               # React entry point
│   ├── App.tsx                # Assembles all page sections
│   ├── index.css              # Global styles (design tokens, layout, components)
│   ├── components/            # One component per site section
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── Team.tsx
│   │   ├── Trust.tsx
│   │   ├── Contact.tsx
│   │   ├── LegalSection.tsx
│   │   ├── PrivacyPolicy.tsx
│   │   ├── TermsOfUse.tsx
│   │   └── Footer.tsx
│   └── utils/submitForm.ts    # Shared form-submission helper
├── public/                    # Copied as-is into the build
│   ├── assets/                # Logos, OG image, project logos
│   ├── sitemap.xml
│   ├── robots.txt
│   └── google*.html           # Search Console verification
├── .github/workflows/deploy.yml   # Build and deploy to GitHub Pages
├── vite.config.ts
├── tsconfig.json
├── package.json
├── CHANGELOG.md
└── LICENSE
```

## Local Development

Requires **Node.js 18+**.

```bash
git clone https://github.com/vajratrix/vajratrix.github.io.git
cd vajratrix.github.io
npm install
npm run dev        # http://localhost:5432
```

Production build:

```bash
npm run build      # outputs to dist/
npm run preview    # http://localhost:5433
```

Deployment is automatic. Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. In **Settings → Pages**, set **Source** to **GitHub Actions**.

## Contributing

Contributions of all sizes are welcome, from fixing a typo to proposing a feature. Open an [issue](../../issues) or a pull request. Good places to start:

- Accessibility, performance and SEO improvements
- Reporting bugs or broken links

## License

Released under the [MIT License](LICENSE). Copyright © 2025 Vajratrix Group (Chinmoy Pathak). Free to use, modify and distribute.

---
<div align="center">
<sub>© 2025–2026 Vajratrix Group · Built with 🔱 in Kolkata, India by <strong>Chinmoy Pathak</strong></sub>
</div>
