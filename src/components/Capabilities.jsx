import React from 'react'
import { PenTool, Layout, Shapes, Palette, Camera, Sparkles } from 'lucide-react'

const items = [
  { icon: PenTool, title: 'Brand Identity', copy: 'Logos, typographic systems, art direction.' },
  { icon: Layout, title: 'UI/UX', copy: 'Interface design, prototyping, design systems.' },
  { icon: Shapes, title: 'Product Design', copy: 'End-to-end flows, wireframes, interactions.' },
  { icon: Palette, title: 'Visual Design', copy: 'Grid-driven layouts, editorial design.' },
  { icon: Camera, title: 'Content', copy: 'Asset curation, creative direction.' },
  { icon: Sparkles, title: 'Motion', copy: 'Micro-interactions, transitions, prototypes.' }
]

const Capabilities = () => {
  return (
    <section className="bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900" style={{ fontFamily: 'ui-serif, Georgia, Cambria, Times New Roman, Times, serif' }}>Capabilities</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, copy }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white/60 backdrop-blur p-6 hover:shadow-lg hover:shadow-sky-900/5 transition-shadow">
              <Icon className="h-6 w-6 text-sky-600" />
              <h3 className="mt-4 font-medium text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Capabilities
