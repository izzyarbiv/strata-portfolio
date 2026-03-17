'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Calendar, CheckCircle2 } from 'lucide-react'

const budgetRanges = [
  'Under $10k',
  '$10k – $25k',
  '$25k – $50k',
  '$50k – $100k',
  '$100k+',
  'Not sure yet',
]

interface FormState {
  name: string
  email: string
  description: string
  budget: string
}

export function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    description: '',
    budget: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs font-bold tracking-widest uppercase text-accent-light mb-4 block">
              Let&apos;s Build Together
            </span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8">
              Start a<br />
              <span className="gradient-text">Project.</span>
            </h2>
            <p className="text-muted leading-relaxed mb-10 max-w-md">
              Have a system to build, a platform to scale, or an idea to validate? Tell us what you&apos;re working on
              and we&apos;ll get back to you within 24 hours.
            </p>

            {/* Contact options */}
            <div className="space-y-4">
              <a
                href="mailto:hello@strata.dev"
                className="flex items-center gap-3 p-4 rounded-xl glass border border-border hover:border-accent/30 transition-all group"
              >
                <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-4 h-4 text-accent-light" />
                </div>
                <div>
                  <div className="text-xs text-muted">Email us directly</div>
                  <div className="text-sm font-semibold">hello@strata.dev</div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 p-4 rounded-xl glass border border-border hover:border-accent/30 transition-all group"
              >
                <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Calendar className="w-4 h-4 text-accent-light" />
                </div>
                <div>
                  <div className="text-xs text-muted">Schedule a call</div>
                  <div className="text-sm font-semibold">Book a 30-min discovery call</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center p-12 rounded-2xl glass border border-border text-center h-full min-h-[400px]">
                <div className="p-4 rounded-full bg-accent/10 mb-6">
                  <CheckCircle2 className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Message Received</h3>
                <p className="text-muted text-sm">
                  Thanks for reaching out. We&apos;ll review your project and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 p-8 rounded-2xl glass border border-border"
              >
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold mb-2 tracking-wide" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30 text-sm transition-all placeholder:text-muted/50"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold mb-2 tracking-wide" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30 text-sm transition-all placeholder:text-muted/50"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-xs font-semibold mb-2 tracking-wide" htmlFor="description">
                    Project Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={4}
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Tell us about the system you want to build..."
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30 text-sm transition-all resize-none placeholder:text-muted/50"
                  />
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-xs font-semibold mb-2 tracking-wide" htmlFor="budget">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30 text-sm transition-all appearance-none"
                  >
                    <option value="" disabled>Select a range</option>
                    {budgetRanges.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-accent hover:bg-accent-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all duration-200"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
