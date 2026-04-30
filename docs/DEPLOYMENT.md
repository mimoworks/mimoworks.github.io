# Deployment plan

## Recommended path now
Deploy as a static site on GitHub Pages.

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
- use GitHub Actions
- build Astro site
- publish generated static output to Pages

## Important config note
If using a project site under a subpath, configure the Astro site with the correct `site` and `base` values.
If later moving to a root custom domain, update those values.

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
- root-path assumptions can break if switching back to a project subpath later
- keep `BASE_PATH=/` for `mimoworks.app`
- keep `SITE_URL=https://mimoworks.app` for canonical and Open Graph URLs
