import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import { CakeCard, Lightbox } from '../components/Ui.jsx';
import { CAKES, CATEGORIES, BRAND } from '../data.js';

export default function Cakes() {
  const [cat, setCat] = useState('all');
  const [open, setOpen] = useState(null);
  const list = cat === 'all' ? CAKES : CAKES.filter((c) => c.cat === cat);

  return (
    <>
      <PageHero
        title="Our cakes" eyebrow="A gallery of recent creations"
        lead="Every cake is made to order. Browse for inspiration, then tell Sheena your idea — tap any photo to see it larger."
      />

      <div className="chipbar">
        <div className="chipbar__inner">
          <button className={`chip${cat === 'all' ? ' on' : ''}`} onClick={() => setCat('all')}>All</button>
          {CATEGORIES.map((c) => (
            <button key={c.id} className={`chip${cat === c.id ? ' on' : ''}`} onClick={() => setCat(c.id)}>{c.label}</button>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="wrap" key={cat}>
          <div className="cgrid cgrid--anim">
            {list.map((c, i) => <CakeCard key={c.id} cake={c} delay={(i % 3) * 90} onOpen={setOpen} />)}
          </div>
          <Reveal as="p" className="fine center">Every cake is bespoke — these are examples of recent work, and your cake will be designed just for you.</Reveal>
        </div>
      </section>

      <section className="ctaband">
        <Reveal className="wrap ctaband__inner">
          <div><h2>Seen something you love?</h2><p>Send Sheena a photo or your idea — she&apos;ll turn it into your own bespoke cake.</p></div>
          <div className="ctaband__btns">
            <Link className="btn btn--gold" to="/order">Start your cake</Link>
            <a className="btn btn--ghost" href={BRAND.tel}>Call {BRAND.phone}</a>
          </div>
        </Reveal>
      </section>
      <Lightbox list={list} current={open} onClose={() => setOpen(null)} onChange={setOpen} />
    </>
  );
}
