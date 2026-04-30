# Deployment plan

## Recommended path now
Deploy as a static site on GitHub Pages.

## Hosting strategy
### Option A: user / org site
If you control a GitHub user or org named `mimoworks`, use that and publish at:
- `https://mimoworks.github.io/`

### Option B: project site
If not, start with a normal repo and publish under your existing GitHub account, for example:
- `https://<your-username>.github.io/mimoworks/`

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

## When to move to custom domain
Move after:
- brand name is locked
- site structure is stable enough
- you are ready to share publicly more broadly

## Later domain plan
- register a domain such as `mimoworks.com` if available
- connect GitHub Pages custom domain
- verify domain in GitHub
- turn on HTTPS

## Keep in mind
- root-path assumptions can break if you move from subpath to root later
- write the site in a way that respects configured base URLs
