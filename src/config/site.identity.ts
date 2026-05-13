export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || 'xwnr07jyse',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Release Releaseprcore',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'Independent media updates',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'A media-distribution newsroom for announcements, coverage, and press updates on Release Releaseprcore.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'release.releaseprcore.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://release.releaseprcore.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || '',
} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/freepik-assets/placeholder-user.svg',
} as const
