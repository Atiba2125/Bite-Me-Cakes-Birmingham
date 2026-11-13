import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';

export default function NotFound() {
  return (
    <PageHero title="Page not found" eyebrow="404" lead="Looks like someone took a bite out of this page. Let's get you back to the good stuff.">
      <div className="phero__actions">
        <Link className="btn btn--gold" to="/">Back home</Link>
        <Link className="btn btn--ghost" to="/cakes">See our cakes</Link>
      </div>
    </PageHero>
  );
}
