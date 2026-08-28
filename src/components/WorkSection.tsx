'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, Project, ProjectCategory } from '@/data/projects';

const FILTERS: { label: string; value: ProjectCategory | 'ALL' }[] = [
  { label: 'ALL', value: 'ALL' },
  { label: 'AI/ML', value: 'AI/ML' },
  { label: 'DATA', value: 'Data' },
  { label: 'WEB', value: 'Web' },
  { label: 'PRODUCT', value: 'Product' },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{
        borderTop: '1px solid var(--border)',
        paddingTop: '2.5rem',
        paddingBottom: expanded ? '2.5rem' : '2.5rem',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '72px 1fr auto',
          gap: '2rem',
          alignItems: 'start',
        }}
        className="project-row"
      >
        {/* Number */}
        <p className="section-label" style={{ paddingTop: '0.3rem' }}>{project.number}</p>

        {/* Main content */}
        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.2rem', flexWrap: 'wrap', marginBottom: '0.8rem' }}>
            <h3 style={{
              fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'var(--text)',
              lineHeight: 1,
            }}>
              {project.title}
            </h3>
            <span className="section-label" style={{ color: 'var(--text-subtle)' }}>{project.year}</span>
          </div>

          <p style={{
            fontSize: '0.95rem',
            color: 'var(--text-muted)',
            marginBottom: '1rem',
            maxWidth: 600,
            lineHeight: 1.6,
          }}>
            {project.tagline}
          </p>

          {/* Tags */}
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.2rem' }}>
            {project.technologies.slice(0, 5).map(tech => (
              <span key={tech} className="tag">{tech}</span>
            ))}
          </div>

          {/* Category badges */}
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            {project.category.map(cat => (
              <span key={cat} style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                letterSpacing: '0.1em',
                color: 'var(--accent)',
                textTransform: 'uppercase',
              }}>
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Expand toggle */}
        <motion.button
          onClick={() => setExpanded(v => !v)}
          data-cursor={expanded ? 'CLOSE' : 'OPEN'}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: 'none',
            border: '1px solid var(--border-light)',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            letterSpacing: '0.12em',
            padding: '0.5rem 0.9rem',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            transition: 'all 0.2s',
          }}
        >
          {expanded ? 'COLLAPSE ↑' : 'CASE STUDY ↓'}
        </motion.button>
      </div>

      {/* Expanded case study */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{
              marginTop: '2rem',
              marginLeft: '104px',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2rem',
              paddingTop: '2rem',
              borderTop: '1px solid var(--border)',
            }} className="case-study-grid">

              {/* Problem → Solution → Result */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  { label: 'THE PROBLEM', content: project.problem },
                  { label: 'WHAT I BUILT', content: project.solution },
                  { label: 'RESULT', content: project.result },
                ].map(block => (
                  <div key={block.label}>
                    <p className="section-label" style={{ marginBottom: '0.5rem' }}>{block.label}</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.7 }}>{block.content}</p>
                  </div>
                ))}
              </div>

              {/* Features + links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <p className="section-label" style={{ marginBottom: '0.8rem' }}>KEY FEATURES</p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {project.features.map(f => (
                      <li key={f} style={{
                        color: 'var(--text-muted)',
                        fontSize: '0.875rem',
                        display: 'flex',
                        gap: '0.6rem',
                        alignItems: 'flex-start',
                      }}>
                        <span style={{ color: 'var(--accent)', flexShrink: 0 }}>→</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="section-label" style={{ marginBottom: '0.8rem' }}>STACK</p>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    {project.technologies.map(t => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                      data-cursor="↗"
                    >
                      <span>GITHUB ↗</span>
                    </a>
                  )}
                  {project.liveDemo && !project.liveDemo.startsWith('[') && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                      data-cursor="↗"
                    >
                      <span>LIVE DEMO ↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .project-row { grid-template-columns: 48px 1fr !important; }
          .project-row > *:last-child { grid-column: 2; }
          .case-study-grid { grid-template-columns: 1fr !important; margin-left: 0 !important; }
        }
      `}</style>
    </motion.article>
  );
}

export default function WorkSection() {
  const [filter, setFilter] = useState<ProjectCategory | 'ALL'>('ALL');

  const filtered = filter === 'ALL'
    ? projects
    : projects.filter(p => p.category.includes(filter));

  return (
    <section id="work" style={{ padding: '6rem 2rem', position: 'relative' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>

        {/* Section header */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
          marginBottom: '3rem',
        }}>
          <div>
            <p className="section-label" style={{ marginBottom: '0.8rem' }}>02 — SELECTED WORK</p>
            <h2 className="display-sm">Things I&apos;ve built,<br />explored and shipped.</h2>
          </div>

          {/* Filters */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {FILTERS.map(f => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                style={{
                  background: filter === f.value ? 'var(--text)' : 'transparent',
                  border: '1px solid',
                  borderColor: filter === f.value ? 'var(--text)' : 'var(--border-light)',
                  color: filter === f.value ? 'var(--bg)' : 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.12em',
                  padding: '0.4rem 0.8rem',
                  textTransform: 'uppercase',
                  transition: 'all 0.2s',
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects list */}
        <AnimatePresence mode="wait">
          <motion.div key={filter} layout>
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom border */}
        <div style={{ borderTop: '1px solid var(--border)', marginTop: '1rem' }} />
      </div>
    </section>
  );
}
