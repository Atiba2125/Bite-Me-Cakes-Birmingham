import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import { SectionHead, ParallaxImg, Stat } from '../components/Ui.jsx';
import { VALUES, STATS, REVIEWS, BRAND } from '../data.js';

export default function About() {
  return (
    <>
      <PageHero
        title="About Sheena" eyebrow="Luxury bespoke cake maker"
        lead="A home-grown Birmingham cake business, creating bespoke celebration cakes and baked goods across the West Midlands."
      />

      <section className="section">
        <div className="wrap split">
          <div>
            <Reveal as="p" className="eyebrow">Who we are</Reveal>
            <Reveal as="h2">Baked with love, <em>designed with you.</em></Reveal>
            <Reveal as="p" className="lead-p">Bite Me Cakes! Birmingham is run by Sheena, a luxury bespoke cake maker based in Netherhall Park. From drip cakes and rainbow layers to vintage buttercream and wedding tiers, every cake is made to order.</Reveal>
            <Reveal as="p">Customers tell us Sheena is amazing to work with — she listens, communicates clearly and delivers cakes that are as delicious as they are beautiful. We also create egg free, gluten free, dairy free and vegan cakes, and post treats nationwide.</Reveal>
            <div className="stats">
              {STATS.map((s, i) => <Stat key={s.label} {...s} delay={i * 100} />)}
            </div>
          </div>
          <ParallaxImg className="split__img" factor={0.05} src="/assets/roses.jpg" alt="A two-tier buttercream cake with roses" />
        </div>
      </section>

      <section className="section values">
        <div className="wrap">
          <SectionHead eyebrow="What we stand for">Our <em>promise</em></SectionHead>
          <div className="vgrid">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} className="value" delay={i * 100}>
                <span className="value__n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section reviews reviews--static">
        <div className="wrap">
          <SectionHead eyebrow="Kind words" light>Customers <em>love it</em></SectionHead>
          <div className="rgrid">
            {REVIEWS.map((r, i) => (
              <Reveal as="blockquote" key={i} className="rcard" delay={(i % 2) * 120}>
                <p>“{r.text}”</p>
                <cite>— {r.who}</cite>
              </Reveal>
            ))}
          </div>
          <Reveal className="center more"><Link className="btn btn--gold" to="/order">Order your cake</Link></Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap visit">
          <Reveal className="vcard">
            <h3>Find Sheena</h3>
            <address>{BRAND.area[0]}<br />{BRAND.area[1]}</address>
            <p>Collection and delivery by arrangement. Postal available nationwide.</p>
            <a className="btn btn--dark" href={BRAND.map} target="_blank" rel="noopener">View on map</a>
          </Reveal>
          <Reveal className="visit__map" delay={120}>
            <iframe title="Bite Me Cakes! Birmingham on Google Maps" src={BRAND.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
