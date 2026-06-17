import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, TrendingUp, BarChart3, Target, Lightbulb, Globe, ArrowRight, Send, Mail, Phone, MapPin, Zap, Filter, Layers, Trophy, Sparkles, ChevronDown, CheckCircle2, XCircle, Minus, ArrowUpRight, Star } from 'lucide-react';
import Link from 'next/link';

const KeywordHeroImg = '/images/Keywordresearch.png'
// const KeywordHeroImg = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2072&auto=format&fit=crop';
const DashboardPreview = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop';
const AnalyticsImg = 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop';

const KeywordResearch = () => {

    const [activeTab, setActiveTab] = useState('volume');

    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
    };

    // Mock keyword data for interactive table
    const keywordData = [
        { keyword: "fitness tracker app", volume: 74200, difficulty: 82, opportunity: 24, rank: 45, trend: "up", change: "+12%" },
        { keyword: "workout planner", volume: 51800, difficulty: 71, opportunity: 38, rank: 12, trend: "up", change: "+8%" },
        { keyword: "calorie counter free", volume: 43600, difficulty: 65, opportunity: 45, rank: 8, trend: "up", change: "+15%" },
        { keyword: "step counter pedometer", volume: 38900, difficulty: 58, opportunity: 52, rank: 23, trend: "stable", change: "+2%" },
        { keyword: "home workout no equipment", volume: 35200, difficulty: 54, opportunity: 61, rank: 31, trend: "up", change: "+22%" },
        { keyword: "sleep tracking app", volume: 31400, difficulty: 62, opportunity: 43, rank: 67, trend: "down", change: "-3%" },
        { keyword: "meditation for beginners", volume: 28700, difficulty: 48, opportunity: 68, rank: 5, trend: "up", change: "+18%" },
        { keyword: "heart rate monitor app", volume: 26100, difficulty: 71, opportunity: 32, rank: 89, trend: "stable", change: "0%" },
        { keyword: "yoga daily routine", volume: 22500, difficulty: 42, opportunity: 74, rank: 2, trend: "up", change: "+31%" },
        { keyword: "diet plan generator", volume: 19800, difficulty: 39, opportunity: 79, rank: 15, trend: "up", change: "+9%" },
    ];

    // Feature highlights
    const features = [
        { icon: <BarChart3 size={20} />, text: "Real-Time Search Volume Data" },
        { icon: <Trophy size={20} />, text: "Keyword Difficulty Scoring (0-100)" },
        { icon: <Target size={20} />, text: "Opportunity & Gap Analysis" },
        { icon: <TrendingUp size={20} />, text: "Historical Trend Tracking" },
        { icon: <Sparkles size={20} />, text: "AI-Powered Keyword Suggestions" },
    ];

    // Core capabilities
    const capabilities = [
        { icon: <Search size={28} />, title: "Smart Keyword Discovery", desc: "Enter a seed keyword and instantly get hundreds of relevant suggestions from App Store & Google Play autocomplete, related terms, and competitor metadata.", tag: "Core" },
        { icon: <BarChart3 size={28} />, title: "Search Volume Intelligence", desc: "Accurate search volume estimates updated weekly. Filter by country, language, and platform to find the keywords your audience actually uses.", tag: "Analytics" },
        { icon: <Trophy size={28} />, title: "Difficulty & Competition Score", desc: "Understand how hard it is to rank for each keyword. Our scoring factors in top-10 app strength, rating parity, and keyword density of leading apps.", tag: "Strategy" },
        { icon: <Target size={28} />, title: "Opportunity Matrix", desc: "Combines low difficulty with high volume to surface the fastest-ranking opportunities. Prioritize keywords where competitors are weak.", tag: "Growth" },
        { icon: <Globe size={28} />, title: "Localized Keyword Research", desc: "Research keywords in 60+ countries and 40+ languages. See how search behavior shifts across markets and adapt your metadata per region.", tag: "Global" },
        { icon: <TrendingUp size={28} />, title: "Trend & Seasonality Tracking", desc: "Spot rising keywords before competitors do. 12-month trend graphs show seasonal spikes and long-term growth patterns for every term.", tag: "Intelligence" },
    ];

    // How it works steps
    const steps = [
        { step: "01", title: "Enter a Seed Keyword", desc: "Type any keyword related to your app's purpose — e.g., 'budget tracker' or 'language learning'. Our engine scans both stores instantly." },
        { step: "02", title: "Analyze the Data", desc: "Review search volume, difficulty scores, opportunity ratings, current rankings, and trend direction for every suggested keyword." },
        { step: "03", title: "Filter & Prioritize", desc: "Use smart filters — volume range, difficulty cap, language, platform — to narrow down to the highest-impact keywords for your strategy." },
        { step: "04", title: "Export & Execute", desc: "Export your finalized keyword list or push it directly to your metadata editor. Track rankings over time as you implement changes." },
    ];

    // Stats
    const stats = [
        { value: "50M+", label: "Keywords Indexed" },
        { value: "60+", label: "Countries Covered" },
        { value: "40+", label: "Languages Supported" },
        { value: "98.2%", label: "Volume Accuracy" },
    ];

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

    const getOpportunityColor = (score) => {
        if (score >= 60) return 'text-[#00CFB8]';
        if (score >= 40) return 'text-yellow-500';
        return 'text-gray-400';
    };

    return (
        <div className="bg-[#f4f7fb] min-h-screen">

            {/* ========================================== */}
            {/* HERO SECTION                               */}
            {/* ========================================== */}
            <section className="relative min-h-screen w-full overflow-hidden flex items-center">

                {/* Background */}
                <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <img
                        src={KeywordHeroImg}
                        alt="Keyword Research Dashboard"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#002855]/95 via-[#002855]/80 to-[#002855]/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002855] via-transparent to-[#002855]/30" />

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="inline-block px-4 py-2 bg-[#00CFB8]/20 border border-[#00CFB8]/40 rounded-full text-sm text-[#00CFB8] mb-6 font-medium">
                                ASO Module — Keyword Research
                            </span>
                        </motion.div>

                        <motion.h1
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Find the Keywords <br />
                            <span className="text-[#00CFB8]">That Drive Installs</span>
                        </motion.h1>

                        <motion.p
                            className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            Discover high-volume, low-competition keywords with real search data, difficulty scoring, and AI-powered suggestions across iOS and Android.
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <Link href="/contact" className="px-8 py-3.5 bg-[#00CFB8] text-white font-medium rounded-lg hover:bg-[#00B5A0] transition-colors flex items-center gap-2 shadow-lg shadow-[#00CFB8]/20">
                                Start Research Free <ArrowRight size={18} />
                            </Link>
                            <Link href="#capabilities" className="px-8 py-3.5 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm">
                                See How It Works
                            </Link>
                        </motion.div>

                        {/* Mini Stats Row */}
                        <motion.div
                            className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-white/10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1 }}
                        >
                            {stats.map((stat, i) => (
                                <div key={i}>
                                    <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                        <div className="w-1.5 h-3 bg-[#00CFB8] rounded-full" />
                    </div>
                </motion.div>
            </section>

            {/* ========================================== */}
            {/* SECTION 1: INTRO / ABOUT                  */}
            {/* ========================================== */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left: Text */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className="space-y-6"
                        >
                            <motion.div variants={fadeInUp}>
                                <span className="inline-block bg-[#00CFB8]/10 text-[#00CFB8] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-[#00CFB8]/20">
                                    The Foundation of ASO
                                </span>
                            </motion.div>

                            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-[#002855] leading-tight">
                                Keyword Research <br />
                                <span className="text-[#00CFB8]">That Actually Works</span>
                            </motion.h2>

                            <motion.p variants={fadeInUp} className="text-gray-600 text-sm leading-relaxed">
                                Most ASO tools give you a list of keywords and guess the volume. AppOptimax uses actual store search behavior data, competitor metadata analysis, and proprietary scoring to surface the keywords that will move the needle for your app.
                            </motion.p>

                            <motion.p variants={fadeInUp} className="text-gray-600 text-sm leading-relaxed">
                                Whether you're launching a new app or optimizing an existing listing, our keyword engine helps you identify exactly which terms your target audience is searching — and which ones you can realistically rank for.
                            </motion.p>

                            {/* Feature List */}
                            <motion.div variants={fadeInUp} className="pt-4 space-y-4">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 rounded-lg bg-[#002855]/5 flex items-center justify-center text-[#002855] group-hover:bg-[#00CFB8] group-hover:text-white transition-all duration-300">
                                            {feature.icon}
                                        </div>
                                        <span className="text-gray-700 font-medium">{feature.text}</span>
                                    </div>
                                ))}
                            </motion.div>

                            <motion.div variants={fadeInUp} className="pt-6">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#002855] text-white font-medium rounded-lg hover:bg-[#00CFB8] transition-all duration-300 shadow-lg group"
                                >
                                    Try Keyword Research
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Right: Visual */}
                        <motion.div
                            className="relative h-full min-h-[500px]"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative h-[480px] w-full rounded-2xl overflow-hidden shadow-2xl z-10">
                                <img
                                    src={DashboardPreview}
                                    alt="Keyword Research Dashboard"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#002855]/60 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-lg bg-[#00CFB8] flex items-center justify-center">
                                            <Search size={20} className="text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-sm">Live Keyword Dashboard</h4>
                                            <p className="text-gray-300 text-xs">Real-time volume & difficulty metrics</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Card */}
                            <motion.div
                                className="absolute -bottom-6 -left-6 w-56 bg-white rounded-xl shadow-xl p-4 z-20 border border-gray-100"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <Zap className="text-[#00CFB8]" size={16} />
                                    <span className="text-xs font-bold text-gray-500 uppercase">Top Opportunity</span>
                                </div>
                                <p className="text-sm font-bold text-[#002855] mb-1">"yoga daily routine"</p>
                                <div className="flex items-center gap-3 text-xs text-gray-500">
                                    <span>Vol: 22.5K</span>
                                    <span className="text-[#00CFB8] font-semibold">Diff: 42</span>
                                    <span className="text-[#00CFB8] font-semibold">Opp: 74</span>
                                </div>
                            </motion.div>

                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00CFB8]/10 rounded-full blur-3xl z-0"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* SECTION 2: INTERACTIVE KEYWORD TABLE       */}
            {/* ========================================== */}
            <section className="py-24 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Live Preview</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2 mb-4">
                            See Keyword Data in Action
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            This is how your keyword research results look — sortable, filterable, and ready to act on.
                        </p>
                    </motion.div>

                    {/* Tab Filters */}
                    <motion.div
                        className="flex flex-wrap gap-2 mb-6"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {[
                            { key: 'volume', label: 'By Volume' },
                            { key: 'difficulty', label: 'By Difficulty' },
                            { key: 'opportunity', label: 'By Opportunity' },
                        ].map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === tab.key
                                    ? 'bg-[#002855] text-white shadow-lg'
                                    : 'bg-white text-gray-600 border border-gray-200 hover:border-[#00CFB8]/30'
                                    }`}
                            >
                                <Filter size={14} className="inline mr-1.5" />
                                {tab.label}
                            </button>
                        ))}
                    </motion.div>

                    {/* Table */}
                    <motion.div
                        className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        {/* Table Header */}
                        <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-[#002855] text-white text-xs font-semibold uppercase tracking-wider">
                            <div className="col-span-4">Keyword</div>
                            <div className="col-span-2 text-center">Volume</div>
                            <div className="col-span-2 text-center">Difficulty</div>
                            <div className="col-span-2 text-center">Opportunity</div>
                            <div className="col-span-2 text-center">Trend</div>
                        </div>

                        {/* Table Rows */}
                        {[...keywordData]
                            .sort((a, b) => {
                                if (activeTab === 'volume') return b.volume - a.volume;
                                if (activeTab === 'difficulty') return a.difficulty - b.difficulty;
                                return b.opportunity - a.opportunity;
                            })
                            .map((kw, i) => (
                                <motion.div
                                    key={kw.keyword}
                                    className={`grid grid-cols-12 gap-4 px-6 py-4 items-center border-b border-gray-50 hover:bg-[#00CFB8]/5 transition-colors cursor-pointer group ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.04 }}
                                >
                                    <div className="col-span-4 flex items-center gap-3">
                                        <Search size={14} className="text-gray-300 group-hover:text-[#00CFB8] transition-colors" />
                                        <span className="text-sm font-medium text-[#002855] group-hover:text-[#00CFB8] transition-colors">{kw.keyword}</span>
                                    </div>
                                    <div className="col-span-2 text-center">
                                        <span className="text-sm font-bold text-gray-800">{kw.volume.toLocaleString()}</span>
                                    </div>
                                    <div className="col-span-2 text-center">
                                        <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full ${getDifficultyBg(kw.difficulty)} ${getDifficultyColor(kw.difficulty)}`}>
                                            {kw.difficulty}
                                        </span>
                                    </div>
                                    <div className="col-span-2 text-center">
                                        <span className={`text-sm font-bold ${getOpportunityColor(kw.opportunity)}`}>
                                            {kw.opportunity}
                                        </span>
                                    </div>
                                    <div className="col-span-2 text-center flex items-center justify-center gap-2">
                                        {getTrendIcon(kw.trend)}
                                        <span className={`text-xs font-medium ${kw.trend === 'up' ? 'text-[#00CFB8]' : kw.trend === 'down' ? 'text-red-400' : 'text-gray-400'}`}>
                                            {kw.change}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                    </motion.div>

                    <p className="text-center text-xs text-gray-400 mt-4">* Demo data shown. Actual results include 50M+ keywords across all categories.</p>
                </div>
            </section>

            {/* ========================================== */}
            {/* SECTION 3: CORE CAPABILITIES              */}
            {/* ========================================== */}
            <section id="capabilities" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Capabilities</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2 mb-4">
                            Everything You Need to <span className="text-[#00CFB8]">Research Smarter</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Six powerful research capabilities working together to give you an unfair advantage in app store search.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {capabilities.map((cap, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="group relative bg-[#f4f7fb] p-8 rounded-2xl border border-gray-100 transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-teal-100 hover:border-[#00CFB8]/30"
                            >
                                <div className="absolute top-0 right-0 w-28 h-28 bg-[#00CFB8]/5 rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="w-14 h-14 rounded-xl bg-[#002855]/5 flex items-center justify-center text-[#002855] group-hover:bg-[#00CFB8] group-hover:text-white transition-all duration-300">
                                            {cap.icon}
                                        </div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-white px-2.5 py-1 rounded-full border border-gray-100">
                                            {cap.tag}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-[#002855] mb-3">
                                        {cap.title}
                                    </h3>

                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {cap.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ========================================== */}
            {/* SECTION 4: HOW IT WORKS                    */}
            {/* ========================================== */}
            <section className="py-24 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Workflow</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2 mb-4">
                            From Seed Keyword to <span className="text-[#00CFB8]">Ranking Strategy</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Four steps to build a keyword list that drives measurable organic growth.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#00CFB8]/20 via-[#00CFB8]/40 to-[#00CFB8]/20"></div>

                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="relative"
                            >
                                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow relative z-10 h-full">
                                    <div className="w-12 h-12 rounded-full bg-[#00CFB8] flex items-center justify-center text-white font-bold text-lg mb-6 shadow-lg shadow-[#00CFB8]/20">
                                        {step.step}
                                    </div>
                                    <h3 className="text-lg font-bold text-[#002855] mb-3">{step.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* SECTION 5: IMAGE + TEXT — LOCALIZED KW     */}
            {/* ========================================== */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src={AnalyticsImg}
                                alt="Localized Keyword Research"
                                className="rounded-2xl shadow-xl w-full object-cover"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">
                                Localization
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-3 mb-6">
                                Keywords That Work in Every Market
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                The same keyword doesn't perform equally in every country. "Budget tracker" might dominate in the US, while "expense manager" leads in the UK, and "gastos mensuales" tops in Spain.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Our localized keyword research lets you select any country-language combination and get market-specific search volumes, difficulty scores, and competitor keyword gaps — so your metadata speaks the language of each market, literally.
                            </p>
                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[#00CFB8] rounded-full" />
                                    60+ Countries with Local Search Data
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[#00CFB8] rounded-full" />
                                    40+ Languages Supported
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[#00CFB8] rounded-full" />
                                    Per-Market Competitor Keyword Gaps
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[#00CFB8] rounded-full" />
                                    Roman & Non-Roman Script Support
                                </li>
                            </ul>
                            <Link href="/features/localized-aso" className="inline-flex items-center gap-2 text-[#00CFB8] mt-8 hover:gap-3 transition-all font-semibold">
                                Explore Localized Research <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* SECTION 6: WHY THIS MODULE                 */}
            {/* ========================================== */}
            <section className="py-24 bg-[#002855] relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#00CFB8] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00CFB8] rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <motion.span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            Why AppOptimax
                        </motion.span>
                        <motion.h2 className="text-3xl md:text-5xl font-bold text-white mt-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                            Not All Keyword Tools Are Equal
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: <CheckCircle2 size={22} />, title: "Proprietary Volume Data", desc: "We don't scrape Google Trends. Our volume comes from direct store search behavior modeling — updated weekly, not quarterly." },
                            { icon: <CheckCircle2 size={22} />, title: "True Difficulty Scoring", desc: "Our difficulty algorithm factors in top-10 app ratings, review counts, keyword density, and install velocity — not just competitor count." },
                            { icon: <CheckCircle2 size={22} />, title: "Opportunity Matrix", desc: "The only ASO tool that combines volume × difficulty × your current rank into a single actionable opportunity score." },
                            { icon: <CheckCircle2 size={22} />, title: "AI Keyword Expansion", desc: "GPT-powered suggestions that go beyond synonyms — understanding user intent and app context for smarter recommendations." },
                            { icon: <CheckCircle2 size={22} />, title: "Direct Integration", desc: "Push researched keywords straight into your metadata editor. No copy-pasting between tabs. One workflow, end to end." },
                            { icon: <CheckCircle2 size={22} />, title: "Rank Tracking Built-In", desc: "Every researched keyword can be added to your rank tracking dashboard instantly. See the impact of your ASO changes in real time." },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
                            >
                                <div className="text-[#00CFB8] mb-4">{item.icon}</div>
                                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* SECTION 7: CONTACT / CTA                   */}
            {/* ========================================== */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Left: Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Get Started</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2 mb-6">
                                Ready to Find Your <span className="text-[#00CFB8]">Best Keywords?</span>
                            </h2>
                            <p className="text-gray-600 mb-10">
                                Start your free keyword research trial. No credit card required. Get access to 50M+ keywords across iOS and Android in minutes.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#002855] rounded-lg flex items-center justify-center text-white">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Email</h4>
                                        <p className="text-gray-500 text-sm">hello@appoptimax.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#00CFB8] rounded-lg flex items-center justify-center text-white">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Headquarters</h4>
                                        <p className="text-gray-500 text-sm">San Francisco, CA</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#002855] rounded-lg flex items-center justify-center text-white">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Schedule a Call</h4>
                                        <p className="text-gray-500 text-sm">Book a 15-min ASO walkthrough</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Form */}
                        <motion.div
                            className="bg-[#f4f7fb] p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-xl font-bold text-[#002855] mb-6">Request Free Trial Access</h3>
                            <form className="space-y-5">
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#00CFB8] focus:border-transparent outline-none transition-all bg-white" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#00CFB8] focus:border-transparent outline-none transition-all bg-white" placeholder="Doe" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Work Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#00CFB8] focus:border-transparent outline-none transition-all bg-white" placeholder="john@company.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">App Name / URL</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#00CFB8] focus:border-transparent outline-none transition-all bg-white" placeholder="e.g., MyApp on App Store" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">What do you want to research?</label>
                                    <textarea rows="3" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#00CFB8] focus:border-transparent outline-none transition-all resize-none bg-white" placeholder="Tell us about your app and goals..."></textarea>
                                </div>
                                <button type="submit" className="w-full bg-[#00CFB8] text-white font-medium py-3.5 rounded-lg hover:bg-[#00B5A0] transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#00CFB8]/20">
                                    Start Free Trial <ArrowUpRight size={18} />
                                </button>
                            </form>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* BOTTOM CTA BAND                            */}
            {/* ========================================== */}
            <section className="relative py-20 bg-gradient-to-r from-[#002855] to-[#003d7a]">
                <motion.div className="relative z-10 max-w-4xl mx-auto px-6 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Stop Guessing. Start Ranking.
                    </h2>
                    <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                        The right keywords can double your organic installs. AppOptimax Keyword Research shows you exactly which ones to target — and why.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/contact" className="px-8 py-4 bg-[#00CFB8] text-white font-medium rounded-lg hover:bg-[#00B5A0] transition-colors shadow-lg shadow-[#00CFB8]/20 flex items-center gap-2">
                            Get Started Free <ArrowRight size={18} />
                        </Link>
                        <Link href="/chapters/delta" className="px-8 py-4 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                            Try Keyword Difficulty Tool →
                        </Link>
                    </div>
                </motion.div>
            </section>

        </div>
    );
};

export default KeywordResearch;