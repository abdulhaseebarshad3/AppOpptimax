import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Cpu, Plane, Shield, Satellite, Building2, ArrowRight, Landmark, Layers, Send, Code, Users, Monitor, Radio, Phone, Mail } from 'lucide-react';
import NastpAlphaImg from '../images/nastpalphachp.jpg';
import AlphaLogo from '../images/alpha-logo.gif'
const NastpAlpha = () => {

    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    // Data for the intro features list
    const features = [
        { icon: <Landmark size={20} />, text: "Regional Center & HQs for Punjab" },
        { icon: <Building2 size={20} />, text: "11 State-of-the-Art Buildings" },
        { icon: <Layers size={20} />, text: "Vertical Incubator Facility" },
        { icon: <Cpu size={20} />, text: "IT & Cyber Security R&D" },
        { icon: <Plane size={20} />, text: "Aviation & Aerospace Focus" },
    ];

    // Data for NASTP Divisions
    const divisions = [
        { icon: <Plane size={28} />, title: "Avionics & Aerospace", desc: "R&D in aircraft systems and aerospace technologies." },
        { icon: <Radio size={28} />, title: "Radar & Comms", desc: "Advanced wireless and communication systems." },
        { icon: <Satellite size={28} />, title: "Space Systems", desc: "Satellite technologies and space research." },
        { icon: <Shield size={28} />, title: "Cyber Security", desc: "Protecting digital infrastructure and data." },
        { icon: <Code size={28} />, title: "Software & AI", desc: "Big data, AI, and software development." },
        { icon: <Monitor size={28} />, title: "Simulators", desc: "Design and development of training simulators." },
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
                        alt="NASTP Alpha Campus"
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
                            <img className="w-16 h-16 md:w-20 md:h-20" src="https://nastp.gov.pk/assets_main/v1_img/alpha-logo.gif" alt="NASTP Logo" />
                        </div>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        NASTP <span className="text-[#48b749]">ALPHA</span>
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
                        <span>Rawalpindi, Pakistan</span>
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
            {/* BODY SECTION 1: INTRO / ABOUT             */}
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
                                    Regional Center & HQs for Punjab Province
                                </span>
                            </motion.div>

                            {/* Heading */}
                            <motion.h2
                                variants={fadeInUp}
                                className="text-4xl md:text-5xl font-bold text-[#002855] leading-tight"
                            >
                                NASTP Alpha <br />
                                <span className="text-[#48b749]">Rawalpindi</span>
                            </motion.h2>

                            {/* Description */}
                            <motion.p
                                variants={fadeInUp}
                                className="text-gray-600 text-sm leading-relaxed"
                            >
                                NASTP Alpha is located in Rawalpindi and is the regional HQs for the Federal region of Pakistan, measuring 16 Acres of land and comprising 11 buildings having 330,000 Sq Ft built-up area and more than 125,000 Sq Ft rentable spaces.
                            </motion.p>

                            <motion.p
                                variants={fadeInUp}
                                className="text-gray-600 text-sm leading-relaxed"
                            >
                                Alpha is poised to become very attractive techno park for Aerospace, Cyber, IT, Computing, Fintech and Training companies, owning to its proximity with some of the largest public and private industrial setups including Pakistan Aeronautical Complex, ministries and top ranked universities.
                            </motion.p>

                            {/* Feature List */}
                            <motion.div variants={fadeInUp} className="pt-4 space-y-4">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 rounded-lg bg-[#002855]/5 flex items-center justify-center text-[#002855] group-hover:bg-[#48b749] group-hover:text-white transition-all duration-300">
                                            {feature.icon}
                                        </div>
                                        <span className="text-gray-700 font-medium">{feature.text}</span>
                                    </div>
                                ))}
                            </motion.div>

                            {/* CTA Button */}
                            <motion.div variants={fadeInUp} className="pt-6">
                                <a
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#002855] text-white font-medium rounded-lg hover:bg-[#48b749] transition-all duration-300 shadow-lg group"
                                >
                                    Explore Opportunities
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </a>
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
                            {/* Main Large Image */}
                            <div className="relative h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl z-10">
                                <img
                                    src={NastpAlphaImg}
                                    alt="NASTP Alpha Building"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                                {/* Overlay Info Box */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12  flex items-center justify-center shadow-lg">
                                            <img src={AlphaLogo} alt="alpha-logo" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold">Special Technology Zone</h4>
                                            <p className="text-gray-300 text-sm">Rawalpindi, Punjab</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Decorative Card */}
                            <motion.div
                                className="absolute -bottom-6 -left-6 w-48 bg-white rounded-xl shadow-xl p-4 z-20 border border-gray-100"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <Shield className="text-[#002855]" size={18} />
                                    <span className="text-xs font-bold text-gray-500 uppercase">Focus Areas</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Aviation</span>
                                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">IT</span>
                                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">R&D</span>
                                </div>
                            </motion.div>

                            {/* Background Decorative Circle */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#48b749]/10 rounded-full blur-3xl z-0"></div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* BODY SECTION 2: NASTP DIVISIONS           */}
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
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mb-4">
                            Core <span className="text-[#48b749]">Divisions</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Home to the largest set of organic design and R&D setups of the Pakistan Air Force.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {divisions.map((division, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="group relative bg-white p-8 rounded-2xl border border-gray-100 transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-green-100"
                            >

                                {/* Top Right Green Shade */}
                                <div className="absolute top-0 right-0 w-28 h-28 bg-[#48b749]/5 rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-xl bg-[#002855]/5 flex items-center justify-center text-[#002855] mb-6 group-hover:bg-[#48b749] group-hover:text-white transition-all duration-300">
                                        {division.icon}
                                    </div>

                                    <h3 className="text-xl font-bold text-[#002855] mb-2">
                                        {division.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {division.desc}
                                    </p>
                                </div>

                            </motion.div>

                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ========================================== */}
            {/* BODY SECTION 3: CO-WORKING & INCUBATION   */}
            {/* ========================================== */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left Side: Images/Visuals */}
                        <motion.div
                            className="relative h-[500px] w-full"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="absolute top-0 left-0 w-4/5 h-4/5 rounded-2xl overflow-hidden shadow-2xl z-10">
                                <img
                                    src={NastpAlphaImg}
                                    alt="Co-Working Space"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute bottom-0 right-0 w-4/5 h-4/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20">
                                <img
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Office Space"
                                    className="w-full h-full object-cover"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-[#002855]/40 flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <p className="text-5xl font-bold">125K+</p>
                                        <p className="uppercase text-xs tracking-widest">Sq Ft Rentable Space</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Side: Content */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <motion.div variants={fadeInUp}>
                                <span className="inline-block bg-[#48b749]/10 text-[#48b749] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-[#48b749]/20">
                                    Facilities & Infrastructure
                                </span>
                            </motion.div>

                            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-[#002855] leading-tight">
                                Co-Working & <br /><span className="text-[#48b749]">Incubation Centers</span>
                            </motion.h2>

                            <motion.p variants={fadeInUp} className="text-gray-600 text-sm leading-relaxed">
                                Alpha is home to the first ever vertical incubator in the Aerospace domain called <strong>NICAT</strong> (NIC for Aerospace Technologies) and <strong>Siber Koza</strong> – first ever international Cyber and IT Incubation Center as joint venture between NASTP and Turkish company CryptTech.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-[#48b749]/10 flex items-center justify-center text-[#48b749] flex-shrink-0">
                                        <Users size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">NICAT</h4>
                                        <p className="text-xs text-gray-500">Aerospace Technologies Incubator</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-[#48b749]/10 flex items-center justify-center text-[#48b749] flex-shrink-0">
                                        <Shield size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Siber Koza</h4>
                                        <p className="text-xs text-gray-500">Cyber & IT Incubation Center</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="pt-6">
                                <a
                                    href="/facilities"
                                    className="inline-flex items-center gap-2 text-[#002855] font-semibold hover:text-[#48b749] transition-colors group"
                                >
                                    View All Facilities
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                            </motion.div>
                        </motion.div>

                        {/* Left Column: Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mb-6">Get in Touch</h2>
                            <p className="text-gray-600 mb-10">
                                Interested in setting up your operations at NASTP Aplha? Contact our facility management team for inquiries and visits.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#002855] rounded-lg flex items-center justify-center text-white">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Location</h4>
                                        <p className="text-gray-500 text-sm">Rawalpindi, Pakistan</p>
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

export default NastpAlpha;