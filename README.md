# mimoworks

Static-first marketing site for **mimoworks**, with **Lumofield** as the primary product line and **mimo connect** as a secondary in-development line.

## Stack

- Astro 6
- TypeScript
- Tailwind CSS 4
- GitHub Pages deployment via GitHub Actions

## Local Development

Install dependencies:

```bash
npm install
```

Run the local dev server:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Content Sources

The editable planning and content sources remain in the repo:

- `AGENTS.md`
- `docs/BRAND_SYSTEM.md`
- `docs/SITE_SPEC.md`
- `content/SITE_COPY.yml`
- `config/brand-tokens.json`
- `config/site-map.json`

The current Astro implementation uses normalized data in `src/data/site.ts`, sourced from those files. When copy or routes change, update the source files first, then mirror the launch-ready values into the TypeScript data module.

## Pages

- `/`
- `/lumofield/`
- `/connect/`
- `/about/`
- `/contact/`
- `/404.html`

## GitHub Pages

The site is configured for static output. Deployment is handled by `.github/workflows/deploy.yml`.

The current production domain is:

```text
mimoworks.app
```

For the current custom-domain setup, keep:

```text
SITE_URL=https://mimoworks.app
BASE_PATH=/
```

For a project site such as `https://<owner>.github.io/<repo>/`, set repository variables in GitHub:

```text
SITE_URL=https://<owner>.github.io
BASE_PATH=/<repo>/
```

Local development works at `/` because Astro uses the local dev server base automatically.

## Custom Domain

This repo includes `public/CNAME` with:

```text
mimoworks.app
```

In GitHub, configure the repository:

1. Go to `Settings` -> `Pages`.
2. Under `Custom domain`, enter `mimoworks.app`.
3. Save and wait for DNS verification.
4. Enable `Enforce HTTPS` once GitHub allows it.

At the DNS provider, configure the apex domain with GitHub Pages records:

```text
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
AAAA  @     2606:50c0:8000::153
AAAA  @     2606:50c0:8001::153
AAAA  @     2606:50c0:8002::153
AAAA  @     2606:50c0:8003::153
CNAME www   mimoworks.github.io
```

The `www` record lets GitHub redirect `www.mimoworks.app` to the apex domain once both variants are recognized.

## Placeholders to Replace

- Contact email in `src/data/site.ts`
- Instagram URL and handle in `src/data/site.ts`
- WhatsApp or direct messaging hook in `src/data/site.ts`
- Product photography or renders replacing the CSS visual placeholders
- Open Graph image in `public/og-placeholder.svg`
