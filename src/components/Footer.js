import React from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#0d2b4d] pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">AppOptimax</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              AI-powered ASO platform for visibility growth, smarter keyword strategy, and scalable organic app installs.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center text-gray-300 hover:bg-[#00CFB8] hover:text-white transition-all">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center text-gray-300 hover:bg-[#00CFB8] hover:text-white transition-all">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center text-gray-300 hover:bg-[#00CFB8] hover:text-white transition-all">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center text-gray-300 hover:bg-[#00CFB8] hover:text-white transition-all">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/features" className="hover:text-[#00CFB8] transition-colors">Feature Overview</Link></li>
              <li><Link href="/tools" className="hover:text-[#00CFB8] transition-colors">Tools & Modules</Link></li>
              <li><Link href="/pricing" className="hover:text-[#00CFB8] transition-colors">Pricing</Link></li>
              <li><Link href="/dashboard-preview" className="hover:text-[#00CFB8] transition-colors">Dashboard Preview</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/blog" className="hover:text-[#00CFB8] transition-colors">ASO Blog</Link></li>
              <li><Link href="/news" className="hover:text-[#00CFB8] transition-colors">Insights Center</Link></li>
              <li><Link href="/case-studies" className="hover:text-[#00CFB8] transition-colors">Case Studies</Link></li>
              <li><Link href="/contact" className="hover:text-[#00CFB8] transition-colors">Book Free ASO Audit</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Contact Info</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 text-[#00CFB8] mt-0.5" />
                <span>AppOptimax, San Francisco, CA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="flex-shrink-0 text-[#00CFB8]" />
                <span>+1 (415) 555-0199</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="flex-shrink-0 text-[#00CFB8]" />
                <span>hello@appoptimax.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">© 2026 AppOptimax. All Rights Reserved.</p>
          <div className="flex gap-6 text-xs text-gray-400">
            <Link href="/privacy" className="hover:text-[#00CFB8] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#00CFB8] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer