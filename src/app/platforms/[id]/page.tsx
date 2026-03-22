import { Metadata } from 'next'
import { PlatformDetail } from '@/components/sections/PlatformDetail'

const platformMeta: Record<string, { name: string; description: string }> = {
  hadar: {
    name: 'Hadar',
    description: 'AI-powered property management platform that automates rent collection, tenant communication, maintenance, and portfolio analytics.',
  },
  nexusflow: {
    name: 'NexusFlow',
    description: 'Enterprise workflow automation platform processing millions of events daily with sub-80ms latency and a no-code builder.',
  },
  'stratum-api': {
    name: 'Stratum API',
    description: 'Unified API gateway handling 50M+ requests/month with intelligent rate limiting, versioning, and real-time analytics.',
  },
}

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const meta = platformMeta[params.id]
  if (!meta) {
    return { title: 'Platform | Strata' }
  }
  return {
    title: meta.name,
    description: meta.description,
    openGraph: {
      title: `${meta.name} | Strata`,
      description: meta.description,
      url: `https://strata.dev/platforms/${params.id}`,
      siteName: 'Strata',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${meta.name} | Strata`,
      description: meta.description,
    },
    alternates: {
      canonical: `https://strata.dev/platforms/${params.id}`,
    },
  }
}

export function generateStaticParams() {
  return [{ id: 'hadar' }, { id: 'nexusflow' }, { id: 'stratum-api' }]
}

export default function PlatformPage({ params }: { params: { id: string } }) {
  return <PlatformDetail id={params.id} />
}
