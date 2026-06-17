import React from 'react'
import { Calendar, ArrowRight } from 'lucide-react'
import { CtaBanner } from '../sections/SharedSections'

const BlogPage = () => {
  const posts = [
    { title: 'How to Track Keyword Rankings in Real Time', category: 'Keyword Strategy', date: 'Apr 12, 2026', excerpt: 'Build a practical daily workflow to monitor ranking volatility and respond faster to market shifts.' },
    { title: 'Analyze Competitor Strategies Before Every Release', category: 'Competitor Analysis', date: 'Apr 08, 2026', excerpt: 'Learn which competitor signals matter most and how to prioritize meaningful listing changes.' },
    { title: 'Boost Organic Installs with Data-Driven ASO', category: 'Growth', date: 'Apr 04, 2026', excerpt: 'Connect visibility metrics with conversion actions to create a full-funnel optimization loop.' },
    { title: 'Metadata Optimization Checklist for Product Teams', category: 'Optimization', date: 'Mar 29, 2026', excerpt: 'A repeatable framework for stronger titles, subtitles, and descriptions across app updates.' },
    { title: 'Retention Signals That Strengthen ASO Performance', category: 'Retention', date: 'Mar 25, 2026', excerpt: 'Why engagement quality and rating trends indirectly influence your long-term discoverability.' },
    { title: 'A/B Testing Store Listings Without Guesswork', category: 'Experimentation', date: 'Mar 21, 2026', excerpt: 'Structure experiments, define winning criteria, and scale what consistently improves conversion.' }
  ]

  return (
    <div className="bg-[#f4f7fb] min-h-screen">
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[#002855]" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-[#48b749]/20 border border-[#48b749]/40 text-white text-sm mb-4">ASO Blog</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Insights for app growth teams</h1>
          <p className="text-gray-200 mt-4 max-w-2xl mx-auto">Practical playbooks on visibility, conversion, and retention for modern ASO execution.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.title} className="group rounded-2xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
              <p className="text-xs text-[#48b749] font-semibold uppercase tracking-wider">{post.category}</p>
              <h2 className="mt-3 text-xl font-semibold text-[#002855]">{post.title}</h2>
              <p className="mt-3 text-sm text-gray-600">{post.excerpt}</p>
              <div className="mt-5 flex items-center justify-between">
                <p className="text-xs text-gray-500 inline-flex items-center gap-1"><Calendar size={13} /> {post.date}</p>
                <button className="inline-flex items-center gap-1 text-sm text-[#48b749] font-semibold">
                  Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner />
    </div>
  )
}

export default BlogPage
