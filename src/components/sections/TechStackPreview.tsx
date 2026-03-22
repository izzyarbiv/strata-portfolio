'use client'

import { motion } from 'framer-motion'
import { Section, Container } from '@/components/ui'
import { Database, Cloud, Code, Zap } from 'lucide-react'

const techCategories = [
  {
    title: 'Backend',
    icon: Code,
    techs: ['Node.js', 'TypeScript', 'Python', 'FastAPI'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Database',
    icon: Database,
    techs: ['Supabase', 'PostgreSQL', 'Redis', 'ClickHouse'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Infrastructure',
    icon: Cloud,
    techs: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'AI / ML',
    icon: Zap,
    techs: ['LLMs', 'Embeddings', 'Vector Search', 'Fine-tuning'],
    color: 'from-orange-500 to-red-500',
  },
]

export function TechStackPreview() {
  return (
    <Section className="bg-black" id="tech-stack">
      <Container>
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-4"
          >
            Built with Modern Tech
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60"
          >
            Best-in-class technologies for performance, scalability, and reliability
          </motion.p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {techCategories.map((cat, idx) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-white/20 transition-all">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${cat.color} text-white mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-4">{cat.title}</h3>

                  <ul className="space-y-2">
                    {cat.techs.map((tech) => (
                      <li key={tech} className="text-sm text-white/70 flex items-center gap-2">
                        <span className={`w-1 h-1 rounded-full bg-gradient-to-r ${cat.color}`} />
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a href="/technology" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
            Explore our full technology stack →
          </a>
        </motion.div>
      </Container>
    </Section>
  )
}
