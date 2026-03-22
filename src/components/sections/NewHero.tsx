'use client'

import { motion } from 'framer-motion'
import { Section, Container, Button } from '@/components/ui'
import { ArrowRight, Sparkles } from 'lucide-react'

export function NewHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black pt-24">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/3 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-white/80">AI-Powered Platforms</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-none"
          >
            Building
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Intelligent
            </span>
            <br />
            Platforms
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            We design and build modern AI-powered platforms, SaaS systems, and automation infrastructure.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button href="/platforms" variant="primary" size="lg">
              View Platforms
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Start a Project
            </Button>
          </motion.div>

          {/* Floating card stats */}
          <motion.div
            variants={itemVariants}
            className="mt-20 grid grid-cols-3 gap-6 md:gap-12 pt-12 border-t border-white/10"
          >
            {[
              { label: '3+', value: 'Platforms' },
              { label: '2.1M+', value: 'Events/day' },
              { label: '99.97%', value: 'Uptime' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-black text-white mb-2">{stat.label}</div>
                <div className="text-sm text-white/50 font-medium">{stat.value}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-xs tracking-widest">SCROLL</span>
        <div className="w-1 h-6 border border-white/30 rounded-full" />
      </motion.div>
    </section>
  )
}
