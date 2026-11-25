import { ic, img, head, phero, bleed, mosaic, slider, reach, glyphAt, PLUS, ARR, DIAG, pad } from '../parts.mjs';
import { SERVICES, PROJECTS, POSTS } from '../data.mjs';
import { PROJECT_SLIDES } from './home.mjs';

const IMG = { radgivning: 'workshop', systemutvikling: 'owasp-ctf', data: 'tverrfaglig-team', ai: 'ai-brain', arbeidsplass: 'kurs-kontor', design: 'kundeopplevelse', sky: 'proj-sikt', 'industriell-it': 'proj-dokumenter', sikkerhet: 'sikkerhet-ai-1' };
const TAGS = { radgivning: 'radgivning', systemutvikling: 'systemutvikling', data: 'data', ai: 'ai', arbeidsplass: 'arbeidsplass', design: 'design', sky: 'sky', 'industriell-it': 'industri', sikkerhet: 'sikkerhet' };
const B = 'https://www.bouvet.no/vi-jobber-med/kompetansekategorier/';
const URL = { radgivning: 'radgivning', systemutvikling: 'systemutvikling', data: 'datadrevet-innsikt-og-analyse', ai: 'kunstig-intelligens', arbeidsplass: 'Digital%20arbeidsplass', design: 'design', sky: 'sky', 'industriell-it': 'industriell-it', sikkerhet: 'sikkerhet' };
const short = t => t.split(' og ')[0].split(',')[0];

const area = (s, i) => {
  const posts = POSTS.filter(p => (p.tags || '').split(' ').includes(TAGS[s.id])).slice(0, 2);
  const projs = PROJECTS.filter(p => p.tags.includes(TAGS[s.id])).slice(0, 2);
  const rel = [...projs.map(p => [p.href, `${p.client}: ${p.title}`, 'Prosjekt']), ...posts.map(p => [p.u, p.t, p.type])];
  return `
<article class="area" id="${s.id}">
  <div class="area__head">
    <div><span class="num">${pad(i + 1)} / 09</span><h2 class="h2" style="margin-top:1rem;font-size:clamp(1.6rem,1.2rem + 1.5vw,2.4rem)" data-split>${s.title}</h2></div>
    ${glyphAt(i)}
  </div>
  <div class="area__grid">
    <div class="media media-hover">${img(IMG[s.id], '')}</div>
    <div class="stack">
      <p class="lead rv">${s.desc}</p>
      ${rel.length ? `<div class="rv" style="margin-top:1.5rem"><span class="label">Relatert</span><ul class="checks" style="margin-top:.6rem">${rel.map(([u, t, k], j) => `<li><span class="num">${pad(j + 1)}</span><a href="${u}"><span class="faint small" style="display:block;text-transform:uppercase;letter-spacing:.06em;font-size:var(--fs-xs)">${k}</span>${t}</a></li>`).join('')}</ul></div>` : ''}
      <div class="row-actions" style="margin-top:1.75rem"><button class="btn" data-modal="m-contact" data-area="${s.title}">${PLUS} Snakk med en ekspert</button><a class="link" href="${B}${URL[s.id]}">Fordyp deg ${ic('arrow-up-right')}</a></div>
    </div>
  </div>
</article>`;
};

export default {
  slug: 'vi-jobber-med', file: 'vi-jobber-med',
  title: 'Vi jobber med – Bouvet',
  desc: 'Strategi, systemutvikling, data, kunstig intelligens, design, sky, industriell IT og sikkerhet.',
  body: `
${phero({
  crumb: 'Vi jobber med', eyebrow: 'Kompetanseområder',
  title: 'Vi jobber med det som <span class="accent">flytter</span> virksomheten din',
  lead: 'Ni fagområder som spiller hverandre gode. Vi setter sammen mennesker, verktøy og metoder i team som skaper helhetlige løsninger og resultater.',
  actions: `<button class="btn btn--lg" data-modal="m-contact">${PLUS} La oss snakke</button><a class="btn btn--line btn--lg" href="#oversikt">Se alle områder ${ARR}</a>`,
})}
${bleed('workshop', 'Workshop i Bouvet', 'Tverrfaglig workshop')}

<section class="sec" id="oversikt"><div class="wrap">
  ${head('Oversikt', 'Ni områder – velg der du vil starte')}
  ${mosaic(SERVICES.map((s, i) => ({ t: s.title, num: pad(i + 1), href: `#${s.id}` })), { cols: 4, per: 3, tones: ['grey', 'white', 'mint', 'blue', 'grey', 'creme', 'white', 'grey', 'mint'] })}
</div></section>

<section class="sec sec--rule"><div class="wrap sidx">
  <nav class="sidx__nav" aria-label="Kompetanseområder">
    <span class="eyebrow" style="display:flex;margin-bottom:1.25rem">Innhold</span>
    ${SERVICES.map((s, i) => `<a href="#${s.id}"><span class="num">${pad(i + 1)}</span>${short(s.title)}</a>`).join('')}
  </nav>
  <div>${SERVICES.map(area).join('')}</div>
</div></section>

<section class="sec sec--deep"><div class="wrap">
  ${head('Slik jobber vi', 'Det som gjør at kundene gir oss fornyet tillit')}
  <div class="steps">
    ${[['Fag på tvers', 'Tverrfaglige team som ser helheten – fra strategi til drift.'], ['Nærhet', '17 kontorer gjør at vi forstår kundens språk, kultur og forretning.'], ['Delingskultur', 'Vi deler kunnskap åpent – i team, på scenen og i Bouvet deler.'], ['Trygt og etisk', 'Løsninger som er trygge, etiske og i tråd med regelverk.']].map(([t, d], i) => `<div class="step"><span class="num">${pad(i + 1)}</span>${glyphAt(i)}<h3 class="rv">${t}</h3><p class="rv" style="--i:1">${d}</p></div>`).join('')}
  </div>
</div></section>

<section class="sec"><div class="wrap">${slider('Prosjekter', PROJECT_SLIDES)}</div></section>

${reach({ title: 'Snakk med en ekspert', text: 'Usikker på hvor dere bør starte? Beskriv utfordringen – vi kobler dere med riktig fagperson på nærmeste kontor.' })}
`,
};
