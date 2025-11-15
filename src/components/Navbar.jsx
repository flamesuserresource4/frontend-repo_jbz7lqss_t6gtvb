import React from 'react'

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 flex items-center justify-between rounded-full border border-white/20 bg-white/10 backdrop-blur supports-[backdrop-filter]:bg-white/10 py-3 px-4 text-white">
          <a href="#" className="font-medium tracking-wide">Designer</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-sky-300">About</a>
            <a href="#work" className="hover:text-sky-300">Work</a>
            <a href="#capabilities" className="hover:text-sky-300">Capabilities</a>
            <a href="#process" className="hover:text-sky-300">Process</a>
            <a href="#testimonials" className="hover:text-sky-300">Testimonials</a>
            <a href="#contact" className="hover:text-sky-300">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
