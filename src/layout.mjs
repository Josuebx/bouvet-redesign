import { sprite, ic } from './icons.mjs';
import { SERVICES, SEARCH_INDEX } from './data.mjs';

export const NAV = [
  ['vi-jobber-med', 'Vi jobber med'],
  ['bli-en-av-oss', 'Bli en av oss'],
  ['bouvet-deler', 'Bouvet deler'],
  ['investor', 'Investor'],
  ['kurs', 'Kurs'],
  ['om-bouvet', 'Om oss'],
];

export const WAVES = () => '';
export const SCRIBBLE = () => '';
export const RING = () => '';
export const BAND_WAVES = () => '';
export const PHERO_LINES = '';

const field = (id, label, input, err = 'Dette feltet må fylles ut', cls = '') =>
  `<div class="field ${cls}"><label for="${id}">${label}</label>${input}<span class="err" id="${id}-err">${ic('alert')}${err}</span></div>`;

const modal = (id, title, sub, body, success) => `
<div class="modal" id="${id}" role="dialog" aria-modal="true" aria-labelledby="${id}-t" aria-hidden="true">
  <div class="modal__backdrop" data-close></div>
  <div class="modal__dialog">
    <button class="icon-btn modal__close" data-close aria-label="Lukk">${ic('close')}</button>
    <div class="modal__head"><h2 class="h3" id="${id}-t">${title}</h2><p>${sub}</p></div>
    <div class="modal__body">${body}
      <div class="success" role="status"><div class="success__mark"><svg viewBox="0 0 40 40"><path d="M10 21l7 7 14-15"/></svg></div><h3 class="h3">${success[0]}</h3><p class="muted" style="margin:.75rem auto 1.5rem;max-width:26rem">${success[1]}</p><button class="btn btn--dark" data-close>Lukk</button></div>
    </div>
  </div>
</div>`;

const areaOptions = SERVICES.map(s => `<option>${s.title}</option>`).join('');

export const MODALS = () => [
  modal('m-contact', 'La oss snakke', 'Fortell kort hva du trenger, så kobler vi deg med riktig fagperson hos Bouvet.', `
    <form data-form>
      <div class="form-grid">
        ${field('c-name', 'Navn', '<input class="input" id="c-name" name="name" autocomplete="name" required aria-describedby="c-name-err">')}
        ${field('c-org', 'Virksomhet', '<input class="input" id="c-org" name="org" autocomplete="organization" required aria-describedby="c-org-err">')}
        ${field('c-mail', 'E-post', '<input class="input" id="c-mail" type="email" name="email" autocomplete="email" required aria-describedby="c-mail-err">', 'Skriv inn en gyldig e-postadresse')}
        ${field('c-tel', 'Telefon <span class="muted">(valgfritt)</span>', '<input class="input" id="c-tel" type="tel" name="tel" autocomplete="tel" aria-describedby="c-tel-err">', 'Skriv inn et gyldig telefonnummer')}
        ${field('c-area', 'Hva gjelder det?', `<select class="select" id="c-area" name="area" required data-fill="area" aria-describedby="c-area-err"><option value="">Velg fagområde</option>${areaOptions}<option>Kurs</option><option>Annet</option></select>`, 'Velg et fagområde', 'full')}
        ${field('c-msg', 'Melding', '<textarea class="textarea" id="c-msg" name="msg" required placeholder="Hva ønsker dere å oppnå?" aria-describedby="c-msg-err"></textarea>', 'Skriv en kort melding', 'full')}
        <div class="field full">${'<label class="check"><input type="checkbox" required> Jeg godtar at Bouvet behandler opplysningene i henhold til personvernerklæringen.</label>'}<span class="err">${ic('alert')}Du må godta personvernerklæringen</span></div>
      </div>
      <div class="modal__foot"><span class="small">Vi svarer normalt innen én arbeidsdag.</span><button class="btn" type="submit">Send forespørsel ${ic('arrow-right')}</button></div>
    </form>`, ['Takk – vi har mottatt henvendelsen!', 'En av våre rådgivere tar kontakt med deg så snart som mulig.']),

  modal('m-newsletter', 'Hold deg oppdatert på 1, 2, 3', 'Alltid ett tema, null bilder og tre lenker som gjør deg litt klokere – innen teknologi, design, UX, rådgivning og sikkerhet.', `
    <form data-form>
      ${field('n-mail', 'E-post', '<input class="input" id="n-mail" type="email" autocomplete="email" required placeholder="navn@virksomhet.no" aria-describedby="n-mail-err">', 'Skriv inn en gyldig e-postadresse')}
      <div class="field"><span class="label">Hva interesserer deg mest?</span><div class="radio-cards">
        ${['Teknologi', 'Design & UX', 'Rådgivning', 'Sikkerhet', 'AI', 'Kurs'].map((t, i) => `<label><input type="checkbox" name="topic" ${i < 2 ? 'checked' : ''}>${t}</label>`).join('')}
      </div></div>
      <div class="modal__foot"><span class="small">Du kan melde deg av når som helst.</span><button class="btn" type="submit">Meld meg på ${ic('arrow-right')}</button></div>
    </form>`, ['Velkommen ombord!', 'Første utgave lander i innboksen din neste gang vi sender ut. Sjekk gjerne søppelpost-mappen.']),

  modal('m-event', 'Påmelding', 'Sikre deg plass – vi sender bekreftelse og praktisk informasjon på e-post.', `
    <div class="note" style="margin-bottom:1.25rem">${ic('calendar')}<div><b data-fill="title">Arrangement</b><br><span class="muted" data-fill="meta">Dato og sted</span></div></div>
    <form data-form>
      <input type="hidden" data-fill="title" name="event">
      <div class="form-grid">
        ${field('e-name', 'Navn', '<input class="input" id="e-name" autocomplete="name" required>')}
        ${field('e-org', 'Virksomhet', '<input class="input" id="e-org" autocomplete="organization" required>')}
        ${field('e-mail', 'E-post', '<input class="input" id="e-mail" type="email" autocomplete="email" required>', 'Skriv inn en gyldig e-postadresse', 'full')}
        ${field('e-diet', 'Allergier eller andre hensyn <span class="muted">(valgfritt)</span>', '<input class="input" id="e-diet">', '', 'full')}
      </div>
      <div class="modal__foot"><span class="small">Gratis for frokostseminarer.</span><button class="btn" type="submit">Bekreft påmelding ${ic('arrow-right')}</button></div>
    </form>`, ['Du er påmeldt!', 'Bekreftelse er sendt på e-post. Vi gleder oss til å se deg.']),

  modal('m-apply', 'Søk på stilling', 'Send oss en kort søknad. Vi leser alle søknader og svarer innen to uker.', `
    <div class="note" style="margin-bottom:1.25rem">${ic('briefcase')}<div><b data-fill="title">Åpen søknad</b><br><span class="muted" data-fill="meta">Bouvet</span></div></div>
    <form data-form>
      <div class="form-grid">
        ${field('a-name', 'Navn', '<input class="input" id="a-name" autocomplete="name" required>')}
        ${field('a-mail', 'E-post', '<input class="input" id="a-mail" type="email" autocomplete="email" required>', 'Skriv inn en gyldig e-postadresse')}
        ${field('a-li', 'LinkedIn-profil <span class="muted">(valgfritt)</span>', '<input class="input" id="a-li" type="url" placeholder="https://linkedin.com/in/…">', '', 'full')}
        <div class="field full"><span class="label">CV</span><label class="drop">${ic('download')}<span><b>Dra og slipp CV her</b> eller klikk for å velge</span><span class="drop__name small">PDF eller Word, maks 10 MB</span><input type="file" accept=".pdf,.doc,.docx"></label></div>
        ${field('a-msg', 'Hvorfor Bouvet?', '<textarea class="textarea" id="a-msg" required placeholder="Fortell kort om deg selv og hva som motiverer deg"></textarea>', 'Skriv noen ord om deg selv', 'full')}
      </div>
      <div class="modal__foot"><span class="small">Søknaden behandles konfidensielt.</span><button class="btn" type="submit">Send søknad ${ic('arrow-right')}</button></div>
    </form>`, ['Søknaden er sendt!', 'Takk for interessen. Rekrutteringsteamet tar kontakt så snart vi har gått gjennom søknaden.']),

  modal('m-ir', 'Abonner på børsmeldinger', 'Få kvartalsrapporter, børsmeldinger og finanskalender rett i innboksen.', `
    <form data-form>
      ${field('i-mail', 'E-post', '<input class="input" id="i-mail" type="email" autocomplete="email" required>', 'Skriv inn en gyldig e-postadresse')}
      <div class="field"><span class="label">Varsle meg om</span><div class="radio-cards">
        ${['Børsmeldinger', 'Kvartalsrapporter', 'Finanskalender', 'Generalforsamling'].map((t, i) => `<label><input type="checkbox" ${i < 2 ? 'checked' : ''}>${t}</label>`).join('')}
      </div></div>
      <div class="field"><span class="label">Språk</span><div class="radio-cards"><label><input type="radio" name="lang" checked>Norsk</label><label><input type="radio" name="lang">English</label></div></div>
      <div class="modal__foot"><span class="small">Distribueres via Oslo Børs’ meldingssystem.</span><button class="btn" type="submit">Abonner ${ic('arrow-right')}</button></div>
    </form>`, ['Abonnementet er registrert', 'Du får neste melding fra Bouvet ASA så snart den publiseres.']),

  `<div class="modal cmd" id="m-search" role="dialog" aria-modal="true" aria-label="Søk" aria-hidden="true">
    <div class="modal__backdrop" data-close></div>
    <div class="modal__dialog">
      <div class="cmd__bar">${ic('search')}<input type="search" placeholder="Søk i tjenester, kurs, artikler, kontorer…" aria-label="Søk" role="combobox" aria-expanded="true" aria-controls="cmd-list"><kbd>Esc</kbd></div>
      <div class="cmd__list" id="cmd-list" role="listbox"></div>
    </div>
  </div>`,
].join('');

export function header(current) {
  return `
<a class="skip" href="#main">Hopp til hovedinnhold</a>
<div class="scroll-bar" aria-hidden="true"></div>
<header class="site-header">
  <div class="wrap nav">
    <a class="logo" href="/" aria-label="Bouvet – til forsiden"><img src="/assets/bouvet-logo-dark.svg" alt="Bouvet" width="106" height="26"></a>
    <nav class="nav__links" aria-label="Hovedmeny">
      ${NAV.map(([h, l]) => `<a href="/${h}"${current === h ? ' aria-current="page"' : ''}>${l}</a>`).join('')}
    </nav>
    <div class="nav__tools">
      <button class="search-trigger" data-modal="m-search" aria-label="Søk (Ctrl+K)">${ic('search')}<span>Søk</span><kbd>⌘K</kbd></button>
      <div class="lang"><button class="lang__btn" aria-expanded="false" aria-haspopup="true">${ic('globe')} NO ${ic('chevron-down')}</button>
        <div class="lang__menu"><a href="/" aria-current="true">Norsk <b>NO</b></a><a href="https://www.bouvet.se">Svenska <b>SE</b></a><a href="https://en.bouvet.no">English <b>EN</b></a></div></div>
      <a class="btn btn--dark btn--sm" href="https://minside.bouvet.no">${ic('user')} Min side</a>
      <button class="icon-btn burger" data-mnav aria-label="Åpne meny">${ic('menu')}</button>
    </div>
  </div>
</header>
<div class="mnav" aria-label="Mobilmeny">
  <button class="icon-btn mnav__close" data-mnav aria-label="Lukk meny">${ic('close')}</button>
  <a class="mnav__link" href="/">Forside ${ic('arrow-right')}</a>
  ${NAV.map(([h, l]) => `<a class="mnav__link" href="/${h}">${l} ${ic('arrow-right')}</a>`).join('')}
  <div class="mnav__foot"><button class="btn" data-modal="m-contact">La oss snakke ${ic('arrow-right')}</button><button class="btn btn--ghost" data-modal="m-search">${ic('search')} Søk</button><a class="btn btn--ghost" href="https://minside.bouvet.no">${ic('user')} Min side</a></div>
</div>`;
}

export function footer() {
  return `
<footer class="site-footer">
  ${BAND_WAVES()}
  <div class="wrap">
    <div class="foot-top">
      <div class="foot-brand">
        <img src="/assets/bouvet-logo-light.svg" alt="Bouvet" width="122" height="30">
        <p>Et ledende norsk konsulentselskap innen IT, rådgivning, design og kommunikasjon. Vi går foran og bygger fremtidens samfunn.</p>
        <div class="socials">
          <a href="https://www.linkedin.com/company/bouvet-asa" aria-label="LinkedIn">${ic('linkedin')}</a>
          <a href="https://www.facebook.com/bouvet" aria-label="Facebook">${ic('facebook')}</a>
          <a href="https://www.instagram.com/bouvet_asa/" aria-label="Instagram">${ic('instagram')}</a>
          <a href="https://www.youtube.com/user/BouvetASA" aria-label="YouTube">${ic('youtube')}</a>
        </div>
      </div>
      <div><h4>Utforsk</h4><ul>${NAV.map(([h, l]) => `<li><a href="/${h}">${l}</a></li>`).join('')}<li><a href="/design-system">Design system</a></li></ul></div>
      <div><h4>Hvis du vil vite mer</h4><ul>
        <li><a href="/bli-en-av-oss#stillinger">Ledige stillinger</a></li>
        <li><a href="#" data-modal="m-newsletter">Meld deg på nyhetsbrevet</a></li>
        <li><a href="/om-bouvet#nyheter">Nyheter fra oss</a></li>
        <li><a href="/bouvet-deler#podcast">Podcast</a></li>
        <li><a href="https://live.euronext.com/nb/product/equities/NO0010360266-XOSL">Notert på Oslo Børs</a></li>
        <li><a href="https://bouvet.fotoware.cloud/fotoweb/archives/5009-Pressemappe-ekstern/">Pressebilder</a></li>
      </ul></div>
      <div><h4>Kontakt oss</h4><ul>
        <li>Bouvet ASA</li>
        <li class="small" style="color:var(--text-on-dark-muted)">Brev sendes til: Bouvet Norge AS<br>PB 5327 Majorstuen, 0304 Oslo</li>
        <li><a href="/om-bouvet#kontorer">Våre kontorer</a></li>
        <li><a href="https://www.bouvet.no/rapportering-av-sikkerhetshendelser">Rapporter sikkerhetshendelse</a></li>
        <li><button class="btn btn--sm" data-modal="m-contact" style="margin-top:.75rem">La oss snakke ${ic('arrow-right')}</button></li>
      </ul></div>
    </div>
    <div class="foot-big" aria-hidden="true">bouvet</div>
    <div class="foot-bottom">
      <span>Org.nr. Bouvet ASA 974 442 167 · Bouvet Norge AS 996 756 246</span>
      <nav aria-label="Juridisk"><a href="https://www.bouvet.no/om-bouvet/informasjonskapsler-og-personvern">Personvern</a><a href="https://www.bouvet.no/om-bouvet/etiske-retningslinjer-code-of-conduct">Etiske retningslinjer</a><a href="https://www.bouvet.no/om-bouvet/bouvets-tilnaerming-til-apenhetsloven">Åpenhetsloven</a><a href="https://www.bouvet.no/om-bouvet/vare-iso-sertifiseringer">Sertifiseringer</a></nav>
    </div>
  </div>
</footer>`;
}

export function page({ slug, title, desc, body }) {
  return `<!doctype html>
<html lang="nb">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${desc}">
<meta name="theme-color" content="#11133c">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<meta property="og:image" content="/assets/img/brand-fallback.webp">
<link rel="icon" href="/assets/bouvet-o.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400..700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/css/main.css">
</head>
<body data-page="${slug}">
${sprite()}
${header(slug)}
<main id="main">
${body}
</main>
${footer()}
${MODALS()}
<script>window.SEARCH_INDEX=${JSON.stringify(SEARCH_INDEX)}</script>
<script src="/assets/js/main.js" defer></script>
</body>
</html>`;
}
