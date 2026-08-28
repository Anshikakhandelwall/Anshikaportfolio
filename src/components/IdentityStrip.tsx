'use client';
import { motion } from 'framer-motion';

const items = [
  'AI / MACHINE LEARNING',
  '✦',
  'DATA ANALYTICS',
  '✦',
  'PRODUCT BUILDING',
  '✦',
  'EXPLAINABLE AI',
  '✦',
  'FRONTEND ENGINEERING',
  '✦',
  'EXPERIMENTATION',
  '✦',
  'DESIGN SYSTEMS',
  '✦',
];

export default function IdentityStrip() {
  return (
    <div
      style={{
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        overflow: 'hidden',
        padding: '0.9rem 0',
        background: 'var(--surface)',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <motion.div
        style={{ display: 'flex', gap: '3rem', whiteSpace: 'nowrap', width: 'max-content' }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: item === '✦' ? 0 : '0.18em',
              color: item === '✦' ? 'var(--text-subtle)' : 'var(--text-muted)',
              textTransform: 'uppercase',
            }}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
