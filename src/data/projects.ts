export interface Project {
  id: string
  title: string
  slug: string
  shortDescription: string
  description: string
  techStack: string[]
  category: string
  year: number
  problem: string
  solution: string
  keyFeatures: string[]
  results: string[]
  gradient: string
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'NexusFlow',
    slug: 'nexusflow',
    shortDescription: 'Enterprise automation platform processing 2M+ events/day',
    description:
      'A high-throughput event-driven automation platform built for enterprise operations teams. NexusFlow orchestrates complex workflows across distributed services with sub-100ms latency.',
    techStack: ['TypeScript', 'Node.js', 'React', 'PostgreSQL', 'Redis', 'Kubernetes', 'AWS'],
    category: 'Platform Engineering',
    year: 2024,
    problem:
      'A Fortune 500 logistics company needed to automate 300+ manual workflows across 12 internal systems, resulting in significant operational delays and human error rates above 8%.',
    solution:
      'We designed and built NexusFlow — a microservices-based automation platform with a visual workflow builder, real-time event streaming via Redis, and an adaptive rule engine that processes conditional logic at scale.',
    keyFeatures: [
      'Visual no-code workflow builder with 80+ pre-built connectors',
      'Real-time event streaming with guaranteed message delivery',
      'Adaptive rule engine supporting complex conditional branching',
      'Multi-tenant architecture with role-based access control',
      'Audit trail and compliance reporting for SOC 2 requirements',
    ],
    results: [
      '2.1M events processed daily with 99.97% uptime',
      'Error rate reduced from 8.2% to 0.03%',
      '340 workflows automated, saving 4,200 staff hours/month',
      'Sub-80ms average processing latency',
    ],
    gradient: 'from-indigo-500/20 via-purple-500/10 to-transparent',
  },
  {
    id: '2',
    title: 'Stratum API',
    slug: 'stratum-api',
    shortDescription: 'Unified API gateway handling 50M+ requests/month',
    description:
      'A developer-first API gateway and management platform offering intelligent rate limiting, versioning, analytics, and a self-service developer portal.',
    techStack: ['Go', 'TypeScript', 'React', 'PostgreSQL', 'Kafka', 'Docker', 'GCP'],
    category: 'API Architecture',
    year: 2024,
    problem:
      'A SaaS startup had 6 different internal APIs with no unified access layer — causing documentation sprawl, inconsistent auth, and no visibility into API health or usage patterns.',
    solution:
      'Built Stratum API: a unified gateway layer in Go for performance-critical routing, with a React-based developer portal, automated documentation generation from OpenAPI specs, and real-time analytics dashboards.',
    keyFeatures: [
      'Intelligent rate limiting with per-client burst tolerance',
      'Automatic OpenAPI documentation generation and versioning',
      'Real-time request analytics and error tracking',
      'JWT + OAuth2 unified authentication layer',
      'Self-service developer portal with sandbox environments',
    ],
    results: [
      '50M+ requests/month with P99 latency of 12ms',
      'Developer onboarding time reduced by 70%',
      'API error rate cut by 65% post-launch',
      '6 legacy APIs unified under a single gateway',
    ],
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
  },
  {
    id: '3',
    title: 'CloudLayer',
    slug: 'cloudlayer',
    shortDescription: 'Multi-cloud infrastructure orchestration tool',
    description:
      'An infrastructure-as-code orchestration platform that abstracts multi-cloud deployments, enabling teams to provision, monitor, and scale infrastructure across AWS, GCP, and Azure from a single control plane.',
    techStack: ['Python', 'FastAPI', 'React', 'Terraform', 'AWS', 'GCP', 'Azure', 'Pulumi'],
    category: 'Cloud Infrastructure',
    year: 2023,
    problem:
      'A mid-size fintech was paying 40% more than necessary on cloud spend and had no unified visibility across their AWS and GCP environments, making cost attribution impossible.',
    solution:
      'CloudLayer provides a unified control plane with automated cost attribution, intelligent right-sizing recommendations, and one-click environment provisioning using Pulumi under the hood.',
    keyFeatures: [
      'Multi-cloud unified dashboard (AWS, GCP, Azure)',
      'Automated cost attribution by team, service, and environment',
      'AI-powered right-sizing and spend optimization recommendations',
      'One-click environment provisioning from approved templates',
      'Drift detection and automated compliance remediation',
    ],
    results: [
      '38% reduction in cloud spend in first 3 months',
      'Infrastructure provisioning time reduced from 3 days to 15 minutes',
      '100% compliance across all environments',
      '$1.2M annual savings for the client',
    ],
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
  },
  {
    id: '4',
    title: 'Pulse SaaS',
    slug: 'pulse-saas',
    shortDescription: 'B2B analytics SaaS platform with real-time dashboards',
    description:
      'A full-stack B2B analytics platform enabling product teams to instrument, analyze, and act on user behavior in real time. Pulse provides the full journey: data ingestion, transformation, visualization, and alerting.',
    techStack: ['TypeScript', 'Next.js', 'Python', 'ClickHouse', 'Redis', 'Stripe', 'AWS'],
    category: 'SaaS Development',
    year: 2023,
    problem:
      'Product teams at a Series B startup were blind to user behavior post-signup. They needed a custom analytics solution that could handle high write throughput while keeping query latency low for real-time dashboards.',
    solution:
      'We built Pulse from the ground up — a multi-tenant SaaS with a ClickHouse-backed analytics engine, real-time streaming ingestion pipeline, React-based dashboard builder, and automated alerting system.',
    keyFeatures: [
      'Real-time event streaming with sub-second dashboard updates',
      'Drag-and-drop dashboard builder with 20+ chart types',
      'Multi-tenant architecture with data isolation guarantees',
      'Stripe-integrated billing with usage-based pricing',
      'Automated anomaly detection and alerting',
    ],
    results: [
      '1B+ events ingested in first 6 months of production',
      'Dashboard query latency under 200ms at P95',
      '120+ paying customers within 4 months of launch',
      '99.99% data ingestion reliability',
    ],
    gradient: 'from-orange-500/20 via-rose-500/10 to-transparent',
  },
]
