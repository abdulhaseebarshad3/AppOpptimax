import { useRouter } from 'next/router'
import Navbar from './Navbar'
import Footer from './Footer'

const AUTH_PATHS = ['/login', '/signup', '/forgot-password', '/reset-password']

export default function LayoutShell({ children }) {
  const router = useRouter()
  const isAuthPage = AUTH_PATHS.includes(router.pathname)

  if (isAuthPage) {
    return children
  }

  return (
    <div className="min-h-screen bg-[#001233] text-white font-sans">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
