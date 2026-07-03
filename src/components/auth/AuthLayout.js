import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const LOGO = '/logo/AppOptimax.png'

export default function AuthLayout({ title, description, children }) {
  return (
    <>
      <Head>
        <title>{`${title} | App Optimax`}</title>
        {description && <meta name="description" content={description} />}
      </Head>

      <div className="min-h-screen bg-[#002855] flex items-center justify-center px-4 py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00CFB8] rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#48b749] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-md">
          <div className="text-center mb-8">
            <Link href="/">
              <img src={LOGO} alt="App Optimax logo" className="h-12 mx-auto mb-6" />
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl p-8 md:p-10">
            {children}
          </div>

          <p className="text-center text-gray-400 text-sm mt-6">
            <Link href="/" className="hover:text-[#00CFB8] transition-colors">
              Back to website
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
