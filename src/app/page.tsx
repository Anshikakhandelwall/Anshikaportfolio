'use client';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

import LoadingScreen from '@/components/LoadingScreen';
import Navigation from '@/components/Navigation';
import ScrollProgress from '@/components/ScrollProgress';
import Hero from '@/components/Hero';
import IdentityStrip from '@/components/IdentityStrip';
import WorkSection from '@/components/WorkSection';
import LabSection from '@/components/LabSection';
import TechStack from '@/components/TechStack';
import CreativeSection from '@/components/CreativeSection';
import JourneySection from '@/components/JourneySection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import CommandPalette from '@/components/CommandPalette';
import Footer from '@/components/Footer';

const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false });
const Terminal = dynamic(() => import('@/components/Terminal'), { ssr: false });

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);

  // Command palette: ⌘K / Ctrl+K
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setPaletteOpen(v => !v);
      }
      if (e.key === 'Escape') {
        setPaletteOpen(false);
        setTerminalOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      {/* Background layers */}
      <div className="grid-overlay" aria-hidden />
      <div className="noise-overlay" aria-hidden />

      {/* Custom cursor (desktop only, CSR) */}
      <CustomCursor />

      {/* Loading screen */}
      <LoadingScreen onComplete={() => setLoading(false)} />

      {/* Main content */}
      {!loading && (
        <>
          <ScrollProgress />
          <Navigation />

          <main>
            <Hero />
            <IdentityStrip />
            <WorkSection />
            <LabSection />
            <TechStack />
            <CreativeSection />
            <JourneySection />
            <AboutSection />
            <ContactSection />
          </main>

          <Footer />

          {/* Terminal toggle button */}
          <button
            onClick={() => setTerminalOpen(v => !v)}
            data-cursor="TERMINAL"
            aria-label="Toggle terminal"
            style={{
              position: 'fixed',
              bottom: '2rem',
              left: '2rem',
              background: 'var(--surface)',
              border: '1px solid var(--border-light)',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              letterSpacing: '0.12em',
              padding: '0.5rem 0.9rem',
              textTransform: 'uppercase',
              zIndex: 700,
              transition: 'all 0.2s',
              cursor: 'none',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-light)'; }}
          >
            {terminalOpen ? '✕ TERMINAL' : '> TERMINAL'}
          </button>

          {/* Command palette */}
          <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />

          {/* Terminal */}
          <AnimatePresence>
            {terminalOpen && <Terminal onClose={() => setTerminalOpen(false)} />}
          </AnimatePresence>
        </>
      )}
    </>
  );
}
