import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Target, Eye, Award, ArrowUp, Search, Globe, BarChart3, Zap, Users, Shield, CheckCircle2 } from 'lucide-react'

const TeamImg = '/images/ASOplatform.png'
const OfficeImg = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop'
const DashboardImg = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop'

const About = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) setShowScrollTop(true)
      else setShowScrollTop(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  }

  const stats = [
    { value: "50M+", label: "Keywords Indexed" },
    { value: "60+", label: "Countries Covered" },
    { value: "2", label: "App Stores" },
    { value: "24/7", label: "Data Updates" },
  ]

  const values = [
    { icon: <Search size={28} />, title: "Data Over Guessing", desc: "Every recommendation is backed by real store data, not assumptions. We measure what users actually search and how apps actually rank." },
    { icon: <Target size={28} />, title: "Actionability First", desc: "Insights without action are noise. Every module is designed to give you a clear next step — not just another dashboard to stare at." },
    { icon: <Zap size={28} />, title: "Speed of Execution", desc: "From keyword research to metadata changes to rank tracking — one workflow, one platform. No switching between five tools." },
    { icon: <Globe size={28} />, title: "Global by Default", desc: "ASO doesn't stop at one country. Our platform is built for teams operating across markets, languages, and store regions from day one." },
  ]

  return (
    <div className="bg-[#f4f7fb]">

      {/* ========================================== */}
      {/* HERO SECTION                               */}
      {/* ========================================== */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src={DashboardImg}
            alt="AppOptimax Platform"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#002855]/95 via-[#002855]/80 to-[#002855]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002855] via-transparent to-[#002855]/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 bg-[#00CFB8]/20 border border-[#00CFB8]/40 rounded-full text-sm text-[#00CFB8] mb-6 font-medium">
                About AppOptimax
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              The ASO Platform <br />
              <span className="text-[#00CFB8]">Built for Growth Teams</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              AppOptimax combines keyword intelligence, competitor analysis, localization insights, and forecasting into one platform — so app teams can execute ASO with clarity and speed.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link href="/chapters/alpha" className="px-8 py-3.5 bg-[#00CFB8] text-white font-medium rounded-lg hover:bg-[#00B5A0] transition-colors flex items-center gap-2 shadow-lg shadow-[#00CFB8]/20">
                Explore Modules <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="px-8 py-3.5 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm">
                Get a Demo
              </Link>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-[#00CFB8] rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* ========================================== */}
      {/* SECTION 1: ABOUT PLATFORM — Image LEFT      */}
      {/* ========================================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={DashboardImg}
                alt="AppOptimax Dashboard"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">
                Platform Overview
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-3 mb-6">
                One Platform. End-to-End App Growth.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                AppOptimax is an AI-powered App Store Optimization platform that helps teams improve app discoverability, keyword ranking performance, and organic installs across both Google Play and the Apple App Store.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                It centralizes keyword data, competitor intelligence, creative insight, and performance metrics so teams can execute faster and with more confidence — without juggling five different tools.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00CFB8] rounded-full" />
                  Keyword Research, Difficulty & Relevancy
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00CFB8] rounded-full" />
                  Competitor Analysis & Market Intelligence
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00CFB8] rounded-full" />
                  Localized ASO for 60+ Countries
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00CFB8] rounded-full" />
                  KPI Tracking, Forecasting & Analytics
                </li>
              </ul>
              <Link href="/chapters/alpha" className="inline-flex items-center gap-2 text-[#00CFB8] mt-8 hover:gap-3 transition-all font-semibold">
                Explore All Modules <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 2: MISSION & VISION — Image RIGHT   */}
      {/* ========================================== */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Text LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">
                Purpose
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-3 mb-6">
                Mission & Vision
              </h2>

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#00CFB8]/10 flex items-center justify-center text-[#00CFB8]">
                    <Target size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-[#002855]">Our Mission</h3>
                </div>
                <p className="text-gray-600 leading-relaxed pl-[52px]">
                  Help app publishers make smarter ASO decisions by combining automation, analytics, and practical recommendations that improve visibility, conversion, and retention outcomes.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#00CFB8]/10 flex items-center justify-center text-[#00CFB8]">
                    <Eye size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-[#002855]">Our Vision</h3>
                </div>
                <p className="text-gray-600 leading-relaxed pl-[52px]">
                  Build the most actionable ASO intelligence layer for modern app teams — where research, optimization, monitoring, and forecasting work as one continuous growth loop.
                </p>
              </div>

              <div className="mt-8 pl-[52px]">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#002855] text-white font-medium rounded-lg hover:bg-[#00CFB8] transition-all duration-300 shadow-lg group">
                  Talk to Our Team
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Image RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <img
                  src={OfficeImg}
                  alt="AppOptimax Team"
                  className="rounded-2xl shadow-xl w-full object-cover"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#002855]/30 to-transparent" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 3: VALUES / WHAT MAKES US DIFFERENT */}
      {/* ========================================== */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#00CFB8]/5 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#002855]/5 rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.span className="inline-block px-4 py-2 bg-[#002855]/10 border border-[#002855]/20 rounded-full text-sm text-[#002855] mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Principles
            </motion.span>
            <motion.h2 className="text-3xl md:text-5xl font-bold text-[#002855] mt-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              What Makes AppOptimax Different
            </motion.h2>
            <motion.p className="text-lg text-gray-500 mt-4 max-w-3xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              Four principles that shape every feature we build and every recommendation we make.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group relative bg-[#f4f7fb] border border-gray-100 rounded-2xl p-8 hover:border-[#00CFB8] transition-all duration-500 flex flex-col items-center text-center hover:shadow-2xl hover:shadow-teal-100"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00CFB8]/15 rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-[#002855] flex items-center justify-center mb-6 group-hover:bg-[#00CFB8] transition-all duration-300 shadow-lg">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold text-[#002855] mb-3 tracking-wide">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-[#00CFB8] text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 4: LEADERSHIP — Image LEFT          */}
      {/* ========================================== */}
      <section className="py-24 bg-[#f4f7fb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img
                  src={TeamImg}
                  alt="Product Leadership"
                  className="rounded-2xl shadow-xl w-full max-w-md object-cover object-top h-[580px]"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#002855]/50 to-transparent" />

                {/* Floating Card */}
                <div className="absolute -bottom-6 -right-6 w-72 bg-white rounded-xl shadow-xl p-4 z-20 border border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-[#00CFB8] flex items-center justify-center text-white">
                      <Award size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#002855]">Product Leadership Team</h4>
                      <p className="text-xs text-[#00CFB8]">AppOptimax</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Driving ASO innovation with AI-powered intelligence and practical growth tooling.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">
                Leadership
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-3 mb-6">
                Built by People Who Understand App Growth
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                AppOptimax is led by a team with deep experience in app marketing, ASO strategy, and data engineering. We've seen firsthand how fragmented tools and guesswork hold growth teams back.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                That's why we built a platform where keyword research, difficulty scoring, competitor benchmarking, localization, and forecasting aren't separate products — they're one connected workflow.
              </p>
              <div className="p-6 bg-white rounded-xl border border-gray-100">
                <p className="text-gray-600 italic leading-relaxed">
                  "App growth teams need more than basic keyword tracking. AppOptimax combines keyword intelligence, competitor analysis, localization insights, and forecasting to turn ASO into a repeatable growth engine."
                </p>
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-[#002855] flex items-center justify-center text-white text-xs font-bold">PL</div>
                  <div>
                    <p className="text-sm font-semibold text-[#002855]">Product Leadership</p>
                    <p className="text-xs text-gray-400">AppOptimax</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 5: WHY CHOOSE US — Dark Blue         */}
      {/* ========================================== */}
      <section className="py-24 bg-[#002855] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00CFB8] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00CFB8] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Why AppOptimax
            </motion.span>
            <motion.h2 className="text-3xl md:text-5xl font-bold text-white mt-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              Not Just Another ASO Tool
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <CheckCircle2 size={22} />, title: "Unified Platform", desc: "Research, optimize, monitor, and forecast — all in one place. No more switching between five tabs." },
              { icon: <CheckCircle2 size={22} />, title: "AI-First Approach", desc: "Every module uses machine learning to surface insights faster — from keyword suggestions to sentiment analysis." },
              { icon: <CheckCircle2 size={22} />, title: "Real Store Data", desc: "We model search behavior from actual store data, not scraped estimates. Updated weekly across all markets." },
              { icon: <CheckCircle2 size={22} />, title: "Built for Teams", desc: "Shared dashboards, exportable reports, and collaborative workflows designed for growth teams of any size." },
              { icon: <CheckCircle2 size={22} />, title: "Global From Day One", desc: "60+ countries, 40+ languages, both app stores. Localization isn't an add-on — it's built into every module." },
              { icon: <CheckCircle2 size={22} />, title: "Actionable Output", desc: "Every insight comes with a clear next step. We don't just show data — we tell you what to do with it." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="text-[#00CFB8] mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* CTA SECTION — Dark Blue Gradient            */}
      {/* ========================================== */}
      <section className="relative py-24 bg-gradient-to-r from-[#002855] to-[#003d7a]">
        <motion.div className="relative z-10 max-w-3xl mx-auto px-6 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            See AppOptimax in Action
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Book a free 15-minute walkthrough. We'll show you how keyword intelligence, competitor analysis, and forecasting work together on one platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-[#00CFB8] text-white font-medium rounded-lg hover:bg-[#00B5A0] transition-colors shadow-lg shadow-[#00CFB8]/20 flex items-center gap-2">
              Request a Demo <ArrowRight size={18} />
            </Link>
            <Link href="/chapters/alpha" className="px-8 py-4 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
              Explore Modules →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* SCROLL TO TOP BUTTON */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-[#002855] text-white rounded-full shadow-lg hover:bg-[#00CFB8] transition-colors group focus:outline-none focus:ring-2 focus:ring-[#00CFB8]"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      )}

    </div>
  )
}

export default About