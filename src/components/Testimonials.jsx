import React from 'react'

const quotes = [
  {
    q: 'Elegant, calm, and obsessively crafted. The system clarity was a game changer.',
    a: 'Head of Product, Fintech Co.'
  },
  {
    q: 'Their typography and motion instincts are razor sharp — felt premium end-to-end.',
    a: 'Creative Director, Studio'
  },
  {
    q: 'A steady partner who elevates the work without adding noise. Impeccable taste.',
    a: 'Founder, Startup'
  }
]

const Testimonials = () => {
  return (
    <section className="bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900" style={{ fontFamily: 'ui-serif, Georgia, Cambria, Times New Roman, Times, serif' }}>Testimonials</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {quotes.map((x, i) => (
            <div key={i} className="p-6 rounded-2xl border border-slate-200 bg-white/70 backdrop-blur">
              <p className="text-slate-700 leading-relaxed">“{x.q}”</p>
              <p className="mt-4 text-sm text-slate-500">{x.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
