import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, ArrowUp, Download } from 'lucide-react'
import { CtaBanner } from '../sections/SharedSections'

const CaseStudiesPage = () => {
  const cases = [
    {
      company: 'Finly Budget App',
      before: 'Low visibility across non-branded keywords and weak listing conversion.',
      after: 'Improved metadata quality, reworked screenshot flow, and launched weekly A/B tests.',
      metrics: [
        { label: 'Organic Downloads', value: '+63%', icon: <Download className="w-4 h-4" /> },
        { label: 'Top-10 Keyword Rankings', value: '+41%', icon: <TrendingUp className="w-4 h-4" /> },
        { label: 'Store Conversion Rate', value: '+22%', icon: <ArrowUp className="w-4 h-4" /> }
      ]
    },
    {
      company: 'PulseFit Wellness',
      before: 'Strong paid acquisition but limited organic discoverability in global markets.',
      after: 'Introduced localized metadata and competitor benchmarking in 8 target regions.',
      metrics: [
        { label: 'Organic Downloads', value: '+47%', icon: <Download className="w-4 h-4" /> },
        { label: 'Keyword Coverage', value: '+54%', icon: <TrendingUp className="w-4 h-4" /> },
        { label: 'Ratings Trend', value: '+0.4', icon: <ArrowUp className="w-4 h-4" /> }
      ]
    }
  ]

  return (
    <div className="bg-[#f4f7fb] min-h-screen">
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[#002855]" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-[#48b749]/20 border border-[#48b749]/40 text-white text-sm mb-5">Case Studies</span>
          <h1 className="text-4xl md:text-5xl text-white font-bold">Real ASO outcomes with measurable growth</h1>
          <p className="text-gray-200 mt-4 max-w-2xl mx-auto">See how product teams improve visibility, conversion, and retention through structured ASO execution.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          {cases.map((study, index) => (
            <motion.div
              key={study.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl bg-white border border-gray-100 p-7 md:p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-[#002855]">{study.company}</h2>
              <div className="grid md:grid-cols-2 gap-5 mt-6">
                <div className="rounded-xl bg-[#f4f7fb] p-5 border border-gray-100">
                  <p className="text-xs uppercase tracking-wider text-gray-500">Before</p>
                  <p className="text-sm text-gray-700 mt-2">{study.before}</p>
                </div>
                <div className="rounded-xl bg-[#f4f7fb] p-5 border border-gray-100">
                  <p className="text-xs uppercase tracking-wider text-gray-500">After</p>
                  <p className="text-sm text-gray-700 mt-2">{study.after}</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mt-6">
                {study.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-lg border border-gray-100 p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-xs text-gray-500">{metric.label}</p>
                    <p className="mt-2 text-2xl text-[#002855] font-bold inline-flex items-center gap-2">
                      <span className="text-[#48b749]">{metric.icon}</span> {metric.value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </div>
  )
}

export default CaseStudiesPage
