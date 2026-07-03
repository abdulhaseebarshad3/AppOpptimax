'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Mail, Loader2, ArrowLeft } from 'lucide-react'
import AuthLayout from '../components/auth/AuthLayout'
import { Auth, getAuthErrorMessage } from '../lib/auth'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage('')
    setLoading(true)

    try {
      const res = await Auth.forgot({ email })
      setMessage(res.data.message || 'A reset link has been sent to your email.')
    } catch (err) {
      setMessage(getAuthErrorMessage(err, 'Something went wrong. Please check the email and try again.'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout title="Forgot Password" description="Reset your App Optimax account password.">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Forgot Password?</h1>
        <p className="text-gray-300 text-sm">Enter your email to receive a reset link</p>
      </div>

      {message && (
        <div className="bg-[#00CFB8]/20 border border-[#00CFB8]/40 text-white px-4 py-3 rounded-lg mb-6 text-sm text-center">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-gray-200 text-xs font-semibold mb-2 uppercase tracking-wide">
            Email Address
          </label>
          <div className="relative">
            <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00CFB8] focus:ring-1 focus:ring-[#00CFB8]"
              placeholder="name@company.com"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#00CFB8] hover:bg-[#00B5A0] text-[#002855] font-bold py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Sending...' : 'Send Reset Link'}
        </button>
      </form>

      <div className="mt-8 text-center">
        <Link href="/login" className="inline-flex items-center gap-2 text-sm text-[#00CFB8] hover:text-white transition-colors">
          <ArrowLeft size={14} /> Back to Login
        </Link>
      </div>
    </AuthLayout>
  )
}
