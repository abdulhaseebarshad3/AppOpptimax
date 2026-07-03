'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { User, Mail, Lock, Loader2 } from 'lucide-react'
import AuthLayout from '../components/auth/AuthLayout'
import { Auth, getAuthErrorMessage } from '../lib/auth'

export default function SignupPage() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' })
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage('')
    setError('')
    setLoading(true)

    try {
      const res = await Auth.register(formData)
      setMessage(res.data?.message || 'Registered successfully. Check your email.')
      setFormData({ username: '', email: '', password: '' })
    } catch (err) {
      const data = err.response?.data
      if (data?.email?.[0]?.toLowerCase().includes('already')) {
        setError('An account with this email already exists. Please log in instead.')
      } else if (data?.username) {
        const msg = data.username[0] || ''
        if (msg.toLowerCase().includes('already')) {
          setError('This username is already taken.')
        } else {
          setError('Username contains invalid characters. Please do not use spaces.')
        }
      } else if (typeof data === 'string') {
        setError(data)
      } else {
        setError(getAuthErrorMessage(err, 'Signup failed. Please try again.'))
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout title="Sign Up" description="Create your App Optimax account and start your ASO free trial.">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
        <p className="text-gray-300 text-sm">Start optimizing your app growth today</p>
      </div>

      {message && !loading && (
        <div className="bg-green-500/20 border border-green-500/40 text-green-100 px-4 py-3 rounded-lg mb-6 text-sm text-center">
          {message}
        </div>
      )}

      {error && !loading && (
        <div className="bg-red-500/20 border border-red-500/40 text-red-100 px-4 py-3 rounded-lg mb-6 text-sm text-center">
          {error}
        </div>
      )}

      {loading && (
        <div className="bg-[#00CFB8]/20 border border-[#00CFB8]/40 text-white px-4 py-3 rounded-lg mb-6 flex items-center justify-center text-sm">
          <Loader2 className="animate-spin mr-2" size={16} />
          Creating account...
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-gray-200 text-xs font-semibold mb-2 uppercase tracking-wide">Username</label>
          <div className="relative">
            <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              disabled={loading}
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00CFB8] focus:ring-1 focus:ring-[#00CFB8]"
              placeholder="johndoe"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-200 text-xs font-semibold mb-2 uppercase tracking-wide">Email</label>
          <div className="relative">
            <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00CFB8] focus:ring-1 focus:ring-[#00CFB8]"
              placeholder="name@company.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-200 text-xs font-semibold mb-2 uppercase tracking-wide">Password</label>
          <div className="relative">
            <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              disabled={loading}
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00CFB8] focus:ring-1 focus:ring-[#00CFB8]"
              placeholder="••••••••"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#00CFB8] hover:bg-[#00B5A0] text-[#002855] font-bold py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Creating Account...' : 'Sign Up'}
        </button>
      </form>

      <p className="mt-8 text-center text-gray-300 text-sm">
        Already have an account?{' '}
        <Link href="/login" className="text-[#00CFB8] font-semibold hover:text-white transition-colors">
          Log In
        </Link>
      </p>
    </AuthLayout>
  )
}
