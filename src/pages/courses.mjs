import { ic, img, head, row, phero, newsletterBand } from '../parts.mjs';
import { COURSES, EVENTS, PACKAGES } from '../data.mjs';

const K = 'https://www.bouvet.no';
const NEWS = [
  ['Skreddersydde kurs gir varig effekt', 'For Statens vegvesen er bedriftsinterne, skreddersydde kurs en strategisk investering, tett koblet til virksomhetens behov.', 'kurs-eksamen', K + '/bouvet-deler/skreddersydde-kurs-gir-varig-effekt'],
  ['Bouvet sine kurslokaler', 'Kursavdelingen inviterer kundene til nyoppussede lokaler.', 'kurslokaler', K + '/kurs/kurslokaler'],
  ['Produktledelse og verdiskaping', 'Digital produktutvikling er komplekst. Produktledelse handler om å lede verdiskapningen.', 'kurs-postit', K + '/bouvet-deler/produktledelse-og-verdiskaping'],
  ['Dette er SNOMED CT', 'En omfattende samling medisinske begreper som brukes over hele verden – tenk på det som en stor ordbok.', 'kurs-snomed', K + '/kurs/dette-er-snomed-ct'],
  ['Skriver du fortsatt kode uten å tenke heksagonal arkitektur?', 'Etter en kort presentasjon er det alltid flere som strekker armen i været.', 'workshop', K + '/kurs/skriver-du-fortsatt-kode-uten-a-tenke-heksagonal-arkitektur'],
  ['Teknologiske muligheter og menneskelige begrensninger', 'Hvordan kan du praktisk lede innovasjon i din enhet?', 'kurs-innovasjon', K + '/kurs/artikler/teknologiske-muligheter-og-menneskelige-begrensninger'],
];

export default {
  slug: 'kurs', file: 'kurs',
  title: 'Kurs – Bouvet',
  desc: 'Kurs, frokostseminarer og sertifisering innen smidig, utvikling, arkitektur og fremtidens teknologier.',
  body: `
${phero({
  crumb: 'Kurs', eyebrow: 'Bouvet Kurs',
  title: 'Vi gir deg kompetanse for <span class="hl">fremtiden</span>',
  lead: 'Vår kursvirksomhet er en møteplass for mennesker som søker kunnskap og inspirasjon i arbeidet med digitalisering – med instruktører som har lang praktisk og teoretisk erfaring.',
  actions: `<button class="search-trigger" data-modal="m-search" style="background:var(--creme-light);color:var(--midnight);height:52px;padding:0 1rem;min-width:min(100%,340px);justify-content:flex-start">${ic('search')} Søk etter kurs …</button><a class="link link--accent" href="#kommende">${ic('calendar')} Kurskalender</a><a class="link link--accent" href="#pakker">${ic('layers')} Kursoversikt</a>`,
  art: `<div style="position:relative;width:100%;aspect-ratio:1"><div style="position:absolute;inset:0;border-radius:32px;overflow:hidden;transform:rotate(4deg)">${img('kurs-deltagere', 'Kursdeltagere')}</div><div class="hero__badge" style="left:-1.5rem;bottom:1rem"><span class="dot">${ic('coffee')}</span><div><strong>Frokostseminarer</strong><span>5 byer før jul</span></div></div></div>`,
})}

<section class="section section--alt" id="kommende"><div class="wrap">
  ${head('Kurskalender', 'Kommende kurs', 'Klikk på et kurs for å melde deg på direkte.', `<a class="link rv" href="${K}/kurs/kalender">Full kurskalender ${ic('arrow-up-right')}</a>`)}
  <div class="rows" data-stagger>${COURSES.map(c => row(c)).join('')}</div>
</div></section>

<section class="section" id="pakker"><div class="wrap">
  ${head('Kursoversikt', 'Finn riktig kurs for deg og teamet', '', `<button class="btn rv" data-modal="m-contact" data-area="Kurs">Bestill bedriftsinternt kurs ${ic('arrow-right')}</button>`)}
  <div class="grid g-3" data-stagger>
    ${PACKAGES.map(p => `<a class="mcard" href="${K}/kurs/kategorier"><div class="mcard__img">${img(p.img, '')}<span class="card__icon" style="position:absolute;left:14px;top:14px;z-index:2;background:var(--green)">${ic(p.icon)}</span><span class="mcard__go">${ic('arrow-up-right')}</span></div><h3>${p.t}</h3><p>${p.d}</p></a>`).join('')}
  </div>
</div></section>

<section class="section section--dark"><div class="wrap">
  ${head('Seminarer', 'Møt arbeidsdagen sammen med oss')}
  <div class="grid g-2" data-stagger>
    <div class="card" style="background:var(--midnight-2);color:var(--creme-light);padding:0;overflow:hidden">
      <div class="mcard__img" style="border-radius:0;aspect-ratio:2/1">${img('god-morgen', 'God morgen med Bouvet')}</div>
      <div style="padding:2rem" class="stack"><span class="tag tag--green">${ic('coffee')} Frokostseminarer</span><h3 class="h3">Få en god morgen med Bouvet</h3><p style="color:var(--text-on-dark-muted)">Få opp humør og energi med god frokost og god kaffe, og topp det med en faglig oppkvikker innen en rekke ulike tema.</p><a class="btn" href="#frokost">Se kommende frokostseminarer ${ic('arrow-right')}</a></div>
    </div>
    <div class="card" style="background:var(--midnight-2);color:var(--creme-light);padding:0;overflow:hidden">
      <div class="mcard__img" style="border-radius:0;aspect-ratio:2/1">${img('bouvet-deler-banner', 'Bouvet deler')}</div>
      <div style="padding:2rem" class="stack"><span class="tag tag--orange">${ic('moon')} Dags- og kveldsseminarer</span><h3 class="h3">Bouvet Deler – rundt om i hele landet</h3><p style="color:var(--text-on-dark-muted)">Ny kunnskap om fag og teknologi skaper fremdrift. Våre fageksperter deler av sin kunnskap og erfaring.</p><a class="btn" href="${K}/kurs/seminarer-dagogkveld">Se kommende seminarer ${ic('arrow-up-right')}</a></div>
    </div>
  </div>
</div></section>

<section class="section" id="frokost"><div class="wrap">
  ${head('Frokostseminarer', 'Kommende frokostseminarer')}
  <div class="rows" data-stagger>${EVENTS.map(e => row(e)).join('')}</div>
</div></section>

<section class="section section--alt"><div class="wrap">
  ${head('Nyheter om kurs', 'Lærdom å hente for alle')}
  <div class="grid g-3" data-stagger>
    ${NEWS.map(([t, d, im, u]) => `<a class="mcard" href="${u}"><div class="mcard__img">${img(im, '')}<span class="mcard__go">${ic('arrow-up-right')}</span></div><h3>${t}</h3><p>${d}</p></a>`).join('')}
  </div>
</div></section>

<section class="section"><div class="wrap split">
  <div class="stack-lg">
    <span class="eyebrow rv">Kontakt kurs</span>
    <h2 class="h2" data-split>Spørsmål om kurs eller bedriftsinterne opplegg?</h2>
    <ul class="checks" data-stagger>
      <li><span class="ic-box">${ic('mail')}</span><a class="link" href="mailto:kurs@bouvet.no">kurs@bouvet.no</a></li>
      <li><span class="ic-box">${ic('phone')}</span><a class="link" href="tel:+4723406050">+47 23 40 60 50</a></li>
      <li><span class="ic-box">${ic('pin')}</span>Sørkedalsveien 8, 0369 Oslo</li>
    </ul>
    <div class="rv"><button class="btn" data-modal="m-contact" data-area="Kurs">Send oss en forespørsel ${ic('arrow-right')}</button></div>
  </div>
  <div class="photo rv-scale">${img('kurslokaler', 'Bouvets kurslokaler')}</div>
</div></section>

${newsletterBand()}
`,
};
