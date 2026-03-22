import { Metadata } from 'next'
import { ContactSection } from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Contact — Strata',
  description: 'Get in touch to start a project with Strata.',
}

export default function ContactPage() {
  return <ContactSection />
}
