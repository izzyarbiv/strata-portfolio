import { Metadata } from 'next'
import { PlatformsGrid } from '@/components/sections/PlatformsGrid'

export const metadata: Metadata = {
  title: 'Platforms',
  description: 'Intelligent SaaS platforms and automation systems built by Strata — from AI-powered property management to enterprise workflow automation.',
  openGraph: {
    title: 'Platforms | Strata',
    description: 'Intelligent SaaS platforms and automation systems built by Strata.',
    url: 'https://strata.dev/platforms',
    siteName: 'Strata',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Platforms | Strata',
    description: 'Intelligent SaaS platforms and automation systems built by Strata.',
  },
  alternates: {
    canonical: 'https://strata.dev/platforms',
  },
}

export default function PlatformsPage() {
  return <PlatformsGrid />
}
