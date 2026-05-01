import brandTokens from '../../config/brand-tokens.json';
import siteMap from '../../config/site-map.json';

export type ThemeName = keyof typeof brandTokens.themes;

export interface ImageAsset {
  src: string;
  alt: string;
  caption?: string;
}

export const tokens = brandTokens;

export const siteMeta = {
  brand: 'mimoworks',
  title: 'mimoworks',
  description:
    'Thoughtful objects and tools, beginning with warm home objects and quietly useful physical products.',
  tagline: 'Thoughtful objects and tools.',
  ogImage: '/og-placeholder.svg',
};

const routeByName = new Map(siteMap.routes.map((route) => [route.name, route.path]));

export const navItems = siteMap.navigation.map((name) => ({
  label: name,
  href: routeByName.get(name) ?? '/',
}));

export const footerLinks = navItems.filter((item) => item.label !== 'Home');

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
} satisfies Record<string, ImageAsset>;

export const footerContent = {
  description:
    'A small product studio for warm home objects and quietly useful physical tools.',
  note: 'Product interest, collaborations, and pilot conversations are welcome through the contact page.',
};

export const contactChannels = [
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
    body: 'A new product studio beginning with warm home objects, led by Lumofield.',
    primaryCta: { label: 'Explore Lumofield', href: '/lumofield/' },
    secondaryCta: { label: 'View Connect', href: '/connect/' },
  },
  intro: {
    eyebrow: 'What we make',
    title: 'One studio, different expressions.',
    body: 'mimoworks is the umbrella for design-led objects and useful physical tools. Lumofield leads with ambient pieces for the home. mimo connect explores practical tap-and-scan products for everyday business spaces.',
    cards: [
      {
        eyebrow: 'Primary line',
        title: 'Lumofield leads with warmth.',
        body: 'The first public expression of mimoworks, shaped around lamps and quiet home objects.',
        href: '/lumofield/',
        linkLabel: 'See Lumofield',
        theme: 'lumofield' as const,
      },
      {
        eyebrow: 'Future branch',
        title: 'Something is brewing.',
        body: 'A quieter connected line is in development for practical tap-and-scan objects.',
        href: '/connect/',
        linkLabel: 'View the note',
        theme: 'connect' as const,
      },
    ],
  },
  lumofield: {
    eyebrow: 'Lumofield',
    title: 'Warm light, quiet form.',
    subtitle:
      'The first collection is taking shape around bedside, shelf, and desk moments.',
    body: 'Lumofield is the main product line today: small ambient lighting studies and future home objects made to soften everyday rooms.',
    cta: { label: 'Visit Lumofield', href: '/lumofield/' },
    points: ['Bedside warmth', 'Shelf presence', 'Desk-side calm'],
  },
  selected: {
    eyebrow: 'First pieces',
    title: 'A focused collection taking shape.',
    body: 'Early Lumofield studies are framed around familiar home placements rather than a large catalog.',
  },
  connect: {
    eyebrow: 'Quietly in development',
    title: 'mimo connect',
    subtitle: 'Something is brewing.',
    body: 'A quieter connected line is being shaped in the background.',
    cta: { label: 'View connect note', href: '/connect/' },
  },
  values: {
    eyebrow: 'Values',
    title: 'Built with restraint.',
    items: [
      'Warmth over noise',
      'Usefulness without clutter',
      'Objects with a clear place',
    ],
  },
  contact: {
    title: 'Start a quiet conversation.',
    body: 'Share interest in Lumofield, a thoughtful collaboration, or an early connected-object idea.',
    cta: { label: 'Contact mimoworks', href: '/contact/' },
  },
};

export const lumofieldContent = {
  hero: {
    eyebrow: 'lumofield',
    title: 'Warm light, quiet form.',
    body: 'Ambient lamps and home objects shaped for bedside, shelf, and desk moments.',
    primaryCta: { label: 'Enquire', href: '/contact/' },
  },
  overview: {
    eyebrow: 'What it is',
    title: 'A first line for softer rooms.',
    body: 'Lumofield begins with lighting because light changes the feeling of a room before anything else. The work is warm, minimal, and designed to sit quietly in everyday spaces.',
    note: 'The first direction is intentionally small: compact forms, warm diffusion, and objects that feel at home beside books, fabric, ceramics, and daily rituals.',
  },
  collection: {
    eyebrow: 'Collection preview',
    title: 'First pieces taking shape.',
    body: 'Early studies focus on the places where ambient light matters most: the bedside, the shelf, and the desk.',
  },
  contexts: {
    eyebrow: 'Use context',
    title: 'Designed around familiar placements.',
    items: [
      {
        title: 'Bedside',
        body: 'Low, warm light for evening routines and quieter starts.',
      },
      {
        title: 'Shelf',
        body: 'A calm object presence that sits with books, ceramics, and small keepsakes.',
      },
      {
        title: 'Desk',
        body: 'Ambient support for focused work without turning the surface into a task lamp.',
      },
    ],
  },
  principles: {
    title: 'Design principles',
    items: ['Soft presence', 'Warm atmosphere', 'Simple forms', 'Tactile restraint'],
  },
  contact: {
    title: 'Interested in Lumofield?',
    body: 'Share the kind of room, placement, or collaboration you have in mind.',
    cta: { label: 'Enquire about Lumofield', href: '/contact/' },
  },
};

export const connectContent = {
  hero: {
    eyebrow: 'mimo connect',
    title: 'Something is brewing.',
    body: 'A quieter connected line is in development for practical tap-and-scan objects.',
    primaryCta: { label: 'Register interest', href: '/contact/' },
  },
  overview: {
    eyebrow: 'What it is',
    title: 'A future utility branch.',
    body: 'mimo connect is being shaped around simple physical prompts for useful everyday actions.',
  },
  status: {
    title: 'Quietly in development',
    body: 'The first direction is small and practical: NFC review stands and branded tap-to-action objects for counters, desks, and service spaces.',
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
    title: 'Have a practical use case?',
    body: 'Share the space and the simple action you want a physical object to support.',
    cta: { label: 'Register interest', href: '/contact/' },
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
    'For now, enquiries are handled directly by the founder. If this site was shared with you, reply through that channel with the product line and context.',
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
