import content1 from './content/blog1'
import content2 from './content/blog2'
import content3 from './content/blog3'
import content4 from './content/blog4'
import content5 from './content/blog5'
import content6 from './content/blog6'
import content7 from './content/blog7'
import { getBlogMetaBySlug, getAllBlogSlugs, getAllBlogMeta } from './meta'

const contentBySlug = {
  'aso-2026-creative-assets-engagement-conversion': content1,
  'aso-2026-search-ai-personalization-trends': content2,
  'aso-ratings-reviews-guide': content3,
  'localize-for-growth-win-users-worldwide': content4,
  'boost-app-installs-smart-aso-optimization': content5,
  'boosting-app-visibility-keywords-store-features': content6,
  'evolution-aso-keywords-to-growth-strategy': content7
}

export { getAllBlogSlugs, getAllBlogMeta }

export function getBlogBySlug(slug) {
  const meta = getBlogMetaBySlug(slug)
  if (!meta) return null

  return {
    ...meta,
    content: contentBySlug[slug] || []
  }
}
