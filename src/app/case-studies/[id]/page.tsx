import { Metadata } from 'next'
import { CaseStudyDetail } from '@/components/sections/CaseStudyDetail'

const caseStudyMeta: Record<string, { title: string; description: string }> = {
  hadar: {
    title: 'Hadar: AI Property Management',
    description: 'How Strata built an AI-powered property management platform that handles 95% of tenant operations automatically.',
  },
  nexusflow: {
    title: 'NexusFlow: Enterprise Automation',
    description: 'How Strata automated 340 workflows for a Fortune 500 company, saving 4,200 staff hours per month.',
  },
  'stratum-api': {
    title: 'Stratum API: Unified Gateway',
    description: 'How Strata unified 6 legacy APIs into one high-performance gateway handling 50M+ requests per month.',
  },
}

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const meta = caseStudyMeta[params.id]
  if (!meta) {
    return { title: 'Case Study | Strata' }
  }
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: `${meta.title} | Strata`,
      description: meta.description,
      url: `https://strata.dev/case-studies/${params.id}`,
      siteName: 'Strata',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${meta.title} | Strata`,
      description: meta.description,
    },
    alternates: {
      canonical: `https://strata.dev/case-studies/${params.id}`,
    },
  }
}

export function generateStaticParams() {
  return [{ id: 'hadar' }, { id: 'nexusflow' }, { id: 'stratum-api' }]
}

export default function CaseStudyPage({ params }: { params: { id: string } }) {
  return <CaseStudyDetail id={params.id} />
}
