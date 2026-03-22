'use client'

import { Container, Section } from '@/components/ui'
import { motion } from 'framer-motion'

const caseStudiesData = {
  hadar: {
    title: 'Hadar: AI Property Management',
    color: 'from-blue-600 to-cyan-600',
    industry: 'Real Estate',
    problem: 'Property management was fragmented across multiple tools with no automation. Tenant communication was manual, rent collection inconsistent, and there was no real-time visibility into portfolio health.',
    solution: 'Built an AI-powered operating system that centralizes all property management operations with intelligent automation.',
    outcomes: [
      'Tenant communication handled 24/7 by AI',
      '95% rent collected on time',
      'Maintenance resolution time reduced by 60%',
      'Operations team efficiency increased by 3x',
    ],
  },
  nexusflow: {
    title: 'NexusFlow: Enterprise Automation',
    color: 'from-purple-600 to-pink-600',
    industry: 'Enterprise',
    problem: 'Fortune 500 company had 300+ manual workflows spread across 12 systems. Result: operational delays, 8%+ error rates, and significant staff overhead.',
    solution: 'Designed and built an event-driven automation platform with visual workflow builder and real-time processing.',
    outcomes: [
      'Automated 340 workflows completely',
      'Error rate dropped from 8.2% to 0.03%',
      'Saving 4,200 staff hours per month',
      'Processing 2.1M events daily with 99.97% uptime',
    ],
  },
  'stratum-api': {
    title: 'Stratum API: Unified Gateway',
    color: 'from-green-600 to-emerald-600',
    industry: 'SaaS',
    problem: '6 different APIs with no unified access layer. Documentation was fragmented, authentication inconsistent, and there was no visibility into API usage or health.',
    solution: 'Built a unified API gateway with intelligent routing, rate limiting, and a self-service developer portal.',
    outcomes: [
      'Unified 6 legacy APIs under one gateway',
      'Developer onboarding time reduced by 70%',
      'P99 latency: 12ms, handling 50M+ requests/month',
      'API error rate cut by 65% post-launch',
    ],
  },
}

export function CaseStudiesSection() {
  const studies = Object.entries(caseStudiesData)

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
              Case Studies
            </h1>
            <p className="text-xl text-white/60">
              How we solve complex problems with intelligent systems
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Case Studies */}
      <Section className="bg-black">
        <Container>
          <div className="space-y-16">
            {studies.map(([key, study], idx) => (
              <motion.a
                key={key}
                href={`/case-studies/${key}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group block"
              >
                <div className="p-12 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${study.color} mb-4`} />
                      <h3 className="text-3xl font-black text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}>
                        {study.title}
                      </h3>
                      <p className="text-sm text-white/50 mt-2">{study.industry}</p>
                    </div>
                    <span className="text-2xl text-white/30 group-hover:text-white/60 transition-colors">→</span>
                  </div>

                  <p className="text-white/70 mb-8 max-w-2xl">{study.problem}</p>

                  <div>
                    <p className="text-sm text-white/50 mb-3 font-semibold">OUTCOMES</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {study.outcomes.map((outcome) => (
                        <div key={outcome} className="flex items-start gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${study.color} mt-2 shrink-0`} />
                          <span className="text-white/70">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  )
}

export function CaseStudyDetail({ id }: { id: string }) {
  const study = caseStudiesData[id as keyof typeof caseStudiesData]

  if (!study) {
    return (
      <Section className="bg-black min-h-screen pt-32">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl font-black text-white">Case study not found</h1>
          </div>
        </Container>
      </Section>
    )
  }

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
            <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${study.color} mb-8`} />
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-white mb-6">
              {study.title}
            </h1>
            <p className="text-xl text-white/60">{study.industry}</p>
          </motion.div>
        </Container>
      </Section>

      {/* Content */}
      <Section className="bg-gradient-to-b from-black to-gray-900">
        <Container className="max-w-3xl">
          <div className="space-y-16">
            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-white mb-6">The Problem</h2>
              <p className="text-lg text-white/70 leading-relaxed">{study.problem}</p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-white mb-6">Our Solution</h2>
              <p className="text-lg text-white/70 leading-relaxed">{study.solution}</p>
            </motion.div>

            {/* Outcomes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-white mb-8">Outcomes</h2>
              <div className="space-y-4">
                {study.outcomes.map((outcome) => (
                  <div key={outcome} className={`p-6 rounded-2xl bg-gradient-to-br ${study.color} bg-opacity-10 border border-white/10`}>
                    <p className="text-white/80 font-medium">{outcome}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
