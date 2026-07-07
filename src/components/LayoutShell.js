import Navbar from './Navbar'
import Footer from './Footer'

export default function LayoutShell({ children }) {
  return (
    <div className="min-h-screen bg-[#001233] text-white font-sans">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
