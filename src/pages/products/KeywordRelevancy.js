import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, TrendingUp, BarChart3, Target, ArrowRight, Mail, Phone, MapPin, Zap, Filter, Trophy, Sparkles, CheckCircle2, XCircle, ArrowUpRight, Brain, Eye, FileText, Shield, Gauge, Tag, Crosshair, AlertTriangle, ThumbsUp, CircleDot, Radar, Layers, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const RelevancyHeroImg = 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2072&auto=format&fit=crop';
const RelevancyDashboard = 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop';
const RelevancyTechImg = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop';

const KeywordRelevancy = () => {

    const [activeQuadrant, setActiveQuadrant] = useState(null);
    const [selectedKw, setSelectedKw] = useState(0);

    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    };

    // Relevancy score data for interactive explorer
    const relevancyKeywords = [
        { keyword: "fitness tracker app", overall: 96, semantic: 98, category: 94, metadata: 100, intent: 92, status: "optimized", volume: "74.2K" },
        { keyword: "workout planner", overall: 89, semantic: 92, category: 88, metadata: 90, intent: 86, status: "optimized", volume: "51.8K" },
        { keyword: "calorie counter free", overall: 82, semantic: 78, category: 90, metadata: 85, intent: 75, status: "good", volume: "43.6K" },
        { keyword: "sleep tracking app", overall: 74, semantic: 80, category: 70, metadata: 72, intent: 74, status: "good", volume: "31.4K" },
        { keyword: "home workout no equipment", overall: 68, semantic: 72, category: 65, metadata: 60, intent: 75, status: "partial", volume: "35.2K" },
        { keyword: "meditation timer", overall: 55, semantic: 60, category: 48, metadata: 50, intent: 62, status: "partial", volume: "28.7K" },
        { keyword: "budget tracker", overall: 8, semantic: 5, category: 3, metadata: 20, intent: 4, status: "irrelevant", volume: "62.0K" },
        { keyword: "social media scheduler", overall: 5, semantic: 3, category: 2, metadata: 10, intent: 5, status: "irrelevant", volume: "45.3K" },
    ];

    // Matrix quadrant data
    const quadrants = {
        target: { title: "Target Zone", subtitle: "High Volume + High Relevancy", desc: "These are your priority keywords. They have strong search demand and directly match your app's purpose. Focus your title and subtitle slots here first.", color: "#00CFB8", keywords: ["fitness tracker app", "workout planner", "calorie counter"] },
        niche: { title: "Niche Gold", subtitle: "Low Volume + High Relevancy", desc: "Lower competition, highly relevant. These keywords often convert at 2-3x the rate of high-volume terms. Perfect for keyword field stuffing.", color: "#3b82f6", keywords: ["yoga for seniors", "posture corrector app"] },
        trap: { title: "Relevancy Trap", subtitle: "High Volume + Low Relevancy", desc: "The most dangerous quadrant. These keywords look tempting but will actively hurt your rankings because the algorithm sees your app as irrelevant.", color: "#ef4444", keywords: ["budget tracker", "social media app", "food delivery"] },
        ignore: { title: "Ignore Zone", subtitle: "Low Volume + Low Relevancy", desc: "No search demand and no relevance. These waste keyword slots and dilute your metadata's thematic focus.", color: "#6b7280", keywords: ["random tool", "generic app free"] },
    };

    // Matrix keyword positions (x = volume 0-100, y = relevancy 0-100)
    const matrixDots = [
        { keyword: "fitness tracker", x: 85, y: 96, quadrant: "target" },
        { keyword: "workout planner", x: 72, y: 89, quadrant: "target" },
        { keyword: "calorie counter", x: 68, y: 82, quadrant: "target" },
        { keyword: "step counter", x: 60, y: 78, quadrant: "target" },
        { keyword: "budget tracker", x: 82, y: 8, quadrant: "trap" },
        { keyword: "social media", x: 75, y: 5, quadrant: "trap" },
        { keyword: "food delivery", x: 70, y: 10, quadrant: "trap" },
        { keyword: "yoga seniors", x: 22, y: 88, quadrant: "niche" },
        { keyword: "posture app", x: 18, y: 82, quadrant: "niche" },
        { keyword: "stretch routine", x: 28, y: 76, quadrant: "niche" },
        { keyword: "random tool", x: 12, y: 8, quadrant: "ignore" },
        { keyword: "generic app", x: 8, y: 5, quadrant: "ignore" },
    ];

    // Core capabilities
    const capabilities = [
        { icon: <Brain size={28} />, title: "Semantic Relevancy Engine", desc: "Goes beyond exact-match and synonym analysis. Our NLP model understands the meaning and context of your app to score keyword alignment at a conceptual level.", tag: "AI-Powered" },
        { icon: <Target size={28} />, title: "User Intent Matching", desc: "Classifies keywords by search intent — informational, navigational, transactional — and scores how well your app satisfies each intent type.", tag: "Intelligence" },
        { icon: <Layers size={28} />, title: "Category Context Scoring", desc: "Evaluates how each keyword aligns with your App Store / Google Play category. Keywords outside your category get penalized by the algorithm — we show you exactly which ones.", tag: "Algorithmic" },
        { icon: <FileText size={28} />, title: "Metadata Coverage Audit", desc: "Scans your title, subtitle, description, and keyword field to see where each keyword appears. Identifies gaps where high-relevancy keywords are missing from critical fields.", tag: "Audit" },
        { icon: <AlertTriangle size={28} />, title: "Relevancy Trap Detection", desc: "Automatically flags keywords with high volume but low relevancy that could be actively hurting your rankings. Remove these from your metadata to see instant ranking improvements.", tag: "Protection" },
        { icon: <Radar size={28} />, title: "Competitor Relevancy Benchmark", desc: "See which keywords your top-10 competitors target and their average relevancy scores. Find high-relevancy keywords your competitors haven't discovered yet.", tag: "Competitive" },
    ];

    // How it works
    const steps = [
        { step: "01", title: "Connect Your App", desc: "Enter your app store URL or manually input your current metadata. Our engine ingests your title, subtitle, description, and keyword field instantly." },
        { step: "02", title: "AI Analyzes Relevancy", desc: "Our semantic engine reads your metadata, understands your app's purpose, category, and feature set — then scores every keyword against this context." },
        { step: "03", title: "Review the Matrix", desc: "See all your keywords plotted on the Volume × Relevancy matrix. Instantly spot which ones to keep, which to add, and which are trapping your rankings." },
        { step: "04", title: "Optimize & Track", desc: "Remove irrelevant keywords, add high-relevancy opportunities, and push changes to your metadata editor. Track how relevancy improvements affect rankings." },
    ];

    // Before/After metadata data
    const beforeAfter = [
        { field: "Title", before: 35, after: 95, beforeKw: "FitPro - Track", afterKw: "FitPro - Fitness Tracker & Workout" },
        { field: "Subtitle", before: 20, after: 88, beforeKw: "Your Health Buddy", afterKw: "Calorie Counter & Exercise Planner" },
        { field: "Keyword Field", before: 30, after: 92, beforeKw: "budget, social, food...", afterKw: "workout, yoga, steps, health..." },
        { field: "Description", before: 45, after: 85, beforeKw: "Generic health text", afterKw: "Targeted fitness keywords ×12" },
    ];

    // Why different stats
    const whyStats = [
        { value: "94%", label: "Relevancy Accuracy", desc: "Validated against actual App Store ranking changes" },
        { value: "3.2×", label: "Conversion Lift", desc: "Average increase in CVR after relevancy optimization" },
        { value: "67%", label: "Ranking Recovery", desc: "Of penalized apps recovered after removing trap keywords" },
        { value: "< 8s", label: "Analysis Speed", desc: "Full metadata relevancy scan in under 8 seconds" },
    ];

    const getScoreColor = (score) => {
        if (score >= 80) return '#00CFB8';
        if (score >= 60) return '#eab308';
        if (score >= 40) return '#f97316';
        return '#ef4444';
    };

    const getScoreBg = (score) => {
        if (score >= 80) return 'bg-[#00CFB8]/10 border-[#00CFB8]/20';
        if (score >= 60) return 'bg-yellow-500/10 border-yellow-500/20';
        if (score >= 40) return 'bg-orange-500/10 border-orange-500/20';
        return 'bg-red-500/10 border-red-500/20';
    };

    const getStatusBadge = (status) => {
        switch (status) {
            case 'optimized': return { icon: <CheckCircle2 size={14} />, text: 'Optimized', className: 'bg-[#00CFB8]/10 text-[#00CFB8] border-[#00CFB8]/20' };
            case 'good': return { icon: <ThumbsUp size={14} />, text: 'Good', className: 'bg-blue-500/10 text-blue-600 border-blue-500/20' };
            case 'partial': return { icon: <AlertTriangle size={14} />, text: 'Partial', className: 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20' };
            case 'irrelevant': return { icon: <XCircle size={14} />, text: 'Irrelevant', className: 'bg-red-500/10 text-red-500 border-red-500/20' };
            default: return { icon: null, text: '', className: '' };
        }
    };

    return (
        <div className="bg-[#f4f7fb] min-h-screen">

            {/* ========================================== */}
            {/* HERO SECTION — Centered Layout            */}
            {/* ========================================== */}
            <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">

                {/* Background */}
                <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                >
                    <img
                        src={RelevancyHeroImg}
                        alt="AI-Powered Keyword Relevancy"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Overlay — centered radial gradient */}
                <div className="absolute inset-0 bg-[#002855]/90" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#002855]/60 via-transparent to-[#002855]/80" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00CFB8]/5 rounded-full blur-3xl" />

                {/* Content — Centered */}
                <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="inline-block px-4 py-2 bg-[#00CFB8]/20 border border-[#00CFB8]/40 rounded-full text-sm text-[#00CFB8] mb-6 font-medium">
                            ASO Module — Keyword Relevancy
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.08]"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Volume Means Nothing <br />
                        <span className="text-[#00CFB8]">Without Relevancy</span>
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Targeting high-volume keywords that don't match your app doesn't just waste effort — it actively hurts your rankings. Our AI scores every keyword's true relevance to your app.
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap justify-center gap-4 mb-14"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <Link href="/contact" className="px-8 py-3.5 bg-[#00CFB8] text-white font-medium rounded-lg hover:bg-[#00B5A0] transition-colors flex items-center gap-2 shadow-lg shadow-[#00CFB8]/20">
                            Check Your Relevancy Free <ArrowRight size={18} />
                        </Link>
                        <Link href="#matrix" className="px-8 py-3.5 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm">
                            See the Relevancy Matrix
                        </Link>
                    </motion.div>

                    {/* Relevancy Insight Cards */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        {[
                            { num: "67%", label: "of apps target irrelevant keywords" },
                            { num: "3.2×", label: "higher CVR with relevant keywords" },
                            { num: "-40%", label: "ranking drop from trap keywords" },
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                                <p className="text-2xl font-bold text-[#00CFB8]">{item.num}</p>
                                <p className="text-xs text-gray-400 mt-1">{item.label}</p>
                            </div>
                        ))}
                    </motion.div>
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
            {/* SECTION 1: WHAT IS RELEVANCY + GAUGE      */}
            {/* ========================================== */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left: SVG Gauge Visual */}
                        <motion.div
                            className="relative flex justify-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative">
                                {/* Gauge SVG */}
                                <svg width="320" height="320" viewBox="0 0 320 320" className="transform -rotate-90">
                                    {/* Background circle */}
                                    <circle cx="160" cy="160" r="140" fill="none" stroke="#e5e7eb" strokeWidth="16" />
                                    {/* Score arc */}
                                    <motion.circle
                                        cx="160" cy="160" r="140"
                                        fill="none"
                                        stroke="#00CFB8"
                                        strokeWidth="16"
                                        strokeLinecap="round"
                                        strokeDasharray={2 * Math.PI * 140}
                                        initial={{ strokeDashoffset: 2 * Math.PI * 140 }}
                                        whileInView={{ strokeDashoffset: 2 * Math.PI * 140 * (1 - 0.78) }}
                                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                                        viewport={{ once: true }}
                                    />
                                    {/* Inner decorative circle */}
                                    <circle cx="160" cy="160" r="120" fill="none" stroke="#f4f7fb" strokeWidth="2" />
                                </svg>

                                {/* Center text */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <motion.p
                                        className="text-6xl font-bold text-[#002855]"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 1 }}
                                        viewport={{ once: true }}
                                    >
                                        78<span className="text-2xl text-gray-400">/100</span>
                                    </motion.p>
                                    <p className="text-sm text-gray-500 font-medium mt-1">Relevancy Score</p>
                                </div>

                                {/* Factor labels around the gauge */}
                                <div className="absolute -right-4 top-8 bg-white shadow-lg rounded-lg px-3 py-2 border border-gray-100">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#00CFB8]" />
                                        <span className="text-xs font-medium text-gray-700">Semantic: 92%</span>
                                    </div>
                                </div>
                                <div className="absolute -left-4 top-8 bg-white shadow-lg rounded-lg px-3 py-2 border border-gray-100">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#3b82f6]" />
                                        <span className="text-xs font-medium text-gray-700">Category: 85%</span>
                                    </div>
                                </div>
                                <div className="absolute -left-4 bottom-12 bg-white shadow-lg rounded-lg px-3 py-2 border border-gray-100">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#eab308]" />
                                        <span className="text-xs font-medium text-gray-700">Intent: 72%</span>
                                    </div>
                                </div>
                                <div className="absolute -right-4 bottom-12 bg-white shadow-lg rounded-lg px-3 py-2 border border-gray-100">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#f97316]" />
                                        <span className="text-xs font-medium text-gray-700">Metadata: 65%</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Text */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className="space-y-6"
                        >
                            <motion.div variants={fadeInUp}>
                                <span className="inline-block bg-[#00CFB8]/10 text-[#00CFB8] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-[#00CFB8]/20">
                                    The Missing Metric
                                </span>
                            </motion.div>

                            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-[#002855] leading-tight">
                                What is Keyword <br />
                                <span className="text-[#00CFB8]">Relevancy?</span>
                            </motion.h2>

                            <motion.p variants={fadeInUp} className="text-gray-600 text-sm leading-relaxed">
                                Keyword relevancy measures how closely a search term matches your app's actual purpose, features, and content. Both Apple's App Store and Google Play use relevancy as a core ranking signal — if your app isn't relevant to a keyword, you won't rank for it, no matter how much you optimize.
                            </motion.p>

                            <motion.p variants={fadeInUp} className="text-gray-600 text-sm leading-relaxed">
                                Most ASO tools ignore this entirely. They show you volume and difficulty and let you figure out if a keyword actually makes sense for your app. AppOptimax scores every keyword's relevancy on a 0-100 scale using four weighted factors.
                            </motion.p>

                            {/* Four Factors */}
                            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4 pt-4">
                                {[
                                    { label: "Semantic Match", desc: "NLP-based meaning analysis", pct: "35%" },
                                    { label: "Category Alignment", desc: "Store category fit", pct: "25%" },
                                    { label: "User Intent Match", desc: "Searcher goal alignment", pct: "25%" },
                                    { label: "Metadata Coverage", desc: "Presence in listing fields", pct: "15%" },
                                ].map((f, i) => (
                                    <div key={i} className="bg-[#f4f7fb] rounded-xl p-4 border border-gray-100">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-sm font-bold text-[#002855]">{f.label}</span>
                                            <span className="text-xs font-bold text-[#00CFB8]">{f.pct}</span>
                                        </div>
                                        <p className="text-xs text-gray-500">{f.desc}</p>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* SECTION 2: RELEVANCY SCORE EXPLORER       */}
            {/* ========================================== */}
            <section className="py-24 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Interactive Explorer</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2 mb-4">
                            See How Each Keyword Scores
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Click any keyword to see its relevancy factor breakdown. Notice how high-volume keywords can score zero on relevancy.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-5 gap-6">
                        {/* Keyword List - Left Side */}
                        <div className="lg:col-span-2 space-y-2">
                            {relevancyKeywords.map((kw, i) => {
                                const badge = getStatusBadge(kw.status);
                                return (
                                    <motion.button
                                        key={kw.keyword}
                                        onClick={() => setSelectedKw(i)}
                                        className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${selectedKw === i
                                            ? 'bg-white border-[#00CFB8]/40 shadow-lg shadow-[#00CFB8]/5'
                                            : 'bg-white/60 border-gray-100 hover:bg-white hover:border-gray-200'
                                            }`}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <span className={`text-sm font-semibold ${selectedKw === i ? 'text-[#002855]' : 'text-gray-700'}`}>{kw.keyword}</span>
                                            <span className={`text-lg font-bold ${selectedKw === i ? 'text-[#002855]' : 'text-gray-400'}`}
                                                style={{ color: selectedKw === i ? getScoreColor(kw.overall) : undefined }}
                                            >
                                                {kw.overall}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-gray-400">Vol: {kw.volume}</span>
                                            <span className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full border ${badge.className}`}>
                                                {badge.icon} {badge.text}
                                            </span>
                                        </div>
                                    </motion.button>
                                );
                            })}
                        </div>

                        {/* Detail Panel - Right Side */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedKw}
                                className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-lg p-8"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                {(() => {
                                    const kw = relevancyKeywords[selectedKw];
                                    const badge = getStatusBadge(kw.status);
                                    const factors = [
                                        { label: "Semantic Match", score: kw.semantic, desc: "How well the keyword's meaning matches your app's core purpose" },
                                        { label: "Category Alignment", score: kw.category, desc: "How well the keyword fits your app's store category" },
                                        { label: "Metadata Coverage", score: kw.metadata, desc: "Whether the keyword appears in title, subtitle, description, or keyword field" },
                                        { label: "User Intent Match", score: kw.intent, desc: "How well your app satisfies what the searcher is looking for" },
                                    ];

                                    return (
                                        <>
                                            {/* Header */}
                                            <div className="flex items-start justify-between mb-8">
                                                <div>
                                                    <h3 className="text-2xl font-bold text-[#002855] mb-1">{kw.keyword}</h3>
                                                    <p className="text-gray-500 text-sm">Search Volume: {kw.volume} · App Store + Google Play</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-4xl font-bold" style={{ color: getScoreColor(kw.overall) }}>{kw.overall}</p>
                                                    <p className="text-xs text-gray-400 mt-1">Relevancy Score</p>
                                                </div>
                                            </div>

                                            {/* Status Banner */}
                                            <div className={`rounded-xl p-4 mb-8 border ${getScoreBg(kw.overall)}`}>
                                                <div className="flex items-center gap-3">
                                                    {badge.icon}
                                                    <div>
                                                        <span className="font-semibold text-sm" style={{ color: getScoreColor(kw.overall) }}>{badge.text}</span>
                                                        <p className="text-xs text-gray-500 mt-0.5">
                                                            {kw.status === 'optimized' && 'This keyword is highly relevant and well-placed in your metadata.'}
                                                            {kw.status === 'good' && 'Good relevancy. Consider adding this to more metadata fields.'}
                                                            {kw.status === 'partial' && 'Moderate relevancy. May need supporting keywords to strengthen context.'}
                                                            {kw.status === 'irrelevant' && 'This keyword has no relation to your app. Remove it to protect your rankings.'}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Factor Breakdown */}
                                            <div className="space-y-5">
                                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Factor Breakdown</p>
                                                {factors.map((f, fi) => (
                                                    <div key={fi}>
                                                        <div className="flex items-center justify-between mb-1.5">
                                                            <span className="text-sm font-medium text-gray-700">{f.label}</span>
                                                            <span className="text-sm font-bold" style={{ color: getScoreColor(f.score) }}>{f.score}%</span>
                                                        </div>
                                                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                                            <motion.div
                                                                className="h-full rounded-full"
                                                                style={{ backgroundColor: getScoreColor(f.score) }}
                                                                initial={{ width: 0 }}
                                                                animate={{ width: `${f.score}%` }}
                                                                transition={{ duration: 0.8, delay: fi * 0.1, ease: "easeOut" }}
                                                            />
                                                        </div>
                                                        <p className="text-[11px] text-gray-400 mt-1">{f.desc}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    );
                                })()}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* SECTION 3: VOLUME × RELEVANCY MATRIX      */}
            {/* ========================================== */}
            <section id="matrix" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Unique Visualization</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2 mb-4">
                            The Volume × Relevancy <span className="text-[#00CFB8]">Matrix</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            The only ASO visualization that plots keywords by search volume against relevancy. Click any quadrant to understand the strategy.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-3 gap-8 items-start">
                        {/* Matrix Grid */}
                        <motion.div
                            className="lg:col-span-2 relative"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="relative bg-[#f4f7fb] rounded-2xl border border-gray-200 p-8 overflow-hidden" style={{ aspectRatio: '4/3' }}>

                                {/* Axis labels */}
                                <div className="absolute top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                    ← Low Volume · High Volume →
                                </div>
                                <div className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">
                                    ← Low Relevancy · High Relevancy →
                                </div>

                                {/* Grid lines */}
                                <div className="absolute inset-8">
                                    <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-gray-300/60" />
                                    <div className="absolute left-1/2 top-0 bottom-0 border-l border-dashed border-gray-300/60" />
                                </div>

                                {/* Quadrant backgrounds */}
                                <div
                                    className="absolute top-8 right-8 bottom-[calc(50%-0px)] left-[calc(50%-0px)] rounded-tl-lg cursor-pointer transition-all duration-300"
                                    style={{ backgroundColor: activeQuadrant === 'target' ? 'rgba(0,207,184,0.12)' : 'rgba(0,207,184,0.03)' }}
                                    onClick={() => setActiveQuadrant(activeQuadrant === 'target' ? null : 'target')}
                                >
                                    <span className="absolute top-3 right-3 text-[9px] font-bold uppercase tracking-wider" style={{ color: activeQuadrant === 'target' ? '#00CFB8' : '#00CFB880' }}>Target</span>
                                </div>
                                <div
                                    className="absolute top-8 left-8 bottom-[calc(50%-0px)] right-[calc(50%-0px)] rounded-tr-lg cursor-pointer transition-all duration-300"
                                    style={{ backgroundColor: activeQuadrant === 'niche' ? 'rgba(59,130,246,0.12)' : 'rgba(59,130,246,0.03)' }}
                                    onClick={() => setActiveQuadrant(activeQuadrant === 'niche' ? null : 'niche')}
                                >
                                    <span className="absolute top-3 left-3 text-[9px] font-bold uppercase tracking-wider" style={{ color: activeQuadrant === 'niche' ? '#3b82f6' : '#3b82f680' }}>Niche Gold</span>
                                </div>
                                <div
                                    className="absolute bottom-8 right-8 top-[calc(50%-0px)] left-[calc(50%-0px)] rounded-bl-lg cursor-pointer transition-all duration-300"
                                    style={{ backgroundColor: activeQuadrant === 'trap' ? 'rgba(239,68,68,0.12)' : 'rgba(239,68,68,0.03)' }}
                                    onClick={() => setActiveQuadrant(activeQuadrant === 'trap' ? null : 'trap')}
                                >
                                    <span className="absolute bottom-3 right-3 text-[9px] font-bold uppercase tracking-wider" style={{ color: activeQuadrant === 'trap' ? '#ef4444' : '#ef444480' }}>Trap</span>
                                </div>
                                <div
                                    className="absolute bottom-8 left-8 top-[calc(50%-0px)] right-[calc(50%-0px)] rounded-br-lg cursor-pointer transition-all duration-300"
                                    style={{ backgroundColor: activeQuadrant === 'ignore' ? 'rgba(107,114,128,0.12)' : 'rgba(107,114,128,0.03)' }}
                                    onClick={() => setActiveQuadrant(activeQuadrant === 'ignore' ? null : 'ignore')}
                                >
                                    <span className="absolute bottom-3 left-3 text-[9px] font-bold uppercase tracking-wider" style={{ color: activeQuadrant === 'ignore' ? '#6b7280' : '#6b728080' }}>Ignore</span>
                                </div>

                                {/* Keyword dots */}
                                {matrixDots.map((dot, i) => (
                                    <motion.div
                                        key={i}
                                        className={`absolute w-3 h-3 rounded-full border-2 border-white shadow-md cursor-pointer transition-all duration-200 z-10 ${activeQuadrant && activeQuadrant !== dot.quadrant ? 'opacity-20 scale-75' : 'opacity-100 scale-100 hover:scale-150'}`}
                                        style={{
                                            backgroundColor: quadrants[dot.quadrant].color,
                                            left: `${8 + (dot.x / 100) * 84}%`,
                                            bottom: `${8 + (dot.y / 100) * 84}%`,
                                            transform: 'translate(-50%, 50%)',
                                        }}
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 + i * 0.08, type: "spring", stiffness: 300 }}
                                        onClick={() => setActiveQuadrant(dot.quadrant)}
                                    >
                                        {/* Tooltip */}
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#002855] text-white text-[10px] font-medium rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity hidden lg:block">
                                            {dot.keyword}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Quadrant Detail Panel */}
                        <AnimatePresence mode="wait">
                            {activeQuadrant ? (
                                <motion.div
                                    key={activeQuadrant}
                                    className="bg-[#f4f7fb] rounded-2xl border border-gray-100 p-8"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="w-3 h-3 rounded-full mb-4" style={{ backgroundColor: quadrants[activeQuadrant].color }} />
                                    <h3 className="text-xl font-bold text-[#002855] mb-1">{quadrants[activeQuadrant].title}</h3>
                                    <p className="text-xs font-semibold mb-4" style={{ color: quadrants[activeQuadrant].color }}>{quadrants[activeQuadrant].subtitle}</p>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{quadrants[activeQuadrant].desc}</p>

                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Example Keywords</p>
                                    <div className="space-y-2">
                                        {quadrants[activeQuadrant].keywords.map((kw, i) => (
                                            <div key={i} className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-gray-100">
                                                <Tag size={12} style={{ color: quadrants[activeQuadrant].color }} />
                                                <span className="text-sm text-gray-700">{kw}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => setActiveQuadrant(null)}
                                        className="mt-6 text-xs text-gray-400 hover:text-[#002855] transition-colors flex items-center gap-1"
                                    >
                                        ← Back to full view
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="default"
                                    className="bg-[#f4f7fb] rounded-2xl border border-gray-100 p-8"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-[#002855]/5 flex items-center justify-center text-[#002855] mb-4">
                                        <Crosshair size={24} />
                                    </div>
                                    <h3 className="text-lg font-bold text-[#002855] mb-2">Click a Quadrant</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                        Each quadrant represents a different keyword strategy. Click on any zone to see the strategy, examples, and what action to take.
                                    </p>

                                    <div className="space-y-3">
                                        {Object.entries(quadrants).map(([key, q]) => (
                                            <button
                                                key={key}
                                                onClick={() => setActiveQuadrant(key)}
                                                className="w-full flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100 hover:border-gray-200 transition-colors text-left group"
                                            >
                                                <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: q.color }} />
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-semibold text-[#002855]">{q.title}</p>
                                                    <p className="text-[11px] text-gray-400">{q.subtitle}</p>
                                                </div>
                                                <ChevronRight size={14} className="text-gray-300 group-hover:text-[#002855] transition-colors" />
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* SECTION 4: CORE CAPABILITIES              */}
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
                            Six Layers of <span className="text-[#00CFB8]">Relevancy Intelligence</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Not just a score — a complete relevancy analysis system that protects your rankings and maximizes every keyword slot.
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
                                className="group relative bg-white p-8 rounded-2xl border border-gray-100 transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-teal-100 hover:border-[#00CFB8]/30"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-[#00CFB8]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="w-14 h-14 rounded-xl bg-[#002855]/5 flex items-center justify-center text-[#002855] group-hover:bg-[#00CFB8] group-hover:text-white transition-all duration-300">
                                            {cap.icon}
                                        </div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-[#f4f7fb] px-2.5 py-1 rounded-full">
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
            {/* SECTION 5: BEFORE / AFTER METADATA        */}
            {/* ========================================== */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">

                        {/* Left: Image */}
                        <motion.div
                            className="sticky top-24"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                <img
                                    src={RelevancyDashboard}
                                    alt="Metadata Relevancy Dashboard"
                                    className="w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#002855]/70 to-transparent" />

                                {/* Overlay stats */}
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                                            <p className="text-xs text-gray-300">Before</p>
                                            <p className="text-xl font-bold text-red-400">32%</p>
                                            <p className="text-[10px] text-gray-400">Avg Relevancy</p>
                                        </div>
                                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                                            <p className="text-xs text-gray-300">After</p>
                                            <p className="text-xl font-bold text-[#00CFB8]">91%</p>
                                            <p className="text-[10px] text-gray-400">Avg Relevancy</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Before/After Bars */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Real Impact</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2 mb-4">
                                Before & After <span className="text-[#00CFB8]">Relevancy Optimization</span>
                            </h2>
                            <p className="text-gray-600 text-sm leading-relaxed mb-10">
                                A real AppOptimax customer's fitness app. Before optimization, 40% of their keyword field was filled with irrelevant terms like "budget tracker" and "social media" — terms with volume but zero connection to their app. Here's what changed.
                            </p>

                            <div className="space-y-6">
                                {beforeAfter.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.12 }}
                                        className="bg-[#f4f7fb] rounded-xl p-5 border border-gray-100"
                                    >
                                        <div className="flex items-center justify-between mb-3">
                                            <h4 className="text-sm font-bold text-[#002855]">{item.field}</h4>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs text-red-400 font-semibold">{item.before}%</span>
                                                <ArrowRight size={12} className="text-gray-300" />
                                                <span className="text-xs text-[#00CFB8] font-semibold">{item.after}%</span>
                                            </div>
                                        </div>

                                        {/* Before bar */}
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <span className="text-[10px] text-gray-400 w-14 flex-shrink-0">Before</span>
                                            <div className="flex-1 h-2.5 bg-gray-200 rounded-full overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-red-400 rounded-full"
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${item.before}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.8, delay: 0.3 + i * 0.12 }}
                                                />
                                            </div>
                                        </div>

                                        {/* After bar */}
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-[10px] text-gray-400 w-14 flex-shrink-0">After</span>
                                            <div className="flex-1 h-2.5 bg-gray-200 rounded-full overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-[#00CFB8] rounded-full"
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${item.after}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.8, delay: 0.5 + i * 0.12 }}
                                                />
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between text-[11px] text-gray-400">
                                            <span className="line-through">{item.beforeKw}</span>
                                            <span className="text-[#00CFB8] font-medium">{item.afterKw}</span>
                                        </div>
                                    </motion.div>
                                ))}

                                {/* Result highlight */}
                                <motion.div
                                    className="bg-[#002855] rounded-xl p-6 mt-4"
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <Sparkles size={18} className="text-[#00CFB8]" />
                                        <span className="text-white font-bold">Result</span>
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        After removing irrelevant keywords and replacing them with high-relevancy alternatives, this app saw a <span className="text-[#00CFB8] font-bold">47% increase in organic impressions</span> and a <span className="text-[#00CFB8] font-bold">2.8× improvement in average keyword rank</span> within 30 days — without changing anything else.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* SECTION 6: HOW IT WORKS                    */}
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
                            Four Steps to <span className="text-[#00CFB8]">Relevancy-Perfect Metadata</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            From connecting your app to seeing ranking improvements — the complete relevancy optimization workflow.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        {/* Connecting Line */}
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
            {/* SECTION 7: WHY APP OPTIMAX — Dark         */}
            {/* ========================================== */}
            <section className="py-24 bg-[#002855] relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 right-20 w-80 h-80 bg-[#00CFB8] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#00CFB8] rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <motion.span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            Proof Points
                        </motion.span>
                        <motion.h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                            Relevancy That Moves the Needle
                        </motion.h2>
                        <motion.p className="text-gray-400 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                            Not theory — real results from real apps using our relevancy engine.
                        </motion.p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {whyStats.map((stat, i) => (
                            <motion.div
                                key={i}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <p className="text-4xl md:text-5xl font-bold text-[#00CFB8] mb-2">{stat.value}</p>
                                <p className="text-white font-semibold text-sm mb-1">{stat.label}</p>
                                <p className="text-gray-500 text-xs">{stat.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Differentiators */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: <Brain size={20} />, title: "NLP, Not String Matching", desc: "Other tools check if your keyword appears in your metadata (exact match). We understand meaning — 'budget app' and 'expense manager' are different intents, and we score them differently." },
                            { icon: <Shield size={20} />, title: "Trap Keyword Protection", desc: "We're the only ASO tool that actively warns you when high-volume keywords are hurting your rankings. This single feature has recovered rankings for 67% of penalized apps we've analyzed." },
                            { icon: <Eye size={20} />, title: "Algorithm-Aware Scoring", desc: "Our relevancy model is trained on actual App Store and Google Play ranking changes. We know which factors each algorithm weighs — and our scores reflect that." },
                            { icon: <Gauge size={20} />, title: "Per-Field Coverage Analysis", desc: "Don't just know if a keyword is relevant — know if it's in the RIGHT field. Title presence is weighted 3× more than description presence in our scoring." },
                            { icon: <Target size={20} />, title: "Competitor Relevancy Gaps", desc: "See which high-relevancy keywords your competitors are missing. This is where the easiest ranking wins live — relevant keywords nobody else is targeting." },
                            { icon: <Zap size={20} />, title: "Instant Impact Analysis", desc: "Before you make any change, see our predicted impact: 'Removing these 5 trap keywords is estimated to improve your average rank by 12 positions.'" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
                            >
                                <div className="text-[#00CFB8] mb-4">{item.icon}</div>
                                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* SECTION 8: IMAGE + TEXT — AI DEEP DIVE    */}
            {/* ========================================== */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Text Left */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">
                                Under the Hood
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-3 mb-6">
                                How Our AI Determines Relevancy
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Our relevancy engine uses a multi-stage NLP pipeline that goes far beyond keyword matching:
                            </p>

                            <div className="space-y-5 mb-8">
                                {[
                                    { step: "1", title: "App Context Extraction", desc: "We analyze your app's title, subtitle, description, screenshots text, reviews, and category to build a comprehensive semantic profile of what your app does." },
                                    { step: "2", title: "Intent Classification", desc: "Each keyword is classified by search intent — does the searcher want to track fitness? Compare apps? Download a free tool? We match intent to your app's capabilities." },
                                    { step: "3", title: "Semantic Similarity Scoring", desc: "Using transformer-based embeddings, we compute the semantic distance between your app's profile and each keyword. Closer = more relevant." },
                                    { step: "4", title: "Algorithm Weight Calibration", desc: "The four factor scores are weighted differently for App Store vs. Google Play, and adjusted based on your app's category-specific ranking patterns." },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-8 h-8 rounded-lg bg-[#00CFB8]/10 flex items-center justify-center text-[#00CFB8] font-bold text-sm flex-shrink-0 mt-0.5">
                                            {item.step}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#002855] text-sm mb-1">{item.title}</h4>
                                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#002855] text-white font-medium rounded-lg hover:bg-[#00CFB8] transition-all duration-300 shadow-lg group">
                                Try AI Relevancy Scoring
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>

                        {/* Image Right */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="rounded-2xl overflow-hidden shadow-xl">
                                <img
                                    src={RelevancyTechImg}
                                    alt="AI Relevancy Engine"
                                    className="w-full object-cover"
                                />
                            </div>

                            {/* Floating card */}
                            <motion.div
                                className="absolute -bottom-6 -left-6 w-64 bg-white rounded-xl shadow-xl p-5 z-10 border border-gray-100"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <Brain className="text-[#00CFB8]" size={16} />
                                    <span className="text-xs font-bold text-gray-500 uppercase">AI Confidence</span>
                                </div>
                                <p className="text-sm font-bold text-[#002855] mb-2">"fitness tracker" → Fitness App</p>
                                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-[#00CFB8] rounded-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '98%' }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.7 }}
                                    />
                                </div>
                                <p className="text-[10px] text-gray-400 mt-1">98% confidence — strong semantic match</p>
                            </motion.div>

                            <div className="absolute -top-6 -right-6 w-40 h-40 bg-[#00CFB8]/10 rounded-full blur-3xl z-0"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* SECTION 9: CONTACT / CTA                   */}
            {/* ========================================== */}
            <section className="py-24 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Left: Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Get Started</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2 mb-6">
                                Is Your Metadata <span className="text-[#00CFB8]">Full of Trap Keywords?</span>
                            </h2>
                            <p className="text-gray-600 mb-10">
                                Most apps have 30-40% irrelevant keywords in their metadata. Our free relevancy audit will show you exactly which keywords are helping — and which are hurting your rankings.
                            </p>

                            <div className="space-y-6 mb-10">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-[#00CFB8]/10 rounded-lg flex items-center justify-center text-[#00CFB8] flex-shrink-0 mt-0.5">
                                        <Shield size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 text-sm">Free Relevancy Audit</h4>
                                        <p className="text-gray-500 text-sm">Get a full relevancy score for your current metadata — no strings attached.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-[#002855]/10 rounded-lg flex items-center justify-center text-[#002855] flex-shrink-0 mt-0.5">
                                        <Target size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 text-sm">Trap Keyword Identification</h4>
                                        <p className="text-gray-500 text-sm">We'll show you exactly which keywords to remove and what to replace them with.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-[#00CFB8]/10 rounded-lg flex items-center justify-center text-[#00CFB8] flex-shrink-0 mt-0.5">
                                        <BarChart3 size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 text-sm">Impact Prediction</h4>
                                        <p className="text-gray-500 text-sm">See estimated ranking improvement before you make any changes.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                <div className="flex items-center gap-2">
                                    <Mail size={16} className="text-[#002855]" />
                                    hello@appoptimax.com
                                </div>
                                <span className="text-gray-300">|</span>
                                <div className="flex items-center gap-2">
                                    <MapPin size={16} className="text-[#002855]" />
                                    San Francisco, CA
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Form */}
                        <motion.div
                            className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-xl font-bold text-[#002855] mb-2">Request Free Relevancy Audit</h3>
                            <p className="text-gray-500 text-sm mb-6">We'll analyze your metadata and send you a detailed relevancy report within 24 hours.</p>
                            <form className="space-y-5">
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#00CFB8] focus:border-transparent outline-none transition-all bg-[#f4f7fb]" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#00CFB8] focus:border-transparent outline-none transition-all bg-[#f4f7fb]" placeholder="Doe" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Work Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#00CFB8] focus:border-transparent outline-none transition-all bg-[#f4f7fb]" placeholder="john@company.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">App Store URL</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#00CFB8] focus:border-transparent outline-none transition-all bg-[#f4f7fb]" placeholder="https://apps.apple.com/app/..." />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Platform</label>
                                    <div className="flex gap-3">
                                        <label className="flex-1 cursor-pointer">
                                            <input type="radio" name="platform" value="ios" className="sr-only peer" defaultChecked />
                                            <div className="px-4 py-3 rounded-lg border-2 border-gray-200 text-center text-sm font-medium text-gray-500 peer-checked:border-[#00CFB8] peer-checked:bg-[#00CFB8]/5 peer-checked:text-[#00CFB8] transition-all">
                                                App Store (iOS)
                                            </div>
                                        </label>
                                        <label className="flex-1 cursor-pointer">
                                            <input type="radio" name="platform" value="android" className="sr-only peer" />
                                            <div className="px-4 py-3 rounded-lg border-2 border-gray-200 text-center text-sm font-medium text-gray-500 peer-checked:border-[#00CFB8] peer-checked:bg-[#00CFB8]/5 peer-checked:text-[#00CFB8] transition-all">
                                                Google Play
                                            </div>
                                        </label>
                                        <label className="flex-1 cursor-pointer">
                                            <input type="radio" name="platform" value="both" className="sr-only peer" />
                                            <div className="px-4 py-3 rounded-lg border-2 border-gray-200 text-center text-sm font-medium text-gray-500 peer-checked:border-[#00CFB8] peer-checked:bg-[#00CFB8]/5 peer-checked:text-[#00CFB8] transition-all">
                                                Both
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Anything else we should know?</label>
                                    <textarea rows="2" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#00CFB8] focus:border-transparent outline-none transition-all resize-none bg-[#f4f7fb]" placeholder="Optional — any specific concerns about your current keywords..."></textarea>
                                </div>
                                <button type="submit" className="w-full bg-[#00CFB8] text-white font-medium py-3.5 rounded-lg hover:bg-[#00B5A0] transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#00CFB8]/20">
                                    Get My Free Audit <ArrowUpRight size={18} />
                                </button>
                                <p className="text-[11px] text-gray-400 text-center">No credit card required. Report delivered in ≤24 hours.</p>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* BOTTOM CTA BAND                            */}
            {/* ========================================== */}
            <section className="relative py-20 bg-gradient-to-r from-[#002855] to-[#003d7a]">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#00CFB8] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#00CFB8] rounded-full blur-3xl"></div>
                </div>
                <motion.div className="relative z-10 max-w-4xl mx-auto px-6 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/10">
                        <AlertTriangle size={14} className="text-yellow-400" />
                        <span className="text-sm text-gray-300">67% of apps are targeting keywords that hurt their rankings</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Don't Let Irrelevant Keywords <br className="hidden md:block" /> Sabotage Your Rankings
                    </h2>
                    <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                        Every irrelevant keyword in your metadata is a wasted slot — and potentially an active ranking penalty. Fix it today with AppOptimax.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/contact" className="px-8 py-4 bg-[#00CFB8] text-white font-medium rounded-lg hover:bg-[#00B5A0] transition-colors shadow-lg shadow-[#00CFB8]/20 flex items-center gap-2">
                            Run Free Relevancy Audit <ArrowRight size={18} />
                        </Link>
                        <Link href="/chapters/keyword-research" className="px-8 py-4 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                            ← Back to Keyword Research
                        </Link>
                    </div>
                </motion.div>
            </section>

        </div>
    );
};

export default KeywordRelevancy;