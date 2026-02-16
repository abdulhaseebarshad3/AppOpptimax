import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#0d2b4d] pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">NASTP</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              National Aerospace Science & Technology Park. A premier hub for aerospace innovation, research, and development in Pakistan.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center text-gray-300 hover:bg-[#48b749] hover:text-white transition-all">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center text-gray-300 hover:bg-[#48b749] hover:text-white transition-all">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center text-gray-300 hover:bg-[#48b749] hover:text-white transition-all">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center text-gray-300 hover:bg-[#48b749] hover:text-white transition-all">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-[#48b749] transition-colors">About NASTP</Link></li>
              <li><Link to="/location" className="hover:text-[#48b749] transition-colors">Our Locations</Link></li>
              <li><Link to="/incubator" className="hover:text-[#48b749] transition-colors">Incubator Program</Link></li>
              <li><Link to="/facilitation" className="hover:text-[#48b749] transition-colors">Facilitation</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/news" className="hover:text-[#48b749] transition-colors">News & Events</Link></li>
              <li><Link to="/careers" className="hover:text-[#48b749] transition-colors">Careers</Link></li>
              <li><Link to="/gallery" className="hover:text-[#48b749] transition-colors">Image Gallery</Link></li>
              <li><Link to="/downloads" className="hover:text-[#48b749] transition-colors">Downloads</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Contact Info</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 text-[#48b749] mt-0.5" />
                <span>NASTP, Islamabad, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="flex-shrink-0 text-[#48b749]" />
                <span>+92-51-1234567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="flex-shrink-0 text-[#48b749]" />
                <span>info@nastp.gov.pk</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">© 2025 NASTP. All Rights Reserved.</p>
          <div className="flex gap-6 text-xs text-gray-400">
            <Link to="/privacy" className="hover:text-[#48b749] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#48b749] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer