import { ic } from './icons.mjs';
import { glyph, glyphAt } from './glyphs.mjs';
import { PLUS, ARR, DIAG, field } from './layout.mjs';
import { SERVICES, OFFICES } from './data.mjs';
export { ic, glyph, glyphAt, PLUS, ARR, DIAG };

export const img = (name, alt = '', extra = '') => `<img src="/assets/img/${name}.webp" alt="${alt}" loading="lazy" decoding="async" ${extra}>`;
const initials = n => n.split(' ').filter(Boolean).map(w => w[0]).slice(0, 2).join('');
const pad = n => String(n).padStart(2, '0');
export { pad };

/* Section head: eyebrow on the left, headline (+ optional lead/actions) on the right */
export const head = (eyebrow, title, lead = '', actions = '') => `
<div class="head lr">
  <div class="lr__l"><span class="eyebrow rv">${eyebrow}</span></div>
  <div><h2 class="h2" data-split>${title}</h2>${lead || actions ? `<div class="head__aside">${lead ? `<p class="lead rv" style="--i:1">${lead}</p>` : '<span></span>'}${actions ? `<div class="row-actions">${actions}</div>` : ''}</div>` : ''}</div>
</div>`;

/* Page hero */
export const phero = ({ crumb, eyebrow, title, lead, actions = '', after = '' }) => `
<section class="phero"><div class="wrap">
  <nav class="crumb" aria-label="Brødsmuler"><a href="/">Forside</a><span class="sep"></span><span aria-current="page">${crumb}</span></nav>
  <div class="lr">
    <div class="lr__l"><span class="eyebrow rv">${eyebrow}</span></div>
    <div>
      <h1 class="h1" data-split>${title}</h1>
      <p class="lead phero__lead rv" style="--i:2">${lead}</p>
      ${actions ? `<div class="row-actions">${actions}</div>` : ''}
    </div>
  </div>
  ${after}
</div></section>`;

export const bleed = (name, alt, cap = '', cls = '', style = '') => `<figure class="bleed ${cls}" style="${style}">${img(name, alt)}${cap ? `<figcaption class="bleed__cap">${cap}</figcaption>` : ''}</figure>`;

export const facts = rows => `<dl class="facts" style="--n:${rows.length};margin-top:clamp(3rem,2rem + 3vw,5rem)">${rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>`;
export const figs = rows => `<div class="figs">${rows.map(([v, l]) => `<div><b>${v}</b><span class="rv">${l}</span></div>`).join('')}</div>`;

/* Mosaic: square tiles, alternating row offset (like the reference) */
const TONES = ['grey', 'mint', 'white', 'blue', 'creme'];
export function mosaic(items, { cols = 3, per = 2, label = '', tones = TONES, style = '' } = {}) {
  const cells = items.map((it, i) => {
    const r = Math.floor(i / per), c = (r % 2 === 0 ? cols - per : 0) + (i % per) + 1;
    const tone = it.tone || tones[i % tones.length];
    const tag = it.href ? 'a' : 'div';
    const attrs = it.href ? `href="${it.href}"` : (it.attrs || 'tabindex="0"');
    return `<${tag} class="tile tile--${tone}" ${attrs} style="grid-column:${c};grid-row:${r + 1}">
      <div class="tile__top">${glyph(it.glyph || ['cross', 'ex', 'burst', 'aster', 'ring', 'frame', 'diag', 'arc', 'diamond'][i % 9])}${it.num ? `<span class="num">${it.num}</span>` : ''}</div>
      <div class="tile__body"><h3>${it.t}</h3>${it.d ? `<p>${it.d}</p>` : ''}</div>
      ${it.href ? `<span class="tile__more">${ic('arrow-up-right')}</span>` : ''}
    </${tag}>`;
  }).join('');
  return `<div class="mosaic" style="--cols:${cols};${style}">${label ? `<div class="mosaic__label">${label}</div>` : ''}${cells}</div>`;
}

/* Index rows */
export const idxRow = ({ n, t, d = '', m = '', href = '#', attrs = '', date = null, go = 'arrow-right' }) => `
<a class="idx__row" href="${href}" ${attrs}>
  ${date ? `<span class="idx__date"><b>${date[0]}</b><span>${date[1]}</span></span>` : `<span class="num">${n ?? ''}</span>`}
  <span><span class="idx__t">${t}</span>${d ? `<span class="idx__d">${d}</span>` : ''}</span>
  <span class="idx__m">${m}</span>
  <span class="idx__go">${ic(go)}</span>
</a>`;
export const eventRow = e => idxRow({ date: [e.day, e.mon], t: e.t, m: `${e.place}<span class="tag">${e.cat}</span>`, attrs: `data-modal="m-event" data-title="${e.t}" data-meta="${e.day}. ${e.mon} · ${e.place}"`, go: 'plus' });

/* Cards */
export const postCard = (p, cls = '') => `
<a class="card ${cls}" href="${p.u}" data-tags="${p.tags || ''}">
  <div class="media">${img(p.img, '')}</div>
  <div class="card__meta"><span>${p.type}</span>${p.a ? `<i></i><span>${p.a}</span>` : ''}</div>
  <h3>${p.t}</h3>
  <p class="clamp-2">${p.d}</p>
</a>`;
export const plainCard = (t, d, im, u, meta = '') => `
<a class="card" href="${u}">
  <div class="media">${img(im, '')}</div>
  ${meta ? `<div class="card__meta"><span>${meta}</span></div>` : ''}
  <h3>${t}</h3>
  ${d ? `<p class="clamp-2">${d}</p>` : ''}
</a>`;

/* Project slider in the reference's testimonial format */
export function slider(eyebrow, items) {
  return `
<div class="slider" data-slider>
  <div class="slider__top">
    <span class="eyebrow rv">${eyebrow}</span>
    <span class="slider__count" aria-live="polite">// <span data-cur>01</span></span>
    <div class="slider__ctrl"><button class="circ" data-prev aria-label="Forrige">${ic('arrow-left')}</button><button class="circ is-on" data-next aria-label="Neste">${ic('arrow-right')}</button></div>
  </div>
  <div class="slider__heads"><button data-prev></button><span class="is-cur"></span><button data-next></button></div>
  ${items.map((p, i) => `
  <article class="slide${i === 0 ? ' is-active' : ''}" data-head="${p.client}" data-sub="${p.sub || 'Prosjekt'}">
    <a class="media media-hover" href="${p.href}">${img(p.img, p.title)}</a>
    <div><p class="slide__t">${p.title}</p><div class="slide__x"><a class="link link--mint" href="${p.href}">Les om prosjektet ${ic('arrow-right')}</a></div></div>
    <div class="slide__tags">${(p.labels || []).map(l => `<span class="tag">${l}</span>`).join('')}</div>
  </article>`).join('')}
</div>`;
}

/* Reach out — contact block with Kunde / Kandidat tabs (after the reference) */
const officeOpts = OFFICES.map(o => `<option>${o[0]}</option>`).join('');
export function reach({ title = 'La oss snakke', text = 'Klar for å bygge fremtidens løsninger sammen med Bouvet? Fortell oss hva dere står overfor – vi setter sammen riktig team, lokalt og tverrfaglig.', tab = 0, contacts = '', id = 'kontakt' } = {}) {
  return `
<section class="sec sec--light" id="${id}"><div class="wrap reach">
  <div class="reach__l">
    <span class="eyebrow rv">Kontakt</span>
    <h2 class="display" style="margin-top:1.5rem" data-split>${title}</h2>
    <p class="rv" style="--i:1">${text}</p>
    ${contacts ? `<div class="reach__contacts rv" style="--i:2">${contacts}</div>` : ''}
  </div>
  <div class="formpanel">
    <div class="ftabs" role="tablist" aria-label="Hvem er du?">
      <button role="tab" id="ft-1" aria-controls="fp-1" aria-selected="${tab === 0}">Virksomhet</button>
      <button role="tab" id="ft-2" aria-controls="fp-2" aria-selected="${tab === 1}">Kandidat</button>
    </div>
    <div class="fpane" id="fp-1" role="tabpanel" aria-labelledby="ft-1" ${tab === 0 ? '' : 'hidden'}>
      <form data-form data-success="Takk – en rådgiver tar kontakt innen én arbeidsdag.">
        <div class="form-grid">
          ${field(`${id}-n`, 'Navn *', `<input class="input" id="${id}-n" autocomplete="name" required>`)}
          ${field(`${id}-o`, 'Virksomhet *', `<input class="input" id="${id}-o" autocomplete="organization" required>`)}
          ${field(`${id}-e`, 'E-post *', `<input class="input" id="${id}-e" type="email" autocomplete="email" required>`, 'Skriv inn en gyldig e-postadresse')}
          ${field(`${id}-a`, 'Fagområde', `<select class="select" id="${id}-a"><option value="">Velg</option>${SERVICES.map(s => `<option>${s.title}</option>`).join('')}<option>Kurs</option></select>`)}
          ${field(`${id}-m`, 'Melding *', `<textarea class="textarea" id="${id}-m" required placeholder="Hva ønsker dere å oppnå?"></textarea>`, 'Skriv en kort melding', 'full')}
        </div>
        <button class="btn btn--block btn--lg" type="submit" style="margin-top:2rem">${PLUS} Send melding</button>
      </form>
    </div>
    <div class="fpane" id="fp-2" role="tabpanel" aria-labelledby="ft-2" ${tab === 1 ? '' : 'hidden'}>
      <form data-form data-success="Takk – rekrutteringsteamet tar kontakt.">
        <div class="form-grid">
          ${field(`${id}-cn`, 'Navn *', `<input class="input" id="${id}-cn" autocomplete="name" required>`)}
          ${field(`${id}-ce`, 'E-post *', `<input class="input" id="${id}-ce" type="email" autocomplete="email" required>`, 'Skriv inn en gyldig e-postadresse')}
          ${field(`${id}-cf`, 'Fagfelt', `<select class="select" id="${id}-cf"><option value="">Velg</option><option>Utvikling</option><option>Design og UX</option><option>Data og AI</option><option>Sikkerhet</option><option>Rådgivning og prosjektledelse</option><option>Test og kvalitet</option></select>`)}
          ${field(`${id}-ck`, 'Ønsket kontor', `<select class="select" id="${id}-ck"><option value="">Velg</option>${officeOpts}</select>`)}
          ${field(`${id}-cl`, 'LinkedIn-profil', `<input class="input" id="${id}-cl" type="url" placeholder="https://linkedin.com/in/…">`, '', 'full')}
          ${field(`${id}-cm`, 'Melding *', `<textarea class="textarea" id="${id}-cm" required placeholder="Fortell kort om deg selv"></textarea>`, 'Skriv noen ord om deg selv', 'full')}
        </div>
        <button class="btn btn--block btn--lg" type="submit" style="margin-top:2rem">${PLUS} Send melding</button>
      </form>
    </div>
  </div>
</div></section>`;
}

/* Newsletter strip (mint) */
export const newsletter = () => `
<section class="strip"><div class="wrap strip__in">
  <div><span class="eyebrow rv">Nyhetsbrev</span><h2 class="h2" style="margin-top:1.25rem" data-split>Hold deg oppdatert med Bouvet, på 1, 2, 3.</h2><p class="rv" style="margin-top:1rem;color:var(--fg-muted);max-width:30rem">Alltid ett tema, null bilder og tre lenker som gjør deg litt klokere.</p></div>
  <form class="inline-form" data-form data-success="Takk! Du er nå påmeldt nyhetsbrevet.">
    <div class="field"><label for="nl-in">E-post</label><input class="input" id="nl-in" type="email" required placeholder="navn@virksomhet.no"><span class="err">${ic('alert')}Skriv inn en gyldig e-post</span></div>
    <button class="btn btn--dark btn--lg" type="submit">${PLUS} Meld meg på</button>
  </form>
</div></section>`;

export { initials };
