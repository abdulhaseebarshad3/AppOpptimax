import React from 'react'
import { motion } from 'framer-motion'
import { Search, Radar, LineChart, Sparkles, FlaskConical, MessageSquareText } from 'lucide-react'
import { CtaBanner, TrustBadges } from '../sections/SharedSections'

const FeaturesPage = () => {
  const features = [
    { title: 'Keyword Research', icon: <Search className="w-6 h-6" />, description: 'Discover high-intent terms, estimate difficulty, and prioritize opportunities by market potential.' },
    { title: 'Competitor Analysis', icon: <Radar className="w-6 h-6" />, description: 'Analyze competitor strategies, keyword overlap, and creative updates to uncover ranking gaps.' },
    { title: 'App Performance Tracking', icon: <LineChart className="w-6 h-6" />, description: 'Monitor visibility, conversion, and retention indicators with clear trend dashboards.' },
    { title: 'Metadata Optimization', icon: <Sparkles className="w-6 h-6" />, description: 'Improve titles, subtitles, and descriptions with actionable optimization recommendations.' },
    { title: 'A/B Testing', icon: <FlaskConical className="w-6 h-6" />, description: 'Test listing variants, validate winning creative assets, and optimize conversion continuously.' },
    { title: 'Reviews & Ratings Analysis', icon: <MessageSquareText className="w-6 h-6" />, description: 'Track review sentiment trends and identify friction themes that impact retention and ranking.' }
  ]

  return (
    <div className="bg-[#f4f7fb] min-h-screen">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#002855]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 bg-[#48b749]/20 border border-[#48b749]/40 rounded-full text-white text-sm mb-6">
            ASO Capabilities
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Everything you need to grow app visibility</h1>
          <p className="text-gray-200 mt-5 max-w-2xl mx-auto">
            A full-stack ASO toolkit to improve discoverability, increase listing conversion, and support retention-driven growth.
          </p>
        </div>
      </section>

      <TrustBadges />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#002855] text-white flex items-center justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#002855]">{feature.title}</h3>
              <p className="text-gray-600 text-sm mt-3">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </div>
  )
}

export default FeaturesPage
