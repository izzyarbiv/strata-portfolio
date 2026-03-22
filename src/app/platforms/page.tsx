import { Metadata } from 'next'
import { PlatformsGrid } from '@/components/sections/PlatformsGrid'

export const metadata: Metadata = {
  title: 'Platforms — Strata',
  description: 'Intelligent SaaS platforms and automation systems built by Strata.',
}

export default function PlatformsPage() {
  return <PlatformsGrid />
}
