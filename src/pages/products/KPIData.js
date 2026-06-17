'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, TrendingUp, TrendingDown, ArrowRight, Mail, Phone, MapPin, Zap, 
  CheckCircle2, ArrowUpRight, Brain, Eye, Activity, Target, Layers, ChevronRight, 
  Users, PieChart, Filter, Sparkles, Shield, Database, GitBranch, 
  ArrowDown, CircleDot, AlertTriangle, Lock, Unlock
} from 'lucide-react';
import Link from 'next/link';

const KPIHeroImg = 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop';
const AttributionImg = 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop';

const KPIData = () => {
    const [activeHierarchy, setActiveHierarchy] = useState(null);

    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
    };

    // KPI Hierarchy Data (Interactive Tree)
    const hierarchyData = {
        installs: { 
            title: "Total Installs", 
            value: "24,500", 
            change: "+14%", 
            desc: "The top-level number everyone looks at. But it hides the truth. 60% of these might be paid or unattributed. Let's break it down.",
            color: "#002855" 
        },
        organic: { 
            title: "Pure Organic Installs", 
            value: "14,200", 
            change: "+22%", 
            desc: "Installs coming directly from App Store search or browse without any ad click. This is the true output of your ASO efforts.",
            color: "#00CFB8" 
        },
        paid: { 
            title: "Paid (Apple Search Ads / UA)", 
            value: "8,100", 
            change: "+5%", 
            desc: "Installs attributed to paid campaigns. Important to track, but dangerous to mix with organic when measuring ASO success.",
            color: "#ef4444" 
        },
        overlap: { 
            title: "Organic-Assisted (The Hidden Truth)", 
            value: "2,200", 
            change: "New", 
            desc: "Users who discovered you organically, left, but came back later via a paid ad. App Store Connect counts this as 'Paid'. We know it's organic credit.",
            color: "#f59e0b" 
        }
    };

    // Core KPI Cards
    const coreKPIs = [
        { 
            title: "Organic Lift", 
            value: "28%", 
            change: "+4.2%", 
            trend: "up",
            desc: "The percentage increase in organic installs directly correlated to your last metadata update. Proves ASO ROI.",
            context: "Industry avg is 12%"
        },
        { 
            title: "Category Share of Voice", 
            value: "4.8%", 
            change: "+0.6%", 
            trend: "up",
            desc: "The percentage of total search volume in your category where your app appears in the top 10. The ultimate market share metric.",
            context: "Top competitor is at 8.1%"
        },
        { 
            title: "Branded Search Ratio", 
            value: "32%", 
            change: "-2.1%", 
            trend: "down",
            desc: "Percentage of your organic installs coming from your own brand name. A dropping ratio means your non-branded ASO is working.",
            context: "Healthy target is < 40%"
        },
        { 
            title: "Impression-to-Install CVR", 
            value: "2.4%", 
            change: "+0.3%", 
            trend: "up",
            desc: "Total impressions converted to installs. Combines your ranking power (impressions) with your page conversion power (CVR).",
            context: "Category avg is 1.8%"
        },
        { 
            title: "Keyword Cannibalization Score", 
            value: "12", 
            change: "-5", 
            trend: "up",
            desc: "Number of keywords where you rank in multiple positions (e.g., main app and a companion app). Lower is better—means less self-competition.",
            context: "Optimal is < 10"
        },
        { 
            title: "Rating Velocity (7d)", 
            value: "18/wk", 
            change: "+3", 
            trend: "up",
            desc: "New ratings acquired per week. A crucial algorithmic trust signal that directly impacts keyword indexation speed.",
            context: "Needed: 25/wk for top tier"
        },
    ];

    // Attribution Breakdown Data (Donut Chart Representation)
    const attributionData = [
        { label: "True Organic Search", value: 42, color: "#00CFB8" },
        { label: "Explore/Browse", value: 16, color: "#0078c1" },
        { label: "App Store Connect (Paid)", value: 24, color: "#ef4444" },
        { label: "Web Referrer (Untracked)", value: 12, color: "#94a3b8" },
        { label: "Organic-Assisted", value: 6, color: "#f59e0b" },
    ];

    // ASO Truths
    const asoTruths = [
        { 
            icon: <AlertTriangle size={20} />, 
            myth: "App Store Connect attribution is accurate.", 
            truth: "ASC uses last-click attribution. If a user sees you organically, Googles you, and clicks a web ad, ASC counts it as a web referral, not organic. You lose your ASO credit."
        },
        { 
            icon: <Lock size={20} />, 
            myth: "A download increase means ASO is working.", 
            truth: "Did paid spend increase at the same time? Did seasonality shift? Is a competitor's app offline? Without isolating variables, download counts are vanity metrics."
        },
        { 
            icon: <Eye size={20} />, 
            myth: "Impressions equal visibility.", 
            truth: "Impressions only measure how many times your icon was shown. They don't measure WHERE you were shown. Ranking #1 for a junk keyword generates impressions, but zero value."
        },
        { 
            icon: <Unlock size={20} />, 
            myth: "Conversion Rate (CVR) is just page views to installs.", 
            truth: "True ASO CVR must factor in keyword intent. A 5% CVR on 'fitness app' is worse than a 2% CVR on 'weight loss meal plan' because the latter has 10x higher user value."
        },
    ];

    // Helper for CSS Donut Chart
    const getDonutStyle = (data) => {
        let gradientParts = [];
        let accumulated = 0;
        data.forEach((item) => {
            const start = accumulated;
            accumulated += item.value;
            gradientParts.push(`${item.color} ${start}% ${accumulated}%`);
        });
        return {
            background: `conic-gradient(${gradientParts.join(', ')})`
        };
    };

    return (
        <div className="bg-[#f4f7fb] min-h-screen">

            {/* ========================================== */}
            {/* HERO — Measure What Moves the Needle      */}
            {/* ========================================== */}
            <section className="relative min-h-screen w-full overflow-hidden flex items-center">
                <motion.div className="absolute inset-0" initial={{ scale: 1.15 }} animate={{ scale: 1 }} transition={{ duration: 1.8, ease: "easeOut" }}>
                    <img src={KPIHeroImg} alt="KPI and ASO Data Analytics" className="w-full h-full object-cover" />
                </motion.div>

                <div className="absolute inset-0 bg-[#002855]/95" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002855] via-transparent to-[#002855]/50" />
                
                {/* Abstract Background Elements */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
                    <div className="w-[400px] h-[400px] border-2 border-[#00CFB8] rounded-full" />
                    <div className="absolute w-[300px] h-[300px] border-2 border-[#00CFB8] rounded-full" />
                    <div className="absolute w-[200px] h-[200px] border-2 border-[#00CFB8] rounded-full" />
                    <div className="absolute w-4 h-4 bg-[#00CFB8] rounded-full" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
                    <div className="text-center max-w-4xl mx-auto">
                        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                            <span className="inline-block px-4 py-2 bg-[#00CFB8]/20 border border-[#00CFB8]/40 rounded-full text-sm text-[#00CFB8] mb-6 font-medium">
                                ASO Module — KPI & Measurement
                            </span>
                        </motion.div>

                        <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
                            Stop Tracking Vanity.<br />
                            <span className="text-[#00CFB8]">Track ASO Revenue.</span>
                        </motion.h1>

                        <motion.p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
                            App Store Connect tells you what happened. AppOptimax tells you <strong className="text-white">why</strong> it happened, isolating your organic growth from paid noise and algorithmic shifts.
                        </motion.p>

                        <motion.div className="flex flex-wrap justify-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
                            <Link href="/contact" className="px-8 py-3.5 bg-[#00CFB8] text-white font-medium rounded-lg hover:bg-[#00B5A0] transition-colors flex items-center gap-2 shadow-lg shadow-[#00CFB8]/20">
                                Build My KPI Dashboard <ArrowRight size={18} />
                            </Link>
                            <Link href="#attribution" className="px-8 py-3.5 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm">
                                See True Attribution
                            </Link>
                        </motion.div>

                        <motion.div className="flex flex-wrap justify-center gap-12 mt-16 pt-8 border-t border-white/10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1 }}>
                            <div>
                                <p className="text-3xl font-bold text-white">68%</p>
                                <p className="text-xs text-gray-400 uppercase tracking-wider mt-1 max-w-[150px]">Of ASC Data is Misattributed</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-white">12</p>
                                <p className="text-xs text-gray-400 uppercase tracking-wider mt-1 max-w-[150px]">Proprietary ASO KPIs</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-white">Real-Time</p>
                                <p className="text-xs text-gray-400 uppercase tracking-wider mt-1 max-w-[150px]">Revenue Impact Tracking</p>
                            </div>
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
            {/* SECTION 1: INSTALL HIERARCHY EXPLORER     */}
            {/* ========================================== */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">The Install Breakdown</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2 mb-4">
                            Not All Installs Are <span className="text-[#00CFB8]">Created Equal</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Click the layers to peel back the "Total Installs" metric and see what's actually driving your growth.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Visual Tree */}
                        <motion.div 
                            className="relative flex flex-col items-center gap-6"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            {/* Top Level */}
                            <button onClick={() => setActiveHierarchy('installs')} className={`w-full max-w-xs p-6 rounded-2xl border-2 text-left transition-all duration-300 ${activeHierarchy === 'installs' ? 'border-[#002855] bg-[#002855]/5 shadow-lg' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                                <p className="text-xs text-gray-500 font-bold uppercase">Total Installs</p>
                                <p className="text-3xl font-bold text-[#002855] mt-1">24,500</p>
                                <div className="mt-2 text-xs text-[#00CFB8] font-semibold">+14% vs last month</div>
                            </button>

                            <div className="w-0.5 h-8 bg-gray-200" />

                            {/* Second Level */}
                            <div className="flex gap-4 w-full max-w-lg">
                                <button onClick={() => setActiveHierarchy('organic')} className={`flex-1 p-5 rounded-2xl border-2 text-left transition-all duration-300 ${activeHierarchy === 'organic' ? 'border-[#00CFB8] bg-[#00CFB8]/5 shadow-lg' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                                    <p className="text-[10px] text-gray-500 font-bold uppercase">Pure Organic</p>
                                    <p className="text-2xl font-bold text-[#00CFB8] mt-1">14,200</p>
                                    <div className="mt-1 text-xs text-[#00CFB8] font-semibold">+22%</div>
                                </button>
                                <button onClick={() => setActiveHierarchy('paid')} className={`flex-1 p-5 rounded-2xl border-2 text-left transition-all duration-300 ${activeHierarchy === 'paid' ? 'border-red-500 bg-red-50 shadow-lg' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                                    <p className="text-[10px] text-gray-500 font-bold uppercase">Paid (ASA/UA)</p>
                                    <p className="text-2xl font-bold text-red-500 mt-1">8,100</p>
                                    <div className="mt-1 text-xs text-gray-500 font-semibold">+5%</div>
                                </button>
                            </div>

                            <div className="w-0.5 h-8 bg-gray-200" />

                            {/* Third Level (The Truth) */}
                            <button onClick={() => setActiveHierarchy('overlap')} className={`w-full max-w-md p-6 rounded-2xl border-2 border-dashed text-left transition-all duration-300 ${activeHierarchy === 'overlap' ? 'border-[#f59e0b] bg-[#f59e0b]/5 shadow-lg' : 'border-[#f59e0b]/30 bg-white hover:border-[#f59e0b]'}`}>
                                <div className="flex items-center gap-2 mb-2">
                                    <Sparkles size={16} className="text-[#f59e0b]" />
                                    <p className="text-xs text-[#f59e0b] font-bold uppercase">Organic-Assisted (Hidden)</p>
                                </div>
                                <p className="text-2xl font-bold text-[#f59e0b]">2,200</p>
                                <p className="text-xs text-gray-500 mt-1">Discovered organically, converted via paid. ASC labels this 'Paid'.</p>
                            </button>
                        </motion.div>

                        {/* Info Panel */}
                        <div className="min-h-[350px]">
                            <AnimatePresence mode="wait">
                                {activeHierarchy ? (
                                    <motion.div
                                        key={activeHierarchy}
                                        className={`h-full rounded-2xl border p-8 ${activeHierarchy === 'installs' ? 'bg-[#002855]/5 border-[#002855]/20' : activeHierarchy === 'organic' ? 'bg-[#00CFB8]/5 border-[#00CFB8]/20' : activeHierarchy === 'paid' ? 'bg-red-50 border-red-200' : 'bg-[#f59e0b]/5 border-[#f59e0b]/20'}`}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                    >
                                        <h3 className="text-2xl font-bold mb-3" style={{ color: hierarchyData[activeHierarchy].color }}>
                                            {hierarchyData[activeHierarchy].title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed mb-6">{hierarchyData[activeHierarchy].desc}</p>
                                        
                                        {activeHierarchy === 'overlap' && (
                                            <div className="bg-white rounded-xl p-4 border border-[#f59e0b]/20 shadow-sm">
                                                <p className="text-xs font-bold text-gray-500 uppercase mb-2">AppOptimax Solution:</p>
                                                <p className="text-sm text-[#002855]">We use a view-through attribution model. If we detect an organic impression within 24 hours before a paid install, we credit the ASO team, not the paid team.</p>
                                            </div>
                                        )}
                                        {activeHierarchy === 'installs' && (
                                            <div className="flex items-center gap-2 text-sm text-[#002855]">
                                                <ArrowDown size={16} className="text-[#002855]" />
                                                <span className="font-medium">Click the layers below to dig deeper.</span>
                                            </div>
                                        )}
                                    </motion.div>
                                ) : (
                                    <motion.div key="default" className="h-full bg-[#f4f7fb] rounded-2xl border border-gray-100 p-8 flex flex-col justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                        <Database size={32} className="text-gray-300 mb-4" />
                                        <h3 className="text-xl font-bold text-[#002855] mb-2">Select a Layer</h3>
                                        <p className="text-gray-500 text-sm">Explore how a simple "Total Installs" number masks the true performance of your ASO strategy.</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* SECTION 2: CORE ASO KPIs                 */}
            {/* ========================================== */}
            <section className="py-24 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">The ASO Scorecard</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2 mb-4">
                            KPIs You <span className="text-[#00CFB8]">Can't Find Anywhere Else</span>
                        </h2>
                    </motion.div>

                    <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        {coreKPIs.map((kpi, index) => (
                            <motion.div key={index} variants={fadeInUp} className="group relative bg-white p-8 rounded-2xl border border-gray-100 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-teal-100 hover:border-[#00CFB8]/30">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-[#00CFB8]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-4">
                                        <h3 className="text-lg font-bold text-[#002855] leading-tight">{kpi.title}</h3>
                                        <span className={`text-xs font-bold flex items-center gap-1 px-2 py-1 rounded-full ${kpi.trend === 'up' ? 'bg-[#00CFB8]/10 text-[#00CFB8]' : 'bg-red-50 text-red-500'}`}>
                                            {kpi.trend === 'up' ? <ArrowUpRight size={12} /> : <ArrowDown size={12} />}
                                            {kpi.change}
                                        </span>
                                    </div>
                                    
                                    <p className="text-4xl font-bold text-[#002855] mb-4">{kpi.value}</p>
                                    
                                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{kpi.desc}</p>
                                    
                                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                                        <span className="text-xs text-gray-400">Benchmark:</span>
                                        <span className="text-xs font-semibold text-[#002855]">{kpi.context}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ========================================== */}
            {/* SECTION 3: ATTRIBUTION DONUT             */}
            {/* ========================================== */}
            <section id="attribution" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        
                        {/* Text */}
                        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6 order-2 lg:order-1">
                            <motion.div variants={fadeInUp}>
                                <span className="inline-block bg-red-100 text-red-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-red-200">
                                    The Attribution Problem
                                </span>
                            </motion.div>
                            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-[#002855] leading-tight">
                                Why Your ASA & ASO Teams Are <br />
                                <span className="text-red-500">Fighting Over Credit</span>
                            </motion.h2>
                            <motion.p variants={fadeInUp} className="text-gray-600 text-sm leading-relaxed">
                                Because App Store Connect uses a strict last-click model, it creates massive blind spots. If a user searches "fitness app", sees you at #3 (Organic), doesn't download, but later clicks an Apple Search Ad for "fitness app", ASC gives 100% credit to the paid team.
                            </motion.p>
                            
                            <motion.div variants={fadeInUp} className="space-y-4 pt-4">
                                {attributionData.map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-3 bg-[#f4f7fb] rounded-lg border border-gray-100">
                                        <div className="w-4 h-4 rounded-sm flex-shrink-0" style={{ backgroundColor: item.color }} />
                                        <div className="flex-1">
                                            <span className="text-sm font-medium text-[#002855]">{item.label}</span>
                                        </div>
                                        <span className="text-sm font-bold text-[#002855]">{item.value}%</span>
                                    </div>
                                ))}
                            </motion.div>
                            <motion.p variants={fadeInUp} className="text-xs text-gray-400 flex items-center gap-2 pt-2">
                                <AlertTriangle size={14} className="text-[#f59e0b]" />
                                Note: AppOptimax reallocates the "Organic-Assisted" slice back to your ASO dashboard.
                            </motion.p>
                        </motion.div>

                        {/* Donut Chart */}
                        <motion.div className="order-1 lg:order-2 flex justify-center" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                                {/* Outer Ring */}
                                <div className="absolute w-full h-full rounded-full shadow-inner" style={getDonutStyle(attributionData)} />
                                {/* Inner Circle to create donut */}
                                <div className="relative w-3/4 h-3/4 bg-white rounded-full shadow-lg flex flex-col items-center justify-center z-10 p-8">
                                    <p className="text-xs text-gray-500 uppercase font-bold mb-1">True Organic Value</p>
                                    <p className="text-5xl font-bold text-[#00CFB8]">58%</p>
                                    <p className="text-xs text-gray-400 mt-2 text-center">42% Pure + 16% Browse + 6% Assisted</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* SECTION 4: DEBUNKING KPI MYTHS            */}
            {/* ========================================== */}
            <section className="py-24 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Data Integrity</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2 mb-4">
                            ASO KPI <span className="text-[#00CFB8]">Myths vs. Reality</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            If you're making decisions based on these standard metrics, you're flying blind.
                        </p>
                    </motion.div>

                    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        {asoTruths.map((truth, i) => (
                            <motion.div key={i} variants={fadeInUp} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                                <div className="p-6 border-b border-gray-100 bg-red-50/50">
                                    <div className="flex items-center gap-3">
                                        <div className="text-red-500">{truth.icon}</div>
                                        <div>
                                            <p className="text-[10px] font-bold text-red-400 uppercase tracking-widest">The Myth</p>
                                            <p className="text-sm font-semibold text-red-700">{truth.myth}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 size={20} className="text-[#00CFB8] flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-[10px] font-bold text-[#00CFB8] uppercase tracking-widest mb-1">The Reality</p>
                                            <p className="text-sm text-gray-600 leading-relaxed">{truth.truth}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ========================================== */}
            {/* SECTION 5: WHY DARK SECTION                */}
            {/* ========================================== */}
            <section className="py-24 bg-[#002855] relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 right-20 w-80 h-80 bg-[#00CFB8] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#f59e0b] rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <motion.span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Custom KPI Engine</motion.span>
                        <motion.h2 className="text-3xl md:text-5xl font-bold text-white mt-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                            Build Your Own Metrics
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: <GitBranch size={22} />, title: "Cross-Metric Formulas", desc: "Create KPIs like: (Installs from Top 10 KWs) / (Total Installs). Identify exactly how reliant you are on specific keywords." },
                            { icon: <Filter size={22} />, title: "Dimensional Slicing", desc: "Filter any KPI by OS, country, device type, or keyword tier. See how your 'Organic Lift' differs between iOS and Android." },
                            { icon: <Activity size={22} />, title: "Anomaly Detection", desc: "Our system automatically flags when a KPI deviates from its historical norm. No more finding out about a ranking drop 3 days later." },
                            { icon: <Target size={22} />, title: "Goal Tracking", desc: "Set targets for custom KPIs (e.g., 'Reach 5% Category SOV by Q3'). We track your progress and project estimated completion dates." },
                            { icon: <PieChart size={22} />, title: "Cohort Comparison", desc: "Compare KPI performance across different time cohorts. Did the users who installed during your last metadata update retain better?" },
                            { icon: <Shield size={22} />, title: "Data Deduplication", desc: "Automatically merges Apple and Google's overlapping attribution data into a single, clean source of truth for your reports." },
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
            {/* SECTION 6: CONTACT / CTA                   */}
            {/* ========================================== */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Get Started</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2 mb-6">
                                Ready for <span className="text-[#00CFB8]">Accurate</span> ASO Measurement?
                            </h2>
                            <p className="text-gray-600 mb-10">
                                Stop exporting CSVs and building fragile Excel formulas. Let us show you the AppOptimax KPI dashboard tailored specifically to your app's funnel.
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
                                    <div><h4 className="font-semibold text-gray-800">Schedule a Call</h4><p className="text-gray-500 text-sm">Book a 15-min KPI walkthrough</p></div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div className="bg-[#f4f7fb] p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <h3 className="text-xl font-bold text-[#002855] mb-2">Request Custom KPI Setup</h3>
                            <p className="text-gray-500 text-sm mb-6">We'll build a dashboard with your top 5 most critical ASO KPIs for free.</p>
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
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Your App Store URL</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#00CFB8] focus:border-transparent outline-none transition-all bg-white" placeholder="https://apps.apple.com/app/..." />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Biggest Measurement Challenge?</label>
                                    <textarea rows="3" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#00CFB8] focus:border-transparent outline-none transition-all resize-none bg-white" placeholder="e.g., We can't tell if our Apple Search Ads are cannibalizing our organic growth..."></textarea>
                                </div>
                                <button type="submit" className="w-full bg-[#00CFB8] text-white font-medium py-3.5 rounded-lg hover:bg-[#00B5A0] transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#00CFB8]/20">
                                    Get My Custom KPIs <ArrowUpRight size={18} />
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
                        If You Can't Measure It, You Can't Improve It.
                    </h2>
                    <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                        Stop guessing if your ASO is working. Get the exact KPIs that prove organic revenue impact.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/contact" className="px-8 py-4 bg-[#00CFB8] text-white font-medium rounded-lg hover:bg-[#00B5A0] transition-colors shadow-lg shadow-[#00CFB8]/20 flex items-center gap-2">
                            Build My KPI Dashboard <ArrowRight size={18} />
                        </Link>
                        <Link href="/chapters/analytic-data" className="px-8 py-4 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                            ← Back to Analytic Data
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default KPIData;
