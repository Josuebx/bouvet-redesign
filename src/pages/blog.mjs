import { ic, img, head, postCard, row, phero, orbit, facts, newsletterBand, BAND_WAVES } from '../parts.mjs';
import { POSTS, FILTERS, EVENTS } from '../data.mjs';

const feat = POSTS[0];
const rest = POSTS.slice(1);
const podcasts = POSTS.filter(p => p.type === 'Podcast');
const count = f => f === 'all' ? rest.length : rest.filter(p => p.tags.split(' ').includes(f)).length;

export default {
  slug: 'bouvet-deler', file: 'bouvet-deler',
  title: 'Bouvet deler – Artikler, podcast og arrangementer',
  desc: 'Våre folk deler kunnskap og historier om teknologi, sikkerhet, design og samfunn.',
  body: `
${phero({
  crumb: 'Bouvet deler', eyebrow: 'Blogg · Podcast · Arrangementer',
  title: 'Bouvet <span class="hl">deler</span>',
  lead: 'Her deler våre folk kunnskap og historier om det vi jobber med og brenner for – fag, trender og aktuelle temaer innen teknologi, sikkerhet, design og samfunn.',
  actions: `<a class="btn" href="#artikler">Utforsk artiklene ${ic('arrow-right')}</a><a class="link link--accent" href="#podcast">${ic('podcast')} Hør podcasten</a>`,
  art: facts([['Innlegg', String(POSTS.length)], ['Podcastepisoder', String(POSTS.filter(p => p.type === 'Podcast').length)], ['Kommende arrangementer', String(EVENTS.length)], ['Fagområder', 'Teknologi, sikkerhet, design']]),
})}

<section class="section--tight"><div class="wrap">
  <a class="feature-post mcard rv" href="${feat.u}">
    <div class="mcard__img">${img(feat.img, '')}<span class="mcard__go">${ic('arrow-up-right')}</span></div>
    <div class="stack-lg">
      <span class="tag tag--green">${ic('spark')} Aktuelt nå</span>
      <h2 class="h2" style="font-size:clamp(1.6rem,1.2rem+1.6vw,2.4rem)">${feat.t}</h2>
      <p style="-webkit-line-clamp:5">${feat.d} Her forklarer vi hva begrepet betyr i praksis, hvorfor det har blitt viktigere, og hvilke spørsmål ledelsen bør kunne svare på.</p>
      <span class="link">Les artikkelen ${ic('arrow-right')}</span>
    </div>
  </a>
</div></section>

<section class="section" id="artikler"><div class="wrap">
  <div class="head" style="margin-bottom:2rem"><div><span class="eyebrow">Siste fra Bouvet deler</span><h2 class="h2" style="margin-top:.9rem">Filtrer etter tema</h2></div></div>
  <div class="chips rv" data-filter-group="#post-grid" role="group" aria-label="Filtrer artikler" style="margin-bottom:2.5rem">
    ${FILTERS.map(([f, l], i) => `<button class="chip" data-filter="${f}" aria-pressed="${i === 0}">${l} <span class="count">${count(f)}</span></button>`).join('')}
  </div>
  <div class="post-grid" id="post-grid" data-stagger>${rest.map(p => postCard(p)).join('')}</div>
</div></section>

<section class="section section--dark" id="podcast"><div class="wrap split">
  <div class="photo-wrap rv-scale">
    <div class="photo" style="aspect-ratio:1">${img('podcast-bobler-2', 'Bouvet bobler podcast')}</div>
    <div class="hero__badge" style="left:1.25rem;bottom:1.25rem"><span class="dot">${ic('podcast')}</span><div><strong>Bouvet bobler</strong><span>Teknologi · Kommunikasjon · Folk</span></div></div>
  </div>
  <div class="stack-lg">
    <span class="eyebrow rv">Podcast</span>
    <h2 class="h2" data-split>Vi deler også i <span class="hl">podcast</span></h2>
    <p class="lead rv">Samtaler med fageksperter og kunder om digital transformasjon, AI og samfunnet vi bygger.</p>
    <ul data-stagger>
      ${podcasts.map((p, i) => `<li><a class="row" href="${p.u}" style="grid-template-columns:auto 1fr auto;color:inherit;border-color:var(--line-on-dark)"><span class="row__cta" style="box-shadow:inset 0 0 0 1.5px var(--line-on-dark)">${ic('play')}</span><span><span class="row__title">${p.t}</span><span class="row__sub" style="color:var(--text-on-dark-muted)">Episode · Bouvet bobler</span></span><span class="row__cta" style="box-shadow:none">${ic('arrow-up-right')}</span></a></li>`).join('')}
    </ul>
    <a class="btn rv" href="https://www.bouvet.no/podcasts">Alle episodene ${ic('arrow-right')}</a>
  </div>
</div></section>

<section class="section"><div class="wrap">
  ${head('Arrangementer', 'Vi deler fra scenen', 'Se våre kommende arrangementer og meld deg på.', `<a class="link rv" href="https://www.bouvet.no/nyheter/arrangementer">Hele kalenderen ${ic('arrow-up-right')}</a>`)}
  <div class="rows" data-stagger>${EVENTS.map(e => row(e)).join('')}</div>
</div></section>

${newsletterBand()}
`,
};
