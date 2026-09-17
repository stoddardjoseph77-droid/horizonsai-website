# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server (Next.js)
- `npm run build` — Production build
- `npm run lint` — ESLint

## Architecture

This is a **Next.js 14 (Pages Router via App Router)** marketing site for HorizonsAI, a CRE deal intelligence product. It uses TypeScript, Tailwind CSS, and Framer Motion.

### Routing

- `/` redirects to `/commercial` (the primary landing page)
- `/commercial` — Commercial real estate deal intelligence page
- `/real-estate` — Real estate agency automation page
- `/book-a-call` — Booking page

All pages share a root layout (`app/layout.tsx`) with `Navbar` and `Footer`.

### Key Directories

- `components/` — All UI components (flat, no nesting). Includes interactive mockups (DashboardMockup, ChatMockup, etc.) and section components.
- `lib/constants.ts` — All marketing copy, FAQ content, stats, and site config (SITE object with contact info, Calendly URL).
- `lib/utils.ts` — Shared utilities.
- `hooks/useIsMobile.ts` — Mobile detection hook used for conditional rendering/animation.

### Design System

Defined in `tailwind.config.ts`:
- **Dark theme** — `surface` (#0B1622), `surface-raised`, `surface-overlay`
- **Text** — `gold` (light gray/white tones), `muted` (#7B8FA3)
- **Accent** — green (#10B981) for CTAs and highlights
- **Severity colors** — critical/high/medium/low for deal scoring UI
- **Fonts** — Geist Sans (`font-sans`) and Geist Mono (`font-mono`)
- Body has `noise-overlay` class for texture effect

### External Dependencies

- **Mapbox GL** (`react-map-gl`) — Used in `DemoMapView`, `OpportunityMapView`, `OpportunityMapViewMobile` for property maps. Requires `NEXT_PUBLIC_MAPBOX_TOKEN` in `.env.local`.
- **Framer Motion** — Animation throughout; optimized via `experimental.optimizePackageImports` in next.config.
- **Phosphor Icons** — Icon library used across components.
- Deployed on **Vercel**.
