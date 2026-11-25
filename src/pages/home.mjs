import { ic, img, head, postCard, projectCard, row, aiNet, WAVES, SCRIBBLE, RING, newsletterBand } from '../parts.mjs';
import { SERVICES, PROJECTS, POSTS, EVENTS, COURSES } from '../data.mjs';

const CLIENTS = ['Cappelen Damm', 'Sikt', 'Miljødirektoratet', 'BW Offshore', 'NATO JWC', 'Sokkeldirektoratet', 'Statens vegvesen', 'UDI', 'Stavanger kommune'];

export default {
  slug: 'home', file: 'index',
  title: 'Bouvet – Vi går foran og bygger fremtidens samfunn',
  desc: 'Bouvet er et ledende norsk konsulentselskap innen IT, rådgivning, design og kommunikasjon.',
  body: `
<section class="hero"><div class="wrap">
  <div class="hx">
    <div class="hx__grid">
      <div class="hx__copy">
        <span class="eyebrow">Bouvet ASA — Euronext Oslo Børs: BOUV</span>
        <h1 class="display" data-split>Vi går foran og bygger <span class="hl">fremtidens</span> samfunn</h1>
        <p class="lead rv" style="--i:3">Et ledende norsk konsulentselskap innen IT, rådgivning, design og kommunikasjon. Vi leverer virksomhetskritiske løsninger til offentlig sektor og næringsliv.</p>
        <div class="hero__actions rv" style="--i:4">
          <button class="btn" data-modal="m-contact">Ta kontakt ${ic('arrow-right')}</button>
          <a class="btn btn--ghost" href="#prosjekter">Se referanseprosjekter</a>
        </div>
      </div>
      <div class="hx__media rv" style="--i:2">
        ${img('kurs-samtale', 'Bouvet-konsulenter i samtale', 'fetchpriority="high" loading="eager"')}
        <div class="hx__card"><span class="mono">Utvalgte oppdragsgivere</span><b>NATO JWC · Sokkeldirektoratet · Sikt · Miljødirektoratet</b><a class="link link--accent" href="/om-bouvet#nyheter">Les om avtalene ${ic('arrow-right')}</a></div>
      </div>
    </div>
    <div class="hx__stats">
      <div class="rv">${ic('office')}<b>17</b><span>Kontorer i Norge og Sverige</span></div>
      <div class="rv" style="--i:1">${ic('layers')}<b>9</b><span>Kompetanseområder</span></div>
      <div class="rv" style="--i:2">${ic('trend')}<b>865,4</b><span>MNOK driftsinntekter Q3 2026</span></div>
      <div class="rv" style="--i:3">${ic('certificate')}<b>20+</b><span>År som verdidrevet selskap</span></div>
    </div>
  </div>
</div></section>

<section class="logos"><div class="wrap">
  <p class="logos__label">Utvalgte oppdragsgivere</p>
  <ul class="clients">${CLIENTS.map(c => `<li>${c}</li>`).join('')}</ul>
</div></section>

<section class="section section--alt" id="tjenester"><div class="wrap">
  ${head('Vi jobber med', 'Ni fagområder. <span class="hl">Ett</span> tverrfaglig team.', 'Vi setter sammen mennesker, verktøy og metoder i team som skaper helhetlige løsninger og resultater.', `<button class="btn rv" data-modal="m-contact">La oss snakke ${ic('arrow-right')}</button>`)}
  <div class="grid g-3 svc-grid" data-stagger>
    ${SERVICES.map((s, i) => `<a class="card svc${i === 0 ? ' is-featured' : ''}" href="/vi-jobber-med#${s.id}"><span class="num">0${i + 1}</span><span class="card__icon">${ic(s.icon)}</span><h3 class="h4">${s.title}</h3><p>${s.desc}</p><span class="card__more">Les mer ${ic('arrow-right')}</span></a>`).join('')}
  </div>
</div></section>

<section class="section"><div class="wrap split">
  <div class="stack-lg">
    <span class="eyebrow rv">Kunstig intelligens</span>
    <h2 class="h2" data-split>AI – fra strategi til løsninger som <span class="hl">virker</span></h2>
    <p class="lead rv">Vi hjelper deg å bruke data smartere. Med solid erfaring fra AI-prosjekter over hele Norge utvikler vi løsninger som fungerer i praksis.</p>
    <ul class="checks" data-stagger>
      <li><span class="ic-box">${ic('data')}</span>Avdekke mønstre i dataene dine</li>
      <li><span class="ic-box">${ic('code')}</span>Bygge smartere applikasjoner</li>
      <li><span class="ic-box">${ic('loop')}</span>Automatisere prosesser</li>
      <li><span class="ic-box">${ic('security')}</span>Trygt, etisk og i tråd med regelverk</li>
    </ul>
    <div class="rv"><a class="btn btn--dark" href="/vi-jobber-med#ai">Se hvordan vi skaper verdi med AI ${ic('arrow-right')}</a></div>
  </div>
  ${aiNet()}
</div></section>

<section class="section section--alt"><div class="wrap split">
  <div class="photo-wrap rv-scale">
    <div class="photo">${img('office-people', 'Kollegaer i Bouvet-huset i Oslo')}</div>
    
  </div>
  <div class="stack-lg">
    <span class="eyebrow rv">Om Bouvet</span>
    <h2 class="h2" data-split>Fag på tvers, nærhet til kunder og kunnskap</h2>
    <p class="lead rv">Stadig flere oppdrag krever en tverrfaglig tilnærming. Med kontorer over hele landet forstår vi kundens språk, kultur og forretning – og løser de fleste oppdrag lokalt.</p>
    <ul class="checks" data-stagger>
      <li><span class="ic-box">${ic('pin')}</span>17 kontorer i Norge og Sverige</li>
      <li><span class="ic-box">${ic('team')}</span>Tverrfaglige team som skaper helhet</li>
      <li><span class="ic-box">${ic('heart')}</span>Verdidrevet i over 20 år</li>
      <li><span class="ic-box">${ic('trend')}</span>Børsnotert på Euronext Oslo Børs</li>
    </ul>
    <div class="rv"><a class="btn" href="/om-bouvet">Mer om oss ${ic('arrow-right')}</a></div>
  </div>
</div></section>

<section class="section" id="prosjekter"><div class="wrap" data-hscroll>
  ${head('Våre prosjekter', 'Løsninger med stor betydning for samfunnet', '', `<div class="scroll-ctrl rv"><button class="icon-btn" data-dir="-1" aria-label="Forrige">${ic('arrow-left')}</button><button class="icon-btn" data-dir="1" aria-label="Neste">${ic('arrow-right')}</button></div>`)}
  <div class="hscroll" data-stagger>${PROJECTS.map(projectCard).join('')}</div>
  <div class="progress"><span></span></div>
  <div style="margin-top:2rem"><a class="link" href="https://www.bouvet.no/prosjekter">Se flere prosjekter ${ic('arrow-right')}</a></div>
</div></section>

<section class="section section--dark"><div class="wrap">
  ${head('Aktuelt nå', 'Digital <span class="hl">suverenitet</span>', 'Det handler ikke bare om hvor dataene ligger – men om hvor mye virksomheten kan bestemme selv når pris, vilkår eller rammebetingelser endrer seg.', `<a class="btn btn--ghost rv" href="/bouvet-deler">Alt fra Bouvet deler ${ic('arrow-right')}</a>`)}
  <div class="grid g-3" data-stagger>${[POSTS[0], POSTS[1], POSTS[5]].map(p => postCard(p)).join('')}</div>
</div></section>

<section class="section"><div class="wrap">
  ${head('Bouvet deler', 'Kunnskap og historier fra folkene våre', '', `<a class="link rv" href="/bouvet-deler">Besøk bloggen vår ${ic('arrow-right')}</a>`)}
  <div class="grid g-3" data-stagger>${[POSTS[2], POSTS[3], POSTS[4]].map(p => postCard(p)).join('')}</div>
</div></section>

<section class="section section--alt"><div class="wrap">
  ${head('Kommende frokostseminarer', 'Få en god morgen med Bouvet', 'God frokost, god kaffe og en faglig oppkvikker. Klikk for å melde deg på.', `<a class="link rv" href="/kurs#kommende">Alle kurs og seminarer ${ic('arrow-right')}</a>`)}
  <div class="rows" data-stagger>${EVENTS.map(e => row(e)).join('')}</div>
</div></section>

<section class="section"><div class="wrap grid g-2">
  <a class="mcard rv" href="/bli-en-av-oss">
    <div class="mcard__img" style="aspect-ratio:16/10">${img('workshop', 'Workshop i Bouvet')}<span class="mcard__go">${ic('arrow-up-right')}</span></div>
    <span class="eyebrow">Bli en av oss</span>
    <h3 class="h3">Vi jobber sammen, vi leverer sammen, og vi lykkes sammen.</h3>
    <p>Vi håper du vil lykkes – sammen med oss. Se våre ledige stillinger.</p>
  </a>
  <div class="rv" style="--i:1">
    <a class="mcard" href="/kurs">
      <div class="mcard__img" style="aspect-ratio:16/10">${img('kurs-deltagere', 'Kursdeltagere i Bouvet')}<span class="mcard__go">${ic('arrow-up-right')}</span></div>
      <span class="eyebrow">Lyst til å lære noe nytt?</span>
      <h3 class="h3">Bli faglig oppdatert av instruktører med lang praktisk erfaring.</h3>
    </a>
    <ul style="margin-top:1rem">${COURSES.map(c => `<li><a class="link" href="#" data-modal="m-event" data-title="${c.t}" data-meta="${c.day}. ${c.mon} · ${c.place}" style="padding:.35rem 0">${ic('calendar')} ${c.day}. ${c.mon} – ${c.t}, ${c.place}</a></li>`).join('')}</ul>
  </div>
</div></section>

${newsletterBand()}
`,
};
