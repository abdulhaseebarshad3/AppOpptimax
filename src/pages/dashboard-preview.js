import React from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area } from 'recharts'
import { ArrowUpRight, Gauge, Download, Hash } from 'lucide-react'
import { CtaBanner } from '../sections/SharedSections'

const DashboardPreviewPage = () => {
  const rankingData = [
    { name: 'Mon', rank: 22 },
    { name: 'Tue', rank: 18 },
    { name: 'Wed', rank: 16 },
    { name: 'Thu', rank: 12 },
    { name: 'Fri', rank: 10 },
    { name: 'Sat', rank: 8 },
    { name: 'Sun', rank: 7 }
  ]

  const downloadData = [
    { name: 'W1', installs: 8200 },
    { name: 'W2', installs: 9300 },
    { name: 'W3', installs: 10100 },
    { name: 'W4', installs: 11400 }
  ]

  const topKeywords = [
    { keyword: 'budget planner app', rank: '#4', change: '+2' },
    { keyword: 'expense tracker', rank: '#7', change: '+3' },
    { keyword: 'finance organizer', rank: '#9', change: '+1' },
    { keyword: 'money manager', rank: '#11', change: '+4' }
  ]

  return (
    <div className="bg-[#f4f7fb] min-h-screen">
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[#002855]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-[#48b749]/20 border border-[#48b749]/40 text-white text-sm">Dashboard Preview</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-5">A modern ASO command center</h1>
          <p className="text-gray-200 mt-4 max-w-2xl mx-auto">Track rankings, downloads, and app health in one clear SaaS-style dashboard view.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <p className="text-sm text-gray-500">App Score</p>
              <p className="mt-2 text-4xl font-bold text-[#002855]">89</p>
              <p className="mt-2 text-[#48b749] text-sm inline-flex items-center gap-1"><ArrowUpRight size={14} /> +6 points this month</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <p className="text-sm text-gray-500 inline-flex items-center gap-2"><Hash size={15} /> Tracked Keywords</p>
              <p className="mt-2 text-4xl font-bold text-[#002855]">3,284</p>
              <p className="mt-2 text-gray-500 text-sm">Across 12 markets</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <p className="text-sm text-gray-500 inline-flex items-center gap-2"><Download size={15} /> Organic Downloads</p>
              <p className="mt-2 text-4xl font-bold text-[#002855]">11.4k</p>
              <p className="mt-2 text-[#48b749] text-sm">+18% month-over-month</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-[#002855] font-semibold mb-4">Keyword Ranking Trend</h3>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={rankingData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#edf2f7" />
                    <XAxis dataKey="name" stroke="#64748b" />
                    <YAxis reversed stroke="#64748b" />
                    <Tooltip />
                    <Line type="monotone" dataKey="rank" stroke="#48b749" strokeWidth={3} dot={{ fill: '#48b749' }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-[#002855] font-semibold mb-4 inline-flex items-center gap-2"><Gauge size={16} /> Top Keywords</h3>
              <div className="space-y-3">
                {topKeywords.map((item) => (
                  <div key={item.keyword} className="rounded-lg bg-[#f4f7fb] p-3 border border-gray-100">
                    <p className="text-sm text-[#002855] font-medium">{item.keyword}</p>
                    <div className="flex justify-between mt-1 text-xs">
                      <span className="text-gray-500">{item.rank}</span>
                      <span className="text-[#48b749]">{item.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-[#002855] font-semibold mb-4">Downloads Analytics</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={downloadData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#edf2f7" />
                  <XAxis dataKey="name" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip />
                  <Area type="monotone" dataKey="installs" stroke="#002855" fill="#48b749" fillOpacity={0.25} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  )
}

export default DashboardPreviewPage
