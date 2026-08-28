'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { creativeItems, CreativeItem } from '@/data/creative';

function CreativeCard({ item, index }: { item: CreativeItem; index: number }) {
  const [hovered, setHovered] = useState(false);

  const heightMap = { square: 260, portrait: 340, landscape: 200 };
  const height = heightMap[item.aspect];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-cursor="VIEW"
      style={{
        position: 'relative',
        background: item.placeholder,
        height,
        border: '1px solid var(--border)',
        overflow: 'hidden',
        cursor: 'none',
      }}
    >
      {/* Placeholder visual pattern */}
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.12 }}
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id={`grid-${item.id}`} width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fff" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${item.id})`} />
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle"
          fill="#fff" fontSize="14" fontFamily="var(--font-mono)" opacity="0.3">
          {item.category.toUpperCase()}
        </text>
      </svg>

      {/* Label */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '1rem',
        background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
        transform: hovered ? 'translateY(0)' : 'translateY(4px)',
        opacity: hovered ? 1 : 0.6,
        transition: 'all 0.25s ease',
      }}>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          letterSpacing: '0.1em',
          color: 'var(--text-muted)',
          textTransform: 'uppercase',
          marginBottom: '0.2rem',
        }}>
          {item.category}
        </p>
        <p style={{
          fontSize: '0.9rem',
          fontWeight: 600,
          color: 'var(--text)',
          letterSpacing: '-0.01em',
        }}>
          {item.title}
        </p>
      </div>

      {/* Hover description overlay */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
            }}
          >
            <p style={{
              textAlign: 'center',
              fontSize: '0.8rem',
              color: 'var(--text)',
              lineHeight: 1.6,
            }}>
              {item.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function CreativeSection() {
  return (
    <section id="creative" style={{ padding: '6rem 2rem', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>

        <div style={{ marginBottom: '3rem' }}>
          <p className="section-label" style={{ marginBottom: '0.8rem' }}>05 — BEYOND CODE</p>
          <h2 className="display-sm">I care about how<br />technology feels.</h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '1rem', fontSize: '0.875rem', maxWidth: 520 }}>
            Not just how it works.
          </p>
        </div>

        {/* Design × Code statement */}
        <div style={{
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
          padding: '2rem 0',
          marginBottom: '3rem',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          gap: '2rem',
          alignItems: 'center',
        }} className="code-design-grid">
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
            fontWeight: 600,
            color: 'var(--text)',
            lineHeight: 1.3,
          }}>
            CODE<br />BUILDS THE<br />SYSTEM.
          </p>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '1.2rem',
            color: 'var(--text-subtle)',
          }}>
            ×
          </p>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
            fontWeight: 600,
            color: 'var(--text)',
            lineHeight: 1.3,
            textAlign: 'right',
          }}>
            DESIGN<br />BUILDS THE<br />EXPERIENCE.
          </p>
        </div>

        {/* Gallery — masonry-like grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: 'var(--border)',
        }} className="creative-gallery">
          {creativeItems.map((item, i) => (
            <div key={item.id} style={{
              background: 'var(--bg)',
              gridColumn: item.aspect === 'landscape' ? 'span 2' : 'span 1',
            }} className={item.aspect === 'landscape' ? 'landscape-span' : ''}>
              <CreativeCard item={item} index={i} />
            </div>
          ))}
        </div>

        <p className="section-label" style={{ marginTop: '2rem', color: 'var(--text-subtle)' }}>
          CREATIVE WORK ADDED REGULARLY — PLACEHOLDER IMAGES SHOWN
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .creative-gallery { grid-template-columns: 1fr !important; }
          .landscape-span { grid-column: span 1 !important; }
          .code-design-grid { grid-template-columns: 1fr !important; text-align: center !important; }
          .code-design-grid p:last-child { text-align: center !important; }
        }
      `}</style>
    </section>
  );
}
