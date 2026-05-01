# mimoworks

Static-first marketing site for **mimoworks**, with **Lumofield** as the primary line and **mimo connect** as a secondary brewing line.

## Stack

- Astro 6
- TypeScript
- Tailwind CSS 4
- GitHub Pages via GitHub Actions

## Quickstart

Install dependencies:

```bash
npm install
```

Install browser for smoke tests (one-time):

```bash
npx playwright install chromium
```

Run locally:

```bash
npm run dev
```

Run full checks:

```bash
npm run check
```

## Scripts

- `npm run format`
- `npm run format:check`
- `npm run lint`
- `npm run typecheck`
- `npm run build`
- `npm run test:smoke`
- `npm run check`

## Routes

- `/`
- `/lumofield/`
- `/connect/`
- `/about/`
- `/contact/`
- `/404.html`

## Source of truth

- Architecture, guardrails, product-direction constraints: `AGENTS.md`
- Workflow and quality expectations: `CONTRIBUTING.md`
- Brand/product language support: `docs/BRAND_SYSTEM.md`
- Page/IA intent support: `docs/SITE_SPEC.md`
- Deployment instructions: `docs/DEPLOYMENT.md`
- Current normalized implementation data: `src/data/site.ts`
- Editable content/tokens/routes inputs:
  - `content/SITE_COPY.yml`
  - `config/brand-tokens.json`
  - `config/site-map.json`

Historical notes are kept in `docs/archive/` and are non-authoritative.

## Deployment

Two workflows are used:

- `.github/workflows/quality.yml` for pull request and push quality checks
- `.github/workflows/deploy.yml` for GitHub Pages deployment

Current production domain:

```text
https://mimoworks.app
```

GitHub repository variables:

```text
SITE_URL=https://mimoworks.app
BASE_PATH=/
```

For project-site deployment under a subpath:

```text
SITE_URL=https://<owner>.github.io
BASE_PATH=/<repo>/
```

## Remaining placeholders

- Contact channel details in `src/data/site.ts`
- Final product photography replacing placeholder assets
- OG social preview image in `public/og-placeholder.svg`
