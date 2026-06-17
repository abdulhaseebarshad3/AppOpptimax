import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, TrendingUp, BarChart3, Target, ArrowRight, Mail, Phone, MapPin, Zap, Filter, Trophy, Sparkles, CheckCircle2, ArrowUpRight, Brain, Eye, GitCompareArrows, Activity, Radar, Shield, Layers, ChevronRight, Fingerprint, Crosshair, Users } from 'lucide-react';
import Link from 'next/link';

const CompHeroImg = 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop';
const CompDashboardImg = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop';
const CompTechImg = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2072&auto=format&fit=crop';

const CompetitorAnalysis = () => {

    const [activeVenn, setActiveVenn] = useState(null);

    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
    };

    // Venn Diagram Data
    const vennData = {
        you: { title: "Your Keywords", count: 85, desc: "Keywords you currently rank in the top 10 for. This is your existing organic footprint.", color: "#00CFB8" },
        them: { title: "Competitor Keywords", count: 142, desc: "Keywords your competitor ranks in the top 10 for. This is their organic footprint.", color: "#ef4444" },
        gap: { title: "The Opportunity Gap", count: 57, desc: "Keywords your competitor ranks for that you DON'T. These are your highest-ROI optimization targets—proven to drive traffic in your category.", color: "#f59e0b" },
    };

    // Metadata Diff Data
    const metadataDiff = [
        {
            field: "Title",
            you: "FitPro - Fitness Tracker",
            them: "FitPro - Workout & Health Planner",
            missing: ["workout", "health", "planner"],
            gained: ["tracker"]
        },
        {
            field: "Subtitle",
            you: "Your Daily Health Buddy",
            them: "Calorie Counter & Exercise Log",
            missing: ["calorie", "counter", "exercise", "log"],
            gained: ["daily", "buddy"]
        },
        {
            field: "Keyword Field",
            you: "fitness, health, step, weight, gym...",
            them: "workout, calories, hiit, yoga, routine...",
            missing: ["workout", "calories", "hiit", "yoga", "routine"],
            gained: ["fitness", "health"]
        }
    ];

    // Radar Feature Data (normalized 0-100 for SVG mapping)
    const radarFeatures = [
        { label: "Workout Plans", you: 90, them: 60 },
        { label: "Calorie Tracking", you: 40, them: 95 },
        { label: "Social Features", you: 80, them: 70 },
        { label: "Device Sync", you: 30, them: 85 },
        { label: "Live Classes", you: 10, them: 90 },
        { label: "Offline Mode", you: 95, them: 20 },
    ];

    // Capabilities
    const capabilities = [
        { icon: <GitCompareArrows size={28} />, title: "Side-by-Side Metadata Diff", desc: "Instantly compare your title, subtitle, and keyword field against any competitor. See exactly which words they're using that you're missing.", tag: "Core" },
        { icon: <Crosshair size={28} />, title: "Keyword Gap Analysis", desc: "The Venn diagram of your keywords vs. theirs. We isolate the 'Gap Zone' — keywords they rank for that you don't — sorted by volume and difficulty.", tag: "Strategy" },
        { icon: <Brain size={28} />, title: "Feature Extraction NLP", desc: "Our AI reads their description and reviews to extract the core features they emphasize. Find out if you're missing a feature that the market expects.", tag: "Intelligence" },
        { icon: <Activity size={28} />, title: "Review Velocity Tracking", desc: "Track how many new reviews competitors get per week. A competitor gaining 50 reviews/week will outrank you regardless of keyword optimization.", tag: "Momentum" },
        { icon: <Radar size={28} />, title: "Category Positioning Map", desc: "See how you and your competitors compare across key app attributes (features, pricing model, target audience) plotted on a visual radar chart.", tag: "Positioning" },
        { icon: <Users size={28} />, title: "Shared Audience Analysis", desc: "Identify apps that share your target audience but aren't direct competitors. These 'adjacent apps' often hold untapped keyword opportunities.", tag: "Discovery" },
    ];

    // Workflow
    const steps = [
        { step: "01", title: "Select Competitors", desc: "Enter up to 10 competitor app URLs or let our AI auto-detect the top-ranking apps for your target keywords." },
        { step: "02", title: "Run the Analysis", desc: "Our engine scrapes their metadata, extracts features, pulls keyword rankings, and calculates review velocity — all in under 30 seconds." },
        { step: "03", title: "Find the Gaps", desc: "Review the Keyword Gap Venn, Metadata Diff, and Feature Radar to identify exactly where you're falling behind." },
        { step: "04", title: "Close the Gaps", desc: "Export the gap keywords directly to your metadata editor. Update your description to cover missing features. Track the ranking impact." },
    ];

    // Stats
    const stats = [
        { value: "10", label: "Competitors Tracked Simultaneously" },
        { value: "57", label: "Avg. Keyword Gaps Found Per App" },
        { value: "< 30s", label: "Full Analysis Speed" },
        { value: "4.2×", label: "Faster Gap Closing vs. Manual" },
    ];

    // Helper for Radar Chart
    const getRadarPoints = (data, cx, cy, r) => {
        const angles = data.map((_, i) => (Math.PI * 2 * i) / data.length - Math.PI / 2);
        return data.map((item, i) => {
            const x = cx + r * (item / 100) * Math.cos(angles[i]);
            const y = cy + r * (item / 100) * Math.sin(angles[i]);
            return `${x},${y}`;
        }).join(' ');
    };

    return (
        <div className="bg-[#f4f7fb] min-h-screen">

            {/* ========================================== */}
            {/* HERO — "VS" Split Theme                   */}
            {/* ========================================== */}
            <section className="relative min-h-screen w-full overflow-hidden flex items-center">
                <motion.div className="absolute inset-0" initial={{ scale: 1.15 }} animate={{ scale: 1 }} transition={{ duration: 1.8, ease: "easeOut" }}>
                    <img src={CompHeroImg} alt="Competitor Intelligence Dashboard" className="w-full h-full object-cover" />
                </motion.div>

                <div className="absolute inset-0 bg-[#002855]/95" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002855] via-transparent to-[#002855]/50" />
                
                {/* Abstract VS Background Element */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
                    <div className="w-[600px] h-[600px] rounded-full border-[40px] border-[#00CFB8] -translate-x-1/4 border-r-transparent" />
                    <div className="absolute w-[600px] h-[600px] rounded-full border-[40px] border-red-500 translate-x-1/4 border-l-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
                    <div className="text-center max-w-4xl mx-auto">
                        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                            <span className="inline-block px-4 py-2 bg-[#00CFB8]/20 border border-[#00CFB8]/40 rounded-full text-sm text-[#00CFB8] mb-6 font-medium">
                                ASO Module — Competitor Analysis
                            </span>
                        </motion.div>

                        <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
                            Know What They Rank For.<br />
                            <span className="text-[#00CFB8]">Rank Where They Don't.</span>
                        </motion.h1>

                        <motion.p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
                            Stop guessing what keywords to target. AppOptimax shows you exactly which keywords your competitors rank for that you don't — and hands you the list to close the gap.
                        </motion.p>

                        <motion.div className="flex flex-wrap justify-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
                            <Link href="/contact" className="px-8 py-3.5 bg-[#00CFB8] text-white font-medium rounded-lg hover:bg-[#00B5A0] transition-colors flex items-center gap-2 shadow-lg shadow-[#00CFB8]/20">
                                Analyze Competitors Free <ArrowRight size={18} />
                            </Link>
                            <Link href="#gaps" className="px-8 py-3.5 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm">
                                See the Gap Analysis
                            </Link>
                        </motion.div>

                        <motion.div className="flex flex-wrap justify-center gap-12 mt-16 pt-8 border-t border-white/10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1 }}>
                            {stats.map((stat, i) => (
                                <div key={i}>
                                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider mt-1 max-w-[150px]">{stat.label}</p>
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
            {/* SECTION 1: VENN DIAGRAM / GAP EXPLORER    */}
            {/* ========================================== */}
            <section id="gaps" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Core Concept</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2 mb-4">
                            The Keyword <span className="text-[#00CFB8]">Opportunity Gap</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            70% of ASO gains don't come from finding new keywords — they come from closing the gap between you and your competitors. Click the zones to explore.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Interactive Venn Visual */}
                        <motion.div 
                            className="relative flex items-center justify-center h-[400px]"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* You Circle */}
                            <button 
                                onClick={() => setActiveVenn(activeVenn === 'you' ? null : 'you')}
                                className={`absolute w-52 h-52 rounded-full flex flex-col items-center justify-center transition-all duration-300 border-2 cursor-pointer ${activeVenn === 'you' ? 'border-[#00CFB8] bg-[#00CFB8]/10 z-20 scale-110' : 'border-[#00CFB8]/30 bg-[#00CFB8]/5 z-10 hover:bg-[#00CFB8]/10'}`}
                                style={{ left: '10%', top: '15%' }}
                            >
                                <p className="text-3xl font-bold text-[#00CFB8]">85</p>
                                <p className="text-xs text-[#00CFB8] font-semibold mt-1">Your Keywords</p>
                            </button>

                            {/* Them Circle */}
                            <button 
                                onClick={() => setActiveVenn(activeVenn === 'them' ? null : 'them')}
                                className={`absolute w-52 h-52 rounded-full flex flex-col items-center justify-center transition-all duration-300 border-2 cursor-pointer ${activeVenn === 'them' ? 'border-red-500 bg-red-500/10 z-20 scale-110' : 'border-red-500/30 bg-red-500/5 z-10 hover:bg-red-500/10'}`}
                                style={{ right: '10%', top: '15%' }}
                            >
                                <p className="text-3xl font-bold text-red-500">142</p>
                                <p className="text-xs text-red-500 font-semibold mt-1">Competitor KWs</p>
                            </button>

                            {/* Gap Zone (Clickable area in center) */}
                            <button 
                                onClick={() => setActiveVenn(activeVenn === 'gap' ? null : 'gap')}
                                className={`absolute w-32 h-32 rounded-full flex flex-col items-center justify-center transition-all duration-300 z-30 cursor-pointer ${activeVenn === 'gap' ? 'bg-[#f59e0b] text-white scale-110' : 'bg-[#f59e0b]/10 text-[#f59e0b] hover:bg-[#f59e0b]/20'}`}
                                style={{ left: '50%', top: '45%', transform: 'translate(-50%, -50%)' }}
                            >
                                <p className="text-2xl font-bold">57</p>
                                <p className="text-[10px] font-bold uppercase">Gaps</p>
                            </button>
                        </motion.div>

                        {/* Info Panel */}
                        <div className="min-h-[300px]">
                            <AnimatePresence mode="wait">
                                {activeVenn ? (
                                    <motion.div
                                        key={activeVenn}
                                        className={`h-full rounded-2xl border p-8 ${activeVenn === 'you' ? 'bg-[#00CFB8]/5 border-[#00CFB8]/20' : activeVenn === 'them' ? 'bg-red-50 border-red-200' : 'bg-[#f59e0b]/5 border-[#f59e0b]/20'}`}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                    >
                                        <h3 className="text-2xl font-bold mb-3" style={{ color: vennData[activeVenn].color }}>{vennData[activeVenn].title}</h3>
                                        <p className="text-gray-600 leading-relaxed mb-4">{vennData[activeVenn].desc}</p>
                                        
                                        {activeVenn === 'gap' && (
                                            <div className="bg-white rounded-xl p-4 border border-[#f59e0b]/20 shadow-sm">
                                                <p className="text-xs font-bold text-gray-500 uppercase mb-2">Example Gaps Found:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {["calorie counter", "workout planner", "hiit exercises", "meal prep", "progress tracker"].map(kw => (
                                                        <span key={kw} className="bg-[#f59e0b]/10 text-[#f59e0b] px-3 py-1 rounded-full text-xs font-semibold">{kw}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        {activeVenn === 'you' && (
                                            <p className="text-sm text-[#00CFB8] font-medium flex items-center gap-2"><CheckCircle2 size={16} /> You're strong here. Maintain these positions.</p>
                                        )}
                                        {activeVenn === 'them' && (
                                            <p className="text-sm text-red-500 font-medium flex items-center gap-2"><Target size={16} /> These are the keywords stealing your potential installs.</p>
                                        )}
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="default"
                                        className="h-full bg-[#f4f7fb] rounded-2xl border border-gray-100 p-8 flex flex-col justify-center"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <Eye size={32} className="text-gray-300 mb-4" />
                                        <h3 className="text-xl font-bold text-[#002855] mb-2">Click a Zone</h3>
                                        <p className="text-gray-500 text-sm">Explore your keyword footprint, your competitor's footprint, and the critical gap between them.</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* SECTION 2: METADATA DIFF TOOL             */}
            {/* ========================================== */}
            <section className="py-24 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Interactive Preview</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2 mb-4">
                            Metadata Diff: <span className="text-[#00CFB8]">You vs. Them</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            See exactly which words your competitor put in their title and subtitle that you missed. Every missing word is a missed ranking signal.
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {metadataDiff.map((item, i) => (
                            <motion.div
                                key={i}
                                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 overflow-hidden"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-100">
                                    <GitCompareArrows size={18} className="text-[#002855]" />
                                    <h4 className="text-lg font-bold text-[#002855]">{item.field}</h4>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    {/* You */}
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-[#00CFB8]" /> Your App
                                        </p>
                                        <p className="text-lg font-semibold text-[#002855] bg-[#f4f7fb] p-4 rounded-lg border border-gray-100">
                                            {item.you.split(' ').map((word, idx) => 
                                                item.gained.includes(word.toLowerCase()) ? 
                                                    <span key={idx} className="text-[#00CFB8] bg-[#00CFB8]/10 px-1 rounded">{word} </span> : 
                                                    <span key={idx}>{word} </span>
                                            )}
                                        </p>
                                    </div>

                                    {/* Them */}
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-red-500" /> Competitor
                                        </p>
                                        <p className="text-lg font-semibold text-[#002855] bg-[#f4f7fb] p-4 rounded-lg border border-gray-100">
                                            {item.them.split(' ').map((word, idx) => 
                                                item.missing.includes(word.toLowerCase()) ? 
                                                    <span key={idx} className="text-red-500 bg-red-50 px-1 rounded">{word} </span> : 
                                                    <span key={idx}>{word} </span>
                                            )}
                                        </p>
                                    </div>
                                </div>

                                {/* Missing Alert */}
                                <motion.div 
                                    className="mt-4 bg-red-50 border border-red-100 rounded-lg p-3 flex items-start gap-3"
                                    initial={{ opacity: 0, height: 0 }}
                                    whileInView={{ opacity: 1, height: 'auto' }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                >
                                    <Zap size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm font-bold text-red-600">You're missing: {item.missing.join(', ')}</p>
                                        <p className="text-xs text-red-400 mt-0.5">These terms are proven ranking drivers in your category. Consider integrating them into your next metadata update.</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* SECTION 3: FEATURE RADAR CHART            */}
            {/* ========================================== */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        
                        {/* Text */}
                        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6 order-2 lg:order-1">
                            <motion.div variants={fadeInUp}>
                                <span className="inline-block bg-[#00CFB8]/10 text-[#00CFB8] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-[#00CFB8]/20">
                                    Feature Extraction
                                </span>
                            </motion.div>
                            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-[#002855] leading-tight">
                                Are You Missing <br />
                                <span className="text-[#00CFB8]">Expected Features?</span>
                            </motion.h2>
                            <motion.p variants={fadeInUp} className="text-gray-600 text-sm leading-relaxed">
                                App store algorithms don't just read keywords — they analyze which features are mentioned in your description and compare them to search queries. If every top 10 app mentions "Calorie Tracking" and you don't, you lose semantic relevance for that keyword.
                            </motion.p>
                            
                            <motion.div variants={fadeInUp} className="space-y-3 pt-4">
                                {radarFeatures.map((feat, i) => {
                                    const diff = feat.you - feat.them;
                                    return (
                                        <div key={i} className="flex items-center justify-between p-3 bg-[#f4f7fb] rounded-lg border border-gray-100">
                                            <span className="text-sm font-medium text-[#002855] w-36">{feat.label}</span>
                                            <div className="flex items-center gap-3">
                                                <span className="text-xs font-bold w-8 text-right text-[#00CFB8]">{feat.you}</span>
                                                <div className="w-24 h-1.5 bg-gray-200 rounded-full overflow-hidden flex relative">
                                                    <div className="h-full bg-[#00CFB8] rounded-full" style={{ width: `${feat.you}%` }} />
                                                    <div className="absolute top-0 h-full w-0.5 bg-red-500" style={{ left: `${feat.them}%` }} />
                                                </div>
                                                <span className="text-xs font-bold w-8 text-right text-red-400">{feat.them}</span>
                                                <span className={`text-[10px] font-bold w-12 text-right ${diff >= 0 ? 'text-[#00CFB8]' : 'text-red-400'}`}>
                                                    {diff >= 0 ? `+${diff}` : diff}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </motion.div>
                            <p className="text-xs text-gray-400 flex items-center gap-2">
                                <div className="w-3 h-0.5 bg-[#00CFB8] rounded" /> You &nbsp;|&nbsp; <div className="w-3 h-0.5 bg-red-500 rounded" /> Competitor
                            </p>
                        </motion.div>

                        {/* Radar SVG */}
                        <motion.div className="order-1 lg:order-2 flex justify-center" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                            <div className="relative w-full max-w-md aspect-square">
                                <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-2xl">
                                    {/* Grid Lines */}
                                    {[20, 40, 60, 80, 100].map((scale) => (
                                        <polygon
                                            key={scale}
                                            points={getRadarPoints(radarFeatures.map(() => scale), 200, 200, 160)}
                                            fill="none"
                                            stroke="#e5e7eb"
                                            strokeWidth="1"
                                        />
                                    ))}
                                    
                                    {/* Axis Lines */}
                                    {radarFeatures.map((_, i) => {
                                        const angle = (Math.PI * 2 * i) / radarFeatures.length - Math.PI / 2;
                                        const x = 200 + 160 * Math.cos(angle);
                                        const y = 200 + 160 * Math.sin(angle);
                                        return <line key={i} x1="200" y1="200" x2={x} y2={y} stroke="#e5e7eb" strokeWidth="1" />;
                                    })}

                                    {/* Labels */}
                                    {radarFeatures.map((feat, i) => {
                                        const angle = (Math.PI * 2 * i) / radarFeatures.length - Math.PI / 2;
                                        const x = 200 + 190 * Math.cos(angle);
                                        const y = 200 + 190 * Math.sin(angle);
                                        return (
                                            <text key={i} x={x} y={y} textAnchor="middle" dominantBaseline="middle" className="text-[10px] font-semibold fill-[#002855]">
                                                {feat.label}
                                            </text>
                                        );
                                    })}

                                    {/* Competitor Polygon (Draw first so it's behind) */}
                                    <motion.polygon
                                        points={getRadarPoints(radarFeatures.map(f => f.them), 200, 200, 160)}
                                        fill="rgba(239, 68, 68, 0.1)"
                                        stroke="#ef4444"
                                        strokeWidth="2"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5, duration: 0.8 }}
                                    />

                                    {/* Your Polygon */}
                                    <motion.polygon
                                        points={getRadarPoints(radarFeatures.map(f => f.you), 200, 200, 160)}
                                        fill="rgba(0, 207, 184, 0.15)"
                                        stroke="#00CFB8"
                                        strokeWidth="2"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3, duration: 0.8 }}
                                    />
                                </svg>

                                {/* Legend */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-6 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-100">
                                    <div className="flex items-center gap-2 text-xs font-semibold text-[#002855]"><div className="w-3 h-3 rounded-sm bg-[#00CFB8]/30 border border-[#00CFB8]" /> Your App</div>
                                    <div className="flex items-center gap-2 text-xs font-semibold text-[#002855]"><div className="w-3 h-3 rounded-sm bg-red-500/20 border border-red-500" /> Competitor</div>
                                </div>
                            </div>
                        </motion.div>
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
                            Complete Competitive <span className="text-[#00CFB8]">Intelligence</span>
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
            {/* SECTION 5: REVIEW VELOCITY & IMAGE        */}
            {/* ========================================== */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
                            <div className="rounded-2xl overflow-hidden shadow-xl">
                                <img src={CompDashboardImg} alt="Review Velocity Tracking" className="w-full object-cover" />
                            </div>
                            <motion.div className="absolute -bottom-6 -right-6 w-72 bg-white rounded-xl shadow-xl p-5 z-10 border border-gray-100" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} viewport={{ once: true }}>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs font-bold text-gray-500 uppercase">Review Velocity (30d)</span>
                                    <TrendingUp size={14} className="text-red-500" />
                                </div>
                                <div className="flex items-end gap-4">
                                    <div>
                                        <p className="text-xs text-[#00CFB8]">You</p>
                                        <p className="text-lg font-bold text-[#00CFB8]">12/wk</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-red-500">Comp</p>
                                        <p className="text-lg font-bold text-red-500">64/wk</p>
                                    </div>
                                    <div className="flex-1 flex items-end h-8 gap-1">
                                        {[20, 30, 25, 40, 35, 50, 60, 55, 70, 65, 80].map((h, i) => (
                                            <div key={i} className="flex-1 bg-red-100 rounded-t" style={{ height: `${h}%` }} />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                            <span className="text-sm font-semibold text-red-500 uppercase tracking-wider">
                                <Activity size={14} className="inline mr-1" /> The Hidden Ranking Factor
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-3 mb-6">
                                Keywords Lose to <span className="text-red-400">Review Velocity</span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                You can have perfectly optimized metadata and still lose to a competitor gaining 50 reviews a week. Both App Store and Google Play use review velocity as a strong ranking signal for freshness and popularity.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Our competitor tracker monitors their review velocity, rating trends, and sentiment shifts. If a competitor's velocity spikes, you'll know exactly when — and can adjust your strategy to compensate.
                            </p>
                            
                            <div className="space-y-4">
                                {[
                                    { title: "Weekly Review Count", desc: "Track new reviews per week for up to 10 competitors." },
                                    { title: "Rating Trend Analysis", desc: "See if their rating is trending up, stable, or declining." },
                                    { title: "Sentiment Shift Alerts", desc: "Get notified if a competitor's review sentiment drops (opportunity to capitalize)." },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-[#002855]/10 flex items-center justify-center text-[#002855] mt-0.5 flex-shrink-0">
                                            <CheckCircle2 size={14} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-[#002855]">{item.title}</p>
                                            <p className="text-xs text-gray-500">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
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
                    <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Workflow</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2 mb-4">From Spying to <span className="text-[#00CFB8]">Outranking</span></h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#00CFB8]/20 via-[#00CFB8]/40 to-[#00CFB8]/20"></div>
                        {steps.map((step, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="relative">
                                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow relative z-10 h-full">
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
            {/* SECTION 7: WHY DARK SECTION                */}
            {/* ========================================== */}
            <section className="py-24 bg-[#002855] relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 right-20 w-80 h-80 bg-[#00CFB8] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-80 h-80 bg-red-500 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <motion.span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Why AppOptimax</motion.span>
                        <motion.h2 className="text-3xl md:text-5xl font-bold text-white mt-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                            Intelligence, Not Just Data
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: <Fingerprint size={22} />, title: "Auto-Detection", desc: "Don't know who your competitors are? Enter your app, and we'll automatically identify the top 10 apps competing for your target keywords." },
                            { icon: <GitCompareArrows size={22} />, title: "True Metadata Diffing", desc: "Not a side-by-side view — actual linguistic diffing that highlights exact words and phrases added, removed, or shifted between updates." },
                            { icon: <Zap size={22} />, title: "Update Alerts", desc: "Get notified the moment a competitor changes their title, subtitle, or keyword field. React in hours, not weeks." },
                            { icon: <Layers size={22} />, title: "Historical Snapshots", desc: "We store metadata history for every tracked competitor. See how their strategy evolved over 6, 12, or 24 months." },
                            { icon: <Radar size={22} />, title: "Market Positioning", desc: "Understand where you sit in the competitive landscape. Are you the premium option? The budget option? The features leader?" },
                            { icon: <Shield size={22} />, title: "Ethical & Legal", desc: "We only analyze public app store data — metadata, ratings, and reviews. No SDK injection, no private data access. Fully compliant." },
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
                                Who Are You <span className="text-[#00CFB8]">Losing To?</span>
                            </h2>
                            <p className="text-gray-600 mb-10">
                                Run a free competitive analysis on your app. We'll show you your top 5 competitors, the exact keywords they're stealing from you, and the metadata changes to win them back.
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
                            <h3 className="text-xl font-bold text-[#002855] mb-2">Request Free Competitor Report</h3>
                            <p className="text-gray-500 text-sm mb-6">We'll analyze your top competitors and send you the gap analysis within 24 hours.</p>
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
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Known Competitors (Optional)</label>
                                    <textarea rows="2" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#00CFB8] focus:border-transparent outline-none transition-all resize-none bg-white" placeholder="Paste URLs of competitors you want to track..."></textarea>
                                </div>
                                <button type="submit" className="w-full bg-[#00CFB8] text-white font-medium py-3.5 rounded-lg hover:bg-[#00B5A0] transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#00CFB8]/20">
                                    Get My Free Analysis <ArrowUpRight size={18} />
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
                        Every Gap Keyword is a Stolen Install.
                    </h2>
                    <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                        Find out exactly who's taking your potential users, what keywords they're using to do it, and how to take them back.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/contact" className="px-8 py-4 bg-[#00CFB8] text-white font-medium rounded-lg hover:bg-[#00B5A0] transition-colors shadow-lg shadow-[#00CFB8]/20 flex items-center gap-2">
                            Run Free Competitor Analysis <ArrowRight size={18} />
                        </Link>
                        <Link href="/chapters/suggested-keywords" className="px-8 py-4 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                            ← Back to Suggested Keywords
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default CompetitorAnalysis;