'use client';
import { motion } from 'framer-motion';

const currently = [
  {
    label: 'BUILDING',
    items: ['AI-powered products', 'Interactive web experiences'],
  },
  {
    label: 'LEARNING',
    items: ['Machine Learning depth', 'System design'],
  },
  {
    label: 'EXPLORING',
    items: ['Explainable AI', 'Neuromorphic Computing', 'LLM Agents'],
  },
  {
    label: 'LOOKING FOR',
    items: ['Interesting problems worth solving'],
  },
];

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: '6rem 2rem', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6rem',
          alignItems: 'start',
        }} className="about-grid">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label" style={{ marginBottom: '0.8rem' }}>07 — ABOUT</p>
            <h2 className="display-sm" style={{ marginBottom: '2rem' }}>
              WHO&apos;S BEHIND<br />THE SCREEN?
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p style={{ fontSize: '1rem', color: 'var(--text)', lineHeight: 1.8, maxWidth: 480 }}>
                I&apos;m Anshika — a developer who enjoys turning ideas into things people can actually interact with.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.8, maxWidth: 480 }}>
                I&apos;m especially interested in AI, data, intelligent applications and the intersection between technology and good design. I care as much about how something works as how it feels to use.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.8, maxWidth: 480 }}>
                I don&apos;t just build to build. I build to solve problems that are actually worth solving.
              </p>
            </div>

            {/* Personality facts */}
            <div style={{
              marginTop: '2.5rem',
              paddingTop: '2rem',
              borderTop: '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}>
              {[
                { label: 'CURRENTLY EXPLORING', value: 'AI / ML / Data' },
                { label: 'CURRENTLY BUILDING', value: 'Interactive products & experiments' },
                { label: 'MOST INTERESTED IN', value: 'Turning problems into systems' },
              ].map(fact => (
                <div key={fact.label} style={{ display: 'flex', gap: '1.5rem', alignItems: 'baseline' }}>
                  <p className="section-label" style={{ flexShrink: 0, minWidth: 160 }}>{fact.label}</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text)' }}>{fact.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Currently system */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="section-label" style={{ marginBottom: '1.5rem', color: 'var(--accent)' }}>
              CURRENTLY
            </p>

            <div style={{
              border: '1px solid var(--border)',
              background: 'var(--surface)',
            }}>
              {currently.map((block, i) => (
                <div
                  key={block.label}
                  style={{
                    padding: '1.4rem 1.6rem',
                    borderBottom: i < currently.length - 1 ? '1px solid var(--border)' : 'none',
                  }}
                >
                  <p className="section-label" style={{ marginBottom: '0.6rem' }}>{block.label}</p>
                  {block.items.map(item => (
                    <p key={item} style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.25rem',
                      lineHeight: 1.5,
                    }}>
                      <span style={{ color: 'var(--accent)', flexShrink: 0 }}>→</span>
                      {item}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Status indicator */}
            <div style={{
              marginTop: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.12em',
              color: 'var(--text-muted)',
            }}>
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  width: 6, height: 6,
                  borderRadius: '50%',
                  background: 'var(--green)',
                  display: 'inline-block',
                }}
              />
              AVAILABLE TO BUILD SOMETHING INTERESTING
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
