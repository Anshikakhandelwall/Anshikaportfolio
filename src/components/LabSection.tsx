'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experiments, Experiment } from '@/data/experiments';

const STATUS_COLORS: Record<string, string> = {
  EXPLORING: 'var(--accent)',
  BUILDING: 'var(--green)',
  PAUSED: 'var(--text-subtle)',
  COMPLETE: 'var(--purple)',
};

function ExperimentCard({ exp, index }: { exp: Experiment; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{
        border: '1px solid var(--border)',
        background: open ? 'var(--surface)' : 'transparent',
        padding: '1.8rem',
        transition: 'background 0.3s, border-color 0.3s',
        cursor: 'none',
        position: 'relative',
        overflow: 'hidden',
      }}
      whileHover={{ borderColor: 'var(--border-light)' }}
      data-cursor={open ? 'CLOSE' : 'VIEW'}
      onClick={() => setOpen(v => !v)}
    >
      {/* Accent line */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '2px',
          height: '100%',
          background: STATUS_COLORS[exp.status],
          opacity: 0,
        }}
        whileHover={{ opacity: 1 }}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
        <div>
          <p className="section-label" style={{ marginBottom: '0.4rem' }}>
            EXPERIMENT {exp.number}
          </p>
          <h3 style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
            fontWeight: 700,
            letterSpacing: '-0.01em',
            color: 'var(--text)',
            marginBottom: '0.25rem',
          }}>
            {exp.title}
          </h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{exp.subtitle}</p>
        </div>

        {/* Status badge */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.6rem',
          letterSpacing: '0.12em',
          color: STATUS_COLORS[exp.status],
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}>
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            style={{ width: 5, height: 5, borderRadius: '50%', background: STATUS_COLORS[exp.status], display: 'inline-block' }}
          />
          {exp.status}
        </div>
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
        {exp.tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>

      {/* Expanded content */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{
              paddingTop: '1.5rem',
              marginTop: '1.5rem',
              borderTop: '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem',
            }}>
              {[
                { label: 'WHY I\'M EXPLORING THIS', content: exp.why },
                { label: 'WHAT I\'M LEARNING', content: exp.learning },
                ...(exp.built ? [{ label: 'WHAT I\'VE BUILT', content: exp.built }] : []),
                { label: 'WHAT\'S NEXT', content: exp.next },
              ].map(block => (
                <div key={block.label}>
                  <p className="section-label" style={{ marginBottom: '0.4rem' }}>{block.label}</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{block.content}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function LabSection() {
  return (
    <section id="lab" style={{ padding: '6rem 2rem', background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>

        <div style={{ marginBottom: '3rem' }}>
          <p className="section-label" style={{ marginBottom: '0.8rem' }}>03 — THE LAB</p>
          <h2 className="display-sm" style={{ maxWidth: 700 }}>
            Ideas I&apos;m exploring<br />before they become projects.
          </h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '1rem', fontSize: '0.875rem', maxWidth: 520 }}>
            Not everything here is finished. The lab is where thinking happens before building does.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '1px',
          background: 'var(--border)',
          border: '1px solid var(--border)',
        }}>
          {experiments.map((exp, i) => (
            <div key={exp.id} style={{ background: 'var(--surface)' }}>
              <ExperimentCard exp={exp} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
