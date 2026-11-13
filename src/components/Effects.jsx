import React, { useMemo } from 'react';
import { prefersReducedMotion } from '../hooks/useMotion.js';
import { RAINBOW } from '../data.js';

/** Rainbow sprinkles drifting down the page, like dusting on a cake. */
export function Sprinkles() {
  const bits = useMemo(() => {
    if (prefersReducedMotion()) return [];
    const n = window.innerWidth < 700 ? 10 : 22;
    return Array.from({ length: n }, (_, i) => ({
      id: i,
      round: Math.random() > 0.6,
      style: {
        left: `${Math.random() * 100}%`,
        '--l': `${9 + Math.random() * 11}px`,
        '--d': `${14 + Math.random() * 16}s`,
        '--delay': `${-Math.random() * 24}s`,
        '--x': `${Math.random() * 140 - 70}px`,
        '--r': `${Math.floor(Math.random() * 360)}deg`,
        '--c': RAINBOW[Math.floor(Math.random() * RAINBOW.length)],
      },
    }));
  }, []);
  return (
    <div className="sprinkles" aria-hidden="true">
      {bits.map((b) => <i key={b.id} className={b.round ? 'dot' : 'rod'} style={b.style} />)}
    </div>
  );
}

/** Animated flowing rainbow divider. */
export function RainbowBar({ className = '' }) {
  return <div className={`rainbow ${className}`} aria-hidden="true" />;
}

/** Circular rotating text badge. */
export function SpinBadge({ text = 'BESPOKE • MADE TO ORDER • BIRMINGHAM • ', children }) {
  return (
    <div className="spin">
      <svg viewBox="0 0 200 200" className="spin__ring" aria-hidden="true">
        <defs><path id="circ" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" /></defs>
        <text><textPath href="#circ" startOffset="0">{text}</textPath></text>
      </svg>
      <div className="spin__core">{children}</div>
    </div>
  );
}
