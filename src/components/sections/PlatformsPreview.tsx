'use client'

import { motion } from 'framer-motion'
import { Section, Container, Button, Card } from '@/components/ui'
import { ArrowRight } from 'lucide-react'

const platforms = [
  {
    id: '1',
    name: 'Hadar',
    description: 'AI-powered real estate operating system',
    features: ['Tenant Communication', 'Rent Collection', 'Maintenance Workflows', 'Analytics'],
    color: 'from-blue-500 to-cyan-500',
    slug: 'hadar',
  },
  {
    id: '2',
    name: 'NexusFlow',
    description: 'Enterprise automation platform',
    features: ['Workflow Orchestration', 'Event Streaming', 'Rule Engine', 'Compliance'],
    color: 'from-purple-500 to-pink-500',
    slug: 'nexusflow',
  },
  {
    id: '3',
    name: 'Stratum API',
    description: 'Unified API gateway and management',
    features: ['API Gateway', 'Developer Portal', 'Rate Limiting', 'Analytics'],
    color: 'from-green-500 to-emerald-500',
    slug: 'stratum-api',
  },
]

export function PlatformsPreview() {
  return (
    <Section className="bg-gradient-to-b from-black to-gray-900" id="platforms">
      <Container>
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 mb-8"
          >
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white">
              Platforms We&apos;ve Built
            </h2>
            <p className="text-xl text-white/60 max-w-2xl">
              Intelligent systems designed to solve real business problems at scale.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {platforms.map((platform, idx) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <Card>
                <div className={`h-2 w-16 rounded-full bg-gradient-to-r ${platform.color} mb-6`} />

                <h3 className="text-2xl font-bold text-white mb-2">{platform.name}</h3>
                <p className="text-white/60 mb-6 text-sm">{platform.description}</p>

                <div className="space-y-2 mb-8">
                  {platform.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${platform.color}`} />
                      <span className="text-sm text-white/70">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button href={`/platforms/${platform.slug}`} variant="ghost" className="group">
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button href="/platforms" variant="secondary" size="lg">
            View All Platforms
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </Container>
    </Section>
  )
}
