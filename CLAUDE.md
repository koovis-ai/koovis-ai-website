# Koovis AI Website

## What This Project Is

Marketing website for Koovis AI at https://www.koovis.ai. Built with Next.js 14 (App Router), deployed via Vercel on git push.

**Positioning (as shipped 2026-04-20 per D43):** Pulse-anchored multi-product site. Homepage leads with Pulse outcome H1 ("Turn one brief into 150 UGC ad variants..."); Workforce / Research / Studios surface as tiles below. Global company framing — no "India's AI-native" or "India-origin" in marketing copy. Product-level India references stay where functionally required (Pulse Indian-language UGC, WealthPilot Indian equity coverage, Studios Indian cinema). Legal entity (Koovis AI Pvt Ltd / Koovis AI LLC) stays in `/privacy` + `/terms` + schema.org + `/papers` citations only.

**Canonical spec:** `koovis-hq/projects/koovis-ai-website/WEBSITE_REFRESH_SPEC.md` (SHIPPED 2026-04-20).
**Canonical decision log entry:** D43 in `koovis-hq/docs/blueprints/DECISIONS.md`.

**Unified rename:** All content uses "Koovis Workforce" (never "Koovis PA"). Founder name standardized to "Rajesh Kolachana" on public surfaces.

**Features:** 4 product landing pages (`/workforce`, `/pulse`, `/research`, `/studios`), research index (`/papers`), cross-product pricing (`/pricing`), trust/security page for Workforce (`/workforce/security`), careers skeleton, blog (MDX), contact form (Resend), newsletter signup via `/api/waitlist` with `product="newsletter"`.

## Tech Stack

- Next.js 14 (App Router), TypeScript, Tailwind CSS
- MDX for blog posts (static generation)
- Resend for contact form + waitlist + newsletter emails (via `/api/contact` and `/api/waitlist`)
- Vercel (auto-deploy on push to `main`)
- No external newsletter service — newsletter signups route through `/api/waitlist` with `product="newsletter"` and land in the same Resend inbox

## Project Structure (as shipped)

```
src/app/
├── page.tsx                  <- Homepage (Pulse-anchored V2 hero)
├── about/                    <- Founder + thesis (Amazon metrics table dropped)
├── careers/                  <- Hiring philosophy (not actively hiring)
├── contact/                  <- Contact form + Calendly
├── faq/                      <- General FAQ
├── pricing/                  <- Cross-product pricing overview (client component)
├── papers/                   <- Research papers index (5 papers)
├── privacy/                  <- Legal entity named
├── terms/                    <- Legal entity named
├── blog/                     <- Blog listing + [slug] MDX
├── pulse/                    <- Koovis Pulse landing (revenue anchor; samples above-the-fold)
├── research/                 <- WealthPilot Research landing (concrete sample-report preview)
├── studios/                  <- Koovis Studios landing (demo v2 status)
├── workforce/
│   ├── page.tsx              <- Koovis Workforce landing (trust signals strip + link to /security)
│   └── security/page.tsx     <- Trust Ladder + compliance roadmap (client component)
├── services/                 <- Legacy; 301 redirects to /workforce via next.config.mjs
├── products/                 <- Legacy; 301 redirects to /
└── api/
    ├── contact/              <- Resend email forward
    └── waitlist/             <- Resend email forward; accepts product=pulse|workforce|research|studios|wealthpilot|newsletter

src/components/
├── AnimateIn.tsx             <- Framer-motion scroll-triggered animation wrapper
├── Button.tsx                <- Primary/outline/ghost variants
├── CalendlyEmbed.tsx
├── ContactForm.tsx
├── Footer.tsx                <- Newsletter signup strip + 4-col grid + copyright
├── Navbar.tsx                <- Nav order: Pulse / Workforce / Research / Studios / Papers / Pricing / About
├── Providers.tsx             <- Theme provider + analytics
├── SectionLabel.tsx
├── SectionTitle.tsx
├── ThemeToggle.tsx
└── WaitlistForm.tsx          <- Accepts compact mode + customizable placeholder/button/success copy
```

### 301 Redirects (next.config.mjs)

- `/services*` → `/workforce`
- `/products` → `/`
- `/products/wealthpilot` → `/research`
- `/products/studios` → `/studios`
- `/products/pa` → `/workforce`

### Client-component pages

`/pricing` and `/workforce/security` use `"use client"` to bypass a Next.js 14 RSC serialization quirk with dynamic icon references in nested array maps. Both pages still statically prerender; the client directive just changes the hydration strategy.

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

### Canonical in koovis-hq (use MCP to update)
- **Blueprint:** `koovis-hq/projects/koovis-ai/BLUEPRINT.md` — Use MCP `update_blueprint_section()`
- **Decisions:** `koovis-hq/projects/koovis-ai/DECISIONS.md` — Use MCP `append_decision()`

### End-of-Session Protocol
Before ending any work session, call MCP `sync_from_conversation()` with:
- Any decisions made during the session
- Task status updates
- Blueprint changes
