# Site specification

## Tech recommendation

Use Astro + TypeScript + Tailwind CSS (static-first).

## Why

- static-first fits the current scope
- straightforward GitHub Pages deployment
- easy to maintain
- good component model without unnecessary app complexity

## Route map

- `/` Home
- `/lumofield/`
- `/connect/`
- `/about/`
- `/contact/`
- `/404.html`

## Navigation

### Primary nav

- Home
- Lumofield
- Connect
- About
- Contact

### Mobile nav

Simple drawer or overlay. Keep it minimal.

## Shared site shell

### Header

- mimoworks wordmark
- primary nav
- subtle CTA to Contact / Enquire

### Footer

- mimoworks short description
- quick links
- social links placeholder
- copyright

## Home page structure

1. Hero
2. What mimoworks makes
3. Lumofield spotlight
4. Selected Lumofield pieces or placeholders
5. Connect teaser
6. About / values
7. Contact CTA

## Hero behavior (implemented direction)

- Mobile-first base layout
- Mobile hero order: image block, then text, then CTA
- Desktop hero enhancement: full-bleed background media with left text rail
- No page-level card wrapper
- Full-width sections with inner content containers

## Lumofield page structure

1. Line hero
2. What Lumofield is
3. Featured pieces / collection preview
4. Design principles
5. Inquiry CTA

## Connect page structure

1. Line hero
2. Short explanation of what it is
3. Use cases
4. Coming soon / pilot status
5. Interest CTA

## About page structure

1. mimoworks overview
2. founder / making philosophy
3. how product lines fit together
4. current focus

## Contact page structure

Keep simple for v1:

- direct enquiry channels from `src/data/site.ts`
- optional form later
- optional WhatsApp later

## Content architecture recommendation

Store editable content in structured data files where possible.
Examples:

- site metadata
- nav links
- product line summaries
- call-to-action copy

Current implementation note:

- `src/data/site.ts` is the normalized runtime content source
- `content/SITE_COPY.yml` and config files remain editable upstream references

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
