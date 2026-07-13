// import React, { useEffect, useState } from 'react'
// import Link from 'next/link'
// import { useRouter } from 'next/router'
// import { Mail, Lock, Loader2, CheckCircle2 } from 'lucide-react'
// import AuthLayout from '../components/auth/AuthLayout'
// import { Auth, completeLogin, getAuthErrorMessage, isAuthenticated } from '../lib/auth'

// export default function LoginPage() {
//   const router = useRouter()
//   const [formData, setFormData] = useState({ email: '', password: '' })
//   const [error, setError] = useState('')
//   const [info, setInfo] = useState('')
//   const [loading, setLoading] = useState(false)
//   const [isVerifying, setIsVerifying] = useState(false)

//   useEffect(() => {
//     if (isAuthenticated()) {
//       completeLogin({
//         access: localStorage.getItem('accessToken'),
//         refresh: localStorage.getItem('refreshToken'),
//         email: localStorage.getItem('userEmail')
//       })
//     }
//   }, [])

//   useEffect(() => {
//     if (!router.isReady) return

//     const uid = router.query.uid
//     const token = router.query.token
//     const alreadyVerified = sessionStorage.getItem('verifiedOnce')

//     if (uid && token && !alreadyVerified) {
//       setIsVerifying(true)
//       setError('')
//       setInfo('')

//       Auth.verifyEmail({ uid, token })
//         .then(() => {
//           setInfo('Email verified successfully! You can log in now.')
//           sessionStorage.setItem('verifiedOnce', '1')
//         })
//         .catch((e) => {
//           setError(getAuthErrorMessage(e, 'Verification failed or link expired.'))
//         })
//         .finally(() => {
//           setIsVerifying(false)
//           router.replace('/login', undefined, { shallow: true })
//         })
//     }
//   }, [router.isReady, router.query.uid, router.query.token, router])

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setError('')
//     setInfo('')
//     setLoading(true)

//     try {
//       const res = await Auth.login(formData)
//       completeLogin({
//         access: res.data.access,
//         refresh: res.data.refresh,
//         email: formData.email
//       })
//     } catch (err) {
//       setError(getAuthErrorMessage(err, 'Login failed. Please try again.'))
//       setLoading(false)
//     }
//   }

//   return (
//     <AuthLayout title="Log In" description="Sign in to your App Optimax ASO dashboard.">
//       {isVerifying && (
//         <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">
//           <div className="bg-white rounded-2xl p-8 text-center max-w-sm mx-4">
//             <Loader2 className="animate-spin text-[#00CFB8] mx-auto mb-4" size={36} />
//             <h3 className="text-xl font-bold text-[#002855] mb-2">Verifying Email...</h3>
//             <p className="text-gray-500 text-sm">Please wait while we verify your account.</p>
//           </div>
//         </div>
//       )}

//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
//         <p className="text-gray-300 text-sm">Access your ASO dashboard</p>
//       </div>

//       {info && !loading && (
//         <div className="bg-green-500/20 border border-green-500/40 text-green-100 px-4 py-3 rounded-lg mb-6 flex items-center text-sm">
//           <CheckCircle2 size={16} className="mr-2 shrink-0" />
//           <span>{info}</span>
//         </div>
//       )}

//       {error && !loading && (
//         <div className="bg-red-500/20 border border-red-500/40 text-red-100 px-4 py-3 rounded-lg mb-6 text-sm text-center">
//           {error}
//         </div>
//       )}

//       {loading && (
//         <div className="bg-[#00CFB8]/20 border border-[#00CFB8]/40 text-white px-4 py-3 rounded-lg mb-6 flex items-center justify-center text-sm">
//           <Loader2 className="animate-spin mr-2" size={16} />
//           Logging you in...
//         </div>
//       )}

//       <form onSubmit={handleSubmit} className="space-y-5">
//         <div>
//           <label className="block text-gray-200 text-xs font-semibold mb-2 uppercase tracking-wide">
//             Email Address
//           </label>
//           <div className="relative">
//             <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               disabled={isVerifying || loading}
//               className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00CFB8] focus:ring-1 focus:ring-[#00CFB8]"
//               placeholder="name@company.com"
//             />
//           </div>
//         </div>

//         <div>
//           <label className="block text-gray-200 text-xs font-semibold mb-2 uppercase tracking-wide">
//             Password
//           </label>
//           <div className="relative">
//             <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               disabled={isVerifying || loading}
//               className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00CFB8] focus:ring-1 focus:ring-[#00CFB8]"
//               placeholder="••••••••"
//             />
//           </div>
//           <div className="text-right mt-2">
//             <Link href="/forgot-password" className="text-xs text-[#00CFB8] hover:text-white transition-colors">
//               Forgot Password?
//             </Link>
//           </div>
//         </div>

//         <button
//           type="submit"
//           disabled={loading || isVerifying}
//           className="w-full bg-[#00CFB8] hover:bg-[#00B5A0] text-[#002855] font-bold py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           {loading ? 'Signing In...' : 'Sign In'}
//         </button>
//       </form>

//       <p className="mt-8 text-center text-gray-300 text-sm">
//         Don&apos;t have an account?{' '}
//         <Link href="/signup" className="text-[#00CFB8] font-semibold hover:text-white transition-colors">
//           Sign Up
//         </Link>
//       </p>
//     </AuthLayout>
//   )
// }




// pages/login.js — REPLACE ENTIRE FILE WITH THIS

import { useEffect } from 'react'
import { useRouter } from 'next/router'

const REACT_APP_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL || 'http://localhost:3000'

export default function LoginPage() {
  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) return

    // ✅ Pass uid & token params too (for email verification links)
    const params = new URLSearchParams()
    Object.entries(router.query).forEach(([key, value]) => {
      if (value) params.set(key, value)
    })

    const query = params.toString()
    const target = `${REACT_APP_URL}/login${query ? `?${query}` : ''}`

    // Redirect straight to React login
    window.location.replace(target)
  }, [router.isReady, router.query])

  // Brief loading screen while redirecting
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #002855 0%, #004080 100%)',
    }}>
      <div style={{
        width: 36,
        height: 36,
        border: '3px solid #00CFB8',
        borderTop: '3px solid transparent',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}