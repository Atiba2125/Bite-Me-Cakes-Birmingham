import React, { useState } from 'react';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import { SectionHead, ext } from '../components/Ui.jsx';
import { BRAND, STEPS, FAQS, DIETARY } from '../data.js';

const EMPTY = { name: '', contact: '', occasion: '', date: '', guests: '', details: '', dietary: [] };

function Faq({ item, delay }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal className={`faq${open ? ' open' : ''}`} delay={delay}>
      <button className="faq__q" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <span>{item.q}</span><i aria-hidden="true">+</i>
      </button>
      <div className="faq__panel"><div className="faq__a"><p>{item.a}</p></div></div>
    </Reveal>
  );
}

export default function Order() {
  const [f, setF] = useState(EMPTY);
  const [sent, setSent] = useState(false);
  const set = (k, v) => setF((s) => ({ ...s, [k]: v }));
  const toggleDiet = (d) => set('dietary', f.dietary.includes(d) ? f.dietary.filter((x) => x !== d) : [...f.dietary, d]);

  const submit = (e) => {
    e.preventDefault();
    const body = [
      `Name: ${f.name}`, `Phone / email: ${f.contact}`, `Occasion: ${f.occasion || '-'}`, `Date needed: ${f.date || '-'}`,
      `Number of guests: ${f.guests || '-'}`, `Dietary needs: ${f.dietary.join(', ') || 'None'}`, '', 'Cake ideas:', f.details || '-',
    ].join('\n');
    window.location.href = `mailto:${BRAND.email}?subject=${encodeURIComponent('Cake enquiry from ' + f.name)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <PageHero
        title="How to order" eyebrow="Bespoke cakes, made just for you"
        lead="Tell Sheena about your celebration and she'll design a cake to match. DM, call, or send an enquiry below."
      >
        <div className="phero__actions">
          <a className="btn btn--gold" href={BRAND.tel}>Call {BRAND.phone}</a>
          <a className="btn btn--ghost" href={BRAND.instagram} {...ext}>DM on Instagram</a>
        </div>
      </PageHero>

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Simple as 1, 2, 3, 4">From idea to <em>icing</em></SectionHead>
          <div className="steps">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} className="step" delay={i * 120}>
                <span className="step__n">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section enquiry" id="enquiry">
        <div className="wrap enquiry__grid">
          <div>
            <Reveal as="p" className="eyebrow eyebrow--light">Enquiry form</Reveal>
            <Reveal as="h2">Tell us about <em>your cake</em></Reveal>
            <Reveal as="p">Fill in as much as you can. Submitting opens your email app with your details, addressed to Sheena at {BRAND.email}.</Reveal>
            <Reveal className="enquiry__info">
              <p><b>Call or DM</b><a href={BRAND.tel}>{BRAND.phone}</a></p>
              <p><b>Email</b><a href={`mailto:${BRAND.email}`}>{BRAND.email}</a></p>
              <p><b>Based in</b><span>{BRAND.area[0]}, {BRAND.area[1]}</span></p>
              <p><b>Postal</b><span>Available nationwide</span></p>
            </Reveal>
          </div>

          {sent ? (
            <div className="sent">
              <h3>Thank you!</h3>
              <p>Your email app should now be open with your enquiry ready to send. If nothing opened, email <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a> or call {BRAND.phone}.</p>
              <button className="btn btn--gold" onClick={() => { setSent(false); setF(EMPTY); }}>Start another</button>
            </div>
          ) : (
            <Reveal as="form" className="form" onSubmit={submit}>
              <label className="field"><span>Your name *</span><input required value={f.name} onChange={(e) => set('name', e.target.value)} /></label>
              <label className="field"><span>Phone or email *</span><input required value={f.contact} onChange={(e) => set('contact', e.target.value)} /></label>
              <label className="field"><span>Occasion</span><input placeholder="Birthday, wedding, etc." value={f.occasion} onChange={(e) => set('occasion', e.target.value)} /></label>
              <label className="field"><span>Date needed</span><input type="date" value={f.date} onChange={(e) => set('date', e.target.value)} /></label>
              <label className="field"><span>Number of guests</span><input value={f.guests} onChange={(e) => set('guests', e.target.value)} /></label>
              <fieldset className="field field--wide">
                <legend>Dietary needs</legend>
                <div className="opts">
                  {DIETARY.map((d) => (
                    <button type="button" key={d} className={`chip${f.dietary.includes(d) ? ' on' : ''}`} aria-pressed={f.dietary.includes(d)} onClick={() => toggleDiet(d)}>{d}</button>
                  ))}
                </div>
              </fieldset>
              <label className="field field--wide"><span>Your cake ideas</span><textarea rows="4" placeholder="Flavours, colours, theme, size…" value={f.details} onChange={(e) => set('details', e.target.value)} /></label>
              <button className="btn btn--gold" type="submit">Send enquiry</button>
            </Reveal>
          )}
        </div>
      </section>

      <section className="section">
        <div className="wrap narrow">
          <SectionHead eyebrow="Good to know">Frequently asked <em>questions</em></SectionHead>
          <div className="faqs">
            {FAQS.map((q, i) => <Faq key={q.q} item={q} delay={i * 70} />)}
          </div>
        </div>
      </section>
    </>
  );
}
