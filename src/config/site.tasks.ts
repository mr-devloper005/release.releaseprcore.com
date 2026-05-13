export const siteTaskDefinitions = [
  {
    key: 'mediaDistribution',
    label: 'Latest News',
    route: '/release',
    description: 'Press media and newsroom announcements.',
    contentType: 'mediaDistribution',
    enabled: true,
  },
] as const

export const siteTaskViews = {
  mediaDistribution: '/release',
} as const
