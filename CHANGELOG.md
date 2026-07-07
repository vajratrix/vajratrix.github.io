# Vajratrix Group — Project Changelog

This document tracks the full history of work done on the Vajratrix Group brand identity and website, from initial logo design through production deployment. Format loosely follows [Keep a Changelog](https://keepachangelog.com/).

---

## v1.0.0 — Production Deployment (Live)

The site went live end-to-end at `https://vajratrix.github.io`, fully verified in production rather than just locally.

### Added
- Real `git` repository initialized and connected to the existing GitHub remote
- Full push of the React + TypeScript rebuild to `main`, replacing the previous static HTML site
- Backup safety net: a GitHub Release/tag (`backup-before-react-rebuild`) preserving the exact pre-migration state
- Gmail label + filter (`Vajratrix Group`) auto-organizing all form submissions by subject line, without removing them from the main Inbox

### Changed
- GitHub Pages **Source** switched from "Deploy from a branch" to **"GitHub Actions"** — required for the new build-based deployment to actually take effect (this was the root cause of an initial blank-page deploy)

### Fixed
- Duplicate `vite.config.js` / `vite.config.ts` conflict (only one config file should ever exist; `.js` was a stray duplicate silently overriding the real config)
- TypeScript composite-project output (`vite.config.js`/`.d.ts`) redirected into a gitignored `.tsbuild-node/` folder instead of cluttering the project root
- SEO/verification files (`robots.txt`, `sitemap.xml`, Google Search Console verification HTML) moved into Vite's `public/` folder so they survive the build process and remain reachable at their original URLs
- `sitemap.xml` updated with the two new Legal page entries and refreshed `lastmod` dates

### Verified in production (not just locally)
- All content fixes rendering correctly live
- Mobile hamburger menu functional
- Both Contact and Feedback forms submitting successfully from the live domain
- Google Analytics Realtime tracking live traffic
- Favicon, `robots.txt`, `sitemap.xml`, and Search Console verification file all reachable at their live URLs

---

## v0.8.0 — SEO & Analytics Continuity

### Added
- Google Analytics (`gtag.js`) wired into `index.html`, reusing the **existing** Measurement ID (`G-GDLR2XCFZ5`) so historical data (17+ users, 112+ events) continued uninterrupted rather than starting a new property

### Fixed
- Confirmed Search Console verification file, `robots.txt`, and `sitemap.xml` — all previously living only in the old static site — were properly carried over into the new build pipeline

---

## v0.7.0 — UX Polish & Honesty Fixes (Round 2)

A second honesty/consistency sweep after initial deployment prep surfaced a few things that had been fixed locally but never actually reached the live files.

### Added
- Functional mobile navigation: hamburger icon now toggles a real dropdown menu (previously decorative only), with animated icon transition and auto-close on link click

### Changed
- Footer partner naming unified to the `C. Tech` / `S. Group` / `P. Info` style across **all** locations (About paragraph, pillar cards, Team section, Projects roadmap "Lead" fields, Footer) — several of these had drifted out of sync during iterative edits
- Hero tagline changed to **"Innovative. Alliance. Excellence."**
- About section heading restored to the original founding tagline, **"Three Forces. One Vision. Infinite Power."** — a deliberate split, not a duplication error: Hero uses the new tagline, About uses the founding one
- Footer's false compliance badges (**"MCA Registered," "ISO Ready," "Secure"**) replaced with claims that are actually true: **"Open Source," "MIT Licensed," "Community Driven"**
- Footer's dead-end "Careers" and "Press Kit" links converted from clickable `href="#"` placeholders into plain **"(Coming Soon)"** labels

### Fixed
- Two empty CSS rulesets (`.feed-content {}`, `.contact-info {}`) removed — harmless dead code, flagged by linter
- `LegalSection.tsx` wrapper component (for side-by-side Legal cards) was referenced in `App.tsx` before the file actually existed in the project — corrected

---

## v0.6.0 — Legal & Compliance Pages

### Added
- **Privacy Policy** page — real, honest content covering what data is collected (form submissions + Google Analytics), how it's used, where it's processed (Google Apps Script/Gmail), user rights, and contact info
- **Terms of Use** page — covers open-source licensing, no-warranty disclaimer, acceptable use, IP ownership, limitation of liability, governing law (India) — explicitly flagged as a starting point, not a substitute for professional legal review
- Both pages built as collapsible cards ("Show More"/"Show Less") displayed side-by-side, rather than long-form walls of text
- Footer links updated to point to the real `#privacy-policy` / `#terms-of-use` anchors instead of dead `href="#"` placeholders

---

## v0.5.0 — Real Contact System

Replaced non-functional `alert()`-based form stubs with genuine email delivery.

### Added
- Google Apps Script backend (`doPost`) deployed as a Web App, routing both Contact and Feedback form submissions to `connect2vajratrix@gmail.com`
- `submitForm.ts` shared utility handling the `no-cors` fetch workaround required by Apps Script Web Apps (no CORS headers, so success is inferred rather than read from the response)
- Honeypot spam-filtering field (hidden from real users, typically filled by bots) on both forms
- Distinct, context-appropriate success messages per form (Contact vs. Feedback), rather than one generic message
- `Reply-To` header set to the submitter's own email, so replying is a single click
- Basic rate-limiting logic drafted for the Apps Script (global 10-minute rolling cap) to protect against inbox flooding if the endpoint is ever discovered and abused — documented as optional, not yet applied at the user's request

### Changed
- Evaluated and rejected Formspree (50 submissions/month free-tier cap) and FormSubmit.co (thinner support/reliability track record) in favor of Google Apps Script — free, effectively unlimited on a personal Gmail account, and account-owned rather than third-party-dependent

### Security note (documented, not code)
- Reviewed what a public repo does and doesn't expose: the Apps Script endpoint URL is visible in the shipped client bundle regardless of repo visibility (inherent to any client-only form integration, not specific to this setup) — repo privacy would not have hidden it, and would have broken GitHub Pages hosting on a free plan besides

---

## v0.4.0 — Content Integrity Pass

The core "make everything on the site actually true" pass, applied section by section per the user's explicit request to go one change at a time rather than in bulk.

### Changed
- **Logo:** placeholder inline SVG icons (nav + hero) replaced with the real finalized Vajratrix trishul mark; favicon and schema.org `logo` field updated to match
- **Email:** `connect@vajratrix.com` → `connect2vajratrix@gmail.com`, updated everywhere (schema data, Contact section, docs)
- **Website URL:** corrected from a non-existent `www.vajratrix.com` to the real `https://vajratrix.github.io`
- **Services:** "Daily Productivity Tracker" renamed to **Daily DNA**; "MCQ Practice Portal" renamed to **ExamForge**; new **Discussion Forum** card added to the roadmap
- **Activities & Updates:** entirely fabricated news feed (fake security alerts, fake incorporation/MCA registration claims, fake global tech headlines) and fake "Security Status Board" (claiming live CVE monitoring that didn't exist) replaced with an honest feed of real, verifiable milestones and a "Project Status" panel showing only true, current facts
- **Team section:** personal first names removed entirely; identity reduced to the initials-only codename (`C. Tech` / `S. Group` / `P. Info`) as the primary display, redundant company-name line removed

### Verified
- About section's use of initials (already correct in the original upload, no change needed there)

---

## v0.3.0 — React + TypeScript Migration

A full framework migration, done as a deliberate "pure lift-and-shift" first — same content, same design, same placeholder data as the original HTML — so that subsequent content fixes (v0.4.0 onward) could be applied cleanly inside components rather than mixed in with a risky rewrite.

### Added
- Vite + React + TypeScript project scaffold (`package.json`, `tsconfig.json`, `vite.config.ts`)
- One component per site section: `Navbar`, `Hero`, `About`, `Services`, `Projects`, `Activities`, `Team`, `Feedback`, `Contact`, `Footer`
- Vanilla JS behaviors (scroll-spy nav highlighting, star rating, fade-in-on-scroll) converted to idiomatic React hooks (`useState`, `useEffect`, `IntersectionObserver`)
- GitHub Actions workflow (`.github/workflows/deploy.yml`) to auto-build and deploy to GitHub Pages on every push to `main`
- Dedicated dev server port (`5432`) with `strictPort: true`, to avoid colliding with the user's other local projects
- `allowedHosts: ['.ngrok-free.dev']` added to Vite config to support tunneling the local dev server for mobile testing

### Changed
- README updated to reflect the new `npm install` / `npm run dev` / `npm run build` workflow, replacing the old "no build step required" instructions

---

## v0.2.0 — Marketing & Brand Assets

### Added
- Social media banner set: landscape (1600×900) and square (1080×1080) variants, dark charcoal-indigo background echoing the logo's own palette, gold-gradient wordmark typography
- Full logo kit: website header lockup (matching the site's actual Cormorant Garamond typography), social/marketing lockups (Poppins-based, dark-bg and light-bg variants), square stacked lockup, social profile avatar (padded for safe circular cropping), and a complete favicon set (`.ico` + PNG sizes + Apple touch icon)
- Contact information ("Connect" row with email) added to banner designs

### Changed
- Banner copy iterated multiple times: removed "Non-Profit / Open-Source" framing (to leave room for a future paid tier), added SEO-relevant keyword line, rewrote supporting tagline to be energetic but legally safe for customers, the org, and future monetization alike

---

## v0.1.0 — Brand Identity & Logo Refinement

### Changed
- Removed two curling "horn" prong elements from the trishul (trident) logo per direct feedback, iterating twice to correctly distinguish "remove the whole prong" from "remove only the curled tip, keep the flame-shaped body"
- Removed the logo's own baked-in opaque background rectangle, so it composites transparently onto any background rather than showing a visible dark square "plate"

---

## Notes on process

Two working principles shaped how this project was executed, worth recording alongside the changes themselves:

1. **Honesty over polish.** Multiple rounds of this project involved *removing* content that looked professional but wasn't true — fake activity feeds, fake security monitoring claims, fake compliance badges, exposed personal names where initials were wanted. The recurring standard applied was: would a visitor reading this specific line understand the real, current state of things?
2. **Verify in production, not just locally.** Several fixes that looked correct in `npm run dev` didn't actually make it into the deployed site until explicitly re-checked file-by-file (missing `LegalSection.tsx`, a stray duplicate `vite.config.js`, files still needing to move into `public/`). The lesson carried through the project: "looks right" and "confirmed working" are different claims, and the second one is the one that matters.
