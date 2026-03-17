'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

const stats = [
  { value: '50M+', label: 'API requests / month' },
  { value: '99.97%', label: 'Uptime across all systems' },
  { value: '4', label: 'Successful SaaS launches' },
  { value: '<80ms', label: 'Avg. processing latency' },
]

export function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Eyebrow */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-semibold text-accent-light tracking-widest uppercase mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Engineered Systems · Scalable by Design
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter leading-[0.9] mb-8 max-w-5xl"
        >
          Software
          <br />
          <span className="gradient-text">Built in</span>
          <br />
          Layers.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-lg md:text-xl text-muted max-w-2xl mb-12 leading-relaxed"
        >
          Strata builds scalable SaaS systems, developer tools, and modern platforms.
          We layer performance, reliability, and craft into every product we ship.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 mb-24"
        >
          <button
            onClick={() => handleScroll('#work')}
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent hover:bg-accent-dark text-white font-semibold text-sm transition-all duration-200 hover:gap-3"
          >
            View Work
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <button
            onClick={() => handleScroll('#contact')}
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass text-sm font-semibold hover:bg-surface transition-all duration-200"
          >
            <Play className="w-4 h-4 text-accent" />
            Start a Project
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-black tracking-tight gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-muted font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-accent/60 to-transparent"
        />
      </motion.div>
    </section>
  )
}
