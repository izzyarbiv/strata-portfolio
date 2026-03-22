-- ============================================================
-- Strata Portfolio — Initial Schema Migration
-- Run this in your Supabase SQL Editor at supabase.com
-- ============================================================

-- ─── Extensions ─────────────────────────────────────────────
create extension if not exists "uuid-ossp";

-- ─── Platforms ──────────────────────────────────────────────
create table if not exists platforms (
  id          uuid primary key default uuid_generate_v4(),
  created_at  timestamptz not null default now(),
  name        text not null,
  slug        text not null unique,
  description text not null,
  overview    text not null,
  features    text[] not null default '{}',
  technology  text[] not null default '{}',
  image_url   text,
  screenshots text[],
  color       text not null default '#6366f1'
);

-- ─── Case Studies ────────────────────────────────────────────
create table if not exists case_studies (
  id          uuid primary key default uuid_generate_v4(),
  created_at  timestamptz not null default now(),
  title       text not null,
  slug        text not null unique,
  platform_id uuid references platforms(id) on delete set null,
  problem     text not null,
  solution    text not null,
  outcome     text[] not null default '{}',
  image_url   text
);

-- ─── Contacts ────────────────────────────────────────────────
create table if not exists contacts (
  id          uuid primary key default uuid_generate_v4(),
  created_at  timestamptz not null default now(),
  name        text not null,
  email       text not null,
  company     text not null,
  description text not null,
  status      text not null default 'new' check (status in ('new', 'read', 'replied'))
);

-- ─── Indexes ─────────────────────────────────────────────────
create index if not exists platforms_slug_idx      on platforms(slug);
create index if not exists case_studies_slug_idx   on case_studies(slug);
create index if not exists contacts_status_idx     on contacts(status);
create index if not exists contacts_created_at_idx on contacts(created_at desc);

-- ─── Row Level Security ──────────────────────────────────────
alter table platforms    enable row level security;
alter table case_studies enable row level security;
alter table contacts     enable row level security;

-- Platforms: public read, no public write
create policy "platforms_public_read"
  on platforms for select
  using (true);

-- Case studies: public read, no public write
create policy "case_studies_public_read"
  on case_studies for select
  using (true);

-- Contacts: anyone can insert (contact form), nobody can read via anon key
create policy "contacts_insert"
  on contacts for insert
  with check (true);

-- ─── Seed Data ───────────────────────────────────────────────
insert into platforms (name, slug, description, overview, features, technology, color) values
(
  'Hadar',
  'hadar',
  'AI-powered property management platform that automates tenant communication, maintenance, and financial reporting.',
  'Hadar is a full-stack property management platform built for modern real estate operators. It combines a conversational AI layer with a robust backend to automate the most time-consuming workflows: rent collection, maintenance coordination, and tenant onboarding. The result is a system that handles 80% of day-to-day operations without human intervention.',
  ARRAY[
    'AI-powered tenant messaging (SMS, WhatsApp, email)',
    'Automated rent collection & payment reminders',
    'Maintenance request triage and vendor dispatch',
    'Real-time financial reporting & owner dashboards',
    'Multi-property portfolio management',
    'Document generation (leases, notices, receipts)'
  ],
  ARRAY['Next.js', 'Python', 'FastAPI', 'OpenAI', 'PostgreSQL', 'Supabase', 'Twilio', 'Stripe'],
  '#8b5cf6'
),
(
  'NexusFlow',
  'nexusflow',
  'Enterprise workflow automation platform that connects SaaS tools and eliminates manual data entry across teams.',
  'NexusFlow is a no-code workflow automation platform purpose-built for operations teams at growing companies. Unlike generic automation tools, NexusFlow includes pre-built connectors for the most common SaaS stacks (HubSpot, Salesforce, Jira, Notion, Slack) with deep two-way sync rather than simple triggers.',
  ARRAY[
    'Visual drag-and-drop workflow builder',
    '60+ pre-built SaaS integrations',
    'Two-way real-time data sync',
    'Custom logic with JavaScript step nodes',
    'Error handling and retry queues',
    'Audit logs and workflow versioning'
  ],
  ARRAY['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS'],
  '#06b6d4'
),
(
  'Stratum API',
  'stratum-api',
  'High-performance API gateway and developer platform with built-in auth, rate limiting, and analytics.',
  'Stratum API is a developer-first API management platform that gives engineering teams a production-ready foundation out of the box. It handles authentication, rate limiting, caching, versioning, and analytics — all configurable without writing infrastructure code.',
  ARRAY[
    'API key and JWT authentication',
    'Configurable rate limiting per plan or endpoint',
    'Request/response caching with Redis',
    'API versioning with deprecation warnings',
    'Real-time analytics dashboard',
    'OpenAPI spec generation and hosted docs'
  ],
  ARRAY['Go', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes', 'Prometheus', 'Grafana', 'Cloudflare'],
  '#10b981'
)
on conflict (slug) do nothing;

insert into case_studies (title, slug, platform_id, problem, solution, outcome) values
(
  'From 40 Hours to 4: How Hadar Transformed Property Management',
  'hadar-case-study',
  (select id from platforms where slug = 'hadar'),
  'A mid-sized property management firm was spending over 40 staff-hours per week on tenant communication — answering repetitive questions about rent due dates, maintenance status, and lease terms. High staff turnover made consistent service impossible, and tenants frequently complained about slow response times.',
  'We deployed Hadar with a custom AI persona trained on the client''s lease documents, FAQs, and maintenance workflows. The AI handles all inbound tenant messages 24/7 across SMS and email, escalating only genuine exceptions to the human team. Stripe integration automated rent collection with smart retry logic.',
  ARRAY[
    '92% of tenant inquiries resolved without human intervention',
    'Average response time dropped from 6 hours to 90 seconds',
    'Staff hours on tenant communication reduced from 40 to 4 per week',
    'Rent collection rate improved from 87% to 98% with automated reminders',
    '$180,000 annual savings in operational costs'
  ]
),
(
  'Unifying 12 Tools Into One: NexusFlow at Scale',
  'nexusflow-case-study',
  (select id from platforms where slug = 'nexusflow'),
  'A 200-person B2B SaaS company was running 12 separate tools across sales, support, and engineering — with no reliable way to keep data in sync. Sales reps spent 2+ hours per day on manual data entry, deals were slipping through the cracks, and leadership had no single source of truth.',
  'NexusFlow was deployed to connect HubSpot, Jira, Intercom, Notion, and Slack with bidirectional real-time sync. Custom workflow nodes enforced business rules (e.g., auto-creating Jira tickets when Intercom tickets exceed SLA). A unified dashboard gave leadership live visibility across all tools.',
  ARRAY[
    'Eliminated 2+ hours/day of manual data entry per sales rep',
    'Deal close rate improved 23% within 90 days',
    'Cross-team visibility reduced escalations by 61%',
    'Data consistency errors dropped from ~200/week to near zero',
    'Onboarding time for new tools reduced from weeks to days'
  ]
)
on conflict (slug) do nothing;
