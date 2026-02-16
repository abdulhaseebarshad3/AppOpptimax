import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Award, Quote, ArrowUp } from 'lucide-react'
import Image from '../images/zaheerahmed.jpg';

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

  const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

  const leadershipData = {
    name: "Air Chief Marshal Zaheer Ahmed Baber Sidhu",
    title: "Chief of the Air Staff, Pakistan Air Force",
    role: "Patron-in-Chief Nastp",
    image: Image,
    message: "NASTP is a testament to Pakistan's resolve to achieve self-reliance in aerospace and cyber technologies. It serves as a beacon of innovation, bridging the gap between the armed forces, industry, and academia to secure a technologically sovereign future."
  }

  const aboutContent = {
    about: { title: "About NASTP", desc: "The National Aerospace Science and Technology Park (NASTP) is a flagship initiative of the Pakistan Air Force. It is designed to foster innovation, research, and development in the fields of aerospace, cyber security, and IT. NASTP aims to create a self-reliant ecosystem that contributes significantly to the national economy and technological landscape." },
    mission: { title: "NASTP Mission", desc: "Our Mission is to Foster research, innovation and development in aviation, space, IT and cyber technologies, products and services to accrue maximum social, economic, security and scientific dividends for the country." },
    vision: { title: "NASTP Vision", desc: "Our Vision is to Become one of the best Aerospace, Cyber & IT Clusters in the world and transform national landscape with design, R&D and innovation centers for emerging and disruptive technologies." }
  }

  return (
    <div className="bg-[#f4f7fb]">
      
      {/* HERO SECTION - Dark Blue Background */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#002855]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#48b749]/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-[#001d3d] to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Image Side */}
            <motion.div className="relative flex justify-center lg:justify-start" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="relative w-full max-w-md">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#001d3d]">
                  <img src={leadershipData.image} alt={leadershipData.name} className="w-full h-[500px] object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002855] via-transparent to-transparent" />
                </div>
                
                {/* Floating Name Card - White */}
                <motion.div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] bg-white backdrop-blur-lg border border-gray-100 rounded-xl p-4 shadow-xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#48b749] flex items-center justify-center text-white">
                      <Award size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#002855]">{leadershipData.name}</h4>
                      <p className="text-xs text-[#48b749]">{leadershipData.role}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative Elements - Green */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-l-4 border-t-4 border-[#48b749] rounded-tl-2xl opacity-70" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-4 border-b-4 border-[#48b749] rounded-br-2xl opacity-70" />
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-block px-4 py-1.5 bg-[#48b749]/20 border border-[#48b749]/30 rounded-full text-sm text-white mb-6">
                Patron's Message
              </span>
              
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                {leadershipData.name}
              </h1>
              
              <p className="text-lg text-gray-300 mb-2">{leadershipData.title}</p>
              
              <div className="w-20 h-1 bg-[#48b749] my-6 rounded-full" />

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-[#48b749]/30 rotate-180" />
                <p className="text-gray-200 leading-relaxed text-lg pl-6 relative z-10 font-light italic">
                  "{leadershipData.message}"
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/chapters/alpha" className="px-6 py-3 bg-[#48b749] text-white font-medium rounded-lg hover:bg-[#3da03d] transition-colors shadow-lg">
                  Explore CHAPTERS
                </Link>
                <Link to="/about" className="px-6 py-3 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-colors">
                  Learn More
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* About NASTP Section - White Background */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#48b749]/5 to-transparent pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center">
            <span className="inline-block px-4 py-2 bg-[#002855]/10 border border-[#002855]/20 rounded-full text-sm text-[#002855] mb-6 font-semibold">
              Introduction
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#002855] mb-8 tracking-tight">
              {aboutContent.about.title}
            </h2>
            
            <div className="w-24 h-1 bg-[#48b749] mx-auto mb-10 rounded-full" />
            
            <div className="max-w-4xl mx-auto bg-[#f4f7fb] p-8 md:p-12 rounded-2xl border border-gray-100 shadow-sm relative">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#48b749] to-transparent opacity-50" />
               <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                 {aboutContent.about.desc}
               </p>
               <div className="mt-8">
                 <Link to="/about" className="inline-flex items-center gap-2 text-[#48b749] font-medium hover:gap-3 transition-all">
                   Read Detailed History <ArrowRight size={18} />
                 </Link>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section - Light Gray Background */}
      <section className="py-24 bg-[#f4f7fb] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#48b749 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#002855]/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-sm font-semibold text-[#48b749] uppercase tracking-wider">Our Purpose</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#002855] mt-3">Mission & Vision</h2>
            <div className="w-24 h-1 bg-[#48b749] mx-auto mt-4 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Mission Card - White */}
            <motion.div className="relative group" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="h-full bg-white rounded-2xl border border-gray-100 p-8 md:p-10 transition-all duration-500 hover:border-[#48b749] hover:shadow-2xl hover:shadow-green-100">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#48b749]/5 rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-[#48b749]/10 flex items-center justify-center text-[#48b749] mb-6 group-hover:bg-[#48b749] group-hover:text-white transition-all duration-300 shadow-lg">
                    <Target size={28} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#002855] mb-5">{aboutContent.mission.title}</h3>
                  <div className="w-16 h-0.5 bg-gray-200 mb-6 group-hover:bg-[#48b749] transition-colors" />
                  <p className="text-gray-600 leading-relaxed text-lg">{aboutContent.mission.desc}</p>
                </div>
              </div>
            </motion.div>

            {/* Vision Card - White */}
            <motion.div className="relative group" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="h-full bg-white rounded-2xl border border-gray-100 p-8 md:p-10 transition-all duration-500 hover:border-[#48b749] hover:shadow-2xl hover:shadow-green-100">
                <div className="absolute top-0 left-0 w-32 h-32 bg-[#48b749]/5 rounded-br-full opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-[#48b749]/10 flex items-center justify-center text-[#48b749] mb-6 group-hover:bg-[#48b749] group-hover:text-white transition-all duration-300 shadow-lg">
                    <Eye size={28} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#002855] mb-5">{aboutContent.vision.title}</h3>
                  
                  <div className="w-16 h-0.5 bg-gray-200 mb-6 group-hover:bg-[#48b749] transition-colors" />
                  <p className="text-gray-600 leading-relaxed text-lg">{aboutContent.vision.desc}</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SCROLL TO TOP BUTTON */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-[#002855] text-white rounded-full shadow-lg hover:bg-[#001d3d] transition-colors group focus:outline-none focus:ring-2 focus:ring-[#48b749]"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      )}

    </div>
  )
}

export default About