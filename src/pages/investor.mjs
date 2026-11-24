import { ic, img, head, phero, contactBand } from '../parts.mjs';

const MFN = 'https://storage.mfn.se/';
const INV = 'https://www.bouvet.no/investor';
const bars = (title, unit, rows, max) => `
<div class="chart">
  <div class="chart__head"><h3>${title}</h3><div class="legend"><span><i style="background:var(--blue-gray)"></i>2025</span><span><i style="background:var(--midnight)"></i>2026</span></div></div>
  <div class="bars" style="--n:${rows.length}">
    ${rows.map(([, a, b]) => `<div class="bars__group"><div class="bar" style="--h:${(a / max * 100).toFixed(1)}%"><b>${a.toLocaleString('nb-NO')}</b></div><div class="bar bar--now" style="--h:${(b / max * 100).toFixed(1)}%;transition-delay:.15s"><b>${b.toLocaleString('nb-NO')}</b></div></div>`).join('')}
  </div>
  <div class="bars__labels" style="--n:${rows.length}">${rows.map(([l]) => `<span>${l}</span>`).join('')}</div>
  <p class="small muted" style="margin-top:1rem">${unit}</p>
</div>`;

const doc = (t, href, sub = 'PDF') => `<a class="row" href="${href}" style="grid-template-columns:auto 1fr auto"><span class="card__icon">${ic('report')}</span><span><span class="row__title" style="font-size:1rem">${t}</span><span class="row__sub">${sub}</span></span><span class="row__cta">${ic('download')}</span></a>`;

export default {
  slug: 'investor', file: 'investor',
  title: 'Investor – Bouvet ASA',
  desc: 'Nøkkeltall, aksje, utbytte, rapporter og finanskalender for Bouvet ASA (BOUV).',
  body: `
${phero({
  crumb: 'Investor', eyebrow: 'Investor relations',
  title: 'Åpen kommunikasjon. <span class="hl">Lik</span> behandling.',
  lead: 'Bouvet kommuniserer åpent om forhold som er relevante for selskapets finansielle stilling og utvikling. Alle aksjonærer skal likebehandles, og informasjonen skal gis til rett tid, være presis og tilstrekkelig utfyllende.',
  actions: `<button class="btn" data-modal="m-ir">${ic('bell')} Abonner på børsmeldinger</button><a class="link link--accent" href="${MFN}6e878205-54a4-4001-8044-d55dea3afda6/bouvet-q3-report-2026-no-web.pdf">Kvartalsrapport Q3 2026 ${ic('download')}</a>`,
  art: `<div class="stack" style="width:100%"><div class="ticker"><i class="pulse"></i> BOUV · Euronext Oslo Børs</div><div class="ticker">${ic('building')} ISIN NO0010360266</div><div class="ticker">${ic('coins')} Tilleggsutbytte 0,70 kr</div></div>`,
})}

<section class="section--tight" style="padding-top:0"><div class="wrap">
  <div class="stats rv">
    <div class="stat"><b data-count="865.4">0</b><span>Driftsinntekter Q3 2026 (MNOK)</span></div>
    <div class="stat"><b data-count="80.5">0</b><span>Driftsresultat (EBIT) Q3 2026 (MNOK)</span></div>
    <div class="stat"><b data-count="9.3" data-suf=" %">0</b><span>EBIT-margin Q3 2026</span></div>
    <div class="stat"><b data-count="0.58" data-suf=" kr">0</b><span>Utvannet resultat per aksje Q3</span></div>
  </div>
</div></section>

<section class="section" style="padding-top:2rem"><div class="wrap">
  <div class="tabs rv" role="tablist" aria-label="Investorinformasjon">
    <button class="tab" role="tab" id="t-1" aria-controls="p-1" aria-selected="true">${ic('trend')} Nøkkeltall</button>
    <button class="tab" role="tab" id="t-2" aria-controls="p-2" aria-selected="false">${ic('building')} Aksje</button>
    <button class="tab" role="tab" id="t-3" aria-controls="p-3" aria-selected="false">${ic('coins')} Utbytte</button>
    <button class="tab" role="tab" id="t-4" aria-controls="p-4" aria-selected="false">${ic('report')} Rapporter</button>
    <button class="tab" role="tab" id="t-5" aria-controls="p-5" aria-selected="false">${ic('calendar')} Finanskalender</button>
  </div>

  <div class="tabpanel" role="tabpanel" id="p-1" aria-labelledby="t-1" style="margin-top:2.5rem">
    <div class="grid g-2">
      ${bars('Tredje kvartal', 'Millioner kroner. Kilde: Bouvet kvartalsrapport Q3 2026.', [['Driftsinntekter', 870.5, 865.4], ['Driftskostnader', 778.9, 784.9]], 900)}
      ${bars('Resultat tredje kvartal', 'Millioner kroner. Kilde: Bouvet kvartalsrapport Q3 2026.', [['EBIT', 91.6, 80.5], ['Resultat etter skatt', 70.1, 59.5]], 100)}
      ${bars('Januar – september', 'Millioner kroner, driftsinntekter og EBIT hittil i år.', [['Driftsinntekter', 2913.9, 2877.4], ['EBIT', 370.1, 329.8]], 3000)}
      <div class="chart">
        <div class="chart__head"><h3>EBIT-margin, tredje kvartal</h3></div>
        <div class="donut-wrap">
          <svg class="donut" viewBox="0 0 180 180" role="img" aria-label="EBIT-margin 10,5 prosent i 2025 og 9,3 prosent i 2026">
            <circle class="track" cx="90" cy="90" r="74"/><circle class="val" cx="90" cy="90" r="74" data-v="${10.5 * 4}" style="stroke:var(--blue-gray)"/>
            <circle class="track" cx="90" cy="90" r="52"/><circle class="val" cx="90" cy="90" r="52" data-v="${9.3 * 4}"/>
            <text x="90" y="86" text-anchor="middle" style="font:700 26px var(--font);fill:var(--midnight)">9,3 %</text><text x="90" y="106" text-anchor="middle" style="font:500 11px var(--font);fill:var(--text-muted)">Q3 2026</text>
          </svg>
          <div class="stack"><p><b style="font-size:1.6rem;letter-spacing:-.03em">10,5 %</b><br><span class="muted small">EBIT-margin Q3 2025</span></p><p><b style="font-size:1.6rem;letter-spacing:-.03em">9,3 %</b><br><span class="muted small">EBIT-margin Q3 2026</span></p><p class="small muted">Ringene er skalert ×4 for lesbarhet.</p></div>
        </div>
      </div>
    </div>
    <blockquote class="note rv" style="margin:2rem 0 0">${ic('bubble')}<div><i>«Vår bransje utvikler og endrer seg raskt, og ny teknologi skaper nye muligheter og effektiviserer våre leveranser.»</i><br><span class="small muted">Per Gunnar Tronsli, administrerende direktør</span></div></blockquote>
  </div>

  <div class="tabpanel" role="tabpanel" id="p-2" aria-labelledby="t-2" hidden style="margin-top:2.5rem">
    <div class="grid g-2">
      <div class="chart"><div class="chart__head"><h3>Nøkkelinfo aksje</h3></div>
        <table class="token-table"><tbody>
          <tr><th>Selskap</th><td>Bouvet ASA</td></tr><tr><th>Ticker</th><td><code>BOUV</code></td></tr>
          <tr><th>Markedsplass</th><td>Euronext Oslo Børs</td></tr><tr><th>ISIN</th><td><code>NO0010360266</code></td></tr>
          <tr><th>Org.nr.</th><td>974 442 167</td></tr>
        </tbody></table></div>
      <div class="chart" style="background:var(--midnight);color:var(--creme-light)"><div class="chart__head"><h3>Kursutvikling og omsatt volum</h3></div>
        <p style="color:var(--text-on-dark-muted)">Sanntidskurs, historisk avkastning, omsatt volum og eierstruktur (20 største aksjonærer, geografisk fordeling og type eierandel) hentes direkte fra børsen.</p>
        <div class="hero__actions"><a class="btn" href="https://live.euronext.com/nb/product/equities/NO0010360266-XOSL">Se BOUV på Euronext ${ic('arrow-up-right')}</a><a class="btn btn--ghost" href="${INV}">Eierstruktur ${ic('arrow-up-right')}</a></div>
      </div>
    </div>
  </div>

  <div class="tabpanel" role="tabpanel" id="p-3" aria-labelledby="t-3" hidden style="margin-top:2.5rem">
    <div class="split" style="align-items:start">
      <div class="stack-lg"><h3 class="h3">Utbyttepolitikk</h3><p class="lead">Bouvet-aksjen skal være en lønnsom investering for eierne gjennom verdistigning og utbetaling av utbytte. En vesentlig del av fjorårets overskudd etter skatt skal deles ut til eierne.</p></div>
      <div class="chart"><div class="chart__head"><h3>Tilleggsutbytte for regnskapsåret 2025</h3><span class="tag tag--green">Vedtatt</span></div>
        <p><b style="font-size:3rem;letter-spacing:-.05em" data-count="0.70" data-suf=" kr">0</b><br><span class="muted">per aksje</span></p>
        <ul class="checks"><li><span class="ic-box">${ic('check')}</span>Vedtatt i styremøte 3. november 2026</li><li><span class="ic-box">${ic('calendar')}</span>Eksklusive utbytte fra 6. november 2026</li><li><span class="ic-box">${ic('coins')}</span>Utbetalt 20. november 2026</li></ul>
      </div>
    </div>
  </div>

  <div class="tabpanel" role="tabpanel" id="p-4" aria-labelledby="t-4" hidden style="margin-top:2.5rem">
    <div class="grid g-2">
      <div><h3 class="h4" style="margin-bottom:1rem">Siste rapporter</h3><div class="rows">
        ${doc('Kvartalsrapport Q3 2026', MFN + '6e878205-54a4-4001-8044-d55dea3afda6/bouvet-q3-report-2026-no-web.pdf')}
        ${doc('Presentasjon Q3 2026', MFN + 'b91932e7-8624-4ffc-8057-0723c58ab975/presentasjon-q3-2026.pdf')}
        ${doc('Årsrapport 2025', MFN + 'f2b96f49-fedb-401f-bfcd-e2de573afc03/bouvet-annual-report-2025-no.pdf')}
      </div></div>
      <div><h3 class="h4" style="margin-bottom:1rem">Bærekraft og styring</h3><div class="rows">
        ${doc('Rapport åpenhetsloven 2025', INV + '/_/attachment/inline/c61a0180-533e-4a70-8385-7f79a9835514:568d0938813e5adda628278c0532ee8c29f97a44/Bouvet%20Transparency%20Act%20report%202025%20NO.pdf')}
        ${doc('Likestillingsredegjørelse 2025', INV + '/_/attachment/inline/cd2eaf5d-8d87-4801-8799-9c6d28490cd5:f146c100623fad8cd07cb77e915a500527a82eac/Bouvet%20Equality%20statement%202025%20NO.pdf')}
        ${doc('Godtgjørelsesrapport ledende personer 2025', INV + '/_/attachment/inline/484228eb-ac89-47c1-b98f-8bdd9c8a60d0:f2ee07eba068d4527d53c7ade0008893408a765f/Bouvet%20Remuneration%20report%202025%20NO.pdf')}
      </div></div>
    </div>
  </div>

  <div class="tabpanel" role="tabpanel" id="p-5" aria-labelledby="t-5" hidden style="margin-top:2.5rem">
    <div class="rows">
      ${[['20', 'nov', 'Utbetaling av tilleggsutbytte (0,70 kr per aksje)', 'Utbytte'], ['06', 'nov', 'Aksjen handles eksklusive tilleggsutbytte', 'Utbytte'], ['03', 'nov', 'Styremøte – vedtak om tilleggsutbytte for 2025', 'Styret'], ['13', 'mai', 'Ordinær generalforsamling i Bouvet ASA', 'Generalforsamling']].map(([d, m, t, c]) => `<div class="row" style="grid-template-columns:110px 1fr auto"><span class="row__date"><b>${d}</b><span>${m} 2026</span></span><span class="row__title">${t}</span><span class="tag">${c}</span></div>`).join('')}
    </div>
    <div class="note" style="margin-top:1.5rem">${ic('bell')}<div>Kommende rapporteringsdatoer publiseres i finanskalenderen på Oslo Børs. <a class="link" href="#" data-modal="m-ir">Få varsel når de kommer ${ic('arrow-right')}</a></div></div>
  </div>
</div></section>

<section class="section section--alt"><div class="wrap split" style="align-items:start">
  <div class="stack-lg">
    <span class="eyebrow rv">Generalforsamling 2026</span>
    <h2 class="h2" data-split>Ordinær generalforsamling ble avholdt 13. mai 2026</h2>
    <div class="rows rv">
      ${doc('Innkalling generalforsamling', INV + '/_/attachment/inline/489e85c1-845f-4195-9fb4-59d77e919dce:310abfd84dd761f6607c30cb3f422df6639e4cd3/Innkalling%20Generalforsamling.pdf')}
      ${doc('Sak 1 – Påmelding og fullmakt', INV + '/_/attachment/inline/5bf7f25c-e184-4fc1-aacf-2d223004dce2:a7aea70dcf57ddf9d2664da6bb28f5528a078d8f/Sak%201%20-%20P%C3%A5melding%20og%20fullmakt.pdf')}
      ${doc('Sak 4 – Valgkomiteens innstilling', INV + '/_/attachment/inline/6bfcd83b-36c1-4ab0-bad8-a12ac19d43e9:70f1bf7ded5cf50dbc54b31bbcfe2d32f2572d47/Sak%204%20-%20Valgkom%20innstilling.pdf')}
      ${doc('Sak 9 – Godtgjørelsesrapport', INV + '/_/attachment/inline/61762329-7a23-4b51-adc4-fb0bc8469f86:f2ee07eba068d4527d53c7ade0008893408a765f/Sak%209%20-%20Bouvet%20Remuneration%20report%20NO.pdf')}
    </div>
  </div>
  <div class="stack-lg">
    <span class="eyebrow rv">Virksomhetsstyring</span>
    <div class="acc rv">
      <details open><summary>IR-policy <span class="pm">${ic('plus')}</span></summary><div class="acc__body"><p>For at markedsaktørene skal kunne danne seg et best mulig bilde av Bouvet, kommuniserer selskapet åpent om forhold som er relevante for den finansielle stillingen og fremtidige utviklingen.</p><p>Kurssensitiv informasjon gis samtidig til markedet gjennom meldingssystemet ved Oslo Børs.</p></div></details>
      <details><summary>Kontaktpersoner <span class="pm">${ic('plus')}</span></summary><div class="acc__body"><p>Finansdirektør er selskapets primære talsperson for finansiell informasjon som kvartals- og årsrapporter. For vesentlige kontraktsinngåelser og andre kurssensitive opplysninger er kommunikasjonssjef primær kontaktperson.</p></div></details>
      <details><summary>Guidance <span class="pm">${ic('plus')}</span></summary><div class="acc__body"><p>Bouvet offentliggjør ikke prognoser for nøkkeltall for kommende perioder, men baserer kommentarer på en forventet generell markedsutvikling.</p></div></details>
      <details><summary>Eierstyring og selskapsledelse <span class="pm">${ic('plus')}</span></summary><div class="acc__body"><p>For informasjon om eierstyring og selskapsledelse, se <a href="${MFN}f2b96f49-fedb-401f-bfcd-e2de573afc03/bouvet-annual-report-2025-no.pdf">årsrapporten for 2025</a>.</p></div></details>
      <details><summary>Meglerhus som følger Bouvet <span class="pm">${ic('plus')}</span></summary><div class="acc__body"><p><b>Arctic Securities</b> – Halvor Aasen Dybdahl, Kristian Spetalen</p><p><b>ABG Sundal Collier</b> – Øystein Lodgaard</p></div></details>
    </div>
  </div>
</div></section>

<section class="section"><div class="wrap">
  ${head('Kontakt', 'Investorkontakter')}
  <div class="grid g-2" data-stagger>
    <div class="person"><span class="avatar">PT</span><div><b>Per Gunnar Tronsli</b><span>Administrerende direktør, Bouvet ASA</span><br><a href="tel:+4790020622">+47 900 20 622</a></div></div>
    <div class="person">${img('steffen-garder', 'Steffen Garder')}<div><b>Steffen Garder</b><span>Finansdirektør, Bouvet ASA</span><br><a href="tel:+4793099940">+47 930 99 940</a></div></div>
  </div>
</div></section>
`,
};
