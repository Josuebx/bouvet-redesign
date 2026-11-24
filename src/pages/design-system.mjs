import { ic, img, phero, orbit } from '../parts.mjs';
import { ICON_GROUPS } from '../icons.mjs';

const C = [
  ['Brand', [['Midnight', '#11133C', '--midnight', 'Primær. Tekst, mørke flater, hover-fyll'], ['Midnight 2', '#1C1F52', '--midnight-2', 'Løftet flate på mørk bakgrunn'], ['Midnight 3', '#2A2E6B', '--midnight-3', 'Ikonfelt og tags på mørk'], ['Green', '#97FFB3', '--green', 'Aksent. CTA, fokus på mørk, uthevet ord'], ['Green deep', '#1A6B3A', '--green-deep', 'Aksenttekst på lys bakgrunn (AA)']]],
  ['Flater', [['Creme light', '#FCF8F3', '--creme-light', 'Sidebakgrunn'], ['Sand', '#F4EAD9', '--sand', 'Alternerende seksjoner'], ['Creme', '#F9EAD4', '--creme', 'Illustrasjonsbakgrunn'], ['White', '#FFFFFF', '--white', 'Kort og skjemafelt'], ['Baby blue', '#EDF5FA', '--baby-blue', 'Info-notiser, tags']]],
  ['Støtte', [['Orange', '#F9A86F', '--orange', 'Podcast, markører, highlights'], ['Orange soft', '#F9D4BB', '--orange-soft', 'Tag-bakgrunn'], ['Super blue', '#0617BF', '--super-blue', 'Lenke-hover, titler i kort'], ['Sky blue', '#1D43C6', '--sky-blue', 'Fokusring'], ['Hal red', '#EB1D4B', '--red', 'Feil og validering']]],
];
const TYPE = [
  ['Display', '--fs-display · 600 · -0.04em', '<span class="display" style="font-size:clamp(2.4rem,4vw,4.2rem)">Fremtidens samfunn</span>'],
  ['H1', '--fs-h1 · 600 · -0.035em', '<span class="h1">Vi jobber med</span>'],
  ['H2', '--fs-h2 · 600 · -0.032em', '<span class="h2">Våre prosjekter</span>'],
  ['H3', '--fs-h3 · 600 · -0.028em', '<span class="h3">Kunstig intelligens</span>'],
  ['H4', '1.15rem · 600 · -0.015em', '<span class="h4">Systemutvikling</span>'],
  ['Lead', '--fs-lead · 400 · 1.55', '<span class="lead">Sammen med kundene skaper vi digitale løsninger.</span>'],
  ['Body', '1rem · 400 · 1.6', '<span>Nærhet til oppdragsgiverne er avgjørende for gode løsninger.</span>'],
  ['Eyebrow', '0.75rem · 600 · +0.12em · versaler', '<span class="eyebrow">Aktuelt nå</span>'],
];
const PRINCIPLES = [
  ['layers', 'Konsistens', 'Samme farger, typografi, knapper og ikoner overalt – og samme element gjør alltid det samme. Alle sider bygges av de samme komponentene.'],
  ['compass', 'Gjenkjennelighet', 'Menyen ligger øverst, logoen leder til forsiden, og lenker ser ut som lenker. Vi bryter ikke konvensjoner uten grunn.'],
  ['check', 'Tilbakemelding', 'Hover, fokus, lasting, feil og suksess har alle en tydelig tilstand. Skjema viser feil inline og bekrefter innsending med animasjon.'],
  ['shuffle', 'Fleksibilitet', 'Flere veier til målet: meny, søk, chips, tabs og lenker i innholdet. Alt fungerer med mus, tastatur og berøring.'],
  ['command', 'Effektivitet', 'Nye brukere får tydelige CTA-er; erfarne kan bruke ⌘K-søk, piltaster i tabs og Esc for å lukke.'],
  ['eye', 'Tilgjengelighet', 'AA-kontrast, 44 px trykkflater, synlig fokusring, skip-lenke, aria-merking og respekt for «redusert bevegelse».'],
];

export default {
  slug: 'design-system', file: 'design-system',
  title: 'Design system – Bouvet',
  desc: 'Farger, typografi, ikoner, komponenter og bevegelse for Bouvet.',
  body: `
${phero({
  crumb: 'Design system', eyebrow: 'Bouvet DS · v1.0',
  title: 'Ett system. <span class="hl">Alle</span> flater.',
  lead: 'Byggeklossene bak bouvet.no – bygget på Bouvets egen palett og Inter. Klikk på en farge eller et ikon for å kopiere.',
  art: orbit(['design', 'layers', 'spark', 'check', 'eye', 'command']),
})}

<section class="section" style="padding-top:2rem"><div class="wrap ds-layout">
  <nav class="ds-nav" aria-label="Design system">
    ${['prinsipper:Prinsipper', 'farger:Farger', 'typografi:Typografi', 'rom:Rom og form', 'ikoner:Ikoner', 'knapper:Knapper og lenker', 'skjema:Skjema', 'kort:Kort og lister', 'bevegelse:Bevegelse', 'popup:Popup'].map(s => { const [h, l] = s.split(':'); return `<a href="#${h}">${l}</a>`; }).join('')}
  </nav>
  <div>
    <section class="ds-sec" id="prinsipper"><h2 class="h3">Prinsipper</h2><p>Seks UI-prinsipper styrer alle valg – fra fargebruk til mikro-interaksjoner.</p>
      <div class="grid g-3 svc-grid" data-stagger>${PRINCIPLES.map(([i, t, d], k) => `<div class="card svc${k === 2 ? ' is-featured' : ''}" tabindex="0"><span class="card__icon">${ic(i)}</span><h3 class="h4">${t}</h3><p>${d}</p></div>`).join('')}</div>
    </section>

    <section class="ds-sec" id="farger"><h2 class="h3">Farger</h2><p>Midnight og Creme bærer flatene, Green er aksenten som kun brukes for handling og fremheving. Kontrast: Midnight på Creme light 16.8:1, Green på Midnight 14.6:1 – begge godt over WCAG AAA.</p>
      ${C.map(([g, list]) => `<h3 class="h4" style="margin:1.5rem 0 1rem">${g}</h3><div class="swatches">${list.map(([n, hex, v, use]) => `<button class="swatch" data-copy="${hex}"><div class="swatch__c" style="background:${hex}${hex === '#FFFFFF' || hex === '#FCF8F3' ? ';box-shadow:inset 0 -1px 0 var(--line)' : ''}"><span>${hex}</span></div><div class="swatch__m"><b>${n}</b><code>${v}</code><br><span class="muted">${use}</span></div></button>`).join('')}</div>`).join('')}
    </section>

    <section class="ds-sec" id="typografi"><h2 class="h3">Typografi</h2><p>Inter (variabel, 400–700) med stram sporing på titler og «tall i tabell» for nøkkeltall. Skala med clamp() – flytende mellom mobil og desktop.</p>
      ${TYPE.map(([n, spec, ex]) => `<div class="type-row"><div><b>${n}</b><br><code>${spec}</code></div><div>${ex}</div></div>`).join('')}
    </section>

    <section class="ds-sec" id="rom"><h2 class="h3">Rom og form</h2><p>4-punkts grid, generøs seksjonsluft og myke radier. Skygger brukes sparsomt – mest for løft på hover.</p>
      <table class="token-table"><thead><tr><th>Token</th><th>Verdi</th><th>Bruk</th></tr></thead><tbody>
        ${[['--s-2', '8px', 'Ikon ↔ tekst'], ['--s-4', '16px', 'Skjemafelt, kort-innhold'], ['--s-6', '32px', 'Kort-padding'], ['--s-8', '64px', 'Blokker'], ['--section', '72–128px', 'Seksjonsavstand'], ['--r-sm', '8px', 'Knapper, felt'], ['--r-lg', '20px', 'Kort, bilder'], ['--r-xl', '28px', 'Hero, bånd, popup'], ['--sh-1', 'subtil', 'Kort i hvile'], ['--sh-3', 'dyp', 'Hover-løft, popup']].map(r => `<tr><td><code>${r[0]}</code></td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('')}
      </tbody></table>
      <div class="demo" style="margin-top:1.5rem">${['--r-sm', '--r-md', '--r-lg', '--r-xl', '--r-pill'].map(r => `<div style="width:88px;height:64px;background:var(--midnight);border-radius:var(${r});display:grid;place-items:center;color:var(--green);font-size:.7rem;font-weight:600">${r}</div>`).join('')}</div>
    </section>

    <section class="ds-sec" id="ikoner"><h2 class="h3">Ikoner</h2><p>Egen linje-ikonserie på 24 × 24 grid, 1,75 strek, runde ender og 2 px luft. Gruppert etter seksjonen de hører til. På hover vris ikonet –10° og blir grønt.</p>
      ${ICON_GROUPS.map(g => `<div class="icon-group"><h4 class="h4">${ic(Object.keys(g.icons)[0])} ${g.name} <span class="tag">${Object.keys(g.icons).length}</span></h4><p>${g.desc}</p><div class="icon-grid">${Object.keys(g.icons).map(k => `<button class="icon-tile" data-copy="${k}">${ic(k)}<span>${k}</span></button>`).join('')}</div></div>`).join('')}
    </section>

    <section class="ds-sec" id="knapper"><h2 class="h3">Knapper og lenker</h2><p>Primærknappen er grønn og fylles med midnight fra der pekeren kommer inn. Maks én primærknapp per visning. Min. høyde 48 px.</p>
      <div class="demo"><button class="btn">Primær ${ic('arrow-right')}</button><button class="btn btn--dark">Mørk ${ic('arrow-right')}</button><button class="btn btn--ghost">Sekundær</button><button class="btn btn--sm">Liten</button><a class="link" href="#knapper">Tekstlenke ${ic('arrow-right')}</a><button class="icon-btn" aria-label="Ikonknapp">${ic('arrow-right')}</button></div>
      <div class="demo demo--dark on-dark" style="margin-top:1rem"><button class="btn">Primær ${ic('arrow-right')}</button><button class="btn btn--ghost">Sekundær</button><a class="link link--accent" href="#knapper">Aksentlenke ${ic('arrow-right')}</a></div>
      <div class="demo" style="margin-top:1rem"><span class="tag">${ic('article')}Artikkel</span><span class="tag tag--green">Guide</span><span class="tag tag--orange">${ic('podcast')}Podcast</span><span class="tag tag--dark">Kunde</span><button class="chip" aria-pressed="true">Valgt chip</button><button class="chip" aria-pressed="false">Chip <span class="count">12</span></button></div>
    </section>

    <section class="ds-sec" id="skjema"><h2 class="h3">Skjema</h2><p>Etikett alltid over feltet, feilmelding inline med ikon. Fokus gir blå ring, feil gir rød ramme og en liten rist.</p>
      <div class="demo" style="display:block"><form class="form-grid" data-form data-success="Skjemaet er gyldig – alt ser bra ut">
        <div class="field"><label for="ds-1">Navn</label><input class="input" id="ds-1" required placeholder="Ola Nordmann"><span class="err">${ic('alert')}Dette feltet må fylles ut</span></div>
        <div class="field is-invalid"><label for="ds-2">E-post (feiltilstand)</label><input class="input" id="ds-2" value="ola@" type="email" required><span class="err">${ic('alert')}Skriv inn en gyldig e-postadresse</span></div>
        <div class="field"><label for="ds-3">Fagområde</label><select class="select" id="ds-3"><option>Kunstig intelligens</option><option>Design</option></select></div>
        <div class="field"><span class="label">Valg</span><div class="radio-cards"><label><input type="radio" name="dsr" checked>Norsk</label><label><input type="radio" name="dsr">English</label></div></div>
        <div class="field full"><label class="check"><input type="checkbox" checked> Avkrysningsboks med tilpasset stil</label></div>
        <div class="full"><button class="btn" type="submit">Test validering ${ic('arrow-right')}</button></div>
      </form></div>
    </section>

    <section class="ds-sec" id="kort"><h2 class="h3">Kort og lister</h2><p>Tjenestekortet vippes –2,5° og blir midnight på hover – en direkte referanse til det skrå kortet i stilreferansen. Rader fylles nedenfra med midnight.</p>
      <div class="grid g-3 svc-grid"><a class="card svc" href="#kort"><span class="card__icon">${ic('cloud')}</span><h3 class="h4">Tjenestekort</h3><p>Hover meg – kortet vippes og inverteres.</p><span class="card__more">Les mer ${ic('arrow-right')}</span></a>
        <a class="mcard" href="#kort"><div class="mcard__img">${img('proj-natur', '')}<span class="mcard__go">${ic('arrow-up-right')}</span></div><span class="tag tag--dark">Mediekort</span><h3>Bildet zoomer, pil spretter inn</h3></a>
        <div class="person" style="align-self:start"><span class="avatar">BV</span><div><b>Personkort</b><span>Løftes 4 px på hover</span></div></div></div>
      <div class="rows" style="margin-top:1.5rem"><a class="row" href="#kort" onclick="return false"><span class="row__date"><b>03</b><span>des</span></span><span><span class="row__title">Listerad – arrangement</span><span class="row__sub">${ic('pin')}Oslo</span></span><span class="tag">Frokostseminar</span><span class="row__cta">${ic('arrow-right')}</span></a></div>
    </section>

    <section class="ds-sec" id="bevegelse"><h2 class="h3">Bevegelse</h2><p>Bevegelse forklarer – den pynter ikke. Innhold glir opp ved scroll, titler avsløres ord for ord, og grafikk looper rolig i bakgrunnen. Alt slås av ved «redusert bevegelse».</p>
      <table class="token-table"><thead><tr><th>Token</th><th>Verdi</th><th>Bruk</th></tr></thead><tbody>
        <tr><td><code>--t-fast</code></td><td>180 ms</td><td>Farge, opasitet</td></tr><tr><td><code>--t-base</code></td><td>320 ms</td><td>Hover, løft, tabs</td></tr><tr><td><code>--t-slow</code></td><td>640 ms</td><td>Ikon-sprett, paneler</td></tr>
        <tr><td><code>--ease-out</code></td><td>cubic-bezier(.22,1,.36,1)</td><td>Standard for alt som kommer inn</td></tr><tr><td><code>--ease-spring</code></td><td>cubic-bezier(.34,1.56,.64,1)</td><td>Ikoner, popup, piler</td></tr>
      </tbody></table>
      <div class="demo ease-demo" style="display:grid;margin-top:1.5rem"><p class="small muted">Hold musepekeren over boksen</p>${[['ease-out', 'var(--ease-out)'], ['ease-in-out', 'var(--ease-in-out)'], ['ease-spring', 'var(--ease-spring)']].map(([n, e]) => `<div><code>${n}</code><span class="track"><span class="ball" style="transition:left 900ms ${e}"></span></span></div>`).join('')}</div>
      <h3 class="h4" style="margin:2rem 0 1rem">Loopende grafikk</h3>
      <div class="grid g-3"><div class="demo demo--dark" style="justify-content:center;aspect-ratio:1">${orbit(['ai', 'data', 'cloud', 'security', 'code', 'design'])}</div>
      <div class="demo demo--dark" style="position:relative;overflow:hidden;aspect-ratio:1"><svg viewBox="0 0 640 240" style="width:140%;margin-left:-20%" class="hero__waves" aria-hidden="true"><path class="wave-a" d="M-20 182C70 182 96 92 176 86s118 98 206 88 106-128 190-136 92 34 92 34"/><path class="wave-b" d="M-20 214C82 214 106 128 188 122s116 94 204 84 104-120 186-128 82 30 82 30"/></svg></div>
      <div class="demo" style="justify-content:center;aspect-ratio:1;position:relative"><div style="position:relative;width:124px;height:124px"><div class="hero__ring" style="position:static;width:124px;height:124px"><svg class="ring" viewBox="0 0 124 124"><defs><path id="ringp2" d="M62 62m-50 0a50 50 0 1 1 100 0a50 50 0 1 1-100 0"/></defs><circle cx="62" cy="62" r="61" fill="#f4ead9"/><text><textPath href="#ringp2">Bouvet · Design system · Bouvet · DS · </textPath></text></svg><div class="ring-core"><img src="/assets/bouvet-o.svg" alt=""></div></div></div></div></div>
    </section>

    <section class="ds-sec" id="popup" style="border:0"><h2 class="h3">Popup</h2><p>Alle skjema åpnes i en popup som spretter opp mens bakgrunnen blurres (14 px). Fokus fanges i dialogen, Esc lukker, og innsending gir en animert bekreftelse.</p>
      <div class="demo"><button class="btn" data-modal="m-contact">Kontakt ${ic('arrow-right')}</button><button class="btn btn--dark" data-modal="m-newsletter">Nyhetsbrev</button><button class="btn btn--ghost" data-modal="m-event" data-title="Teknologi og trender som vil prege 2027" data-meta="10. des · Stavanger">Påmelding</button><button class="btn btn--ghost" data-modal="m-apply" data-title="Erfaren UX-/produktdesigner" data-meta="Drammen">Søknad</button><button class="btn btn--ghost" data-modal="m-ir">Børsmeldinger</button><button class="btn btn--ghost" data-modal="m-search">${ic('search')} Søk ⌘K</button></div>
    </section>
  </div>
</div></section>
`,
};
