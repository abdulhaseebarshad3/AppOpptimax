import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Phone, Mail, Globe, Cpu, Plane, Shield, Users, Clock } from 'lucide-react'
import NastpAlpha from '../images/nastpalphachp.jpg';
import NastpDelta from '../images/nastpdelta.jpg';
import NastpSilcon1 from '../images/nastpsilicon1.jpg';
import Nastpkamra from '../images/nastpkamra.jpg';
import Nastpkharian from '../images/nastkharian.jpg';

const Location = () => {
  
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }

  // Location Data
  const locations = [
    {
      id: 1,
      title: "NASTP Alpha (STZ)",
      city: "Rawalpindi",
      desc: "NASTP Alpha has been granted the status of Special Technology Zone on 6th July 2023. It serves as the central hub for aerospace innovation and strategic technologies.",
      img: NastpAlpha,
      icon: <Cpu className="w-6 h-6 text-white" />,
      status: "Operational",
      type: "Special Technology Zone"
    },
    {
      id: 2,
      title: "NASTP Delta",
      city: "Lahore",
      desc: "An incredibly alluring technology park for businesses in the fields of Training, Cyber Security, IT, and Computing.",
      img: NastpDelta,
      icon: <Plane className="w-6 h-6 text-white" />,
      status: "Operational",
      type: "Cyber & IT Hub"
    },
    {
      id: 3,
      title: "NASTP Silicon 1",
      city: "Karachi",
      desc: "Regional HQs for the Southern Region of Pakistan, focusing on maritime technologies and software development.",
      img: NastpSilcon1,
      icon: <Shield className="w-6 h-6 text-white" />,
      status: "Operational",
      type: "Regional HQ"
    },
    {
      id: 4,
      title: "NASTP Kamra",
      city: "Kamra / Attock",
      desc: "National and International HQs to provide an all-encompassing eco-system for aviation manufacturing and design.",
      img: Nastpkamra,
      icon: <Users className="w-6 h-6 text-white" />,
      status: "Developing",
      type: "Aviation Hub"
    },
    {
      id: 5,
      title: "NASTP Kharian",
      city: "Kharian",
      desc: "Aimed to become one of the best Aerospace, Cyber & IT clusters in the world, expanding the national footprint.",
      img: Nastpkharian,
      icon: <Globe className="w-6 h-6 text-white" />,
      status: "Upcoming",
      type: "Future Cluster"
    }
  ]

  return (
    <div className="bg-[#f4f7fb]">
      
      {/* ========================================== */}
      {/* PAGE HEADER SECTION                       */}
      {/* ========================================== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#002855]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#48b749]/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <span className="inline-block px-4 py-1.5 bg-[#48b749]/20 border border-[#48b749]/30 rounded-full text-sm text-white mb-6">
              Our Presence
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              NASTP <span className="text-[#48b749]">Locations</span>
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              Five parks to greatness in one nation. Explore our strategic locations across Pakistan driving the aerospace and cyber revolution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========================================== */}
      {/* LOCATIONS GRID SECTION                    */}
      {/* ========================================== */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#48b749 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* First Row - Featured (Alpha) */}
          <motion.div 
            className="mb-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="group relative bg-[#f4f7fb] rounded-2xl overflow-hidden border border-gray-100 hover:border-[#48b749]/50 transition-all duration-500 shadow-sm">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="h-64 md:h-80 overflow-hidden">
                  <img 
                    src={locations[0].img} 
                    alt={locations[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#48b749] flex items-center justify-center shadow-lg">
                      {locations[0].icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#002855]">{locations[0].title}</h3>
                      <p className="text-sm text-gray-500 flex items-center gap-1">
                        <MapPin size={14} /> {locations[0].city}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">{locations[0].desc}</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-[#48b749]/10 text-[#3da03d] text-xs font-medium rounded-full border border-[#48b749]/20">
                      {locations[0].status}
                    </span>
                    <span className="px-3 py-1 bg-[#002855]/10 text-[#002855] text-xs font-medium rounded-full border border-[#002855]/10">
                      {locations[0].type}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Remaining Grid */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {locations.slice(1).map((loc) => (
              <motion.div 
                key={loc.id}
                variants={fadeInUp}
                className="group relative bg-[#f4f7fb] rounded-2xl overflow-hidden border border-gray-100 hover:border-[#48b749]/50 transition-all duration-500"
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={loc.img} 
                    alt={loc.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002855] via-[#002855]/30 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full backdrop-blur-md border ${
                      loc.status === 'Operational' 
                        ? 'bg-[#48b749]/20 text-[#3da03d] border-[#48b749]/20' 
                        : 'bg-yellow-500/20 text-yellow-700 border-yellow-500/20'
                    }`}>
                      {loc.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#48b749] flex items-center justify-center shadow-md">
                      {loc.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#002855] group-hover:text-[#48b749] transition-colors">{loc.title}</h3>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <MapPin size={12} /> {loc.city}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">{loc.desc}</p>
                  
                  <Link to="#" className="inline-flex items-center gap-2 text-[#002855] text-sm font-medium group-hover:text-[#48b749] group-hover:gap-3 transition-all">
                    View Details <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ========================================== */}
      {/* MAP / CONTACT SECTION                     */}
      {/* ========================================== */}
      <section className="py-24 bg-[#f4f7fb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Contact Info Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold text-[#48b749] uppercase tracking-wider">Get in Touch</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-3 mb-6">
                Visit Our <span className="text-[#48b749]">Main Office</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Located at the heart of the aviation industry in Pakistan, NASTP Alpha serves as the central coordination point for all parks.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-[#002855]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#002855]/10 transition-colors">
                    <MapPin className="w-5 h-5 text-[#48b749]" />
                  </div>
                  <div>
                    <h4 className="text-[#002855] font-semibold mb-1">Main Headquarters</h4>
                    <p className="text-gray-500 text-sm">NASTP Alpha, Near PAF Base Nur Khan, Rawalpindi, Pakistan</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-[#002855]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#002855]/10 transition-colors">
                    <Phone className="w-5 h-5 text-[#48b749]" />
                  </div>
                  <div>
                    <h4 className="text-[#002855] font-semibold mb-1">Phone</h4>
                    <p className="text-gray-500 text-sm">+92 (51) 1234567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-[#002855]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#002855]/10 transition-colors">
                    <Mail className="w-5 h-5 text-[#48b749]" />
                  </div>
                  <div>
                    <h4 className="text-[#002855] font-semibold mb-1">Email</h4>
                    <p className="text-gray-500 text-sm">info@nastp.gov.pk</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map Placeholder Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-gray-100 h-[400px] bg-white shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" 
                  alt="Map View" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                
                {/* Center Pin */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <motion.div 
                    className="relative"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="w-8 h-8 bg-[#48b749] rounded-full flex items-center justify-center shadow-lg shadow-[#48b749]/50">
                      <MapPin size={18} className="text-white" />
                    </div>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#48b749] rotate-45 -z-10" />
                  </motion.div>
                </div>

                {/* Tooltip */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md border border-gray-100 rounded-xl p-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#48b749] rounded-full animate-pulse" />
                    <span className="text-[#002855] text-sm font-medium">NASTP Alpha - Rawalpindi</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default Location