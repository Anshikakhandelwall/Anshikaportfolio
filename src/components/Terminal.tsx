'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Line = { type: 'input' | 'output' | 'error'; text: string };

const COMMANDS: Record<string, () => { text: string; scroll?: string }> = {
  help: () => ({
    text: `available commands:\n\n  work       → scroll to selected work\n  lab        → scroll to the lab\n  creative   → scroll to creative work\n  about      → scroll to about\n  contact    → get in touch\n  clear      → clear terminal\n  whoami     → who is this?`,
  }),
  work: () => ({ text: 'navigating to work...', scroll: 'work' }),
  lab: () => ({ text: 'entering the lab...', scroll: 'lab' }),
  creative: () => ({ text: 'opening creative section...', scroll: 'creative' }),
  about: () => ({ text: 'loading about...', scroll: 'about' }),
  contact: () => ({ text: 'opening contact...', scroll: 'contact' }),
  whoami: () => ({ text: 'anshika khandelwal — developer, ai/ml explorer, builder.' }),
  ls: () => ({ text: 'work/  lab/  creative/  about/  contact/' }),
  pwd: () => ({ text: '/anshika-portfolio' }),
};

export default function Terminal({ onClose }: { onClose: () => void }) {
  const [lines, setLines] = useState<Line[]>([
    { type: 'output', text: 'anshika@dev — terminal v1.0' },
    { type: 'output', text: 'type "help" for available commands\n' },
  ]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  const run = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    setHistory(h => [trimmed, ...h]);
    setHistIdx(-1);

    const newLines: Line[] = [{ type: 'input', text: `$ ${cmd}` }];

    if (trimmed === 'clear') {
      setLines([{ type: 'output', text: 'terminal cleared.' }]);
      return;
    }

    if (trimmed === '') {
      setLines(l => [...l, { type: 'input', text: '$' }]);
      return;
    }

    const handler = COMMANDS[trimmed];
    if (handler) {
      const result = handler();
      result.text.split('\n').forEach(t => newLines.push({ type: 'output', text: t }));
      if (result.scroll) {
        setTimeout(() => {
          document.getElementById(result.scroll!)?.scrollIntoView({ behavior: 'smooth' });
        }, 400);
      }
    } else {
      newLines.push({ type: 'error', text: `command not found: ${trimmed}. try "help"` });
    }

    setLines(l => [...l, ...newLines]);
  };

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      run(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const idx = Math.min(histIdx + 1, history.length - 1);
      setHistIdx(idx);
      setInput(history[idx] ?? '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const idx = Math.max(histIdx - 1, -1);
      setHistIdx(idx);
      setInput(idx === -1 ? '' : history[idx]);
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: 20 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: 'min(520px, 90vw)',
        background: 'var(--surface)',
        border: '1px solid var(--border-light)',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.75rem',
        zIndex: 800,
        boxShadow: '0 24px 60px rgba(0,0,0,0.6)',
      }}
      onClick={() => inputRef.current?.focus()}
    >
      {/* Title bar */}
      <div style={{
        borderBottom: '1px solid var(--border)',
        padding: '0.6rem 1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <span className="section-label">TERMINAL</span>
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            letterSpacing: '0.1em',
          }}
        >
          ESC
        </button>
      </div>

      {/* Output */}
      <div style={{ height: 280, overflowY: 'auto', padding: '1rem' }}>
        {lines.map((line, i) => (
          <p key={i} style={{
            color: line.type === 'input'
              ? 'var(--text)'
              : line.type === 'error'
              ? 'var(--red)'
              : 'var(--text-muted)',
            lineHeight: 1.7,
            whiteSpace: 'pre-wrap',
          }}>
            {line.text}
          </p>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div style={{
        borderTop: '1px solid var(--border)',
        padding: '0.6rem 1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
      }}>
        <span style={{ color: 'var(--accent)' }}>$</span>
        <input
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={onKey}
          style={{
            flex: 1,
            background: 'none',
            border: 'none',
            outline: 'none',
            color: 'var(--text)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            letterSpacing: '0.04em',
            caretColor: 'var(--accent)',
          }}
          spellCheck={false}
          autoComplete="off"
          placeholder="type a command..."
        />
      </div>
    </motion.div>
  );
}
