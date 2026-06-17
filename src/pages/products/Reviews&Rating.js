'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    MessageSquare, Star, TrendingUp, Smile, Bot, BarChart2, 
    Users, Flag, ArrowRight, CheckCircle2, Apple, Play, 
    Filter, Sparkles, Lightbulb, Check, ChevronDown, Zap, Activity 
} from 'lucide-react';
import Link from 'next/link';

// --- Configuration ---
const primaryColor = '#002855';
const accentColor = '#00CFB8';

// --- Mock Data ---
const reviewsData = [
    { id: 1, user: "Sarah Jenkins", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d", rating: 5, date: "2h ago", text: "Absolutely love the new dark mode! It makes tracking my sleep so much easier at night. Great work team.", sentiment: "positive", platform: "ios", replied: false },
    { id: 2, user: "Mike Ross", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d", rating: 2, date: "5h ago", text: "App crashes every time I try to export my PDF reports on Android 14. Please fix this ASAP.", sentiment: "negative", platform: "android", replied: false },
    { id: 3, user: "Elena Gilbert", avatar: "https://i.pravatar.cc/150?u=a04258114e29026302d", rating: 4, date: "1d ago", text: "Solid app, but I wish the calorie counting database had more generic brands. Otherwise very helpful.", sentiment: "neutral", platform: "ios", replied: true },
    { id: 4, user: "David Chen", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d", rating: 5, date: "1d ago", text: "The best workout planner I've used. The AI suggestions are surprisingly accurate for my fitness level.", sentiment: "positive", platform: "android", replied: false },
    { id: 5, user: "Jessica P.", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026702d", rating: 1, date: "2d ago", text: "Subscription is too expensive for what it offers. Cancelled immediately.", sentiment: "negative", platform: "ios", replied: false },
    { id: 6, user: "Tom Hardy", avatar: "https://i.pravatar.cc/150?u=a04258114e29026301d", rating: 3, date: "3d ago", text: "It's okay. A bit buggy when syncing with my smartwatch.", sentiment: "neutral", platform: "android", replied: true },
];

const stats = [
    { value: "4.8", label: "Avg Rating", sub: "Last 30 Days" },
    { value: "12.5k", label: "New Reviews", sub: "Total Processed" },
    { value: "98%", label: "Response Rate", sub: "Industry Avg: 45%" },
    { value: "+24%", label: "Rating Change", sub: "vs Previous Month" },
];

const features = [
    { icon: <MessageSquare size={24} />, title: "Unified Inbox", desc: "Combine App Store and Google Play reviews into a single, streamlined workflow." },
    { icon: <Smile size={24} />, title: "AI Sentiment Analysis", desc: "Automatically tag reviews as Positive, Negative, or Neutral to prioritize responses." },
    { icon: <Bot size={24} />, title: "Smart Auto-Replies", desc: "Use GPT-powered templates to draft personalized responses instantly." },
    { icon: <BarChart2 size={24} />, title: "Topic Extraction", desc: "Automatically detect keywords like 'login bug' or 'subscription price' to spot trends." },
    { icon: <Users size={24} />, title: "Competitor Monitoring", desc: "Spy on competitor reviews to find their weaknesses and win their users." },
    { icon: <Flag size={24} />, title: "Spam Filtering", desc: "Automatically hide or flag bot-generated 1-star reviews for reporting." },
];

// --- Helper Functions ---
const getSentimentColor = (sentiment) => {
    if (sentiment === 'positive') return 'text-[#00CFB8] bg-[#00CFB8]/10 border-[#00CFB8]/20';
    if (sentiment === 'negative') return 'text-red-400 bg-red-400/10 border-red-400/20';
    return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20';
};

const getSentimentLabel = (sentiment) => {
    return sentiment.charAt(0).toUpperCase() + sentiment.slice(1);
};

// --- Animation Variants ---
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const ReviewsAndRatings = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [activeTab, setActiveTab] = useState('sentiment');

    // Filter logic
    const filteredReviews = reviewsData.filter(r => {
        if (activeFilter === 'all') return true;
        if (activeFilter === 'unreplied') return !r.replied;
        return r.sentiment === activeFilter;
    });

    return (
        <div className="bg-[#f4f7fb] min-h-screen">
            
            {/* ========================================== */}
            {/* HERO SECTION                               */}
            {/* ========================================== */}
            <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center bg-[#002855]">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-20 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop" 
                        alt="Reviews Dashboard" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#002855] via-[#002855]/90 to-[#002855]/60 z-0" />
                
                <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        
                        {/* Hero Content */}
                        <motion.div 
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                        >
                            <motion.div variants={fadeInUp}>
                                <span className="inline-block px-4 py-2 bg-[#00CFB8]/20 border border-[#00CFB8]/40 rounded-full text-sm text-[#00CFB8] mb-6 font-medium">
                                    ASO Module — Reviews & Ratings
                                </span>
                            </motion.div>

                            <motion.h1 
                                variants={fadeInUp}
                                className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]"
                            >
                                Turn Feedback Into <br />
                                <span className="text-[#00CFB8]">Product Growth</span>
                            </motion.h1>

                            <motion.p 
                                variants={fadeInUp}
                                className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl"
                            >
                                Monitor, analyze, and reply to App Store & Google Play reviews from one dashboard. Uncover user pain points and boost your app's reputation score.
                            </motion.p>

                            <motion.div 
                                variants={fadeInUp}
                                className="flex flex-wrap gap-4"
                            >
                                <Link href="/contact" className="px-8 py-3.5 bg-[#00CFB8] text-white font-medium rounded-lg hover:bg-[#00B5A0] transition-colors flex items-center gap-2 shadow-lg shadow-[#00CFB8]/20">
                                    Start Tracking Reviews <ArrowRight size={18} />
                                </Link>
                                <Link href="#demo" className="px-8 py-3.5 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm">
                                    View Demo
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Hero Visual */}
                        <motion.div
                            className="relative h-[500px] hidden lg:block"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {/* Floating Card 1: Rating Velocity */}
                            <motion.div 
                                className="absolute right-0 top-10 w-[80%] bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl z-10"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="text-white font-bold text-sm">Rating Velocity</h4>
                                    <span className="text-[#00CFB8] text-sm font-bold">+14% vs MoM</span>
                                </div>
                                <div className="flex items-end gap-2 h-32">
                                    {[40, 60, 45, 70, 55, 85, 65, 90, 75, 95].map((h, i) => (
                                        <div key={i} className="flex-1 bg-[#00CFB8]/50 rounded-t-sm hover:bg-[#00CFB8] transition-all duration-300" style={{ height: `${h}%` }}></div>
                                    ))}
                                </div>
                                <div className="flex justify-between text-xs text-gray-400 mt-2">
                                    <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span>
                                </div>
                            </motion.div>

                            {/* Floating Card 2: Notification */}
                            <motion.div 
                                className="absolute left-0 bottom-20 w-[70%] bg-[#002855]/80 border border-[#00CFB8]/30 p-6 rounded-2xl shadow-2xl z-20"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#00CFB8]/20 flex items-center justify-center flex-shrink-0">
                                        <MessageSquare size={20} className="text-[#00CFB8]" />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium text-sm mb-1">New Negative Review</p>
                                        <p className="text-gray-400 text-xs">"Crashing on startup..." • Google Play</p>
                                        <button className="mt-3 text-xs bg-[#00CFB8] text-white px-3 py-1.5 rounded hover:bg-[#00B5A0] transition-colors">Draft Reply</button>
                                    </div>
                                </div>
                            </motion.div>
                            
                            <div className="absolute -bottom-10 right-20 w-40 h-40 bg-[#00CFB8]/20 rounded-full blur-3xl z-0"></div>
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
            {/* INTERACTIVE DEMO                           */}
            {/* ========================================== */}
            <section id="demo" className="py-24 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div 
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Live Preview</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2 mb-4">
                            Intelligent Review Management
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Stop switching between tabs. Manage your reputation across App Store and Google Play in one place.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden max-w-6xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Toolbar */}
                        <div className="bg-[#002855] px-6 py-4 flex flex-wrap items-center justify-between gap-4 sticky top-0 z-20">
                            <div className="flex gap-2">
                                {['all', 'positive', 'negative', 'unreplied'].map((filter) => (
                                    <button
                                        key={filter}
                                        onClick={() => setActiveFilter(filter)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all capitalize flex items-center gap-2 ${
                                            activeFilter === filter 
                                            ? 'bg-[#00CFB8] text-white shadow-lg' 
                                            : 'bg-white/10 text-gray-300 hover:bg-white/20'
                                        }`}
                                    >
                                        <Filter size={14} />
                                        {filter === 'all' ? 'All Reviews' : filter}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Reviews List */}
                        <div className="max-h-[600px] overflow-y-auto custom-scrollbar">
                            <AnimatePresence mode="popLayout">
                                {filteredReviews.map((review) => (
                                    <motion.div
                                        key={review.id}
                                        layout
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="p-6 border-b border-gray-100 hover:bg-gray-50 transition-colors group last:border-0"
                                    >
                                        <div className="flex justify-between items-start mb-3">
                                            <div className="flex items-center gap-3">
                                                <img src={review.avatar} alt={review.user} className="w-10 h-10 rounded-full border border-gray-200" />
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <h4 className="font-bold text-[#002855] text-sm">{review.user}</h4>
                                                        <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded border ${getSentimentColor(review.sentiment)}`}>
                                                            {getSentimentLabel(review.sentiment)}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <div className="flex text-yellow-400">
                                                            {[...Array(5)].map((_, i) => (
                                                                <Star key={i} size={12} className={i < review.rating ? "fill-current" : "text-gray-300"} />
                                                            ))}
                                                        </div>
                                                        <span className="text-xs text-gray-400">{review.date}</span>
                                                        <span className="text-xs text-gray-300">•</span>
                                                        <span className="text-xs text-gray-500 capitalize flex items-center gap-1">
                                                            {review.platform === 'ios' ? <Apple size={10} /> : <Play size={10} />}
                                                            {review.platform}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {review.replied ? (
                                                <span className="text-xs font-medium text-[#00CFB8] bg-[#00CFB8]/10 px-3 py-1 rounded-full flex items-center gap-1">
                                                    <Check size={12} /> Replied
                                                </span>
                                            ) : (
                                                <button className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-semibold text-[#002855] border border-[#002855] px-3 py-1.5 rounded hover:bg-[#002855] hover:text-white">
                                                    Reply
                                                </button>
                                            )}
                                        </div>
                                        
                                        <p className="text-gray-600 text-sm leading-relaxed pl-13">
                                            "{review.text}"
                                        </p>

                                        {!review.replied && review.sentiment === 'negative' && (
                                            <div className="mt-3 pl-13">
                                                <button className="text-xs text-[#00CFB8] hover:underline flex items-center gap-1 font-medium">
                                                    <Sparkles size={12} /> Generate AI Reply
                                                </button>
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </motion.div>
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
                            Features That <span className="text-[#00CFB8]">Build Trust</span>
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
            {/* SENTIMENT ANALYSIS VISUAL                  */}
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
                                Don't Just Read Reviews. <br />
                                <span className="text-[#00CFB8]">Understand Them.</span>
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Our NLP engine analyzes thousands of reviews to detect sentiment trends and topic clusters. Know exactly why your rating dropped or which feature drove that 5-star spike.
                            </p>
                            
                            <ul className="space-y-4">
                                {['Track sentiment over time', 'Identify top keywords mentioned', 'Filter by app version', 'Compare sentiment vs competitors'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-200">
                                        <div className="w-6 h-6 rounded-full bg-[#00CFB8]/20 flex items-center justify-center text-[#00CFB8] flex-shrink-0">
                                            <Check size={14} />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div 
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="text-lg font-bold mb-6">Sentiment Breakdown</h3>
                            
                            {/* Custom Bar Chart */}
                            <div className="space-y-6 mb-10">
                                {[
                                    { label: "Positive", percent: 72, color: "bg-[#00CFB8]" },
                                    { label: "Neutral", percent: 18, color: "bg-yellow-500" },
                                    { label: "Negative", percent: 10, color: "bg-red-400" },
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-gray-300">{item.label}</span>
                                            <span className="font-bold">{item.percent}%</span>
                                        </div>
                                        <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                                            <motion.div 
                                                className={`h-full ${item.color} rounded-full`}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${item.percent}%` }}
                                                transition={{ duration: 1, delay: i * 0.2 }}
                                            ></motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-8 border-t border-white/10">
                                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Top Keywords This Week</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["UI Design", "Dark Mode", "Price", "Sync", "Notifications"].map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white border border-white/5 hover:bg-[#00CFB8]/20 transition-colors cursor-default">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* COMPETITOR INTELLIGENCE                    */}
            {/* ========================================== */}
            <section className="py-24 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div 
                        className="bg-white rounded-2xl shadow-xl overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="grid md:grid-cols-2">
                            <div className="p-10 md:p-16 flex flex-col justify-center order-2 md:order-1">
                                <span className="text-[#00CFB8] font-bold uppercase tracking-wider text-sm mb-4">Competitor Intel</span>
                                <h2 className="text-3xl font-bold text-[#002855] mb-6">
                                    Win Over Unhappy Users
                                </h2>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    Monitor competitor reviews to find what users hate about their apps. If users complain about missing features or bugs in competing apps, that's your golden opportunity to market your solution.
                                </p>
                                <Link href="/contact" className="w-fit px-6 py-3 border border-[#002855] text-[#002855] font-medium rounded-lg hover:bg-[#002855] hover:text-white transition-all flex items-center gap-2 group">
                                    Analyze Competitors <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                                </Link>
                            </div>
                            <div className="bg-[#002855] p-10 md:p-16 flex items-center justify-center relative overflow-hidden order-1 md:order-2">
                                <div className="absolute inset-0 opacity-10">
                                    <Activity size={300} className="text-white" />
                                </div>
                                <div className="relative z-10 space-y-6 w-full max-w-sm">
                                    <div className="text-center">
                                        <p className="text-gray-400 text-sm mb-1">Your App Rating</p>
                                        <p className="text-5xl font-bold text-white mb-2">4.8 <Star size={24} className="text-[#00CFB8] inline mb-2 fill-current" /></p>
                                        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full bg-[#00CFB8] w-[96%]"></div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-4 py-4">
                                        <div className="flex-1 text-center border-t border-b border-white/10 py-2">
                                            <p className="text-gray-400 text-xs">Competitor A</p>
                                            <p className="text-white font-bold">4.2</p>
                                        </div>
                                        <div className="flex-1 text-center border-t border-b border-white/10 py-2">
                                            <p className="text-gray-400 text-xs">Competitor B</p>
                                            <p className="text-white font-bold">3.9</p>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-[#00CFB8]/20 p-4 rounded-lg border border-[#00CFB8]/20">
                                        <div className="flex items-start gap-3">
                                            <Lightbulb className="text-[#00CFB8] mt-1 flex-shrink-0" />
                                            <div>
                                                <p className="text-[#00CFB8] font-bold text-sm">Insight</p>
                                                <p className="text-white text-xs">Users complaining about "Crash on Login" in Competitor A. Highlight your stability.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
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
                        Ready to Improve Your Ratings?
                    </motion.h2>
                    <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto">
                        Join thousands of app developers using AppOptimax to turn user feedback into 5-star experiences.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#00CFB8] text-white font-bold rounded-lg hover:bg-[#00B5A0] transition-colors shadow-lg shadow-[#00CFB8]/20">
                        Get Started Free <ArrowRight size={18} />
                    </Link>
                </div>
            </section>

            {/* Simple Footer for page completeness */}
            <footer className="bg-[#002855] py-10 text-center border-t border-white/10">
                <p className="text-gray-400 text-sm">© 2024 AppOptimax Inc. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default ReviewsAndRatings;