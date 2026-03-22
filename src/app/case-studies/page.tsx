import { Metadata } from 'next'
import { CaseStudiesSection } from '@/components/sections/CaseStudiesSection'

export const metadata: Metadata = {
  title: 'Case Studies — Strata',
  description: 'How we solved complex problems with intelligent systems.',
}

export default function CaseStudiesPage() {
  return <CaseStudiesSection />
}
