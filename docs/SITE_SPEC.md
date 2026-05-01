# Site specification

## Platform

- Astro + TypeScript + Tailwind CSS
- Static-first output for GitHub Pages
- No backend, CMS, auth, or payments in current scope

## Route map

- `/` Home
- `/lumofield/`
- `/connect/`
- `/about/`
- `/contact/`
- `/404.html`

## Navigation

- Primary: Home, Lumofield, Connect, About, Contact
- Mobile: simple drawer/overlay
- Keep structure shared across page identities

## Shared site shell

- Shared header/footer, spacing, radius, button anatomy, and content container logic
- Identity variation comes from typography emphasis, imagery, density, CTA tone, and header mode
- Homepage must read as **umbrella/editorial studio**, not "Lumofield lite"

## Launch-state model

`connectMode = "hidden" | "teaser" | "public"`

Current default: `teaser`

Teaser means:

- Connect exists but remains secondary in main flow
- Homepage can include restrained "brewing" cues
- System remains ready for future promotion to `public` without major refactor

## Hero behavior (implemented direction)

- Mobile-first base layout
- Mobile hero order: image block, then text, then CTA
- Desktop hero enhancement: full-bleed background media with left text rail
- No page-level card wrapper
- Full-width sections with inner content containers

## Page structures

### Home (`/`) — mimoworks umbrella/editorial

1. Hero (umbrella framing)
2. What mimoworks makes
3. Lumofield spotlight
4. Selected Lumofield studies
5. Connect teaser (depends on `connectMode`)
6. Studio values / principles
7. Contact CTA

### Lumofield (`/lumofield/`) — primary product line

1. Line hero
2. What Lumofield is
3. Collection studies / first pieces
4. Placement story / design principles
5. Enquiry CTA

### Connect (`/connect/`) — secondary practical line

1. Line hero
2. Clear explanation
3. Use-case framing
4. Status (teaser/pilot/public based on `connectMode`)
5. Practical interest CTA

### About (`/about/`)

1. Umbrella overview
2. Making philosophy
3. How lines fit together
4. Current focus

## Contact page structure

- direct enquiry channels from `src/data/site.ts`
- optional form later
- optional WhatsApp later

## Content architecture

Store editable content in structured data files where possible.
Examples:

- site metadata
- nav links
- product line summaries
- call-to-action copy

- Runtime normalized source: `src/data/site.ts`
- Upstream editable references: `content/SITE_COPY.yml`, `config/*.json`

## Animation guidance

- subtle only
- fade / slide / reveal is enough
- no flashy parallax or heavy motion library required for v1

## SEO basics

Add per-page:

- title
- description
- canonical
- OG image placeholder
- reasonable heading structure

## Performance goals

- keep images optimized
- avoid heavy client-side JS
- prefer static rendering and progressive enhancement
