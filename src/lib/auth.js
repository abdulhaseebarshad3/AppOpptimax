import axios from 'axios'

const ensureSlash = (url) => (url?.endsWith('/') ? url : `${url}/`)

const AUTH_BASE = ensureSlash(process.env.NEXT_PUBLIC_AUTH_BASE_URL || '')

export function getAuthErrorMessage(err, fallback = 'Something went wrong. Please try again.') {
  if (!err?.response) {
    if (!AUTH_BASE) {
      return 'Auth API is not configured. Add NEXT_PUBLIC_AUTH_BASE_URL to .env.local and restart the dev server.'
    }
    return 'Unable to reach the server. Check your internet connection or try again later.'
  }

  const data = err.response.data
  if (typeof data === 'string') return data
  if (data?.error) return data.error
  if (data?.detail) return data.detail
  if (data?.non_field_errors?.[0]) return data.non_field_errors[0]

  const field = Object.keys(data || {}).find((key) => Array.isArray(data[key]) && data[key][0])
  if (field) return data[field][0]

  return fallback
}

export const getAccessToken = () => {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('accessToken')
}

export const getRefreshToken = () => {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('refreshToken')
}

export const setTokens = ({ access, refresh }) => {
  if (access) localStorage.setItem('accessToken', access)
  if (refresh) localStorage.setItem('refreshToken', refresh)
}

export const clearTokens = () => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
  localStorage.removeItem('userEmail')
}

export const isAuthenticated = () => !!getAccessToken()

const authApi = axios.create({
  baseURL: AUTH_BASE,
  headers: { 'Content-Type': 'application/json' },
  timeout: 30000
})

export const Auth = {
  register: (payload) => authApi.post('register/', payload),
  login: (payload) => authApi.post('login/', payload),
  logout: (refresh) => authApi.post('logout/', { refresh }),
  verifyEmail: (params) => authApi.get('verify-email/', { params }),
  forgot: (payload) => authApi.post('forgot-password/', payload),
  reset: (payload) => authApi.post('reset-password/', payload)
}

export function redirectToDashboard() {
  const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL || 'http://localhost:3001'
  const params = new URLSearchParams()

  const access = getAccessToken()
  const refresh = getRefreshToken()
  const email = localStorage.getItem('userEmail')

  if (access) params.set('access', access)
  if (refresh) params.set('refresh', refresh)
  if (email) params.set('email', email)

  window.location.href = `${dashboardUrl}/dashboard/overview?${params.toString()}`
}

export function completeLogin({ access, refresh, email }) {
  setTokens({ access, refresh })
  if (email) localStorage.setItem('userEmail', email)
  redirectToDashboard()
}
