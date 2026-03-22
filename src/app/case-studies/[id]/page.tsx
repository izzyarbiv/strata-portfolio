import { Metadata } from 'next'
import { CaseStudyDetail } from '@/components/sections/CaseStudyDetail'

export const metadata: Metadata = {
  title: 'Case Study — Strata',
  description: 'Case study details.',
}

export default function CaseStudyPage({ params }: { params: { id: string } }) {
  return <CaseStudyDetail id={params.id} />
}
