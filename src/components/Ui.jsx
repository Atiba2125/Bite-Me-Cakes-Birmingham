import React, { useEffect, useRef } from 'react';
import Reveal from './Reveal.jsx';
import { RainbowBar } from './Effects.jsx';
import { useCountUp, useInView, useParallax, prefersReducedMotion } from '../hooks/useMotion.js';
import { MARQUEE } from '../data.js';

export const ext = { target: '_blank', rel: 'noopener' };

export function SectionHead({ eyebrow, children, light, center = true }) {
  return (
    <div className={`section__head${center ? '' : ' left'}`}>
      <Reveal as="p" className={`eyebrow${light ? ' eyebrow--light' : ''}`}>{eyebrow}</Reveal>
      <Reveal as="h2">{children}</Reveal>
      <Reveal><RainbowBar className={`rainbow--short${center ? '' : ' rainbow--left'}`} /></Reveal>
    </div>
  );
}

export function ParallaxImg({ className = '', factor, delay, ...imgProps }) {
  const imgRef = useRef(null);
  useParallax(imgRef, factor);
  return (
    <Reveal className={className} delay={delay}>
      <img ref={imgRef} loading="lazy" {...imgProps} />
    </Reveal>
  );
}

export function Stat({ end, dec, suffix, label, delay }) {
  const [ref, seen] = useInView();
  const v = useCountUp(end || 0, seen, { dec });
  return (
    <div ref={ref} className={`reveal stat${seen ? ' in' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      <b>{v}{suffix || ''}</b>
      <span>{label}</span>
    </div>
  );
}

export function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((m, i) => <React.Fragment key={i}><span>{m}</span><em>✦</em></React.Fragment>)}
      </div>
    </div>
  );
}

/** Cake card — tilts toward the pointer and opens the lightbox when clicked. */
export function CakeCard({ cake, delay = 0, onOpen }) {
  const ref = useRef(null);
  const [vref, seen] = useInView();
  const canTilt = typeof window !== 'undefined' && !prefersReducedMotion() && window.matchMedia('(hover:hover)').matches;
  const move = (e) => {
    if (!canTilt || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-6px)`;
  };
  const leave = () => { if (ref.current) ref.current.style.transform = ''; };
  return (
    <button
      ref={(n) => { ref.current = n; vref.current = n; }}
      className={`ccard reveal${seen ? ' in' : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      onMouseMove={move} onMouseLeave={leave}
      onClick={() => onOpen && onOpen(cake)}
      aria-label={`View ${cake.title}`}
    >
      <span className="ccard__img"><img src={cake.img} alt={cake.title} loading="lazy" /></span>
      <span className="ccard__info"><b>{cake.title}</b><small>{cake.caption}</small></span>
      <span className="ccard__plus" aria-hidden="true">+</span>
    </button>
  );
}

/** Full-screen photo viewer with keyboard support. */
export function Lightbox({ list, current, onClose, onChange }) {
  const idx = list.findIndex((c) => c.id === current?.id);
  useEffect(() => {
    if (!current) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onChange(list[(idx + 1) % list.length]);
      if (e.key === 'ArrowLeft') onChange(list[(idx - 1 + list.length) % list.length]);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [current, idx, list, onClose, onChange]);
  if (!current) return null;
  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.title} onClick={onClose}>
      <button className="lightbox__close" aria-label="Close" onClick={onClose}>×</button>
      <button className="lightbox__nav lightbox__nav--prev" aria-label="Previous" onClick={(e) => { e.stopPropagation(); onChange(list[(idx - 1 + list.length) % list.length]); }}>‹</button>
      <figure onClick={(e) => e.stopPropagation()}>
        <img key={current.id} src={current.img} alt={current.title} />
        <figcaption><b>{current.title}</b><span>{current.caption}</span></figcaption>
      </figure>
      <button className="lightbox__nav lightbox__nav--next" aria-label="Next" onClick={(e) => { e.stopPropagation(); onChange(list[(idx + 1) % list.length]); }}>›</button>
    </div>
  );
}
