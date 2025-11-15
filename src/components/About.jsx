import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="relative bg-slate-50/60">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.08),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl shadow-slate-900/5 ring-1 ring-slate-900/10">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1400&auto=format&fit=crop" alt="Portrait" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 w-24 h-24 border border-slate-300 rounded-2xl" />
          <div className="absolute -top-6 -right-6 w-20 h-20 border border-slate-300 rounded-full" />
        </motion.div>

        <div className="flex flex-col justify-center">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-semibold text-slate-900" style={{ fontFamily: 'ui-serif, Georgia, Cambria, Times New Roman, Times, serif' }}>
            About
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-6 text-slate-600 leading-relaxed text-lg">
            I blend Swiss-influenced precision with contemporary digital craft to design visual identities and interfaces that feel inevitable. My work favors clarity, rhythm, and purposeful restraint.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="mt-10 p-6 rounded-2xl backdrop-blur bg-white/50 border border-slate-200/80 shadow-sm">
            <h3 className="text-slate-900 font-medium tracking-wide">Creative Philosophy</h3>
            <p className="mt-3 text-slate-600">Design should be invisible until it needs to be seen. I aim for work that’s quietly distinctive, balancing typographic discipline, modular systems, and human warmth.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
