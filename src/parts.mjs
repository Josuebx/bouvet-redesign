import { ic } from './icons.mjs';
import { WAVES, SCRIBBLE, RING, BAND_WAVES, PHERO_LINES } from './layout.mjs';
export { WAVES, SCRIBBLE, RING, BAND_WAVES, PHERO_LINES, ic };

export const img = (name, alt = '', extra = '') => `<img src="/assets/img/${name}.webp" alt="${alt}" loading="lazy" decoding="async" ${extra}>`;
const initials = n => n.split(' ').filter(Boolean).map(w => w[0]).slice(0, 2).join('');

export const head = (eyebrow, title, lead = '', right = '') => `
<div class="head${lead || right ? '' : ' head--solo'}"><div><span class="eyebrow rv">${eyebrow}</span><h2 class="h2 rv" style="margin-top:.9rem" data-split>${title}</h2></div>${lead || right ? `<div class="head__aside">${lead ? `<p class="lead rv" style="--i:1">${lead}</p>` : ''}${right}</div>` : ''}</div>`;

export const postCard = (p, extra = '') => `
<a class="mcard" href="${p.u}" data-tags="${p.tags || ''}" ${extra}>
  <div class="mcard__img">${img(p.img, '')}<span class="mcard__go">${ic('arrow-up-right')}</span></div>
  <div class="mcard__meta"><span class="tag ${p.type === 'Podcast' ? 'tag--orange' : p.type === 'Guide' ? 'tag--green' : ''}">${ic(p.type === 'Podcast' ? 'podcast' : 'article')}${p.type}</span>${p.a ? `<span class="mcard__author"><span class="avatar">${initials(p.a)}</span>${p.a}</span>` : ''}</div>
  <h3>${p.t}</h3>
  <p>${p.d}</p>
</a>`;

export const projectCard = p => `
<a class="mcard" href="${p.href}">
  <div class="mcard__img" style="aspect-ratio:4/5">${img(p.img, '')}<span class="mcard__go">${ic('arrow-up-right')}</span></div>
  <div class="mcard__meta"><span class="tag tag--dark">${p.client}</span></div>
  <h3>${p.title}</h3>
</a>`;

export const row = (e, modal = 'm-event', icon = 'pin') => `
<a class="row" href="#" data-modal="${modal}" data-title="${e.t}" data-meta="${e.day ? `${e.day}. ${e.mon} · ` : ''}${e.place}" data-cursor>
  ${e.day ? `<span class="row__date"><b>${e.day}</b><span>${e.mon}</span></span>` : `<span class="card__icon">${ic(e.icon || 'briefcase')}</span>`}
  <span><span class="row__title">${e.t}</span><span class="row__sub">${ic(icon)}${e.place}</span></span>
  <span class="tag">${e.cat}</span>
  <span class="row__cta">${ic('arrow-right')}</span>
</a>`;

export const phero = ({ crumb, title, lead, actions = '', art = '', eyebrow = '' }) => `
<section class="phero"><div class="wrap">
  <nav class="phero__crumb" aria-label="Brødsmuler"><a href="/">Forside</a>${ic('arrow-right')}<span aria-current="page">${crumb}</span></nav>
  <div class="phero__top">
    <div>${eyebrow ? `<span class="eyebrow">${eyebrow}</span>` : ''}<h1 class="h1" data-split>${title}</h1></div>
    <div class="phero__aside"><p class="lead rv" style="--i:2">${lead}</p>${actions ? `<div class="hero__actions rv" style="--i:3">${actions}</div>` : ''}</div>
  </div>
  ${art ? `<div class="phero__art rv" style="--i:3">${art}</div>` : ''}
</div></section>`;

// Fact sheet — static key/value panel for page heroes
export const facts = rows => `<dl class="facts">${rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>`;
export const orbit = icons => `<div class="icon-matrix">${icons.map(n => `<span>${ic(n)}</span>`).join('')}</div>`;

// Neural network loop (AI)
export function aiNet() {
  const nodes = [[50, 50], [24, 28], [76, 26], [20, 66], [80, 70], [50, 16], [50, 84], [33, 47], [67, 46], [36, 74], [64, 78], [12, 44], [88, 46], [30, 14], [72, 12]];
  const edges = [[0, 7], [0, 8], [0, 5], [0, 6], [7, 1], [7, 3], [8, 2], [8, 4], [1, 5], [2, 5], [3, 9], [4, 10], [9, 6], [10, 6], [1, 11], [3, 11], [2, 12], [4, 12], [5, 13], [5, 14], [7, 9], [8, 10], [1, 13], [2, 14]];
  const P = i => nodes[i].map(v => v * 4);
  const paths = edges.map(([a, b]) => { const [x1, y1] = P(a), [x2, y2] = P(b); return `M${x1} ${y1}L${x2} ${y2}`; });
  return `<div class="ai-art rv-scale"><svg viewBox="0 0 400 400" aria-hidden="true">
    ${paths.map((d, i) => `<path id="e${i}" class="edge" d="${d}"/>`).join('')}
        ${nodes.map(([x, y], i) => `<circle cx="${x * 4}" cy="${y * 4}" r="${i === 0 ? 16 : i < 5 ? 7 : 5}" class="node ${i === 0 ? 'node--hot' : i % 4 === 0 ? 'node--orange' : ''}" />`).join('')}
    <image href="/assets/bouvet-o.svg" x="189" y="189" width="22" height="22"/>
  </svg><div class="ai-art__label"><span>Fig. 01 — Datadrevet beslutningsstøtte</span><span>Trygt · Etisk · Etterlevelse</span></div></div>`;
}

export const newsletterBand = () => `
<section class="section--tight"><div class="wrap">
  <div class="band on-dark rv-scale">
    ${BAND_WAVES()}${BAND_WAVES('band__waves--left')}
    <span class="eyebrow">Nyhetsbrev</span>
    <h2 class="h2" style="margin-top:1rem" data-split>Hold deg oppdatert med Bouvet, på 1, 2, 3!</h2>
    <p class="lead">Alltid ett tema, alltid null bilder og alltid tre lenker til artikler, podcaster, rapporter eller videoer som gjør deg litt klokere.</p>
    <form class="inline" data-form>
      <div class="field" style="flex:1"><label class="sr-only" for="nl-inline">E-post</label><input class="input" id="nl-inline" type="email" required placeholder="Din e-postadresse"><span class="err">${ic('alert')}Skriv inn en gyldig e-post</span></div>
      <button class="btn" type="submit">Meld meg på</button>
    </form>
  </div>
</div></section>`;

export const contactBand = (title = 'Klar for å bygge fremtidens løsninger sammen?', lead = 'Fortell oss hva dere står overfor. Vi setter sammen riktig team – lokalt, tverrfaglig og med lang erfaring.') => `
<section class="section--tight"><div class="wrap">
  <div class="band on-dark rv-scale">
    ${BAND_WAVES()}${BAND_WAVES('band__waves--left')}
    <h2 class="h2" data-split>${title}</h2>
    <p class="lead">${lead}</p>
    <div class="band__actions"><button class="btn" data-modal="m-contact" data-magnetic>La oss snakke ${ic('arrow-right')}</button><a class="btn btn--ghost" href="/om-bouvet#kontorer">${ic('pin')} Finn nærmeste kontor</a></div>
  </div>
</div></section>`;
