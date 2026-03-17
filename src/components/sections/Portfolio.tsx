'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, X, CheckCircle2 } from 'lucide-react'
import { projects, type Project } from '@/data/projects'

function ProjectCard({
  project,
  onOpen,
  index,
}: {
  project: Project
  onOpen: (p: Project) => void
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl glass border border-border hover:border-accent/30 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/5"
      onClick={() => onOpen(project)}
    >
      {/* Gradient top bar */}
      <div className={`h-px w-full bg-gradient-to-r ${project.gradient} opacity-60`} />

      {/* Color swatch / preview */}
      <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface/80" />
        <div className="relative text-6xl font-black tracking-tighter opacity-20 select-none">
          {project.title.charAt(0)}
        </div>
        {/* Category badge */}
        <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-xs font-semibold text-white/80">
          {project.category}
        </div>
        <div className="absolute top-4 right-4 text-xs text-white/50">{project.year}</div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-accent transition-colors group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transform duration-200" />
        </div>
        <p className="text-sm text-muted mb-5 leading-relaxed">{project.shortDescription}</p>

        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-surface text-xs font-medium text-muted"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2.5 py-1 rounded-md bg-surface text-xs font-medium text-muted">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function CaseStudyModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-start justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-3xl bg-[var(--background)] rounded-2xl border border-border overflow-hidden my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header gradient */}
          <div className={`h-2 w-full bg-gradient-to-r ${project.gradient}`} />

          <div className="p-8">
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-lg hover:bg-surface transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title */}
            <div className="mb-2">
              <span className="text-xs font-semibold text-accent-light tracking-widest uppercase">
                {project.category} · {project.year}
              </span>
            </div>
            <h2 className="text-4xl font-black mb-3">{project.title}</h2>
            <p className="text-muted mb-8 leading-relaxed">{project.description}</p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-lg bg-surface text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>

            <div className="space-y-8">
              {/* Problem */}
              <div>
                <h3 className="text-xs font-bold tracking-widest uppercase text-muted mb-3">
                  The Problem
                </h3>
                <p className="text-sm leading-relaxed">{project.problem}</p>
              </div>

              {/* Solution */}
              <div>
                <h3 className="text-xs font-bold tracking-widest uppercase text-muted mb-3">
                  Our Solution
                </h3>
                <p className="text-sm leading-relaxed">{project.solution}</p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-xs font-bold tracking-widest uppercase text-muted mb-3">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {project.keyFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-xs font-bold tracking-widest uppercase text-muted mb-3">
                  Results
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.results.map((r) => (
                    <div key={r} className="flex items-start gap-2.5 p-3 rounded-xl bg-surface text-sm font-medium">
                      <span className="text-accent shrink-0 mt-0.5">→</span>
                      {r}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export function Portfolio() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-accent-light mb-4 block">
            Selected Work
          </span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
            Code with <span className="gradient-text">Depth.</span>
          </h2>
          <p className="text-muted max-w-xl text-lg leading-relaxed">
            A selection of systems we&apos;ve designed, architected, and shipped — each one built to last.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} onOpen={setActiveProject} index={i} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeProject && (
        <CaseStudyModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  )
}
