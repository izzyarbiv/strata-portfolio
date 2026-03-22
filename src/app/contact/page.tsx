import { Metadata } from 'next'
import { ContactSection } from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a project with Strata. Tell us what you\'re building and we\'ll get back to you within 24 hours.',
  openGraph: {
    title: 'Contact | Strata',
    description: 'Start a project with Strata. Tell us what you\'re building.',
    url: 'https://strata.dev/contact',
    siteName: 'Strata',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Strata',
    description: 'Start a project with Strata.',
  },
  alternates: {
    canonical: 'https://strata.dev/contact',
  },
}

export default function ContactPage() {
  return <ContactSection />
}
