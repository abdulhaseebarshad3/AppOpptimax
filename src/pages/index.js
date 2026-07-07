import React, { useState, useEffect, useRef, useCallback } from 'react'
import dynamic from 'next/dynamic'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react';
import Link from 'next/link'
import {
  ArrowRight, Shield, Plane, Cpu, Users, ArrowUpRight, SkipForward,
  ChevronRight, ChevronLeft, Globe, Calendar, User, FileText, Briefcase,
  CalendarDays, MapPin, Clock, Download, Rocket, Network, Building2,
  Compass, MessageCircle, X, Send, Bot
} from 'lucide-react'

const TrustBadges = dynamic(
  () => import('../sections/SharedSections').then((m) => m.TrustBadges),
  { loading: () => null }
)
const TestimonialsSlider = dynamic(
  () => import('../sections/SharedSections').then((m) => m.TestimonialsSlider),
  { loading: () => null }
)
const FAQAccordion = dynamic(
  () => import('../sections/SharedSections').then((m) => m.FAQAccordion),
  { loading: () => null }
)

const ASOplatform = '/images/ASOplatform.png';
const ASOHealth = '/images/ASOhealth.png';
const Research = '/images/Keywordresearch.png';
const Difficulty = '/images/Keyworddifficulty.png';
const Analytic = '/images/Analysticdata.png';
const LocalAso = '/images/localaso.png';
const Overview = '/images/Overview.png';
const Kpi = '/images/kpidata.png';
const Appforcasting = '/images/appforcasting.png';
const Admob = '/images/Admobanalytics.png';
const alphalogo = '/images/alpha-logo.gif';
const deltalogo = '/images/delta-logo.gif';
const siliconlogo = '/images/sierra-logo.gif';
const kamralogo = '/images/kamra-logo.gif';
const kharianlogo = '/images/kharian-logo.png';
const Blog1='/images/Blog1.png'
const Blog2='/images/Blog2.png'
const Blog3='/images/Blog3.png'
const Blog4='/images/Blog4.png'
const Blog5='/images/Blog5.png'
const Blog6='/images/Blog6.png'
// Hero background video
const HERO_VIDEO_SRC = 'https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4';

const Home = () => {
  // --- State Definitions ---
  const [showIntro, setShowIntro] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeCard, setActiveCard] = useState(0)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const skipIntro = useCallback(() => {
    setShowIntro(false)
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('introSeen', '1')
    }
  }, [])

  useEffect(() => {
    if (sessionStorage.getItem('introSeen') === '1') {
      setShowIntro(false)
    }
  }, [])

  // Refs
  const introRef = useRef(null)
  const videoRef = useRef(null)
  const [videoDuration, setVideoDuration] = useState(0)

  // 1. Load Video Metadata
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadedmetadata', () => {
        setVideoDuration(video.duration);
      });
    }
  }, []);

  // 2. Optimized Scroll Listener with requestAnimationFrame
  useEffect(() => {
    if (!showIntro) return

    let animationFrameId = null;

    const onScroll = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      animationFrameId = requestAnimationFrame(() => {
        const el = introRef.current
        const video = videoRef.current
        if (!el || !video) return

        const { scrollTop, clientHeight } = document.documentElement
        const sectionBottom = el.offsetTop + el.offsetHeight
        
        // Calculate progress (0.0 to 1.0)
        let rawProgress = (scrollTop - el.offsetTop) / (sectionBottom - clientHeight)
        rawProgress = Math.min(Math.max(rawProgress, 0), 1)

        setScrollProgress(rawProgress)

        // Scrub video smoothly
        if (videoDuration) {
          const targetTime = rawProgress * videoDuration;
          // Only update if difference is significant enough to avoid jitter
          if (Math.abs(video.currentTime - targetTime) > 0.05) {
             video.currentTime = targetTime;
          }
        }
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    }
  }, [showIntro, videoDuration])

  const slides = [
    { image: ASOplatform, title: "AI-Powered", highlight: "ASO Platform", description: "Improve visibility, keyword rankings, and organic downloads across iOS and Android." },
    { image: Research, title: "Research", highlight: "Keyword Research", description: "Find untapped opportunities through metadata, store performance, and keyword insights.", path: "/products/KeywordResearch" },
    { image: Difficulty, title: "Difficulty", highlight: "Keyword Difficulty", description: "Identify high-impact, low-competition keywords with real-time difficulty scoring.", path: "/products/KeywordDifficulty" },
    { image: Analytic, title: "Insights", highlight: "Competitor Analysis", description: "Benchmark top apps, compare categories, and reveal strategic gaps in the market.", path: "/products/KeywordResearch" },
    { image: LocalAso, title: "Scale", highlight: "Localized ASO", description: "Tailor metadata, screenshots, and keyword strategy for each country and language.", path: "/products/CompetitorAnalysis" },
    { image: Kpi, title: "Growth", highlight: "Forecasting & KPI", description: "Track core metrics and predict installs with practical lower and upper bounds.", path: "/products/KPIData" }
  ]

  useEffect(() => {
    if (!showIntro) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [showIntro, slides.length])

  const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
  
  // REMOVED scale from variants to fix the "zoomed in" image issue
  const slideVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 }
  }

  // Parallax Transforms
  const videoTranslateY = scrollProgress * -100        
  const videoScale = 1 + scrollProgress * 0.15        
  const overlayOpacity = 0.5 + scrollProgress * 0.4   
  const textOpacity = 1 - scrollProgress * 3          
  const textTranslateY = scrollProgress * -80         

  const divisions = [
    { title: "ASO Health", desc: "Discover high-impact keywords using real app store data, trends, and competitor insights.", icon: alphalogo, img: ASOHealth, path: "/products/ASOHealth" },
    { title: "Keyword Intelligence", desc: "Discover high-impact keywords using real app store data, trends, and competitor insights.", icon: alphalogo, img: Research, path: "/products/KeywordIntelligence" },
    { title: "Powerful Competitor Analysis", desc: "Benchmark competitors by tracking their keywords, rankings, installs, and app store strategies.", icon: kamralogo, img: Analytic, path: "/products/CompetitorAnalysis" },
    { title: "KPI & Forecasting", desc: "Monitor key performance indicators and predict future growth, installs, and revenue trends.", icon: kharianlogo, img: Appforcasting, path: "/products/KPIData" },
    { title: "Review & Rating With AI Sentiment Analysis", desc: "Analyze user reviews and ratings using AI to uncover sentiment trends and improvement areas.", icon: alphalogo, img: Kpi, path: "/products/Reviews&Rating" },
    { title: "Admob", desc: "Measure keyword competitiveness with data-driven scoring to prioritize ranking opportunities.", icon: siliconlogo, img: Admob, path: "/products/AdMob" }
  ]

  const newsData = [
    { title: "ASO in 2026: Creative Assets, Engagement & Conversion Growth", category: "ASO Trends", date: "Jan 27, 2026", author: "AppOptimax Editorial", img: Blog1, excerpt: "How visual assets and listing experiments improve conversion after discovery." },
    { title: "ASO in 2026: Search, AI, and Personalization Trends", category: "AI Insights", date: "Jan 27, 2026", author: "Growth Lab", img: Blog2, excerpt: "A practical framework for AI-era app discovery across evolving store behavior." },
    { title: "Ratings and Reviews: A Practical ASO Playbook", category: "Guides", date: "Oct 13, 2025", author: "Product Team", img: Blog3, excerpt: "Understand how review velocity and sentiment influence visibility and conversion." },
    { title: "Localize for Growth: Winning New Markets", category: "Localization", date: "Oct 13, 2025", author: "Market Intelligence", img: Blog4, excerpt: "Adapt keywords, metadata, and visuals for region-level growth opportunities." },
    { title: "Boost Installs With Smarter Listing Optimization", category: "Optimization", date: "Oct 13, 2025", author: "ASO Strategy", img: Blog5, excerpt: "Use store page improvements to convert visibility into sustainable installs." },
    { title: "From Keywords to Full-Funnel Growth Strategy", category: "Strategy", date: "Oct 13, 2025", author: "App Growth Team", img: Blog6, excerpt: "Move from isolated keyword work to a measurable growth operating system." }
  ]

  const pressReleases = [
    { id: 1, title: "App Store Metadata Optimization Guide", date: "Feb 12, 2026", type: "PDF" },
    { id: 2, title: "AI Keyword Scoring Methodology", date: "Jan 30, 2026", type: "PDF" },
    { id: 3, title: "Quarterly ASO Market Benchmark", date: "Jan 10, 2026", type: "PDF" },
    { id: 4, title: "Localization Rollout Framework", date: "Dec 18, 2025", type: "PDF" },
  ]

  const currentJobs = [
    { id: 1, title: "Senior ASO Strategist", dept: "Growth", location: "Remote", type: "Full Time" },
    { id: 2, title: "AI Product Analyst", dept: "Product", location: "San Francisco", type: "Full Time" },
    { id: 3, title: "Mobile Market Researcher", dept: "Intelligence", location: "London", type: "Contract" },
    { id: 4, title: "Customer Success Manager", dept: "Operations", location: "Dubai", type: "Part Time" },
  ]

  const upcomingEvents = [
    { id: 1, title: "ASO Benchmark Webinar", date: "May 15, 2026", time: "09:00 AM", venue: "Online" },
    { id: 2, title: "Keyword Strategy Masterclass", date: "May 20, 2026", time: "02:00 PM", venue: "Virtual Studio" },
    { id: 3, title: "Localization Playbook Session", date: "Jun 05, 2026", time: "10:00 AM", venue: "Online" },
    { id: 4, title: "Forecasting & KPI Roundtable", date: "Jun 12, 2026", time: "11:00 AM", venue: "Hybrid" },
  ]

  const entities = [
    { title: "Research & Discovery", desc: "Find high-traffic, low-difficulty keywords and map market demand.", icon: <Rocket className="w-8 h-8 text-white" /> },
    { title: "Optimize & Execute", desc: "Improve metadata, creative assets, and localization with AI guidance.", icon: <Network className="w-8 h-8 text-white" /> },
    { title: "Monitor & Grow", desc: "Track rankings, sentiment, competitor movement, and growth outcomes.", icon: <Building2 className="w-8 h-8 text-white" /> },
    { title: "Forecast & Scale", desc: "Plan ahead using install forecasts, KPI dashboards, and monetization metrics.", icon: <Compass className="w-8 h-8 text-white" /> },
  ]

  return (
    <div className="bg-[#f4f7fb]">

      {/* ── HERO SECTION ─────────────────────────────────────────────────── */}
      <section ref={introRef} className={`relative ${showIntro ? 'h-[300vh]' : 'h-screen'}`}>

        {/* Scroll Progress Bar */}
        {showIntro && (
          <div className="fixed top-0 left-0 z-[60] w-full h-[3px] bg-white/10 pointer-events-none">
            <div
              className="h-full bg-[#00CFB8] transition-none"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
        )}

        {/* INTRO: Sticky Scroll-Scrub Video */}
        {showIntro && (
          <motion.div
            className="sticky top-0 h-screen w-full overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <div
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{
                transform: `translateY(${videoTranslateY}px) scale(${videoScale})`,
                transformOrigin: 'center center',
                willChange: 'transform',
                transition: 'transform 0.1s linear', 
              }}
            >
              <video
                ref={videoRef}
                className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
                src={HERO_VIDEO_SRC}
                muted
                playsInline
                preload="metadata"
              />
            </div>

            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `linear-gradient(to right, rgba(0,40,85,${overlayOpacity}) 0%, rgba(0,40,85,${overlayOpacity * 0.6}) 50%, transparent 100%)`,
                transition: 'background 0.1s linear',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002855] via-transparent to-[#002855]/20 pointer-events-none" />

            <div
              className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full h-full flex flex-col justify-center"
              style={{
                opacity: Math.max(textOpacity, 0),
                transform: `translateY(${textTranslateY}px)`,
                transition: 'opacity 0.1s linear, transform 0.1s linear',
                willChange: 'opacity, transform',
              }}
            >
              <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl">
                <span className="inline-block px-4 py-2 bg-[#00CFB8]/30 border border-[#00CFB8]/50 rounded-full text-sm text-white mb-6 font-medium">
                  AI-Powered App Store Optimization Platform
                </span>
                <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
                  SCALE APP GROWTH WITH <br />
                  <span className="text-[#00CFB8]">AI-DRIVEN ASO </span> INTELLIGENCE
                </h1>
                <p className="text-lg text-gray-200 mb-8 max-w-xl">
                  AppOptimax helps app teams improve rankings, conversion, and organic installs
                  with actionable keyword and market intelligence.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
              style={{ opacity: Math.max(1 - scrollProgress * 4, 0) }}
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            >
              <span className="text-xs text-white/60 uppercase tracking-widest font-medium">Scroll to Explore</span>
              <ChevronDown className="text-[#00CFB8]" size={22} />
            </motion.div>

            <button
              onClick={skipIntro}
              className="absolute bottom-10 right-10 z-20 flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-white/20 transition-colors group"
            >
              Skip Intro <SkipForward size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        )}

        {/* SLIDER (after skip intro) */}
        {!showIntro && (
          <div className="relative h-screen w-full bg-[#002855]">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentSlide} 
                variants={slideVariants}
                initial="enter" 
                animate="center" 
                exit="exit" 
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {/* 
                   FIX APPLIED:
                   1. Removed scale animation (handled in slideVariants).
                   2. Used 'object-cover' to fill the screen nicely.
                   3. Added 'object-center' to ensure image stays centered.
                */}
                <img 
                  src={slides[currentSlide].image} 
                  alt="Slide" 
                  className="w-full h-full object-cover object-center" 
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#002855]/95 via-[#002855]/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002855] via-transparent to-[#002855]/10" />
              </motion.div>
            </AnimatePresence>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full h-full flex items-center">
              <div className="max-w-3xl">
                <motion.span 
                  key={`badge-${currentSlide}`} 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="inline-block px-4 py-2 bg-[#00CFB8]/20 border border-[#00CFB8]/50 rounded-full text-sm text-white mb-6"
                >
                  AI-Powered App Store Optimization Platform
                </motion.span>
                
                <motion.h1 
                  key={`title-${currentSlide}`} 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.1 }} 
                  className="text-2xl md:text-2xl font-bold text-white leading-tight mb-6"
                >
                  {slides[currentSlide].title} <br />
                  <span className="text-[#00CFB8] text-2xl md:text-6xl font-bold leading-tight mb-6">
                    {slides[currentSlide].highlight}
                  </span>
                </motion.h1>
                
                <motion.p 
                  key={`desc-${currentSlide}`} 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.2 }} 
                  className="text-lg text-gray-200 mb-8 max-w-xl"
                >
                  {slides[currentSlide].description}
                </motion.p>
                
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href={slides[currentSlide].path || "/about"} 
                    className="px-8 py-3 bg-[#00CFB8] text-white font-medium rounded hover:bg-[#00B5A0] transition-colors flex items-center gap-2 shadow-lg"
                  >
                    Explore Modules <ArrowRight size={18} />
                  </Link>
                  <Link 
                    href="/about" 
                    className="px-8 py-3 border border-white/30 text-white font-medium rounded hover:bg-white/10 transition-colors backdrop-blur-sm"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
              {slides.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrentSlide(i)} 
                  className={`h-2 rounded-full transition-all ${i === currentSlide ? 'w-8 bg-[#00CFB8]' : 'w-2 bg-white/40 hover:bg-white/60'}`} 
                />
              ))}
            </div>

            {/* Arrows */}
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors" 
              onClick={() => setCurrentSlide(prev => prev === 0 ? slides.length - 1 : prev - 1)}
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors" 
              onClick={() => setCurrentSlide(prev => (prev + 1) % slides.length)}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </section>
      {/* END HERO */}

      <TrustBadges />

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <img src={ASOHealth} alt="ASO Health Dashboard" className="rounded-2xl shadow-xl w-full object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">ASO Health</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-3 mb-6">Monitor Your App's ASO Health in Real Time</h2>
              <p className="text-gray-600 leading-relaxed mb-6">The ASO Health module gives you a comprehensive scorecard that reflects the true optimization status of your app listing. It evaluates keyword density, metadata completeness, visual asset quality, rating trends, and review sentiment — all in one unified view.</p>
              <p className="text-gray-600 leading-relaxed mb-6">Instead of guessing where your ASO is falling short, you get a clear, data-driven health score with prioritized action items. Identify weaknesses before they impact your rankings, and track improvements over time as you optimize.</p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-[#00CFB8] rounded-full" />Unified ASO Health Score & Scorecard</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-[#00CFB8] rounded-full" />Metadata Completeness & Keyword Density Check</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-[#00CFB8] rounded-full" />Rating & Review Sentiment Tracking</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-[#00CFB8] rounded-full" />Prioritized Action Items for Quick Wins</li>
              </ul>
              <Link href="/products/ASOHealth" className="inline-flex items-center gap-2 text-[#00CFB8] mt-8 hover:gap-3 transition-all font-semibold">Check Your ASO Health <ArrowRight size={18} /></Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DIVISIONS */}
      <section className="py-24 bg-[#f4f7fb] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,40,85,0.2),transparent_70%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h1 className="text-2xl font-semibold text-[#00CFB8] uppercase tracking-wider" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>ASO MODULES</motion.h1>
            <motion.span className="text-3xl font-semibold text-[#002855] uppercase tracking-wider mt-2 block" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>ONE PLATFORM. END-TO-END APP GROWTH</motion.span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-4">
              {divisions.slice(0, Math.ceil(divisions.length / 2)).map((item, i) => (
                <motion.div key={`left-${i}`} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }} className="group">
                  <div onClick={() => setActiveCard(activeCard === i ? -1 : i)} className={`relative rounded-2xl overflow-hidden cursor-pointer border transition-all duration-500 shadow-md ${activeCard === i ? 'border-[#00CFB8]/60 shadow-xl shadow-[#00CFB8]/10' : 'border-white/60 hover:border-[#00CFB8]/30'}`}>
                    <div className="relative h-[70px] overflow-hidden">
                      <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                      <div className={`absolute inset-0 transition-all duration-500 ${activeCard === i ? 'bg-gradient-to-r from-[#002855]/95 via-[#002855]/80 to-[#002855]/60' : 'bg-gradient-to-r from-[#002855]/90 via-[#002855]/70 to-[#002855]/50'}`} />
                      <div className="absolute top-3 right-4 text-2xl font-bold text-white/25 group-hover:text-[#00CFB8]/80 transition-colors duration-300 z-10">{i + 1 < 10 ? `0${i + 1}` : i + 1}</div>
                      <div className="absolute inset-0 flex items-center justify-between px-5 z-10">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10"><img src={item.icon} alt={item.title} className="w-6 h-6 object-contain" /></div>
                          <h3 className="text-base md:text-lg font-bold text-white">{item.title}</h3>
                        </div>
                        <motion.div animate={{ rotate: activeCard === i ? 180 : 0 }} transition={{ duration: 0.3 }} className="text-white/70"><ChevronDown size={20} /></motion.div>
                      </div>
                    </div>
                    <motion.div initial={false} animate={{ height: activeCard === i ? 'auto' : 0, opacity: activeCard === i ? 1 : 0 }} transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }} className="overflow-hidden">
                      <div className="bg-[#002855]/95 backdrop-blur-sm px-5 py-5 border-t border-white/10">
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">{item.desc}</p>
                        <Link href={item.path}><button className="flex items-center gap-2 text-[#00CFB8] font-medium text-sm group/btn hover:gap-3 transition-all duration-300">Learn More<ArrowRight size={14} className="transform group-hover/btn:translate-x-1 transition-transform" /></button></Link>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              {divisions.slice(Math.ceil(divisions.length / 2)).map((item, i) => {
                const realIndex = i + Math.ceil(divisions.length / 2);
                return (
                  <motion.div key={`right-${i}`} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }} className="group">
                    <div onClick={() => setActiveCard(activeCard === realIndex ? -1 : realIndex)} className={`relative rounded-2xl overflow-hidden cursor-pointer border transition-all duration-500 shadow-md ${activeCard === realIndex ? 'border-[#00CFB8]/60 shadow-xl shadow-[#00CFB8]/10' : 'border-white/60 hover:border-[#00CFB8]/30'}`}>
                      <div className="relative h-[70px] overflow-hidden">
                        <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                        <div className={`absolute inset-0 transition-all duration-500 ${activeCard === realIndex ? 'bg-gradient-to-r from-[#002855]/95 via-[#002855]/80 to-[#002855]/60' : 'bg-gradient-to-r from-[#002855]/90 via-[#002855]/70 to-[#002855]/50'}`} />
                        <div className="absolute top-3 right-4 text-2xl font-bold text-white/25 group-hover:text-[#00CFB8]/80 transition-colors duration-300 z-10">{realIndex + 1 < 10 ? `0${realIndex + 1}` : realIndex + 1}</div>
                        <div className="absolute inset-0 flex items-center justify-between px-5 z-10">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10"><img src={item.icon} alt={item.title} className="w-6 h-6 object-contain" /></div>
                            <h3 className="text-base md:text-lg font-bold text-white">{item.title}</h3>
                          </div>
                          <motion.div animate={{ rotate: activeCard === realIndex ? 180 : 0 }} transition={{ duration: 0.3 }} className="text-white/70"><ChevronDown size={20} /></motion.div>
                        </div>
                      </div>
                      <motion.div initial={false} animate={{ height: activeCard === realIndex ? 'auto' : 0, opacity: activeCard === realIndex ? 1 : 0 }} transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }} className="overflow-hidden">
                        <div className="bg-[#002855]/95 backdrop-blur-sm px-5 py-5 border-t border-white/10">
                          <p className="text-gray-300 text-sm leading-relaxed mb-4">{item.desc}</p>
                          <Link href={item.path}><button className="flex items-center gap-2 text-[#00CFB8] font-medium text-sm group/btn hover:gap-3 transition-all duration-300">Learn More<ArrowRight size={14} className="transform group-hover/btn:translate-x-1 transition-transform" /></button></Link>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Localized ASO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <img src={LocalAso} alt="Localized ASO Insights" className="rounded-2xl shadow-xl w-full object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Feature</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-3 mb-6">Localized ASO Insights</h2>
              <p className="text-gray-600 leading-relaxed mb-6">The Localized ASO Insights Module helps you understand exactly how apps perform across different countries and languages. It reveals localized descriptions with key details like developer, version, pricing, and updates so you can see how apps adapt their presence for each market.</p>
              <p className="text-gray-600 leading-relaxed mb-6">You also gain visibility into localized screenshots—spotting which visuals are high-quality and effective in different regions. On top of that, module uncovers localized keyword usage, keyword count, and how these connect to average ratings and user engagement.</p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-[#00CFB8] rounded-full" />Country & Language Performance Visibility</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-[#00CFB8] rounded-full" />Localized Screenshot Quality Analysis</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-[#00CFB8] rounded-full" />Keyword Usage & Rating Correlation Insights</li>
              </ul>
              <Link href="/products/LocalizedAso" className="inline-flex items-center gap-2 text-[#00CFB8] mt-8 hover:gap-3 transition-all font-semibold">Explore Localized Insights <ArrowRight size={18} /></Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="order-2 lg:order-1">
              <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Feature</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-3 mb-6">Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-6">Stay ahead of market with live insights into top free, paid, and grossing apps across Google Play and Apple App Store. Benchmark your app against best, discover emerging trends, and fuel smarter growth decisions with real-time data.</p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-[#00CFB8] rounded-full" />Real-Time Top Free, Paid & Grossing Rankings</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-[#00CFB8] rounded-full" />Category-Level Trend Discovery</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-[#00CFB8] rounded-full" />Competitor Benchmarking & Position Tracking</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-[#00CFB8] rounded-full" />Monetization Pattern Analysis</li>
              </ul>
              <Link href="/top-apps" className="inline-flex items-center gap-2 text-[#00CFB8] mt-8 hover:gap-3 transition-all font-semibold">View Top Apps <ArrowRight size={18} /></Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="order-1 lg:order-2">
              <img src={Overview} alt="Top Grossing Apps Analytics" className="rounded-2xl shadow-xl w-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Entities */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#00CFB8]/5 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#002855]/5 rounded-full blur-3xl opacity-30"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.span className="inline-block px-4 py-2 bg-[#002855]/10 border border-[#002855]/20 rounded-full text-sm text-[#002855] mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Framework</motion.span>
            <motion.h2 className="text-3xl md:text-5xl font-bold text-[#002855] mt-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>Research, Execution, and Growth Loop</motion.h2>
            <motion.p className="text-lg text-gray-500 mt-4 max-w-3xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>A practical ASO lifecycle: discover opportunities, optimize listings, monitor outcomes, and scale what works.</motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {entities.map((entity, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="group relative bg-[#f4f7fb] border border-gray-100 rounded-2xl p-8 hover:border-[#00CFB8] transition-all duration-500 flex flex-col items-center text-center hover:shadow-2xl hover:shadow-teal-100">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00CFB8]/15 rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-[#002855] flex items-center justify-center mb-6 group-hover:bg-[#00CFB8] transition-all duration-300 shadow-lg">{entity.icon}</div>
                  <h3 className="text-xl font-bold text-[#002855] mb-3 tracking-wide">{entity.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{entity.desc}</p>
                  <Link href="#" className="inline-flex items-center gap-2 text-[#00CFB8] text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">Explore <ArrowRight size={14} /></Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-24 bg-[#f4f7fb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Insights & Guides</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2">Latest ASO Articles</h2>
            </div>
            <Link href="/news" className="mt-4 md:mt-0 inline-flex items-center gap-2 text-[#002855] font-medium hover:text-[#00CFB8] transition-all">View All Insights <ArrowRight size={18} /></Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <motion.div className="lg:col-span-2 lg:row-span-2 relative group rounded-2xl overflow-hidden h-[500px] lg:h-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <img src={newsData[0].img} alt={newsData[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002855] via-[#002855]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 z-10">
                <span className="inline-block px-3 py-1 bg-[#00CFB8] text-white text-xs font-semibold rounded-full mb-4">{newsData[0].category}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">{newsData[0].title}</h3>
                <p className="text-gray-200 mb-4 hidden md:block">{newsData[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-300">
                  <span className="flex items-center gap-1"><User size={14} /> {newsData[0].author}</span>
                  <span className="flex items-center gap-1"><Calendar size={14} /> {newsData[0].date}</span>
                </div>
              </div>
            </motion.div>
            <div className="flex flex-col gap-6">
              {newsData.slice(1, 3).map((news, idx) => (
                <motion.div key={idx} className="relative group rounded-2xl overflow-hidden h-[240px]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * (idx + 1) }}>
                  <img src={news.img} alt={news.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002855] via-[#002855]/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 z-10">
                    <span className="inline-block px-2 py-1 bg-[#00CFB8]/80 text-white text-[10px] font-semibold rounded mb-2">{news.category}</span>
                    <h3 className="text-lg font-bold text-white leading-tight">{news.title}</h3>
                    <div className="flex items-center gap-3 text-xs text-gray-300 mt-2"><span className="flex items-center gap-1"><Calendar size={12} /> {news.date}</span></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {newsData.slice(3, 6).map((news, i) => (
              <motion.div key={i} className="bg-white rounded-2xl overflow-hidden group border border-gray-100 hover:border-[#00CFB8]/30 transition-colors shadow-sm" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="h-48 overflow-hidden"><img src={news.img} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                <div className="p-6">
                  <span className="inline-block px-2 py-1 bg-[#002855]/10 text-[#002855] text-[10px] font-semibold rounded mb-3">{news.category}</span>
                  <h3 className="text-lg font-bold text-[#002855] mb-2 leading-tight">{news.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-3">{news.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {news.date}</span>
                    <span className="flex items-center gap-1"><User size={12} /> {news.author}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Resource Center */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Quick Access</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2">Growth Resource Center</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div className="bg-[#f4f7fb] rounded-2xl overflow-hidden border border-gray-100" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="p-6 border-b border-gray-100 bg-[#002855]/5"><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-lg bg-[#00CFB8]/20 flex items-center justify-center"><FileText className="w-5 h-5 text-[#00CFB8]" /></div><h3 className="text-xl font-bold text-[#002855]">Resources</h3></div></div>
              <div className="h-64 overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-[#f4f7fb] to-transparent z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#f4f7fb] to-transparent z-10 pointer-events-none" />
                <motion.div className="p-4 space-y-3" animate={{ y: ["0%", "-50%"] }} transition={{ duration: 15, ease: "linear", repeat: Infinity }}>
                  {[...pressReleases, ...pressReleases].map((item, idx) => (
                    <div key={`${item.id}-${idx}`} className="group"><Link href="#" className="flex items-start gap-3 p-3 rounded-lg hover:bg-white transition-colors"><div className="flex-shrink-0 w-10 h-10 rounded bg-white border border-gray-100 flex items-center justify-center"><FileText size={18} className="text-[#00CFB8]" /></div><div className="flex-1 min-w-0"><h4 className="text-sm font-medium text-[#002855] truncate group-hover:text-[#00CFB8] transition-colors">{item.title}</h4><p className="text-xs text-gray-400 mt-1">{item.date} • {item.type}</p></div></Link></div>
                  ))}
                </motion.div>
              </div>
              <div className="p-4 border-t border-gray-100 text-center"><Link href="/news" className="text-sm text-[#00CFB8] font-medium hover:underline">View All Resources</Link></div>
            </motion.div>
            <motion.div className="bg-[#f4f7fb] rounded-2xl overflow-hidden border border-gray-100" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="p-6 border-b border-gray-100 bg-[#002855]/5"><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-lg bg-[#00CFB8]/20 flex items-center justify-center"><Briefcase className="w-5 h-5 text-[#00CFB8]" /></div><h3 className="text-xl font-bold text-[#002855]">Open Roles</h3></div></div>
              <div className="h-64 overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-[#f4f7fb] to-transparent z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#f4f7fb] to-transparent z-10 pointer-events-none" />
                <motion.div className="p-4 space-y-3" animate={{ y: ["0%", "-50%"] }} transition={{ duration: 18, ease: "linear", repeat: Infinity }}>
                  {[...currentJobs, ...currentJobs].map((job, idx) => (
                    <div key={`${job.id}-${idx}`} className="group"><Link href="#" className="block p-3 rounded-lg hover:bg-white transition-colors border border-transparent hover:border-gray-100"><div className="flex justify-between items-start mb-1"><h4 className="text-sm font-medium text-[#002855] group-hover:text-[#00CFB8] transition-colors">{job.title}</h4><span className="text-[10px] bg-[#00CFB8]/10 text-[#00B5A0] px-2 py-0.5 rounded-full font-medium">{job.type}</span></div><div className="flex items-center gap-2 text-xs text-gray-500"><span>{job.dept}</span><span>•</span><span>{job.location}</span></div></Link></div>
                  ))}
                </motion.div>
              </div>
              <div className="p-4 border-t border-gray-100 text-center"><Link href="/contact" className="text-sm text-[#00CFB8] font-medium hover:underline">Join Our Team</Link></div>
            </motion.div>
            <motion.div className="bg-[#f4f7fb] rounded-2xl overflow-hidden border border-gray-100" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="p-6 border-b border-gray-100 bg-[#002855]/5"><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-lg bg-[#00CFB8]/20 flex items-center justify-center"><CalendarDays className="w-5 h-5 text-[#00CFB8]" /></div><h3 className="text-xl font-bold text-[#002855]">Upcoming Sessions</h3></div></div>
              <div className="h-64 overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-[#f4f7fb] to-transparent z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#f4f7fb] to-transparent z-10 pointer-events-none" />
                <motion.div className="p-4 space-y-3" animate={{ y: ["0%", "-50%"] }} transition={{ duration: 20, ease: "linear", repeat: Infinity }}>
                  {[...upcomingEvents, ...upcomingEvents].map((event, idx) => (
                    <div key={`${event.id}-${idx}`} className="group"><Link href="#" className="flex items-start gap-3 p-3 rounded-lg hover:bg-white transition-colors"><div className="flex-shrink-0 w-12 h-14 rounded-lg bg-white border border-gray-100 flex flex-col items-center justify-center text-center shadow-sm"><span className="text-xs text-[#00CFB8] font-medium uppercase">{event.date.split(' ')[0]}</span><span className="text-lg font-bold text-[#002855] leading-none">{event.date.split(' ')[1].replace(',', '')}</span></div><div className="flex-1 min-w-0"><h4 className="text-sm font-medium text-[#002855] group-hover:text-[#00CFB8] transition-colors mb-1">{event.title}</h4><div className="flex items-center gap-2 text-xs text-gray-500"><Clock size={10} /><span>{event.time}</span></div><div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5"><MapPin size={10} /><span>{event.venue}</span></div></div></Link></div>
                  ))}
                </motion.div>
              </div>
              <div className="p-4 border-t border-gray-100 text-center"><Link href="/news" className="text-sm text-[#00CFB8] font-medium hover:underline">View All Sessions</Link></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-[#002855]">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1519669556878-63bdad8a1a49?q=80&w=2072&auto=format&fit=crop" alt="Airport" className="w-full h-full object-cover" />
        </div>
        <motion.div className="relative z-10 max-w-3xl mx-auto px-6 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Scale Your App With Smarter ASO</h2>
          <p className="text-gray-300 mb-8 text-lg">Turn app store data into growth decisions with keyword intelligence, competitor tracking, and AI-powered optimization workflows.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#00CFB8] text-white font-medium rounded hover:bg-[#00B5A0] transition-colors shadow-lg">Request a Demo <ArrowUpRight size={18} /></Link>
        </motion.div>
      </section>

      <TestimonialsSlider />
      <FAQAccordion />

      {/* Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div initial={{ opacity: 0, y: 50, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 50, scale: 0.9 }} transition={{ type: "spring", stiffness: 300, damping: 25 }} className="absolute bottom-20 right-0 w-[320px] md:w-[380px] h-[500px] bg-white border border-gray-100 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
              <div className="p-4 bg-[#002855] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#00CFB8] flex items-center justify-center"><Bot className="text-white" size={20} /></div>
                <div className="flex-1"><h3 className="text-white font-bold text-lg">AppOptimax Assistant</h3><span className="text-xs text-gray-300 flex items-center gap-1.5"><span className="w-2 h-2 bg-[#00CFB8] rounded-full animate-pulse"></span> Online</span></div>
                <button onClick={() => setIsChatOpen(false)} className="text-white/70 hover:text-white transition-colors"><X size={20} /></button>
              </div>
              <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-[#f4f7fb]">
                <div className="flex gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#002855] flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">N</div>
                  <div className="bg-white border border-gray-100 p-3 rounded-xl rounded-tl-none text-sm text-gray-800 max-w-[85%] shadow-sm">Hello! Welcome to AppOptimax. Want help with keyword strategy, competitor analysis, or localization insights?</div>
                </div>
                <div className="flex flex-wrap gap-2 pl-10">
                  <button className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs text-[#002855] hover:bg-gray-50 transition-colors">Keyword Research</button>
                  <button className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs text-[#002855] hover:bg-gray-50 transition-colors">Book Demo</button>
                </div>
              </div>
              <div className="p-4 border-t border-gray-100 bg-white">
                <div className="flex items-center gap-2">
                  <input type="text" placeholder="Type your message..." className="flex-1 bg-[#f4f7fb] border border-gray-200 rounded-full px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#00CFB8] transition-colors" />
                  <button className="w-10 h-10 bg-[#00CFB8] rounded-full flex items-center justify-center text-white hover:bg-[#00B5A0] transition-colors shadow-lg"><Send size={18} className="ml-0.5" /></button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setIsChatOpen(!isChatOpen)} className="w-16 h-16 rounded-full bg-[#00CFB8] flex items-center justify-center text-white shadow-xl relative">
          {!isChatOpen && (<span className="absolute w-full h-full rounded-full bg-[#00CFB8] animate-ping opacity-30"></span>)}
          <div className="relative z-10">{isChatOpen ? <X size={28} /> : <MessageCircle size={28} />}</div>
        </motion.button>
      </div>
    </div>
  )
}

export default Home