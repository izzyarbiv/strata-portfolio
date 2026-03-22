'use client'

import { motion } from 'framer-motion'
import { Section, Container, Card } from '@/components/ui'
import { Send } from 'lucide-react'
import { useState } from 'react'

const conversationExamples = [
  {
    user: 'I can only pay half the rent this week.',
    ai: 'Thank you for letting me know. I understand cash flow can be tight sometimes. Let me help create a flexible payment arrangement. How about we split this into two payments - $2,500 this week and $2,500 next week? I can also pause any late fees for this period.',
  },
  {
    user: 'The kitchen sink is leaking.',
    ai: 'I\'m sorry to hear that. I\'ve immediately logged this as a priority maintenance request. A plumber from our trusted network will contact you within 2 hours to schedule a visit. Would you prefer morning or afternoon? I\'ve also provided them your unit access code.',
  },
  {
    user: 'When is my next rent due?',
    ai: 'Your next rent payment of $5,000 is due on April 1st. You have 8 days remaining. You can pay through the portal, bank transfer, or automatic debit. Would you like me to set up a reminder 3 days before?',
  },
]

export function AIDemo() {
  const [activeIdx, setActiveIdx] = useState(0)
  const example = conversationExamples[activeIdx]

  return (
    <Section className="bg-gradient-to-b from-gray-900 to-black" id="ai-demo">
      <Container>
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-4"
          >
            AI Automation in Action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60"
          >
            See how our AI systems handle real-world interactions
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card>
            {/* Demo Chat */}
            <div className="space-y-6">
              {/* User Message */}
              <motion.div
                key={`user-${activeIdx}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex justify-end"
              >
                <div className="max-w-xs bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl rounded-tr-sm px-4 py-3">
                  <p className="text-sm">{example.user}</p>
                </div>
              </motion.div>

              {/* AI Response */}
              <motion.div
                key={`ai-${activeIdx}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex justify-start"
              >
                <div className="max-w-xs bg-white/10 border border-white/20 text-white/90 rounded-2xl rounded-tl-sm px-4 py-3">
                  <p className="text-sm leading-relaxed">{example.ai}</p>
                </div>
              </motion.div>
            </div>

            {/* Example Selector */}
            <div className="mt-12 pt-8 border-t border-white/10 space-y-4">
              <p className="text-xs text-white/50 uppercase tracking-widest font-semibold">Other Examples</p>
              <div className="grid grid-cols-1 gap-2">
                {conversationExamples.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`text-left p-3 rounded-lg transition-all ${
                      activeIdx === idx
                        ? 'bg-white/20 border border-white/30 text-white'
                        : 'bg-white/5 border border-white/10 text-white/60 hover:bg-white/10'
                    }`}
                  >
                    <p className="text-sm font-medium">"{conversationExamples[idx].user}"</p>
                  </button>
                ))}
              </div>
            </div>
          </Card>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center text-white/60"
          >
            <p className="max-w-2xl mx-auto">
              Built on advanced language models and domain knowledge, our AI assistants handle tenant communication,
              maintenance coordination, and financial workflows - freeing up your team to focus on strategy.
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
