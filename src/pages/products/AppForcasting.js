'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    LineChart, TrendingUp, BarChart3, Calculator, Calendar, 
    DollarSign, ArrowRight, Zap, Target, Layers, Activity, 
    CheckCircle2, Sliders, Globe, Clock 
} from 'lucide-react';
import Link from 'next/link';

// --- Mock Data ---
const stats = [
    { value: "94%", label: "Forecast Accuracy", sub: "Based on historical data" },
    { value: "2.1M", label: "Installs Predicted", sub: "For Clients (Last Month)" },
    { value: "$1.2M", label: "Revenue Saved", sub: "vs Paid User Acquisition" },
    { value: "60 Days", label: "Look-ahead Window", sub: "Trend Analysis" },
];

const features = [
    { icon: <LineChart size={24} />, title: "Organic Growth Modeling", desc: "Predict how many installs you'll gain by improving your keyword rankings, based on real CTR (Click-Through Rate) curves." },
    { icon: <Calendar size={24} />, title: "Seasonality Detection", desc: "Know when demand peaks. Our algorithms factor in seasonality so you don't mistake a seasonal dip for a strategy failure." },
    { icon: <Target size={24} />, title: "Competitor Forecasting", desc: "Simulate what happens if a competitor launches an update. Anticipate ranking shifts before they happen." },
    { icon: <DollarSign size={24} />, title: "Revenue Estimator", desc: "Connect your pricing tiers and in-app purchase data to forecast revenue alongside installs." },
    { icon: <Activity size={24} />, title: "Market Trend Analysis", desc: "See if a niche is growing or shrinking. Is 'AI Photo Editor' trending up? We show you the trajectory." },
    { icon: <Layers size={24} />, title: "What-If Scenarios", desc: "Run unlimited simulations. 'What if I rank #1 for these 10 keywords?' Get the answer in seconds." },
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

const AppForecasting = () => {
    
    // --- Simulator State ---
    const [simData, setSimData] = useState({
        rank: 3,        // 1 to 10
        volume: 50000,  // 10k to 100k
        conversion: 5   // 1% to 10%
    });

    // --- Helper: Simple Algorithm for Demo ---
    // Simulated Installs = Volume * (CTR based on rank) * Conversion Rate
    const getCTR = (rank) => {
        const curve = { 1: 0.35, 2: 0.25, 3: 0.18, 4: 0.12, 5: 0.08, 6: 0.05, 7: 0.03, 8: 0.02, 9: 0.015, 10: 0.01 };
        return curve[rank] || 0.01;
    };

    const predictedInstalls = Math.round(simData.volume * getCTR(simData.rank) * (simData.conversion / 100));

    return (
        <div className="bg-[#f4f7fb] min-h-screen">
            
            {/* ========================================== */}
            {/* HERO SECTION                               */}
            {/* ========================================== */}
            <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center bg-[#002855]">
                <div className="absolute inset-0 opacity-10 z-0">
                    <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#002855] via-[#002855]/95 to-[#002855]/80 z-0" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        
                        <motion.div 
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                        >
                            <motion.div variants={fadeInUp}>
                                <span className="inline-block px-4 py-2 bg-[#00CFB8]/20 border border-[#00CFB8]/40 rounded-full text-sm text-[#00CFB8] mb-6 font-medium">
                                    ASO Module — App Forecasting
                                </span>
                            </motion.div>

                            <motion.h1 
                                variants={fadeInUp}
                                className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]"
                            >
                                Predict Your App's <br />
                                <span className="text-[#00CFB8]">Organic Growth</span>
                            </motion.h1>

                            <motion.p 
                                variants={fadeInUp}
                                className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl"
                            >
                                Move beyond guessing. Use predictive analytics to forecast installs, revenue, and market share based on keyword ranking scenarios.
                            </motion.p>

                            <motion.div 
                                variants={fadeInUp}
                                className="flex flex-wrap gap-4"
                            >
                                <Link href="/contact" className="px-8 py-3.5 bg-[#00CFB8] text-white font-medium rounded-lg hover:bg-[#00B5A0] transition-colors flex items-center gap-2 shadow-lg shadow-[#00CFB8]/20">
                                    Start Forecasting <ArrowRight size={18} />
                                </Link>
                                <Link href="#simulator" className="px-8 py-3.5 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center gap-2">
                                    <Sliders size={18} /> Try Simulator
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Hero Visual - Abstract Growth Graph */}
                        <motion.div 
                            className="relative h-[500px] w-full hidden lg:flex items-center justify-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {/* 3D Isometric Card Effect */}
                            <div className="relative w-full max-w-md aspect-square bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 transform rotate-y-12 rotate-x-6 shadow-2xl">
                                {/* Grid Lines */}
                                <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-4 opacity-20">
                                    {[...Array(36)].map((_, i) => (
                                        <div key={i} className="border border-white/20 rounded-sm"></div>
                                    ))}
                                </div>

                                {/* The Curve */}
                                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_10px_rgba(0,207,184,0.5)]">
                                    <path 
                                        d="M10,90 Q30,85 40,60 T70,40 T90,10" 
                                        fill="none" 
                                        stroke="#00CFB8" 
                                        strokeWidth="3" 
                                        strokeLinecap="round"
                                    >
                                        <animate attributeName="stroke-dasharray" from="0,200" to="200,0" dur="2s" fill="freeze" />
                                    </path>
                                    {/* Dots */}
                                    <circle cx="10" cy="90" r="2" fill="white" />
                                    <circle cx="40" cy="60" r="2" fill="white" />
                                    <circle cx="70" cy="40" r="2" fill="white" />
                                    <circle cx="90" cy="10" r="3" fill="#00CFB8" />
                                </svg>

                                <div className="absolute bottom-8 left-8">
                                    <p className="text-white font-bold text-2xl">+145%</p>
                                    <p className="text-gray-400 text-xs">Projected Growth</p>
                                </div>
                            </div>

                            <div className="absolute top-10 right-10 w-32 h-32 bg-[#00CFB8]/20 rounded-full blur-3xl animate-pulse"></div>
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
            {/* INTERACTIVE SIMULATOR                      */}
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
                            Growth Simulator
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Adjust the sliders to see how ranking improvements impact your potential organic installs.
                        </p>
                    </motion.div>

                    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden max-w-5xl mx-auto grid md:grid-cols-2">
                        
                        {/* Controls */}
                        <div className="p-8 md:p-12 space-y-8 border-b md:border-b-0 md:border-r border-gray-100">
                            
                            {/* Slider: Rank */}
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm font-bold text-gray-700">Target Rank</label>
                                    <span className="text-sm font-bold text-[#002855]">#{simData.rank}</span>
                                </div>
                                <input 
                                    type="range" 
                                    min="1" max="10" 
                                    value={simData.rank} 
                                    onChange={(e) => setSimData({...simData, rank: parseInt(e.target.value)})}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#00CFB8]"
                                />
                                <div className="flex justify-between text-xs text-gray-400 mt-1">
                                    <span>#1 (Best)</span>
                                    <span>#10</span>
                                </div>
                            </div>

                            {/* Slider: Volume */}
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm font-bold text-gray-700">Keyword Volume</label>
                                    <span className="text-sm font-bold text-[#002855]">{simData.volume.toLocaleString()}</span>
                                </div>
                                <input 
                                    type="range" 
                                    min="10000" max="100000" step="5000"
                                    value={simData.volume} 
                                    onChange={(e) => setSimData({...simData, volume: parseInt(e.target.value)})}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#00CFB8]"
                                />
                                <div className="flex justify-between text-xs text-gray-400 mt-1">
                                    <span>10k</span>
                                    <span>100k</span>
                                </div>
                            </div>

                            {/* Slider: Conversion */}
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm font-bold text-gray-700">Conversion Rate</label>
                                    <span className="text-sm font-bold text-[#002855]">{simData.conversion}%</span>
                                </div>
                                <input 
                                    type="range" 
                                    min="1" max="10" step="0.5"
                                    value={simData.conversion} 
                                    onChange={(e) => setSimData({...simData, conversion: parseFloat(e.target.value)})}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#00CFB8]"
                                />
                                <div className="flex justify-between text-xs text-gray-400 mt-1">
                                    <span>1%</span>
                                    <span>10%</span>
                                </div>
                            </div>
                        </div>

                        {/* Result Visualization */}
                        <div className="p-8 md:p-12 bg-[#002855] flex flex-col justify-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00CFB8]/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                            
                            <div className="relative z-10 text-center">
                                <p className="text-gray-400 text-sm uppercase tracking-widest mb-4">Estimated Monthly Installs</p>
                                <motion.div 
                                    key={predictedInstalls}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="text-6xl md:text-7xl font-bold text-white mb-6"
                                >
                                    {predictedInstalls.toLocaleString()}
                                </motion.div>

                                {/* Visual Bar Representation of Installs */}
                                <div className="w-full h-32 flex items-end justify-center gap-1">
                                    {[...Array(20)].map((_, i) => (
                                        <motion.div 
                                            key={i}
                                            className="w-full bg-[#00CFB8]/30 rounded-t-sm"
                                            style={{ height: `${Math.random() * 80 + 20}%` }}
                                            animate={{ height: `${(Math.random() * 60) + 20}%` }}
                                            transition={{ duration: 0.5, delay: i * 0.05 }}
                                        ></motion.div>
                                    ))}
                                </div>
                                <p className="text-[#00CFB8] text-xs mt-4 font-medium">Based on App Store & Google Play averages</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* FEATURES GRID                              */}
            {/* ========================================== */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Capabilities</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2 mb-4">
                            Data-Driven <span className="text-[#00CFB8]">Future Planning</span>
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
                                className="p-8 rounded-2xl bg-[#f4f7fb] border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
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
            {/* SEASONALITY SECTION                         */}
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
                                Master <span className="text-[#00CFB8]">Seasonality</span>
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Every app category has its season. Fitness apps spike in January, Travel apps in Summer, and E-commerce in November. Don't get caught off guard.
                            </p>
                            
                            <ul className="space-y-4">
                                {['Historical seasonality curves per category', 'Automated alerts for upcoming peaks', 'Budget allocation recommendations', 'Global holiday impact analysis'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-200">
                                        <div className="w-6 h-6 rounded-full bg-[#00CFB8]/20 flex items-center justify-center text-[#00CFB8] flex-shrink-0">
                                            <CheckCircle2 size={14} />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Visual Heatmap Style */}
                        <motion.div 
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg font-bold mb-6 text-center">Category Demand Heatmap</h3>
                            <div className="space-y-4">
                                {[
                                    { cat: "Fitness", data: [20, 40, 30, 25, 20, 20, 95, 90, 80, 60, 40, 30] },
                                    { cat: "Travel", data: [10, 15, 20, 40, 80, 95, 90, 80, 60, 40, 20, 15] },
                                    { cat: "E-Commerce", data: [30, 30, 30, 30, 30, 30, 40, 40, 90, 95, 80, 60] },
                                ].map((row, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                                            <span>{row.cat}</span>
                                            <span>Peak Demand</span>
                                        </div>
                                        <div className="flex gap-1 h-8">
                                            {row.data.map((h, idx) => (
                                                <div 
                                                    key={idx} 
                                                    className="flex-1 rounded-sm transition-all duration-500 hover:opacity-100"
                                                    style={{ 
                                                        backgroundColor: `rgba(0, 207, 184, ${h / 100})`,
                                                        opacity: h === 100 ? 1 : 0.6
                                                    }}
                                                    title={`Month ${idx+1}: Intensity ${h}%`}
                                                ></div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 text-center">
                                <span className="text-xs text-gray-400">Simulated data for Q1-Q4</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* ROI / METRICS HIGHLIGHT                    */}
            {/* ========================================== */}
            <section className="py-24 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="grid md:grid-cols-2">
                            <div className="p-10 md:p-16 flex flex-col justify-center">
                                <span className="text-[#00CFB8] font-bold uppercase tracking-wider text-sm mb-4">ROI Analysis</span>
                                <h2 className="text-3xl font-bold text-[#002855] mb-6">
                                    Organic vs. Paid
                                </h2>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    Forecasting helps you visualize the long-term value of ASO. Compare the cost of acquiring a user via paid ads versus the lifetime value (LTV) of an organic user acquired through improved rankings.
                                </p>
                                <ul className="space-y-4 text-gray-700">
                                    <li className="flex items-center gap-3">
                                        <DollarSign className="text-[#00CFB8]" size={20} />
                                        <span>Reduce User Acquisition Cost (UAC) by up to 70%</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Zap className="text-[#00CFB8]" size={20} />
                                        <span>Increase LTV through better targeting</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <TrendingUp className="text-[#00CFB8]" size={20} />
                                        <span>Sustainable, compound growth over time</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-[#002855] p-10 md:p-16 flex items-center justify-center relative">
                                {/* Circular Progress Chart Simulation */}
                                <div className="relative w-64 h-64">
                                    <svg className="w-full h-full transform -rotate-90">
                                        <circle cx="128" cy="128" r="120" stroke="rgba(255,255,255,0.1)" strokeWidth="20" fill="transparent" />
                                        <motion.circle 
                                            cx="128" cy="128" r="120" 
                                            stroke="#00CFB8" 
                                            strokeWidth="20" 
                                            fill="transparent" 
                                            strokeDasharray={753} 
                                            strokeDashoffset={753 * 0.25} // 75% filled
                                            initial={{ strokeDashoffset: 753 }}
                                            whileInView={{ strokeDashoffset: 753 * 0.25 }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-5xl font-bold text-white">4x</span>
                                        <span className="text-sm text-gray-300 mt-2">ROI Multiplier</span>
                                    </div>
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#00CFB8]/20 rounded-full blur-2xl"></div>
                            </div>
                        </div>
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
                        Stop Guessing. Start Planning.
                    </motion.h2>
                    <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto">
                        Empower your ASO strategy with predictive data. Know exactly where your app is going.
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

export default AppForecasting;