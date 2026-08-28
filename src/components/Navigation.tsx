'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'WORK', href: '#work' },
  { label: 'LAB', href: '#lab' },
  { label: 'CREATIVE', href: '#creative' },
  { label: 'ABOUT', href: '#about' },
  { label: 'CONTACT', href: '#contact' },
];

const SECTION_IDS = ['work', 'lab', 'creative', 'about', 'contact'];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Intersection Observer for active section
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 'var(--nav-h)',
          zIndex: 500,
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          background: scrolled ? 'rgba(10,10,10,0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          padding: '0 2rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: 1400, margin: '0 auto' }}>
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              padding: '0.2rem 0',
              marginRight: 'auto',
            }}
          >
            AK
          </button>

          {/* Desktop links */}
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="desktop-nav">
            {NAV_LINKS.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: active === link.href.replace('#', '') ? 'var(--text)' : 'var(--text-muted)',
                  padding: '0.2rem 0',
                  position: 'relative',
                  transition: 'color 0.2s',
                }}
              >
                {active === link.href.replace('#', '') && (
                  <motion.span
                    layoutId="nav-underline"
                    style={{
                      position: 'absolute',
                      bottom: -2,
                      left: 0,
                      right: 0,
                      height: '1px',
                      background: 'var(--accent)',
                    }}
                  />
                )}
                {link.label}
              </button>
            ))}

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              marginLeft: '1rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.58rem',
              letterSpacing: '0.12em',
              color: 'var(--text-muted)',
            }}>
              <span style={{
                width: 6, height: 6,
                borderRadius: '50%',
                background: 'var(--green)',
                display: 'inline-block',
                animation: 'pulse 2s infinite',
              }} />
              AVAILABLE TO BUILD
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
            style={{
              display: 'none',
              background: 'none',
              border: '1px solid var(--border-light)',
              color: 'var(--text)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.62rem',
              letterSpacing: '0.1em',
              padding: '0.4rem 0.8rem',
            }}
            className="mobile-menu-btn"
          >
            {menuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: 'var(--nav-h)',
              left: 0,
              right: 0,
              bottom: 0,
              background: 'var(--bg)',
              zIndex: 499,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem',
              borderTop: '1px solid var(--border)',
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => scrollTo(link.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(1.8rem, 6vw, 3rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: active === link.href.replace('#', '') ? 'var(--text)' : 'var(--text-subtle)',
                  transition: 'color 0.2s',
                }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </>
  );
}
