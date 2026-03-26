'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Section, Container, Card } from '@/components/ui'
import { useState } from 'react'

const conversationExamples = [
  {
    label: 'Rent inquiry',
    user: 'When is rent due and how do I pay?',
    ai: 'Hey Daniel! Your next payment of $3,500 is due March 1st — that\'s 6 days away 📅\n\nYou can pay by:\n• Reply PAY to charge your card on file\n• Bank transfer (details pinned above)\n• Tap the portal link: pay.hadar.app/d/4x2\n\nWant me to set a reminder 3 days before each month?',
  },
  {
    label: 'Late payment',
    user: 'Hey, I can only do half rent this month. Is that okay?',
    ai: 'Hi Sarah 👋 No worries — it happens. I\'ve split your balance into two payments: $1,750 due today and $1,750 on the 20th. Late fees are paused automatically. You can pay via the link below or reply CONFIRM and I\'ll charge your card on file. Let me know if you need anything else!',
  },
  {
    label: 'Maintenance request',
    user: 'The hot water in my shower has been cold for 2 days.',
    ai: 'Oh no, sorry about that! I\'ve logged this as urgent 🔧 Marcus from AquaFix Plumbing will call you within the hour to confirm a time. He already has your unit code so no need to be home. I\'ll send you a follow-up once the job is marked complete.',
  },
]

export function AIDemo() {
  const [activeIdx, setActiveIdx] = useState(0)
  const example = conversationExamples[activeIdx]

  return (
    <Section className="bg-gradient-to-b from-gray-900 to-black" id="ai-demo">
      <Container>
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-6"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.859L0 24l6.335-1.512A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.214-3.733.891.947-3.643-.235-.374A9.818 9.818 0 1112 21.818z"/>
            </svg>
            WhatsApp Integration
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-4"
          >
            AI That Talks Like a Person
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 max-w-2xl mx-auto"
          >
            Hadar connects directly to WhatsApp — where your tenants already are. The same AI also handles SMS, email, and in-app messaging, so nothing slips through the cracks.
          </motion.p>

          {/* Channel badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 flex flex-wrap gap-2 justify-center"
          >
            {['WhatsApp', 'SMS', 'Email', 'In-app'].map((channel) => (
              <span
                key={channel}
                className={`px-3 py-1 rounded-full text-xs font-medium border ${
                  channel === 'WhatsApp'
                    ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400'
                    : 'bg-white/5 border-white/10 text-white/50'
                }`}
              >
                {channel}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="max-w-sm mx-auto">
          {/* Phone Frame */}
          <div className="rounded-[2.5rem] bg-[#111] border border-white/10 shadow-2xl overflow-hidden">
            {/* WhatsApp-style header */}
            <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-400 flex items-center justify-center text-sm font-bold text-emerald-900 shrink-0">
                H
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-none">Hadar AI</p>
                <p className="text-emerald-200 text-xs mt-0.5">online</p>
              </div>
            </div>

            {/* Chat area */}
            <div
              className="px-3 py-4 space-y-3 min-h-[280px] flex flex-col justify-end"
              style={{ background: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3C/svg%3E") #0a1929' }}
            >
              {/* Tenant message (right, green) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`user-${activeIdx}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex justify-end"
                >
                  <div className="max-w-[80%] bg-[#dcf8c6] text-gray-900 rounded-2xl rounded-tr-sm px-3 py-2 shadow">
                    <p className="text-sm leading-snug">{example.user}</p>
                    <p className="text-[10px] text-gray-500 text-right mt-1">9:41 AM ✓✓</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* AI response (left, white) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`ai-${activeIdx}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, delay: 0.15 }}
                  className="flex justify-start"
                >
                  <div className="max-w-[85%] bg-white text-gray-900 rounded-2xl rounded-tl-sm px-3 py-2 shadow">
                    <p className="text-sm leading-snug whitespace-pre-line">{example.ai}</p>
                    <p className="text-[10px] text-gray-400 text-right mt-1">9:41 AM</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Input bar */}
            <div className="bg-[#1a1a1a] px-3 py-2 flex items-center gap-2">
              <div className="flex-1 bg-[#2a2a2a] rounded-full px-4 py-2 text-white/30 text-sm">
                Message
              </div>
              <div className="w-9 h-9 rounded-full bg-[#075E54] flex items-center justify-center shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Scenario selector */}
          <div className="mt-6 flex gap-2 justify-center flex-wrap">
            {conversationExamples.map((ex, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeIdx === idx
                    ? 'bg-white text-black'
                    : 'bg-white/10 text-white/60 hover:bg-white/15 hover:text-white'
                }`}
              >
                {ex.label}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
