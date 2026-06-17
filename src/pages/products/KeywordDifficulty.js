import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gauge, Shield, Target, BarChart3, TrendingUp, Search, Trophy, Zap, Filter, ArrowRight, ArrowUpRight, Mail, Phone, MapPin, Send, CheckCircle2, Star, Minus, Users, Activity, Swords, Award, PieChart, ArrowLeftRight, CircleDot } from 'lucide-react';
import Link from 'next/link';

const DiffHeroImg = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2072&auto=format&fit=crop';
const ScoreVisual = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop';
const CompetitorImg = 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop';

const KeywordDifficulty = () => {

    const [activeFilter, setActiveFilter] = useState('all');

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
    };

    // Difficulty keyword data with factor breakdowns
    const keywordData = [
        { keyword: "fitness tracker", volume: 74200, difficulty: 87, topAppRating: 4.8, topAppReviews: "2.1M", densityScore: 92, installStrength: 89, trend: "up", change: "+12%" },
        { keyword: "workout planner", volume: 51800, difficulty: 71, topAppRating: 4.6, topAppReviews: "890K", densityScore: 74, installStrength: 68, trend: "up", change: "+8%" },
        { keyword: "calorie counter", volume: 43600, difficulty: 65, topAppRating: 4.5, topAppReviews: "1.2M", densityScore: 70, installStrength: 61, trend: "up", change: "+15%" },
        { keyword: "step counter", volume: 38900, difficulty: 54, topAppRating: 4.3, topAppReviews: "420K", densityScore: 58, installStrength: 49, trend: "stable", change: "+2%" },
        { keyword: "home workout", volume: 35200, difficulty: 48, topAppRating: 4.4, topAppReviews: "310K", densityScore: 52, installStrength: 44, trend: "up", change: "+22%" },
        { keyword: "sleep tracker", volume: 31400, difficulty: 62, topAppRating: 4.6, topAppReviews: "680K", densityScore: 65, installStrength: 59, trend: "down", change: "-3%" },
        { keyword: "meditation app", volume: 28700, difficulty: 44, topAppRating: 4.7, topAppReviews: "1.5M", densityScore: 48, installStrength: 40, trend: "up", change: "+18%" },
        { keyword: "heart rate monitor", volume: 26100, difficulty: 73, topAppRating: 4.5, topAppReviews: "540K", densityScore: 76, installStrength: 70, trend: "stable", change: "0%" },
        { keyword: "yoga for beginners", volume: 22500, difficulty: 32, topAppRating: 4.2, topAppReviews: "180K", densityScore: 35, installStrength: 28, trend: "up", change: "+31%" },
        { keyword: "diet plan maker", volume: 19800, difficulty: 28, topAppRating: 4.1, topAppReviews: "95K", densityScore: 30, installStrength: 25, trend: "up", change: "+9%" },
    ];

    // Features list for intro section
    const features = [
        { icon: <Gauge size={20} />, text: "0-100 Difficulty Scoring System" },
        { icon: <Shield size={20} />, text: "Top-10 Competitor Strength Analysis" },
        { icon: <Target size={20} />, text: "Keyword Density Evaluation" },
        { icon: <Activity size={20} />, text: "Install Velocity Benchmarking" },
        { icon: <Swords size={20} />, text: "Head-to-Head Competitor Compare" },
    ];

    // Scoring factors
    const scoringFactors = [
        {
            icon: <Star size={28} />,
            title: "Top-10 App Ratings",
            desc: "Average star rating of the top 10 apps ranking for a keyword. Higher ratings mean stronger competition and harder to break in.",
            weight: "25%",
            color: "from-yellow-500 to-yellow-600"
        },
        {
            icon: <Users size={28} />,
            title: "Review Volume",
            desc: "Total review count across top-ranking apps. Apps with massive review counts signal entrenched competition with high authority.",
            weight: "20%",
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: <Target size={28} />,
            title: "Keyword Density",
            desc: "How prominently the keyword appears in top app titles and subtitles. Higher density means competitors are actively optimizing for it.",
            weight: "25%",
            color: "from-[#00CFB8] to-[#00B5A0]"
        },
        {
            icon: <Zap size={28} />,
            title: "Install Velocity",
            desc: "Estimated download volume of top-ranking apps. High-velocity apps are aggressively growing, making it harder to compete.",
            weight: "20%",
            color: "from-purple-500 to-purple-600"
        },
        {
            icon: <Award size={28} />,
            title: "App Age & Authority",
            desc: "How long top-ranking apps have been established. Older apps with consistent updates carry more store authority.",
            weight: "10%",
            color: "from-orange-500 to-orange-600"
        },
    ];

    // Core capabilities
    const capabilities = [
        { icon: <Gauge size={28} />, title: "Instant Difficulty Scores", desc: "Get a 0-100 difficulty score for any keyword in seconds. No manual analysis needed — our engine evaluates all ranking factors automatically.", tag: "Core" },
        { icon: <PieChart size={28} />, title: "Factor Breakdown Panel", desc: "See exactly which factors are driving the difficulty score high or low — ratings, reviews, density, or install velocity.", tag: "Analytics" },
        { icon: <ArrowLeftRight size={28} />, title: "Head-to-Head Compare", desc: "Select two keywords and compare their difficulty profiles side-by-side. Understand why one is harder than the other.", tag: "Strategy" },
        { icon: <CircleDot size={28} />, title: "Difficulty Thresholds", desc: "Set custom difficulty caps based on your app's authority level. Only see keywords you can realistically compete for.", tag: "Filtering" },
        { icon: <TrendingUp size={28} />, title: "Difficulty Over Time", desc: "Track how difficulty scores change week over week. Spot keywords getting easier as competitors lose ranking or stop updating.", tag: "Intelligence" },
        { icon: <Shield size={28} />, title: "Weak Competitor Detection", desc: "Identify keywords where top-ranking apps have low ratings, few reviews, or haven't been updated in months — your easiest wins.", tag: "Growth" },
    ];

    // Difficulty levels
    const difficultyLevels = [
        { level: "Easy", range: "0 - 30", color: "#00CFB8", bg: "bg-[#00CFB8]/10", border: "border-[#00CFB8]/30", desc: "Low competition. Top apps have weak ratings, few reviews, or poor optimization. Realistic ranking potential for new apps." },
        { level: "Medium", range: "31 - 55", color: "#eab308", bg: "bg-yellow-500/10", border: "border-yellow-500/30", desc: "Moderate competition. Established apps with decent ratings but room to compete with solid ASO and differentiation." },
        { level: "Hard", range: "56 - 75", color: "#f97316", bg: "bg-orange-500/10", border: "border-orange-500/30", desc: "Strong competition. Top apps have high ratings, many reviews, and active optimization. Requires significant ASO effort." },
        { level: "Very Hard", range: "76 - 100", color: "#ef4444", bg: "bg-red-500/10", border: "border-red-500/30", desc: "Dominant competition. Category leaders with massive review counts, excellent ratings, and aggressive optimization. Long-term play." },
    ];

    // How it works
    const steps = [
        { step: "01", title: "Enter Keywords", desc: "Paste a list of keywords or let our tool pull suggestions from your existing metadata and competitor analysis." },
        { step: "02", title: "Get Difficulty Scores", desc: "Our engine analyzes top-10 ranking apps for each keyword across 5 weighted factors and generates a composite 0-100 score." },
        { step: "03", title: "Review Factor Breakdown", desc: "Drill into each factor — see the exact rating, review count, density, and install velocity of every competitor in the top 10." },
        { step: "04", title: "Prioritize & Act", desc: "Filter by difficulty threshold, compare head-to-head, and export your prioritized list to your ASO workflow." },
    ];

    const stats = [
        { value: "5", label: "Scoring Factors" },
        { value: "10", label: "Apps Analyzed Per KW" },
        { value: "0-100", label: "Standardized Scale" },
        { value: "Weekly", label: "Score Updates" },
    ];

    const getDifficultyColor = (score) => {
        if (score <= 30) return 'text-[#00CFB8]';
        if (score <= 55) return 'text-yellow-500';
        if (score <= 75) return 'text-orange-500';
        return 'text-red-400';
    };

    const getDifficultyBg = (score) => {
        if (score <= 30) return 'bg-[#00CFB8]/10 border border-[#00CFB8]/20';
        if (score <= 55) return 'bg-yellow-500/10 border border-yellow-500/20';
        if (score <= 75) return 'bg-orange-500/10 border border-orange-500/20';
        return 'bg-red-500/10 border border-red-500/20';
    };

    const getDifficultyLabel = (score) => {
        if (score <= 30) return 'Easy';
        if (score <= 55) return 'Medium';
        if (score <= 75) return 'Hard';
        return 'Very Hard';
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
            <section className="relative min-h-screen w-full overflow-hidden flex items-center">
                <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <img src={DiffHeroImg} alt="Keyword Difficulty Analysis" className="w-full h-full object-cover" />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-r from-[#002855]/95 via-[#002855]/80 to-[#002855]/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002855] via-transparent to-[#002855]/30" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
                    <div className="max-w-3xl">
                        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                            <span className="inline-block px-4 py-2 bg-[#00CFB8]/20 border border-[#00CFB8]/40 rounded-full text-sm text-[#00CFB8] mb-6 font-medium">
                                ASO Module — Keyword Difficulty
                            </span>
                        </motion.div>

                        <motion.h1
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Know What You <br />
                            <span className="text-[#00CFB8]">Can Rank For</span>
                        </motion.h1>

                        <motion.p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
                            Stop targeting keywords you can't win. Our 5-factor difficulty scoring tells you exactly how hard it is to rank — and where your easiest opportunities hide.
                        </motion.p>

                        <motion.div className="flex flex-wrap gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
                            <Link href="/contact" className="px-8 py-3.5 bg-[#00CFB8] text-white font-medium rounded-lg hover:bg-[#00B5A0] transition-colors flex items-center gap-2 shadow-lg shadow-[#00CFB8]/20">
                                Analyze Keywords Free <ArrowRight size={18} />
                            </Link>
                            <Link href="#scoring" className="px-8 py-3.5 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm">
                                See How We Score
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

                <motion.div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10" animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
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
                        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="space-y-6">
                            <motion.div variants={fadeInUp}>
                                <span className="inline-block bg-[#00CFB8]/10 text-[#00CFB8] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-[#00CFB8]/20">
                                    Stop Wasting Effort
                                </span>
                            </motion.div>

                            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-[#002855] leading-tight">
                                Every Keyword Has <br />
                                <span className="text-[#00CFB8]">a Different Fight</span>
                            </motion.h2>

                            <motion.p variants={fadeInUp} className="text-gray-600 text-sm leading-relaxed">
                                "Fitness tracker" and "yoga for beginners" might have similar search volumes, but ranking for them requires completely different levels of effort. One is dominated by 4.8-star apps with millions of reviews. The other has weak competitors you can outrank in weeks.
                            </motion.p>

                            <motion.p variants={fadeInUp} className="text-gray-600 text-sm leading-relaxed">
                                AppOptimax's Keyword Difficulty score analyzes the top 10 apps for every keyword across 5 weighted factors — so you know exactly what you're up against before you invest time optimizing.
                            </motion.p>

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
                                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#002855] text-white font-medium rounded-lg hover:bg-[#00CFB8] transition-all duration-300 shadow-lg group">
                                    Check Keyword Difficulty
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        </motion.div>

                        <motion.div className="relative h-full min-h-[500px]" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
                            <div className="relative h-[480px] w-full rounded-2xl overflow-hidden shadow-2xl z-10">
                                <img src={ScoreVisual} alt="Difficulty Score Visual" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#002855]/60 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-lg bg-[#00CFB8] flex items-center justify-center">
                                            <Gauge size={20} className="text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-sm">Difficulty Breakdown</h4>
                                            <p className="text-gray-300 text-xs">5-factor scoring per keyword</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <motion.div className="absolute -bottom-6 -left-6 w-60 bg-white rounded-xl shadow-xl p-4 z-20 border border-gray-100" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }} viewport={{ once: true }}>
                                <div className="flex items-center gap-2 mb-3">
                                    <Shield className="text-[#00CFB8]" size={16} />
                                    <span className="text-xs font-bold text-gray-500 uppercase">Quick Compare</span>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-600">"yoga for beginners"</span>
                                        <span className="text-sm font-bold text-[#00CFB8]">32</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-600">"fitness tracker"</span>
                                        <span className="text-sm font-bold text-red-400">87</span>
                                    </div>
                                </div>
                            </motion.div>

                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00CFB8]/10 rounded-full blur-3xl z-0"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* SECTION 2: DIFFICULTY LEVELS EXPLAINED     */}
            {/* ========================================== */}
            <section className="py-24 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Understanding Scores</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2 mb-4">
                            What the Score <span className="text-[#00CFB8]">Actually Means</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Our 0-100 scale is divided into four tiers. Each tier tells you how much ASO effort is needed to rank on the first page.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {difficultyLevels.map((level, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`relative ${level.bg} ${level.border} border rounded-2xl p-6 hover:shadow-xl transition-shadow`}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold" style={{ color: level.color }}>{level.level}</h3>
                                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-white/60" style={{ color: level.color }}>{level.range}</span>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">{level.desc}</p>
                                <div className="mt-4 w-full h-2 rounded-full bg-white/30 overflow-hidden">
                                    <motion.div
                                        className="h-full rounded-full"
                                        style={{ backgroundColor: level.color }}
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${level.range.split(' - ')[1]}%` }}
                                        transition={{ duration: 1, delay: 0.3 + i * 0.15 }}
                                        viewport={{ once: true }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* SECTION 3: SCORING FACTORS                 */}
            {/* ========================================== */}
            <section id="scoring" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Behind the Score</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2 mb-4">
                            5 Factors That <span className="text-[#00CFB8]">Determine Difficulty</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Each keyword is scored by analyzing the top 10 ranking apps across these weighted factors. No guessing — just data.
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {scoringFactors.map((factor, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group flex flex-col md:flex-row items-start md:items-center gap-6 bg-[#f4f7fb] rounded-2xl p-6 border border-gray-100 hover:border-[#00CFB8]/30 hover:shadow-lg transition-all"
                            >
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${factor.color} flex items-center justify-center text-white flex-shrink-0 shadow-lg`}>
                                    {factor.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-[#002855] mb-1">{factor.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{factor.desc}</p>
                                </div>
                                <div className="flex-shrink-0 text-center">
                                    <p className="text-3xl font-bold text-[#002855]">{factor.weight}</p>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider">Weight</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* SECTION 4: INTERACTIVE DIFFICULTY TABLE    */}
            {/* ========================================== */}
            <section className="py-24 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Live Preview</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2 mb-4">
                            Difficulty Analysis in Action
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            See the difficulty score alongside the actual competitor metrics that drive it.
                        </p>
                    </motion.div>

                    {/* Filters */}
                    <motion.div className="flex flex-wrap gap-2 mb-6" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        {[
                            { key: 'all', label: 'All Keywords' },
                            { key: 'easy', label: 'Easy (0-30)' },
                            { key: 'medium', label: 'Medium (31-55)' },
                            { key: 'hard', label: 'Hard (56-100)' },
                        ].map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveFilter(tab.key)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeFilter === tab.key
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
                    <motion.div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                        <div className="grid grid-cols-12 gap-3 px-6 py-4 bg-[#002855] text-white text-xs font-semibold uppercase tracking-wider">
                            <div className="col-span-3">Keyword</div>
                            <div className="col-span-2 text-center">Difficulty</div>
                            <div className="col-span-2 text-center">Top Rating</div>
                            <div className="col-span-2 text-center">Top Reviews</div>
                            <div className="col-span-1 text-center">Density</div>
                            <div className="col-span-2 text-center">Trend</div>
                        </div>

                        {keywordData
                            .filter((kw) => {
                                if (activeFilter === 'easy') return kw.difficulty <= 30;
                                if (activeFilter === 'medium') return kw.difficulty > 30 && kw.difficulty <= 55;
                                if (activeFilter === 'hard') return kw.difficulty > 55;
                                return true;
                            })
                            .map((kw, i) => (
                                <motion.div
                                    key={kw.keyword}
                                    className={`grid grid-cols-12 gap-3 px-6 py-4 items-center border-b border-gray-50 hover:bg-[#00CFB8]/5 transition-colors cursor-pointer group ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.04 }}
                                >
                                    <div className="col-span-3 flex items-center gap-2">
                                        <Search size={14} className="text-gray-300 group-hover:text-[#00CFB8] transition-colors" />
                                        <span className="text-sm font-medium text-[#002855] group-hover:text-[#00CFB8] transition-colors truncate">{kw.keyword}</span>
                                    </div>
                                    <div className="col-span-2 text-center">
                                        <span className={`inline-flex flex-col items-center text-xs font-bold px-3 py-1.5 rounded-lg ${getDifficultyBg(kw.difficulty)}`}>
                                            <span className={getDifficultyColor(kw.difficulty)}>{kw.difficulty}</span>
                                            <span className={`text-[10px] ${getDifficultyColor(kw.difficulty)}`}>{getDifficultyLabel(kw.difficulty)}</span>
                                        </span>
                                    </div>
                                    <div className="col-span-2 text-center">
                                        <div className="flex items-center justify-center gap-1">
                                            <Star size={12} className="text-yellow-400 fill-yellow-400" />
                                            <span className="text-sm font-medium text-gray-800">{kw.topAppRating}</span>
                                        </div>
                                    </div>
                                    <div className="col-span-2 text-center">
                                        <span className="text-sm text-gray-600">{kw.topAppReviews}</span>
                                    </div>
                                    <div className="col-span-1 text-center">
                                        <span className="text-sm font-medium text-gray-800">{kw.densityScore}</span>
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

                    <p className="text-center text-xs text-gray-400 mt-4">* Demo data shown. Actual results include real-time competitor analysis from both app stores.</p>
                </div>
            </section>

            {/* ========================================== */}
            {/* SECTION 5: CORE CAPABILITIES              */}
            {/* ========================================== */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Capabilities</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2 mb-4">
                            Built for <span className="text-[#00CFB8]">Strategic ASO</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Six capabilities that turn difficulty data into actionable ranking strategy.
                        </p>
                    </motion.div>

                    <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        {capabilities.map((cap, index) => (
                            <motion.div key={index} variants={fadeInUp} className="group relative bg-[#f4f7fb] p-8 rounded-2xl border border-gray-100 transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-teal-100 hover:border-[#00CFB8]/30">
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
                                    <h3 className="text-xl font-bold text-[#002855] mb-3">{cap.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{cap.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ========================================== */}
            {/* SECTION 6: HOW IT WORKS                    */}
            {/* ========================================== */}
            <section className="py-24 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Workflow</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2 mb-4">
                            From Keywords to <span className="text-[#00CFB8]">Difficulty Strategy</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#00CFB8]/20 via-[#00CFB8]/40 to-[#00CFB8]/20"></div>
                        {steps.map((step, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="relative">
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
            {/* SECTION 7: IMAGE + TEXT — COMPETITOR       */}
            {/* ========================================== */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                            <img src={CompetitorImg} alt="Competitor Analysis" className="rounded-2xl shadow-xl w-full object-cover" />
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                            <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Competitor Intel</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-3 mb-6">
                                See Who You're Up Against
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Every difficulty score comes with a full breakdown of the top 10 competing apps — their ratings, review counts, keyword density in titles, and estimated install velocity. No blind optimization.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Spot the weak links: an app ranking #3 with a 3.8 rating and 200 reviews is your easiest path to page one. Our tool highlights these exactly.
                            </p>
                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[#00CFB8] rounded-full" />
                                    Top-10 App Profile per Keyword
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[#00CFB8] rounded-full" />
                                    Rating, Review & Update Recency Data
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[#00CFB8] rounded-full" />
                                    Weak Competitor Highlighting
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[#00CFB8] rounded-full" />
                                    Head-to-Head Keyword Comparison
                                </li>
                            </ul>
                            <Link href="/chapters/kamra" className="inline-flex items-center gap-2 text-[#00CFB8] mt-8 hover:gap-3 transition-all font-semibold">
                                Explore Competitor Analysis <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* SECTION 8: WHY THIS MODULE                 */}
            {/* ========================================== */}
            <section className="py-24 bg-[#002855] relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#00CFB8] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00CFB8] rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <motion.span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Why AppOptimax</motion.span>
                        <motion.h2 className="text-3xl md:text-5xl font-bold text-white mt-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                            Not Just a Number — <br />A Strategy Tool
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: <CheckCircle2 size={22} />, title: "5-Factor Composite Score", desc: "Not a single metric. Our score combines ratings, reviews, density, installs, and authority into one actionable number." },
                            { icon: <CheckCircle2 size={22} />, title: "Per-Store Scoring", desc: "iOS and Android have different competitive landscapes. We score separately for App Store and Google Play." },
                            { icon: <CheckCircle2 size={22} />, title: "Weak Spot Detection", desc: "Automatically flags keywords where top-10 apps have low ratings or haven't been updated — your easiest wins." },
                            { icon: <CheckCircle2 size={22} />, title: "Threshold Filtering", desc: "Set a max difficulty based on your app's authority level. Only see keywords within your realistic reach." },
                            { icon: <CheckCircle2 size={22} />, title: "Historical Tracking", desc: "Watch difficulty scores change over time. Keywords getting easier are your fastest path to page one." },
                            { icon: <CheckCircle2 size={22} />, title: "Export to Workflow", desc: "Push scored keywords directly to your metadata editor or rank tracking dashboard. No manual transfer." },
                        ].map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                                <div className="text-[#00CFB8] mb-4">{item.icon}</div>
                                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* SECTION 9: CONTACT / CTA                   */}
            {/* ========================================== */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Get Started</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2 mb-6">
                                Ready to Know Your <span className="text-[#00CFB8]">Keyword Difficulty?</span>
                            </h2>
                            <p className="text-gray-600 mb-10">
                                Start analyzing keyword difficulty for free. See exactly what you're up against for every keyword in your strategy.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#002855] rounded-lg flex items-center justify-center text-white"><Mail size={20} /></div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Email</h4>
                                        <p className="text-gray-500 text-sm">hello@appoptimax.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#00CFB8] rounded-lg flex items-center justify-center text-white"><MapPin size={20} /></div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Headquarters</h4>
                                        <p className="text-gray-500 text-sm">San Francisco, CA</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#002855] rounded-lg flex items-center justify-center text-white"><Phone size={20} /></div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Schedule a Call</h4>
                                        <p className="text-gray-500 text-sm">Book a 15-min ASO walkthrough</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div className="bg-[#f4f7fb] p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
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
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Keywords to Analyze</label>
                                    <textarea rows="3" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#00CFB8] focus:border-transparent outline-none transition-all resize-none bg-white" placeholder="Paste your keyword list here..."></textarea>
                                </div>
                                <button type="submit" className="w-full bg-[#00CFB8] text-white font-medium py-3.5 rounded-lg hover:bg-[#00B5A0] transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#00CFB8]/20">
                                    Analyze Difficulty Free <ArrowUpRight size={18} />
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
                        Stop Targeting Impossible Keywords
                    </h2>
                    <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                        Know your difficulty score before you optimize. Focus your effort where you can actually win.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/contact" className="px-8 py-4 bg-[#00CFB8] text-white font-medium rounded-lg hover:bg-[#00B5A0] transition-colors shadow-lg shadow-[#00CFB8]/20 flex items-center gap-2">
                            Get Started Free <ArrowRight size={18} />
                        </Link>
                        <Link href="/chapters/alpha" className="px-8 py-4 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                            Try Keyword Research Tool →
                        </Link>
                    </div>
                </motion.div>
            </section>

        </div>
    );
};

export default KeywordDifficulty;