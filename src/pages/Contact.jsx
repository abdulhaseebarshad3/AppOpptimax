import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus('sending')
    setTimeout(() => {
      setFormStatus('sent')
      setTimeout(() => setFormStatus('idle'), 3000)
    }, 1500)
  }

  const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

  const contactInfo = [
    { icon: <MapPin className="w-5 h-5 text-[#48b749]" />, title: "Our Location", lines: ["NASTP Headquarters", "Islamabad, Pakistan"] },
    { icon: <Phone className="w-5 h-5 text-[#48b749]" />, title: "Phone Number", lines: ["+92-51-1234567", "+92-51-9876543"] },
    { icon: <Mail className="w-5 h-5 text-[#48b749]" />, title: "Email Address", lines: ["info@nastp.gov.pk", "support@nastp.gov.pk"] },
    { icon: <Clock className="w-5 h-5 text-[#48b749]" />, title: "Working Hours", lines: ["Mon - Fri: 09:00 AM - 05:00 PM", "Sat - Sun: Closed"] }
  ]

  return (
    <div className="bg-[#f4f7fb] min-h-screen">
      {/* Hero Header - Dark Blue */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#002855]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#48b749]/10 to-transparent opacity-50" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.span className="inline-block px-4 py-1.5 bg-[#48b749]/20 border border-[#48b749]/30 rounded-full text-sm text-white mb-6" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            Get In Touch
          </motion.span>
          <motion.h1 className="text-4xl md:text-5xl font-bold text-white mb-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Contact <span className="text-[#48b749]">Us</span>
          </motion.h1>
          <motion.p className="text-gray-300 max-w-xl mx-auto" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Have a project in mind or want to collaborate? Reach out to the NASTP team.
          </motion.p>
        </div>
      </section>

      {/* Main Content - Light Theme */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Contact Form - White Card */}
            <motion.div className="lg:col-span-3 bg-white border border-gray-100 rounded-2xl p-8 shadow-sm" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-semibold text-[#002855] mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">First Name</label>
                    <input type="text" required className="w-full bg-[#f4f7fb] border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#48b749] transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Last Name</label>
                    <input type="text" required className="w-full bg-[#f4f7fb] border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#48b749] transition-colors" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">Email Address</label>
                  <input type="email" required className="w-full bg-[#f4f7fb] border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#48b749] transition-colors" placeholder="john@example.com" />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">Subject</label>
                  <input type="text" required className="w-full bg-[#f4f7fb] border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#48b749] transition-colors" placeholder="Partnership Inquiry" />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">Message</label>
                  <textarea rows="4" required className="w-full bg-[#f4f7fb] border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#48b749] transition-colors resize-none" placeholder="Your message here..." />
                </div>

                <button type="submit" disabled={formStatus === 'sending' || formStatus === 'sent'} className={`w-full py-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${formStatus === 'sent' ? 'bg-[#008000] text-white' : 'bg-[#48b749] hover:bg-[#3da03d] text-white'}`}>
                  {formStatus === 'idle' && (<>Send Message <Send size={18} /></>)}
                  {formStatus === 'sending' && (<>Sending...</>)}
                  {formStatus === 'sent' && (<>Message Sent <CheckCircle size={18} /></>)}
                </button>
              </form>
            </motion.div>

            {/* Contact Info - White Cards */}
            <motion.div className="lg:col-span-2 space-y-6" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="grid gap-4">
                {contactInfo.map((item, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 flex items-start gap-4 hover:border-[#48b749]/50 transition-colors shadow-sm">
                    <div className="w-10 h-10 bg-[#48b749]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-[#002855] font-medium mb-1">{item.title}</h4>
                      {item.lines.map((line, j) => (
                        <p key={j} className="text-sm text-gray-500">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-gray-100 rounded-xl overflow-hidden h-64 relative shadow-sm">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop" alt="Map Location" className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center bg-[#002855]/20">
                  <a href="#" className="px-5 py-2.5 bg-[#48b749] text-white text-sm font-medium rounded-lg shadow-lg hover:bg-[#3da03d] transition-colors">
                    View on Google Maps
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact