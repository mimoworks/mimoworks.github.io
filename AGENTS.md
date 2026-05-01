# AGENTS.md

## Mission

Build and maintain a polished, static-first marketing site for **mimoworks**, with **Lumofield** as the primary live product line and **mimo connect** as a secondary / brewing line.

The site should:

- establish **mimoworks** as the umbrella studio / works brand
- make **Lumofield** feel warm, premium, quiet, and design-led
- acknowledge **mimo connect** without letting it visually overpower Lumofield
- stay easy to deploy on **GitHub Pages**
- stay easy for a solo founder to maintain

## Non-negotiable product and brand rules

Do NOT change these without explicit approval:

- umbrella brand name: mimoworks
- Lumofield as the primary line
- mimo connect as the secondary line
- static-first deployment target
- shared-shell / themed-variation design strategy

## Product line roles

### Lumofield

- ambient lamps and future home objects
- warm, minimal, calm, intentional
- consumer-facing and lifestyle-oriented
- should lead the homepage and brand perception

### mimo connect

- NFC review stands and future connected physical tools
- practical, clear, quietly technical
- more B2B / utility oriented
- should appear as a secondary section or teaser, not as the main focus

## Launch-state rule

- `connectMode` is currently **teaser** by default (`hidden | teaser | public`)
- In teaser mode, Connect stays visible but secondary in the main public flow

## Technical constraints

- Static-first architecture only
- No CMS for v1
- No auth
- No backend
- No payments yet
- No server-rendered or server-only features
- Keep dependencies minimal
- Keep implementation compatible with GitHub Pages static deployment
- Prefer content/data files for editable text and metadata

## Current core pages

- `/`
- `/lumofield/`
- `/connect/`
- `/about/`
- `/contact/`

## Quality bar

Every change must keep the site:

- fast
- accessible
- responsive
- visually restrained
- maintainable
- free of obvious dead code and placeholder/dev scaffolding

## Required quality gates

Before a task is considered done, all of these must pass:

- `npm run format:check`
- `npm run lint`
- `npm run typecheck`
- `npm run build`
- `npm run test:smoke`

If a task changes layout or responsive behavior, also verify at common widths:

- 320
- 360
- 375
- 390
- 430
- 768
- 1024
- 1440

## Coding rules

- Keep components small and readable
- Prefer explicit code over clever code
- Avoid premature abstraction
- Do not create generic abstractions unless there are at least 2 to 3 real uses
- Keep presentational components mostly dumb
- Keep page composition and content decisions in pages or data/content files
- Avoid `any` unless clearly justified
- Remove unused imports, props, variables, and dead code
- Do not leave commented-out legacy code behind
- Keep naming consistent and descriptive

## Styling rules

- Preserve the existing design system and shell
- Keep one shared shell with three page identities:
  - mimoworks = editorial umbrella
  - Lumofield = warm product-line focus
  - Connect = practical business-oriented clarity
- Keep typography, spacing, radius, border, and container logic consistent
- Avoid one-off pixel nudges unless clearly justified
- Fix layout issues structurally, not with hacks
- No horizontal overflow
- No important content hidden under sticky headers
- Mobile gutters must be consistent across all major sections
- Keep visual hierarchy calm, premium, and product-forward

## Content rules

- Shared copy should live in structured content/data files where practical
- Do not scatter repeated labels and CTA text across many files
- Public-facing copy must not include placeholder/dev language
- Keep copy concise, restrained, and brand-consistent
- Lumofield should feel like the main event
- Connect should read as secondary, brewing, and intentional

## Dependency rules

- Do not add dependencies unless they provide clear maintenance value
- Prefer built-in platform capabilities and simple tooling
- Keep the toolchain understandable for a solo founder
- Avoid adding libraries for trivial tasks

## Testing rules

Minimum smoke coverage should include:

- homepage loads
- Lumofield page loads
- contact page loads
- key navigation links resolve
- hero CTA exists on homepage
- no obvious horizontal overflow on a common mobile width

## AI-assisted change protocol

For every AI-assisted change:

1. Inspect the existing repo and affected files first
2. Change only the files needed for the task
3. Do not rewrite unrelated files
4. Preserve architecture unless there is a strong reason to change it
5. Run all required quality gates
6. Summarize:
   - what changed
   - which files changed
   - why those changes were made
   - any follow-up work still needed

## Done means

A task is only done when:

- the requested change is implemented
- the site still matches brand direction
- the required checks pass
- no obvious regressions remain
- the result is understandable and maintainable by a solo founder
