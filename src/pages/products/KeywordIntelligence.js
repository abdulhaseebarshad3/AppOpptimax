'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Search, TrendingUp, BarChart3, Target, Lightbulb, Globe, ArrowRight, 
    Zap, Filter, Trophy, Sparkles, CheckCircle2, Minus, ArrowUpRight, 
    Layers, Activity, Users, Brain
} from 'lucide-react';
import Link from 'next/link';

// Assets
const KeywordHeroImg = '/images/KeywordIntelligence.png';
// const KeywordHeroImg = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2072&auto=format&fit=crop';
const KeywordResearch = '/images/Keywordresearch.png';
const KeywordDifficulty = '/images/Keyworddifficulty.png';
const KeywordRelevance = '/images/KeywordRelevance.png';

const KeywordIntelligence = () => {

    const [activeTab, setActiveTab] = useState('research');

    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    // Mock Data for Interactive Hub
    const researchData = [
        { keyword: "fitness tracker app", volume: 74200, difficulty: 82, opportunity: 24, trend: "up", change: "+12%" },
        { keyword: "workout planner", volume: 51800, difficulty: 71, opportunity: 38, trend: "up", change: "+8%" },
        { keyword: "calorie counter free", volume: 43600, difficulty: 65, opportunity: 45, trend: "up", change: "+15%" },
    ];

    const difficultyData = [
        { keyword: "fitness tracker app", difficulty: 82, topApps: ["Strava", "Fitbit", "Nike Run"], installs: "50M+" },
        { keyword: "yoga for beginners", difficulty: 38, topApps: ["Daily Yoga", "Down Dog"], installs: "5M+" },
    ];

    const relevancyData = [
        { keyword: "fitness tracker", relevancy: 98, intent: "Core Feature" },
        { keyword: "weight loss tips", relevancy: 25, intent: "Informational" },
    ];

    const suggestedData = [
        { source: "autocomplete", keyword: "fitness tracker for seniors", volume: 8200 },
        { source: "competitor", keyword: "step counter with heart rate", volume: 12400 },
    ];

    const stats = [
        { value: "50M+", label: "Keywords Indexed" },
        { value: "60+", label: "Countries Covered" },
        { value: "4", label: "Intelligence Modules" },
        { value: "98.2%", label: "Relevancy Accuracy" },
    ];

    // Helper Functions
    const getDifficultyColor = (score) => {
        if (score <= 40) return 'text-[#00CFB8]';
        if (score <= 65) return 'text-yellow-500';
        return 'text-red-400';
    };

    const getDifficultyBg = (score) => {
        if (score <= 40) return 'bg-[#00CFB8]/10';
        if (score <= 65) return 'bg-yellow-500/10';
        return 'bg-red-400/10';
    };

    const getTrendIcon = (trend) => {
        if (trend === 'up') return <TrendingUp size={14} className="text-[#00CFB8]" />;
        if (trend === 'down') return <TrendingUp size={14} className="text-red-400 rotate-180" />;
        return <Minus size={14} className="text-gray-400" />;
    };

    return (
        <div className="bg-[#f4f7fb] min-h-screen">

            {/* ========================================== */}
            {/* HERO SECTION                               */}
            {/* ========================================== */}
            <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center">
                <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <img src={KeywordHeroImg} alt="Dashboard" className="w-full h-full object-cover" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#002855]/95 via-[#002855]/85 to-[#002855]/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002855] via-transparent to-transparent" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
                    <div className="max-w-3xl">
                        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                            <span className="inline-block px-4 py-2 bg-[#00CFB8]/20 border border-[#00CFB8]/40 rounded-full text-sm text-[#00CFB8] mb-6 font-medium">
                                ASO Module — Keyword Intelligence
                            </span>
                        </motion.div>

                        <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                            The Complete <br />
                            <span className="text-[#00CFB8]">Keyword Suite</span>
                        </motion.h1>

                        <motion.p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
                            Research volume, analyze difficulty, verify relevancy, and discover new opportunities — all in one unified intelligence engine.
                        </motion.p>

                        <motion.div className="flex flex-wrap gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
                            <Link href="#hub" className="px-8 py-3.5 bg-[#00CFB8] text-white font-medium rounded-lg hover:bg-[#00B5A0] transition-colors flex items-center gap-2 shadow-lg shadow-[#00CFB8]/20">
                                Explore Live Data <ArrowRight size={18} />
                            </Link>
                            <Link href="#research-section" className="px-8 py-3.5 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm">
                                View Modules
                            </Link>
                        </motion.div>

                        <motion.div className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-white/10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1 }}>
                            {stats.map((stat, i) => (
                                <div key={i}>
                                    <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* SECTION: INTERACTIVE HUB (THE DASHBOARD)   */}
            {/* ========================================== */}
            <section id="hub" className="py-20 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Live Preview</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2 mb-4">
                            Unified Intelligence Hub
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Switch between data views instantly.
                        </p>
                    </motion.div>

                    {/* Tab Navigation */}
                    <motion.div className="flex flex-wrap justify-center gap-3 mb-10" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        {[
                            { key: 'research', label: 'Research', icon: <Search size={16} /> },
                            { key: 'difficulty', label: 'Difficulty', icon: <BarChart3 size={16} /> },
                            { key: 'relevancy', label: 'Relevancy', icon: <Target size={16} /> },
                            { key: 'suggested', label: 'Suggestions', icon: <Lightbulb size={16} /> },
                        ].map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 shadow-sm ${
                                    activeTab === tab.key
                                    ? 'bg-[#002855] text-white shadow-lg'
                                    : 'bg-white text-gray-600 border border-gray-200 hover:border-[#00CFB8]/50'
                                }`}
                            >
                                {tab.icon} {tab.label}
                            </button>
                        ))}
                    </motion.div>

                    {/* Tab Content (Mini-Preview) */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                        >
                            {/* Research Tab */}
                            {activeTab === 'research' && (
                                <div className="p-4">
                                    <div className="grid grid-cols-12 gap-2 px-4 py-2 bg-gray-50 text-gray-500 text-xs font-semibold uppercase">
                                        <div className="col-span-5">Keyword</div>
                                        <div className="col-span-3 text-center">Volume</div>
                                        <div className="col-span-2 text-center">Diff</div>
                                        <div className="col-span-2 text-center">Trend</div>
                                    </div>
                                    {researchData.map((kw, i) => (
                                        <div key={i} className="grid grid-cols-12 gap-2 px-4 py-3 items-center border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                            <div className="col-span-5 flex items-center gap-2">
                                                <Search size={12} className="text-gray-400" />
                                                <span className="text-sm font-medium text-[#002855]">{kw.keyword}</span>
                                            </div>
                                            <div className="col-span-3 text-center font-bold text-gray-800 text-sm">{kw.volume.toLocaleString()}</div>
                                            <div className="col-span-2 text-center">
                                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${getDifficultyBg(kw.difficulty)} ${getDifficultyColor(kw.difficulty)}`}>
                                                    {kw.difficulty}
                                                </span>
                                            </div>
                                            <div className="col-span-2 text-center flex justify-center">{getTrendIcon(kw.trend)}</div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Difficulty Tab */}
                            {activeTab === 'difficulty' && (
                                <div className="grid md:grid-cols-2 gap-4 p-6">
                                    {difficultyData.map((kw, i) => (
                                        <div key={i} className="border border-gray-100 rounded-xl p-4 bg-gray-50/50">
                                            <div className="flex justify-between items-center mb-2">
                                                <h4 className="font-bold text-[#002855] text-sm">{kw.keyword}</h4>
                                                <span className={`text-lg font-bold ${getDifficultyColor(kw.difficulty)}`}>{kw.difficulty}</span>
                                            </div>
                                            <p className="text-xs text-gray-500">Top Apps: {kw.topApps.join(', ')}</p>
                                            <div className="mt-2 bg-gray-200 rounded-full h-1.5">
                                                <div className={`h-full ${kw.difficulty > 60 ? 'bg-red-400' : 'bg-[#00CFB8]'}`} style={{ width: `${kw.difficulty}%` }}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Relevancy Tab */}
                            {activeTab === 'relevancy' && (
                                <div className="p-4 space-y-2">
                                    {relevancyData.map((kw, i) => (
                                        <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                            <span className="text-sm font-medium text-gray-700">{kw.keyword}</span>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs text-gray-500">{kw.intent}</span>
                                                <span className={`text-xs font-bold ${kw.relevancy > 80 ? 'text-[#00CFB8]' : 'text-red-400'}`}>
                                                    {kw.relevancy}%
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Suggested Tab */}
                            {activeTab === 'suggested' && (
                                <div className="p-4 grid grid-cols-2 gap-3">
                                    {suggestedData.map((kw, i) => (
                                        <div key={i} className="p-3 border border-dashed border-gray-200 rounded-lg hover:border-[#00CFB8] transition-colors">
                                            <div className="flex items-center justify-between mb-1">
                                                <span className={`text-[9px] px-1.5 py-0.5 rounded uppercase font-bold ${kw.source === 'autocomplete' ? 'bg-blue-50 text-blue-600' : 'bg-purple-50 text-purple-600'}`}>
                                                    {kw.source}
                                                </span>
                                                <Sparkles size={12} className="text-[#00CFB8]" />
                                            </div>
                                            <p className="text-sm font-medium text-[#002855]">{kw.keyword}</p>
                                            <p className="text-xs text-gray-400 mt-1">Vol: {kw.volume.toLocaleString()}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* ========================================== */}
            {/* CATEGORY SECTION 1: KEYWORD RESEARCH       */}
            {/* ========================================== */}
            <section id="research-section" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <div className="relative">
                                <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#00CFB8]/10 rounded-full z-0" />
                                <img src={KeywordResearch} alt="Keyword Research Dashboard" className="rounded-2xl shadow-2xl relative z-10" />
                                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#002855]/5 rounded-full z-0" />
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#002855]/5 rounded-full mb-4">
                                <Search size={16} className="text-[#002855]" />
                                <span className="text-xs font-bold text-[#002855] uppercase tracking-wider">Module 01</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mb-6">
                                Keyword Research & <span className="text-[#00CFB8]">Discovery</span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Discover the exact search terms your potential users are typing into the App Store and Google Play. We go beyond basic suggestions by analyzing search volume, seasonality, and historical trends.
                            </p>
                            <div className="space-y-4 mb-8">
                                {[
                                    "Access 50M+ keyword database across 60 countries",
                                    "Analyze 12-month historical trend graphs",
                                    "Identify high-volume, low-competition gems",
                                    "Filter by language, platform, and category"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle2 size={18} className="text-[#00CFB8] mt-0.5 shrink-0" />
                                        <span className="text-gray-700 text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <Link href="/products/KeywordResearch" className="inline-flex items-center gap-2 text-[#002855] font-semibold hover:text-[#00CFB8] transition-colors group">
                                Explore Research Tools <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* CATEGORY SECTION 2: KEYWORD DIFFICULTY     */}
            {/* ========================================== */}
            <section className="py-24 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        
                        {/* Text Left (Reversed Order) */}
                        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:order-1 order-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#00CFB8]/10 rounded-full mb-4">
                                <BarChart3 size={16} className="text-[#00CFB8]" />
                                <span className="text-xs font-bold text-[#00CFB8] uppercase tracking-wider">Module 02</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mb-6">
                                Difficulty <span className="text-[#00CFB8]">Analysis</span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Not all keywords are worth fighting for. Our proprietary Difficulty Score (0-100) analyzes the strength of the top 10 ranking apps to tell you exactly how hard it is to rank.
                            </p>
                            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm mb-6">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-sm font-medium text-gray-600">Difficulty Score Factors:</span>
                                    <Zap size={16} className="text-[#00CFB8]" />
                                </div>
                                <div className="space-y-3">
                                    {[
                                        { label: "Top 10 App Ratings Strength", value: 40 },
                                        { label: "Keyword Density in Metadata", value: 30 },
                                        { label: "Install Velocity Correlation", value: 30 },
                                    ].map((factor, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between text-xs mb-1">
                                                <span className="text-gray-500">{factor.label}</span>
                                                <span className="font-bold text-gray-700">{factor.value}%</span>
                                            </div>
                                            <div className="w-full bg-gray-100 rounded-full h-1.5">
                                                <div className="bg-[#002855] h-1.5 rounded-full" style={{ width: `${factor.value}%` }}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <Link href="/products/KeywordDifficulty" className="inline-flex items-center gap-2 text-[#002855] font-semibold hover:text-[#00CFB8] transition-colors group">
                                Analyze Competition <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>

                        {/* Image Right */}
                        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:order-2 order-1">
                             <div className="relative">
                                <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#002855] rounded-full opacity-5 z-0" />
                                <img src={KeywordDifficulty} alt="Difficulty Analysis" className="rounded-2xl shadow-xl relative z-10" />
                                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg z-20 border border-gray-50">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                                            <span className="text-red-500 font-bold text-sm">82</span>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">Hard Keyword</p>
                                            <p className="text-sm font-bold text-[#002855]">High Competition</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* CATEGORY SECTION 3: KEYWORD RELEVANCY      */}
            {/* ========================================== */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        
                        {/* Image Left */}
                        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <div className="relative">
                                <img src={KeywordRelevance} alt="Keyword Relevancy" className="rounded-2xl shadow-xl" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#002855]/20 to-transparent rounded-2xl" />
                                
                                <motion.div 
                                    className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div className="flex items-center gap-2">
                                        <Target size={14} className="text-[#00CFB8]" />
                                        <span className="text-xs font-bold text-gray-700">Relevancy Score: 98%</span>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Text Right */}
                        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#00CFB8]/10 rounded-full mb-4">
                                <Target size={16} className="text-[#00CFB8]" />
                                <span className="text-xs font-bold text-[#00CFB8] uppercase tracking-wider">Module 03</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mb-6">
                                Keyword <span className="text-[#00CFB8]">Relevancy</span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                High volume means nothing if the user isn't looking for your app. Our AI-driven relevancy engine filters out "false positive" keywords to ensure you only target terms that drive actual installs.
                            </p>
                            
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {[
                                    { score: "98%", label: "Core Feature Match", color: "bg-[#00CFB8]" },
                                    { score: "65%", label: "Feature Subset", color: "bg-yellow-500" },
                                    { score: "25%", label: "Informational", color: "bg-red-400" },
                                    { score: "12%", label: "Irrelevant", color: "bg-gray-300" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <div className={`w-2.5 h-2.5 rounded-full ${item.color}`}></div>
                                        <span className="text-xs font-medium text-gray-600">{item.label}</span>
                                        <span className="text-xs font-bold text-gray-800 ml-auto">{item.score}</span>
                                    </div>
                                ))}
                            </div>

                            <Link href="/products/KeywordRelevancy" className="inline-flex items-center gap-2 text-[#002855] font-semibold hover:text-[#00CFB8] transition-colors group">
                                Check Relevancy <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* CATEGORY SECTION 4: SUGGESTED KEYWORDS     */}
            {/* ========================================== */}
            <section className="py-24 bg-[#002855] relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#00CFB8] opacity-5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        
                        {/* Text Left */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full mb-4">
                                <Lightbulb size={16} className="text-[#00CFB8]" />
                                <span className="text-xs font-bold text-white uppercase tracking-wider">Module 04</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                AI <span className="text-[#00CFB8]">Suggested</span> Keywords
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Never miss an opportunity. Our system continuously scans autocomplete results, competitor gaps, and semantic relationships to suggest the next best keyword for your app.
                            </p>

                            <div className="space-y-4 mb-8">
                                {[
                                    { icon: <Sparkles size={16} />, title: "Autocomplete Mining", desc: "Real-time scanning of store suggestions" },
                                    { icon: <Layers size={16} />, title: "Competitor Gap Analysis", desc: "Keywords your rivals rank for, but you don't" },
                                    { icon: <Brain size={16} />, title: "Semantic Discovery", desc: "Related terms based on user intent" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 bg-white/5 p-3 rounded-lg border border-white/10">
                                        <div className="w-8 h-8 rounded bg-[#00CFB8]/20 flex items-center justify-center text-[#00CFB8]">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                                            <p className="text-gray-400 text-xs">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Link href="/products/SuggestedKeyword" className="inline-flex items-center gap-2 bg-[#00CFB8] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#00B5A0] transition-colors shadow-lg shadow-[#00CFB8]/20">
                                Discover Suggestions <ArrowRight size={18} />
                            </Link>
                        </motion.div>

                        {/* Visual Right (Cards Floating) */}
                        <motion.div 
                            className="relative h-[400px] hidden lg:block"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <motion.div 
                                className="absolute top-0 right-0 bg-white rounded-xl shadow-xl p-5 w-64 border border-gray-100"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs font-bold text-blue-600 uppercase bg-blue-50 px-2 py-0.5 rounded">Autocomplete</span>
                                    <TrendingUp size={14} className="text-gray-400" />
                                </div>
                                <h4 className="font-bold text-gray-800">"meditation app sleep"</h4>
                                <p className="text-xs text-gray-500 mt-1">Volume: 18.2K</p>
                            </motion.div>

                            <motion.div 
                                className="absolute bottom-10 left-0 bg-white rounded-xl shadow-xl p-5 w-64 border border-gray-100"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs font-bold text-purple-600 uppercase bg-purple-50 px-2 py-0.5 rounded">Competitor</span>
                                    <Layers size={14} className="text-gray-400" />
                                </div>
                                <h4 className="font-bold text-gray-800">"daily yoga routine"</h4>
                                <p className="text-xs text-gray-500 mt-1">Missing in your metadata</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* CTA SECTION                                */}
            {/* ========================================== */}
            <section className="relative py-20 bg-[#f4f7fb]">
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <motion.h2 className="text-3xl md:text-4xl font-bold text-[#002855] mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        Ready to upgrade your ASO stack?
                    </motion.h2>
                    <p className="text-gray-500 mb-8 text-lg">
                        Stop juggling multiple tools. Get Research, Difficulty, Relevancy, and Suggestions in one dashboard.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#002855] text-white font-medium rounded-lg hover:bg-[#001d3d] transition-colors shadow-lg">
                        Start Free Trial <ArrowRight size={18} />
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default KeywordIntelligence;