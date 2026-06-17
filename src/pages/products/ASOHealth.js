'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
    HeartPulse, AlertTriangle, Globe, TrendingUp, TrendingDown, Star, 
    Users, Download, Search, ShieldCheck, Activity, ChevronRight, 
    BarChart3, Flag, Eye, ArrowRight, Bell, CheckCircle2, XCircle
} from 'lucide-react';

// Assets
const ASOHeroImg='/images/ASOhealth.png'
// const ASOHeroImg = 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop';

const ASOHealth = () => {

    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    // ==========================================
    // MOCK DATA - From Image Description
    // ==========================================

    // 1. Main Health Data
    const healthData = {
        appName: "Screen Mirroring Cast",
        store: "Google Play",
        healthScore: 82,
        lastUpdated: "2 hours ago",
        metrics: [
            { name: "Keyword Visibility", score: 72, icon: <Eye size={18} />, change: "+3" },
            { name: "Ratings Score", score: 68, icon: <Star size={18} />, change: "-2" },
            { name: "Retention Rate", score: 50, icon: <Users size={18} />, change: "0" },
            { name: "Install Performance", score: 80, icon: <Download size={18} />, change: "+5" },
            { name: "Localization", score: 45, icon: <Globe size={18} />, change: "-10" },
        ]
    };

    // 2. Alerts Data
    const alertsData = [
        { type: "warning", message: "Keyword 'screen cast' dropped from #4 to #8", time: "Today" },
        { type: "error", message: "Rating 1-star review spike detected (15 new)", time: "Yesterday" },
        { type: "info", message: "New competitor 'Cast TV Pro' entered top 10", time: "2 days ago" },
    ];

    // 3. Keyword Performance
    const keywordPerformance = [
        { keyword: "screen mirroring", rank: 5, change: "up", volume: "High" },
        { keyword: "cast to tv", rank: 12, change: "down", volume: "Medium" },
        { keyword: "miracast", rank: 8, change: "up", volume: "High" },
        { keyword: "screen share", rank: 22, change: "stable", volume: "Medium" },
    ];

    // 4. Localization Overview
    const localizationData = {
        completion: 68,
        regions: [
            { country: "United States", code: "US", status: "complete", progress: 100 },
            { country: "Germany", code: "DE", status: "missing", progress: 40, details: "Missing Title & Description" },
            { country: "France", code: "FR", status: "complete", progress: 100 },
            { country: "Japan", code: "JP", status: "warning", progress: 75, details: "Missing Screenshots" },
        ]
    };

    // Helper for score colors
    const getScoreColor = (score) => {
        if (score >= 80) return 'text-[#00CFB8]';
        if (score >= 50) return 'text-yellow-500';
        return 'text-red-500';
    };

    const getScoreBg = (score) => {
        if (score >= 80) return 'bg-[#00CFB8]';
        if (score >= 50) return 'bg-yellow-500';
        return 'bg-red-500';
    };

    return (
        <div className="bg-[#f4f7fb] min-h-screen">

            {/* ========================================== */}
            {/* HERO SECTION                               */}
            {/* ========================================== */}
            <section className="relative min-h-[70vh] w-full overflow-hidden flex items-center">
                <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <img src={ASOHeroImg} alt="ASO Dashboard" className="w-full h-full object-cover" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#002855]/95 via-[#002855]/85 to-[#002855]/50" />
                
                <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
                    <div className="max-w-3xl">
                        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                            <span className="inline-block px-4 py-2 bg-[#00CFB8]/20 border border-[#00CFB8]/40 rounded-full text-sm text-[#00CFB8] mb-6 font-medium">
                                ASO Module — Health Monitoring
                            </span>
                        </motion.div>

                        <motion.h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                            Real-Time <br />
                            <span className="text-[#00CFB8]">App Health Analytics</span>
                        </motion.h1>

                        <motion.p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
                            Monitor visibility, retention, ratings, and localization status in one unified dashboard. Get alerted before small issues become big problems.
                        </motion.p>

                        <motion.div className="flex flex-wrap gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
                            <Link href="#dashboard-preview" className="px-8 py-3.5 bg-[#00CFB8] text-white font-medium rounded-lg hover:bg-[#00B5A0] transition-colors flex items-center gap-2 shadow-lg">
                                View Live Dashboard <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* DASHBOARD PREVIEW (Based on Image)         */}
            {/* ========================================== */}
            <section id="dashboard-preview" className="py-20 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6">
                    
                    <motion.div 
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2 mb-4">
                            Live Health Snapshot
                        </h2>
                        <p className="text-gray-500 max-w-xl mx-auto">
                            Example: <span className="font-semibold text-[#002855]">{healthData.appName}</span> on {healthData.store}
                        </p>
                    </motion.div>

                    {/* Dashboard Container */}
                    <motion.div 
                        className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >

                        {/* Top Bar: App Info & Main Score */}
                        <div className="p-6 md:p-8 border-b border-gray-100 bg-[#fafcff]">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#002855] to-[#003d7a] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                        SM
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#002855]">{healthData.appName}</h3>
                                        <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                                            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                                            {healthData.store} • Updated {healthData.lastUpdated}
                                        </div>
                                    </div>
                                </div>

                                {/* Main Health Score Circle */}
                                <div className="relative flex items-center gap-4">
                                    <div className="relative w-24 h-24">
                                        <svg className="w-full h-full transform -rotate-90">
                                            <circle cx="48" cy="48" r="40" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                                            <motion.circle 
                                                cx="48" cy="48" r="40" 
                                                stroke={healthData.healthScore >= 80 ? "#00CFB8" : "#f59e0b"} 
                                                strokeWidth="8" 
                                                fill="none"
                                                strokeLinecap="round"
                                                initial={{ strokeDasharray: '0 251.2' }}
                                                whileInView={{ strokeDasharray: `${(healthData.healthScore / 100) * 251.2} 251.2` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                                            <span className={`text-3xl font-bold ${getScoreColor(healthData.healthScore)}`}>{healthData.healthScore}</span>
                                            <span className="text-[10px] text-gray-400 uppercase">Score</span>
                                        </div>
                                    </div>
                                    <div className="hidden md:block text-left">
                                        <p className="text-sm font-bold text-[#002855]">ASO Health</p>
                                        <p className="text-xs text-gray-500">Good condition</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Metrics Grid */}
                        <div className="p-6 md:p-8 grid grid-cols-2 md:grid-cols-5 gap-4 border-b border-gray-100">
                            {healthData.metrics.map((metric, i) => (
                                <div key={i} className="bg-[#f4f7fb] rounded-xl p-4 hover:shadow-md transition-shadow">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="text-gray-400">{metric.icon}</div>
                                        <span className={`text-xs font-medium ${metric.change.startsWith('+') ? 'text-green-500' : metric.change.startsWith('-') ? 'text-red-500' : 'text-gray-400'}`}>
                                            {metric.change}
                                        </span>
                                    </div>
                                    <p className="text-2xl font-bold text-[#002855]">{metric.score}</p>
                                    <p className="text-xs text-gray-500 mt-1">{metric.name}</p>
                                    <div className="mt-2 w-full bg-gray-200 rounded-full h-1">
                                        <div className={`h-1 rounded-full ${getScoreBg(metric.score)}`} style={{ width: `${metric.score}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Main Content Grid: Alerts, Keywords, Localization */}
                        <div className="grid lg:grid-cols-3 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
                            
                            {/* Column 1: Alerts */}
                            <div className="p-6 md:p-8">
                                <div className="flex items-center gap-2 mb-4">
                                    <Bell size={18} className="text-[#002855]" />
                                    <h4 className="font-bold text-[#002855]">Alerts & Issues</h4>
                                </div>
                                <div className="space-y-3">
                                    {alertsData.map((alert, i) => (
                                        <div key={i} className={`p-3 rounded-lg border ${
                                            alert.type === 'error' ? 'bg-red-50 border-red-100' :
                                            alert.type === 'warning' ? 'bg-yellow-50 border-yellow-100' :
                                            'bg-blue-50 border-blue-100'
                                        }`}>
                                            <div className="flex items-start gap-2">
                                                {alert.type === 'error' ? <XCircle size={14} className="text-red-500 mt-0.5" /> : <AlertTriangle size={14} className="text-yellow-500 mt-0.5" />}
                                                <div>
                                                    <p className="text-xs text-gray-700 leading-relaxed">{alert.message}</p>
                                                    <p className="text-[10px] text-gray-400 mt-1">{alert.time}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Column 2: Keyword Performance */}
                            <div className="p-6 md:p-8">
                                <div className="flex items-center gap-2 mb-4">
                                    <Search size={18} className="text-[#002855]" />
                                    <h4 className="font-bold text-[#002855]">Keyword Performance</h4>
                                </div>
                                <div className="space-y-2">
                                    {/* Header */}
                                    <div className="grid grid-cols-12 text-xs text-gray-400 uppercase font-semibold px-2">
                                        <div className="col-span-5">Keyword</div>
                                        <div className="col-span-3 text-center">Rank</div>
                                        <div className="col-span-4 text-right">Volume</div>
                                    </div>
                                    {keywordPerformance.map((kw, i) => (
                                        <div key={i} className="grid grid-cols-12 items-center py-2 px-2 hover:bg-gray-50 rounded-lg">
                                            <div className="col-span-5 text-sm font-medium text-gray-700">{kw.keyword}</div>
                                            <div className="col-span-3 text-center">
                                                <span className={`inline-flex items-center gap-1 text-sm font-bold ${kw.change === 'up' ? 'text-[#00CFB8]' : kw.change === 'down' ? 'text-red-500' : 'text-gray-600'}`}>
                                                    {kw.change === 'up' ? <TrendingUp size={12} /> : kw.change === 'down' ? <TrendingDown size={12} /> : null}
                                                    #{kw.rank}
                                                </span>
                                            </div>
                                            <div className="col-span-4 text-right text-xs text-gray-500 font-medium">{kw.volume}</div>
                                        </div>
                                    ))}
                                </div>
                                <Link href="#" className="mt-4 flex items-center justify-end text-xs font-semibold text-[#00CFB8] hover:underline">
                                    View All Keywords <ChevronRight size={14} />
                                </Link>
                            </div>

                            {/* Column 3: Localization Overview */}
                            <div className="p-6 md:p-8">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <Globe size={18} className="text-[#002855]" />
                                        <h4 className="font-bold text-[#002855]">Localization</h4>
                                    </div>
                                    <span className="text-xs font-bold text-[#00CFB8] bg-[#00CFB8]/10 px-2 py-1 rounded">{localizationData.completion}% Complete</span>
                                </div>
                                
                                <div className="space-y-4">
                                    {localizationData.regions.map((region, i) => (
                                        <div key={i} className="border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                                            <div className="flex items-center justify-between mb-1">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs font-bold text-gray-500">{region.code}</span>
                                                    <span className="text-sm text-gray-700">{region.country}</span>
                                                </div>
                                                <div>
                                                    {region.status === 'complete' ? <CheckCircle2 size={14} className="text-[#00CFB8]" /> :
                                                     <AlertTriangle size={14} className="text-yellow-500" />}
                                                </div>
                                            </div>
                                            {region.status !== 'complete' && (
                                                <div className="mt-1">
                                                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                                                        <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: `${region.progress}%` }}></div>
                                                    </div>
                                                    <p className="text-[10px] text-yellow-600 mt-1">{region.details}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        {/* Bottom: Trend Chart Placeholder */}
                        <div className="p-6 bg-gray-50 border-t border-gray-100">
                             <div className="flex items-center justify-between mb-4">
                                <h4 className="text-sm font-bold text-[#002855]">Trend Charts</h4>
                                <div className="flex gap-2 text-xs font-semibold text-gray-400">
                                    <span className="text-[#002855] border-b-2 border-[#00CFB8] pb-1">7D</span>
                                    <span>1M</span>
                                    <span>3M</span>
                                </div>
                             </div>
                             {/* Fake Chart Bars */}
                             <div className="flex items-end justify-between h-24 gap-2">
                                {[40, 55, 45, 60, 50, 75, 82].map((h, i) => (
                                    <div key={i} className="flex-1 bg-[#00CFB8]/20 rounded-t relative group">
                                        <div className="absolute bottom-0 w-full bg-[#00CFB8] rounded-t transition-all" style={{ height: `${h}%` }}></div>
                                    </div>
                                ))}
                             </div>
                        </div>

                    </motion.div>
                </div>
            </section>

            {/* ========================================== */}
            {/* FEATURES SECTION                           */}
            {/* ========================================== */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Why It Matters</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2 mb-4">
                            Proactive App Health Management
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <Activity size={24} />, title: "Real-Time Monitoring", desc: "Track visibility, retention, and install velocity as they happen. Don't wait for monthly reports." },
                            { icon: <ShieldCheck size={24} />, title: "Penalty Detection", desc: "Get alerts if your app gets penalized or removed from key search results instantly." },
                            { icon: <Flag size={24} />, title: "Localization Gaps", desc: "Identify missing translations or screenshots in key markets to maximize global reach." },
                        ].map((feature, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 bg-[#f4f7fb] rounded-2xl hover:shadow-xl transition-shadow border border-gray-100"
                            >
                                <div className="w-14 h-14 rounded-xl bg-[#002855] flex items-center justify-center text-white mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#002855] mb-3">{feature.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* CTA SECTION                                */}
            {/* ========================================== */}
            <section className="py-20 bg-gradient-to-r from-[#002855] to-[#001d3d]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.h2 className="text-3xl md:text-4xl font-bold text-white mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        Start Your Health Check
                    </motion.h2>
                    <p className="text-gray-300 mb-8 text-lg">
                        Enter your app URL and get a full ASO health report in minutes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <input 
                            type="text" 
                            placeholder="Enter App Name or URL" 
                            className="w-full sm:w-80 px-6 py-3.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#00CFB8]"
                        />
                        <button className="w-full sm:w-auto px-8 py-3.5 bg-[#00CFB8] text-white font-medium rounded-lg hover:bg-[#00B5A0] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#00CFB8]/20">
                            Analyze <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ASOHealth;