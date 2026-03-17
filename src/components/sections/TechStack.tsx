'use client'

import { motion } from 'framer-motion'
import { techStack, techCategories } from '@/data/techStack'

export function TechStack() {
  return (
    <section className="py-32 px-6">
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
            Our Toolkit
          </span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
            Built with the <span className="gradient-text">Best.</span>
          </h2>
          <p className="text-muted max-w-xl text-lg leading-relaxed">
            We work with best-in-class tools and technologies chosen for performance, reliability, and developer ergonomics.
          </p>
        </motion.div>

        {/* Tech by category */}
        <div className="space-y-12">
          {techCategories.map((category, ci) => {
            const items = techStack.filter((t) => t.category === category)
            if (!items.length) return null
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: ci * 0.06, duration: 0.5 }}
              >
                <h3 className="text-xs font-bold tracking-widest uppercase text-muted mb-5">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((tech, i) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl glass border border-border hover:border-accent/30 transition-all duration-200 cursor-default"
                    >
                      {/* Color dot */}
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: tech.color }}
                      />
                      <span className="text-sm font-medium group-hover:text-foreground text-muted transition-colors">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
