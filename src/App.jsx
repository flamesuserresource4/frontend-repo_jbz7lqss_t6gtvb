import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Work from './components/Work'
import Capabilities from './components/Capabilities'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <div id="about"><About /></div>
      <div id="capabilities"><Capabilities /></div>
      <div id="process"><Process /></div>
      <div id="work"><Work /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="contact"><Contact /></div>
    </div>
  )
}

export default App
