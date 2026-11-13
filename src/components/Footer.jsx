import React from 'react';
import { Link } from 'react-router-dom';
import { NAV, BRAND } from '../data.js';
import { RainbowBar } from './Effects.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <RainbowBar />
      <div className="wrap footer__grid">
        <div className="footer__brand">
          <img src="/assets/logo.png" alt="Bite Me Cakes!" />
          <p>Luxury bespoke cakes, made with love in Birmingham.</p>
        </div>
        <div>
          <h4>Explore</h4>
          {NAV.map((n) => <Link key={n.to} to={n.to}>{n.label}</Link>)}
        </div>
        <div>
          <h4>Get in touch</h4>
          <a href={BRAND.tel}>{BRAND.phone}</a>
          <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
          <a href={BRAND.instagram} target="_blank" rel="noopener">Instagram @bitemecakesbirmingham</a>
        </div>
        <div>
          <h4>Based in</h4>
          <address>{BRAND.area[0]}<br />{BRAND.area[1]}</address>
          <p className="footer__note">Postal available nationwide.</p>
        </div>
      </div>
      <p className="footer__small">© {new Date().getFullYear()} Bite Me Cakes! Birmingham. Concept website — logo and photos belong to Bite Me Cakes! Birmingham.</p>
    </footer>
  );
}
