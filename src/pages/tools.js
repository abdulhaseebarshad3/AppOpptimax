import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Hash, BarChart3, Binary, ScanSearch, Smartphone, ArrowRight } from 'lucide-react'
import { CtaBanner } from '../sections/SharedSections'

const ToolsPage = () => {
  const modules = [
    { title: 'Keyword Tracker', icon: <Hash className="w-5 h-5" />, description: 'Track target keyword positions and monitor movement by locale and device.', cta: 'Start Tracking' },
    { title: 'Ranking Tracker', icon: <BarChart3 className="w-5 h-5" />, description: 'Measure rank evolution daily and surface alerts for major keyword swings.', cta: 'View Trends' },
    { title: 'Competitor Insights', icon: <Binary className="w-5 h-5" />, description: 'Analyze competitor strategy shifts, listing updates, and keyword coverage.', cta: 'Analyze Competitors' },
    { title: 'App Metadata Analyzer', icon: <ScanSearch className="w-5 h-5" />, description: 'Audit metadata quality and get practical recommendations to improve visibility.', cta: 'Run Analyzer' },
    { title: 'Store Listing Preview', icon: <Smartphone className="w-5 h-5" />, description: 'Preview listing variants before launch and validate messaging consistency.', cta: 'Open Preview' }
  ]

  return (
    <div className="bg-[#f4f7fb] min-h-screen">
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[#002855]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-[#48b749]/20 border border-[#48b749]/40 text-white text-sm">
            Tools & Modules
          </span>
          <h1 className="mt-5 text-4xl md:text-5xl text-white font-bold">Purpose-built ASO modules for every workflow</h1>
          <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
            Activate focused modules for research, optimization, and monitoring without disrupting your existing growth stack.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="group rounded-2xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="w-11 h-11 rounded-lg bg-[#002855] text-white flex items-center justify-center mb-4 group-hover:bg-[#48b749] transition-colors">
                {module.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#002855]">{module.title}</h3>
              <p className="text-gray-600 text-sm mt-3">{module.description}</p>
              <button className="mt-6 inline-flex items-center gap-2 text-[#48b749] text-sm font-semibold">
                {module.cta} <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-12 text-center">
          <Link href="/dashboard-preview" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#48b749] text-white font-medium hover:bg-[#3da03d] transition-colors">
            Explore Dashboard Preview <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <CtaBanner />
    </div>
  )
}

export default ToolsPage
