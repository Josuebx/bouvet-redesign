import { ic, img, head, phero, postCard, idxRow, eventRow, newsletter, facts, PLUS, ARR, pad } from '../parts.mjs';
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
  title: 'Bouvet <span class="accent">deler</span>',
  lead: 'Her deler våre folk kunnskap og historier om det vi jobber med og brenner for – fag, trender og aktuelle temaer innen teknologi, sikkerhet, design og samfunn.',
  actions: `<a class="btn btn--lg" href="#artikler">${PLUS} Utforsk artiklene</a><a class="btn btn--line btn--lg" href="#podcast">${ic('podcast')} Hør podcasten</a>`,
  after: facts([['Innlegg', String(POSTS.length)], ['Podcastepisoder', String(podcasts.length)], ['Kommende arrangementer', String(EVENTS.length)], ['Fagområder', 'Teknologi · sikkerhet · design']]),
})}

<section class="sec--tight"><div class="wrap">
  <a class="feature" href="${feat.u}">
    <div class="media">${img(feat.img, '')}</div>
    <div class="feature__body">
      <div class="stack"><span class="eyebrow">Aktuelt nå · ${feat.type}</span>
      <h2 class="h2" style="font-size:clamp(1.5rem,1.15rem + 1.4vw,2.3rem);margin-top:1.25rem">${feat.t}</h2>
      <p class="muted">${feat.d}</p></div>
      <span class="link link--mint">Les artikkelen ${ic('arrow-right')}</span>
    </div>
  </a>
</div></section>

<section class="sec" id="artikler"><div class="wrap">
  ${head('Siste fra Bouvet deler', 'Filtrer etter tema')}
  <div class="chips" data-filter-group="#post-grid" role="group" aria-label="Filtrer artikler" style="margin-bottom:3rem">
    ${FILTERS.map(([f, l], i) => `<button class="chip" data-filter="${f}" aria-pressed="${i === 0}">${l} <span class="count">${count(f)}</span></button>`).join('')}
  </div>
  <div class="cards is-hidden-more" id="post-grid">${rest.map((p, i) => postCard(p, i >= 9 ? 'is-more' : '')).join('')}</div>
  <div style="margin-top:3rem;text-align:center"><button class="btn btn--line btn--lg" data-more="#post-grid">${PLUS} Vis flere innlegg</button></div>
</div></section>

<section class="sec sec--deep" id="podcast"><div class="wrap">
  ${head('Podcast', 'Vi deler også i <span class="accent">podcast</span>', 'Samtaler med fageksperter og kunder om digital transformasjon, AI og samfunnet vi bygger.', `<a class="btn btn--line" href="https://www.bouvet.no/podcasts">Alle episodene ${ic('arrow-up-right', 'i-diag')}</a>`)}
  <div class="lr"><div class="media media--sq">${img('podcast-bobler-2', 'Bouvet bobler podcast')}</div>
  <div class="idx">${podcasts.map((p, i) => idxRow({ n: `EP ${pad(i + 1)}`, t: p.t, d: p.d, href: p.u, go: 'play' })).join('')}</div></div>
</div></section>

<section class="sec"><div class="wrap">
  ${head('Arrangementer', 'Vi deler fra scenen', 'Se våre kommende arrangementer og meld deg på.', `<a class="btn btn--line" href="https://www.bouvet.no/nyheter/arrangementer">Hele kalenderen ${ic('arrow-up-right', 'i-diag')}</a>`)}
  <div class="idx">${EVENTS.map(eventRow).join('')}</div>
</div></section>

${newsletter()}
`,
};
