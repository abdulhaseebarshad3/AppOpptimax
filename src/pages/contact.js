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
    { icon: <MapPin className="w-5 h-5 text-[#00CFB8]" />, title: "Office", lines: ["AppOptimax HQ", "San Francisco, CA"] },
    { icon: <Phone className="w-5 h-5 text-[#00CFB8]" />, title: "Phone", lines: ["+1 (415) 555-0199", "+1 (415) 555-0144"] },
    { icon: <Mail className="w-5 h-5 text-[#00CFB8]" />, title: "Email", lines: ["hello@appoptimax.com", "support@appoptimax.com"] },
    { icon: <Clock className="w-5 h-5 text-[#00CFB8]" />, title: "Hours", lines: ["Mon - Fri: 09:00 AM - 06:00 PM", "Sat - Sun: Closed"] }
  ]

  return (
    <div className="bg-[#f4f7fb] min-h-screen">
      {/* Hero Header - Dark Blue */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#002855]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#00CFB8]/10 to-transparent opacity-50" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.span className="inline-block px-4 py-1.5 bg-[#00CFB8]/20 border border-[#00CFB8]/30 rounded-full text-sm text-white mb-6" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            Book Free ASO Audit
          </motion.span>
          <motion.h1 className="text-4xl md:text-5xl font-bold text-white mb-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Request Your <span className="text-[#00CFB8]">ASO Growth Demo</span>
          </motion.h1>
          <motion.p className="text-gray-300 max-w-xl mx-auto" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Tell us your growth goals and we will map a practical ASO plan for visibility, conversion, and retention.
          </motion.p>
        </div>
      </section>

      {/* Main Content - Light Theme */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Contact Form - White Card */}
            <motion.div className="lg:col-span-3 bg-white border border-gray-100 rounded-2xl p-8 shadow-sm" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-semibold text-[#002855] mb-6">Book Free ASO Audit</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">First Name</label>
                    <input type="text" required className="w-full bg-[#f4f7fb] border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#00CFB8] transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Last Name</label>
                    <input type="text" required className="w-full bg-[#f4f7fb] border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#00CFB8] transition-colors" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">Email Address</label>
                  <input type="email" required className="w-full bg-[#f4f7fb] border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#00CFB8] transition-colors" placeholder="john@example.com" />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">App Name / Product</label>
                  <input type="text" required className="w-full bg-[#f4f7fb] border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#00CFB8] transition-colors" placeholder="Finly Budget App" />
                </div>

                <div>
                    <label className="block text-sm text-gray-600 mb-2">Subject</label>
                    <input type="text" required className="w-full bg-[#f4f7fb] border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#00CFB8] transition-colors" placeholder="Need support with keyword rankings and conversion uplift" />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">Message</label>
                  <textarea rows="4" required className="w-full bg-[#f4f7fb] border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#00CFB8] transition-colors resize-none" placeholder="Your message here..." />
                </div>

                <button type="submit" disabled={formStatus === 'sending' || formStatus === 'sent'} className={`w-full py-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${formStatus === 'sent' ? 'bg-[#008000] text-white' : 'bg-[#00CFB8] hover:bg-[#00B5A0] text-white'}`}>
                  {formStatus === 'idle' && (<>Book Free ASO Audit <Send size={18} /></>)}
                  {formStatus === 'sending' && (<>Sending...</>)}
                  {formStatus === 'sent' && (<>Request Sent <CheckCircle size={18} /></>)}
                </button>
              </form>
            </motion.div>

            {/* Contact Info - White Cards */}
            <motion.div className="lg:col-span-2 space-y-6" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="grid gap-4">
                {contactInfo.map((item, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 flex items-start gap-4 hover:border-[#00CFB8]/50 transition-colors shadow-sm">
                    <div className="w-10 h-10 bg-[#00CFB8]/10 rounded-lg flex items-center justify-center flex-shrink-0">
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
                  <a href="#" className="px-5 py-2.5 bg-[#00CFB8] text-white text-sm font-medium rounded-lg shadow-lg hover:bg-[#00B5A0] transition-colors">
                    Open in Google Maps
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