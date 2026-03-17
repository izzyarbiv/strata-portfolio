export interface TechItem {
  name: string
  category: string
  color: string
}

export const techStack: TechItem[] = [
  // Languages
  { name: 'TypeScript', category: 'Language', color: '#3178c6' },
  { name: 'JavaScript', category: 'Language', color: '#f7df1e' },
  { name: 'Python', category: 'Language', color: '#3776ab' },
  { name: 'Go', category: 'Language', color: '#00add8' },
  // Frontend
  { name: 'React', category: 'Frontend', color: '#61dafb' },
  { name: 'Next.js', category: 'Frontend', color: '#ffffff' },
  { name: 'Tailwind CSS', category: 'Frontend', color: '#38bdf8' },
  { name: 'Framer Motion', category: 'Frontend', color: '#bb4eff' },
  // Backend
  { name: 'Node.js', category: 'Backend', color: '#5fa04e' },
  { name: 'FastAPI', category: 'Backend', color: '#009688' },
  { name: 'GraphQL', category: 'Backend', color: '#e10098' },
  // Data
  { name: 'PostgreSQL', category: 'Database', color: '#336791' },
  { name: 'Redis', category: 'Database', color: '#dc382d' },
  { name: 'ClickHouse', category: 'Database', color: '#ffcc02' },
  // DevOps / Cloud
  { name: 'Docker', category: 'DevOps', color: '#2496ed' },
  { name: 'Kubernetes', category: 'DevOps', color: '#326ce5' },
  { name: 'AWS', category: 'Cloud', color: '#ff9900' },
  { name: 'GCP', category: 'Cloud', color: '#4285f4' },
  { name: 'Terraform', category: 'DevOps', color: '#844fba' },
  { name: 'GitHub Actions', category: 'DevOps', color: '#2088ff' },
]

export const techCategories = ['Language', 'Frontend', 'Backend', 'Database', 'DevOps', 'Cloud']
