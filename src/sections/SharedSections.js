import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Star, TrendingUp, ShieldCheck, Rocket, ArrowRight } from 'lucide-react'

export const TrustBadges = () => {
  const badges = [
    { title: '4.8/5 Product Rating', sub: 'From mobile growth teams', icon: <Star className="w-4 h-4" /> },
    { title: '25K+ Keywords Monitored', sub: 'Across iOS and Android', icon: <TrendingUp className="w-4 h-4" /> },
    { title: 'Enterprise-grade Security', sub: 'Role-based access and audit logs', icon: <ShieldCheck className="w-4 h-4" /> },
    { title: 'Fast Onboarding', sub: 'Go live with your first app in minutes', icon: <Rocket className="w-4 h-4" /> }
  ]

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {badges.map((badge, index) => (
          <motion.div
            key={badge.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="rounded-xl border border-gray-100 bg-[#f4f7fb] px-4 py-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
          >
            <div className="w-9 h-9 rounded-lg bg-[#002855] text-white flex items-center justify-center mb-3">{badge.icon}</div>
            <h3 className="font-semibold text-[#002855] text-sm">{badge.title}</h3>
            <p className="text-xs text-gray-500 mt-1">{badge.sub}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export const TestimonialsSlider = () => {
  const testimonials = [
    {
      quote: 'We increased non-branded keyword visibility by 42% in one quarter using AppOptimax workflows.',
      name: 'Ayesha Khan',
      role: 'Head of Growth, Fintech App'
    },
    {
      quote: 'The competitor tracking and metadata alerts helped us react faster and improve conversion on every release.',
      name: 'Daniel Ross',
      role: 'ASO Manager, Mobility App'
    },
    {
      quote: 'Our retention-focused ASO experiments improved install quality, not just top-funnel traffic.',
      name: 'Sofia Malik',
      role: 'Product Marketing Lead, Wellness App'
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section className="py-24 bg-[#f4f7fb]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <span className="inline-block px-4 py-2 rounded-full bg-[#002855]/10 border border-[#002855]/20 text-[#002855] text-sm mb-4">
          Customer Stories
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#002855]">Trusted by ambitious app growth teams</h2>

        <div className="mt-10 min-h-48 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <p className="text-lg text-gray-600 leading-relaxed">"{testimonials[activeIndex].quote}"</p>
              <p className="mt-6 font-semibold text-[#002855]">{testimonials[activeIndex].name}</p>
              <p className="text-sm text-[#48b749]">{testimonials[activeIndex].role}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          {testimonials.map((item, idx) => (
            <button
              key={item.name}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all ${idx === activeIndex ? 'w-8 bg-[#48b749]' : 'w-2 bg-[#002855]/20 hover:bg-[#002855]/40'}`}
              aria-label={`Show testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export const FAQAccordion = () => {
  const faq = [
    {
      question: 'How quickly can we see ASO improvements?',
      answer: 'Most teams see visibility signals within 2-4 weeks. Conversion and retention impact usually compounds across release cycles.'
    },
    {
      question: 'Do you support both Apple App Store and Google Play?',
      answer: 'Yes. AppOptimax supports cross-store keyword tracking, metadata insights, and competitor monitoring for both ecosystems.'
    },
    {
      question: 'Can we monitor competitors by market and category?',
      answer: 'Yes. You can benchmark competitors by category, country, keyword overlap, ratings trend, and listing update activity.'
    },
    {
      question: 'Is this suitable for agencies and in-house teams?',
      answer: 'Absolutely. The platform includes workspace-ready reporting and collaboration workflows for agencies and product teams.'
    }
  ]

  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-[#48b749] uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-3">Everything you need to know</h2>
        </div>

        <div className="space-y-4">
          {faq.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <div key={item.question} className="rounded-xl border border-gray-100 bg-[#f4f7fb]">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-[#002855]">{item.question}</span>
                  <ChevronDown className={`w-4 h-4 text-[#48b749] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <p className="px-5 pb-5 text-gray-600 text-sm">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export const CtaBanner = () => {
  return (
    <section className="py-20 bg-[#002855]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-10 text-center">
          <h3 className="text-2xl md:text-4xl text-white font-bold">Ready to scale organic app growth?</h3>
          <p className="mt-4 text-gray-300">
            Track keyword rankings in real time, analyze competitor strategies, and boost organic installs with data-driven ASO.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="px-6 py-3 rounded-lg bg-[#48b749] text-white font-medium hover:bg-[#3da03d] transition-colors inline-flex items-center gap-2">
              Book Free ASO Audit <ArrowRight size={16} />
            </Link>
            <Link href="/pricing" className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors">
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
