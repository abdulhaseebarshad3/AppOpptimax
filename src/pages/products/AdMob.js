'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    DollarSign, BarChart3, PieChart, Eye, Layout, 
    Target, Zap, ArrowRight, Sliders, Smartphone, 
    Activity, TrendingUp, Settings, MonitorPlay 
} from 'lucide-react';
import Link from 'next/link';

// --- Mock Data ---
const stats = [
    { value: "+32%", label: "Revenue Lift", sub: "Average client increase" },
    { value: "$12.50", label: "Avg eCPM", sub: "Global benchmark" },
    { value: "95%", label: "Fill Rate", sub: "Via Mediation" },
    { value: "0.2s", label: "Latency", sub: "Ad Load Time" },
];

const features = [
    { icon: <MonitorPlay size={24} />, title: "Ad Unit Analysis", desc: "Deep dive into performance of Banners, Interstitials, and Rewarded Videos to find your highest earner." },
    { icon: <Layout size={24} />, title: "Mediation Group Optimizer", desc: "Automatically shift traffic between AdMob, IronSource, and AppLovin based on real-time eCPM." },
    { icon: <Activity size={24} />, title: "Real-Time Revenue Tracking", desc: "See revenue flow in real-time, not just yesterday's report. React to trends instantly." },
    { icon: <Eye size={24} />, title: "Competitor Ad Spy", desc: "See what ad formats and creatives your competitors are using to monetize their audience." },
    { icon: <Zap size={24} />, title: "A/B Testing Framework", desc: "Test ad frequency and placement without coding. Maximize revenue without hurting retention." },
    { icon: <Target size={24} />, title: "User Segmentation", desc: "Identify 'Whales' vs. 'Non-payers'. Show ads only to users unlikely to buy subscriptions." },
];

// --- Animation Variants ---
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const AdMobRevenue = () => {
    
    // --- Simulator State ---
    const [adData, setAdData] = useState({
        dau: 50000,      // Daily Active Users
        adsPerUser: 3,   // Average ads per user per day
        eCPM: 12.50      // Effective Cost Per Mille
    });

    // --- Calculation Logic ---
    // Formula: (DAU * AdsPerUser / 1000) * eCPM * 30 Days
    const dailyImpressions = adData.dau * adData.adsPerUser;
    const dailyRevenue = (dailyImpressions / 1000) * adData.eCPM;
    const monthlyRevenue = dailyRevenue * 30;

    return (
        <div className="bg-[#f4f7fb] min-h-screen">
            
            {/* ========================================== */}
            {/* HERO SECTION                               */}
            {/* ========================================== */}
            <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center bg-[#002855]">
                {/* Abstract Background */}
                <div className="absolute inset-0 opacity-20 z-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00CFB8] rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px]"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#002855] via-[#002855]/90 to-[#002855]/80 z-0" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        
                        <motion.div 
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                        >
                            <motion.div variants={fadeInUp}>
                                <span className="inline-block px-4 py-2 bg-[#00CFB8]/20 border border-[#00CFB8]/40 rounded-full text-sm text-[#00CFB8] mb-6 font-medium">
                                    ASO Module — AdMob Revenue
                                </span>
                            </motion.div>

                            <motion.h1 
                                variants={fadeInUp}
                                className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]"
                            >
                                Maximize Your <br />
                                <span className="text-[#00CFB8]">Ad Revenue</span>
                            </motion.h1>

                            <motion.p 
                                variants={fadeInUp}
                                className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl"
                            >
                                Optimize your AdMob setup with precision insights. Analyze eCPM, fill rates, and mediation groups to turn every session into profit.
                            </motion.p>

                            <motion.div 
                                variants={fadeInUp}
                                className="flex flex-wrap gap-4"
                            >
                                <Link href="/contact" className="px-8 py-3.5 bg-[#00CFB8] text-white font-medium rounded-lg hover:bg-[#00B5A0] transition-colors flex items-center gap-2 shadow-lg shadow-[#00CFB8]/20">
                                    Start Optimizing <ArrowRight size={18} />
                                </Link>
                                <Link href="#simulator" className="px-8 py-3.5 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center gap-2">
                                    <Sliders size={18} /> Revenue Simulator
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Hero Visual - Floating Phone with Ad Overlay */}
                        <motion.div 
                            className="relative h-[500px] w-full hidden lg:flex items-center justify-center"
                            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{ perspective: 1000 }}
                        >
                            <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden">
                                {/* Screen Content */}
                                <div className="bg-white h-full w-full flex flex-col">
                                    <div className="h-8 bg-gray-100 flex items-center justify-center border-b">
                                        <div className="w-20 h-4 bg-gray-300 rounded-full"></div>
                                    </div>
                                    <div className="flex-1 p-4 space-y-3">
                                        <div className="h-32 bg-gray-200 rounded-xl w-full"></div>
                                        <div className="h-4 bg-gray-200 w-3/4 rounded"></div>
                                        <div className="h-4 bg-gray-200 w-1/2 rounded"></div>
                                        <div className="h-32 bg-gray-200 rounded-xl w-full mt-4"></div>
                                    </div>
                                    
                                    {/* The Ad (Interstial) - Floating up */}
                                    <motion.div 
                                        className="absolute bottom-20 left-4 right-4 bg-gradient-to-br from-[#00CFB8] to-[#002855] p-6 rounded-xl shadow-lg text-white"
                                        initial={{ y: 200 }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <DollarSign size={20} />
                                            <span className="font-bold text-lg">AdMob Ad</span>
                                        </div>
                                        <div className="text-xs opacity-80">Sponsored Content • High eCPM</div>
                                        <button className="mt-3 bg-white text-[#002855] text-xs font-bold px-3 py-1 rounded">Install Now</button>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Floating Revenue Badge */}
                            <motion.div 
                                className="absolute -right-10 top-20 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3"
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            >
                                <div className="bg-green-100 p-2 rounded-full text-green-600">
                                    <TrendingUp size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Monthly Revenue</p>
                                    <p className="font-bold text-[#002855] text-lg">$24,592</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* STATS ROW                                  */}
            {/* ========================================== */}
            <section className="py-10 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center md:text-left"
                            >
                                <p className="text-3xl md:text-4xl font-bold text-[#002855]">{stat.value}</p>
                                <p className="text-sm font-semibold text-gray-800 mt-1">{stat.label}</p>
                                <p className="text-xs text-gray-400">{stat.sub}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* INTERACTIVE REVENUE SIMULATOR               */}
            {/* ========================================== */}
            <section id="simulator" className="py-24 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div 
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Interactive Tool</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2 mb-4">
                            Ad Revenue Simulator
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Estimate how optimization changes will impact your bottom line.
                        </p>
                    </motion.div>

                    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden max-w-5xl mx-auto grid md:grid-cols-2">
                        
                        {/* Controls */}
                        <div className="p-8 md:p-12 space-y-8 border-b md:border-b-0 md:border-r border-gray-100">
                            
                            {/* Slider: DAU */}
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm font-bold text-gray-700">Daily Active Users (DAU)</label>
                                    <span className="text-sm font-bold text-[#002855]">{adData.dau.toLocaleString()}</span>
                                </div>
                                <input 
                                    type="range" 
                                    min="1000" max="500000" step="1000"
                                    value={adData.dau} 
                                    onChange={(e) => setAdData({...adData, dau: parseInt(e.target.value)})}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#00CFB8]"
                                />
                            </div>

                            {/* Slider: Ads per User */}
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm font-bold text-gray-700">Avg Ads per User</label>
                                    <span className="text-sm font-bold text-[#002855]">{adData.adsPerUser}</span>
                                </div>
                                <input 
                                    type="range" 
                                    min="1" max="10" step="0.5"
                                    value={adData.adsPerUser} 
                                    onChange={(e) => setAdData({...adData, adsPerUser: parseFloat(e.target.value)})}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#00CFB8]"
                                />
                            </div>

                            {/* Slider: eCPM */}
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm font-bold text-gray-700">eCPM ($)</label>
                                    <span className="text-sm font-bold text-[#002855]">${adData.eCPM.toFixed(2)}</span>
                                </div>
                                <input 
                                    type="range" 
                                    min="1" max="50" step="0.50"
                                    value={adData.eCPM} 
                                    onChange={(e) => setAdData({...adData, eCPM: parseFloat(e.target.value)})}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#00CFB8]"
                                />
                            </div>
                        </div>

                        {/* Result Visualization */}
                        <div className="p-8 md:p-12 bg-[#002855] flex flex-col justify-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00CFB8]/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                            
                            <div className="relative z-10 text-center">
                                <p className="text-gray-400 text-sm uppercase tracking-widest mb-4">Estimated Monthly Revenue</p>
                                <motion.div 
                                    key={monthlyRevenue}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="text-6xl md:text-7xl font-bold text-white mb-2"
                                >
                                    ${monthlyRevenue.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})}
                                </motion.div>
                                <p className="text-gray-400 text-sm mb-8">
                                    Based on {dailyImpressions.toLocaleString()} daily impressions
                                </p>

                                {/* Visual: Coin Stack */}
                                <div className="flex justify-center items-end gap-1 h-24 opacity-50">
                                    {[...Array(10)].map((_, i) => (
                                        <div 
                                            key={i} 
                                            className="w-6 bg-[#00CFB8] rounded-t-sm"
                                            style={{ height: `${Math.random() * 80 + 20}%` }}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* AD UNIT ANALYSIS SECTION                   */}
            {/* ========================================== */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Deep Dive</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2 mb-4">
                            Ad Unit Performance Breakdown
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Stop guessing which ad format works. We break down performance by Banner, Interstitial, and Rewarded Video.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Banner Ads", fill: "98%", ecpm: "$0.50", impact: "Low annoyance, steady flow" },
                            { name: "Interstitial", fill: "95%", ecpm: "$8.20", impact: "High revenue, use carefully" },
                            { name: "Rewarded Video", fill: "92%", ecpm: "$24.50", impact: "Best user experience" },
                        ].map((unit, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 border border-gray-100 rounded-2xl bg-[#f4f7fb] hover:shadow-lg transition-shadow"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <Smartphone size={28} className="text-[#002855]" />
                                    <span className="text-xs font-bold text-gray-400 uppercase">{unit.name}</span>
                                </div>
                                <div className="mb-4">
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-gray-600">Fill Rate</span>
                                        <span className="font-bold text-[#002855]">{unit.fill}</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-[#00CFB8] h-2 rounded-full" style={{ width: unit.fill }}></div>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-gray-600">Avg eCPM</span>
                                        <span className="font-bold text-[#002855]">{unit.ecpm}</span>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500">{unit.impact}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* FEATURES GRID                              */}
            {/* ========================================== */}
            <section className="py-24 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Capabilities</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2 mb-4">
                            Revenue <span className="text-[#00CFB8]">Intelligence</span>
                        </h2>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 bg-[#002855] rounded-lg flex items-center justify-center text-white mb-6 group-hover:bg-[#00CFB8] transition-colors duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#002855] mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ========================================== */}
            {/* COMPETITOR AD SPY                          */}
            {/* ========================================== */}
            <section className="py-24 bg-[#002855] text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div 
                            className="space-y-8"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                                Spy on Competitor <br />
                                <span className="text-[#00CFB8]">Ad Strategies</span>
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Don't guess how the top apps monetize. See their ad placements, frequency, and which networks they use. Replicate their success and avoid their mistakes.
                            </p>
                            
                            <ul className="space-y-4">
                                {['Detected ad networks in competitor apps', 'Ad placement heatmaps', 'Frequency analysis per session', 'Revenue estimates for top rivals'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-200">
                                        <Eye className="text-[#00CFB8]" size={20} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            
                            <Link href="/contact" className="inline-flex items-center gap-2 mt-6 text-[#00CFB8] font-bold hover:gap-3 transition-all">
                                Start Spying <ArrowRight size={18} />
                            </Link>
                        </motion.div>

                        {/* Visual: Spy Grid */}
                        <motion.div 
                            className="grid grid-cols-2 gap-4"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            {[
                                { name: "Competitor A", status: "High Revenue", color: "bg-green-500" },
                                { name: "Competitor B", status: "Aggressive Ads", color: "bg-red-500" },
                                { name: "Competitor C", status: "Balanced", color: "bg-yellow-500" },
                                { name: "Competitor D", status: "Low Ads", color: "bg-blue-500" },
                            ].map((comp, i) => (
                                <div key={i} className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-colors cursor-pointer">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                            <Activity size={18} />
                                        </div>
                                        <div className={`w-3 h-3 rounded-full ${comp.color}`}></div>
                                    </div>
                                    <h4 className="font-bold text-sm mb-1">{comp.name}</h4>
                                    <p className="text-xs text-gray-400">{comp.status}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* BOTTOM CTA                                 */}
            {/* ========================================== */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.h2 
                        className="text-3xl md:text-5xl font-bold text-[#002855] mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Monetize Smarter, Not Harder.
                    </motion.h2>
                    <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto">
                        Get the insights you need to maximize AdMob revenue without sacrificing user experience.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#00CFB8] text-white font-bold rounded-lg hover:bg-[#00B5A0] transition-colors shadow-lg shadow-[#00CFB8]/20">
                        Get Started Free <ArrowRight size={18} />
                    </Link>
                </div>
            </section>

            <footer className="bg-[#002855] py-10 text-center border-t border-white/10">
                <p className="text-gray-400 text-sm">© 2024 AppOptimax Inc. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default AdMobRevenue;