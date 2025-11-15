import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/80 pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white/95"
          style={{ fontFamily: 'ui-serif, Georgia, Cambria, Times New Roman, Times, serif' }}
        >
          Graphic Designer & UI/UX Designer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: 'easeOut' }}
          className="mt-6 max-w-2xl text-slate-200/90 text-lg leading-relaxed"
        >
          I craft elegant visual systems and thoughtful digital products with a timeless, grid-driven approach — refined, minimal, and quietly confident.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="mt-10 flex items-center gap-4"
        >
          <a href="#work" className="group inline-flex items-center px-5 py-3 rounded-full bg-gradient-to-r from-sky-600 to-emerald-600 text-white shadow-lg shadow-sky-900/20 hover:from-sky-500 hover:to-emerald-500 transition-colors">
            View Work
            <span className="ml-2 inline-block translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-full backdrop-blur bg-white/10 text-white border border-white/20 hover:bg-white/15 transition-colors">
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
