import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="relative bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900" style={{ fontFamily: 'ui-serif, Georgia, Cambria, Times New Roman, Times, serif' }}>Let’s build something meaningful</h2>
              <p className="mt-4 text-slate-600">For collaborations, commissions, or speaking — drop a line. I’ll respond within 48 hours.</p>
              <div className="mt-6 flex gap-4 text-slate-600">
                <a href="#" className="hover:text-sky-700">Dribbble</a>
                <a href="#" className="hover:text-sky-700">Behance</a>
                <a href="#" className="hover:text-sky-700">LinkedIn</a>
                <a href="#" className="hover:text-sky-700">Instagram</a>
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm text-slate-600">Name</label>
                <input className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm text-slate-600">Email</label>
                <input type="email" className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="jane@studio.com" />
              </div>
              <div>
                <label className="block text-sm text-slate-600">Message</label>
                <textarea rows="4" className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Project details, goals, timelines..." />
              </div>
              <button className="inline-flex items-center px-5 py-3 rounded-full bg-gradient-to-r from-sky-600 to-emerald-600 text-white shadow-lg shadow-sky-900/20 hover:from-sky-500 hover:to-emerald-500 transition-colors">Send Inquiry</button>
            </form>
          </div>
        </div>
      </div>

      <a href="#contact" className="fixed bottom-6 right-6 rounded-full bg-slate-900 text-white px-5 py-3 shadow-lg hover:bg-slate-800">Start a Project</a>
    </section>
  )
}

export default Contact
