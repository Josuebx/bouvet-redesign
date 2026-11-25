import { ic, img, phero, facts, mosaic, idxRow, glyph, PLUS, ARR } from '../parts.mjs';
import { ICON_GROUPS } from '../icons.mjs';
import { GLYPH_NAMES } from '../glyphs.mjs';

const C = [
  ['Flater', [['Midnight', '#11133C', '--midnight', 'Primær mørk flate, tekst på lys'], ['Midnight deep', '#0C0E2E', '--midnight-deep', 'Alternerende mørke seksjoner, footer'], ['Creme light', '#FCF8F3', '--creme-light', 'Lys seksjon, tekst på mørk'], ['Ink', '#010203', '--ink', 'Dypeste kontrast']]],
  ['Aksent', [['Green', '#97FFB3', '--mint', 'Eneste aksent: knapper, markør, fremheving']]],
  ['Fliser', [['Grey', '#F2F2F2', '--grey', 'Standard flis'], ['White', '#FFFFFF', '--white', 'Flis, kontrast'], ['Blue gray', '#C3D5E1', '--blue-gray', 'Flis, diagram 2025'], ['Creme', '#F9EAD4', '--creme', 'Flis, varm variant']]],
];
const TYPE = [
  ['Display', 'Inter 400 · -0.042em · 1.02', '<span class="display" style="font-size:clamp(2.2rem,3.6vw,4rem)">Fremtidens samfunn</span>'],
  ['H1', 'Inter 400 · -0.035em', '<span class="h1">Vi jobber med</span>'],
  ['H2', 'Inter 400 · -0.035em', '<span class="h2">Våre prosjekter</span>'],
  ['H3', 'Inter 500 · -0.015em', '<span class="h3">Kunstig intelligens</span>'],
  ['Lead', 'Inter 400 · 1.6 · 62 % opasitet', '<span class="lead">Sammen med kundene skaper vi digitale løsninger.</span>'],
  ['Etikett', 'Inter 500 · 11 px · versaler · +0.09em', '<span class="eyebrow">Hvorfor Bouvet</span>'],
  ['Meta', 'IBM Plex Mono · 11 px', '<span class="num">01 / 09</span>'],
];

export default {
  slug: 'design-system', file: 'design-system',
  title: 'Design system – Bouvet',
  desc: 'Farger, typografi, glyfer, ikoner, komponenter og bevegelse for Bouvet.',
  body: `
${phero({
  crumb: 'Design system', eyebrow: 'Bouvet DS · v4',
  title: 'Sterilt. Seriøst. <span class="accent">Autoritativt.</span>',
  lead: 'Byggeklossene bak bouvet.no – Bouvets egen palett og Inter, rette hjørner, hårlinjer og én aksent. Klikk på en farge for å kopiere.',
  after: facts([['Versjon', '4.0'], ['Hjørner', '0 px'], ['Typografi', 'Inter · IBM Plex Mono'], ['Bevegelse', 'Kun tekst, kun inngang']]),
})}

<section class="sec sec--rule"><div class="wrap ds-layout">
  <nav class="ds-nav" aria-label="Design system">
    ${['farger:Farger', 'typografi:Typografi', 'glyfer:Glyfer', 'fliser:Fliser', 'knapper:Knapper', 'lister:Lister', 'skjema:Skjema', 'ikoner:Ikoner', 'bevegelse:Bevegelse'].map(s => { const [id, l] = s.split(':'); return `<a href="#${id}">${l}</a>`; }).join('')}
  </nav>
  <div>
    <section class="ds-sec" id="farger"><h2 class="h2">Farger</h2><p>Midnight bærer siden. Creme light brukes for lyse seksjoner og skjema. Green er eneste aksent – kun for handling, markører og ett fremhevet ord per overskrift.</p>
      ${C.map(([g, list]) => `<h3 class="eyebrow" style="margin-top:2.5rem;display:flex">${g}</h3><div class="swatches">${list.map(([n, hex, v, use]) => `<button class="swatch" data-copy="${hex}"><div class="swatch__c" style="background:${hex}"></div><div class="swatch__m"><b>${n}</b>${hex} · <code>${v}</code><br><span class="muted">${use}</span></div></button>`).join('')}</div>`).join('')}
    </section>

    <section class="ds-sec" id="typografi"><h2 class="h2">Typografi</h2><p>Inter i lette vekter (400) for overskrifter gir et nøkternt, autoritativt uttrykk. Stram sporing på store grader. Etiketter i versaler med grønn firkant.</p>
      <div style="margin-top:2rem">${TYPE.map(([n, spec, ex]) => `<div class="type-row"><div><b style="font-weight:500">${n}</b><br><code>${spec}</code></div><div>${ex}</div></div>`).join('')}</div>
    </section>

    <section class="ds-sec" id="glyfer"><h2 class="h2">Glyfer</h2><p>Tynne linjemerker (1 px) markerer fliser og steg. De roterer 45° på hover – ingen andre bevegelser.</p>
      <div class="glyph-grid">${GLYPH_NAMES.map(n => `<div title="${n}">${glyph(n)}</div>`).join('')}</div>
    </section>

    <section class="ds-sec" id="fliser"><h2 class="h2">Fliser</h2><p>Kvadratiske fliser i forskjøvet rutenett. På hover skifter flisen til grønn, glyfen roterer og en pil kommer frem.</p>
      <div style="margin-top:2rem">${mosaic([{ t: 'Grey', d: 'Standard flis', href: '#fliser' }, { t: 'Green', d: 'Fremhevet flis', href: '#fliser' }, { t: 'White', d: 'Kontrastflis', href: '#fliser' }, { t: 'Blue gray', d: 'Rolig variant', href: '#fliser' }], { cols: 3, per: 2, label: '<span class="eyebrow">Rutenett 3 × n</span>' })}</div>
    </section>

    <section class="ds-sec" id="knapper"><h2 class="h2">Knapper og lenker</h2><p>Rette hjørner. Primær er grønn og blir creme på hover; plusstegnet roterer, pilen skyves. Sekundær er en hårlinje som fylles grønt.</p>
      <div class="demo"><button class="btn btn--lg">${PLUS} Primær</button><button class="btn btn--line btn--lg">Sekundær ${ARR}</button><button class="btn">${PLUS} Standard</button><button class="btn btn--sm">${PLUS} Liten</button><a class="link" href="#knapper">Tekstlenke ${ic('arrow-right')}</a><button class="circ" aria-label="Forrige">${ic('arrow-left')}</button><button class="circ is-on" aria-label="Neste">${ic('arrow-right')}</button></div>
      <div class="demo demo--light on-light"><button class="btn btn--dark btn--lg">${PLUS} Mørk</button><button class="btn btn--lg">${PLUS} Primær på lys</button><button class="btn btn--line btn--lg">Sekundær</button><span class="tag">Etikett</span><span class="tag tag--mint">Vedtatt</span></div>
    </section>

    <section class="ds-sec" id="lister"><h2 class="h2">Lister</h2><p>Lange innholdsmengder vises som nummererte rader – lett å skanne. På hover tegnes en grønn linje, raden skyves og pilen fylles.</p>
      <div class="idx" style="margin-top:2rem">${idxRow({ n: '01', t: 'Systemutvikling', d: 'Smidig, sikker og skalerbar systemutvikling.', href: '#lister' })}${idxRow({ date: ['03', 'des'], t: 'Hvordan modernisere komplekse systemer?', m: 'Oslo<span class="tag">Frokostseminar</span>', href: '#lister', go: 'plus' })}</div>
    </section>

    <section class="ds-sec" id="skjema"><h2 class="h2">Skjema</h2><p>Kun underlinje, etikett over feltet, feilmelding inline. Skjemaer på mørk flate i lys seksjon – som i referansen.</p>
      <div class="formpanel" style="margin-top:2rem"><form class="form-grid" data-form data-success="Skjemaet er gyldig">
        <div class="field"><label for="ds-1">Navn *</label><input class="input" id="ds-1" required><span class="err">${ic('alert')}Dette feltet må fylles ut</span></div>
        <div class="field is-invalid"><label for="ds-2">E-post (feiltilstand)</label><input class="input" id="ds-2" value="ola@" type="email" required><span class="err">${ic('alert')}Skriv inn en gyldig e-postadresse</span></div>
        <div class="field full"><label for="ds-3">Fagområde</label><select class="select" id="ds-3"><option>Kunstig intelligens</option><option>Design</option></select></div>
        <div class="full"><button class="btn btn--block btn--lg" type="submit">${PLUS} Test validering</button></div>
      </form></div>
    </section>

    <section class="ds-sec" id="ikoner"><h2 class="h2">Ikoner</h2><p>Linjeikoner på 24 × 24, 1,75 strek. Brukes funksjonelt i knapper, lister og skjema – glyfene står for dekor.</p>
      ${ICON_GROUPS.map(g => `<h3 class="eyebrow" style="margin-top:2.5rem;display:flex">${g.name}</h3><div class="icon-grid">${Object.keys(g.icons).map(k => `<button class="icon-cell" data-copy="${k}">${ic(k)}${k}</button>`).join('')}</div>`).join('')}
    </section>

    <section class="ds-sec" id="bevegelse" style="border:0"><h2 class="h2">Bevegelse</h2><p>Kun tekst animeres, og kun ved inngang: ord i overskrifter glir opp bak en maske (900 ms, ease-out), avsnitt toner inn 14 px. Ingen looper, ingen parallakse, ingen bilder i bevegelse. «Redusert bevegelse» slår alt av. Menyen ligger fast øverst.</p>
      <table class="kv" style="margin-top:2rem"><tbody>
        <tr><th>Overskrift</th><td>ord for ord · 38 ms forsinkelse · 900 ms</td></tr>
        <tr><th>Avsnitt</th><td>opasitet + 14 px · 700 ms</td></tr>
        <tr><th>Hover</th><td>farge 360 ms · glyf 45° · pil 3–4 px</td></tr>
        <tr><th>Kurve</th><td><code>cubic-bezier(.22, 1, .36, 1)</code></td></tr>
      </tbody></table>
    </section>
  </div>
</div></section>
`,
};
