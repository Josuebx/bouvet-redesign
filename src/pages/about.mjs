import { ic, img, head, phero, bleed, mosaic, idxRow, plainCard, reach, glyphAt, PLUS, ARR, pad } from '../parts.mjs';
import { NEWS, OFFICES } from '../data.mjs';

const slug = s => s.toLowerCase().replace(/ø/g, 'o').replace(/å/g, 'a').replace(/æ/g, 'ae');
const proj = (lat, lon) => [40 + (lon - 4.6) * 15.5, 30 + (71 - lat) * 29];
const [hx, hy] = proj(59.94, 10.7);

const map = () => {
  const dots = [];
  for (let x = 10; x < 300; x += 14) for (let y = 10; y < 420; y += 14) dots.push(`<circle class="grid-dot" cx="${x}" cy="${y}" r="1"/>`);
  return `<div class="map"><svg viewBox="0 0 300 420" role="img" aria-label="Kart over Bouvets 17 kontorer i Norge og Sverige">
    ${dots.join('')}
    ${OFFICES.filter(o => o[0] !== 'Oslo').map(o => { const [x, y] = proj(o[2], o[3]); return `<path class="route" d="M${hx} ${hy}L${x.toFixed(1)} ${y.toFixed(1)}"/>`; }).join('')}
    ${OFFICES.map(o => { const [x, y] = proj(o[2], o[3]); const left = o[3] > 15 || o[0] === 'Sandvika'; const sm = ['Sandvika', 'Kongsberg', 'Drammen', 'Vestfold', 'Grenland'].includes(o[0]); return `<g class="city${sm ? ' city--sm' : ''}" data-city="${slug(o[0])}" tabindex="0" aria-label="${o[0]}"><circle class="core" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${o[0] === 'Oslo' ? 4.5 : 3}"/><text x="${(x + (left ? -8 : 8)).toFixed(1)}" y="${(y + 3).toFixed(1)}" text-anchor="${left ? 'end' : 'start'}">${o[0]}</text></g>`; }).join('')}
  </svg></div>`;
};

const VALUES = ['Troverdighet', 'Delingskultur', 'Frihet', 'Jordnærhet', 'Entusiasme'];

export default {
  slug: 'om-bouvet', file: 'om-bouvet',
  title: 'Om Bouvet',
  desc: 'Bouvet er et ledende norsk konsulentselskap innen IT og digital kommunikasjon med 17 kontorer i Norge og Sverige.',
  body: `
${phero({
  crumb: 'Om oss', eyebrow: 'Om Bouvet',
  title: 'En ettertraktet <span class="accent">digitaliseringspartner</span>',
  lead: 'Bouvet er et ledende norsk konsulentselskap innen IT og digital kommunikasjon. Årelang erfaring, nærhet til kundene og bred kompetanse gjør oss til en partner for både private og offentlige aktører.',
  actions: `<a class="btn btn--lg" href="#kontorer">${PLUS} Våre kontorer</a><a class="btn btn--line btn--lg" href="#nyheter">Siste nyheter ${ARR}</a>`,
})}
${bleed('off-oslo', 'Bouvet-huset i Oslo', 'Hovedkontoret, Sørkedalsveien 8, Oslo')}

<section class="sec"><div class="wrap lr">
  <div class="lr__l"><span class="eyebrow rv">Vår visjon</span></div>
  <div>
    <p class="display" style="font-size:clamp(2.1rem,1.3rem + 3vw,3.9rem)" data-split>«Vi går foran og bygger <span class="accent">fremtidens samfunn.</span>»</p>
    <p class="lead rv" style="margin-top:1.75rem">Vår ambisjon er å være det mest troverdige konsulentselskapet med de mest fornøyde medarbeiderne og kundene.</p>
  </div>
</div></section>

<section class="sec sec--deep"><div class="wrap">
  ${head('Verdidrevet i over 20 år', 'Fem rettesnorer i alt vi gjør', 'Fra forretningsvirksomhet til rekruttering.')}
  <div class="steps" style="--n:5">${VALUES.map((t, i) => `<div class="step"><span class="num">${pad(i + 1)}</span>${glyphAt(i)}<h3 class="rv">${t}</h3></div>`).join('')}</div>
</div></section>

<section class="sec" style="padding-bottom:0"><div class="wrap">
  ${mosaic([
    { t: 'Fag på tvers', d: 'Stadig flere oppdrag krever en tverrfaglig tilnærming. Vi setter sammen mennesker, verktøy og metoder i team som skaper helhetlige løsninger – en viktig grunn til at mange kunder gir oss fornyet tillit.', glyph: 'cross', tone: 'grey' },
    { t: 'Nærhet til kunder og kunnskap', d: 'Med 17 kontorer i Norge og Sverige forstår vi kundens språk, kultur og forretning, og kan forankre og løse de fleste oppdrag lokalt.', glyph: 'burst', tone: 'mint' },
  ], { cols: 3, per: 2, label: '<span class="eyebrow rv">Slik jobber vi</span>', style: '--overlap:min(15vw,210px)' })}
</div></section>
${bleed('kontor-oslo', 'Kontorlandskap i Bouvet', '', 'bleed--under', '--overlap:min(15vw,210px)')}

<section class="sec"><div class="wrap">
  <a class="feature" href="https://www.bouvet.no/om-bouvet/de-ansattes-arsrapport-25">
    <div class="media">${img('arsrapport-2025', 'De ansattes årsrapport 2025')}</div>
    <div class="feature__body"><div class="stack"><span class="eyebrow">De ansattes årsrapport 2025</span><h2 class="h2" style="font-size:clamp(1.5rem,1.15rem + 1.4vw,2.3rem);margin-top:1.25rem">En fortelling om det viktigste i Bouvet: folkene</h2><p class="muted">Ikke en rapport fylt av grafer og kontantstrømmer, men øyeblikkene vi skaper sammen – faglig, sosialt og kollegialt.</p></div><span class="link link--mint">Les rapporten ${ic('arrow-right')}</span></div>
  </a>
</div></section>

<section class="sec sec--deep" id="nyheter"><div class="wrap">
  ${head('Nyheter', 'Siste fra Bouvet', '', `<a class="btn btn--line" href="https://www.bouvet.no/nyheter">Se flere nyheter ${ic('arrow-up-right', 'i-diag')}</a>`)}
  <div class="cards">${NEWS.map(n => plainCard(n.t, n.d, n.img, n.u, 'Nyhet')).join('')}</div>
</div></section>

<section class="sec"><div class="wrap">
  ${head('Organisasjon', 'Ledelse, styre og bærekraft')}
  <div class="lr"><div></div><div class="idx">
    ${idxRow({ n: '01', t: 'Ledelsen', d: 'Personer med lang erfaring fra konsulentbransjen – flertallet med lang fartstid hos oss.', href: 'https://www.bouvet.no/om-bouvet/ledelsen' })}
    ${idxRow({ n: '02', t: 'Styret', d: 'Personer med bred bakgrunn fra teknologi, kommunikasjon og økonomi.', href: 'https://www.bouvet.no/om-bouvet/styret' })}
    ${idxRow({ n: '03', t: 'Bærekraft', d: 'Vi bidrar med digital kompetanse og gjennomføringsevne slik at vi sammen kan utvikle verden i riktig retning.', href: 'https://www.bouvet.no/om-bouvet/baerekraft-var-tilnaerming' })}
    ${idxRow({ n: '04', t: 'Sertifiseringer', d: 'Oversikt over Bouvets ISO-sertifiseringer.', href: 'https://www.bouvet.no/om-bouvet/vare-iso-sertifiseringer' })}
  </div></div>
</div></section>

<section class="sec sec--rule" id="kontorer"><div class="wrap">
  ${head('Våre kontorer', 'Nær deg – fra Kristiansand til Tromsø', 'Hold musepekeren over et kontor for å se det på kartet.')}
  <div class="lr lr--5" style="align-items:start">
    ${map()}
    <div class="offices">${OFFICES.map(o => `<a class="office" href="https://www.bouvet.no/om-bouvet/vare-kontorer/${slug(o[0])}" data-city="${slug(o[0])}"><span><b>${o[0]}</b><span>${o[1]}</span></span>${ic('arrow-up-right')}</a>`).join('')}</div>
  </div>
</div></section>

${reach({ title: 'Vil du vite mer?', text: 'Ta kontakt med oss – vi kobler deg med riktig person på nærmeste kontor.' })}
`,
};
