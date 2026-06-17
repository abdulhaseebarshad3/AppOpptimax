import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, User, Tag, ArrowRight, Search, ChevronRight } from 'lucide-react'

const NewsEvents = () => {
  // State for active category filter
  const [activeCategory, setActiveCategory] = useState('All')

  // Expanded News Data
  const newsData = [
    {
      id: 1,
      title: "ASO in 2026: Creative Assets, Engagement & Conversion Growth",
      category: "ASO Trends",
      date: "Jan 27, 2026",
      author: "AppOptimax Editorial",
      img: "https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?q=80&w=800&auto=format&fit=crop",
      excerpt: "Discovery is only step one. Learn how screenshots, icons, and creative testing improve conversion and retention in 2026.",
      featured: true
    },
    {
      id: 2,
      title: "ASO in 2026: Search, AI, and Personalization Trends",
      category: "AI Insights",
      date: "Jan 27, 2026",
      author: "Growth Lab",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
      excerpt: "How AI ranking systems and personalization signals are reshaping app discovery and listing strategy.",
      featured: false
    },
    {
      id: 3,
      title: "ASO Tool Ratings and Reviews Guide",
      category: "Guides",
      date: "Oct 13, 2025",
      author: "Product Team",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
      excerpt: "Understand the link between user sentiment, conversion rates, and sustained keyword performance.",
      featured: false
    },
    {
      id: 4,
      title: "Localize for Growth: Win Users Worldwide",
      category: "Localization",
      date: "Oct 13, 2025",
      author: "Market Intelligence",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
      excerpt: "A practical guide to adapting keywords, creatives, and messaging for region-specific growth.",
      featured: false
    },
    {
      id: 5,
      title: "Boost App Installs with Smart ASO Optimization",
      category: "Optimization",
      date: "Oct 13, 2025",
      author: "ASO Strategy",
      img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
      excerpt: "Use metadata, creative updates, and experimentation loops to increase install conversion.",
      featured: false
    },
    {
      id: 6,
      title: "Boosting App Visibility with Keywords & Store Features",
      category: "Keyword Strategy",
      date: "Oct 13, 2025",
      author: "App Growth Team",
      img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=800&auto=format&fit=crop",
      excerpt: "Build coverage across high-intent keywords while improving category-level visibility.",
      featured: false
    },
    {
      id: 7,
      title: "The Evolution of ASO: From Keywords to Growth Strategy",
      category: "Strategy",
      date: "Oct 13, 2025",
      author: "Editorial Team",
      img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
      excerpt: "Why modern ASO now blends research, execution, monitoring, and forecasting in one workflow.",
      featured: false
    },
    {
      id: 8,
      title: "How to Build an Ongoing ASO Monitoring System",
      category: "Monitoring",
      date: "Sep 30, 2025",
      author: "Insights Team",
      img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=800&auto=format&fit=crop",
      excerpt: "Track rankings, reviews, and competitor updates continuously to keep momentum after launch.",
      featured: false
    }
  ]

  // Unique Categories for Filter
  const categories = ['All', ...new Set(newsData.map(item => item.category))]

  // Filtered News Logic
  const filteredNews = activeCategory === 'All' 
    ? newsData 
    : newsData.filter(item => item.category === activeCategory)

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="bg-[#002855] min-h-screen">
      
      {/* Hero Section - Dark Blue */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#48b749 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-[#48b749]/20 border border-[#48b749]/30 rounded-full text-sm text-white mb-6 font-medium">
              Blog & Insights
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ASO <span className="text-[#48b749]">Resources</span>
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Explore practical guides, trend reports, and strategy updates for app growth teams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar - Sticky with Hover Effects */}
      <section className="py-8 border-y border-gray-100 sticky top-0 z-20 bg-white/90 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-[#48b749] text-white shadow-lg shadow-green-200' 
                    : 'bg-white text-gray-600 hover:bg-[#3ca43e] hover:text-white border border-gray-200 hover:border-[#002855]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid Section - Enhanced Hover Effects */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredNews.map((news) => (
              <motion.div
                key={news.id}
                variants={itemVariants}
                className={`group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#48b749] transition-all duration-500 shadow-sm hover:shadow-xl hover:bg-gray-50 ${news.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
              >
                <Link href={`/news/${news.id}`} className="block h-full">
                  <div className={`relative ${news.featured ? 'h-72' : 'h-48'} overflow-hidden`}>
                    <img 
                      src={news.img} 
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Dark Blue Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#002855] via-[#002855]/40 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500" />
                    
                    {/* Category Badge - Changes to Blue on Hover */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#48b749] text-white text-xs font-semibold rounded-full transition-colors duration-300 group-hover:bg-[#002855]">
                        {news.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 relative z-10">
                    {/* Meta text turns darker on hover for readability on light bg */}
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3 transition-colors duration-300 group-hover:text-gray-600">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {news.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User size={12} /> {news.author}
                      </span>
                    </div>

                    {/* Title turns Green on Hover */}
                    <h3 className={`font-bold text-[#002855] mb-3 transition-colors duration-300 group-hover:text-[#48b749] ${news.featured ? 'text-2xl' : 'text-lg'}`}>
                      {news.title}
                    </h3>

                    {/* Excerpt text darkens on hover */}
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4 transition-colors duration-300 group-hover:text-gray-700">
                      {news.excerpt}
                    </p>

                    {/* Read More - Blue to Green Transition */}
                    <div className="flex items-center gap-2 text-[#002855] text-sm font-medium group-hover:text-[#48b749] transition-colors duration-300">
                      Read More 
                      <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination with Hover Effects */}
          <div className="flex justify-center mt-16">
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 rounded-lg bg-white border border-gray-200 text-gray-400 hover:bg-[#002855] hover:text-white hover:border-[#002855] transition-colors flex items-center justify-center">
                <ChevronRight size={16} className="rotate-180" />
              </button>
              <button className="w-10 h-10 rounded-lg bg-[#48b749] text-white font-medium">1</button>
              <button className="w-10 h-10 rounded-lg bg-white border border-gray-200 text-gray-500 hover:bg-[#002855] hover:text-white hover:border-[#002855] transition-colors">2</button>
              <button className="w-10 h-10 rounded-lg bg-white border border-gray-200 text-gray-500 hover:bg-[#002855] hover:text-white hover:border-[#002855] transition-colors">3</button>
              <button className="w-10 h-10 rounded-lg bg-white border border-gray-200 text-gray-400 hover:bg-[#002855] hover:text-white hover:border-[#002855] transition-colors flex items-center justify-center">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Newsletter Subscription - Dark Blue Contrast */}
      <section className="py-16 px-6 bg-[#002855] border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Get ASO Updates in Your Inbox
          </h3>
          <p className="text-gray-300 mb-8">
            Receive platform insights on keyword strategy, localization, competitor tracking, and AI-powered growth.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-6 py-3 bg-white border border-gray-100 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#48b749] hover:border-gray-300 transition-colors w-full sm:w-96"
            />
            <button 
              type="submit" 
              className="px-8 py-3 bg-[#48b749] text-white font-medium rounded-lg hover:bg-[#3da03d] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-900/20 hover:shadow-green-800/30"
            >
              Join Newsletter <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </section>

    </div>
  )
}

export default NewsEvents


