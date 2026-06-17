import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  Menu, X, ChevronDown, Phone, Mail, Facebook, Twitter, Linkedin, Globe,
  Search, Radar, Sparkles, MessageSquareText, Gauge, ArrowUpRight,
  Lightbulb,
  BarChart3, PieChart, BarChart2, TrendingUp, User,
  HeartPulse,
  Brain
} from 'lucide-react'

const Logo = '/logo/AppOptimax.png'

const Navbar = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    document.addEventListener('scroll', handleScroll)
    return () => document.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/features', isProductsMenu: true },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' }
  ]

  const productGroups = [
    {
      
      items: [
         { name: 'ASO Health', href: '/products/ASOHealth', icon: <HeartPulse className="w-4 h-4 text-[#00CFB8]" />, desc: 'Monitor app visibility, metadata, and ranking health' },
        { name: 'Keyword Intelligence', href: '/products/KeywordIntelligence', icon: <Brain className="w-4 h-4 text-[#00CFB8]" />, desc: 'Discover smart keyword trends and opportunities' },
       { name: 'Analytics Data', href: '/products/AnalyticData', icon: <PieChart className="w-4 h-4 text-[#00CFB8]" />, desc: 'Analyze data for actionable insights' },
        { name: 'Competitor Analysis', href: '/products/CompetitorAnalysis', icon: <Radar className="w-4 h-4 text-[#00CFB8]" />, desc: 'Analyze rival strategy and gaps' },
      ]
    },
    {
     
      items: [
        { name: 'KPI Data', href: '/products/KPIData', icon: <BarChart2 className="w-4 h-4 text-[#00CFB8]" />, desc: 'Track key metrics and performance' },
        { name: 'Reviews & Ratings', href: '/products/Reviews&Rating', icon: <MessageSquareText className="w-4 h-4 text-[#00CFB8]" />, desc: 'Turn sentiment into action' },
        { name: 'App Forecasting', href: '/products/AppForcasting', icon: <TrendingUp className="w-4 h-4 text-[#00CFB8]" />, desc: 'Predict app growth and trends' },
        { name: 'AdMob Insights', href: '/products/AdMob', icon: <BarChart3 className="w-4 h-4 text-[#00CFB8]" />, desc: 'Optimize ad revenue and performance' }
      ]
    }
  ]

  const moreLinks = [
    { name: 'Tools', href: '/tools' },
    { name: 'Dashboard Preview', href: '/dashboard-preview' },
    { name: 'Insights', href: '/news' },
    { name: 'Localized ASO', href: '/products/LocalizedAso' }
  ]

  const isActive = (href) => router.pathname === href

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ease-in-out ${scrolled ? 'bg-[#144276] border-b border-transparent shadow-lg shadow-[#001a33]/25' : 'bg-[#0d2b4d] border-b border-white/10 bg-opacity-95'}`}>
      {/* Top Bar */}
      <div className={`hidden md:block border-b border-white/5 transition-all duration-500 ease-in-out overflow-hidden ${scrolled ? 'max-h-0 py-0 opacity-0 border-transparent' : 'max-h-10 py-2 opacity-100'}`}>
        <div className="bg-[#081c31] max-w-7xl mx-auto px-6 flex justify-between items-center text-xs text-gray-400">
          <div className="flex items-center gap-4">
            <a href="mailto:hello@appoptimax.com" className="flex items-center gap-2 hover:text-[#00CFB8] transition-all duration-300">
              <Mail size={12} />
              <span>hello@appoptimax.com</span>
            </a>
            <span className="text-gray-700">|</span>
            <a href="tel:+1-415-555-0199" className="flex items-center gap-2 hover:text-[#00CFB8] transition-all duration-300">
              <Phone size={12} />
              <span>+1 (415) 555-0199</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1.5 hover:text-white transition-colors border border-transparent hover:border-white/20 px-2 py-1 rounded-md">
              <Globe size={14} />
              <span>EN</span>
              <ChevronDown size={12} />
            </button>
            <div className="h-4 w-px bg-gray-700" />
            <div className="flex items-center gap-3">
              {[
                { icon: <Facebook size={14} />, href: 'https://facebook.com' },
                { icon: <Twitter size={14} />, href: 'https://twitter.com' },
                { icon: <Linkedin size={14} />, href: 'https://linkedin.com' }
              ].map((social) => (
                <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-[#00CFB8] hover:scale-110 transition-all duration-300">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-65 p-2 flex items-center justify-center overflow-hidden">
              <img src={Logo} alt="Logo" className="transition-transform duration-500 group-hover:scale-105" />
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => {
              if (!link.isProductsMenu) {
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative px-4 py-2 rounded-lg text-sm font-medium text-gray-200 hover:text-white transition-all duration-300 group"
                  >
                    <span className={`absolute inset-0 rounded-lg transition-all duration-300 ${isActive(link.href) ? 'bg-white/10' : 'bg-transparent group-hover:bg-white/8'}`} />
                    <span className="relative z-10">{link.name}</span>
                    <span className={`absolute left-1/2 -translate-x-1/2 bottom-0.5 h-0.5 bg-gradient-to-r from-transparent via-[#00CFB8] to-transparent transition-all duration-300 ${isActive(link.href) ? 'w-4/5' : 'w-0 group-hover:w-4/5'}`} />
                  </Link>
                )
              }

              const isOpenProducts = openDropdown === 'products'
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown('products')}
                  onMouseLeave={() => setOpenDropdown('')}
                >
                  <button className="relative px-4 py-2 rounded-lg text-sm font-medium text-gray-200 hover:text-white transition-all duration-300 group">
                    <span className="absolute inset-0 rounded-lg bg-transparent group-hover:bg-white/8" />
                    <span className="relative z-10 flex items-center gap-1">
                      {link.name}
                      <ChevronDown size={14} className={`transition-transform duration-300 ${isOpenProducts ? 'rotate-180' : ''}`} />
                    </span>
                    <span className={`absolute left-1/2 -translate-x-1/2 bottom-0.5 h-0.5 bg-gradient-to-r from-transparent via-[#00CFB8] to-transparent transition-all duration-300 ${isOpenProducts ? 'w-4/5' : 'w-0 group-hover:w-4/5'}`} />
                  </button>

                  {/* Products Mega Dropdown */}
                  {isOpenProducts && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[840px] bg-[#0d2b4d] border border-white/10 rounded-2xl shadow-2xl shadow-black/40 p-6 z-50">
                      <div className="grid grid-cols-3 gap-6">
                        {productGroups.map((group) => (
                          <div key={group.title} className="col-span-1">
                            <h4 className="text-xs uppercase tracking-wider text-[#00CFB8] mb-3 font-bold">{group.title}</h4>
                            <div className="space-y-2">
                              {group.items.map((item) => (
                                <Link key={item.name} href={item.href} className="block rounded-xl border border-white/5 bg-white/0 hover:bg-white/5 hover:border-[#00CFB8]/40 p-3 transition-all duration-300 group/item">
                                  <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-[#081c31] border border-white/10 flex items-center justify-center group-hover/item:border-[#00CFB8]/40 shrink-0">
                                      {item.icon}
                                    </div>
                                    <div>
                                      <p className="text-sm font-semibold text-white group-hover/item:text-[#00CFB8] transition-colors">{item.name}</p>
                                      <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{item.desc}</p>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}

                        {/* Featured Card */}
                        <div className="col-span-1 rounded-xl border border-white/10 bg-gradient-to-br from-[#002855] to-[#001d3d] p-4 flex flex-col h-full">
                          <p className="text-xs uppercase tracking-wider text-[#00CFB8]">Featured</p>
                          <h4 className="text-white text-lg font-semibold mt-2">App Store Growth Suite</h4>
                          <p className="text-sm text-gray-300 mt-2">Boost organic installs with data-driven ASO workflows, pricing plans, and live dashboard previews.</p>
                          
                          <div className="mt-4 space-y-2 flex-1">
                            {moreLinks.map((item) => (
                              <Link key={item.name} href={item.href} className="flex items-center justify-between text-sm text-gray-200 hover:text-[#00CFB8] transition-colors">
                                {item.name}
                                <ArrowUpRight size={14} />
                              </Link>
                            ))}
                          </div>
                          
                          {/* Moved Audit Link here to keep top nav clean */}
                          <Link href="/contact" className="mt-4 block w-full text-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg transition-all duration-300 border border-white/10 hover:border-[#00CFB8]">
                            Book Free ASO Audit
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link 
              href="/login" 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-2 px-3 py-2"
            >
              <User size={16} />
              <span>Log in</span>
            </Link>
            <Link 
              href="/signup" 
              className="px-6 py-2.5 bg-[#00CFB8] hover:bg-[#00B5A0] text-white text-sm font-medium rounded-lg transition-all duration-300 shadow-lg shadow-teal-900/20 hover:shadow-teal-700/40 hover:scale-[1.03] relative overflow-hidden group whitespace-nowrap"
            >
              <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-700" />
              <span className="relative">Start with Free Trial</span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#081c31] border-t border-white/10">
          <div className="px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <div className="mt-4 rounded-xl border border-white/10 p-4">
              <p className="text-xs uppercase tracking-wider text-[#00CFB8] mb-3">Product Features</p>
              <div className="grid grid-cols-1 gap-2">
                {productGroups.flatMap((group) => group.items).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-2 text-gray-300 hover:text-white py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Auth Buttons */}
            <div className="mt-6 space-y-3 pt-4 border-t border-white/10">
                <Link 
                  href="/login" 
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 text-gray-300 hover:text-white font-medium rounded-lg transition-colors border border-transparent hover:border-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  <User size={18} />
                  <span>Log in</span>
                </Link>
                <Link 
                  href="/signup" 
                  className="block w-full text-center px-5 py-3 bg-[#00CFB8] hover:bg-[#00B5A0] text-white text-sm font-medium rounded-lg transition-colors shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Start with Free Trial
                </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar