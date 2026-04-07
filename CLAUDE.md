# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # static export to /out
npm run lint     # ESLint
node scripts/optimize-images.mjs  # convert assets/Bilder → public/images/gallery as WebP
```

No test framework is configured.

## Architecture

**Static Next.js site** (`output: 'export'`) — no server-side features, no API routes, no ISR. The build produces a fully static `/out` directory.

- **Next.js 16 App Router** with React 19 and React Compiler enabled (`reactCompiler: true`)
- **Tailwind CSS v4** — configured entirely via `@theme inline` in [src/app/globals.css](src/app/globals.css), no `tailwind.config.js`
- **`basePath`** is set from `NEXT_PUBLIC_BASE_PATH` env var; all image `src` paths in page components must be prefixed with `process.env.NEXT_PUBLIC_BASE_PATH || ""`
- Images use `unoptimized: true` (required for static export) — all images live in `public/` as `.webp`

## Design System

Custom color tokens and reusable CSS classes are defined in [src/app/globals.css](src/app/globals.css):

- **Colors**: `forest`, `leaf`, `sage`, `cream`, `earth`, `bark`, `soft-grey`, `lavender` — use these Tailwind utilities everywhere
- **Fonts**: `--font-heading` (Playfair Display, serif) for headings, `--font-body` (Inter) for body text — loaded via `next/font/google` in layout
- **Utility classes**: `.btn-primary`, `.btn-outline`, `.card`, `.section-padding`, `.wave-divider`, `.animate-fade-in-up`

## Pages & Routing

German-language site for Maria M. Kettenring (aromatherapy/nature author). Routes map directly to `src/app/[slug]/page.tsx`:

`/` · `/ueber-mich` · `/buecher` · `/seminare` · `/waldbaden` · `/aromatherapie` · `/impressionen` · `/impressum` · `/datenschutz`

Shared layout wraps all pages with `<Navbar>`, `<Footer>`, and `<CookieBanner>`. Navbar is `"use client"` (mobile toggle state); all pages are Server Components by default.

## Image Optimization Script

`scripts/optimize-images.mjs` uses `sharp` to batch-convert raw images from `assets/Bilder/` into `public/images/gallery/` as WebP (max 1600px wide, quality 80) and writes a `manifest.json`. Run this when adding new gallery photos.
