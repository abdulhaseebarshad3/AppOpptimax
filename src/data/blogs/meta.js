const PLACEHOLDER_IMAGE = '/images/ASOplatform.png'

export const blogMeta = [
  {
    id: 1,
    slug: 'aso-2026-creative-assets-engagement-conversion',
    title: 'ASO in 2026: Creative Assets, Engagement & Conversion Growth',
    metaTitle: 'ASO in 2026: Creative Assets, Engagement & Conversion | App Optimax',
    metaDescription:
      'Learn how screenshots, icons, ratings, and engagement signals drive ASO conversion in 2026. A practical guide for app growth teams.',
    date: 'Jan 27, 2026',
    image: '/images/Blog1.png',
    imageAlt: 'ASO creative assets and conversion optimization dashboard illustration',
    excerpt:
      'Discovery is only the first step. In 2026, converting visibility into installs and retention requires strong creative assets, high-quality engagement signals, and trust-building experiences that turn store visits into lasting growth.'
  },
  {
    id: 2,
    slug: 'aso-2026-search-ai-personalization-trends',
    title: 'ASO in 2026: Search, AI, and Personalization Trends',
    metaTitle: 'ASO in 2026: AI Search & Personalization Trends | App Optimax',
    metaDescription:
      'Explore how AI-powered discovery, semantic keywords, voice search, and personalization are reshaping App Store Optimization in 2026.',
    date: 'Jan 27, 2026',
    image: '/images/Blog2.png',
    imageAlt: 'AI-powered app store search and personalization trends visualization',
    excerpt:
      'In 2026, ASO has become far more than keywords. With AI and personalized discovery, organic visibility depends on intent optimization, semantic metadata, voice search readiness, and behavioral relevance across every listing.'
  },
  {
    id: 3,
    slug: 'aso-ratings-reviews-guide',
    title: 'ASO Tool Ratings and Reviews Guide',
    metaTitle: 'ASO Ratings & Reviews Guide: Boost Trust & Installs | App Optimax',
    metaDescription:
      'Master ratings and reviews for ASO success. Learn review generation, negative review management, and how App Optimax tracks sentiment.',
    date: 'Oct 13, 2025',
    image: '/images/Blog3.png',
    imageAlt: 'App store ratings and reviews analytics for ASO growth',
    excerpt:
      'In ASO, keywords and visuals grab attention — but ratings and reviews build trust. Research shows 90% of users read reviews before downloading, and apps below 3.5 stars see up to 60% fewer installs.'
  },
  {
    id: 4,
    slug: 'localize-for-growth-win-users-worldwide',
    title: 'Localize for Growth: Win Users Worldwide',
    metaTitle: 'ASO Localization Guide: Win Global Users | App Optimax',
    metaDescription:
      'Learn how to localize app store metadata, keywords, and visuals to reach international markets and boost downloads with App Optimax.',
    date: 'Oct 13, 2025',
    image: '/images/Blog4.png',
    imageAlt: 'Global app localization strategy for ASO and international growth',
    excerpt:
      'Over 70% of app downloads come from outside English-speaking markets. Localization in ASO is not just translation — it is cultural relevance, regional keywords, and local design adaptation that unlocks global growth.'
  },
  {
    id: 5,
    slug: 'boost-app-installs-smart-aso-optimization',
    title: 'Boost App Installs with Smart ASO Optimization',
    metaTitle: 'Boost App Installs with ASO Conversion Optimization | App Optimax',
    metaDescription:
      'Improve app store conversion rates with CRO for ASO. Optimize icons, screenshots, copy, A/B tests, and localization to maximize installs.',
    date: 'Oct 13, 2025',
    image: '/images/Blog5.png',
    imageAlt: 'App store conversion rate optimization for higher install growth',
    excerpt:
      'Getting discovered is only half the battle — converting visitors into installs is where true growth happens. Learn how Conversion Rate Optimization for ASO uses visuals, copy, and data-driven testing to maximize installs.'
  },
  {
    id: 6,
    slug: 'boosting-app-visibility-keywords-store-features',
    title: 'Boosting App Visibility with Keywords & Store Features',
    metaTitle: 'Boost App Visibility with Keywords & Store Features | App Optimax',
    metaDescription:
      'Increase app store visibility with keyword optimization, metadata strategy, featured placements, and App Optimax tracking tools.',
    date: 'Oct 13, 2025',
    image: '/images/Blog6.png',
    imageAlt: 'Keyword research and app store visibility optimization workflow',
    excerpt:
      'No matter how great your app is, it cannot grow if users never find it. Explore how keywords, metadata, store features, and the Keyword Optimization Cycle dramatically increase your app reach and organic downloads.'
  },
  {
    id: 7,
    slug: 'evolution-aso-keywords-to-growth-strategy',
    title: 'The Evolution of ASO: From Keywords to Growth Strategy',
    metaTitle: 'The Evolution of ASO: Keywords to Growth Strategy | App Optimax',
    metaDescription:
      'Trace the history of ASO from keyword stuffing to a full growth strategy. Learn the ASO Stack framework and modern team roles.',
    date: 'Oct 13, 2025',
    image: PLACEHOLDER_IMAGE,
    imageAlt: 'The evolution of App Store Optimization from keywords to growth strategy',
    excerpt:
      'When Apple and Google launched their app stores in 2008, they created App Store Optimization. ASO has evolved from simple keyword stuffing into a complete growth strategy combining data, design, psychology, and technology.'
  }
]

export function getAllBlogMeta() {
  return blogMeta
}

export function getBlogMetaBySlug(slug) {
  return blogMeta.find((blog) => blog.slug === slug) || null
}

export function getAllBlogSlugs() {
  return blogMeta.map((blog) => blog.slug)
}
