'use client';
import { motion, Variants } from 'framer-motion';
import NodeGraph from './NodeGraph';

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = {
  container: { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } } } as Variants,
  item: itemVariant,
};

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'calc(var(--nav-h) + 3rem) 2rem 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto', width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
        }} className="hero-grid">

          {/* Left: text */}
          <motion.div
            variants={stagger.container}
            initial="hidden"
            animate="show"
          >
            {/* Pre-label */}
            <motion.p variants={stagger.item} className="section-label" style={{ marginBottom: '1.5rem' }}>
              ANSHIKA.DEV — PORTFOLIO 2025
            </motion.p>

            {/* Name */}
            <motion.h1 variants={stagger.item} className="display" style={{ color: 'var(--text)', marginBottom: '0.2rem' }}>
              ANSHIKA
            </motion.h1>
            <motion.h1 variants={stagger.item} className="display" style={{ color: 'var(--text-subtle)', marginBottom: '2rem' }}>
              KHANDELWAL
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={stagger.item}
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
                fontWeight: 500,
                lineHeight: 1.4,
                color: 'var(--text)',
                marginBottom: '0.6rem',
                maxWidth: 520,
              }}
            >
              I BUILD THINGS AT THE
              <br />
              INTERSECTION OF AI,
              <br />
              DATA <span style={{ color: 'var(--accent)' }}>&amp;</span> DESIGN.
            </motion.p>

            <motion.p
              variants={stagger.item}
              className="mono"
              style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}
            >
              Developer · AI/ML Explorer · Builder · Creative Thinker
            </motion.p>

            {/* CTAs */}
            <motion.div variants={stagger.item} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                className="btn"
                onClick={() => scrollTo('work')}
                data-cursor="EXPLORE"
              >
                <span>EXPLORE MY WORK ↓</span>
              </button>
              <button
                className="btn"
                onClick={() => scrollTo('lab')}
                data-cursor="LAB"
                style={{ borderColor: 'var(--border)' }}
              >
                <span>ENTER THE LAB →</span>
              </button>
            </motion.div>

            {/* Mini stats row */}
            <motion.div
              variants={stagger.item}
              style={{
                display: 'flex',
                gap: '2rem',
                marginTop: '3rem',
                paddingTop: '2rem',
                borderTop: '1px solid var(--border)',
              }}
            >
              {[
                { value: '3+', label: 'AI Projects' },
                { value: '5+', label: 'Experiments' },
                { value: '∞', label: 'Curiosity' },
              ].map(stat => (
                <div key={stat.label}>
                  <p style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text)', lineHeight: 1 }}>
                    {stat.value}
                  </p>
                  <p className="section-label" style={{ marginTop: '0.3rem' }}>{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: node graph */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <NodeGraph />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
        }}
      >
        <p className="section-label">SCROLL</p>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ width: 1, height: 24, background: 'var(--border-light)' }}
        />
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
