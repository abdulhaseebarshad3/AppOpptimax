import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, TrendingUp, BarChart3, Target, ArrowRight, Mail, Phone, MapPin, Zap, Filter, Trophy, Sparkles, CheckCircle2, ArrowUpRight, Brain, GitBranch, Lightbulb, Layers, ChevronRight, ChevronDown, CircleDot, Database, Globe, Eye, Radio, Shield } from 'lucide-react';
import Link from 'next/link';

const SuggestedHeroImg = 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop';
const PipelineImg = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2072&auto=format&fit=crop';
const ClusterImg = 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop';

const SuggestedKeyword = () => {

    const [activeCluster, setActiveCluster] = useState(null);

    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
    };

    // Keyword Cluster Data
    const clusters = [
        {
            id: 'workouts',
            label: 'Workouts & Training',
            icon: <Target size={18} />,
            color: '#00CFB8',
            count: 142,
            keywords: [
                { kw: "home workout no equipment", vol: 35200, diff: 54 },
                { kw: "hiit workout app", vol: 22100, diff: 48 },
                { kw: "gym routine planner", vol: 18500, diff: 61 },
                { kw: "strength training program", vol: 15800, diff: 55 },
                { kw: "plyometric exercises", vol: 8900, diff: 32 },
            ]
        },
        {
            id: 'nutrition',
            label: 'Diet & Nutrition',
            icon: <Sparkles size={18} />,
            color: '#3b82f6',
            count: 118,
            keywords: [
                { kw: "calorie counter free", vol: 43600, diff: 65 },
                { kw: "macro tracker app", vol: 19200, diff: 58 },
                { kw: "meal planner healthy", vol: 14800, diff: 52 },
                { kw: "water intake reminder", vol: 12400, diff: 41 },
                { kw: "weight loss meal plan", vol: 28500, diff: 72 },
            ]
        },
        {
            id: 'tracking',
            label: 'Health Tracking',
            icon: <BarChart3 size={18} />,
            color: '#8b5cf6',
            count: 95,
            keywords: [
                { kw: "step counter pedometer", vol: 38900, diff: 58 },
                { kw: "sleep tracking app", vol: 31400, diff: 62 },
                { kw: "heart rate monitor", vol: 26100, diff: 71 },
                { kw: "fitness tracker sync", vol: 9800, diff: 45 },
                { kw: "cycle period tracker", vol: 21000, diff: 68 },
            ]
        },
        {
            id: 'wellness',
            label: 'Mind & Wellness',
            icon: <Brain size={18} />,
            color: '#f59e0b',
            count: 76,
            keywords: [
                { kw: "meditation for beginners", vol: 28700, diff: 48 },
                { kw: "yoga daily routine", vol: 22500, diff: 42 },
                { kw: "breathing exercises", vol: 16200, diff: 38 },
                { kw: "mindfulness app free", vol: 14100, diff: 51 },
                { kw: "stress relief games", vol: 11500, diff: 44 },
            ]
        },
    ];

    // Suggestion Sources
    const sources = [
        { icon: <Search size={22} />, title: "Store Autocomplete", desc: "Real-time scraping of App Store and Google Play search suggestions. These are the exact phrases users are typing right now.", volume: "40M+" },
        { icon: <Eye size={22} />, title: "Competitor Gaps", desc: "Keywords your top-10 competitors rank for that you don't. These represent immediate, achievable organic growth opportunities.", volume: "12K+/app" },
        { icon: <Brain size={22} />, title: "Semantic Expansion", desc: "NLP-powered conceptual expansion. If you track 'running', we suggest 'marathon training', 'VO2 max', and '5k plan' — not just 'jogging'.", volume: "Unlimited" },
        { icon: <GitBranch size={22} />, title: "Long-Tail Derivatives", desc: "Automatic modifier addition: 'for beginners', 'at home', 'offline', 'free'. These low-difficulty variations drive 40% of total search traffic.", volume: "5× expansion" },
        { icon: <Radio size={22} />, title: "Trending Spikes", desc: "Keywords experiencing sudden volume increases in the last 7-30 days. Catch rising trends before your competitors even notice them.", volume: "Real-time" },
    ];

    // Capabilities
    const capabilities = [
        { icon: <Layers size={28} />, title: "Thematic Keyword Clustering", desc: "Instead of a flat list of 500 keywords, we organize suggestions into 5-8 thematic clusters. Map an entire cluster to a metadata field in one click.", tag: "Unique" },
        { icon: <Filter size={28} />, title: "Smart Deduplication", desc: "Stemming-aware deduplication ensures 'workout' and 'workouts' aren't counted twice. Every slot in your metadata is maximized.", tag: "Efficiency" },
        { icon: <Globe size={28} />, title: "Cross-Language Suggestions", desc: "Get AI-translated and culturally adapted suggestions for 40+ languages. We don't just translate — we find what locals actually search for.", tag: "Global" },
        { icon: <Zap size={28} />, title: "One-Click Metadata Push", desc: "Select a cluster, review the top keywords, and push them directly to your title, subtitle, or keyword field editor. No copy-pasting.", tag: "Workflow" },
        { icon: <Shield size={28} />, title: "Relevancy Pre-Scoring", desc: "Every suggestion is pre-scored for relevancy (0-100). Irrelevant high-volume keywords are filtered out before they ever reach your list.", tag: "Quality" },
        { icon: <TrendingUp size={28} />, title: "Cluster Performance Tracking", desc: "Track how entire keyword clusters perform over time, not just individual terms. See which thematic groups drive the most installs.", tag: "Analytics" },
    ];

    // Workflow
    const steps = [
        { step: "01", title: "Enter a Seed or Connect", desc: "Type a seed keyword like 'fitness' or connect your app to pull your existing metadata as the baseline context." },
        { step: "02", title: "AI Builds Clusters", desc: "Our engine scans 5 data sources, generates thousands of candidates, and groups them into 5-8 thematic clusters in seconds." },
        { step: "03", title: "Review & Refine", desc: "Explore each cluster, check volume and difficulty, remove weak suggestions, and add your own variations." },
        { step: "04", title: "Push to Metadata", desc: "Map clusters to metadata fields and push. The keyword field gets long-tails, the description gets clusters — optimized in minutes." },
    ];

    // Stats
    const stats = [
        { value: "5", label: "Data Sources Mined" },
        { value: "8-10", label: "Clusters Per Seed" },
        { value: "500+", label: "Suggestions Per Query" },
        { value: "40%", label: "Long-Tail Traffic Share" },
    ];

    const getDiffColor = (score) => {
        if (score <= 40) return '#00CFB8';
        if (score <= 65) return '#eab308';
        return '#ef4444';
    };

    return (
        <div className="bg-[#f4f7fb] min-h-screen">

            {/* ========================================== */}
            {/* HERO SECTION — Inverted Layout            */}
            {/* ========================================== */}
            <section className="relative min-h-screen w-full overflow-hidden flex items-center">
                
                <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                >
                    <img src={SuggestedHeroImg} alt="AI Keyword Suggestion Engine" className="w-full h-full object-cover" />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-l from-[#002855]/95 via-[#002855]/80 to-[#002855]/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002855] via-transparent to-[#002855]/30" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
                    <div className="ml-auto max-w-3xl text-right">
                        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                            <span className="inline-block px-4 py-2 bg-[#00CFB8]/20 border border-[#00CFB8]/40 rounded-full text-sm text-[#00CFB8] mb-6 font-medium">
                                ASO Module — Suggested Keywords
                            </span>
                        </motion.div>

                        <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
                            Don't Find Keywords.<br />
                            <span className="text-[#00CFB8]">Discover Clusters.</span>
                        </motion.h1>

                        <motion.p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 ml-auto max-w-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
                            Other tools give you a flat list of 1,000 keywords. AppOptimax groups AI-powered suggestions into thematic clusters you can map directly to your metadata.
                        </motion.p>

                        <motion.div className="flex flex-wrap justify-end gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
                            <Link href="/contact" className="px-8 py-3.5 bg-[#00CFB8] text-white font-medium rounded-lg hover:bg-[#00B5A0] transition-colors flex items-center gap-2 shadow-lg shadow-[#00CFB8]/20">
                                Generate Clusters Free <ArrowRight size={18} />
                            </Link>
                            <Link href="#clusters" className="px-8 py-3.5 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm">
                                See Cluster Explorer
                            </Link>
                        </motion.div>

                        <motion.div className="flex flex-wrap justify-end gap-8 mt-14 pt-8 border-t border-white/10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1 }}>
                            {stats.map((stat, i) => (
                                <div key={i} className="text-right">
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
            {/* SECTION 1: THE PROBLEM WITH FLAT LISTS    */}
            {/* ========================================== */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        
                        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
                            <motion.div variants={fadeInUp}>
                                <span className="inline-block bg-red-500/10 text-red-500 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-red-500/20">
                                    The Problem
                                </span>
                            </motion.div>
                            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-[#002855] leading-tight">
                                A List of 1,000 Keywords <br />
                                <span className="text-red-400">Is Not a Strategy</span>
                            </motion.h2>
                            <motion.p variants={fadeInUp} className="text-gray-600 text-sm leading-relaxed">
                                Traditional ASO tools dump hundreds of keywords into a spreadsheet and leave you to figure out what to do with them. You spend hours manually grouping, deduplicating, and guessing which ones go in your title vs. your keyword field.
                            </motion.p>
                            <motion.p variants={fadeInUp} className="text-gray-600 text-sm leading-relaxed">
                                The result? You pick 20 generic high-volume keywords, ignore 900 long-tail variations that could drive real traffic, and end up with metadata that looks exactly like your competitors'.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4 pt-4">
                                <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                                    <p className="text-sm font-bold text-red-500 mb-1">Flat List Approach</p>
                                    <ul className="text-xs text-gray-600 space-y-1">
                                        <li className="flex items-center gap-1.5"><XCircleFake /> Overwhelming volume</li>
                                        <li className="flex items-center gap-1.5"><XCircleFake /> No thematic grouping</li>
                                        <li className="flex items-center gap-1.5"><XCircleFake /> Manual deduplication</li>
                                        <li className="flex items-center gap-1.5"><XCircleFake /> Generic keyword selection</li>
                                    </ul>
                                </div>
                                <div className="bg-[#00CFB8]/5 rounded-xl p-4 border border-[#00CFB8]/20">
                                    <p className="text-sm font-bold text-[#00CFB8] mb-1">Cluster Approach</p>
                                    <ul className="text-xs text-gray-600 space-y-1">
                                        <li className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-[#00CFB8]" /> Organized by theme</li>
                                        <li className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-[#00CFB8]" /> Map to metadata fields</li>
                                        <li className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-[#00CFB8]" /> Auto-deduplicated</li>
                                        <li className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-[#00CFB8]" /> Strategic selection</li>
                                    </ul>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div className="relative" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                            <div className="relative h-[480px] w-full rounded-2xl overflow-hidden shadow-2xl z-10">
                                <img src={PipelineImg} alt="Keyword Suggestion Engine" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#002855]/60 to-transparent" />
                            </div>
                            <motion.div className="absolute -bottom-6 -right-6 w-64 bg-white rounded-xl shadow-xl p-5 z-20 border border-gray-100" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }} viewport={{ once: true }}>
                                <div className="flex items-center gap-2 mb-3">
                                    <Database className="text-[#00CFB8]" size={16} />
                                    <span className="text-xs font-bold text-gray-500 uppercase">Processing</span>
                                </div>
                                <p className="text-sm font-bold text-[#002855] mb-1">1,247 Keywords Found</p>
                                <p className="text-xs text-[#00CFB8] font-semibold">Grouped into 8 clusters</p>
                            </motion.div>
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#00CFB8]/10 rounded-full blur-3xl z-0"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* SECTION 2: INTERACTIVE CLUSTER EXPLORER   */}
            {/* ========================================== */}
            <section id="clusters" className="py-24 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Interactive Preview</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2 mb-4">The Keyword Cluster Explorer</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">Click a cluster to expand it. This is how AppOptimax organizes suggestions — by theme, not by random sorting.</p>
                    </motion.div>

                    <div className="grid lg:grid-cols-12 gap-6">
                        {/* Cluster Selection */}
                        <div className="lg:col-span-4 space-y-3">
                            {/* Seed Node */}
                            <div className="bg-white rounded-xl p-4 border border-[#002855] shadow-sm flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-[#002855] flex items-center justify-center text-white">
                                    <Search size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Seed Keyword</p>
                                    <p className="text-lg font-bold text-[#002855]">"fitness app"</p>
                                </div>
                            </div>

                            <div className="relative h-6 flex justify-center">
                                <div className="w-px h-full bg-gray-300"></div>
                            </div>

                            {/* Cluster Nodes */}
                            {clusters.map((cluster, i) => (
                                <motion.button
                                    key={cluster.id}
                                    onClick={() => setActiveCluster(activeCluster === cluster.id ? null : cluster.id)}
                                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center gap-3 ${activeCluster === cluster.id
                                        ? 'bg-white border-gray-200 shadow-lg shadow-gray-200/50 scale-[1.02]'
                                        : 'bg-white/60 border-gray-100 hover:bg-white hover:border-gray-200'
                                        }`}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white flex-shrink-0" style={{ backgroundColor: cluster.color }}>
                                        {cluster.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-bold text-[#002855]">{cluster.label}</p>
                                        <p className="text-xs text-gray-400">{cluster.count} suggestions</p>
                                    </div>
                                    <ChevronRight size={16} className={`text-gray-300 transition-transform duration-300 ${activeCluster === cluster.id ? 'rotate-90' : ''}`} />
                                </motion.button>
                            ))}
                        </div>

                        {/* Expanded Cluster View */}
                        <div className="lg:col-span-8">
                            <AnimatePresence mode="wait">
                                {activeCluster ? (
                                    <motion.div
                                        key={activeCluster}
                                        className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 h-full"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {(() => {
                                            const c = clusters.find(cl => cl.id === activeCluster);
                                            return (
                                                <>
                                                    <div className="flex items-center justify-between mb-8">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: c.color }}>
                                                                {c.icon}
                                                            </div>
                                                            <div>
                                                                <h3 className="text-xl font-bold text-[#002855]">{c.label}</h3>
                                                                <p className="text-xs text-gray-400">Top 5 suggestions from this cluster</p>
                                                            </div>
                                                        </div>
                                                        <span className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ backgroundColor: `${c.color}15`, color: c.color }}>
                                                            {c.count} Total
                                                        </span>
                                                    </div>

                                                    <div className="space-y-4">
                                                        {c.keywords.map((kw, i) => (
                                                            <motion.div
                                                                key={kw.kw}
                                                                className="flex items-center gap-4 p-4 bg-[#f4f7fb] rounded-xl border border-gray-100 hover:border-gray-200 transition-colors group"
                                                                initial={{ opacity: 0, y: 10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                transition={{ delay: i * 0.08 }}
                                                            >
                                                                <span className="text-xs text-gray-400 font-mono w-4">{i + 1}</span>
                                                                <div className="flex-1 min-w-0">
                                                                    <p className="text-sm font-semibold text-[#002855] group-hover:text-[#00CFB8] transition-colors truncate">{kw.kw}</p>
                                                                </div>
                                                                <div className="flex items-center gap-6 flex-shrink-0">
                                                                    <div className="text-right">
                                                                        <p className="text-xs text-gray-400">Volume</p>
                                                                        <p className="text-sm font-bold text-gray-800">{(kw.vol / 1000).toFixed(1)}K</p>
                                                                    </div>
                                                                    <div className="w-20">
                                                                        <p className="text-xs text-gray-400 mb-1">Difficulty</p>
                                                                        <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                                                            <div className="h-full rounded-full" style={{ width: `${kw.diff}%`, backgroundColor: getDiffColor(kw.diff) }} />
                                                                        </div>
                                                                        <p className="text-[10px] font-semibold mt-0.5" style={{ color: getDiffColor(kw.diff) }}>{kw.diff}</p>
                                                                    </div>
                                                                    <button className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-300 hover:text-[#00CFB8] hover:border-[#00CFB8] transition-all">
                                                                        <ArrowRight size={14} />
                                                                    </button>
                                                                </div>
                                                            </motion.div>
                                                        ))}
                                                    </div>

                                                    <div className="mt-6 pt-6 border-t border-gray-100 flex justify-between items-center">
                                                        <p className="text-xs text-gray-400">Showing top 5 of {c.count} keywords in this cluster</p>
                                                        <button className="text-xs font-semibold text-[#00CFB8] flex items-center gap-1 hover:gap-2 transition-all">
                                                            View All {c.count} <ArrowRight size={12} />
                                                        </button>
                                                    </div>
                                                </>
                                            );
                                        })()}
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="placeholder"
                                        className="bg-white rounded-2xl border border-gray-100 shadow-lg p-12 h-full flex flex-col items-center justify-center text-center"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <div className="w-20 h-20 rounded-full bg-[#f4f7fb] flex items-center justify-center mb-6">
                                            <GitBranch size={32} className="text-gray-300" />
                                        </div>
                                        <h3 className="text-xl font-bold text-[#002855] mb-2">Select a Cluster</h3>
                                        <p className="text-gray-400 text-sm max-w-sm">
                                            Click on any keyword cluster from the left panel to see the top suggestions, search volume, and difficulty scores.
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* SECTION 3: THE 5 DATA SOURCES             */}
            {/* ========================================== */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Data Pipeline</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2 mb-4">Five Sources. <span className="text-[#00CFB8]">One Unified List.</span></h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">We don't rely on a single data source. Our engine pulls from five distinct pipelines and merges them into deduplicated, clustered suggestions.</p>
                    </motion.div>

                    <div className="relative">
                        {/* Connecting line */}
                        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00CFB8]/20 to-transparent -translate-y-1/2 z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
                            {sources.map((source, i) => (
                                <motion.div
                                    key={i}
                                    className="bg-[#f4f7fb] rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:border-[#00CFB8]/30 transition-all duration-300 group text-center"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.12 }}
                                >
                                    <div className="w-14 h-14 rounded-xl bg-[#002855]/5 flex items-center justify-center text-[#002855] group-hover:bg-[#00CFB8] group-hover:text-white transition-all duration-300 mx-auto mb-4">
                                        {source.icon}
                                    </div>
                                    <h3 className="text-base font-bold text-[#002855] mb-2">{source.title}</h3>
                                    <p className="text-gray-500 text-xs leading-relaxed mb-4">{source.desc}</p>
                                    <span className="inline-block bg-white px-3 py-1 rounded-full text-[10px] font-bold text-[#00CFB8] border border-[#00CFB8]/20">
                                        {source.volume}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* SECTION 4: CORE CAPABILITIES              */}
            {/* ========================================== */}
            <section className="py-24 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Capabilities</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2 mb-4">
                            Built for <span className="text-[#00CFB8]">Strategic</span> Keyword Selection
                        </h2>
                    </motion.div>

                    <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        {capabilities.map((cap, index) => (
                            <motion.div key={index} variants={fadeInUp} className="group relative bg-white p-8 rounded-2xl border border-gray-100 transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-teal-100 hover:border-[#00CFB8]/30">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-[#00CFB8]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="w-14 h-14 rounded-xl bg-[#002855]/5 flex items-center justify-center text-[#002855] group-hover:bg-[#00CFB8] group-hover:text-white transition-all duration-300">{cap.icon}</div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-[#f4f7fb] px-2.5 py-1 rounded-full">{cap.tag}</span>
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
            {/* SECTION 5: HOW IT WORKS                    */}
            {/* ========================================== */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Workflow</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2 mb-4">From Seed to <span className="text-[#00CFB8]">Optimized Metadata</span></h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#00CFB8]/20 via-[#00CFB8]/40 to-[#00CFB8]/20"></div>
                        {steps.map((step, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="relative">
                                <div className="bg-[#f4f7fb] rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow relative z-10 h-full">
                                    <div className="w-12 h-12 rounded-full bg-[#00CFB8] flex items-center justify-center text-white font-bold text-lg mb-6 shadow-lg shadow-[#00CFB8]/20">{step.step}</div>
                                    <h3 className="text-lg font-bold text-[#002855] mb-3">{step.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* SECTION 6: VISUAL - MAPPING CLUSTERS      */}
            {/* ========================================== */}
            <section className="py-24 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
                            <div className="rounded-2xl overflow-hidden shadow-xl">
                                <img src={ClusterImg} alt="Mapping Clusters to Metadata" className="w-full object-cover" />
                            </div>
                            <motion.div className="absolute -top-4 -right-4 w-48 bg-white rounded-xl shadow-xl p-4 z-10 border border-gray-100" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} viewport={{ once: true }}>
                                <p className="text-xs font-bold text-gray-500 uppercase mb-1">Cluster → Field</p>
                                <p className="text-sm font-bold text-[#002855]">"Workouts" → Title</p>
                                <p className="text-sm font-bold text-[#3b82f6]">"Nutrition" → Subtitle</p>
                                <p className="text-sm font-bold text-[#8b5cf6]">"Tracking" → Keywords</p>
                            </motion.div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                            <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Strategic Mapping</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-3 mb-6">
                                Map Clusters to Metadata Fields
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Instead of picking individual keywords, you assign entire thematic clusters to specific metadata fields. This ensures your metadata tells a coherent story to the algorithm.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Put your strongest cluster in the title, the second strongest in the subtitle, and distribute long-tail clusters across the keyword field and description. The result is metadata with perfect thematic density.
                            </p>
                            
                            <div className="space-y-4">
                                {[
                                    { field: "Title (30 chars)", map: "Primary cluster core keyword", color: "bg-[#00CFB8]" },
                                    { field: "Subtitle (30 chars)", map: "Secondary cluster core keyword", color: "bg-[#3b82f6]" },
                                    { field: "Keyword Field (100 chars)", map: "Long-tail variations from all clusters", color: "bg-[#8b5cf6]" },
                                    { field: "Description (4000 chars)", map: "Natural language inclusion of all clusters", color: "bg-[#f59e0b]" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 bg-white p-4 rounded-xl border border-gray-100">
                                        <div className={`w-1.5 h-full min-h-[40px] rounded-full ${item.color} flex-shrink-0 mt-1`} />
                                        <div>
                                            <p className="text-sm font-bold text-[#002855]">{item.field}</p>
                                            <p className="text-xs text-gray-500 mt-0.5">{item.map}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* SECTION 7: WHY DARK SECTION                */}
            {/* ========================================== */}
            <section className="py-24 bg-[#002855] relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 right-20 w-80 h-80 bg-[#00CFB8] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#00CFB8] rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <motion.span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Why AppOptimax</motion.span>
                        <motion.h2 className="text-3xl md:text-5xl font-bold text-white mt-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                            Suggestions That Actually Convert
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: <CheckCircle2 size={22} />, title: "Zero Wasted Slots", desc: "Stemming-aware deduplication means 'workout' and 'workouts' are merged. Every character in your 100-character keyword field is used efficiently." },
                            { icon: <CheckCircle2 size={22} />, title: "Relevancy Pre-Filter", desc: "Suggestions are scored for relevancy before they appear. You'll never see a high-volume irrelevant keyword in your suggestion list." },
                            { icon: <CheckCircle2 size={22} />, title: "True Long-Tail Discovery", desc: "We don't just add 'app' or 'free' to keywords. Our long-tail engine finds genuine multi-word phrases that real users search for." },
                            { icon: <CheckCircle2 size={22} />, title: "Competitor Gap Integration", desc: "Suggestions include keywords your competitors rank for that you don't — highlighted so you can immediately close the gap." },
                            { icon: <CheckCircle2 size={22} />, title: "Localization Built-In", desc: "Suggest keywords in 40+ languages with cultural adaptation. 'Cell phone' in the US becomes 'Mobile phone' in the UK and 'Handy' in Germany." },
                            { icon: <CheckCircle2 size={22} />, title: "Instant Metadata Push", desc: "Select a cluster, click 'Push to Title', and it's done. No downloading CSVs, no copy-pasting between tabs." },
                        ].map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                                <div className="text-[#00CFB8] mb-4">{item.icon}</div>
                                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* SECTION 8: CONTACT / CTA                   */}
            {/* ========================================== */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Get Started</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2 mb-6">
                                Discover Your <span className="text-[#00CFB8]">Keyword Clusters</span>
                            </h2>
                            <p className="text-gray-600 mb-10">
                                Enter any seed keyword and get a full clustered suggestion report — free. See exactly how your metadata could look with AI-organized keywords.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#002855] rounded-lg flex items-center justify-center text-white"><Mail size={20} /></div>
                                    <div><h4 className="font-semibold text-gray-800">Email</h4><p className="text-gray-500 text-sm">hello@appoptimax.com</p></div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#00CFB8] rounded-lg flex items-center justify-center text-white"><MapPin size={20} /></div>
                                    <div><h4 className="font-semibold text-gray-800">Headquarters</h4><p className="text-gray-500 text-sm">San Francisco, CA</p></div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#002855] rounded-lg flex items-center justify-center text-white"><Phone size={20} /></div>
                                    <div><h4 className="font-semibold text-gray-800">Schedule a Call</h4><p className="text-gray-500 text-sm">Book a 15-min ASO walkthrough</p></div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div className="bg-[#f4f7fb] p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <h3 className="text-xl font-bold text-[#002855] mb-2">Request Free Cluster Report</h3>
                            <p className="text-gray-500 text-sm mb-6">We'll generate keyword clusters for your app and send you the full report.</p>
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
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Seed Keyword / App URL</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#00CFB8] focus:border-transparent outline-none transition-all bg-white" placeholder='e.g., "fitness app" or App Store URL' />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Tell us about your app</label>
                                    <textarea rows="3" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#00CFB8] focus:border-transparent outline-none transition-all resize-none bg-white" placeholder="What does your app do? Who is it for?"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-[#00CFB8] text-white font-medium py-3.5 rounded-lg hover:bg-[#00B5A0] transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#00CFB8]/20">
                                    Get My Free Clusters <ArrowUpRight size={18} />
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
                        Stop Picking Keywords. Start Building Clusters.
                    </h2>
                    <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                        The flat keyword list is dead. AppOptimax's clustered suggestions help you build metadata that's strategically organized, thematically dense, and algorithmically optimal.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/contact" className="px-8 py-4 bg-[#00CFB8] text-white font-medium rounded-lg hover:bg-[#00B5A0] transition-colors shadow-lg shadow-[#00CFB8]/20 flex items-center gap-2">
                            Generate Clusters Free <ArrowRight size={18} />
                        </Link>
                        <Link href="/chapters/keyword-relevancy" className="px-8 py-4 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                            Check Keyword Relevancy →
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

// Helper component for the "Problem" section
const XCircleFake = () => <span className="text-red-400 font-bold">✕</span>;

export default SuggestedKeyword;