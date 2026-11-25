import { ic, img, head, phero, bleed, eventRow, plainCard, reach, glyphAt, newsletter, PLUS, ARR, pad } from '../parts.mjs';
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
  title: 'Vi gir deg kompetanse for <span class="accent">fremtiden</span>',
  lead: 'Vår kursvirksomhet er en møteplass for mennesker som søker kunnskap og inspirasjon i arbeidet med digitalisering – med instruktører som har lang praktisk og teoretisk erfaring.',
  actions: `<a class="btn btn--lg" href="#kommende">${PLUS} Kurskalender</a><button class="btn btn--line btn--lg" data-modal="m-search">${ic('search')} Søk etter kurs</button>`,
})}
${bleed('kurs-deltagere', 'Kursdeltagere')}

<section class="sec" id="kommende"><div class="wrap">
  ${head('Kurskalender', 'Kommende kurs', 'Velg et kurs for å melde deg på direkte.', `<a class="btn btn--line" href="${K}/kurs/kalender">Full kurskalender ${ic('arrow-up-right', 'i-diag')}</a>`)}
  <div class="idx">${COURSES.map(eventRow).join('')}</div>
</div></section>

<section class="sec sec--rule" id="pakker"><div class="wrap">
  ${head('Kursoversikt', 'Finn riktig kurs for deg og teamet', '', `<button class="btn" data-modal="m-contact" data-area="Kurs">${PLUS} Bestill bedriftsinternt kurs</button>`)}
  <div class="cards">
    ${PACKAGES.map((p, i) => `<a class="card" href="${K}/kurs/kategorier"><div class="media media--4x3">${img(p.img, '')}</div><div class="card__meta"><span>${pad(i + 1)}</span><i></i><span>Kursområde</span></div><h3>${p.t}</h3><p>${p.d}</p></a>`).join('')}
  </div>
</div></section>

<section class="sec sec--deep"><div class="wrap">
  ${head('Seminarer', 'Møt arbeidsdagen sammen med oss')}
  <div class="grid g-2">
    <a class="feature" href="#frokost" style="grid-template-columns:1fr"><div class="media">${img('god-morgen', 'God morgen med Bouvet')}</div><div class="feature__body"><div><span class="eyebrow">Frokostseminarer</span><h3 class="h3" style="margin-top:1rem;font-size:1.5rem;font-weight:400">Få en god morgen med Bouvet</h3><p class="muted" style="margin-top:.75rem">God frokost, god kaffe og en faglig oppkvikker innen en rekke ulike tema.</p></div><span class="link link--mint">Se kommende frokostseminarer ${ic('arrow-right')}</span></div></a>
    <a class="feature" href="${K}/kurs/seminarer-dagogkveld" style="grid-template-columns:1fr"><div class="media">${img('bouvet-deler-banner', 'Bouvet deler')}</div><div class="feature__body"><div><span class="eyebrow">Dags- og kveldsseminarer</span><h3 class="h3" style="margin-top:1rem;font-size:1.5rem;font-weight:400">Bouvet Deler – rundt om i hele landet</h3><p class="muted" style="margin-top:.75rem">Ny kunnskap om fag og teknologi skaper fremdrift. Våre fageksperter deler av sin erfaring.</p></div><span class="link link--mint">Se kommende seminarer ${ic('arrow-right')}</span></div></a>
  </div>
</div></section>

<section class="sec" id="frokost"><div class="wrap">
  ${head('Frokostseminarer', 'Kommende frokostseminarer')}
  <div class="idx">${EVENTS.map(eventRow).join('')}</div>
</div></section>

<section class="sec sec--rule"><div class="wrap">
  ${head('Nyheter om kurs', 'Lærdom å hente for alle')}
  <div class="cards">${NEWS.map(([t, d, im, u]) => plainCard(t, d, im, u, 'Kurs')).join('')}</div>
</div></section>

${reach({
  title: 'Spørsmål om kurs?',
  text: 'Ønsker dere et bedriftsinternt opplegg eller har spørsmål om et kurs? Send oss en forespørsel.',
  id: 'kurs-kontakt',
  contacts: `<ul class="checks"><li><span class="num">E</span><a href="mailto:kurs@bouvet.no">kurs@bouvet.no</a></li><li><span class="num">T</span><a href="tel:+4723406050">+47 23 40 60 50</a></li><li><span class="num">A</span>Sørkedalsveien 8, 0369 Oslo</li></ul>`,
})}
`,
};
