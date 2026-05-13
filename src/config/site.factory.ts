import type { SiteFactoryRecipe } from '@/design/factory/types'

export const SITE_FACTORY_RECIPE: SiteFactoryRecipe = {
  brandPack: 'editorial-luxe',
  navbar: 'editorial-bar',
  footer: 'editorial-footer',
  homeLayout: 'article-home',
  motionPack: 'editorial-soft',
  primaryTask: 'mediaDistribution',
  enabledTasks: ['mediaDistribution', 'article', 'listing', 'classified', 'image', 'profile', 'sbm'],
  taskLayouts: {
    listing: 'listing-showcase',
    classified: 'classified-bulletin',
    article: 'article-editorial',
    image: 'image-portfolio',
    profile: 'profile-creator',
    sbm: 'sbm-library',
    mediaDistribution: 'article-journal',
  },
}
