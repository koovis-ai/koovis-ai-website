# Koovis AI Website

## What This Project Is

Marketing website for Koovis AI at https://www.koovis.ai. Built with Next.js 14 (App Router), deployed via Vercel on git push.

**Positioning (current + pending):** The site is being refreshed from its original consulting-leadgen framing (per 2026-02-23 reorientation) to a **4-product funnel**: Koovis Workforce, Koovis Pulse, WealthPilot Research, and Koovis Studios. Consulting is deprioritized per 2026-04-19 capital posture decision ("consulting = distraction from product"). The website refresh is Phase 3 of the master transition plan.

**Canonical spec for the refresh:** `koovis-hq/projects/koovis-ai-website/WEBSITE_REFRESH_SPEC.md`

**Unified rename:** All new content uses "Koovis Workforce" (never "Koovis PA"). See `koovis-hq/projects/koovis-pa/TRANSITION_PLAN.md` for file-by-file status.

Features today: blog (MDX), contact form (Resend email), newsletter signups (Beehiiv API). Refresh adds dedicated product landing pages (/workforce, /pulse, /research, /studios) + /papers index.

## Tech Stack

- Next.js 14 (App Router), TypeScript, Tailwind CSS
- MDX for blog posts (static generation)
- Resend for contact form emails
- Beehiiv API for newsletter signups
- Vercel (auto-deploy on push to main)

## Project Structure

```
src/app/
├── page.tsx           <- Homepage (refresh pending per WEBSITE_REFRESH_SPEC)
├── about/             <- About page (refresh pending)
├── services/          <- Services page (to be deprecated → 301 redirect to /workforce)
├── products/          <- Products page (to be replaced with product-specific pages)
├── blog/              <- Blog listing + [slug] pages
├── contact/           <- Contact form
└── api/               <- API routes (contact, newsletter)

Target post-refresh (per WEBSITE_REFRESH_SPEC.md):
├── workforce/         <- NEW: Koovis Workforce landing (autonomous AI workforce)
├── pulse/             <- NEW: Koovis Pulse landing (Indian-language AI UGC)
├── research/          <- NEW: WealthPilot Research landing (ablation-first equity research)
├── studios/           <- NEW: Koovis Studios landing (AI pre-viz for Telugu cinema)
├── papers/            <- NEW: Unified research paper index
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

### Canonical in koovis-hq (use MCP to update)
- **Blueprint:** `koovis-hq/projects/koovis-ai/BLUEPRINT.md` — Use MCP `update_blueprint_section()`
- **Decisions:** `koovis-hq/projects/koovis-ai/DECISIONS.md` — Use MCP `append_decision()`

### End-of-Session Protocol
Before ending any work session, call MCP `sync_from_conversation()` with:
- Any decisions made during the session
- Task status updates
- Blueprint changes
