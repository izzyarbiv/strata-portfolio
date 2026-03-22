'use client'

import { Container, Section } from '@/components/ui'
import { motion } from 'framer-motion'
import { Code, Database, Cloud, Zap, Shield, GitBranch } from 'lucide-react'

const techStack = [
  {
    category: 'Backend & API',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    items: [
      { name: 'Node.js / TypeScript', description: 'High-performance async runtime' },
      { name: 'FastAPI / Python', description: 'Modern web framework for APIs' },
      { name: 'GraphQL & REST', description: 'Flexible API design patterns' },
    ],
  },
  {
    category: 'Database & Storage',
    icon: Database,
    color: 'from-purple-500 to-pink-500',
    items: [
      { name: 'Supabase', description: 'PostgreSQL with auth and storage' },
      { name: 'Redis', description: 'In-memory caching and streams' },
      { name: 'ClickHouse', description: 'Real-time analytics database' },
    ],
  },
  {
    category: 'Infrastructure',
    icon: Cloud,
    color: 'from-green-500 to-emerald-500',
    items: [
      { name: 'AWS / GCP', description: 'Multi-cloud deployment' },
      { name: 'Kubernetes', description: 'Container orchestration' },
      { name: 'Terraform', description: 'Infrastructure as code' },
    ],
  },
  {
    category: 'AI / ML',
    icon: Zap,
    color: 'from-orange-500 to-red-500',
    items: [
      { name: 'LLMs', description: 'Large language models' },
      { name: 'Vector Embeddings', description: 'Semantic search & retrieval' },
      { name: 'Fine-tuning', description: 'Custom model training' },
    ],
  },
  {
    category: 'DevOps & CI/CD',
    icon: GitBranch,
    color: 'from-cyan-500 to-blue-500',
    items: [
      { name: 'GitHub Actions', description: 'Automated testing & deployment' },
      { name: 'Docker', description: 'Container technology' },
      { name: 'Vercel', description: 'Serverless deployment' },
    ],
  },
  {
    category: 'Security',
    icon: Shield,
    color: 'from-rose-500 to-pink-500',
    items: [
      { name: 'OAuth2 / JWT', description: 'Modern authentication' },
      { name: 'End-to-end encryption', description: 'Data protection' },
      { name: 'SOC 2 Compliance', description: 'Enterprise security' },
    ],
  },
]

export function TechnologySection() {
  return (
    <div className="bg-black">
      {/* Hero */}
      <Section className="bg-black pt-32 border-b border-white/10">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-white mb-6">
              Technology Stack
            </h1>
            <p className="text-xl text-white/60">
              We build with best-in-class tools chosen for performance, scalability, and developer experience.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Tech Stack Grid */}
      <Section className="bg-black">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((tech, idx) => {
              const Icon = tech.icon
              return (
                <motion.div
                  key={tech.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${tech.color} text-white mb-6`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-6">{tech.category}</h3>

                  <div className="space-y-4">
                    {tech.items.map((item) => (
                      <div key={item.name}>
                        <p className="font-semibold text-white mb-1">{item.name}</p>
                        <p className="text-sm text-white/60">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Why These Tools */}
      <Section className="bg-gradient-to-b from-black to-gray-900 border-t border-white/10">
        <Container className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black text-white mb-8">Why These Technologies?</h2>

            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                Every tool in our stack is chosen for a specific reason: performance, reliability, or developer experience.
                We avoid hype and vendor lock-in, choosing technologies that have proven themselves at scale.
              </p>

              <p>
                Our platforms handle billions of events, millions of users, and complex workflows. The tools we choose
                need to scale gracefully, fail predictably, and remain maintainable for years to come.
              </p>

              <p>
                We invest time in understanding the strengths and weaknesses of each tool. We know which databases to use
                for which workloads, which languages make sense for different problems, and how to build systems that are
                both fast and maintainable.
              </p>
            </div>
          </motion.div>
        </Container>
      </Section>
    </div>
  )
}
