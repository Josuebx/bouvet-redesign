import { ic, img, head, bleed, mosaic, idxRow, eventRow, postCard, slider, reach, figs, PLUS, ARR, pad } from '../parts.mjs';
import { SERVICES, PROJECTS, POSTS, EVENTS } from '../data.mjs';

export const PROJECT_SLIDES = PROJECTS.map((p, i) => ({ ...p, sub: ['Utdanning', 'Industri', 'Kunnskapssektoren', 'Offentlig sektor', 'Energi'][i], labels: p.tags.map(t => ({ ai: 'Kunstig intelligens', design: 'Design', industri: 'Industriell IT', sky: 'Sky', data: 'Data' }[t] || t)) }));

export default {
  slug: 'home', file: 'index',
  title: 'Bouvet – Vi går foran og bygger fremtidens samfunn',
  desc: 'Bouvet er et ledende norsk konsulentselskap innen IT, rådgivning, design og kommunikasjon.',
  body: `
<section class="phero" style="padding-bottom:clamp(3rem,2rem + 3vw,4.5rem)"><div class="wrap">
  <div class="lr">
    <div class="lr__l"><span class="eyebrow rv">Bouvet ASA · Euronext Oslo Børs: BOUV</span></div>
    <div>
      <h1 class="display" data-split>Vi går foran og bygger <span class="accent">fremtidens samfunn</span></h1>
      <p class="lead phero__lead rv" style="--i:2">IT, rådgivning, design og kommunikasjon for virksomhetskritiske behov – i offentlig sektor og næringsliv.</p>
      <div class="row-actions"><button class="btn btn--lg" data-modal="m-contact">${PLUS} La oss snakke</button><a class="btn btn--line btn--lg" href="#prosjekter">Våre prosjekter ${ARR}</a></div>
    </div>
  </div>
</div></section>
${bleed('office-people', 'Kollegaer i Bouvet-huset i Oslo', 'Bouvet-huset, Oslo', 'bleed--tall')}
<section class="sec--tight"><div class="wrap">
  ${figs([['17', 'Kontorer i Norge og Sverige, nær kundene'], ['9', 'Kompetanseområder i tverrfaglige team'], ['865,4', 'MNOK i driftsinntekter, tredje kvartal 2026'], ['20+', 'År som verdidrevet konsulentselskap']])}
</div></section>

<section class="sec" style="padding-bottom:0"><div class="wrap">
  <div class="lr" style="margin-bottom:clamp(3rem,2rem + 3vw,5rem)">
    <div class="lr__l"><span class="eyebrow rv">Hvorfor Bouvet</span></div>
    <div>
      <h2 class="h2" style="font-size:clamp(1.6rem,1.15rem + 1.6vw,2.4rem);max-width:44rem" data-split>Et ledende norsk konsulentselskap. <span class="accent">En ettertraktet partner</span> for virksomheter som trenger løsninger som virker.</h2>
      <div class="row-actions" style="margin-top:2rem"><a class="btn" href="/om-bouvet">${PLUS} Mer om Bouvet</a></div>
    </div>
  </div>
  ${mosaic([
    { t: 'Fag på tvers', d: 'Tverrfaglige team som ser helheten – fra strategi og design til utvikling og drift.', glyph: 'cross', href: '/vi-jobber-med' },
    { t: 'Nærhet til kundene', d: 'Med 17 kontorer forstår vi kundens språk, kultur og forretning, og løser de fleste oppdrag lokalt.', glyph: 'burst', href: '/om-bouvet#kontorer' },
    { t: 'Trygt og etisk', d: 'Løsninger som er sikre, etiske og i tråd med regelverk – for samfunnskritiske virksomheter.', glyph: 'ex', tone: 'white', href: '/vi-jobber-med#sikkerhet' },
    { t: 'Dokumenterte resultater', d: 'Mange kunder gir oss fornyet tillit, år etter år. Se prosjektene vi har levert sammen med dem.', glyph: 'aster', tone: 'blue', href: '#prosjekter' },
  ], { cols: 3, per: 2, style: '--overlap:min(15vw,210px)' })}
</div></section>
${bleed('kontor-oslo', 'Kontorlandskap i Bouvet', '', 'bleed--under', '--overlap:min(15vw,210px)')}

<section class="sec" id="tjenester"><div class="wrap">
  ${head('Vi jobber med', 'Ni fagområder. <span class="accent">Ett</span> tverrfaglig team.', 'Vi setter sammen mennesker, verktøy og metoder i team som skaper helhetlige løsninger og resultater.', `<a class="btn btn--line" href="/vi-jobber-med">Alle fagområder ${ARR}</a>`)}
  <div class="lr"><div></div><div class="idx">
    ${SERVICES.map((s, i) => idxRow({ n: pad(i + 1), t: s.title, d: s.desc, href: `/vi-jobber-med#${s.id}` })).join('')}
  </div></div>
</div></section>

<section class="sec sec--light"><div class="wrap lr--6 lr" style="align-items:center">
  <div class="media media-hover">${img('ai-brain', 'Kunstig intelligens')}</div>
  <div class="stack-lg">
    <span class="eyebrow rv">Kunstig intelligens</span>
    <h2 class="h2" data-split>AI – fra strategi til løsninger som virker</h2>
    <p class="lead rv">Vi hjelper deg å bruke data smartere. Med solid erfaring fra AI-prosjekter over hele Norge utvikler vi løsninger som fungerer i praksis.</p>
    <ul class="checks">
      ${['Avdekke mønstre i dataene dine', 'Bygge smartere applikasjoner', 'Automatisere prosesser', 'Trygt, etisk og i tråd med regelverk'].map((t, i) => `<li><span class="num">${pad(i + 1)}</span><span class="rv" style="--i:${i}">${t}</span></li>`).join('')}
    </ul>
    <div><a class="btn btn--dark" href="/vi-jobber-med#ai">${PLUS} Se hvordan vi skaper verdi med AI</a></div>
  </div>
</div></section>

<section class="sec" id="prosjekter"><div class="wrap">
  ${slider('Våre prosjekter', PROJECT_SLIDES)}
  <div class="mt-3"><a class="link" href="https://www.bouvet.no/prosjekter">Se flere prosjekter ${ic('arrow-right')}</a></div>
</div></section>

<section class="sec sec--deep"><div class="wrap">
  ${head('Bouvet deler', 'Kunnskap og historier fra folkene våre', '', `<a class="btn btn--line" href="/bouvet-deler">Besøk bloggen ${ARR}</a>`)}
  <div class="cards">${[POSTS[0], POSTS[2], POSTS[3]].map(p => postCard(p)).join('')}</div>
</div></section>

<section class="sec"><div class="wrap">
  ${head('Kommende frokostseminarer', 'Få en god morgen med Bouvet', 'God frokost, god kaffe og en faglig oppkvikker. Velg et seminar for å melde deg på.', `<a class="btn btn--line" href="/kurs#kommende">Alle kurs og seminarer ${ARR}</a>`)}
  <div class="idx">${EVENTS.map(eventRow).join('')}</div>
</div></section>

<section class="sec sec--rule"><div class="wrap grid g-2">
  <a class="card" href="/bli-en-av-oss"><div class="media">${img('workshop', 'Workshop i Bouvet')}</div><div class="card__meta"><span>Bli en av oss</span></div><h3 style="font-size:var(--fs-h2);font-weight:400;letter-spacing:-.03em">Vi jobber sammen, leverer sammen og lykkes sammen.</h3><span class="link">Ledige stillinger ${ic('arrow-right')}</span></a>
  <a class="card" href="/kurs"><div class="media">${img('kurs-deltagere', 'Kursdeltagere i Bouvet')}</div><div class="card__meta"><span>Kurs</span></div><h3 style="font-size:var(--fs-h2);font-weight:400;letter-spacing:-.03em">Bli faglig oppdatert av instruktører med lang praktisk erfaring.</h3><span class="link">Se kursene ${ic('arrow-right')}</span></a>
</div></section>

${reach()}
`,
};
