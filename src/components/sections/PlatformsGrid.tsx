'use client'

import { Container, Section } from '@/components/ui'
import { motion } from 'framer-motion'

export function PlatformsGrid() {
  const platforms = [
    {
      id: 'hadar',
      name: 'Hadar',
      description: 'AI-powered real estate operating system',
      overview: 'Hadar automates rent collection, tenant communication, maintenance coordination, and portfolio intelligence for modern property management.',
      features: [
        'AI Secretary for tenant communication',
        'Automated rent collection workflows',
        'Intelligent maintenance coordination',
        'Real-time portfolio analytics',
        'Multi-property management',
        'Compliance reporting',
      ],
      color: 'from-blue-600 to-cyan-600',
    },
    {
      id: 'nexusflow',
      name: 'NexusFlow',
      description: 'Enterprise automation platform',
      overview: 'Process 2M+ events daily with sub-80ms latency. Enterprise-grade workflow orchestration for operations teams.',
      features: [
        'Event-driven workflow orchestration',
        'Real-time data streaming',
        'Adaptive rule engine',
        'Multi-tenant architecture',
        'Audit trail & compliance',
        '99.97% uptime guarantee',
      ],
      color: 'from-purple-600 to-pink-600',
    },
    {
      id: 'stratum-api',
      name: 'Stratum API',
      description: 'Unified API gateway and management',
      overview: 'Handle 50M+ requests monthly with intelligent routing, versioning, and self-service developer portal.',
      features: [
        'Intelligent API gateway',
        'Rate limiting & burst tolerance',
        'OpenAPI documentation generation',
        'Real-time analytics',
        'JWT & OAuth2 authentication',
        'Self-service developer portal',
      ],
      color: 'from-green-600 to-emerald-600',
    },
  ]

  return (
    <Section className="bg-black min-h-screen pt-32">
      <Container>
        <div className="mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-black tracking-tighter text-white mb-6"
          >
            Our Platforms
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 max-w-2xl"
          >
            Intelligent systems designed for the modern enterprise.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, idx) => (
            <motion.a
              key={platform.id}
              href={`/platforms/${platform.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className={`h-48 rounded-2xl bg-gradient-to-br ${platform.color} p-6 flex flex-col justify-between relative overflow-hidden cursor-pointer`}>
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />

                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-white mb-2">{platform.name}</h3>
                  <p className="text-white/90 text-sm">{platform.description}</p>
                </div>

                <div className="relative z-10 flex items-center gap-2 text-white text-sm font-medium group-hover:gap-3 transition-all">
                  Learn more
                  <span className="text-lg">→</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </Section>
  )
}
