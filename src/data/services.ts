import {
  Code2,
  Layers,
  Zap,
  Cloud,
  GitBranch,
  type LucideIcon,
} from 'lucide-react'

export interface Service {
  id: string
  title: string
  description: string
  details: string[]
  icon: LucideIcon
  accent: string
}

export const services: Service[] = [
  {
    id: 'saas',
    title: 'SaaS Development',
    description:
      'Full-stack SaaS products engineered from zero to launch. Multi-tenant architecture, billing systems, and everything in between.',
    details: [
      'Multi-tenant database architecture',
      'Subscription billing with Stripe',
      'Admin dashboards and analytics',
      'CI/CD pipelines and automated testing',
      'Growth-ready infrastructure from day one',
    ],
    icon: Layers,
    accent: 'from-indigo-500 to-purple-500',
  },
  {
    id: 'platform',
    title: 'Platform Engineering',
    description:
      'Internal developer platforms and tooling that let your engineering team move faster without sacrificing reliability.',
    details: [
      'Internal developer portals (IDPs)',
      'CI/CD infrastructure and GitOps workflows',
      'Service mesh and observability layers',
      'Developer experience tooling',
      'Platform-as-a-product design',
    ],
    icon: GitBranch,
    accent: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'api',
    title: 'API Architecture',
    description:
      'Thoughtfully designed APIs that scale. From OpenAPI design to gateway management, versioning, and developer portals.',
    details: [
      'RESTful and GraphQL API design',
      'API gateway and management layers',
      'Versioning and backwards compatibility',
      'Authentication and authorization (JWT, OAuth2)',
      'Automated documentation generation',
    ],
    icon: Code2,
    accent: 'from-violet-500 to-pink-500',
  },
  {
    id: 'automation',
    title: 'Automation Systems',
    description:
      'Turn repetitive processes into intelligent workflows. From data pipelines to event-driven orchestration at scale.',
    details: [
      'Event-driven workflow orchestration',
      'Data pipeline design and implementation',
      'RPA and intelligent process automation',
      'Integration with 100+ third-party services',
      'Real-time monitoring and alerting',
    ],
    icon: Zap,
    accent: 'from-amber-500 to-orange-500',
  },
  {
    id: 'cloud',
    title: 'Cloud Infrastructure',
    description:
      'Cloud architecture designed for scale, security, and cost efficiency. Multi-cloud or single-cloud, IaC-first.',
    details: [
      'AWS, GCP, and Azure architecture',
      'Infrastructure as Code (Terraform, Pulumi)',
      'Kubernetes orchestration and Helm charts',
      'Cost optimization and FinOps',
      'Security hardening and compliance',
    ],
    icon: Cloud,
    accent: 'from-emerald-500 to-teal-500',
  },
]
