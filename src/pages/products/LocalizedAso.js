import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {Globe,MapPin,TrendingUp,BarChart3,Target,Lightbulb,ArrowRight,Send,Mail,Phone,Zap,Filter,Layers,Trophy,Sparkles,CheckCircle2,ArrowUpRight,
    Star,Eye,Languages,Flag, LineChart,AlertCircle} from 'lucide-react';
import Link from 'next/link';

// Images
const GlobalMapImg = '/images/localaso.png';
// const GlobalMapImg = 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000&auto=format&fit=crop';
const LocalizationPreview = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop';
const AnalyticsImg = 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop';

const LocalizedAsoInsights = () => {

    const [activeRegion, setActiveRegion] = useState('americas');

    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
    };

    // Mock Data: Market Performance Synthesis (From Image)
    const marketPerformanceData = [
        { country: "United States", flag: "🇺🇸", score: 99, change: "+2", status: "Excellent", installs: "1.2M", trend: "up" },
        { country: "Japan", flag: "🇯🇵", score: 88, change: "-3", status: "Good", installs: "840K", trend: "down" },
        { country: "Germany", flag: "🇩🇪", score: 76, change: "+5", status: "Average", installs: "320K", trend: "up" },
        { country: "France", flag: "🇫🇷", score: 82, change: "0", status: "Good", installs: "290K", trend: "stable" },
        { country: "Brazil", flag: "🇧🇷", score: 64, change: "+12", status: "Needs Work", installs: "150K", trend: "up" },
        { country: "Russia", flag: "🇷🇺", score: 58, change: "-8", status: "Critical", installs: "90K", trend: "down" },
        { country: "United Kingdom", flag: "🇬🇧", score: 94, change: "+1", status: "Excellent", installs: "560K", trend: "up" },
        { country: "South Korea", flag: "🇰🇷", score: 71, change: "+4", status: "Average", installs: "210K", trend: "up" },
    ];

    // Mock Data: App Presence Adaptation (From Image)
    const adaptationComparison = [
        {
            region: "US - English",
            title: "Fitness Tracker Pro",
            subtitle: "Workout & Calorie Counter",
            screenshotTheme: "Dark Mode, High Contrast",
            cta: "Start Free Trial",
            rating: "4.8 ★"
        },
        {
            region: "Japan - Japanese",
            title: "フィットネストラッカー",
            subtitle: "カロリー計算とトレーニング",
            screenshotTheme: "Light Mode, Pastel Tones",
            cta: "無料トライアルを開始",
            rating: "4.6 ★"
        }
    ];

    // Core Capabilities
    const capabilities = [
        { icon: <Globe size={28} />, title: "Global Presence Adaptation", desc: "Analyze how your app listing adapts across regions. Compare titles, subtitles, and descriptions to ensure cultural relevance—not just translation.", tag: "Localization" },
        { icon: <Eye size={28} />, title: "Visual Strategy Benchmarking", desc: "Compare screenshots and videos side-by-side. See how top-ranking apps change their visual creative for different markets like US vs Japan.", tag: "Creative" },
        { icon: <BarChart3 size={28} />, title: "Market Performance Synthesis", desc: "Aggregate ASO scores by country. Identify high-potential markets where your score is lagging and competitors are winning.", tag: "Analytics" },
        { icon: <Languages size={28} />, title: "Keyword Intelligence Matrix", desc: "Discover which keywords drive installs in specific languages. Track rank distribution across 60+ countries simultaneously.", tag: "Keywords" },
        { icon: <Flag size={28} />, title: "Cultural Sentiment Analysis", desc: "Analyze reviews by country to understand cultural friction points. Detect why users in one country rate you lower than others.", tag: "Insights" },
        { icon: <LineChart size={28} />, title: "Regional Growth Forecast", desc: "Project install growth based on local trends and seasonality. Plan your launch strategy for emerging markets.", tag: "Growth" },
    ];

    // Steps
    const steps = [
        { step: "01", title: "Select Target Markets", desc: "Choose the countries and languages you want to analyze. Our system supports 60+ countries and 40+ languages out of the box." },
        { step: "02", title: "Run Presence Audit", desc: "Instantly audit your app's metadata, visuals, and keywords in each selected market. Compare against top 5 local competitors." },
        { step: "03", title: "Identify Localization Gaps", desc: "Spot missing translations, culturally irrelevant screenshots, and keyword gaps specific to local search behavior." },
        { step: "04", title: "Optimize & Deploy", desc: "Implement localized changes directly or export market-specific metadata packages for App Store Connect & Google Play." },
    ];

    // Stats
    const stats = [
        { value: "60+", label: "Countries Analyzed" },
        { value: "40+", label: "Languages Supported" },
        { value: "100K+", label: "Localized Reviews Processed" },
        { value: "95%", label: "Adoption Rate Increase" },
    ];

    const getScoreColor = (score) => {
        if (score >= 85) return 'text-[#00CFB8]';
        if (score >= 70) return 'text-yellow-500';
        return 'text-red-400';
    };

    const getScoreBg = (score) => {
        if (score >= 85) return 'bg-[#00CFB8]/10';
        if (score >= 70) return 'bg-yellow-500/10';
        return 'bg-red-400/10';
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
                        src={GlobalMapImg}
                        alt="Global Map"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#002855]/95 via-[#002855]/85 to-[#002855]/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002855] via-transparent to-transparent" />

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="inline-block px-4 py-2 bg-[#00CFB8]/20 border border-[#00CFB8]/40 rounded-full text-sm text-[#00CFB8] mb-6 font-medium">
                                ASO Module — Localization
                            </span>
                        </motion.div>

                        <motion.h1
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Localize Smarter. <br />
                            <span className="text-[#00CFB8]">Win Globally.</span>
                        </motion.h1>

                        <motion.p
                            className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            Adapt your app presence for every market. Analyze cultural fit, local keywords, and visual strategy across 60+ countries to maximize global installs.
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <Link href="/contact" className="px-8 py-3.5 bg-[#00CFB8] text-white font-medium rounded-lg hover:bg-[#00B5A0] transition-colors flex items-center gap-2 shadow-lg shadow-[#00CFB8]/20">
                                Start Global Audit <ArrowRight size={18} />
                            </Link>
                            <Link href="#performance" className="px-8 py-3.5 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm">
                                View Market Insights
                            </Link>
                        </motion.div>

                        {/* Stats Row */}
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
            </section>

            {/* ========================================== */}
            {/* SECTION 1: APP PRESENCE ADAPTATION (UI)   */}
            {/* ========================================== */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Visual Adaptation</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2 mb-4">
                            App Presence <span className="text-[#00CFB8]">Side-by-Side</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            See how your app adapts across borders. Compare metadata, visuals, and cultural fit instantly.
                        </p>
                    </motion.div>

                    {/* Comparison Cards */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {adaptationComparison.map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-[#f4f7fb] rounded-2xl p-8 border border-gray-100 relative overflow-hidden group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#002855]/5 rounded-bl-full group-hover:bg-[#00CFB8]/10 transition-colors" />

                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-3xl">{item.region === "US - English" ? "🇺🇸" : "🇯🇵"}</span>
                                    <div>
                                        <h3 className="font-bold text-[#002855]">{item.region}</h3>
                                        <p className="text-xs text-gray-400">Primary Market</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Title</p>
                                        <p className="font-semibold text-[#002855]">{item.title}</p>
                                    </div>
                                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Subtitle</p>
                                        <p className="font-medium text-gray-700">{item.subtitle}</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-1 p-3 bg-white rounded-lg border border-gray-100">
                                            <p className="text-xs text-gray-500 mb-1">Theme</p>
                                            <p className="text-sm font-medium text-gray-800">{item.screenshotTheme}</p>
                                        </div>
                                        <div className="flex-1 p-3 bg-white rounded-lg border border-gray-100">
                                            <p className="text-xs text-gray-500 mb-1">Rating</p>
                                            <p className="text-sm font-bold text-[#00CFB8]">{item.rating}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* SECTION 2: MARKET PERFORMANCE SYNTHESIS   */}
            {/* ========================================== */}
            <section id="performance" className="py-24 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div>
                            <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Market Intelligence</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2 mb-2">
                                Market Performance Synthesis
                            </h2>
                            <p className="text-gray-500 max-w-xl">
                                Aggregate view of your ASO health score across key markets.
                            </p>
                        </div>

                        {/* Region Filters */}
                        <div className="flex gap-2 mt-6 md:mt-0">
                            {['americas', 'emea', 'apac'].map((region) => (
                                <button
                                    key={region}
                                    onClick={() => setActiveRegion(region)}
                                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${activeRegion === region ? 'bg-[#002855] text-white' : 'bg-white text-gray-600 border border-gray-200'}`}
                                >
                                    {region.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Data Table */}
                    <motion.div
                        className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Header */}
                        <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-[#002855] text-white text-xs font-semibold uppercase tracking-wider">
                            <div className="col-span-4">Country</div>
                            <div className="col-span-2 text-center">ASO Score</div>
                            <div className="col-span-2 text-center">Change</div>
                            <div className="col-span-2 text-center">Est. Installs</div>
                            <div className="col-span-2 text-center">Status</div>
                        </div>

                        {/* Rows */}
                        {marketPerformanceData.map((market, i) => (
                            <motion.div
                                key={i}
                                className="grid grid-cols-12 gap-4 px-6 py-5 border-b border-gray-50 hover:bg-[#00CFB8]/5 transition-colors items-center cursor-pointer group"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <div className="col-span-4 flex items-center gap-3">
                                    <span className="text-2xl">{market.flag}</span>
                                    <div>
                                        <span className="text-sm font-medium text-[#002855] group-hover:text-[#00CFB8] transition-colors">{market.country}</span>
                                        <p className="text-xs text-gray-400">Primary Language</p>
                                    </div>
                                </div>
                                <div className="col-span-2 text-center">
                                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full font-bold text-lg ${getScoreBg(market.score)} ${getScoreColor(market.score)}`}>
                                        {market.score}
                                    </div>
                                </div>
                                <div className="col-span-2 text-center flex justify-center">
                                    <span className={`inline-flex items-center gap-1 text-sm font-medium ${market.change.startsWith('+') ? 'text-[#00CFB8]' : market.change.startsWith('-') ? 'text-red-500' : 'text-gray-500'}`}>
                                        {market.change !== '0' && (market.change.startsWith('+') ? <TrendingUp size={14} /> : <TrendingUp size={14} className="rotate-180" />)}
                                        {market.change}%
                                    </span>
                                </div>
                                <div className="col-span-2 text-center text-sm text-gray-700 font-medium">
                                    {market.installs}
                                </div>
                                <div className="col-span-2 text-center">
                                    <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${market.status === 'Excellent' ? 'bg-[#00CFB8]/10 text-[#00CFB8]' :
                                            market.status === 'Good' ? 'bg-blue-100 text-blue-600' :
                                                market.status === 'Average' ? 'bg-yellow-100 text-yellow-700' :
                                                    'bg-red-100 text-red-500'
                                        }`}>
                                        {market.status}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ========================================== */}
            {/* SECTION 3: KEYWORD INTELLIGENCE MATRIX     */}
            {/* ========================================== */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Keyword Intelligence</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-3 mb-6">
                                One Keyword, <span className="text-[#00CFB8]">Multiple Markets</span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                A keyword that drives massive volume in the US might be irrelevant in Japan. Our Intelligence Matrix shows you search volume, difficulty, and rank for every keyword across all your active markets simultaneously.
                            </p>

                            <div className="space-y-4 mb-8">
                                {[
                                    { kw: "fitness tracker", us: "74K", jp: "12K", de: "18K" },
                                    { kw: "workout app", us: "51K", jp: "8K", de: "9K" },
                                    { kw: "calorie counter", us: "43K", jp: "22K", de: "15K" },
                                ].map((row, i) => (
                                    <div key={i} className="flex items-center justify-between bg-[#f4f7fb] p-4 rounded-lg border border-gray-100">
                                        <span className="font-semibold text-[#002855]">{row.kw}</span>
                                        <div className="flex gap-4 text-xs">
                                            <span className="bg-white px-2 py-1 rounded border border-gray-200">🇺🇸 {row.us}</span>
                                            <span className="bg-white px-2 py-1 rounded border border-gray-200">🇯🇵 {row.jp}</span>
                                            <span className="bg-white px-2 py-1 rounded border border-gray-200">🇩🇪 {row.de}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Link href="/features/keyword-research" className="inline-flex items-center gap-2 text-[#00CFB8] font-semibold hover:gap-3 transition-all">
                                Explore Keyword Matrix <ArrowRight size={18} />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <img
                                src={AnalyticsImg}
                                alt="Keyword Matrix Visualization"
                                className="rounded-2xl shadow-2xl border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-500"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-[#002855] text-white p-5 rounded-xl shadow-xl">
                                <p className="text-xs text-gray-300 uppercase mb-1">Highest Opportunity</p>
                                <p className="text-lg font-bold">Japan Market</p>
                                <p className="text-sm text-[#00CFB8]">+45% Volume Growth</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* SECTION 4: CAPABILITIES                    */}
            {/* ========================================== */}
            <section className="py-24 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Features</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2">
                            Built for <span className="text-[#00CFB8]">Global Scale</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {capabilities.map((cap, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="group relative bg-white p-8 rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-50"
                            >
                                <div className="w-14 h-14 rounded-xl bg-[#002855]/5 flex items-center justify-center text-[#002855] group-hover:bg-[#00CFB8] group-hover:text-white transition-all mb-6">
                                    {cap.icon}
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-[#00CFB8] bg-[#00CFB8]/10 px-2 py-1 rounded-full">
                                    {cap.tag}
                                </span>
                                <h3 className="text-xl font-bold text-[#002855] mt-4 mb-3">{cap.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{cap.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ========================================== */}
            {/* SECTION 5: WORKFLOW                        */}
            {/* ========================================== */}
            <section className="py-24 bg-[#002855] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <motion.span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                            Workflow
                        </motion.span>
                        <motion.h2 className="text-3xl md:text-4xl font-bold text-white mt-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            From Localization to Domination
                        </motion.h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors"
                            >
                                <div className="w-10 h-10 rounded-full bg-[#00CFB8] flex items-center justify-center text-white font-bold mb-6">
                                    {step.step}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* SECTION 6: CTA                             */}
            {/* ========================================== */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Globe className="w-16 h-16 text-[#00CFB8] mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mb-4">
                            Ready to Go Global?
                        </h2>
                        <p className="text-gray-500 mb-8 max-w-xl mx-auto">
                            Stop treating localization as an afterthought. With AppOptimax, build a cohesive global strategy that adapts to every market's unique demands.
                        </p>
                        <Link href="/contact" className="px-8 py-4 bg-[#00CFB8] text-white font-medium rounded-lg hover:bg-[#00B5A0] transition-colors shadow-lg shadow-[#00CFB8]/20 inline-flex items-center gap-2">
                            Request Demo <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default LocalizedAsoInsights;