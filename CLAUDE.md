# Koovis AI Website

## What This Project Is

Marketing website for Koovis AI at https://www.koovis.ai. Built with Next.js 14 (App Router), deployed via Vercel on git push.

**Positioning (2026-10-01, D47):** the site of **Koovis Studios**, the film studio of
Koovis AI Pvt Ltd. Original films, shorts and series, written and performed by people and made with
AI. Pages: home, `/studios` (slate + how films are made), `/about`, `/blog`, `/contact`, `/privacy`,
`/terms`. Pulse, Workforce, pricing, services, products, careers, FAQ and papers were removed and
redirect home (`next.config.mjs`); Workforce and papers use temporary redirects.

**Public-surface rules (D43.3, D52, D58):**
- No internal codes, phase labels, revenue-timing claims, productivity stats or immigration strategy.
- No "in submission" or "forthcoming" claims unless true.
- Never mention or show the Baahubali pipeline test; no recreations of existing films.
- Don't announce a film's subject, cast or date until Raj approves it.
- Founder name is "Rajesh Kolachana"; public email is `info@koovis.ai` (never admin@).
- Don't link social handles until they exist (br-01, br-03 YouTube via qe-04).
- This repo is **public** and `main` deploys to production. Change copy on a branch; Raj approves the
  Vercel preview before merge.

**Decision log:** `docs/koovis/DECISIONS.md` in the private ops repo (the only log) (D43.3, D47, D52, D58).

## Tech Stack

- Next.js 14 (App Router), TypeScript, Tailwind CSS
- MDX for blog posts (static generation)
- Resend for contact form + waitlist + newsletter emails (via `/api/contact` and `/api/waitlist`)
- Vercel (auto-deploy on push to `main`)
- No external newsletter service — newsletter signups route through `/api/waitlist` with `product="newsletter"` and land in the same Resend inbox

## Project Structure

```
src/app/
├── page.tsx                  <- Home: studio hero, how we make films, founder, release signup
├── studios/                  <- Slate (Short #1, micro-series) + pipeline
├── about/                    <- Studio story, founder bio, principles
├── blog/                     <- Blog listing + [slug] MDX
├── contact/                  <- Contact form (casting, crew, festivals, press)
├── privacy/, terms/          <- Legal entity named
└── api/
    ├── contact/              <- Resend email forward
    └── waitlist/             <- Resend email forward; product=studios|newsletter

src/components/               <- AnimateIn, Button, ContactForm, Footer, Navbar (Films / Blog / About),
                                 SectionLabel, SectionTitle, ThemeToggle, WaitlistForm, Providers
src/lib/metadata.ts           <- Site title/description, keywords, JSON-LD
next.config.mjs               <- Redirects for retired pages
```

## Commands

```bash
npm run dev            # Start dev server (localhost:3000)
npm run build          # Production build
npm run lint           # ESLint
```

## Code Standards

- TypeScript strict mode. No `any` types.
- Tailwind CSS for all styling. No CSS modules.
- Components in `src/components/`. Pages in `src/app/`.
- Blog posts as MDX files with frontmatter metadata.
- All API routes validate input before processing.

## Documentation Sync Protocol

### Canonical Here (edit directly)
- `PROJECT_DOC.md` — Operational reference for this project

Claude Code reads satellite repo files directly when context is needed (no auto-mirroring).

### Canonical in the private ops repo (use MCP to update)
- **Company plan:** `docs/koovis/MASTER_BLUEPRINT.md` (map: `README.md`) — Use MCP `update_blueprint_section()`
- **Decisions:** `docs/koovis/DECISIONS.md` — Use MCP `append_decision()`

### End-of-Session Protocol
Before ending any work session, call MCP `sync_from_conversation()` with:
- Any decisions made during the session
- Task status updates
- Blueprint changes
