import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Lock, Loader2, CheckCircle2 } from 'lucide-react'
import AuthLayout from '../components/auth/AuthLayout'
import { Auth } from '../lib/auth'
import { barePage } from '../lib/pageLayouts'

export default function ResetPasswordPage() {
  const router = useRouter()
  const [newPassword, setNewPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const uid = router.query.uid
  const token = router.query.token

  useEffect(() => {
    if (router.isReady && (!uid || !token)) {
      setError('Invalid or missing reset link. Please request a new password reset.')
    }
  }, [router.isReady, uid, token])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess(false)
    setLoading(true)

    try {
      await Auth.reset({ uid, token, new_password: newPassword })
      setSuccess(true)
      setTimeout(() => router.push('/login'), 2000)
    } catch (err) {
      const msg =
        err.response?.data?.non_field_errors?.[0] ||
        err.response?.data?.token ||
        err.response?.data?.detail ||
        'Reset failed. The link may be invalid or expired. Please try again.'
      setError(msg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout title="Reset Password" description="Set a new password for your App Optimax account.">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Reset Password</h1>
        <p className="text-gray-300 text-sm">Enter your new password below</p>
      </div>

      {loading && (
        <div className="bg-[#00CFB8]/20 border border-[#00CFB8]/40 text-white px-4 py-3 rounded-lg mb-6 flex items-center justify-center text-sm">
          <Loader2 className="animate-spin mr-2" size={16} />
          Resetting your password...
        </div>
      )}

      {error && !loading && (
        <div className="bg-red-500/20 border border-red-500/40 text-red-100 px-4 py-3 rounded-lg mb-6 text-sm text-center">
          {error}
        </div>
      )}

      {success && !loading && (
        <div className="bg-green-500/20 border border-green-500/40 text-green-100 px-4 py-3 rounded-lg mb-6 flex items-center justify-center text-sm">
          <CheckCircle2 size={16} className="mr-2" />
          Password reset successful! Redirecting to login...
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-gray-200 text-xs font-semibold mb-2 uppercase tracking-wide">
            New Password
          </label>
          <div className="relative">
            <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              disabled={loading || success}
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00CFB8] focus:ring-1 focus:ring-[#00CFB8]"
              placeholder="Enter new password"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading || success || !uid || !token}
          className="w-full bg-[#00CFB8] hover:bg-[#00B5A0] text-[#002855] font-bold py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Resetting...' : 'Reset Password'}
        </button>
      </form>

      <div className="mt-8 text-center">
        <Link href="/login" className="text-sm text-[#00CFB8] hover:text-white transition-colors">
          Back to Login
        </Link>
      </div>
    </AuthLayout>
  )
}

ResetPasswordPage.getLayout = barePage
