'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { journeyItems, JourneyItem } from '@/data/journey';

const TYPE_COLORS: Record<string, string> = {
  project: 'var(--accent)',
  hackathon: 'var(--purple)',
  research: 'var(--green)',
  milestone: 'var(--text)',
  experiment: 'var(--red)',
};

export default function JourneySection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section style={{ padding: '6rem 2rem', background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>

        <div style={{ marginBottom: '3rem' }}>
          <p className="section-label" style={{ marginBottom: '0.8rem' }}>06 — THE BUILDING JOURNEY</p>
          <h2 className="display-sm">Not a CV.<br />A story of building.</h2>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: 72,
            top: 0,
            bottom: 0,
            width: '1px',
            background: 'var(--border)',
          }} className="timeline-line" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {journeyItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <div
                  onClick={() => setOpenId(openId === item.id ? null : item.id)}
                  data-cursor="VIEW"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '72px 1fr',
                    gap: '2rem',
                    padding: '1.5rem 0',
                    borderBottom: '1px solid var(--border)',
                    cursor: 'none',
                    position: 'relative',
                  }}
                >
                  {/* Year column */}
                  <div style={{ textAlign: 'right', paddingTop: '0.1rem' }}>
                    <p className="section-label">
                      {item.month ? item.month : item.year}
                    </p>
                    {item.month && (
                      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--text-subtle)', marginTop: '0.2rem' }}>
                        {item.year}
                      </p>
                    )}
                  </div>

                  {/* Content */}
                  <div>
                    {/* Dot on the line */}
                    <div style={{
                      position: 'absolute',
                      left: 68,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: TYPE_COLORS[item.type],
                      border: '2px solid var(--surface)',
                    }} />

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
                      <h3 style={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: 'var(--text)',
                        letterSpacing: '-0.01em',
                      }}>
                        {item.title}
                      </h3>
                      <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.58rem',
                        letterSpacing: '0.1em',
                        color: TYPE_COLORS[item.type],
                        textTransform: 'uppercase',
                        border: `1px solid ${TYPE_COLORS[item.type]}`,
                        padding: '0.1rem 0.4rem',
                        opacity: 0.8,
                      }}>
                        {item.type}
                      </span>
                      {item.highlight && (
                        <span style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.7rem',
                          color: 'var(--text-muted)',
                          fontStyle: 'italic',
                        }}>
                          — {item.highlight}
                        </span>
                      )}
                    </div>

                    <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                      {item.tags.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>

                    <AnimatePresence>
                      {openId === item.id && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{
                            fontSize: '0.875rem',
                            color: 'var(--text-muted)',
                            lineHeight: 1.7,
                            overflow: 'hidden',
                            marginTop: '0.5rem',
                          }}
                        >
                          {item.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .timeline-line { left: 48px !important; }
        }
      `}</style>
    </section>
  );
}
