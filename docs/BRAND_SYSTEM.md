# Brand system

## Shared brand spine

The site is one company with three expressions. These stay shared:

- header and footer shell
- spacing discipline and container logic
- border radius system
- button anatomy and interaction rhythm
- UI/body typography system
- restrained, calm visual tone

Identity must not be differentiated by color alone. Each page identity also differs by:

- imagery direction
- typography emphasis
- section density
- CTA tone
- header mode

## Font system (shared)

- UI/body: Inter (`/fonts/inter/inter.woff2`)
- Display/headings: Fraunces (`/fonts/fraunces/fraunces.woff2`)
- Runtime tokens:
  - `--font-ui`
  - `--font-display`

Do not load runtime fonts from Google CDN.

## Page identities

### mimoworks (umbrella)

- Role: editorial umbrella and studio framing
- Tone: thoughtful, restrained, refined, broader than a single product line
- Typography emphasis: serif-led key statements, balanced with UI sans
- Imagery: editorial still life, sculptural objects, studio mood
- Header mode: overlay on hero pages
- CTA tone: explore, discover, understand the studio
- Suggested sections: `BrandExpressionsSection`, `StudioPrinciplesBand`

### Lumofield (primary line)

- Role: warm product-line world and collection framing
- Tone: intimate, tactile, quiet, sensory
- Typography emphasis: strongest serif presence
- Imagery: lamp-led domestic placements (bedside, shelf, desk), evening glow
- Header mode: overlay on hero pages
- CTA tone: enquire, view collection, express interest
- Suggested sections: `CollectionStudiesGrid`, `PlacementStorySection`

### Connect (secondary line)

- Role: practical business-oriented tools
- Tone: clear, useful, low-friction, trustworthy
- Typography emphasis: mostly sans-led, serif used sparingly
- Imagery: counter/reception/retail/hospitality context, product-in-use
- Header mode: solid
- CTA tone: request info, pilot, business contact
- Suggested sections: `BenefitsRow`, `UseCaseGrid`

## Launch-state model

`connectMode` controls how Connect appears in public flow:

- `hidden`
- `teaser`
- `public`

Current default is `teaser`.

In teaser mode:

- Connect stays secondary in the main flow
- Homepage can hint that something is brewing
- Architecture remains ready to promote Connect to public later

## Token source of truth

`config/brand-tokens.json` is the source for:

- runtime page themes
- identity intent palettes and roles
- font token references
- connect launch-state defaults
