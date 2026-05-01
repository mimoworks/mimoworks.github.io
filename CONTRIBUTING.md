# CONTRIBUTING.md

## Goal

Keep the mimoworks site clean, maintainable, and safe to evolve with AI assistance.

## Local workflow

Install dependencies:

npm install

Install browser for smoke tests (one-time):

npx playwright install chromium

Run locally:
npm run dev

Run the full quality check before pushing:
npm run check

## Required scripts

The repo should support these commands:

npm run format
npm run format:check
npm run lint
npm run typecheck
npm run build
npm run test:smoke
npm run check

## Expectations for every change

- Keep changes minimal and cohesive
- Do not rewrite unrelated files
- Do not introduce dead code
- Do not leave placeholder/dev text in public-facing pages
- Preserve Lumofield as the primary line
- Keep Connect secondary and restrained
- Maintain responsive gutters and clean scrolling behavior

## When changing layout

Also verify:

- no horizontal overflow
- no content hidden under sticky header
- mobile gutters remain consistent
- desktop spacing still feels intentional

Recommended widths:
320, 360, 375, 390, 430, 768, 1024, 1440

## When adding dependencies

Only add a dependency if:

- it clearly improves maintainability or quality
- it meaningfully reduces manual work
- the same outcome is not already available with current tooling

## Pull request / change summary format

Every change should clearly state:

- what changed
- why it changed
- which files changed
- what was verified
- what still needs follow-up

## AI-specific rules

When using Codex or another AI assistant:

- inspect before editing
- avoid blind rewrites
- preserve repo structure unless necessary
- run checks before considering the task complete
