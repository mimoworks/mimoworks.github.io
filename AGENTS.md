# AGENTS.md

## Mission
Build a polished, static-first marketing site for **mimoworks**, with **Lumofield** as the primary live product line and **mimo connect** as a secondary / coming-soon line.

The website should:
- establish **mimoworks** as the umbrella studio / works brand
- make **Lumofield** feel warm, premium, quiet, and design-led
- acknowledge **mimo connect** without letting it visually overpower Lumofield
- stay easy to deploy on **GitHub Pages** now, while remaining easy to move to a custom domain later

## Current brand architecture
- **Umbrella brand:** mimoworks
- **Primary product line:** Lumofield
- **Secondary product line:** mimo connect (tentative name, not fully launched)

## Product line roles
### Lumofield
- ambient lamps and future home objects
- warm, minimal, calm, intentional
- consumer-facing, lifestyle-oriented
- should lead the homepage

### mimo connect
- NFC review stands and future connected physical tools
- practical, clear, quietly technical
- more B2B / utility oriented
- should appear as a secondary section or teaser, not as the main focus

## Design rules
### Shared shell across the whole site
Keep these consistent across pages:
- typography family
- spacing system
- nav and footer structure
- button style system
- grid and container widths
- interaction patterns

### Product-line differentiation
Do NOT make product lines feel like separate companies.
Instead, create themed variations within one system:
- **Lumofield:** warmer neutrals, softer imagery, more atmospheric copy
- **mimo connect:** cooler neutrals, clearer product framing, more utility-first copy

## Technical rules
- Static-first architecture only
- No server-rendered or server-only features
- No CMS for v1
- No auth, no backend, no payments yet
- Keep dependencies minimal
- Keep implementation compatible with GitHub Pages static deployment
- Prefer content/data files for editable text and product-line metadata
- Optimize for later addition of products and pages without rewriting the structure

## Recommended stack
- Astro
- TypeScript
- Tailwind CSS
- Static assets in repo

## Information architecture goals
Build these pages first:
- `/` Home
- `/lumofield/`
- `/connect/`
- `/about/`
- `/contact/`

Optional later:
- `/journal/`
- `/products/`
- `/process/`

## Content goals
The site should communicate:
1. mimoworks makes thoughtful objects and tools
2. Lumofield is the current main expression of that vision
3. mimo connect exists and is being developed
4. the founder values design, practicality, and quiet quality

## UX goals
- Fast loading
- Strong mobile experience first
- Premium-feeling but simple
- Clear path to inquiry / interest
- High visual confidence with low clutter

## Non-goals for v1
- Full ecommerce
- Product configurator
- Blog engine
- Analytics dashboard for mimo connect
- Multi-language support
- Heavy animation framework

## Accessibility and quality bar
- Semantic HTML
- Keyboard navigable
- Reasonable contrast
- Responsive from mobile to desktop
- Avoid decorative complexity that hurts clarity

## Coding style
- Keep components small and composable
- Avoid premature abstraction
- Use design tokens / config objects for colors, spacing, product-line themes
- Prefer explicit code over clever code

## Decision guardrails
Do NOT change these without explicit approval:
- umbrella brand name: mimoworks
- Lumofield as primary line
- mimo connect as secondary line
- static-first deployment target
- shared-shell / themed-variation design strategy
