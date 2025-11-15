import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Fintech Identity & Dashboard',
    cover: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400&auto=format&fit=crop',
    tags: ['Identity', 'UI/UX', 'Design System']
  },
  {
    title: 'Wellness Mobile App',
    cover: 'https://images.unsplash.com/photo-1551292831-023188e78222?q=80&w=1400&auto=format&fit=crop',
    tags: ['Product', 'Prototyping', 'Motion']
  },
  {
    title: 'Editorial Portfolio',
    cover: 'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1400&auto=format&fit=crop',
    tags: ['Web', 'Art Direction']
  }
]

const Work = () => {
  return (
    <section id="work" className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900" style={{ fontFamily: 'ui-serif, Georgia, Cambria, Times New Roman, Times, serif' }}>Selected Work</h2>
          <a href="#" className="text-sky-700 hover:text-sky-600">View All →</a>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.cover} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  {p.tags.map(t => (
                    <span key={t} className="px-2 py-1 rounded-full bg-slate-100 border border-slate-200">{t}</span>
                  ))}
                </div>
                <h3 className="mt-3 text-lg font-medium text-slate-900 group-hover:text-sky-700 transition-colors">{p.title}</h3>
              </div>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-emerald-400/40 transition-[box-shadow,ring]" style={{ boxShadow: '0 0 0 0 rgba(52,211,153,0)', }} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
