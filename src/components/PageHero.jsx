import React from 'react';
import { RainbowBar } from './Effects.jsx';

/** Hero used at the top of inner pages. */
export default function PageHero({ title, eyebrow, lead, children }) {
  return (
    <section className="phero" data-title={title}>
      <div className="phero__glow" />
      <img className="phero__mark" src="/assets/logo.png" alt="" aria-hidden="true" />
      <div className="phero__inner">
        {eyebrow && <p className="eyebrow eyebrow--light">{eyebrow}</p>}
        <h1>{title}</h1>
        <RainbowBar className="rainbow--short" />
        {lead && <p className="phero__lead">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
