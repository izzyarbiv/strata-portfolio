import { Metadata } from 'next'
import { TechnologySection } from '@/components/sections/TechnologySection'

export const metadata: Metadata = {
  title: 'Technology',
  description: 'The technology stack and infrastructure behind Strata platforms — Next.js, Go, Python, PostgreSQL, Kubernetes, and more.',
  openGraph: {
    title: 'Technology | Strata',
    description: 'The technology stack and infrastructure behind Strata platforms.',
    url: 'https://strata.dev/technology',
    siteName: 'Strata',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technology | Strata',
    description: 'The technology stack and infrastructure behind Strata platforms.',
  },
  alternates: {
    canonical: 'https://strata.dev/technology',
  },
}

export default function TechnologyPage() {
  return <TechnologySection />
}
