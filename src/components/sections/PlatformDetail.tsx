'use client'

import { Container, Section } from '@/components/ui'
import { motion } from 'framer-motion'

const platformsData = {
  hadar: {
    name: 'Hadar',
    color: 'from-blue-600 to-cyan-600',
    overview: 'AI-powered real estate operating system that automates rent collection, tenant communication, maintenance coordination, and portfolio intelligence.',
    problem: 'Property management is inefficient and fragmented. Teams juggle spreadsheets, emails, and manual processes. Tenants can\'t pay easily, maintenance requests get lost, and leadership has no real-time visibility into portfolio health.',
    solution: 'A centralized AI-powered platform that handles tenant communication, automates rent collection, coordinates maintenance workflows, and provides real-time analytics.',
    features: [
      'AI Secretary for intelligent tenant communication',
      'Automated rent collection with flexible payment options',
      'Intelligent maintenance workflow coordination',
      'Real-time portfolio analytics and reporting',
      'Multi-property management in one dashboard',
      'Compliance and audit reporting',
    ],
    results: [
      'Tenant communication handled 24/7 by AI',
      '95% rent collected on time',
      'Maintenance resolution time reduced by 60%',
      'Operations team efficiency increased by 3x',
    ],
  },
  'nexusflow': {
    name: 'NexusFlow',
    color: 'from-purple-600 to-pink-600',
    overview: 'Enterprise automation platform processing 2M+ events daily with sub-80ms latency.',
    problem: 'Fortune 500 company had 300+ manual workflows across 12 internal systems. Resulting in operational delays and 8%+ human error rates.',
    solution: 'Designed and built a microservices-based automation platform with visual workflow builder, real-time event streaming, and adaptive rule engine.',
    features: [
      'Visual no-code workflow builder with 80+ pre-built connectors',
      'Real-time event streaming with guaranteed message delivery',
      'Adaptive rule engine supporting complex conditional branching',
      'Multi-tenant architecture with RBAC',
      'Audit trail and compliance reporting for SOC 2',
      'Sub-80ms average processing latency',
    ],
    results: [
      '2.1M events processed daily with 99.97% uptime',
      'Error rate reduced from 8.2% to 0.03%',
      '340 workflows automated, saving 4,200 staff hours/month',
      '$2.1M annual savings for the client',
    ],
  },
  'stratum-api': {
    name: 'Stratum API',
    color: 'from-green-600 to-emerald-600',
    overview: 'Unified API gateway handling 50M+ requests/month with intelligent rate limiting, versioning, and analytics.',
    problem: '6 different internal APIs with no unified access layer. Documentation sprawl, inconsistent auth, no visibility into API health or usage patterns.',
    solution: 'Built a unified gateway layer in Go for performance-critical routing, with React-based developer portal and real-time analytics.',
    features: [
      'Intelligent rate limiting with per-client burst tolerance',
      'Automatic OpenAPI documentation generation and versioning',
      'Real-time request analytics and error tracking',
      'JWT + OAuth2 unified authentication layer',
      'Self-service developer portal with sandbox environments',
      'P99 latency of 12ms',
    ],
    results: [
      '50M+ requests/month with P99 latency of 12ms',
      'Developer onboarding time reduced by 70%',
      'API error rate cut by 65%',
      '6 legacy APIs unified under single gateway',
    ],
  },
}

export function PlatformDetail({ id }: { id: string }) {
  const platform = platformsData[id as keyof typeof platformsData]

  if (!platform) {
    return (
      <Section className="bg-black min-h-screen pt-32">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl font-black text-white">Platform not found</h1>
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
            <div className={`h-16 w-1 rounded-full bg-gradient-to-b ${platform.color} mb-8`} />
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-white mb-6">
              {platform.name}
            </h1>
            <p className="text-xl text-white/60 mb-8">{platform.overview}</p>
          </motion.div>
        </Container>
      </Section>

      {/* Problem / Solution */}
      <Section className="bg-gradient-to-b from-black to-gray-900">
        <Container>
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-white mb-6">The Problem</h2>
              <p className="text-white/70 leading-relaxed">{platform.problem}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-white mb-6">Our Solution</h2>
              <p className="text-white/70 leading-relaxed">{platform.solution}</p>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Features */}
      <Section className="bg-black">
        <Container>
          <h2 className="text-4xl font-black text-white mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {platform.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
              >
                <div className={`h-1 w-8 rounded-full bg-gradient-to-r ${platform.color} mb-4`} />
                <p className="text-white/80">{feature}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Results */}
      <Section className="bg-gradient-to-b from-black to-gray-900 border-t border-white/10">
        <Container>
          <h2 className="text-4xl font-black text-white mb-12">Results</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {platform.results.map((result, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-8 rounded-2xl bg-gradient-to-br ${platform.color} bg-opacity-10 border border-white/10`}
              >
                <p className="text-lg text-white font-semibold">{result}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  )
}
