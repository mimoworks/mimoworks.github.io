import brandTokens from '../../config/brand-tokens.json';
import siteMap from '../../config/site-map.json';

export type ThemeName = keyof typeof brandTokens.themes;
export type ConnectMode = 'hidden' | 'teaser' | 'public';
export type LumofieldModularityMode = 'hidden' | 'teaser' | 'public';

export interface ImageAsset {
  src: string;
  alt: string;
  caption?: string;
}

export const tokens = brandTokens;

const connectModeDefault =
  brandTokens.launch?.connectMode?.default ?? brandTokens.site?.connectMode?.default;

export const connectMode: ConnectMode =
  connectModeDefault === 'hidden' || connectModeDefault === 'public'
    ? connectModeDefault
    : 'teaser';

export const isConnectPublic = connectMode === 'public';
export const showConnectTeaser = connectMode !== 'hidden';
export const lumofieldModularityMode: LumofieldModularityMode = 'teaser';
export const showAboutPage = false;
export const homeLaunchSections = {
  showExpressions: true,
  showSelectedPieces: false,
  showValues: false,
} as const;

export const siteMeta = {
  brand: 'mimoworks',
  title: 'mimoworks',
  description:
    'An editorial product studio shaping thoughtful objects and practical tools under one calm brand system.',
  tagline: 'Thoughtful objects and tools.',
  ogImage: '/og-placeholder.svg',
};

const routeByName = new Map(siteMap.routes.map((route) => [route.name, route.path]));

const rawNavItems = siteMap.navigation
  .map((name) => ({
    label: name,
    href: routeByName.get(name) ?? '/',
  }))
  .filter((item) => item.label !== 'Home');

export const navItems = rawNavItems.filter((item) =>
  item.label === 'Connect'
    ? isConnectPublic
    : item.label === 'About'
      ? showAboutPage
      : true,
);

export const footerLinks = rawNavItems.filter((item) => {
  if (item.label === 'Connect') {
    return isConnectPublic;
  }
  if (item.label === 'About') {
    return showAboutPage;
  }
  return true;
});

export const visualAssets = {
  bedside: {
    src: '/images/placeholders/lumofield-bedside.svg',
    alt: 'Compact warm bedside lamp on a wooden table.',
  },
  shelf: {
    src: '/images/placeholders/lumofield-shelf.svg',
    alt: 'Low warm shelf light beside books and ceramic forms.',
  },
  desk: {
    src: '/images/placeholders/lumofield-desk.svg',
    alt: 'Soft ambient lamp on a desk with a notebook and pencil.',
  },
  lumofieldWhatIsIt: {
    src: '/images/hero/lumofield-whatisit.png',
    alt: 'Lumofield lamp in a warm home setting, showing the quiet object scale.',
  },
  lumofieldHome: {
    src: '/images/hero/lumofield-whatisit.png',
    alt: 'Lumofield lamp in a warm home interior.',
  },
  connectHero: {
    src: '/images/placeholders/connect-counter.svg',
    alt: 'Small NFC review stand on a clean retail counter.',
    caption: 'Quietly in development.',
  },
  studio: {
    src: '/images/placeholders/studio-objects.svg',
    alt: 'Warm home objects and practical connected tools arranged together.',
    caption: 'One studio, two expressions.',
  },
  contactHero: {
    src: '/images/hero/mimoworks-hero.png',
    alt: 'Warm mimoworks still-life scene for contact page header.',
  },
} satisfies Record<string, ImageAsset>;

export const footerContent = {
  description:
    'A small product studio for warm home objects and quietly useful physical tools.',
  note: 'Product interest, collaborations, and pilot conversations are welcome through the contact page.',
};

export const contactChannels = [
  {
    label: 'Email',
    value: 'mimo.works.wonders@gmail.com',
    note: 'Best for Lumofield interest, collaborations, and mimo connect pilot conversations.',
    href: 'mailto:mimo.works.wonders@gmail.com',
    linkLabel: 'Email mimoworks',
  },
  {
    label: 'Instagram',
    value: 'Coming soon',
    note: 'The public Instagram handle will be added soon.',
  },
  {
    label: 'Lumofield interest',
    value: 'First collection enquiries',
    note: 'For early interest in lamps, home objects, styling, or small-batch collaboration.',
  },
  {
    label: 'mimo connect pilots',
    value: 'Practical counter tools',
    note: 'For review stands, tap-to-action objects, and focused business pilot conversations.',
  },
  {
    label: 'Studio collaborations',
    value: 'Objects, spaces, and launches',
    note: 'For thoughtful partnerships where physical products and quiet utility meet.',
  },
];

export const homeContent = {
  hero: {
    eyebrow: 'mimoworks',
    title: 'Thoughtful objects and tools.',
    body: 'An umbrella studio building quiet home objects and practical physical tools with one shared language.',
    primaryCta: { label: 'Explore Lumofield', href: '/lumofield/' },
    secondaryCta: { label: 'View Connect', href: '/connect/' },
  },
  intro: {
    eyebrow: 'Studio framing',
    title: 'One company, distinct expressions.',
    body: 'mimoworks is a studio-led umbrella. Lumofield carries the warm object world. mimo connect develops practical utility objects with a quieter business lens.',
    cards: [
      {
        eyebrow: 'Primary line',
        title: 'Lumofield is the lead expression.',
        body: 'Lamp-led studies and warm home objects anchor the current public face of the studio.',
        href: '/lumofield/',
        linkLabel: 'See Lumofield',
        theme: 'lumofield' as const,
      },
      {
        eyebrow: 'Future branch',
        title: 'Something is brewing.',
        body: 'A practical connected line is developing in the background for business-facing physical tools.',
        href: '/connect/',
        linkLabel: 'View the note',
        theme: 'connect' as const,
      },
    ],
  },
  expressions: {
    eyebrow: 'Brand expressions',
    title: 'Two lines, one studio discipline.',
    body: 'Different moods, same standards: restraint, practicality, and clear object purpose.',
    items: [
      {
        title: 'Lumofield',
        body: 'Warm and intimate. Domestic placement and atmosphere lead each object decision.',
        theme: 'lumofield' as const,
      },
      {
        title: 'mimo connect',
        body: 'Lighter and practical. Utility, business context, and low-friction use come first.',
        theme: 'connect' as const,
      },
    ],
  },
  lumofield: {
    eyebrow: 'Primary product world',
    title: 'Lumofield leads the current launch.',
    subtitle: 'The first studies focus on bedside, shelf, and desk placement stories.',
    body: 'Lumofield is the strongest current expression: intimate lighting objects and warm material moods designed for lived spaces.',
    cta: { label: 'Visit Lumofield', href: '/lumofield/' },
    points: ['Bedside glow', 'Shelf atmosphere', 'Desk-side calm'],
  },
  selected: {
    eyebrow: 'Collection studies',
    title: 'A focused set of first objects.',
    body: 'The launch direction stays intentionally narrow: fewer pieces, clearer mood, stronger placement logic.',
  },
  connect: {
    eyebrow: 'Quietly in development',
    title: 'mimo connect',
    subtitle: 'Something is brewing.',
    body: 'A quieter connected line is being shaped in the background.',
    cta: { label: 'View connect note', href: '/connect/' },
  },
  values: {
    eyebrow: 'Studio principles',
    title: 'Editorial restraint, practical intent.',
    items: [
      'Objects with clear placement',
      'Calm surfaces over visual noise',
      'Practical value without clutter',
    ],
  },
  contact: {
    title: 'Start a studio conversation.',
    body: 'Share interest in Lumofield, collaboration ideas, or early practical use cases for connected objects.',
    cta: { label: 'Contact mimoworks', href: '/contact/' },
  },
};

export const lumofieldContent = {
  hero: {
    eyebrow: 'lumofield',
    title: 'Warm light, quiet form.',
    body: 'An intimate object line shaped around glow, placement, and everyday evening rituals.',
    primaryCta: { label: 'Enquire', href: '/contact/' },
  },
  overview: {
    eyebrow: 'What it is',
    title: 'A warm ambient lamp made for real rooms.',
    body: 'Lumofield begins with one compact lamp designed to live comfortably on bedside tables, shelves, and desks.',
    note: 'It is easy to place, easy to live with, and shaped to bring calm light into everyday evening routines.',
    points: [
      'Soft warm glow',
      'Compact 150 mm form',
      'Built for bedside, shelf, and desk',
    ],
  },
  atGlance: {
    eyebrow: 'At a glance',
    title: 'Practical details, kept simple.',
    body: 'A quick proof row for fit, compatibility, and everyday use.',
    points: [
      '3D-printed body',
      'CE-certified cordset',
      'E14 bulb compatible',
      'Tool-free top and base swapping',
      'Approx. 150 × 150 × 150 mm',
      'Warm bulb recommended',
    ],
    note: 'Cord dimming is not built in. Compatible smart bulbs can be used. Max wattage should follow local Singapore electrical guidance.',
  },
  contexts: {
    eyebrow: 'Where it belongs',
    title: 'Designed for real surfaces and evening routines.',
    body: 'Lumofield is built around three practical placements rather than one generic lamp idea.',
    items: [
      {
        title: 'Bedside',
        body: 'Low warm light for winding down, softer waking, and calmer room edges.',
      },
      {
        title: 'Shelf',
        body: 'A sculptural glow that sits comfortably with books, ceramics, and collected objects.',
      },
      {
        title: 'Desk',
        body: 'Ambient support for focused work where presence matters more than harsh output.',
      },
    ],
  },
  modularityTeaser: {
    eyebrow: 'A modular direction',
    title: 'Swappable tops and bases, brewing quietly.',
    body: 'Lumofield is being shaped as an open mix-and-match system. The first lamp comes first; more pairings will follow.',
    cta: { label: 'Ask about future pairings', href: '/contact/' },
  },
  compose: {
    eyebrow: 'Compose your light',
    title: 'Choose a top and a base.',
    body: 'A preview system for future pairings when modularity moves to public mode.',
    tops: [
      {
        id: 'soft',
        label: 'Soft dome',
        description: 'A gentler silhouette for softer room mood.',
      },
      {
        id: 'wide',
        label: 'Wide shade',
        description: 'A broader top for lower, calmer spread.',
      },
      {
        id: 'tapered',
        label: 'Tapered shade',
        description: 'A tighter silhouette with a more sculptural stance.',
      },
    ],
    bases: [
      {
        id: 'pebble',
        label: 'Pebble base',
        description: 'Rounded and softer in presence.',
      },
      {
        id: 'column',
        label: 'Column base',
        description: 'Taller and more architectural.',
      },
    ],
    combinations: [
      {
        id: 'soft-pebble',
        top: 'soft',
        base: 'pebble',
        title: 'Bedside calm',
        body: 'A softer silhouette for nightstands and slower evening routines.',
        meta: 'Soft dome + pebble base',
        image: visualAssets.bedside,
      },
      {
        id: 'soft-column',
        top: 'soft',
        base: 'column',
        title: 'Shelf glow',
        body: 'A taller stance that reads well beside books and smaller objects.',
        meta: 'Soft dome + column base',
        image: visualAssets.shelf,
      },
      {
        id: 'wide-pebble',
        top: 'wide',
        base: 'pebble',
        title: 'Low spread',
        body: 'A broader top that creates gentle ambient spread across lower surfaces.',
        meta: 'Wide shade + pebble base',
        image: visualAssets.desk,
      },
      {
        id: 'wide-column',
        top: 'wide',
        base: 'column',
        title: 'Desk atmosphere',
        body: 'A more architectural pairing for quieter desks and focused work.',
        meta: 'Wide shade + column base',
        image: visualAssets.shelf,
      },
      {
        id: 'tapered-pebble',
        top: 'tapered',
        base: 'pebble',
        title: 'Compact warmth',
        body: 'A tapered silhouette that feels neat, calm, and easy to place.',
        meta: 'Tapered shade + pebble base',
        image: visualAssets.bedside,
      },
      {
        id: 'tapered-column',
        top: 'tapered',
        base: 'column',
        title: 'Sculptural height',
        body: 'A more vertical pairing for shelves, corners, and calmer statement placement.',
        meta: 'Tapered shade + column base',
        image: visualAssets.desk,
      },
    ],
  },
  contact: {
    title: 'Interested in the first Lumofield lamp?',
    body: 'Share your room, surface, or use context and we can guide the right first fit.',
    cta: { label: 'Enquire about Lumofield', href: '/contact/' },
  },
};

export const connectContent = {
  hero: {
    eyebrow: 'mimo connect',
    title: 'Practical connected tools, quietly developing.',
    body: 'A cleaner utility branch for tap-and-scan actions in real business spaces.',
    primaryCta: { label: 'Request information', href: '/contact/' },
  },
  overview: {
    eyebrow: 'What it is',
    title: 'A practical business-facing branch.',
    body: 'mimo connect focuses on physical prompts that make simple business actions faster and clearer.',
  },
  status: {
    title: 'Current launch state: teaser',
    body: 'The line is visible and evolving, with early pilots around NFC stands and focused tap-to-action objects.',
  },
  benefits: {
    title: 'Why it is useful',
    items: [
      {
        title: 'Faster guest action',
        body: 'Clear physical prompts reduce friction at counters and reception points.',
      },
      {
        title: 'Cleaner business touchpoints',
        body: 'Compact objects keep key actions visible without visual clutter.',
      },
      {
        title: 'Simple pilot setup',
        body: 'Early deployments are scoped, practical, and easy to test in live spaces.',
      },
    ],
  },
  useCases: {
    title: 'Early use cases',
    items: [
      {
        title: 'Review stands',
        body: 'A simple counter object that helps customers leave feedback without searching.',
      },
      {
        title: 'Tap-to-contact displays',
        body: 'A small physical prompt for opening a profile, contact card, or booking link.',
      },
      {
        title: 'Branded action points',
        body: 'Focused scan-and-tap tools for studios, clinics, shops, and front desks.',
      },
    ],
  },
  contact: {
    title: 'Planning a pilot or practical use case?',
    body: 'Share your business context, surface location, and the one action you want to make easier.',
    cta: { label: 'Request connect information', href: '/contact/' },
  },
};

export const aboutContent = {
  hero: {
    eyebrow: 'About',
    title: 'About mimoworks',
    body: 'mimoworks is a small umbrella studio for thoughtful physical products and useful tools.',
  },
  story: {
    eyebrow: 'The approach',
    title: 'Build quietly. Keep things useful.',
    body: 'The studio is shaped around practical ideas, quiet quality, and a shared design system that lets each product line have its own expression without drifting away from mimoworks.',
  },
  lines: [
    {
      title: 'Lumofield',
      body: 'The current focus: warm ambient lamps and future home objects with a calmer, more atmospheric voice.',
      theme: 'lumofield' as const,
    },
    {
      title: 'mimo connect',
      body: 'Something brewing quietly: a future utility line for connected physical tools.',
      theme: 'connect' as const,
    },
  ],
  focus: {
    title: 'Current focus',
    body: 'mimoworks is focused on making Lumofield feel clear, grounded, and ready, while giving mimo connect a smaller but credible place in the same system.',
  },
};

export const contactContent = {
  hero: {
    eyebrow: 'Contact',
    title: 'Contact mimoworks',
    body: 'For Lumofield interest, collaborations, and mimo connect pilots, start here.',
  },
  intro: {
    eyebrow: 'Open conversations',
    title: 'Share the context first.',
    body: 'The most useful notes are specific: the room, product interest, business space, or collaboration idea you have in mind.',
  },
  availability:
    'Enquiries are handled directly by the founder. Email is the active contact channel right now; Instagram will follow shortly.',
};

export const lumofieldPieces = [
  {
    title: 'Bedside lamp study',
    status: 'First collection study',
    body: 'A compact warm form for evening routines, low shelves, and the edge of a nightstand.',
    meta: 'Bedside / warm indirect light',
    image: visualAssets.bedside,
  },
  {
    title: 'Shelf light object',
    status: 'First collection study',
    body: 'A low ambient piece intended to sit with books, ceramics, and objects already in the room.',
    meta: 'Shelf / soft object presence',
    image: visualAssets.shelf,
  },
  {
    title: 'Desk ambient piece',
    status: 'Exploration',
    body: 'A quiet companion for work surfaces where the goal is mood and presence, not task lighting.',
    meta: 'Desk / focused calm',
    image: visualAssets.desk,
  },
];
