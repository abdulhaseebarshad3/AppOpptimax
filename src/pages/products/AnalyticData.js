'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, LineChart, PieChart, TrendingUp, TrendingDown, Download, 
  Calendar, Filter, RefreshCw, Eye, Clock, Users, Smartphone, 
  Globe, Search, ArrowRight, ArrowUpRight, ChevronRight, Zap, 
  Activity, Target, Layers, GitCompareArrows, Settings, 
  Bell, Mail, FileText, ToggleLeft, ToggleRight, Sparkles, 
  CheckCircle2, AlertCircle, Info, HelpCircle, ExternalLink,
  ArrowDown, ArrowUp, BarChart, PieChart as PieChartIcon, 
  AreaChart, ScatterChart, MoreHorizontal, Maximize2, Share2,
  Copy, Printer, Bookmark, Star,MapPin,Phone
} from 'lucide-react';
import Link from 'next/link';

const AnalyticsImg = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2072&auto=format&fit=crop';
const DashboardImg = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop';
const DataImg = 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2070&auto=format&fit=crop';

const AnalyticData = () => {
  const [activeTab, setActiveTab] = useState('performance');
  const [timeRange, setTimeRange] = useState('30d');
  const [isRealTime, setIsRealTime] = useState(true);
  const [selectedMetric, setSelectedMetric] = useState('downloads');

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  // Sample Performance Data
  const performanceData = [
    { date: 'Jan 1', downloads: 1200, impressions: 45000, conversion: 2.7, rank: 12 },
    { date: 'Jan 8', downloads: 1350, impressions: 48000, conversion: 2.8, rank: 10 },
    { date: 'Jan 15', downloads: 1100, impressions: 42000, conversion: 2.6, rank: 14 },
    { date: 'Jan 22', downloads: 1500, impressions: 52000, conversion: 2.9, rank: 8 },
    { date: 'Jan 29', downloads: 1650, impressions: 55000, conversion: 3.0, rank: 7 },
    { date: 'Feb 5', downloads: 1800, impressions: 58000, conversion: 3.1, rank: 5 },
    { date: 'Feb 12', downloads: 1750, impressions: 56000, conversion: 3.1, rank: 6 },
    { date: 'Feb 19', downloads: 1900, impressions: 61000, conversion: 3.1, rank: 4 },
  ];

  // Keyword Performance Data
  const keywordData = [
    { keyword: 'fitness tracker', rank: 3, volume: 12500, difficulty: 72, trend: 'up', change: 2 },
    { keyword: 'workout planner', rank: 8, volume: 9800, difficulty: 65, trend: 'up', change: 5 },
    { keyword: 'calorie counter', rank: 15, volume: 8200, difficulty: 58, trend: 'down', change: -3 },
    { keyword: 'exercise app', rank: 12, volume: 7600, difficulty: 61, trend: 'up', change: 1 },
    { keyword: 'health monitor', rank: 22, volume: 5400, difficulty: 45, trend: 'stable', change: 0 },
    { keyword: 'step counter', rank: 18, volume: 6100, difficulty: 52, trend: 'down', change: -2 },
    { keyword: 'weight loss', rank: 25, volume: 15200, difficulty: 78, trend: 'up', change: 4 },
    { keyword: 'hiit workout', rank: 9, volume: 4200, difficulty: 38, trend: 'up', change: 7 },
  ];

  // Conversion Funnel Data
  const funnelData = [
    { stage: 'Impressions', value: 61000, percentage: 100, color: '#002855' },
    { stage: 'Page Views', value: 24500, percentage: 40.2, color: '#003d7a' },
    { stage: 'Screenshots Viewed', value: 18200, percentage: 29.8, color: '#005b9e' },
    { stage: 'Description Read', value: 12800, percentage: 21.0, color: '#0078c1' },
    { stage: 'Reviews Read', value: 8900, percentage: 14.6, color: '#0095e0' },
    { stage: 'Install Button Clicked', value: 3200, percentage: 5.2, color: '#00b2ff' },
    { stage: 'Install Completed', value: 1900, percentage: 3.1, color: '#00CFB8' },
  ];

  // A/B Test Results
  const abTestData = [
    { 
      test: 'Title Optimization', 
      variantA: { name: 'Original', value: 'FitPro - Fitness Tracker', downloads: 1500, conversion: 2.8 },
      variantB: { name: 'Optimized', value: 'FitPro - Workout & Health Planner', downloads: 1750, conversion: 3.1 },
      improvement: 16.7,
      status: 'winner',
      date: '2 weeks ago'
    },
    { 
      test: 'Screenshot Order', 
      variantA: { name: 'Original', value: 'Feature-first layout', downloads: 1400, conversion: 2.7 },
      variantB: { name: 'Benefit-first', value: 'Benefit-focused layout', downloads: 1550, conversion: 2.9 },
      improvement: 10.7,
      status: 'winner',
      date: '3 weeks ago'
    },
    { 
      test: 'Keyword Field Update', 
      variantA: { name: 'Old Keywords', value: 'fitness, health, step, weight', downloads: 1600, conversion: 2.9 },
      variantB: { name: 'New Keywords', value: 'workout, calories, hiit, yoga, routine', downloads: 1580, conversion: 2.8 },
      improvement: -1.3,
      status: 'inconclusive',
      date: '1 week ago'
    },
    { 
      test: 'Description Restructure', 
      variantA: { name: 'Original', value: 'Feature-focused description', downloads: 1650, conversion: 3.0 },
      variantB: { name: 'Story-focused', value: 'User journey description', downloads: 1800, conversion: 3.2 },
      improvement: 9.1,
      status: 'running',
      date: '3 days ago'
    },
  ];

  // User Behavior Metrics
  const userBehaviorData = [
    { metric: 'Average Session Duration', value: '2m 34s', change: 12, trend: 'up' },
    { metric: 'Screenshots Viewed per User', value: '3.2', change: 8, trend: 'up' },
    { metric: 'Description Scroll Depth', value: '68%', change: -3, trend: 'down' },
    { metric: 'Review Read Rate', value: '24%', change: 5, trend: 'up' },
    { metric: 'Video Watch Rate', value: '18%', change: 15, trend: 'up' },
    { metric: 'Back Button Rate', value: '42%', change: -7, trend: 'down' },
  ];

  // Predictive Insights
  const predictiveInsights = [
    { 
      title: "Keyword Ranking Decline Prediction", 
      description: "Based on current trends, 'calorie counter' is projected to drop from position 15 to 22 within the next 2 weeks.",
      confidence: 87,
      urgency: 'high',
      action: "Consider updating metadata to emphasize calorie tracking features"
    },
    { 
      title: "Seasonal Opportunity", 
      description: "Historical data shows a 35% increase in searches for 'workout planner' starting in 3 weeks (New Year resolution period).",
      confidence: 92,
      urgency: 'medium',
      action: "Prepare metadata update to capitalize on this seasonal trend"
    },
    { 
      title: "Competitor Vulnerability", 
      description: "Top competitor 'FitTrackPro' is showing signs of decreased update frequency, potentially impacting their rankings within 30 days.",
      confidence: 73,
      urgency: 'low',
      action: "Monitor their rankings and prepare to fill any gaps"
    },
    { 
      title: "Review Velocity Impact", 
      description: "Your current review velocity (12/week) is 80% lower than top competitors. This is projected to impact rankings within 60 days.",
      confidence: 81,
      urgency: 'high',
      action: "Implement review generation strategy to match competitor velocity"
    },
  ];

  // Helper function for chart visualization
  const getBarHeight = (value, maxValue) => {
    return `${(value / maxValue) * 100}%`;
  };

  return (
    <div className="bg-[#f4f7fb] min-h-screen">
      {/* ========================================== */}
      {/* HERO — Data-Driven Intelligence Theme     */}
      {/* ========================================== */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center">
        <motion.div className="absolute inset-0" initial={{ scale: 1.15 }} animate={{ scale: 1 }} transition={{ duration: 1.8, ease: "easeOut" }}>
          <img src={AnalyticsImg} alt="Analytics Dashboard" className="w-full h-full object-cover" />
        </motion.div>

        <div className="absolute inset-0 bg-[#002855]/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002855] via-transparent to-[#002855]/50" />
        
        {/* Abstract Data Visualization Background */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-1/4 left-1/4 w-1 h-64 bg-[#00CFB8] transform -rotate-12" />
          <div className="absolute top-1/4 left-[30%] w-1 h-48 bg-[#00CFB8] transform -rotate-12" />
          <div className="absolute top-1/4 left-[35%] w-1 h-32 bg-[#00CFB8] transform -rotate-12" />
          <div className="absolute top-1/4 right-1/4 w-1 h-56 bg-[#00CFB8] transform rotate-12" />
          <div className="absolute top-1/4 right-[30%] w-1 h-40 bg-[#00CFB8] transform rotate-12" />
          <div className="absolute top-1/4 right-[35%] w-1 h-24 bg-[#00CFB8] transform rotate-12" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <span className="inline-block px-4 py-2 bg-[#00CFB8]/20 border border-[#00CFB8]/40 rounded-full text-sm text-[#00CFB8] mb-6 font-medium">
                ASO Module — Analytic Data
              </span>
            </motion.div>

            <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              Data-Driven ASO.<br />
              <span className="text-[#00CFB8]">Not Guesswork.</span>
            </motion.h1>

            <motion.p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
              Stop optimizing blind. AppOptimax gives you real-time analytics on keyword performance, conversion funnels, and user behavior to make data-backed ASO decisions.
            </motion.p>

            <motion.div className="flex flex-wrap justify-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
              <Link href="/contact" className="px-8 py-3.5 bg-[#00CFB8] text-white font-medium rounded-lg hover:bg-[#00B5A0] transition-colors flex items-center gap-2 shadow-lg shadow-[#00CFB8]/20">
                Start Free Trial <ArrowRight size={18} />
              </Link>
              <Link href="#dashboard" className="px-8 py-3.5 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm">
                View Sample Dashboard
              </Link>
            </motion.div>

            <motion.div className="flex flex-wrap justify-center gap-12 mt-16 pt-8 border-t border-white/10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1 }}>
              <div>
                <p className="text-3xl font-bold text-white">24/7</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider mt-1 max-w-[150px]">Real-Time Data Monitoring</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">47</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider mt-1 max-w-[150px]">Unique Metrics Tracked</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">92%</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider mt-1 max-w-[150px]">Prediction Accuracy</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">3.2×</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider mt-1 max-w-[150px]">ROI Improvement Average</p>
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
      {/* SECTION 1: INTERACTIVE DASHBOARD PREVIEW   */}
      {/* ========================================== */}
      <section id="dashboard" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Dashboard Preview</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2 mb-4">
              Your ASO Command <span className="text-[#00CFB8]">Center</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              All your critical ASO metrics in one place. No more jumping between tools and spreadsheets.
            </p>
          </motion.div>

          <motion.div 
            className="bg-[#f4f7fb] rounded-2xl border border-gray-100 shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Dashboard Header */}
            <div className="bg-white p-6 border-b border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#002855] flex items-center justify-center">
                    <BarChart3 size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#002855]">FitPro Analytics Dashboard</h3>
                    <p className="text-xs text-gray-400">Last updated: 2 minutes ago</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">Real-time:</span>
                    <button 
                      onClick={() => setIsRealTime(!isRealTime)}
                      className="focus:outline-none"
                    >
                      {isRealTime ? (
                        <ToggleRight size={24} className="text-[#00CFB8]" />
                      ) : (
                        <ToggleLeft size={24} className="text-gray-400" />
                      )}
                    </button>
                  </div>
                  
                  <div className="flex bg-white rounded-lg border border-gray-200 overflow-hidden">
                    {['7d', '30d', '90d', '1y'].map((range) => (
                      <button 
                        key={range}
                        onClick={() => setTimeRange(range)}
                        className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                          timeRange === range 
                            ? 'bg-[#002855] text-white' 
                            : 'text-gray-500 hover:bg-gray-50'
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
                      <RefreshCw size={14} className="text-gray-500" />
                    </button>
                    <button className="p-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
                      <Download size={14} className="text-gray-500" />
                    </button>
                    <button className="p-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
                      <Maximize2 size={14} className="text-gray-500" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Dashboard Content */}
            <div className="p-6">
              {/* Tab Navigation */}
              <div className="flex border-b border-gray-200 mb-6 overflow-x-auto">
                {[
                  { id: 'performance', label: 'Performance', icon: <BarChart3 size={16} /> },
                  { id: 'keywords', label: 'Keywords', icon: <Search size={16} /> },
                  { id: 'conversion', label: 'Conversion', icon: <TrendingUp size={16} /> },
                  { id: 'abtesting', label: 'A/B Testing', icon: <GitCompareArrows size={16} /> },
                  { id: 'behavior', label: 'User Behavior', icon: <Eye size={16} /> },
                  { id: 'predictions', label: 'Predictions', icon: <Sparkles size={16} /> },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'border-[#00CFB8] text-[#002855]'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </div>
              
              {/* Tab Content */}
              <AnimatePresence mode="wait">
                {activeTab === 'performance' && (
                  <motion.div
                    key="performance"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Performance Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {[
                        { title: 'Total Downloads', value: '12,450', change: 12.5, trend: 'up' },
                        { title: 'Impressions', value: '485,200', change: 8.3, trend: 'up' },
                        { title: 'Conversion Rate', value: '2.57%', change: -0.3, trend: 'down' },
                        { title: 'Avg. Rank', value: '7.2', change: 2.1, trend: 'up' },
                      ].map((metric, i) => (
                        <div key={i} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs text-gray-500 font-medium">{metric.title}</span>
                            <span className={`text-xs font-bold ${metric.trend === 'up' ? 'text-[#00CFB8]' : 'text-red-500'}`}>
                              {metric.trend === 'up' ? (
                                <span className="flex items-center gap-1"><ArrowUp size={12} />{metric.change}%</span>
                              ) : (
                                <span className="flex items-center gap-1"><ArrowDown size={12} />{Math.abs(metric.change)}%</span>
                              )}
                            </span>
                          </div>
                          <p className="text-xl font-bold text-[#002855]">{metric.value}</p>
                        </div>
                      ))}
                    </div>
                    
                    {/* Performance Chart */}
                    <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                      <div className="flex items-center justify-between mb-6">
                        <h4 className="text-sm font-bold text-[#002855]">Performance Trends</h4>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#002855]" />
                            <span className="text-xs text-gray-500">Downloads</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#00CFB8]" />
                            <span className="text-xs text-gray-500">Conversion Rate</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-purple-500" />
                            <span className="text-xs text-gray-500">Avg. Rank</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="h-64 flex items-end justify-between gap-2">
                        {performanceData.map((item, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center gap-1">
                            <div className="w-full flex gap-0.5 items-end h-56">
                              <div 
                                className="flex-1 bg-[#002855] rounded-t" 
                                style={{ height: `${(item.downloads / 2000) * 100}%` }}
                                title={`Downloads: ${item.downloads}`}
                              />
                              <div 
                                className="flex-1 bg-[#00CFB8] rounded-t" 
                                style={{ height: `${item.conversion * 30}%` }}
                                title={`Conversion: ${item.conversion}%`}
                              />
                              <div 
                                className="flex-1 bg-purple-500 rounded-t" 
                                style={{ height: `${(30 - item.rank) * 5}%` }}
                                title={`Avg. Rank: ${item.rank}`}
                              />
                            </div>
                            <span className="text-[10px] text-gray-400">{item.date.split(' ')[0]} {item.date.split(' ')[1]}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {activeTab === 'keywords' && (
                  <motion.div
                    key="keywords"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                      <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                        <h4 className="text-sm font-bold text-[#002855]">Keyword Performance</h4>
                        <div className="flex items-center gap-2">
                          <button className="px-3 py-1 text-xs bg-[#002855] text-white rounded-md">All Keywords</button>
                          <button className="px-3 py-1 text-xs text-gray-500 hover:bg-gray-100 rounded-md">Top Performers</button>
                          <button className="px-3 py-1 text-xs text-gray-500 hover:bg-gray-100 rounded-md">Declining</button>
                        </div>
                      </div>
                      
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="bg-[#f4f7fb]">
                              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Keyword</th>
                              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Rank</th>
                              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Volume</th>
                              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Difficulty</th>
                              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Trend</th>
                              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Change</th>
                            </tr>
                          </thead>
                          <tbody>
                            {keywordData.map((kw, i) => (
                              <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-3">
                                  <span className="text-sm font-medium text-[#002855]">{kw.keyword}</span>
                                </td>
                                <td className="px-4 py-3">
                                  <span className={`text-sm font-bold ${kw.rank <= 10 ? 'text-[#00CFB8]' : kw.rank <= 20 ? 'text-[#002855]' : 'text-gray-500'}`}>
                                    #{kw.rank}
                                  </span>
                                </td>
                                <td className="px-4 py-3">
                                  <span className="text-sm text-gray-600">{kw.volume.toLocaleString()}</span>
                                </td>
                                <td className="px-4 py-3">
                                  <div className="flex items-center gap-2">
                                    <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                                      <div 
                                        className="h-full rounded-full" 
                                        style={{ 
                                          width: `${kw.difficulty}%`,
                                          backgroundColor: kw.difficulty > 70 ? '#ef4444' : kw.difficulty > 50 ? '#f59e0b' : '#00CFB8'
                                        }}
                                      />
                                    </div>
                                    <span className="text-xs text-gray-500">{kw.difficulty}</span>
                                  </div>
                                </td>
                                <td className="px-4 py-3">
                                  {kw.trend === 'up' && (
                                    <span className="text-xs font-medium text-[#00CFB8] flex items-center gap-1">
                                      <TrendingUp size={12} /> Up
                                    </span>
                                  )}
                                  {kw.trend === 'down' && (
                                    <span className="text-xs font-medium text-red-500 flex items-center gap-1">
                                      <TrendingDown size={12} /> Down
                                    </span>
                                  )}
                                  {kw.trend === 'stable' && (
                                    <span className="text-xs font-medium text-gray-500 flex items-center gap-1">
                                      <Activity size={12} /> Stable
                                    </span>
                                  )}
                                </td>
                                <td className="px-4 py-3">
                                  <span className={`text-xs font-bold ${kw.change > 0 ? 'text-[#00CFB8]' : kw.change < 0 ? 'text-red-500' : 'text-gray-500'}`}>
                                    {kw.change > 0 ? `+${kw.change}` : kw.change}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {activeTab === 'conversion' && (
                  <motion.div
                    key="conversion"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                      <h4 className="text-sm font-bold text-[#002855] mb-6">Conversion Funnel Analysis</h4>
                      
                      <div className="space-y-3">
                        {funnelData.map((stage, i) => (
                          <div key={i} className="flex items-center gap-4">
                            <div className="w-32 text-right">
                              <span className="text-xs font-medium text-[#002855]">{stage.stage}</span>
                            </div>
                            <div className="flex-1 relative">
                              <div 
                                className="h-10 rounded-lg flex items-center px-4 transition-all"
                                style={{ 
                                  width: `${stage.percentage}%`,
                                  backgroundColor: stage.color,
                                  opacity: 0.8
                                }}
                              >
                                <span className="text-white text-xs font-medium">{stage.value.toLocaleString()}</span>
                              </div>
                              {i < funnelData.length - 1 && (
                                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">
                                  {(funnelData[i].value / funnelData[i-1].value * 100).toFixed(1)}%
                                </div>
                              )}
                            </div>
                            <div className="w-16 text-right">
                              <span className="text-xs font-medium text-gray-500">{stage.percentage}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 p-4 bg-[#f4f7fb] rounded-lg border border-gray-100">
                        <h5 className="text-xs font-bold text-[#002855] mb-2">Key Insights</h5>
                        <ul className="space-y-2">
                          <li className="text-xs text-gray-600 flex items-start gap-2">
                            <Info size={14} className="text-[#00CFB8] flex-shrink-0 mt-0.5" />
                            <span>Biggest drop-off occurs between "Page Views" and "Screenshots Viewed" (25.4% loss). Consider improving screenshot quality and relevance.</span>
                          </li>
                          <li className="text-xs text-gray-600 flex items-start gap-2">
                            <Info size={14} className="text-[#00CFB8] flex-shrink-0 mt-0.5" />
                            <span>"Install Button Clicked" to "Install Completed" conversion is 59.4%, indicating potential issues with install process or app size.</span>
                          </li>
                          <li className="text-xs text-gray-600 flex items-start gap-2">
                            <Info size={14} className="text-[#00CFB8] flex-shrink-0 mt-0.5" />
                            <span>Only 14.6% of users read reviews before installing. Consider highlighting top reviews in description to increase this percentage.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {activeTab === 'abtesting' && (
                  <motion.div
                    key="abtesting"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="space-y-4">
                      {abTestData.map((test, i) => (
                        <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h4 className="text-sm font-bold text-[#002855]">{test.test}</h4>
                              <p className="text-xs text-gray-400 mt-1">{test.date}</p>
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              test.status === 'winner' 
                                ? 'bg-[#00CFB8]/10 text-[#00CFB8]' 
                                : test.status === 'inconclusive' 
                                  ? 'bg-gray-100 text-gray-500'
                                  : 'bg-purple-100 text-purple-600'
                            }`}>
                              {test.status === 'winner' ? 'Winner' : test.status === 'inconclusive' ? 'Inconclusive' : 'Running'}
                            </span>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div className="p-3 bg-[#f4f7fb] rounded-lg border border-gray-100">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-medium text-gray-500">Variant A: {test.variantA.name}</span>
                                {test.improvement > 0 && test.status !== 'running' && (
                                  <span className="text-xs text-gray-400">Baseline</span>
                                )}
                              </div>
                              <p className="text-xs text-gray-600 mb-2">{test.variantA.value}</p>
                              <div className="flex items-center gap-4">
                                <div>
                                  <span className="text-xs text-gray-400">Downloads</span>
                                  <p className="text-sm font-bold text-[#002855]">{test.variantA.downloads.toLocaleString()}</p>
                                </div>
                                <div>
                                  <span className="text-xs text-gray-400">Conversion</span>
                                  <p className="text-sm font-bold text-[#002855]">{test.variantA.conversion}%</p>
                                </div>
                              </div>
                            </div>
                            
                            <div className={`p-3 rounded-lg border ${
                              test.status === 'winner' || test.status === 'running'
                                ? 'bg-[#00CFB8]/5 border-[#00CFB8]/20' 
                                : 'bg-[#f4f7fb] border-gray-100'
                            }`}>
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-medium text-gray-500">Variant B: {test.variantB.name}</span>
                                {test.status === 'winner' && (
                                  <span className="text-xs font-medium text-[#00CFB8]">Winner</span>
                                )}
                              </div>
                              <p className="text-xs text-gray-600 mb-2">{test.variantB.value}</p>
                              <div className="flex items-center gap-4">
                                <div>
                                  <span className="text-xs text-gray-400">Downloads</span>
                                  <p className="text-sm font-bold text-[#002855]">{test.variantB.downloads.toLocaleString()}</p>
                                </div>
                                <div>
                                  <span className="text-xs text-gray-400">Conversion</span>
                                  <p className="text-sm font-bold text-[#002855]">{test.variantB.conversion}%</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className={`flex items-center gap-2 p-2 rounded-lg ${
                            test.improvement > 0 
                              ? 'bg-[#00CFB8]/10' 
                              : 'bg-red-50'
                          }`}>
                            {test.improvement > 0 ? (
                              <>
                                <TrendingUp size={14} className="text-[#00CFB8]" />
                                <span className="text-xs font-medium text-[#00CFB8]">
                                  +{test.improvement}% improvement with Variant B
                                </span>
                              </>
                            ) : (
                              <>
                                <AlertCircle size={14} className="text-red-500" />
                                <span className="text-xs font-medium text-red-500">
                                  {test.improvement}% change with Variant B (not statistically significant)
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
                
                {activeTab === 'behavior' && (
                  <motion.div
                    key="behavior"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {userBehaviorData.map((metric, i) => (
                        <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-medium text-gray-500">{metric.metric}</span>
                            <span className={`text-xs font-medium flex items-center gap-1 ${
                              metric.trend === 'up' 
                                ? 'text-[#00CFB8]' 
                                : 'text-red-500'
                            }`}>
                              {metric.trend === 'up' ? (
                                <><ArrowUp size={12} />+{metric.change}%</>
                              ) : (
                                <><ArrowDown size={12} />{metric.change}%</>
                              )}
                            </span>
                          </div>
                          <p className="text-2xl font-bold text-[#002855]">{metric.value}</p>
                          
                          <div className="mt-3 w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div 
                              className="h-full rounded-full transition-all"
                              style={{ 
                                width: `${Math.min(parseInt(metric.value) || parseFloat(metric.value) * 20, 100)}%`,
                                backgroundColor: metric.trend === 'up' ? '#00CFB8' : '#ef4444'
                              }}
                            />
                          </div>
                          
                          <p className="text-[10px] text-gray-400 mt-2">
                            {metric.trend === 'up' 
                              ? `Improved by ${metric.change}% compared to previous period` 
                              : `Decreased by ${Math.abs(metric.change)}% compared to previous period`}
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-[#f4f7fb] rounded-lg border border-gray-100">
                      <h5 className="text-xs font-bold text-[#002855] mb-2">Behavioral Insights</h5>
                      <ul className="space-y-2">
                        <li className="text-xs text-gray-600 flex items-start gap-2">
                          <Info size={14} className="text-[#00CFB8] flex-shrink-0 mt-0.5" />
                          <span>Users who view at least 3 screenshots are 2.4× more likely to install. Consider reordering screenshots to highlight key benefits.</span>
                        </li>
                        <li className="text-xs text-gray-600 flex items-start gap-2">
                          <Info size={14} className="text-[#00CFB8] flex-shrink-0 mt-0.5" />
                          <span>Video watch rate increased by 15% after adding a caption. Continue using captions in all preview videos.</span>
                        </li>
                        <li className="text-xs text-gray-600 flex items-start gap-2">
                          <Info size={14} className="text-[#00CFB8] flex-shrink-0 mt-0.5" />
                          <span>Description scroll depth decreased by 3%. Consider moving key information higher in the description.</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                )}
                
                {activeTab === 'predictions' && (
                  <motion.div
                    key="predictions"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-6 p-4 bg-purple-50 rounded-lg border border-purple-100">
                      <div className="flex items-start gap-3">
                        <Sparkles size={18} className="text-purple-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-sm font-bold text-purple-800">AI-Powered Predictions</h4>
                          <p className="text-xs text-purple-600 mt-1">
                            These predictions are generated by analyzing historical data, market trends, and competitor patterns. Confidence scores indicate the reliability of each prediction.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {predictiveInsights.map((insight, i) => (
                        <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="text-sm font-bold text-[#002855]">{insight.title}</h4>
                            <div className="flex items-center gap-2">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                insight.urgency === 'high' 
                                  ? 'bg-red-100 text-red-600' 
                                  : insight.urgency === 'medium'
                                    ? 'bg-yellow-100 text-yellow-700'
                                    : 'bg-blue-100 text-blue-600'
                              }`}>
                                {insight.urgency === 'high' ? 'High Priority' : insight.urgency === 'medium' ? 'Medium Priority' : 'Low Priority'}
                              </span>
                            </div>
                          </div>
                          
                          <p className="text-xs text-gray-600 mb-4">{insight.description}</p>
                          
                          <div className="flex items-center gap-4 mb-4">
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs text-gray-500">Confidence</span>
                                <span className="text-xs font-medium text-[#002855]">{insight.confidence}%</span>
                              </div>
                              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                <div 
                                  className="h-full rounded-full bg-[#00CFB8]"
                                  style={{ width: `${insight.confidence}%` }}
                                />
                              </div>
                            </div>
                          </div>
                          
                          <div className="p-3 bg-[#f4f7fb] rounded-lg border border-gray-100">
                            <div className="flex items-start gap-2">
                              <Target size={14} className="text-[#002855] flex-shrink-0 mt-0.5" />
                              <div>
                                <span className="text-xs font-bold text-[#002855]">Recommended Action:</span>
                                <p className="text-xs text-gray-600 mt-1">{insight.action}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 2: KEY METRICS DEEP DIVE           */}
      {/* ========================================== */}
      <section className="py-24 bg-[#f4f7fb]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Key Metrics</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2 mb-4">
              The Metrics That <span className="text-[#00CFB8]">Actually Matter</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Most ASO tools track vanity metrics. We focus on the ones that directly impact your install growth.
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { 
                icon: <Search size={28} />, 
                title: "Keyword Visibility Score", 
                desc: "A composite metric that combines your rank positions across all tracked keywords, weighted by search volume. Higher score = more organic visibility.",
                example: "Your score increased from 342 to 418 (+22.2%) after updating your title",
                tag: "Primary"
              },
              { 
                icon: <Eye size={28} />, 
                title: "Impression-to-Install Rate", 
                desc: "Not just conversion rate from page views, but from total impressions. This metric captures both your ranking power and page conversion effectiveness.",
                example: "Industry average is 1.8%. Your app is at 2.1% (top 15% in category)",
                tag: "Primary"
              },
              { 
                icon: <Target size={28} />, 
                title: "Keyword Gap Closure Rate", 
                desc: "Tracks how quickly you're closing the keyword gap with competitors. Measures new keyword acquisitions vs. competitor gains.",
                example: "You closed 23 keyword gaps this month while competitors gained 12",
                tag: "Competitive"
              },
              { 
                icon: <Activity size={28} />, 
                title: "Organic Growth Velocity", 
                desc: "The rate of organic install growth over time, excluding paid campaigns. Shows the true impact of your ASO efforts.",
                example: "Your organic velocity is 8.2%/month vs. category average of 4.5%",
                tag: "Growth"
              },
              { 
                icon: <TrendingUp size={28} />, 
                title: "Rank Volatility Index", 
                desc: "Measures how stable your rankings are across keywords. High volatility indicates algorithmic uncertainty or competitive pressure.",
                example: "Your volatility index decreased from 0.34 to 0.21 (more stable rankings)",
                tag: "Stability"
              },
              { 
                icon: <Users size={28} />, 
                title: "Quality Install Ratio", 
                desc: "The percentage of installs that result in active users after 7 days. Helps identify if your ASO is attracting the right audience.",
                example: "After keyword optimization, your quality install ratio improved from 32% to 41%",
                tag: "Quality"
              },
            ].map((metric, index) => (
              <motion.div key={index} variants={fadeInUp} className="group relative bg-white p-8 rounded-2xl border border-gray-100 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-teal-100 hover:border-[#00CFB8]/30">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#00CFB8]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#002855]/5 flex items-center justify-center text-[#002855] group-hover:bg-[#00CFB8] group-hover:text-white transition-all duration-300">{metric.icon}</div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-[#f4f7fb] px-2.5 py-1 rounded-full">{metric.tag}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#002855] mb-3">{metric.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{metric.desc}</p>
                  <div className="p-3 bg-[#f4f7fb] rounded-lg border border-gray-100">
                    <p className="text-xs text-gray-600 flex items-start gap-2">
                      <BarChart3 size={12} className="text-[#00CFB8] flex-shrink-0 mt-0.5" />
                      <span>{metric.example}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 3: REAL-TIME MONITORING            */}
      {/* ========================================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Real-Time Monitoring</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-3 mb-6">
                Catch Changes <span className="text-[#00CFB8]">Before They Impact You</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Most ASO tools show you data from yesterday. AppOptimax monitors in real-time so you can react to competitor changes, ranking shifts, and algorithm updates within minutes, not days.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Competitor Metadata Alerts", desc: "Get notified instantly when a competitor changes their title, subtitle, or keywords." },
                  { title: "Ranking Volatility Detection", desc: "Our system detects unusual ranking patterns that may indicate algorithm updates." },
                  { title: "Review Velocity Monitoring", desc: "Track competitor review acquisition rates in real-time to spot promotional campaigns." },
                  { title: "Featured Placement Alerts", desc: "Know immediately when you or a competitor gets featured or loses a featured spot." },
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

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={DashboardImg} alt="Real-Time Monitoring Dashboard" className="w-full object-cover" />
              </div>
              <motion.div className="absolute -bottom-6 -left-6 w-72 bg-white rounded-xl shadow-xl p-5 z-10 border border-gray-100" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} viewport={{ once: true }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-gray-500 uppercase">Alert</span>
                  <Bell size={14} className="text-red-500" />
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500 flex-shrink-0">
                    <AlertCircle size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#002855]">Competitor Metadata Change</p>
                    <p className="text-xs text-gray-500 mt-1">FitTrackPro updated their title 3 minutes ago. New title: "FitTrackPro - Workout & Health Planner"</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-[10px] text-gray-400">2 min ago</span>
                      <button className="text-[10px] text-[#00CFB8] font-medium">View Details</button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 4: CUSTOM REPORTS & EXPORTS        */}
      {/* ========================================== */}
      <section className="py-24 bg-[#f4f7fb]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">Reporting</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2 mb-4">
              Reports That <span className="text-[#00CFB8]">Stakeholders Love</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Create beautiful, data-rich reports that show the ROI of your ASO efforts. No more exporting raw data to spreadsheets.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText size={24} />,
                title: "Executive Summary Reports",
                desc: "High-level reports that show key metrics, trends, and ROI. Perfect for C-suite and non-technical stakeholders.",
                features: ["Custom branding", "Automated scheduling", "PDF/PowerPoint export"]
              },
              {
                icon: <BarChart3 size={24} />,
                title: "Performance Deep Dives",
                desc: "Detailed analysis of keyword performance, conversion funnels, and user behavior with actionable insights.",
                features: ["Custom date ranges", "Competitor comparisons", "Trend analysis"]
              },
              {
                icon: <GitCompareArrows size={24} />,
                title: "Competitor Intelligence Reports",
                desc: "Comprehensive analysis of competitor strategies, metadata changes, and market positioning.",
                features: ["Metadata change tracking", "Feature comparison", "Market share analysis"]
              },
              {
                icon: <Calendar size={24} />,
                title: "Automated Report Scheduling",
                desc: "Set up weekly, bi-weekly, or monthly reports that are automatically generated and sent to your team.",
                features: ["Email delivery", "Slack integration", "Custom recipients"]
              },
              {
                icon: <Share2 size={24} />,
                title: "Collaborative Annotations",
                desc: "Add notes, insights, and action items directly to reports for team collaboration and context.",
                features: ["Team comments", "Action item tracking", "Historical notes"]
              },
              {
                icon: <ExternalLink size={24} />,
                title: "Third-Party Integrations",
                desc: "Connect AppOptimax data to your existing BI tools, dashboards, and reporting systems.",
                features: ["API access", "Google Data Studio", "Tableau connector"]
              }
            ].map((report, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-[#002855]/5 flex items-center justify-center text-[#002855] mb-4">
                  {report.icon}
                </div>
                <h3 className="text-lg font-bold text-[#002855] mb-2">{report.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{report.desc}</p>
                <ul className="space-y-2">
                  {report.features.map((feature, j) => (
                    <li key={j} className="text-xs text-gray-600 flex items-center gap-2">
                      <CheckCircle2 size={12} className="text-[#00CFB8]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 5: WHY APPZOPTIMAX ANALYTICS       */}
      {/* ========================================== */}
      <section className="py-24 bg-[#002855] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-80 h-80 bg-[#00CFB8] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Why AppOptimax Analytics</motion.span>
            <motion.h2 className="text-3xl md:text-5xl font-bold text-white mt-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              Analytics Built for ASO
            </motion.h2>
            <motion.p className="text-gray-300 mt-4 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              Generic analytics tools weren't built for app store optimization. AppOptimax analytics were designed from the ground up for ASO professionals.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Search size={22} />, title: "Keyword-Centric", desc: "Every metric is tied back to keywords, the fundamental unit of ASO. See how changes impact specific keywords, not just overall numbers." },
              { icon: <Activity size={22} />, title: "Real-Time, Not Delayed", desc: "App store algorithms update constantly. Your analytics should too. We monitor 24/7, not daily or weekly." },
              { icon: <Sparkles size={22} />, title: "Predictive, Not Just Historical", desc: "Don't just see what happened—see what's likely to happen. Our AI identifies trends and predicts future performance." },
              { icon: <GitCompareArrows size={22} />, title: "Competitor-Aware", desc: "Every metric includes competitor context. A 10% improvement means nothing if competitors improved 20%." },
              { icon: <Target size={22} />, title: "Action-Oriented", desc: "We don't just show data—we tell you what to do about it. Every insight comes with a recommended action." },
              { icon: <Layers size={22} />, title: "Multi-Dimensional", desc: "See the full picture: keywords, metadata, screenshots, reviews, pricing—all in one place with cross-metric analysis." },
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
                See Your <span className="text-[#00CFB8]">Analytics</span> in Action
              </h2>
              <p className="text-gray-600 mb-10">
                Get a personalized walkthrough of your app's analytics dashboard. We'll show you exactly how AppOptimax can improve your ASO strategy with data-driven insights.
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
                  <div><h4 className="font-semibold text-gray-800">Schedule a Call</h4><p className="text-gray-500 text-sm">Book a 15-min analytics walkthrough</p></div>
                </div>
              </div>
            </motion.div>

            <motion.div className="bg-[#f4f7fb] p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="text-xl font-bold text-[#002855] mb-2">Request Your Analytics Demo</h3>
              <p className="text-gray-500 text-sm mb-6">We'll set up a personalized dashboard for your app and walk you through the insights.</p>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">What analytics are you most interested in?</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#00CFB8] focus:border-transparent outline-none transition-all bg-white text-gray-500">
                    <option value="">Select an option</option>
                    <option value="keyword">Keyword Performance</option>
                    <option value="conversion">Conversion Funnel Analysis</option>
                    <option value="abtesting">A/B Testing Results</option>
                    <option value="behavior">User Behavior Metrics</option>
                    <option value="predictions">Predictive Insights</option>
                    <option value="all">All of the above</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-[#00CFB8] text-white font-medium py-3.5 rounded-lg hover:bg-[#00B5A0] transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#00CFB8]/20">
                  Get My Analytics Demo <ArrowUpRight size={18} />
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
            Stop Guessing. Start Knowing.
          </h2>
          <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
            Every ASO decision should be backed by data. See how AppOptimax analytics can transform your app store performance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-[#00CFB8] text-white font-medium rounded-lg hover:bg-[#00B5A0] transition-colors shadow-lg shadow-[#00CFB8]/20 flex items-center gap-2">
              Start Your Free Trial <ArrowRight size={18} />
            </Link>
            <Link href="/chapters/competitor-analysis" className="px-8 py-4 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
              ← Back to Competitor Analysis
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AnalyticData;