'use client'

import { motion } from 'framer-motion'
import { services } from '@/data/services'
import { CheckCircle2 } from 'lucide-react'

export function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-accent-light mb-4 block">
            What We Do
          </span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
            Layers of <span className="gradient-text">Innovation.</span>
          </h2>
          <p className="text-muted max-w-xl text-lg leading-relaxed">
            From full-stack SaaS builds to cloud infrastructure, we craft each layer of your system with precision.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative p-7 rounded-2xl glass border border-border hover:border-accent/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 overflow-hidden"
              >
                {/* Background shimmer on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${service.accent}/5 via-transparent to-transparent`} />

                {/* Icon */}
                <div className={`relative inline-flex p-3 rounded-xl bg-gradient-to-br ${service.accent} mb-5`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>

                <h3 className="relative text-xl font-bold mb-3">{service.title}</h3>
                <p className="relative text-sm text-muted mb-6 leading-relaxed">{service.description}</p>

                {/* Detail list */}
                <ul className="relative space-y-2">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-xs text-muted">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent/60 mt-0.5 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
