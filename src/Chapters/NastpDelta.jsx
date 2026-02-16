import React from 'react';
import { motion } from 'framer-motion';
import { 
    MapPin, Building2, Wrench, Zap, Droplets, ShieldCheck, 
    Flame, Users, Image as ImageIcon, Send, Mail, Phone, Clock,
    CheckCircle
} from 'lucide-react';
import NastpAlphaImg from '../images/nastpalphachp.jpg';
import DeltaLogo from '../images/delta-logo.gif';

const NastpDelta = () => {

    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    // Data for Facility Lists (Based on image description)
    const buildingsList = [
        { icon: <Building2 size={18} />, text: "G+1 Industrial Design Building" },
        { icon: <Building2 size={18} />, text: "G+2 R&D Center" },
        { icon: <Building2 size={18} />, text: "G+2 Admin Block" },
        { icon: <Building2 size={18} />, text: "G+1 Prototype Shop" },
        { icon: <Building2 size={18} />, text: "G+2 Laboratory Complex" },
    ];

    const utilitiesList = [
        { icon: <Zap size={18} />, text: "Uninterrupted Power Supply" },
        { icon: <Droplets size={18} />, text: "Water Purification Plant" },
        { icon: <Wrench size={18} />, text: "Waste Management System" },
        { icon: <Flame size={18} />, text: "Fire Safety Systems" },
        { icon: <ShieldCheck size={18} />, text: "24/7 Security Surveillance" },
    ];

    const galleryItems = [
        { title: "Auditorium", desc: "State-of-the-art conference facility" },
        { title: "Cafeteria", desc: "Modern dining and relaxation area" },
        { title: "Library", desc: "Resource center for research" },
        { title: "Gymnasium", desc: "Fitness and wellness center" },
        { title: "Recreation Area", desc: "Indoor sports and activities" },
        { title: "Conference Room", desc: "Strategic meeting spaces" },
    ];

    return (
        <div className="bg-[#f4f7fb] min-h-screen">

            {/* ========================================== */}
            {/* HERO SECTION                               */}
            {/* ========================================== */}
            <section className="relative h-screen w-full overflow-hidden">

                {/* Background Image */}
                <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <img
                        src={NastpAlphaImg}
                        alt="NASTP Delta Campus"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#002855] via-[#002855]/60 to-transparent opacity-90" />

                {/* Content (Logo + Title) */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

                    <motion.div
                        className="mb-6"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="bg-white/1">
                            <img className="w-16 h-16 md:w-20 md:h-20" src={DeltaLogo} alt="NASTP Delta Logo" />
                        </div>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        NASTP <span className="text-[#48b749]">DELTA</span>
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl text-gray-200 font-light tracking-widest uppercase"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Special Technology Zone
                    </motion.p>

                    <motion.div
                        className="mt-10 flex items-center gap-2 text-white/80 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <MapPin className="w-5 h-5 text-[#48b749]" />
                        <span>Karachi, Pakistan</span>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                        <div className="w-1.5 h-3 bg-[#48b749] rounded-full" />
                    </div>
                </motion.div>
            </section>

            {/* ========================================== */}
            {/* BODY SECTION (Regional Center & IT Park)   */}
            {/* ========================================== */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left Column: Text Content */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className="space-y-6"
                        >
                            {/* Badge */}
                            <motion.div variants={fadeInUp}>
                                <span className="inline-block bg-[#48b749]/10 text-[#48b749] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-[#48b749]/20">
                                    Regional Center & IT Park
                                </span>
                            </motion.div>

                            {/* Heading */}
                            <motion.h2
                                variants={fadeInUp}
                                className="text-4xl md:text-5xl font-bold text-[#002855] leading-tight"
                            >
                                NASTP Delta <br />
                                <span className="text-[#48b749]">Karachi</span>
                            </motion.h2>

                            {/* Description */}
                            <motion.div variants={fadeInUp} className="text-gray-600 text-sm leading-relaxed space-y-4">
                                <p>
                                    NASTP Delta is the premier technology hub for the Sindh region, designed to foster innovation in maritime, deep tech, and blue economy sectors. Located in the heart of Karachi, it serves as a critical bridge between the industry and academia.
                                </p>
                                <p>
                                    The campus features a National Institute of Innovation & Technology (NIIT) center, dedicated incubators for maritime technologies, and state-of-the-art R&D facilities tailored for the coastal ecosystem.
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Right Column: Image Composition */}
                        <motion.div
                            className="relative h-full min-h-[500px]"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl z-10">
                                <img
                                    src={NastpAlphaImg}
                                    alt="NASTP Delta Building"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12  flex items-center justify-center shadow-lg">
                                            <img src={DeltaLogo} alt="Delta Logo" className="w-8 h-8 object-contain" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold">NIIT & IT Park</h4>
                                            <p className="text-gray-300 text-sm">Karachi, Sindh</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#48b749]/10 rounded-full blur-3xl z-0"></div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* FACILITY MANAGEMENT CENTER                 */}
            {/* ========================================== */}
            <section className="py-20 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6">
                    
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mb-4">Facility Management Center</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">Comprehensive infrastructure designed to support high-tech innovation and operations.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-10">
                        
                        {/* Buildings List */}
                        <motion.div 
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-3 mb-6 border-b pb-4">
                                <div className="w-10 h-10 bg-[#002855] rounded-lg flex items-center justify-center text-white">
                                    <Building2 size={20} />
                                </div>
                                <h3 className="text-xl font-bold text-[#002855]">Buildings</h3>
                            </div>
                            <ul className="space-y-4">
                                {buildingsList.map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-gray-700 group">
                                        <span className="text-[#48b749]">{item.icon}</span>
                                        <span className="group-hover:text-[#002855] transition-colors">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Utilities List */}
                        <motion.div 
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-3 mb-6 border-b pb-4">
                                <div className="w-10 h-10 bg-[#48b749] rounded-lg flex items-center justify-center text-white">
                                    <Wrench size={20} />
                                </div>
                                <h3 className="text-xl font-bold text-[#002855]">Utilities</h3>
                            </div>
                            <ul className="space-y-4">
                                {utilitiesList.map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-gray-700 group">
                                        <span className="text-[#002855]">{item.icon}</span>
                                        <span className="group-hover:text-[#002855] transition-colors">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* 3D GALLERY                                 */}
            {/* ========================================== */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mb-4">3D Gallery</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">Explore our modern facilities and infrastructure through our interactive gallery.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {galleryItems.map((item, index) => (
                            <motion.div
                                key={index}
                                className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer h-80"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <img 
                                    src={NastpAlphaImg} // Using main image as placeholder for gallery items
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#002855] via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                                
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                                    <div className="flex items-center justify-between text-white">
                                        <div>
                                            <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                                            <p className="text-sm text-gray-300">{item.desc}</p>
                                        </div>
                                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 group-hover:bg-[#48b749] transition-colors">
                                            <ImageIcon size={20} className="text-white"/>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* CONTACT FORM                               */}
            {/* ========================================== */}
            <section className="py-20 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        
                        {/* Left Column: Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mb-6">Get in Touch</h2>
                            <p className="text-gray-600 mb-10">
                                Interested in setting up your operations at NASTP Delta? Contact our facility management team for inquiries and visits.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#002855] rounded-lg flex items-center justify-center text-white">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Location</h4>
                                        <p className="text-gray-500 text-sm">Karachi, Sindh, Pakistan</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#48b749] rounded-lg flex items-center justify-center text-white">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Email</h4>
                                        <p className="text-gray-500 text-sm">info@nastp.gov.pk</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#002855] rounded-lg flex items-center justify-center text-white">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Phone</h4>
                                        <p className="text-gray-500 text-sm">+92-21-XXXXXXX</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column: Form */}
                        <motion.div 
                            className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#48b749] focus:border-transparent outline-none transition-all" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#48b749] focus:border-transparent outline-none transition-all" placeholder="Doe" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#48b749] focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#48b749] focus:border-transparent outline-none transition-all" placeholder="Inquiry about office space" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#48b749] focus:border-transparent outline-none transition-all resize-none" placeholder="Your message..."></textarea>
                                </div>
                                <button type="submit" className="w-full bg-[#002855] text-white font-medium py-3 rounded-lg hover:bg-[#48b749] transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg">
                                    Send Message <Send size={18} />
                                </button>
                            </form>
                        </motion.div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default NastpDelta;