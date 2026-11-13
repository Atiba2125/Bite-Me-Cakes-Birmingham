import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV } from '../data.js';

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className={`nav${solid ? ' is-solid' : ''}`}>
      <Link to="/" className="nav__brand" aria-label="Bite Me Cakes! home">
        <img src="/assets/logo.png" alt="Bite Me Cakes!" />
      </Link>
      <nav className={`nav__links${open ? ' open' : ''}`} aria-label="Main">
        {NAV.map((n) => <NavLink key={n.to} to={n.to} end={n.to === '/'}>{n.label}</NavLink>)}
        <Link className="nav__cta" to="/order">Order a cake</Link>
      </nav>
      <button className="nav__toggle" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <span /><span />
      </button>
    </header>
  );
}
