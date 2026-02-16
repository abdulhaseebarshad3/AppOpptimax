import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Plane, Cpu, Users, ArrowUpRight, SkipForward, ChevronRight, ChevronLeft, Globe, Calendar, User, FileText, Briefcase, CalendarDays, MapPin, Clock, Download, Rocket, Network, Building2, Compass, MessageCircle, X, Send, Bot } from 'lucide-react'
import NastpAlpha from '../images/nastpalphachp.jpg';
import NastpDelta from '../images/nastpdelta.jpg';
import NastpSilcon1 from '../images/nastpsilicon1.jpg';
import Nastpkamra from '../images/nastpkamra.jpg';
import Nastpkharian from '../images/nastkharian.jpg';
import alphalogo from '../images/alpha-logo.gif';
import deltalogo from '../images/delta-logo.gif';
import siliconlogo from '../images/sierra-logo.gif';
import kamralogo from '../images/kamra-logo.gif';
import kharianlogo from '../images/kharian-logo.png';
const Home = () => {
  const [showIntro, setShowIntro] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeCard, setActiveCard] = useState(0)
  const [isChatOpen, setIsChatOpen] = useState(false)

  const slides = [
    { image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop", title: "National Aerospace", highlight: "Excellence", description: "Pioneering the future of aerospace technology in Pakistan." },
    { image: NastpAlpha, title: "Rawalpindi", highlight: "NASTP Alpha (STZ)", description: "NASTP Alpha has been granted the status of Special Technology Zone on 6th July 2023" },
    { image: NastpDelta, title: "Lahore", highlight: "Strength NASTP Delta", description: "An Incredibly Alluring Technology Park for Businesses in Training, Cyber Security, IT." },
    { image: NastpSilcon1, title: "Karachi", highlight: "NASTP Silicon 1", description: "Regional HQs for the Southern Region of Pakistan" },
    { image: Nastpkamra, title: "Kamra / Attock", highlight: "NASTP Kamra", description: "National and International HQs to Provide an all Encompassing Eco-System" },
    { image: Nastpkharian, title: "Kharian", highlight: "NASTP Kharian", description: "To Become One of the Best Aerospace, Cyber & IT Clusters in the World" }
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
  const slideVariants = { enter: { opacity: 0, scale: 1.1 }, center: { opacity: 1, scale: 1, transition: { duration: 1 } }, exit: { opacity: 0, scale: 0.95, transition: { duration: 0.5 } } }

  const divisions = [
    { title: "NASTP Alpha (STZ)", desc: "NASTP Alpha has been granted the status of Special Technology Zone on 6th July 2023.", icon: alphalogo, img: NastpAlpha, path:"/chapters/alpha" },
    { title: "Strength NASTP Delta", desc: "An Incredibly Alluring Technology Park for Businesses in Training, Cyber Security, IT.", icon: deltalogo, img: NastpDelta, path:"/chapters/delta"},
    { title: "NASTP Silicon 1", desc: "Regional HQs for the Southern Region of Pakistan", icon:siliconlogo, img: NastpSilcon1,path:"/chapters/silicon1" },
    { title: "NASTP Kamra", desc: "National and International HQs to Provide an all Encompassing Eco-System.", icon: kamralogo, img: Nastpkamra,path:"/chapters/kamra" },
    { title: "NASTP Kharian", desc: "To Become One of the Best Aerospace, Cyber & IT Clusters in the World.", icon: kharianlogo, img: Nastpkharian,path:"/chapters/kharian" }
  ]

  // const stats = [
  //   { value: "50+", label: "Projects Completed" },
  //   { value: "30+", label: "Industry Partners" },
  //   { value: "100+", label: "Experts & Engineers" },
  //   { value: "5+", label: "Key Divisions" }
  // ]

  const newsData = [
    { title: "Pakistan Air Force Launches New Aerospace Initiative", category: "Aerospace", date: "Oct 24, 2023", author: "NASTP Admin", img: "https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?q=80&w=800&auto=format&fit=crop", excerpt: "A groundbreaking ceremony was held to mark the beginning of a new era in indigenous aerospace development." },
    { title: "Cyber Security Summit 2023 Held at NASTP Alpha", category: "Events", date: "Oct 18, 2023", author: "Tech Desk", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop", excerpt: "Leading experts gathered to discuss the future of cyber defense in the aerospace sector." },
    { title: "MOU Signed with International Tech Giants", category: "Partnerships", date: "Oct 10, 2023", author: "Media Cell", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop", excerpt: "NASTP secures strategic partnerships to boost local IT infrastructure." },
    { title: "Innovation Lab Inauguration in Karachi", category: "Development", date: "Sep 28, 2023", author: "NASTP Admin", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop", excerpt: "State-of-the-art innovation lab opened at NASTP Silicon 1 to support startups." },
    { title: "Training Program for Young Engineers", category: "Education", date: "Sep 15, 2023", author: "HR Division", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop", excerpt: "A comprehensive training program launched to skill youth in avionics." },
    { title: "Future of Drone Technology in Pakistan", category: "Technology", date: "Sep 05, 2023", author: "R&D Wing", img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=800&auto=format&fit=crop", excerpt: "Exploring the potential of UAVs in civilian and defense applications." }
  ]

  const pressReleases = [
    { id: 1, title: "NASTP Alpha STZ Notification 2023", date: "Oct 20, 2023", type: "PDF" },
    { id: 2, title: "Annual Aerospace Report Release", date: "Oct 15, 2023", type: "PDF" },
    { id: 3, title: "Policy Framework for Startups", date: "Sep 30, 2023", type: "PDF" },
    { id: 4, title: "Joint Venture Guidelines", date: "Sep 10, 2023", type: "PDF" },
  ]

  const currentJobs = [
    { id: 1, title: "Senior Avionics Engineer", dept: "Engineering", location: "Rawalpindi", type: "Full Time" },
    { id: 2, title: "Cyber Security Analyst", dept: "IT Security", location: "Islamabad", type: "Full Time" },
    { id: 3, title: "Project Manager", dept: "Management", location: "Karachi", type: "Contract" },
    { id: 4, title: "Research Associate", dept: "R&D", location: "Lahore", type: "Part Time" },
  ]

  const upcomingEvents = [
    { id: 1, title: "Global Aerospace Summit", date: "Nov 15, 2023", time: "09:00 AM", venue: "NASTP Alpha" },
    { id: 2, title: "Cyber Defense Workshop", date: "Nov 20, 2023", time: "02:00 PM", venue: "Auditorium" },
    { id: 3, title: "Startup Innovation Day", date: "Dec 05, 2023", time: "10:00 AM", venue: "NASTP Delta" },
    { id: 4, title: "Drone Tech Expo", date: "Dec 12, 2023", time: "11:00 AM", venue: "Expo Center" },
  ]

  const entities = [
    { title: "SWIFT", desc: "Special Weapons Integration & Flight Technologies.", icon: <Rocket className="w-8 h-8 text-white" /> },
    { title: "Siber Koza", desc: "A dedicated cyber technology incubator.", icon: <Network className="w-8 h-8 text-white" /> },
    { title: "NIEM", desc: "National Institute of Emerging Modernities.", icon: <Building2 className="w-8 h-8 text-white" /> },
    { title: "Quest", desc: "Quality Engineering & Systems Technologies.", icon: <Compass className="w-8 h-8 text-white" /> },
  ]

  return (
    <div className="bg-[#f4f7fb]">

      <section className="relative min-h-screen flex items-center overflow-hidden">
        {showIntro && (
          <motion.div className="absolute inset-0 w-full h-full" initial={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.5 } }}>
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
              <iframe className="absolute top-1/2 left-1/2 w-[177.77vh] h-[56.25vw] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2" src="https://www.youtube.com/embed/6BnQPy1dVmQ?autoplay=1&mute=1&loop=1&playlist=6BnQPy1dVmQ&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&start=251&end=271" title="NASTP Background Video" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#002855]/80 via-[#002855]/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002855] via-transparent to-[#002855]/20" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
              <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl">
                <span className="inline-block px-4 py-2 bg-[#48b749]/30 border border-[#48b749]/50 rounded-full text-sm text-white mb-6 font-medium">
                  National Aerospace Science & Technology Park
                </span>
                <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
                 The Project of strategic  <br />
                  <span className="text-[#48b749]">national </span> importance
                </h1>
                <p className="text-lg text-gray-200 mb-8 max-w-xl">
                 NASTP is a pioneer organization in Pakistan led by the Pakistan Air Force, in creating opportunities for joint work between industry, academia and the government, turning it into a technology ecosystem in the country.
                </p>
              </motion.div>
            </div>

            <button onClick={() => setShowIntro(false)} className="absolute bottom-10 right-10 z-20 flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-white/20 transition-colors group">
              Skip Intro <SkipForward size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        )}

        {!showIntro && (
          <div className="absolute inset-0 w-full h-full">
            <AnimatePresence>
              <motion.div key={currentSlide} variants={slideVariants} initial="enter" animate="center" exit="exit" className="absolute inset-0">
                <img src={slides[currentSlide].image} alt="Slide" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#002855]/95 via-[#002855]/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002855] via-transparent to-[#002855]/10" />
              </motion.div>
            </AnimatePresence>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full h-full flex items-center">
              <div className="max-w-3xl">
                <motion.span key={`badge-${currentSlide}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-4 py-2 bg-[#48b749]/20 border border-[#48b749]/50 rounded-full text-sm text-white mb-6">
                  National Aerospace Science & Technology Park
                </motion.span>

                <motion.h1 key={`title-${currentSlide}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-2xl md:text-2xl font-bold text-white leading-tight mb-6">
                  {slides[currentSlide].title} <br />
                  <span className="text-[#48b749] text-2=6xl md:text-6xl font-bold leading-tight mb-6">{slides[currentSlide].highlight}</span>
                </motion.h1>

                <motion.p key={`desc-${currentSlide}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-gray-200 mb-8 max-w-xl">
                  {slides[currentSlide].description}
                </motion.p>

                <div className="flex flex-wrap gap-4">
                  <Link to="/chapters/alpha" className="px-8 py-3 bg-[#48b749] text-white font-medium rounded hover:bg-[#3da03d] transition-colors flex items-center gap-2 shadow-lg">
                    Explore Chapters <ArrowRight size={18} />
                  </Link>
                  <Link to="/about" className="px-8 py-3 border border-white/30 text-white font-medium rounded hover:bg-white/10 transition-colors backdrop-blur-sm">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
              {slides.map((_, i) => (
                <button key={i} onClick={() => setCurrentSlide(i)} className={`h-2 rounded-full transition-all ${i === currentSlide ? 'w-8 bg-[#48b749]' : 'w-2 bg-white/40 hover:bg-white/60'}`} />
              ))}
            </div>

            <button className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors" onClick={() => setCurrentSlide(prev => prev === 0 ? slides.length - 1 : prev - 1)}>
              <ChevronLeft size={20} />
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors" onClick={() => setCurrentSlide(prev => (prev + 1) % slides.length)}>
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </section>

      {/* Stats Section - Dark Blue */}
      {/* <section className="bg-[#002855] py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <h3 className="text-4xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-sm text-gray-300 uppercase tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* About Section - Light Background */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop" alt="Team Meeting" className="rounded-2xl shadow-xl" />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="text-sm font-semibold text-[#48b749] uppercase tracking-wider">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-3 mb-6">
                National Aerospace Science & Technology Park
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                National Aerospace Science and Technology Park (NASTP) will provide eco-system of essential elements required to nurture design, research, development and innovation in the aviation, space, IT and cyber domains.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                NASTP is a pioneer organisation in Pakistan that is approved by the Government of Pakistan as ‘a project of strategic national importance’ led by the Pakistan Air Force in creating opportunities for joint work between industry, academia and the government, turning it into a technology ecosystem in the country. This project has been envisaged to have comprehensive Design, Development & Innovation Eco-System.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#48b749] rounded-full" />
                  World-class Infrastructure
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#48b749] rounded-full" />
                  Research & Development Facilities
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#48b749] rounded-full" />
                  Industry-Academia Collaboration
                </li>
              </ul>
              <Link to="/about" className="inline-flex items-center gap-2 text-[#48b749] mt-8 hover:gap-3 transition-all font-semibold">
                Read Full Story <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HORIZONTAL ACCORDION DIVISIONS SECTION - Light BG */}
      <section className="py-24 bg-[#f4f7fb] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,40,85,0.2),transparent_70%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h1 className="text-2xl font-semibold text-[#48b749] uppercase tracking-wider" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              NASTP CHAPTERS
            </motion.h1>
            <motion.span className="text-3xl font-semibold text-[#002855] uppercase tracking-wider" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              FIVE PARKS TO GREATNESS IN ONE NATION
            </motion.span>
           
          </div>

          <div className="flex flex-col md:flex-row h-[550px]" onMouseLeave={() => setActiveCard(0)}>
            {divisions.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group relative min-w-[80px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-out border border-transparent hover:border-[#48b749]/50 shadow-lg ${activeCard === i ? 'flex-[5]' : 'flex-1'
                  }`}
                onMouseEnter={() => setActiveCard(i)}
              >
                <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002855]/90 via-[#002855]/40 to-transparent opacity-70 group-hover:opacity-95 transition-opacity duration-500" />

                <div className="absolute top-4 right-4 md:top-6 md:right-6 text-4xl font-bold text-white/30 group-hover:text-[#48b749]/90 transition-colors duration-300 z-10">
                  0{i + 1}
                </div>

                {activeCard !== i && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 md:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="transform -rotate-90 whitespace-nowrap text-white font-bold text-lg tracking-widest uppercase border-b-2 border-[#48b749] pb-2">
                      {item.title}
                    </span>
                  </div>
                )}

                <div className={`absolute inset-0 flex flex-col justify-end p-6 md:p-8 transition-all duration-500 delay-100 z-20 ${activeCard === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                  <div className="mb-4">
                    <div className="w-14 h-14 rounded-xl bg-transparent flex items-center justify-center shadow-lg">
                      {/* <img src="https://nastp.gov.pk/assets_main/v1_img/alpha-logo.gif" alt="" /> */}
                      <img
                        src={item.icon}
                        alt={`${item.title} icon`}
                        className="w-10 h-10 object-contain"
                      />

                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-6">{item.desc}</p>

                  <Link to={item.path}>
                    <button className="flex items-center gap-2 text-[#48b749] font-medium group/btn">
                      Learn More <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
                    </button></Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ENTITIES SECTION - White Background */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#48b749]/5 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#002855]/5 rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.span className="inline-block px-4 py-2 bg-[#002855]/10 border border-[#002855]/20 rounded-full text-sm text-[#002855] mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Ecosystem
            </motion.span>
            <motion.h2 className="text-3xl md:text-5xl font-bold text-[#002855] mt-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              Entities, Programs & Clusters
            </motion.h2>
            <motion.p className="text-lg text-gray-500 mt-4 max-w-3xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              A showcase of NASTP entities, programs, and clusters, including SWIFT, Siber Koza, NIEM, and Quest.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {entities.map((entity, i) => (
             <motion.div
  key={i}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: i * 0.15 }}
  className="group relative bg-[#f4f7fb] border border-gray-100 rounded-2xl p-8 hover:border-[#48b749] transition-all duration-500 flex flex-col items-center text-center hover:shadow-2xl hover:shadow-green-100"
>
  
  {/* Top Right Green Shade */}
  <div className="absolute top-0 right-0 w-32 h-32 bg-[#48b749]/15 rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

  <div className="relative z-10">
    <div className="w-16 h-16 rounded-2xl bg-[#002855] flex items-center justify-center mb-6 group-hover:bg-[#48b749] transition-all duration-300 shadow-lg">
      {entity.icon}
    </div>

    <h3 className="text-xl font-bold text-[#002855] mb-3 tracking-wide">
      {entity.title}
    </h3>

    <p className="text-gray-500 text-sm leading-relaxed mb-6">
      {entity.desc}
    </p>

    <Link
      to="#"
      className="inline-flex items-center gap-2 text-[#48b749] text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
    >
      Explore <ArrowRight size={14} />
    </Link>
  </div>
</motion.div>

            ))}
          </div>
        </div>
      </section>

      {/* NEWS SECTION - Light Gray BG */}
      <section className="py-24 bg-[#f4f7fb]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <span className="text-sm font-semibold text-[#48b749] uppercase tracking-wider">Stay Updated</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2">Latest News & Events</h2>
            </div>
            <Link to="/news" className="mt-4 md:mt-0 inline-flex items-center gap-2 text-[#002855] font-medium hover:text-[#48b749] transition-all">
              View All News <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <motion.div className="lg:col-span-2 lg:row-span-2 relative group rounded-2xl overflow-hidden h-[500px] lg:h-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <img src={newsData[0].img} alt={newsData[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002855] via-[#002855]/40 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8 z-10">
                <span className="inline-block px-3 py-1 bg-[#48b749] text-white text-xs font-semibold rounded-full mb-4">
                  {newsData[0].category}
                </span>
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
                    <span className="inline-block px-2 py-1 bg-[#48b749]/80 text-white text-[10px] font-semibold rounded mb-2">{news.category}</span>
                    <h3 className="text-lg font-bold text-white leading-tight">{news.title}</h3>
                    <div className="flex items-center gap-3 text-xs text-gray-300 mt-2">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {news.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {newsData.slice(3, 6).map((news, i) => (
              <motion.div key={i} className="bg-white rounded-2xl overflow-hidden group border border-gray-100 hover:border-[#48b749]/30 transition-colors shadow-sm" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="h-48 overflow-hidden">
                  <img src={news.img} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
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

      {/* INFORMATION CORNER - White Background */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#48b749] uppercase tracking-wider">Quick Access</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2">Information Corner</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: Press Release */}
            <motion.div className="bg-[#f4f7fb] rounded-2xl overflow-hidden border border-gray-100" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="p-6 border-b border-gray-100 bg-[#002855]/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#48b749]/20 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-[#48b749]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#002855]">Press Release</h3>
                </div>
              </div>
              <div className="h-64 overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-[#f4f7fb] to-transparent z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#f4f7fb] to-transparent z-10 pointer-events-none" />
                <motion.div className="p-4 space-y-3" animate={{ y: ["0%", "-50%"] }} transition={{ duration: 15, ease: "linear", repeat: Infinity }}>
                  {[...pressReleases, ...pressReleases].map((item, idx) => (
                    <div key={`${item.id}-${idx}`} className="group">
                      <Link to="#" className="flex items-start gap-3 p-3 rounded-lg hover:bg-white transition-colors">
                        <div className="flex-shrink-0 w-10 h-10 rounded bg-white border border-gray-100 flex items-center justify-center">
                          <FileText size={18} className="text-[#48b749]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-[#002855] truncate group-hover:text-[#48b749] transition-colors">{item.title}</h4>
                          <p className="text-xs text-gray-400 mt-1">{item.date} • {item.type}</p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </motion.div>
              </div>
              <div className="p-4 border-t border-gray-100 text-center">
                <Link to="/press" className="text-sm text-[#48b749] font-medium hover:underline">View All Releases</Link>
              </div>
            </motion.div>

            {/* Column 2: Jobs */}
            <motion.div className="bg-[#f4f7fb] rounded-2xl overflow-hidden border border-gray-100" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="p-6 border-b border-gray-100 bg-[#002855]/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#48b749]/20 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-[#48b749]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#002855]">Current Jobs</h3>
                </div>
              </div>
              <div className="h-64 overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-[#f4f7fb] to-transparent z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#f4f7fb] to-transparent z-10 pointer-events-none" />
                <motion.div className="p-4 space-y-3" animate={{ y: ["0%", "-50%"] }} transition={{ duration: 18, ease: "linear", repeat: Infinity }}>
                  {[...currentJobs, ...currentJobs].map((job, idx) => (
                    <div key={`${job.id}-${idx}`} className="group">
                      <Link to="#" className="block p-3 rounded-lg hover:bg-white transition-colors border border-transparent hover:border-gray-100">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="text-sm font-medium text-[#002855] group-hover:text-[#48b749] transition-colors">{job.title}</h4>
                          <span className="text-[10px] bg-[#48b749]/10 text-[#3da03d] px-2 py-0.5 rounded-full font-medium">{job.type}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <span>{job.dept}</span>
                          <span>•</span>
                          <span>{job.location}</span>
                        </div>
                      </Link>
                    </div>
                  ))}
                </motion.div>
              </div>
              <div className="p-4 border-t border-gray-100 text-center">
                <Link to="/careers" className="text-sm text-[#48b749] font-medium hover:underline">View All Careers</Link>
              </div>
            </motion.div>

            {/* Column 3: Events */}
            <motion.div className="bg-[#f4f7fb] rounded-2xl overflow-hidden border border-gray-100" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="p-6 border-b border-gray-100 bg-[#002855]/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#48b749]/20 flex items-center justify-center">
                    <CalendarDays className="w-5 h-5 text-[#48b749]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#002855]">Upcoming Events</h3>
                </div>
              </div>
              <div className="h-64 overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-[#f4f7fb] to-transparent z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#f4f7fb] to-transparent z-10 pointer-events-none" />
                <motion.div className="p-4 space-y-3" animate={{ y: ["0%", "-50%"] }} transition={{ duration: 20, ease: "linear", repeat: Infinity }}>
                  {[...upcomingEvents, ...upcomingEvents].map((event, idx) => (
                    <div key={`${event.id}-${idx}`} className="group">
                      <Link to="#" className="flex items-start gap-3 p-3 rounded-lg hover:bg-white transition-colors">
                        <div className="flex-shrink-0 w-12 h-14 rounded-lg bg-white border border-gray-100 flex flex-col items-center justify-center text-center shadow-sm">
                          <span className="text-xs text-[#48b749] font-medium uppercase">{event.date.split(' ')[0]}</span>
                          <span className="text-lg font-bold text-[#002855] leading-none">{event.date.split(' ')[1].replace(',', '')}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-[#002855] group-hover:text-[#48b749] transition-colors mb-1">{event.title}</h4>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Clock size={10} /><span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
                            <MapPin size={10} /><span>{event.venue}</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </motion.div>
              </div>
              <div className="p-4 border-t border-gray-100 text-center">
                <Link to="/events" className="text-sm text-[#48b749] font-medium hover:underline">View All Events</Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Section - Dark Blue */}
      <section className="relative py-24 bg-[#002855]">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1519669556878-63bdad8a1a49?q=80&w=2072&auto=format&fit=crop" alt="Airport" className="w-full h-full object-cover" />
        </div>

        <motion.div className="relative z-10 max-w-3xl mx-auto px-6 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Partner With NASTP
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Join the ecosystem of innovation. Collaborate with us on cutting-edge aerospace and technology projects.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#48b749] text-white font-medium rounded hover:bg-[#3da03d] transition-colors shadow-lg">
            Contact Us Today <ArrowUpRight size={18} />
          </Link>
        </motion.div>
      </section>

      {/* CHATBOT FLOATING WIDGET */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute bottom-20 right-0 w-[320px] md:w-[380px] h-[500px] bg-white border border-gray-100 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="p-4 bg-[#002855] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#48b749] flex items-center justify-center backdrop-blur-sm">
                  <Bot className="text-white" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg">NASTP Assistant</h3>
                  <span className="text-xs text-gray-300 flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-[#48b749] rounded-full animate-pulse"></span> Online
                  </span>
                </div>
                <button onClick={() => setIsChatOpen(false)} className="text-white/70 hover:text-white transition-colors">
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-[#f4f7fb]">
                <div className="flex gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#002855] flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">N</div>
                  <div className="bg-white border border-gray-100 p-3 rounded-xl rounded-tl-none text-sm text-gray-800 max-w-[85%] shadow-sm">
                    Hello! Welcome to the National Aerospace Science & Technology Park portal. How can I assist you today?
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pl-10">
                  <button className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs text-[#002855] hover:bg-gray-50 transition-colors">About NASTP</button>
                  <button className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs text-[#002855] hover:bg-gray-50 transition-colors">Careers</button>
                </div>
              </div>

              <div className="p-4 border-t border-gray-100 bg-white">
                <div className="flex items-center gap-2">
                  <input type="text" placeholder="Type your message..." className="flex-1 bg-[#f4f7fb] border border-gray-200 rounded-full px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#48b749] transition-colors" />
                  <button className="w-10 h-10 bg-[#48b749] rounded-full flex items-center justify-center text-white hover:bg-[#3da03d] transition-colors shadow-lg">
                    <Send size={18} className="ml-0.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-16 h-16 rounded-full bg-[#48b749] flex items-center justify-center text-white shadow-xl relative"
        >
          {!isChatOpen && (<span className="absolute w-full h-full rounded-full bg-[#48b749] animate-ping opacity-30"></span>)}
          <div className="relative z-10">
            {isChatOpen ? <X size={28} /> : <MessageCircle size={28} />}
          </div>
        </motion.button>
      </div>

    </div>
  )
}

export default Home