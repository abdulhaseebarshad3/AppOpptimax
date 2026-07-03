import React from 'react'
import { Lightbulb, Info, HelpCircle } from 'lucide-react'

const tableWrapperClass = 'overflow-x-auto my-6 rounded-xl border border-gray-200'
const tableClass = 'w-full text-sm text-left'
const thClass = 'px-4 py-3 bg-[#002855] text-white font-semibold whitespace-nowrap'
const tdClass = 'px-4 py-3 border-t border-gray-100 text-gray-700 align-top'

export default function BlogContent({ blocks = [] }) {
  return (
    <article className="blog-content space-y-4 text-gray-700 leading-relaxed">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'h2':
            return (
              <h2 key={index} className="text-2xl md:text-3xl font-bold text-[#002855] mt-10 mb-4">
                {block.text}
              </h2>
            )
          case 'h3':
            return (
              <h3 key={index} className="text-xl font-semibold text-[#002855] mt-8 mb-3">
                {block.text}
              </h3>
            )
          case 'paragraph':
            return (
              <p key={index} className="text-base md:text-lg">
                {block.text}
              </p>
            )
          case 'ul':
            return (
              <ul key={index} className="list-disc pl-6 space-y-2 my-4">
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )
          case 'ol':
            return (
              <ol key={index} className="list-decimal pl-6 space-y-2 my-4">
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ol>
            )
          case 'table':
            return (
              <div key={index} className={tableWrapperClass}>
                <table className={tableClass}>
                  <thead>
                    <tr>
                      {block.headers.map((header, i) => (
                        <th key={i} className={thClass}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, ri) => (
                      <tr key={ri} className="bg-white even:bg-gray-50">
                        {row.map((cell, ci) => (
                          <td key={ci} className={tdClass}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          case 'tip':
            return (
              <div key={index} className="flex gap-3 my-6 p-5 rounded-xl bg-[#00CFB8]/10 border border-[#00CFB8]/30">
                <Lightbulb className="w-5 h-5 text-[#00CFB8] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#002855] mb-1">{block.title || 'Tip'}</p>
                  <p className="text-gray-700">{block.text}</p>
                </div>
              </div>
            )
          case 'note':
            return (
              <div key={index} className="flex gap-3 my-6 p-5 rounded-xl bg-blue-50 border border-blue-200">
                <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#002855] mb-1">{block.title || 'Note'}</p>
                  <p className="text-gray-700">{block.text}</p>
                </div>
              </div>
            )
          case 'faq':
            return (
              <div key={index} className="my-8 space-y-4">
                <h3 className="text-xl font-semibold text-[#002855] flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#00CFB8]" />
                  {block.title || 'FAQ'}
                </h3>
                {block.items.map((item, i) => (
                  <div key={i} className="rounded-xl border border-gray-200 bg-white p-5">
                    <p className="font-semibold text-[#002855] mb-2">{item.q}</p>
                    <p className="text-gray-700">{item.a}</p>
                  </div>
                ))}
              </div>
            )
          default:
            return null
        }
      })}
    </article>
  )
}
