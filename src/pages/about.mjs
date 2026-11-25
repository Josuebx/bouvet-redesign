import { ic, img, head, phero, RING, SCRIBBLE, contactBand } from '../parts.mjs';
import { NEWS, OFFICES } from '../data.mjs';

const slug = s => s.toLowerCase().replace(/ø/g, 'o').replace(/å/g, 'a').replace(/æ/g, 'ae');
const proj = (lat, lon) => [40 + (lon - 4.6) * 15.5, 30 + (71 - lat) * 29];
const [hx, hy] = proj(59.94, 10.7);

const map = () => {
  const dots = [];
  for (let x = 10; x < 300; x += 14) for (let y = 10; y < 420; y += 14) dots.push(`<circle class="grid-dot" cx="${x}" cy="${y}" r="1.3"/>`);
  return `<div class="map rv-scale"><svg viewBox="0 0 300 420" role="img" aria-label="Kart over Bouvets 17 kontorer i Norge og Sverige">
    ${dots.join('')}
    ${OFFICES.filter(o => o[0] !== 'Oslo').map(o => { const [x, y] = proj(o[2], o[3]); const mx = (x + hx) / 2 + (y - hy) * .18, my = (y + hy) / 2 - (x - hx) * .18; return `<path class="route" d="M${hx} ${hy}Q${mx.toFixed(1)} ${my.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)}"/>`; }).join('')}
    ${OFFICES.map((o, i) => { const [x, y] = proj(o[2], o[3]); const left = o[3] > 15 || o[0] === 'Sandvika'; return `<g class="city" data-city="${slug(o[0])}" tabindex="0" aria-label="${o[0]}"><circle class="halo" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="5" style="animation-delay:${(i * .19).toFixed(2)}s"/><circle class="core" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${o[0] === 'Oslo' ? 5.5 : 3.6}"/><text x="${(x + (left ? -9 : 9)).toFixed(1)}" y="${(y + 4).toFixed(1)}" text-anchor="${left ? 'end' : 'start'}">${o[0]}</text></g>`; }).join('')}
  </svg>
  <div class="ai-art__label"><span>17 kontorer</span><span>Norge · Sverige</span></div></div>`;
};

const VALUES = [['security', 'Troverdighet'], ['bubble', 'Delingskultur'], ['spark', 'Frihet'], ['leaf', 'Jordnærhet'], ['heart', 'Entusiasme']];

export default {
  slug: 'om-bouvet', file: 'om-bouvet',
  title: 'Om Bouvet',
  desc: 'Bouvet er et ledende norsk konsulentselskap innen IT og digital kommunikasjon med 17 kontorer i Norge og Sverige.',
  body: `
${phero({
  crumb: 'Om oss', eyebrow: 'Om Bouvet',
  title: 'En ettertraktet <span class="hl">digitaliseringspartner</span>',
  lead: 'Bouvet er et ledende norsk konsulentselskap innen IT og digital kommunikasjon. Årelang erfaring, nærhet til kundene og bred kompetanse gjør oss til en partner for både private og offentlige aktører.',
  actions: `<a class="btn" href="#kontorer">${ic('pin')} Våre kontorer</a><a class="link link--accent" href="#nyheter">Siste nyheter ${ic('arrow-right')}</a>`,
  art: `<div class="phero__photo">${img('off-oslo', 'Bouvet-huset i Oslo')}</div>`,
})}

<section class="section--tight"><div class="wrap" style="text-align:center;max-width:960px">
  <span class="eyebrow rv">Vår visjon</span>
  <p class="display" style="margin-top:1.25rem;font-size:clamp(2rem,1.2rem+3.4vw,4rem)" data-split>«Vi går foran og bygger <span class="hl">fremtidens</span> samfunn.»</p>
  <p class="lead rv" style="margin:1.5rem auto 0;max-width:40rem">Vår ambisjon er å være det mest troverdige konsulentselskapet med de mest fornøyde medarbeiderne og kundene.</p>
</div></section>

<section class="section section--dark" style="margin-top:var(--section)"><div class="wrap">
  ${head('Verdidrevet i over 20 år', 'Fem rettesnorer i alt vi gjør', 'Fra forretningsvirksomhet til rekruttering.')}
  <div class="steps" data-stagger>${VALUES.map(([i, t]) => `<div class="step">${ic(i)}<h3>${t}</h3></div>`).join('')}</div>
</div></section>

<section class="section"><div class="wrap split">
  <div class="photo-wrap rv-scale"><div class="photo">${img('kontor-oslo', 'Kontorlandskap i Bouvet')}</div></div>
  <div class="stack-lg">
    <div class="stack rv"><span class="card__icon">${ic('team')}</span><h3 class="h3">Fag på tvers</h3><p class="muted">Stadig flere oppdrag krever en tverrfaglig tilnærming. Vi setter sammen mennesker, verktøy og metoder i team som skaper helhetlige løsninger og resultater – en viktig grunn til at mange kunder gir oss fornyet tillit.</p></div>
    <div class="stack rv" style="--i:1"><span class="card__icon">${ic('handshake')}</span><h3 class="h3">Nærhet til kunder og kunnskap</h3><p class="muted">Nærhet til oppdragsgiverne er avgjørende for gode løsninger. Med 17 kontorer i Norge og Sverige forstår vi kundens språk, kultur og forretning, og kan forankre og løse de fleste oppdrag lokalt.</p></div>
  </div>
</div></section>

<section class="section--tight"><div class="wrap">
  <a class="feature-post mcard rv" href="https://www.bouvet.no/om-bouvet/de-ansattes-arsrapport-25">
    <div class="mcard__img">${img('arsrapport-2025', 'De ansattes årsrapport 2025')}<span class="mcard__go">${ic('arrow-up-right')}</span></div>
    <div class="stack-lg"><span class="tag tag--orange">${ic('report')} De ansattes årsrapport 2025</span><h2 class="h2" style="font-size:clamp(1.6rem,1.2rem+1.6vw,2.4rem)">En fortelling om det viktigste i Bouvet: folkene</h2><p>Ikke en rapport fylt av grafer og kontantstrømmer, men øyeblikkene vi skaper sammen – faglig, sosialt og kollegialt.</p><span class="link">Les rapporten ${ic('arrow-right')}</span></div>
  </a>
</div></section>

<section class="section section--alt" id="nyheter"><div class="wrap">
  ${head('Nyheter', 'Siste fra Bouvet', '', `<a class="link rv" href="https://www.bouvet.no/nyheter">Se flere nyheter ${ic('arrow-up-right')}</a>`)}
  <div class="grid g-3" data-stagger>${NEWS.map(n => `<a class="mcard" href="${n.u}"><div class="mcard__img">${img(n.img, '')}<span class="mcard__go">${ic('arrow-up-right')}</span></div><span class="tag">${ic('megaphone')}Nyhet</span><h3>${n.t}</h3><p>${n.d}</p></a>`).join('')}</div>
</div></section>

<section class="section"><div class="wrap">
  <div class="grid g-3 svc-grid" data-stagger>
    <a class="card svc" href="https://www.bouvet.no/om-bouvet/ledelsen"><span class="card__icon">${ic('compass')}</span><h3 class="h4">Ledelsen</h3><p>Personer med lang erfaring fra konsulentbransjen – flertallet med lang fartstid hos oss.</p><span class="card__more">Se hvem som sitter i ledelsen ${ic('arrow-right')}</span></a>
    <a class="card svc" href="https://www.bouvet.no/om-bouvet/styret"><span class="card__icon">${ic('scale')}</span><h3 class="h4">Styret</h3><p>Personer med bred bakgrunn fra teknologi, kommunikasjon og økonomi.</p><span class="card__more">Se hvem som sitter i styret ${ic('arrow-right')}</span></a>
    <a class="card svc" href="https://www.bouvet.no/om-bouvet/baerekraft-var-tilnaerming"><span class="card__icon">${ic('leaf')}</span><h3 class="h4">Bærekraft</h3><p>Vi bidrar med digital kompetanse og gjennomføringsevne slik at vi sammen kan utvikle verden i riktig retning.</p><span class="card__more">Vår tilnærming ${ic('arrow-right')}</span></a>
  </div>
</div></section>

<section class="section section--alt" id="kontorer"><div class="wrap">
  ${head('Våre kontorer', 'Nær deg – fra Kristiansand til Tromsø', 'Hold musepekeren over et kontor for å se det på kartet.')}
  <div class="split split--5-7" style="align-items:start">
    ${map()}
    <div class="offices" data-stagger>${OFFICES.map(o => `<a class="office" href="https://www.bouvet.no/om-bouvet/vare-kontorer/${slug(o[0])}" data-city="${slug(o[0])}"><span><b>${o[0]}</b><span>${o[1]}</span></span>${ic('arrow-up-right')}</a>`).join('')}</div>
  </div>
</div></section>

${contactBand('Vil du vite mer om Bouvet?', 'Ta kontakt med oss – vi kobler deg med riktig person på nærmeste kontor.')}
`,
};
