import React from 'react'

const steps = [
  { k: '01', t: 'Discovery', d: 'Goals, context, and constraints. Structured intake and direction setting.' },
  { k: '02', t: 'Research', d: 'Competitive scan, references, and problem framing.' },
  { k: '03', t: 'Concepts', d: 'Explorations, sketches, and narrative alignment.' },
  { k: '04', t: 'Design', d: 'High-fidelity visuals, prototypes, and systems.' },
  { k: '05', t: 'Deliver', d: 'Documentation, specs, and launch support.' }
]

const Process = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900" style={{ fontFamily: 'ui-serif, Georgia, Cambria, Times New Roman, Times, serif' }}>Process</h2>
        <div className="mt-10 overflow-x-auto">
          <div className="min-w-[800px] grid grid-cols-5 gap-6">
            {steps.map(s => (
              <div key={s.k} className="relative rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <span className="text-slate-400 text-sm">{s.k}</span>
                <h3 className="mt-2 font-medium text-slate-900">{s.t}</h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">{s.d}</p>
                <div className="absolute inset-0 rounded-2xl pointer-events-none ring-1 ring-transparent hover:ring-emerald-400/40 transition" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
