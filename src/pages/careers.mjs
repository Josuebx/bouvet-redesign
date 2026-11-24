import { ic, img, head, row, phero, SCRIBBLE, RING, newsletterBand, BAND_WAVES } from '../parts.mjs';
import { JOBS } from '../data.mjs';

const ROLES = ['Systemutviklere', 'AI-spesialister', 'Data engineers', 'Sikkerhetseksperter', 'Analytikere', 'Prosjektledere', 'Rådgivere', 'Designere', 'Testledere', 'Arkitekter'];
const KNOW = [
  ['growth', 'Faglig utvikling', 'Et sterkt fagmiljø der vi deler kunnskap, utfordrer hverandre og utvikler oss i takt med teknologien.'],
  ['eye', 'Hva betyr visjonen vår?', 'Vi går foran og bygger fremtidens samfunn – sammen med noen av Norges mest samfunnskritiske virksomheter.'],
  ['ai', 'KI og hverdagen vår', 'Vi er langt fremme på AI og bruker det både i leveransene til kundene og i vår egen hverdag.'],
  ['anchor', 'Trygg arbeidsplass', 'En trygg arbeidsgiver med et solid fundament og langsiktige partnerskap med kundene.'],
  ['heart', 'Kultur- og verdidrevet', 'Troverdighet, delingskultur, frihet, jordnærhet og entusiasme er rettesnorer i alt vi gjør.'],
  ['shuffle', 'Varierte arbeidsoppgaver', 'Oppgaver som betyr noe – i store og små tverrfaglige team, i privat og offentlig sektor.'],
];

export default {
  slug: 'bli-en-av-oss', file: 'bli-en-av-oss',
  title: 'Bli en av oss – Karriere i Bouvet',
  desc: 'Vi søker systemutviklere, AI-spesialister, data engineers, sikkerhetseksperter, analytikere, prosjektledere, rådgivere og designere.',
  body: `
${phero({
  crumb: 'Bli en av oss', eyebrow: 'Karriere',
  title: 'Bli en av oss – og løs oppgaver som <span class="hl">betyr noe</span>',
  lead: 'I Bouvet får du jobbe med noen av Norges mest samfunnskritiske virksomheter, i et fagmiljø der vi deler kunnskap, utfordrer hverandre og skaper resultater sammen.',
  actions: `<a class="btn" href="#stillinger">Se ledige stillinger ${ic('arrow-right')}</a><button class="btn btn--ghost" data-modal="m-apply" data-title="Åpen søknad" data-meta="Alle kontorer">Send åpen søknad</button>`,
  art: `<div style="position:relative;width:100%;aspect-ratio:1"><div style="position:absolute;inset:0;border-radius:50%;overflow:hidden;border:6px solid var(--creme-light)">${img('team-ost', 'Ansatte i Bouvet')}</div>${RING('Bli en av oss · Vi lykkes sammen · ')}</div>`,
})}

<section class="logos"><div class="wrap">
  <p class="logos__label">Vi søker</p>
  <div class="marquee"><div class="marquee__track">${[...ROLES, ...ROLES].map(r => `<span class="marquee__item">${ic('plus')}${r}</span>`).join('')}</div></div>
  <div class="marquee marquee--reverse" style="margin-top:1rem"><div class="marquee__track">${[...ROLES.slice().reverse(), ...ROLES.slice().reverse()].map(r => `<span class="marquee__item" style="color:var(--midnight)">${ic('check')}${r}</span>`).join('')}</div></div>
</div></section>

<section class="section"><div class="wrap split">
  <div class="photo-wrap rv-scale"><div class="photo">${img('office-people', 'Kollegaer i Bouvet')}</div>${SCRIBBLE()}</div>
  <div class="stack-lg">
    <span class="eyebrow rv">Hvorfor Bouvet</span>
    <h2 class="h2" data-split>En trygg arbeidsgiver – og et sted å <span class="hl">vokse</span></h2>
    <p class="lead rv">Vi har over tid bygget solide, tette og langsiktige partnerskap med kundene våre, og utvikler oss kontinuerlig i takt med deres behov, ny teknologi og endringer i samfunnet.</p>
    <p class="rv muted">For deg betyr det en trygg arbeidsgiver med et solid fundament – men også et sted der du får utvikle deg i takt med teknologien.</p>
    <ul class="checks" data-stagger>
      <li><span class="ic-box">${ic('gift')}</span>Konkurransedyktig lønn, overtidsbetaling og kollektiv bonus</li>
      <li><span class="ic-box">${ic('coins')}</span>Aksjeprogram og gode pensjons- og forsikringsordninger</li>
      <li><span class="ic-box">${ic('pin')}</span>17 kontorer i Norge og Sverige</li>
    </ul>
  </div>
</div></section>

<section class="section section--alt" id="stillinger"><div class="wrap">
  ${head('Ledige stillinger', 'Finn din neste rolle', 'Klikk på en stilling for å sende en rask søknad.', `<a class="link rv" href="https://www.bouvet.no/ledige-stillinger">Alle ledige stillinger ${ic('arrow-up-right')}</a>`)}
  <div class="rows" data-stagger>${JOBS.map(j => row(j, 'm-apply')).join('')}</div>
  <div class="note rv" style="margin-top:2rem">${ic('bubble')}<div>Fant du ikke helt det du lette etter? <a class="link" href="#" data-modal="m-apply" data-title="Åpen søknad" data-meta="Alle kontorer">Send oss en åpen søknad ${ic('arrow-right')}</a></div></div>
</div></section>

<section class="section"><div class="wrap">
  ${head('Bli bedre kjent med oss', 'Hva bør du egentlig vite om Bouvet?', 'Virksomheter løfter gjerne frem det samme når de presenterer seg. Vi ga oppgaven til noen av folkene våre.')}
  <div class="grid g-3 svc-grid" data-stagger>
    ${KNOW.map(([i, t, d], k) => `<div class="card svc${k === 0 ? ' is-featured' : ''}" tabindex="0"><span class="card__icon">${ic(i)}</span><h3 class="h4">${t}</h3><p>${d}</p><span class="card__more">${ic('play')} Se historien</span></div>`).join('')}
  </div>
</div></section>

<section class="section section--alt"><div class="wrap">
  ${head('Verdt å vite', 'Mer enn en arbeidsplass')}
  <div class="grid g-3" data-stagger>
    <a class="mcard" href="https://www.bouvet.no/bli-en-av-oss/betingelser"><div class="mcard__img">${img('team-marc', '')}<span class="mcard__go">${ic('arrow-up-right')}</span></div><span class="tag tag--green">${ic('gift')}Betingelser</span><h3>Betingelser og goder</h3><p>Vi lever gjerne for jobben – men skal også leve av den. Konkurransedyktig lønn, bonus, aksjeprogram og gode ordninger.</p></a>
    <a class="mcard" href="https://www.bouvet.no/bli-en-av-oss/vi-tilbyr-deg-mer-enn-en-arbeidsplass"><div class="mcard__img">${img('kontor-oslo', '')}<span class="mcard__go">${ic('arrow-up-right')}</span></div><span class="tag">${ic('heart')}Kultur</span><h3>Vi tilbyr deg mer enn en arbeidsplass</h3><p>En kultur og et arbeidsmiljø basert på samarbeid, samhold og deling – den eneste rette måten for oss å lykkes.</p></a>
    <a class="mcard" href="https://www.bouvet.no/om-bouvet/de-ansattes-arsrapport-25"><div class="mcard__img">${img('arsrapport-2025', '')}<span class="mcard__go">${ic('arrow-up-right')}</span></div><span class="tag tag--orange">${ic('report')}Rapport</span><h3>De ansattes årsrapport 2025</h3><p>Ikke sektordiagrammer og kontantstrøm – men en fortelling om det viktigste i Bouvet: folkene.</p></a>
  </div>
</div></section>

<section class="section--tight"><div class="wrap">
  <div class="band on-dark band--split rv-scale">
    ${BAND_WAVES()}
    <div><span class="eyebrow">${ic('graduation')} Student eller nyutdannet?</span><h2 class="h2" style="margin-top:1rem" data-split>Start karrieren der løsningene betyr noe</h2><p class="lead" style="margin-left:0">Jobb i store og små tverrfaglige team og vær med å utvikle virksomhetskritiske og samfunnsnyttige løsninger – og ha det gøy på veien!</p></div>
    <div style="display:flex;gap:.75rem;flex-wrap:wrap;justify-content:flex-end;position:relative"><a class="btn" href="https://www.bouvet.no/bli-en-av-oss/er-du-nyutdannet-eller-student">Les mer ${ic('arrow-right')}</a><button class="btn btn--ghost" data-modal="m-apply" data-title="Sommerjobb / graduate" data-meta="Student eller nyutdannet">Meld interesse</button></div>
  </div>
</div></section>

${newsletterBand()}
`,
};
