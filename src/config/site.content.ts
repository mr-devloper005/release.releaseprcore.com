import type { TaskKey } from '@/lib/site-config'

export const siteContent = {
  navbar: {
    tagline: 'Media press media network',
  },
  footer: {
    tagline: 'Trusted publishing for announcements and newsroom distribution',
  },
  hero: {
    badge: 'Media distribution platform',
    title: ['The News Starts Here'],
    description: 'Publish official announcements, distribute stories, and amplify newsroom visibility with a modern press workflow.',
    primaryCta: {
      label: 'Explore Latest News',
      href: '/release',
    },
    secondaryCta: {
      label: 'View Pricing',
      href: '/pricing',
    },
    searchPlaceholder: 'Search releases, brands, and topics',
    focusLabel: 'Breaking',
    featureCardBadge: 'Featured',
    featureCardTitle: 'Business-ready press distribution with editorial clarity.',
    featureCardDescription: 'Discover new announcements, coverage highlights, and media-ready stories from one publishing hub.',
  },
  home: {
    metadata: {
      title: 'Latest updates and newsroom posts',
      description:
        'Read the latest updates, announcements, and stories through a simple archive-first publishing experience.',
      openGraphTitle: 'Latest updates and newsroom posts',
      openGraphDescription:
        'A simple publishing template for updates, announcements, and readable article pages.',
      keywords: ['newsroom posts', 'latest updates', 'announcements', 'press articles'],
    },
    introBadge: 'About News Insight Zone',
    introTitle: 'A dedicated newsroom experience for modern media distribution.',
    introParagraphs: [
      'News Insight Zone is built for organizations that need press-ready publishing, clear discovery, and polished presentation across every announcement.',
      'From launch updates to investor notes and media statements, every release is structured to be readable, shareable, and discoverable.',
      'The design supports high publishing velocity while preserving professional tone and strong editorial hierarchy.',
    ],
    sideBadge: 'What we prioritize',
    sidePoints: [
      'Press-first homepage with clear distribution calls-to-action.',
      'News archive that supports fast scanning and filtering.',
      'Article pages optimized for readability and sharing.',
      'Modular structure for consistent publishing operations.',
    ],
    primaryLink: {
      label: 'Open Newsroom',
      href: '/release',
    },
    secondaryLink: {
      label: 'Contact Media Desk',
      href: '/contact',
    },
  },
  cta: {
    badge: 'Publish with confidence',
    title: 'Ready to Share Your News?',
    description: 'Launch your next announcement with trusted distribution, elegant formatting, and a newsroom-first UX.',
    primaryCta: {
      label: 'Submit a Release',
      href: '/create/mediaDistribution',
    },
    secondaryCta: {
      label: 'See Pricing',
      href: '/pricing',
    },
  },
  taskSectionHeading: 'Latest releases',
  taskSectionDescriptionSuffix: 'Read the newest press announcements and newsroom updates.',
} as const

export const taskPageMetadata: Record<Exclude<TaskKey, 'comment' | 'org' | 'social'>, { title: string; description: string }> = {
  article: {
    title: 'Articles',
    description: 'Read the latest posts and long-form updates.',
  },
  listing: {
    title: 'Listings',
    description: 'Explore listings and directory-style entries.',
  },
  classified: {
    title: 'Classifieds',
    description: 'Browse classifieds and short-form notices.',
  },
  image: {
    title: 'Images',
    description: 'Browse image-led updates and visual posts.',
  },
  profile: {
    title: 'Profiles',
    description: 'View profile pages and public identities.',
  },
  sbm: {
    title: 'Bookmarks',
    description: 'Browse curated resources and saved links.',
  },
  pdf: {
    title: 'Resources',
    description: 'Open PDFs and downloadable files.',
  },
  mediaDistribution: {
    title: 'Latest News',
    description: 'Explore newly published press media, announcements, and newsroom stories.',
  },
}

export const taskIntroCopy: Record<
  TaskKey,
  { title: string; paragraphs: string[]; links: { label: string; href: string }[] }
> = {
  listing: { title: 'Listings', paragraphs: ['Directory entries and service pages.'], links: [{ label: 'Home', href: '/' }] },
  article: { title: 'Articles', paragraphs: ['General long-form article feed.'], links: [{ label: 'Home', href: '/' }] },
  classified: { title: 'Classifieds', paragraphs: ['Short-form posts and notices.'], links: [{ label: 'Home', href: '/' }] },
  image: { title: 'Images', paragraphs: ['Image-first posts and galleries.'], links: [{ label: 'Home', href: '/' }] },
  profile: { title: 'Profiles', paragraphs: ['Profile pages and identity surfaces.'], links: [{ label: 'Home', href: '/' }] },
  sbm: { title: 'Bookmarks', paragraphs: ['Curated saved links and references.'], links: [{ label: 'Home', href: '/' }] },
  pdf: { title: 'Resources', paragraphs: ['Downloadable files and documents.'], links: [{ label: 'Home', href: '/' }] },
  social: { title: 'Social', paragraphs: ['Short updates and activity.'], links: [{ label: 'Home', href: '/' }] },
  comment: { title: 'Comments', paragraphs: ['Commentary and response posts.'], links: [{ label: 'Home', href: '/' }] },
  org: { title: 'Organizations', paragraphs: ['Organization pages and entities.'], links: [{ label: 'Home', href: '/' }] },
  mediaDistribution: {
    title: 'Latest News',
    paragraphs: [
      'This archive is designed for media distribution teams that publish announcements, press notes, and official updates at high velocity.',
      'Use category and search surfaces to quickly discover current stories, then open each release in a clean long-form reading experience.',
    ],
    links: [
      { label: 'Home', href: '/' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Contact', href: '/contact' },
    ],
  },
}
