'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" style={{ padding: '6rem 2rem', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '5rem' }}
        >
          <p className="section-label" style={{ marginBottom: '1rem' }}>08 — CONTACT</p>
          <h2 className="display" style={{ lineHeight: 0.9, marginBottom: '1.5rem' }}>
            HAVE A PROBLEM<br />
            <span style={{ color: 'var(--text-muted)' }}>WORTH BUILDING?</span>
          </h2>
          <button
            className="btn"
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ fontSize: '0.8rem', padding: '0.8rem 1.8rem' }}
          >
            <span>LET&apos;S TALK →</span>
          </button>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6rem',
          alignItems: 'start',
        }} className="contact-grid">

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label" style={{ marginBottom: '1.5rem' }}>FIND ME AT</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {[
                { label: 'GITHUB', href: 'https://github.com/Anshikakhandelwall', sub: '@Anshikakhandelwall' },
                { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/anshika-khandelwal-206898307', sub: 'Anshika Khandelwal' },
                { label: 'EMAIL', href: 'anshikakhandelwal911@gmail.com', sub: 'anshikakhandelwal' },
              ].map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="↗"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.2rem 0',
                    borderBottom: '1px solid var(--border)',
                    textDecoration: 'none',
                    color: 'var(--text)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.paddingLeft = '0.8rem'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.paddingLeft = '0'; }}
                >
                  <div>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>{link.label}</p>
                    <p style={{ fontSize: '1rem', fontWeight: 500 }}>{link.sub}</p>
                  </div>
                  <span style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>↗</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            id="contact-form"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  border: '1px solid var(--border)',
                  padding: '3rem 2rem',
                  textAlign: 'center',
                  background: 'var(--surface)',
                }}
              >
                <p className="section-label" style={{ marginBottom: '0.8rem', color: 'var(--green)' }}>MESSAGE RECEIVED</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { name: 'name' as const, placeholder: 'Your name', type: 'text', required: true },
                  { name: 'email' as const, placeholder: 'Your email', type: 'email', required: true },
                ].map(field => (
                  <input
                    key={field.name}
                    type={field.type}
                    required={field.required}
                    placeholder={field.placeholder}
                    value={formState[field.name]}
                    onChange={e => setFormState(s => ({ ...s, [field.name]: e.target.value }))}
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      color: 'var(--text)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      padding: '0.9rem 1rem',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={e => { e.target.style.borderColor = 'var(--accent)'; }}
                    onBlur={e => { e.target.style.borderColor = 'var(--border)'; }}
                  />
                ))}
                <textarea
                  required
                  placeholder="Your message"
                  rows={5}
                  value={formState.message}
                  onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    color: 'var(--text)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    padding: '0.9rem 1rem',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={e => { e.target.style.borderColor = 'var(--accent)'; }}
                  onBlur={e => { e.target.style.borderColor = 'var(--border)'; }}
                />
                <button
                  type="submit"
                  className="btn"
                  style={{ alignSelf: 'flex-start', fontSize: '0.75rem' }}
                >
                  <span>SEND MESSAGE →</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
