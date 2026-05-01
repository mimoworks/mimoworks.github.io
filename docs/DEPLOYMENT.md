# Deployment

## Current strategy

Deploy as a static Astro site on GitHub Pages.

## Hosting strategy

### Current production domain

Use the custom apex domain:

- `https://mimoworks.app/`

The GitHub Pages fallback domain remains:

- `https://mimoworks.github.io/`

## Why GitHub Pages now

- free / low-friction
- enough for a static marketing site
- easy to connect to a custom domain later

## Deployment implementation

- Use GitHub Actions.
- Run quality checks in `.github/workflows/quality.yml`.
- Build and deploy in `.github/workflows/deploy.yml`.
- In GitHub `Settings` -> `Pages`, set `Build and deployment` source to `GitHub Actions`.
- Do not use `Deploy from a branch`; that path runs Jekyll against Astro source files.

## Base-path config

Set these repository variables in GitHub:

```text
SITE_URL=https://mimoworks.app
BASE_PATH=/
```

For project-site deployment under a subpath:

```text
SITE_URL=https://<owner>.github.io
BASE_PATH=/<repo>/
```

## Custom domain setup

The repo includes `public/CNAME` with `mimoworks.app`.

In GitHub:

1. Open `mimoworks/mimoworks.github.io`.
2. Go to `Settings` -> `Pages`.
3. Set `Custom domain` to `mimoworks.app`.
4. Wait for DNS verification.
5. Enable `Enforce HTTPS` when available.

At the DNS provider:

- Add four `A` records for `@`:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- Add four `AAAA` records for `@`:
  - `2606:50c0:8000::153`
  - `2606:50c0:8001::153`
  - `2606:50c0:8002::153`
  - `2606:50c0:8003::153`
- Add `CNAME www -> mimoworks.github.io`.
- Remove any conflicting parked-domain, forwarding, or default records for `@` or `www`.

## Keep in mind

- Root-path assumptions can break if switching back to a project subpath later.
- Keep `BASE_PATH=/` for `mimoworks.app`.
- Keep `SITE_URL=https://mimoworks.app` for canonical and Open Graph URLs.
