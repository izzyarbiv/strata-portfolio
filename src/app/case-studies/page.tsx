import { Metadata } from 'next'
import { CaseStudiesSection } from '@/components/sections/CaseStudiesSection'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'How Strata solved complex problems with intelligent systems — real outcomes, measurable results.',
  openGraph: {
    title: 'Case Studies | Strata',
    description: 'How Strata solved complex problems with intelligent systems — real outcomes, measurable results.',
    url: 'https://strata.dev/case-studies',
    siteName: 'Strata',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | Strata',
    description: 'How Strata solved complex problems with intelligent systems.',
  },
  alternates: {
    canonical: 'https://strata.dev/case-studies',
  },
}

export default function CaseStudiesPage() {
  return <CaseStudiesSection />
}
