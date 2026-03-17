'use client'

import { motion } from 'framer-motion'
import { Layers, Target, Zap, Users } from 'lucide-react'

const values = [
  {
    icon: Layers,
    title: 'Layered Architecture',
    description:
      'Every system we build is designed in layers — clean separation of concerns, predictable interfaces, and composable primitives.',
  },
  {
    icon: Target,
    title: 'Precision Engineering',
    description:
      'We take time to understand the problem deeply before writing a single line of code. Precision beats speed every time.',
  },
  {
    icon: Zap,
    title: 'Performance First',
    description:
      "Performance is not an afterthought — it's a design constraint from day one. We measure, optimize, and repeat.",
  },
  {
    icon: Users,
    title: 'Developer Experience',
    description:
      'Systems should be a joy to work with. We invest in documentation, tooling, and ergonomics for the teams who inherit our work.',
  },
]

export function About() {
  return (
    <section id="about" className="py-32 px-6 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs font-bold tracking-widest uppercase text-accent-light mb-4 block">
              Our Philosophy
            </span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8">
              Scalable
              <br />
              <span className="gradient-text">by Design.</span>
            </h2>

            <div className="space-y-6 text-muted leading-relaxed">
              <p>
                Strata was founded on a simple belief: great software is built in layers. Just like geological strata —
                each layer has a purpose, each layer supports the next, and the system as a whole is stronger for it.
              </p>
              <p>
                We specialize in the kind of work that most teams find hardest: the architecture decisions,
                the platform engineering, the invisible infrastructure that lets product teams move fast
                without breaking things.
              </p>
              <p>
                We don&apos;t take shortcuts. We write code that future engineers will thank us for. We document,
                test, and review — because systems that last are built with discipline, not just talent.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div>
                <div className="text-3xl font-black gradient-text">2019</div>
                <div className="text-xs text-muted mt-1">Founded</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <div className="text-3xl font-black gradient-text">12</div>
                <div className="text-xs text-muted mt-1">Engineers</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <div className="text-3xl font-black gradient-text">30+</div>
                <div className="text-xs text-muted mt-1">Systems shipped</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-6 rounded-2xl glass border border-border hover:border-accent/25 transition-all duration-300 group"
                >
                  <div className="p-2.5 rounded-lg bg-accent/10 inline-flex mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-5 h-5 text-accent-light" />
                  </div>
                  <h3 className="font-bold mb-2 text-sm">{value.title}</h3>
                  <p className="text-xs text-muted leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
