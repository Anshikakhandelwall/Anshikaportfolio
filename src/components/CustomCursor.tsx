'use client';
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ringX = 0, ringY = 0;
    let mouseX = 0, mouseY = 0;
    let raf: number;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
      }
      if (labelRef.current) {
        labelRef.current.style.transform = `translate(${mouseX + 16}px, ${mouseY - 6}px)`;
      }
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      ringX = lerp(ringX, mouseX, 0.12);
      ringY = lerp(ringY, mouseY, 0.12);
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const label = target.getAttribute('data-cursor');
      if (ringRef.current) {
        ringRef.current.style.width = '56px';
        ringRef.current.style.height = '56px';
        ringRef.current.style.borderColor = 'rgba(255,255,255,0.7)';
      }
      if (labelRef.current && label) {
        labelRef.current.textContent = label;
        labelRef.current.style.opacity = '1';
      }
    };

    const onLeave = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '32px';
        ringRef.current.style.height = '32px';
        ringRef.current.style.borderColor = 'rgba(255,255,255,0.4)';
      }
      if (labelRef.current) {
        labelRef.current.style.opacity = '0';
      }
    };

    window.addEventListener('mousemove', move);

    const interactives = document.querySelectorAll('a, button, [data-cursor]');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onEnter as EventListener);
      el.addEventListener('mouseleave', onLeave);
    });

    const observer = new MutationObserver(() => {
      const els = document.querySelectorAll('a, button, [data-cursor]');
      els.forEach(el => {
        el.removeEventListener('mouseenter', onEnter as EventListener);
        el.removeEventListener('mouseleave', onLeave);
        el.addEventListener('mouseenter', onEnter as EventListener);
        el.addEventListener('mouseleave', onLeave);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div id="cursor">
        <div id="cursor-dot" ref={dotRef} style={{ position: 'fixed', top: 0, left: 0 }} />
      </div>
      <div id="cursor-ring" ref={ringRef} style={{ top: 0, left: 0 }} />
      <div id="cursor-label" ref={labelRef} style={{ top: 0, left: 0 }} />
    </>
  );
}
