import { ic, img, head, postCard, projectCard, phero, orbit, facts, contactBand } from '../parts.mjs';
import { SERVICES, PROJECTS, POSTS } from '../data.mjs';

const IMG = { radgivning: 'workshop', systemutvikling: 'owasp-ctf', data: 'tverrfaglig-team', ai: 'ai-brain', arbeidsplass: 'kurs-kontor', design: 'kundeopplevelse', sky: 'proj-sikt', 'industriell-it': 'proj-dokumenter', sikkerhet: 'sikkerhet-ai-1' };
const TAGS = { radgivning: 'radgivning', systemutvikling: 'systemutvikling', data: 'data', ai: 'ai', arbeidsplass: 'arbeidsplass', design: 'design', sky: 'sky', 'industriell-it': 'industri', sikkerhet: 'sikkerhet' };
const B = 'https://www.bouvet.no/vi-jobber-med/kompetansekategorier/';
const URL = { radgivning: 'radgivning', systemutvikling: 'systemutvikling', data: 'datadrevet-innsikt-og-analyse', ai: 'kunstig-intelligens', arbeidsplass: 'Digital%20arbeidsplass', design: 'design', sky: 'sky', 'industriell-it': 'industriell-it', sikkerhet: 'sikkerhet' };

const area = (s, i) => {
  const posts = POSTS.filter(p => (p.tags || '').split(' ').includes(TAGS[s.id])).slice(0, 2);
  const projs = PROJECTS.filter(p => p.tags.includes(TAGS[s.id])).slice(0, 2);
  const rev = i % 2 === 1;
  return `
<article class="section" id="${s.id}" style="padding-block:clamp(3rem,5vw,5rem);${i ? 'border-top:1px solid var(--line)' : ''}">
  <div class="wrap split" style="${rev ? 'direction:rtl' : ''}">
    <div class="photo-wrap rv-scale" style="direction:ltr">
      <div class="photo" style="aspect-ratio:16/12">${img(IMG[s.id], '')}</div>
      <span class="card__icon" style="position:absolute;left:1.25rem;top:1.25rem;width:56px;height:56px;border-radius:var(--r-sm);background:var(--green);box-shadow:none">${ic(s.icon)}</span>
    </div>
    <div class="stack-lg" style="direction:ltr">
      <span class="kicker-num rv">0${i + 1} / 09</span>
      <h2 class="h2" data-split>${s.title}</h2>
      <p class="lead rv">${s.desc}</p>
      ${projs.length || posts.length ? `<div class="rv"><span class="label">Relatert</span><ul class="checks" style="margin-top:.6rem">
        ${projs.map(p => `<li><span class="ic-box">${ic('briefcase')}</span><a class="link" href="${p.href}">${p.client}: ${p.title}</a></li>`).join('')}
        ${posts.map(p => `<li><span class="ic-box">${ic(p.type === 'Podcast' ? 'podcast' : 'article')}</span><a class="link" href="${p.u}">${p.t}</a></li>`).join('')}
      </ul></div>` : ''}
      <div class="hero__actions rv" style="margin-top:.5rem">
        <button class="btn" data-modal="m-contact" data-area="${s.title}">Snakk med en ekspert ${ic('arrow-right')}</button>
        <a class="link" href="${B}${URL[s.id]}">Fordyp deg ${ic('arrow-up-right')}</a>
      </div>
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
  title: 'Vi jobber med det som <span class="hl">flytter</span> virksomheten din',
  lead: 'Ni fagområder som spiller hverandre gode. Vi setter sammen mennesker, verktøy og metoder i team som skaper helhetlige løsninger og resultater.',
  actions: `<button class="btn" data-modal="m-contact">La oss snakke ${ic('arrow-right')}</button><a class="link link--accent" href="#oversikt">Se alle områder ${ic('arrow-right')}</a>`,
  art: facts([['Kompetanseområder', '09'], ['Kontorer', '17'], ['Sektorer', 'Offentlig og privat'], ['Leveransemodell', 'Tverrfaglige team']]),
})}

<section class="section--tight" id="oversikt" style="padding-top:0"><div class="wrap">
  <div class="grid g-3 svc-grid" data-stagger>
    ${SERVICES.map((s, i) => `<a class="card svc${i === 3 ? ' is-featured' : ''}" href="#${s.id}"><span class="num">0${i + 1}</span><span class="card__icon">${ic(s.icon)}</span><h3 class="h4">${s.title}</h3><p>${s.desc}</p><span class="card__more">Gå til området ${ic('arrow-right')}</span></a>`).join('')}
  </div>
</div></section>

<nav class="subnav" aria-label="Kompetanseområder">
  <div class="subnav__glass"><div class="subnav__track">
    ${SERVICES.map(s => `<a class="chip" href="#${s.id}">${ic(s.icon)}${s.title.split(' og ')[0].split(',')[0]}</a>`).join('')}
  </div></div>
</nav>

${SERVICES.map(area).join('')}

<section class="section section--dark"><div class="wrap">
  ${head('Slik jobber vi', 'Det som gjør at kundene gir oss fornyet tillit', '')}
  <div class="steps steps--4" data-stagger>
    <div class="step">${ic('team')}<h3>Fag på tvers</h3><p>Tverrfaglige team som ser helheten – fra strategi til drift.</p></div>
    <div class="step">${ic('pin')}<h3>Nærhet</h3><p>17 kontorer gjør at vi forstår kundens språk, kultur og forretning.</p></div>
    <div class="step">${ic('bubble')}<h3>Delingskultur</h3><p>Vi deler kunnskap åpent – i team, på scenen og i Bouvet deler.</p></div>
    <div class="step">${ic('security')}<h3>Trygt og etisk</h3><p>Løsninger som er trygge, etiske og i tråd med regelverk.</p></div>
  </div>
</div></section>

<section class="section"><div class="wrap" data-hscroll>
  ${head('Prosjekter', 'Se hva vi har skapt sammen med kundene', '', `<div class="scroll-ctrl rv"><button class="icon-btn" data-dir="-1" aria-label="Forrige">${ic('arrow-left')}</button><button class="icon-btn" data-dir="1" aria-label="Neste">${ic('arrow-right')}</button></div>`)}
  <div class="hscroll" data-stagger>${PROJECTS.map(projectCard).join('')}</div>
  <div class="progress"><span></span></div>
</div></section>

${contactBand()}
`,
};
