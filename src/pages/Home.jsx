import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import { SpinBadge, RainbowBar } from '../components/Effects.jsx';
import { SectionHead, ParallaxImg, Stat, Marquee, CakeCard, Lightbox } from '../components/Ui.jsx';
import { prefersReducedMotion } from '../hooks/useMotion.js';
import { BRAND, STATS, SIGNATURE, HERO_PHOTOS, OCCASIONS, DIETARY, REVIEWS, CAKES } from '../data.js';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow" />
      <div className="hero__inner">
        <div className="hero__text">
          <img className="hero__logo" src="/assets/logo.png" alt="Bite Me Cakes!" />
          <p className="eyebrow eyebrow--light hero__eyebrow">Luxury bespoke cake maker · Birmingham</p>
          <h1 className="hero__title">
            <span className="line"><span>Cakes made to be</span></span>
            <span className="line"><span className="gradient">the centrepiece.</span></span>
          </h1>
          <p className="hero__lead">
            Birthday, wedding and novelty cakes, drip cakes, cupcakes and treat boxes — designed and baked to order by Sheena. Egg-free, gluten-free, dairy-free and vegan options available.
          </p>
          <div className="hero__actions">
            <Link className="btn btn--gold" to="/order">Start your cake</Link>
            <Link className="btn btn--ghost" to="/cakes">See our cakes</Link>
          </div>
        </div>

        <div className="hero__photos" aria-hidden="true">
          {HERO_PHOTOS.map((p, i) => (
            <div key={p.src} className={`polaroid polaroid--${i}`}><img src={p.src} alt="" loading="eager" /></div>
          ))}
        </div>
      </div>

      <div className="hero__badge"><SpinBadge><img src="/assets/logo-square.png" alt="" /></SpinBadge></div>
      <a href="#signature" className="hero__scroll" aria-label="Scroll down"><span /></a>
    </section>
  );
}

function Signature() {
  const [open, setOpen] = useState(null);
  return (
    <section className="section" id="signature">
      <div className="wrap">
        <SectionHead eyebrow="Recent creations">Cakes worth <em>a double take</em></SectionHead>
        <div className="cgrid">
          {SIGNATURE.map((c, i) => <CakeCard key={c.id} cake={c} delay={(i % 3) * 120} onOpen={setOpen} />)}
        </div>
        <Reveal className="center more"><Link className="btn btn--dark" to="/cakes">View the full gallery</Link></Reveal>
      </div>
      <Lightbox list={SIGNATURE} current={open} onClose={() => setOpen(null)} onChange={setOpen} />
    </section>
  );
}

function Occasions() {
  return (
    <section className="section occasions">
      <div className="wrap">
        <SectionHead eyebrow="For every celebration">Made to <em>order</em></SectionHead>
        <div className="ogrid">
          {OCCASIONS.map((o, i) => (
            <Reveal key={o.title} className="occ" delay={(i % 3) * 100}>
              <span className="occ__icon" aria-hidden="true">{o.icon}</span>
              <h3>{o.title}</h3>
              <p>{o.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Dietary() {
  return (
    <section className="section dietary">
      <div className="wrap dietary__grid">
        <ParallaxImg className="dietary__img" factor={0.05} src="/assets/treat-box.jpg" alt="A box of macarons, cupcakes and meringue kisses" />
        <div>
          <Reveal as="p" className="eyebrow eyebrow--light">Everyone&apos;s invited</Reveal>
          <Reveal as="h2">Cake for <em>every diet</em></Reveal>
          <Reveal><RainbowBar className="rainbow--short rainbow--left" /></Reveal>
          <Reveal as="p">We also create egg free, gluten free, dairy free and vegan cakes — just as beautiful, just as delicious. Tell us your needs when you enquire.</Reveal>
          <Reveal className="chips">
            {DIETARY.map((d, i) => <span key={d} className="tag" style={{ '--i': i }}>{d}</span>)}
          </Reveal>
          <Reveal className="dietary__btns">
            <Link className="btn btn--gold" to="/order">Ask about your needs</Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function AboutTeaser() {
  return (
    <section className="section about">
      <div className="wrap about__grid">
        <div className="about__media">
          <ParallaxImg className="about__img" factor={0.06} src="/assets/vintage.jpg" alt="A vintage-style piped buttercream cake" />
          <Reveal className="about__badge" delay={200}><img src="/assets/logo-square.png" alt="Bite Me Cakes!" /></Reveal>
        </div>
        <div>
          <Reveal as="p" className="eyebrow">Meet Sheena</Reveal>
          <Reveal as="h2">Every cake tells <em>your story.</em></Reveal>
          <Reveal as="p">Bite Me Cakes! Birmingham is a home-grown luxury cake business creating bespoke celebration cakes and baked goods across the West Midlands — with postal treats available nationwide.</Reveal>
          <Reveal as="p">Customers tell us the cakes look amazing and taste even better — and that Sheena listens to exactly what you want.</Reveal>
          <Reveal><Link className="link" to="/about">About Sheena <span>→</span></Link></Reveal>
          <div className="stats">
            {STATS.map((s, i) => <Stat key={s.label} {...s} delay={i * 100} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const t = setInterval(() => setI((x) => (x + 1) % REVIEWS.length), 6500);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="section reviews">
      <div className="wrap">
        <Reveal className="reviews__head">
          <p className="eyebrow eyebrow--light">Five-star customer love</p>
          <p className="reviews__stars" aria-label="4.9 out of 5">★★★★★ <b>4.9</b> on Google · 158 reviews</p>
        </Reveal>
        <div className="reviews__stage">
          {REVIEWS.map((r, n) => (
            <blockquote key={n} className={n === i ? 'on' : ''}>
              <p>“{r.text}”</p>
              <cite>— {r.who}</cite>
            </blockquote>
          ))}
        </div>
        <div className="reviews__dots">
          {REVIEWS.map((_, n) => <button key={n} aria-label={`Review ${n + 1}`} className={n === i ? 'on' : ''} onClick={() => setI(n)} />)}
        </div>
      </div>
    </section>
  );
}

function GalleryStrip() {
  const items = [...CAKES, ...CAKES];
  return (
    <section className="strip" aria-label="Photo strip">
      <div className="strip__track">
        {items.map((c, i) => <img key={i} src={c.img} alt="" loading="lazy" />)}
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="section cta">
      <div className="wrap cta__inner">
        <Reveal as="h2">Let&apos;s make your <em>celebration</em> sweeter.</Reveal>
        <Reveal as="p">DM on Instagram or call {BRAND.phone} to tell Sheena about your cake.</Reveal>
        <Reveal className="cta__btns">
          <Link className="btn btn--gold" to="/order">Start your cake</Link>
          <a className="btn btn--ghost" href={BRAND.tel}>Call {BRAND.phone}</a>
          <a className="btn btn--ghost" href={BRAND.instagram} target="_blank" rel="noopener">DM on Instagram</a>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Signature />
      <Occasions />
      <Dietary />
      <GalleryStrip />
      <AboutTeaser />
      <Reviews />
      <CtaBand />
    </>
  );
}
