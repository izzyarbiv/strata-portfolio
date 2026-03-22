import { Metadata } from 'next'
import { PlatformDetail } from '@/components/sections/PlatformDetail'

export const metadata: Metadata = {
  title: 'Platform — Strata',
  description: 'Platform details and architecture.',
}

export default function PlatformPage({ params }: { params: { id: string } }) {
  return <PlatformDetail id={params.id} />
}
