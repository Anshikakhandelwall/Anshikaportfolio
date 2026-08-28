'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  'LOADING PROJECTS...',
  'LOADING EXPERIMENTS...',
  'LOADING CREATIVITY...',
  'SYSTEM READY',
];

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const duration = 1600; // ms
    const interval = 20;
    const increment = 100 / (duration / interval);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= 100) {
        current = 100;
        clearInterval(timer);
        setProgress(100);
        setTimeout(() => {
          setDone(true);
          setTimeout(onComplete, 500);
        }, 300);
      } else {
        setProgress(current);
        const idx = Math.floor((current / 100) * (steps.length - 1));
        setStepIndex(idx);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  const filled = Math.round(progress / 5); // 0-20 blocks
  const bar = '█'.repeat(filled) + '░'.repeat(20 - filled);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'var(--bg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9000,
          }}
        >
          <div style={{ fontFamily: 'var(--font-mono)', maxWidth: 420, width: '90%' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.65rem', letterSpacing: '0.18em', marginBottom: '2rem' }}>
              INITIALIZING ANSHIKA.DEV
            </p>

            <p style={{ color: 'var(--text)', fontSize: '0.8rem', letterSpacing: '0.06em', marginBottom: '1rem' }}>
              [{bar}] {Math.round(progress)}%
            </p>

            <p style={{ color: 'var(--accent)', fontSize: '0.65rem', letterSpacing: '0.12em', minHeight: '1.2em' }}>
              {steps[stepIndex]}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
