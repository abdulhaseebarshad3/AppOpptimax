import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Menu, X, ChevronDown, Phone, Mail, Facebook, Twitter, Linkedin, Globe, 
  MessageSquare, BookOpen, Newspaper, Image, Video, Radio, Share2, Building, 
  BookOpenIcon
} from 'lucide-react'
import Logo from '../logo/logo.png'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMediaMenuOpen, setIsMediaMenuOpen] = useState(false)
  const [isChaptersMenuOpen, setIsChaptersMenuOpen] = useState(false) // New state for Chapters
  const [scrolled, setScrolled] = useState(false)

  // Scroll listener to toggle background
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'NASTP Chapters', href: '/Chapters', isChaptersMenu: true }, // Updated to trigger dropdown
    { name: 'News&Events', href: '/news' },
    // { name: 'Facilitation', href: '/facilitation' },
    // { name: 'Media Center', href: '#', isMediaMenu: true },
    { name: 'Location', href: '/location' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  // Data for Media Center Dropdown
  const mediaOptions = [
    { name: 'Forums', icon: <MessageSquare className="text-[#48b749]" />, desc: 'Join community discussions', href: '/forums' },
    { name: 'Wikis', icon: <BookOpen className="text-[#48b749]" />, desc: 'Knowledge base & documentation', href: '/wikis' },
    { name: 'Press Releases', icon: <Newspaper className="text-[#48b749]" />, desc: 'Official announcements', href: '/press-releases' },
    { name: 'Galleries', icon: <Image className="text-[#48b749]" />, desc: 'Photos & video galleries', href: '/galleries' },
    { name: 'Webinars', icon: <Video className="text-[#48b749]" />, desc: 'Upcoming & past sessions', href: '/webinars' },
    { name: 'Live Streaming', icon: <Radio className="text-[#48b749]" />, desc: 'YouTube & social streams', href: '/live' },
    { name: 'Social Media', icon: <Share2 className="text-[#48b749]" />, desc: 'Integrated social feeds', href: '/socials' },
  ]

  // Data for Chapters Dropdown
  const chaptersOptions = [
    { name: 'Nastp Alpha', icon: <BookOpen className="text-[#48b749]" />, desc: 'Main Chapter', href: '/chapters/alpha' },
    { name: 'Nastp Delta', icon: <BookOpen className="text-[#48b749]" />, desc: 'Delta Chapter', href: '/chapters/delta' },
    { name: 'Nastp Silicon1', icon: <BookOpen className="text-[#48b749]" />, desc: 'Silicon1 Chapter', href: '/chapters/silicon1' },
    { name: 'Nastp Kamra', icon: <BookOpen className="text-[#48b749]" />, desc: 'Kamra Chapter', href: '/chapters/kamra' },
    { name: 'Nastp Kharian', icon: <BookOpen className="text-[#48b749]" />, desc: 'Kharian Chapter', href: '/chapters/kharian' },
  ]

  return (
    <>
      <nav className={`sticky top-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? 'bg-[#144276]  border-b border-transparent' 
          : 'bg-[#0d2b4d] border-b border-white/10 bg-opacity-95'
      }`}>
        
        {/* Top Bar - Collapses/Hides opacity on scroll */}
        <div className={`hidden md:block border-b border-white/5 transition-all duration-500 ease-in-out overflow-hidden ${
          scrolled ? 'max-h-0 py-0 opacity-0 border-transparent' : 'max-h-10 py-2 opacity-100'
        }`}>
          <div className="bg-[#081c31] max-w-7xl mx-auto px-6 flex justify-between items-center text-xs text-gray-400">
            
            {/* Left Side: Email & Phone */}
            <div className="flex items-center gap-4">
              <a href="mailto:info@nastp.gov.pk" className="flex items-center gap-2 hover:text-[#48b749] transition-all duration-300 group">
                <Mail size={12} className="group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" /> 
                <span>info@nastp.gov.pk</span>
              </a>
              <span className="text-gray-700">|</span>
              <a href="tel:+92-51-1234567" className="flex items-center gap-2 hover:text-[#48b749] transition-all duration-300 group">
                <Phone size={12} className="group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" /> 
                <span>+92-51-1234567</span>
              </a>
            </div>

            {/* Right Side: Language & Social Icons */}
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1.5 hover:text-white transition-colors border border-transparent hover:border-white/20 px-2 py-1 rounded-md">
                <Globe size={14} />
                <span>EN</span>
                <ChevronDown size={12} />
              </button>
              
              <div className="h-4 w-px bg-gray-700"></div>

              <div className="flex items-center gap-3">
                {[
                  { icon: <Facebook size={14} />, href: 'https://facebook.com' },
                  { icon: <Twitter size={14} />, href: 'https://twitter.com' },
                  { icon: <Linkedin size={14} />, href: 'https://linkedin.com' }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-[#48b749] hover:scale-125 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Main Nav - Primary Color Background */}
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-45 p-2 flex items-center justify-center overflow-hidden">
                <img src={Logo} alt="Logo" className="transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2" />
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => {
                // Determine if this item has a dropdown
                const hasDropdown = link.isMediaMenu || link.isChaptersMenu;
                const isDropdownOpen = link.isMediaMenu ? isMediaMenuOpen : isChaptersMenuOpen;
                const setDropdownOpen = link.isMediaMenu ? setIsMediaMenuOpen : setIsChaptersMenuOpen;
                const dropdownData = link.isMediaMenu ? mediaOptions : chaptersOptions;

                return (
                  <div 
                    key={link.name} 
                    className="relative"
                    onMouseEnter={() => hasDropdown && setDropdownOpen(true)}
                    onMouseLeave={() => hasDropdown && setDropdownOpen(false)}
                  >
                    {hasDropdown ? (
                      <button
                        className="text-sm text-gray-300 hover:text-white transition-all relative group px-4 py-2 rounded-lg overflow-visible"
                      >
                        <span className="relative z-10 flex items-center gap-1">
                          {link.name}
                          <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </span>
                        
                        {/* Animated Background Pill */}
                        <span className="absolute inset-0 bg-white/5 rounded-lg scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                        
                        {/* Animated Underline - Green Accent */}
                        <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#48b749] group-hover:w-3/4 transition-all duration-300 shadow-[0_0_8px_#48b749]" />
                      </button>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm text-gray-300 hover:text-white transition-all relative group px-4 py-2 rounded-lg overflow-visible block"
                      >
                        <span className="relative z-10">{link.name}</span>
                        
                        {/* Animated Background Pill */}
                        <span className="absolute inset-0 bg-white/5 rounded-lg scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                        
                        {/* Animated Underline - Green Accent */}
                        <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#48b749] group-hover:w-3/4 transition-all duration-300 shadow-[0_0_8px_#48b749]" />
                      </Link>
                    )}

                    {/* Dropdown Menu (Media Center or Chapters) */}
                    {hasDropdown && isDropdownOpen && (
                      <div 
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-[#0d2b4d] border border-white/10 rounded-2xl shadow-2xl shadow-black/50 p-6 grid grid-cols-2 gap-4 animate-fade-in-down z-50"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                      >
                        {/* Little Arrow Pointer */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0d2b4d] border-l border-t border-white/10 rotate-45"></div>

                        <h3 className="col-span-2 text-lg font-bold text-white mb-2 flex items-center gap-2 border-b border-white/10 pb-3">
                          {link.isMediaMenu ? <Share2 className="text-[#48b749]" /> : <Building className="text-[#48b749]" />} 
                          {link.name} Hub
                        </h3>
                        
                        {dropdownData.map((option, index) => (
                          <Link
                            key={index}
                            to={option.href}
                            className="group/item flex items-start gap-4 p-3 rounded-xl hover:bg-[#48b749]/10 transition-all duration-300 relative overflow-hidden"
                          >
                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-green-500/0 group-hover/item:to-green-500/10 transition-all duration-500"></div>

                            <div className="w-10 h-10 rounded-lg bg-[#081c31] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover/item:border-[#48b749]/50 group-hover/item:scale-110 transition-all duration-300 shadow-lg">
                              {option.icon}
                            </div>
                            <div className="relative z-10">
                              <h4 className="text-white font-semibold group-hover/item:text-[#48b749] transition-colors">{option.name}</h4>
                              <p className="text-xs text-gray-500 group-hover/item:text-gray-300 transition-colors">{option.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}

                    
                  </div>
                );
              })}
            </div>

            {/* CTA Button - Green Background */}
            <div className="hidden lg:flex items-center gap-4">
              <button className="px-6 py-2.5 bg-[#48b749] hover:bg-[#008000] text-white text-sm font-medium rounded-lg transition-all duration-300 shadow-lg shadow-green-900/20 hover:shadow-green-700/40 hover:scale-105 hover:shadow-[0_0_15px_rgba(72,183,73,0.4)] relative overflow-hidden group">
                {/* Shine Effect on Hover */}
                <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-700"></span>
                <span className="relative">Partner With Us</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-[#081c31] border-t border-white/10">
            <div className="px-6 py-4 space-y-2">
              {navLinks.map((link) => {
                 const hasDropdown = link.isMediaMenu || link.isChaptersMenu;
                 const dropdownData = link.isMediaMenu ? mediaOptions : chaptersOptions;

                 if (hasDropdown) {
                   return (
                     <div key={link.name} className="space-y-2">
                       <span className="block text-[#48b749] uppercase text-xs tracking-wider mt-4">{link.name}</span>
                       {dropdownData.map((opt, i) => (
                         <Link
                           key={i}
                           to={opt.href}
                           className="flex items-center gap-3 text-gray-300 hover:text-white py-2 px-4 rounded-lg hover:bg-white/5 transition-colors"
                           onClick={() => setIsOpen(false)}
                         >
                           {opt.icon}
                           {opt.name}
                         </Link>
                       ))}
                     </div>
                   )
                 }

                 return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              })}
              <button className="w-full mt-4 px-5 py-3 bg-[#48b749] text-white text-sm font-medium rounded-lg">
                Partner With Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar