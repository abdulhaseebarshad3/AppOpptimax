import React, { useState } from 'react'
import { Check } from 'lucide-react'
import { CtaBanner, FAQAccordion } from '../sections/SharedSections'

const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    { name: 'Starter', monthly: 49, yearly: 39, description: 'For early-stage teams validating growth loops.', features: ['Keyword tracking (500 keywords)', 'Basic competitor watchlist', 'Metadata suggestions', 'Weekly performance report'] },
    { name: 'Growth', monthly: 129, yearly: 99, description: 'For teams scaling acquisition and conversion.', features: ['Keyword tracking (3,000 keywords)', 'Competitor intelligence suite', 'A/B testing insights', 'Review sentiment trends'], recommended: true },
    { name: 'Pro', monthly: 299, yearly: 239, description: 'For large teams managing multi-market apps.', features: ['Keyword tracking (10,000 keywords)', 'Localization insights', 'Advanced forecasting dashboard', 'Priority strategic support'] }
  ]

  const comparison = [
    { feature: 'Keyword Rank Tracking', starter: 'Up to 500', growth: 'Up to 3,000', pro: 'Up to 10,000' },
    { feature: 'Competitor Analysis', starter: 'Basic', growth: 'Advanced', pro: 'Advanced + alerts' },
    { feature: 'Metadata Optimization', starter: true, growth: true, pro: true },
    { feature: 'A/B Testing Support', starter: false, growth: true, pro: true },
    { feature: 'Reviews & Ratings Intelligence', starter: false, growth: true, pro: true },
    { feature: 'Dedicated Success Manager', starter: false, growth: false, pro: true }
  ]

  return (
    <div className="bg-[#f4f7fb] min-h-screen">
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[#002855]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-[#00CFB8]/20 border border-[#00CFB8]/40 text-white text-sm mb-5">Pricing</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Flexible plans for every ASO stage</h1>
          <p className="text-gray-200 max-w-2xl mx-auto mt-4">Choose the plan that fits your growth objectives, app portfolio size, and reporting depth.</p>

          <div className="mt-8 inline-flex bg-white/10 border border-white/20 rounded-full p-1">
            <button onClick={() => setIsYearly(false)} className={`px-5 py-2 text-sm rounded-full transition-colors ${!isYearly ? 'bg-[#00CFB8] text-white' : 'text-white/80'}`}>Monthly</button>
            <button onClick={() => setIsYearly(true)} className={`px-5 py-2 text-sm rounded-full transition-colors ${isYearly ? 'bg-[#00CFB8] text-white' : 'text-white/80'}`}>Yearly</button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className={`rounded-2xl p-6 border bg-white shadow-sm ${plan.recommended ? 'border-[#00CFB8] shadow-[#00CFB8]/20' : 'border-gray-100'}`}>
              {plan.recommended && <span className="inline-block px-3 py-1 text-xs rounded-full bg-[#00CFB8] text-white mb-4">Recommended</span>}
              <h3 className="text-2xl font-bold text-[#002855]">{plan.name}</h3>
              <p className="text-gray-500 text-sm mt-2">{plan.description}</p>
              <p className="mt-5 text-4xl font-bold text-[#002855]">${isYearly ? plan.yearly : plan.monthly}<span className="text-sm text-gray-500 font-medium"> /mo</span></p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-[#00CFB8]" /> {feature}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full py-3 rounded-lg font-medium transition-colors ${plan.recommended ? 'bg-[#00CFB8] text-white hover:bg-[#00B5A0]' : 'bg-[#002855] text-white hover:bg-[#123f70]'}`}>
                Start {plan.name}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl border border-gray-100 overflow-auto">
            <table className="w-full min-w-[780px]">
              <thead className="bg-[#f4f7fb]">
                <tr>
                  <th className="text-left p-4 text-[#002855]">Feature Comparison</th>
                  <th className="p-4 text-[#002855]">Starter</th>
                  <th className="p-4 text-[#002855]">Growth</th>
                  <th className="p-4 text-[#002855]">Pro</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature} className="border-t border-gray-100 text-sm">
                    <td className="p-4 text-gray-700">{row.feature}</td>
                    <td className="p-4 text-center text-gray-600">{row.starter === true ? 'Yes' : row.starter === false ? 'No' : row.starter}</td>
                    <td className="p-4 text-center text-gray-600">{row.growth === true ? 'Yes' : row.growth === false ? 'No' : row.growth}</td>
                    <td className="p-4 text-center text-gray-600">{row.pro === true ? 'Yes' : row.pro === false ? 'No' : row.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FAQAccordion />
      <CtaBanner />
    </div>
  )
}

export default PricingPage