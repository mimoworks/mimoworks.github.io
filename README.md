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

For a GitHub Pages user or org site such as `https://mimoworks.github.io/`, keep:

```text
SITE_URL=https://mimoworks.github.io
BASE_PATH=/
```

For a project site such as `https://<owner>.github.io/<repo>/`, set repository variables in GitHub:

```text
SITE_URL=https://<owner>.github.io
BASE_PATH=/<repo>/
```

Local development works at `/` because Astro uses the local dev server base automatically.

## Custom Domain Later

When moving to a custom domain:

1. Add the domain in GitHub Pages settings.
2. Set the repository variable `SITE_URL` to the full custom domain, for example `https://mimoworks.com`.
3. Set `BASE_PATH=/`.
4. Add a `public/CNAME` file only when the domain is confirmed.
5. Re-run the GitHub Pages workflow.

## Placeholders to Replace

- Contact email in `src/data/site.ts`
- Instagram URL and handle in `src/data/site.ts`
- WhatsApp or direct messaging hook in `src/data/site.ts`
- Product photography or renders replacing the CSS visual placeholders
- Open Graph image in `public/og-placeholder.svg`
