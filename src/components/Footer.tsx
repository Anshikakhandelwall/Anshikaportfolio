'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{
      padding: '4rem 2rem',
      borderTop: '1px solid var(--border)',
      background: 'var(--surface)',
    }}>
      <div style={{
        maxWidth: 1400,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '2rem',
        alignItems: 'end',
      }} className="footer-grid">

        {/* Left */}
        <div>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            fontWeight: 600,
            letterSpacing: '0.15em',
            color: 'var(--text)',
            marginBottom: '1rem',
          }}>
            ANSHIKA.DEV
          </p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.06em', color: 'var(--text-muted)', lineHeight: 1.8 }}>
            Built with curiosity.<br />
            Designed with intention.<br />
            Always experimenting.
          </p>

          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            letterSpacing: '0.1em',
            color: 'var(--text-subtle)',
            marginTop: '1.5rem',
          }}>
            © 2026 ANSHIKA KHANDELWAL
          </p>
        </div>

        {/* Right */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1rem' }}>
          <motion.button
            onClick={scrollTop}
            whileHover={{ y: -3 }}
            data-cursor="↑"
            style={{
              background: 'none',
              border: '1px solid var(--border-light)',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.12em',
              padding: '0.6rem 1rem',
              textTransform: 'uppercase',
              cursor: 'none',
              transition: 'all 0.2s',
            }}
          >
            BACK TO TOP ↑
          </motion.button>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {[
              { label: 'GITHUB', href: 'https://github.com/anshikakhandelwal' },
              { label: 'LINKEDIN', href: 'https://linkedin.com/in/anshikakhandelwal' },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="↗"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.12em',
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Cmd palette hint */}
      <div style={{
        maxWidth: 1400,
        margin: '2rem auto 0',
        paddingTop: '1.5rem',
        borderTop: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.6rem',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.6rem',
        letterSpacing: '0.1em',
        color: 'var(--text-subtle)',
      }}>
        <span style={{
          border: '1px solid var(--border)',
          padding: '0.1rem 0.4rem',
          fontSize: '0.58rem',
        }}>⌘K</span>
        <span>open command palette · terminal available in bottom-right</span>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
