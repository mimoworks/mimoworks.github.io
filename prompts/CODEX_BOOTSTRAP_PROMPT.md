# Codex bootstrap prompt

Read the repository root `AGENTS.md` first, then use the docs, content, and config files to implement the first version of the **mimoworks** website.

## Build requirements
- Use Astro + TypeScript + Tailwind CSS
- Build a static-first site compatible with GitHub Pages
- Create these routes:
  - `/`
  - `/lumofield/`
  - `/connect/`
  - `/about/`
  - `/contact/`
  - `/404.html`
- Use shared site shell and design tokens
- Use product-line themed variations without making the product lines feel like separate companies
- Lumofield must be the primary emphasis on the homepage
- mimo connect should be present but clearly secondary

## Data / content requirements
- Source content from `content/SITE_COPY.yml`
- Source design tokens from `config/brand-tokens.json`
- Respect route intent in `config/site-map.json`

## Content and design constraints
- No lorem ipsum
- No stock startup cliches
- No backend / auth / ecommerce
- Keep motion subtle
- Mobile-first and visually confident
- Wordmark-first branding is enough for v1

## Deliverables
1. working Astro site
2. responsive layout
3. accessible nav and footer
4. GitHub Pages deployment workflow
5. clear README with local dev and deploy instructions

## Approval boundary
Do not rename mimoworks, Lumofield, or mimo connect without explicit approval.
