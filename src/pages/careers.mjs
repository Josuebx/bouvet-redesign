import { ic, img, head, phero, bleed, mosaic, idxRow, plainCard, reach, figs, PLUS, ARR, pad } from '../parts.mjs';
import { JOBS } from '../data.mjs';

const ROLES = ['Systemutviklere', 'AI-spesialister', 'Data engineers', 'Sikkerhetseksperter', 'Analytikere', 'Prosjektledere', 'Rådgivere', 'Designere', 'Testledere', 'Arkitekter'];
const KNOW = [
  ['Faglig utvikling', 'Et sterkt fagmiljø der vi deler kunnskap, utfordrer hverandre og utvikler oss i takt med teknologien.'],
  ['Hva betyr visjonen vår?', 'Vi går foran og bygger fremtidens samfunn – sammen med noen av Norges mest samfunnskritiske virksomheter.'],
  ['KI og hverdagen vår', 'Vi er langt fremme på AI og bruker det både i leveransene til kundene og i vår egen hverdag.'],
  ['Trygg arbeidsplass', 'En trygg arbeidsgiver med et solid fundament og langsiktige partnerskap med kundene.'],
  ['Kultur- og verdidrevet', 'Troverdighet, delingskultur, frihet, jordnærhet og entusiasme er rettesnorer i alt vi gjør.'],
  ['Varierte arbeidsoppgaver', 'Oppgaver som betyr noe – i store og små tverrfaglige team, i privat og offentlig sektor.'],
];

export default {
  slug: 'bli-en-av-oss', file: 'bli-en-av-oss',
  title: 'Bli en av oss – Karriere i Bouvet',
  desc: 'Vi søker systemutviklere, AI-spesialister, data engineers, sikkerhetseksperter, analytikere, prosjektledere, rådgivere og designere.',
  body: `
${phero({
  crumb: 'Bli en av oss', eyebrow: 'Karriere',
  title: 'Bli en av oss – og løs oppgaver som <span class="accent">betyr noe</span>',
  lead: 'I Bouvet jobber du med noen av Norges mest samfunnskritiske virksomheter, i et fagmiljø der vi deler kunnskap, utfordrer hverandre og skaper resultater sammen.',
  actions: `<a class="btn btn--lg" href="#stillinger">${PLUS} Se ledige stillinger</a><button class="btn btn--line btn--lg" data-modal="m-apply" data-title="Åpen søknad" data-meta="Alle kontorer">Send åpen søknad</button>`,
})}
${bleed('team-ost', 'Ansatte i Bouvet')}

<section class="sec"><div class="wrap">
  <div class="lr">
    <div class="lr__l"><span class="eyebrow rv">Vi søker</span></div>
    <ul class="wordlist">${ROLES.map(r => `<li>${r}</li>`).join('')}</ul>
  </div>
</div></section>

<section class="sec sec--rule"><div class="wrap">
  ${head('Hvorfor Bouvet', 'En trygg arbeidsgiver – <span class="accent">og et sted å vokse</span>', 'Vi har bygget solide, langsiktige partnerskap med kundene våre. For deg betyr det et solid fundament – og et sted der du utvikler deg i takt med teknologien.')}
  <div class="lr"><div></div>${figs([['Bonus', 'Konkurransedyktig lønn, overtidsbetaling og kollektiv bonus'], ['Aksjer', 'Aksjeprogram og gode pensjons- og forsikringsordninger'], ['17', 'Kontorer i Norge og Sverige']]).replace('class="figs"', 'class="figs" style="grid-template-columns:repeat(3,minmax(0,1fr))"')}</div>
</div></section>

<section class="sec sec--deep" id="stillinger"><div class="wrap">
  ${head('Ledige stillinger', 'Finn din neste rolle', 'Velg en stilling for å sende en rask søknad.', `<a class="btn btn--line" href="https://www.bouvet.no/ledige-stillinger">Alle stillinger ${ic('arrow-up-right', 'i-diag')}</a>`)}
  <div class="idx">
    ${JOBS.map((j, i) => idxRow({ n: pad(i + 1), t: j.t, m: `${j.place}<span class="tag">${j.cat}</span>`, attrs: `data-modal="m-apply" data-title="${j.t}" data-meta="${j.place}"`, go: 'plus' })).join('')}
    ${idxRow({ n: '—', t: 'Fant du ikke det du lette etter?', d: 'Send oss en åpen søknad – vi leser alle.', m: 'Alle kontorer', attrs: 'data-modal="m-apply" data-title="Åpen søknad" data-meta="Alle kontorer"', go: 'plus' })}
  </div>
</div></section>

<section class="sec"><div class="wrap">
  ${head('Bli bedre kjent med oss', 'Hva bør du egentlig vite om Bouvet?', 'Vi ga oppgaven til noen av folkene våre.')}
  ${mosaic(KNOW.map(([t, d], i) => ({ t, d, num: pad(i + 1) })), { cols: 4, per: 3, tones: ['grey', 'mint', 'white', 'blue', 'creme', 'grey'] })}
</div></section>

<section class="sec sec--rule"><div class="wrap">
  ${head('Verdt å vite', 'Mer enn en arbeidsplass')}
  <div class="cards">
    ${plainCard('Betingelser og goder', 'Vi lever gjerne for jobben – men skal også leve av den. Lønn, bonus, aksjeprogram og gode ordninger.', 'team-marc', 'https://www.bouvet.no/bli-en-av-oss/betingelser', 'Betingelser')}
    ${plainCard('Vi tilbyr deg mer enn en arbeidsplass', 'En kultur basert på samarbeid, samhold og deling – den eneste rette måten for oss å lykkes.', 'kontor-oslo', 'https://www.bouvet.no/bli-en-av-oss/vi-tilbyr-deg-mer-enn-en-arbeidsplass', 'Kultur')}
    ${plainCard('De ansattes årsrapport 2025', 'Ikke sektordiagrammer og kontantstrøm – men en fortelling om det viktigste i Bouvet: folkene.', 'arsrapport-2025', 'https://www.bouvet.no/om-bouvet/de-ansattes-arsrapport-25', 'Rapport')}
  </div>
</div></section>

<section class="strip"><div class="wrap strip__in">
  <div><span class="eyebrow rv">Student eller nyutdannet?</span><h2 class="h2" style="margin-top:1.25rem" data-split>Start karrieren der løsningene betyr noe</h2></div>
  <div><p class="rv" style="color:var(--fg-muted);max-width:30rem">Jobb i store og små tverrfaglige team og vær med å utvikle virksomhetskritiske og samfunnsnyttige løsninger.</p>
    <div class="row-actions" style="margin-top:1.5rem"><a class="btn btn--dark btn--lg" href="https://www.bouvet.no/bli-en-av-oss/er-du-nyutdannet-eller-student">${PLUS} Les mer</a><button class="btn btn--line btn--lg" data-modal="m-apply" data-title="Sommerjobb / graduate" data-meta="Student eller nyutdannet">Meld interesse</button></div></div>
</div></section>

${reach({ title: 'Snakk med oss', text: 'Lurer du på hvordan det er å jobbe i Bouvet? Send oss noen ord, så kobler vi deg med noen i fagmiljøet du er interessert i.', tab: 1 })}
`,
};
