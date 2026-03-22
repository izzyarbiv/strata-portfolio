import { Metadata } from 'next'
import { TechnologySection } from '@/components/sections/TechnologySection'

export const metadata: Metadata = {
  title: 'Technology — Strata',
  description: 'The technology stack and infrastructure behind Strata platforms.',
}

export default function TechnologyPage() {
  return <TechnologySection />
}
