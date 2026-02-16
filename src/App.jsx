import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NewsEvents from './pages/NewsEvents'
import Location from './pages/Locations'
import NastpAlpha from './Chapters/NastpAlpha'
import NastpDelta from './Chapters/NastpDelta'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#001233] text-white font-sans">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> 
            <Route path="/news" element={<NewsEvents />} /> 
            <Route path="/location" element={<Location />} /> 
            <Route path="/chapters/alpha" element={<NastpAlpha />} /> 
            <Route path="/chapters/delta" element={<NastpDelta />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App