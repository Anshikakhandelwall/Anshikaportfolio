'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Command = {
  label: string;
  description?: string;
  action: () => void;
  shortcut?: string;
};

function buildCommands(close: () => void): Command[] {
  const scrollTo = (id: string) => {
    close();
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  return [
    { label: 'Go to Work', description: 'Selected projects', action: () => scrollTo('work'), shortcut: 'W' },
    { label: 'Go to Lab', description: 'Experiments & ideas', action: () => scrollTo('lab'), shortcut: 'L' },
    { label: 'Go to Creative', description: 'Design work', action: () => scrollTo('creative'), shortcut: 'C' },
    { label: 'Go to About', description: 'Who is Anshika', action: () => scrollTo('about'), shortcut: 'A' },
    { label: 'Go to Contact', description: 'Get in touch', action: () => scrollTo('contact') },
    {
      label: 'Open GitHub',
      description: 'github.com/anshikakhandelwal',
      action: () => { close(); window.open('https://github.com/anshikakhandelwal', '_blank'); },
    },
    {
      label: 'Open LinkedIn',
      description: 'Connect on LinkedIn',
      action: () => { close(); window.open('https://linkedin.com/in/anshikakhandelwal', '_blank'); },
    },
    {
      label: 'Back to top',
      description: 'Scroll to hero',
      action: () => { close(); window.scrollTo({ top: 0, behavior: 'smooth' }); },
    },
  ];
}

export default function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = buildCommands(onClose);
  const filtered = commands.filter(c =>
    c.label.toLowerCase().includes(query.toLowerCase()) ||
    (c.description ?? '').toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (open) {
      setQuery('');
      setSelected(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    setSelected(0);
  }, [query]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSelected(s => Math.min(s + 1, filtered.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setSelected(s => Math.max(s - 1, 0)); }
    else if (e.key === 'Enter') { filtered[selected]?.action(); }
    else if (e.key === 'Escape') { onClose(); }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed', inset: 0,
              background: 'rgba(0,0,0,0.7)',
              backdropFilter: 'blur(4px)',
              zIndex: 900,
            }}
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -16 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              top: '20%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 'min(560px, 90vw)',
              background: 'var(--surface-2)',
              border: '1px solid var(--border-light)',
              zIndex: 901,
              boxShadow: '0 32px 80px rgba(0,0,0,0.7)',
            }}
          >
            {/* Search input */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              padding: '0.9rem 1.2rem',
              borderBottom: '1px solid var(--border)',
            }}>
              <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>⌘</span>
              <input
                ref={inputRef}
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Search anything..."
                style={{
                  flex: 1,
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  color: 'var(--text)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  letterSpacing: '0.02em',
                }}
              />
              <span
                onClick={onClose}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.1em',
                  color: 'var(--text-muted)',
                  border: '1px solid var(--border)',
                  padding: '0.2rem 0.4rem',
                  cursor: 'none',
                }}
              >
                ESC
              </span>
            </div>

            {/* Results */}
            <div style={{ maxHeight: 320, overflowY: 'auto' }}>
              {filtered.length === 0 ? (
                <p style={{ padding: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                  No results for &ldquo;{query}&rdquo;
                </p>
              ) : (
                filtered.map((cmd, i) => (
                  <div
                    key={cmd.label}
                    onClick={cmd.action}
                    onMouseEnter={() => setSelected(i)}
                    data-cursor="→"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.9rem 1.2rem',
                      background: selected === i ? 'var(--surface)' : 'transparent',
                      borderBottom: '1px solid var(--border)',
                      cursor: 'none',
                      transition: 'background 0.1s',
                    }}
                  >
                    <div>
                      <p style={{ fontSize: '0.875rem', color: selected === i ? 'var(--text)' : 'var(--text-muted)', fontWeight: 500 }}>
                        {cmd.label}
                      </p>
                      {cmd.description && (
                        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-subtle)', marginTop: '0.1rem' }}>
                          {cmd.description}
                        </p>
                      )}
                    </div>
                    {cmd.shortcut && (
                      <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6rem',
                        color: 'var(--text-muted)',
                        border: '1px solid var(--border)',
                        padding: '0.15rem 0.4rem',
                      }}>
                        {cmd.shortcut}
                      </span>
                    )}
                  </div>
                ))
              )}
            </div>

            {/* Footer hint */}
            <div style={{
              padding: '0.6rem 1.2rem',
              borderTop: '1px solid var(--border)',
              display: 'flex',
              gap: '1.2rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.58rem',
              letterSpacing: '0.08em',
              color: 'var(--text-subtle)',
            }}>
              <span>↑↓ navigate</span>
              <span>↵ select</span>
              <span>ESC close</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
