'use client';
import { motion } from 'framer-motion';

const categories = [
  {
    label: 'BUILD',
    tools: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'],
  },
  {
    label: 'AI / DATA',
    tools: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'SHAP', 'LIME', 'Matplotlib'],
  },
  {
    label: 'BACKEND',
    tools: ['Django', 'PostgreSQL', 'Supabase', 'REST APIs', 'Node.js'],
  },
  {
    label: 'TOOLS',
    tools: ['Git', 'GitHub', 'VS Code', 'Figma', 'Vercel'],
  },
];

export default function TechStack() {
  return (
    <section style={{ padding: '6rem 2rem', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>

        <div style={{ marginBottom: '3rem' }}>
          <p className="section-label" style={{ marginBottom: '0.8rem' }}>04 — TOOLS I BUILD WITH</p>
          <h2 className="display-sm">
            The technology<br />behind the work.
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0',
          borderLeft: '1px solid var(--border)',
          borderTop: '1px solid var(--border)',
        }} className="tech-grid">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              style={{
                borderRight: '1px solid var(--border)',
                borderBottom: '1px solid var(--border)',
                padding: '2rem',
              }}
            >
              <p className="section-label" style={{ marginBottom: '1.5rem', color: 'var(--accent)' }}>
                {cat.label}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {cat.tools.map((tool, ti) => (
                  <motion.p
                    key={tool}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: ci * 0.08 + ti * 0.04 }}
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--text)',
                      fontWeight: 500,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <span style={{ width: 4, height: 4, background: 'var(--border-light)', borderRadius: '50%', flexShrink: 0 }} />
                    {tool}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            marginTop: '3rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            letterSpacing: '0.06em',
            color: 'var(--text-muted)',
            maxWidth: 600,
          }}
        >
          // tools change. the ability to learn new ones doesn&apos;t.
        </motion.p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .tech-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .tech-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
