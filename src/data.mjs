// Content sourced from bouvet.no (November 2026).
export const SERVICES = [
  { id: 'radgivning', icon: 'strategy', title: 'Strategi, ledelse og rådgivning', desc: 'Sikre styring, fremdrift, innovasjon og verdiskaping gjennom strategi, ledelse og utvalgte metoder.' },
  { id: 'systemutvikling', icon: 'code', title: 'Systemutvikling', desc: 'Oppnå synlige gevinster og langsiktig konkurransekraft gjennom smidig, sikker og skalerbar systemutvikling.' },
  { id: 'data', icon: 'data', title: 'Datadrevet innsikt og analyse', desc: 'Få kontroll på data for å sikre de objektivt beste beslutningene.' },
  { id: 'ai', icon: 'ai', title: 'Kunstig intelligens', desc: 'Gjør kunstig intelligens til en praktisk ressurs med løsninger som automatiserer, forutsier og forbedrer beslutninger.' },
  { id: 'arbeidsplass', icon: 'workplace', title: 'Digital arbeidsplass og smarte forretningsløsninger', desc: 'Legg til rette for smartere samarbeid og effektiv utvikling gjennom operative verktøy og strategier.' },
  { id: 'design', icon: 'design', title: 'Design', desc: 'Lag helhetlige digitale opplevelser for brukerne med innsikt, strategi, UX, innhold og visuell design.' },
  { id: 'sky', icon: 'cloud', title: 'Sky', desc: 'Legg til rette for innovasjon og effektivisering med skalerbar og sikker infrastruktur som trygger stabil drift og optimal ytelse.' },
  { id: 'industriell-it', icon: 'industry', title: 'Industriell IT', desc: 'Digitaliser, automatiser og optimaliser industrielle prosesser og produksjon, med industri 4.0 og industriell IoT.' },
  { id: 'sikkerhet', icon: 'security', title: 'Sikkerhet', desc: 'Sikre dine data, systemer og prosesser mot sikkerhetstrusler, gjennom helhetlige sikkerhetsstrategier og moderne teknologi.' },
];

export const PROJECTS = [
  { client: 'Cappelen Damm', title: 'KI-assistenten som støtter lærerne i hverdagen', img: 'proj-cappelen', tags: ['ai', 'design'], href: 'https://www.bouvet.no/prosjekter/ki-assistenten-som-stotter-laererne-i-hverdagen' },
  { client: 'AI i felt', title: 'AI forenkler tilgang til dokumentasjon for ingeniører i felt', img: 'proj-dokumenter', tags: ['ai', 'industri'], href: 'https://www.bouvet.no/prosjekter/ai-forenkler-tilgang-til-dokumentasjon-for-ingeniorer-i-felt' },
  { client: 'Sikt', title: 'Felles KI-plattform for kunnskapssektoren', img: 'proj-sikt', tags: ['ai', 'sky'], href: 'https://www.bouvet.no/prosjekter/felles-ki-plattform-for-kunnskapssektoren' },
  { client: 'Miljødirektoratet', title: 'Gjør norsk natur mer tilgjengelig', img: 'proj-natur', tags: ['data', 'design'], href: 'https://www.bouvet.no/prosjekter/gjor-norsk-natur-mer-tilgjengelig' },
  { client: 'BW Offshore', title: 'KI gjør kunnskap lettere og raskere tilgjengelig', img: 'proj-beonardo', tags: ['ai', 'industri'], href: 'https://www.bouvet.no/prosjekter/ki-gjor-kunnskap-lettere-og-raskere-tilgjengelig' },
];

const B = 'https://www.bouvet.no';
export const POSTS = [
  { t: 'Digital suverenitet: Kan virksomheten din fortsette å styre sin egen utvikling?', d: 'Digital suverenitet handler ikke bare om hvor dataene ligger, men om hvor mye virksomheten kan bestemme selv når pris, vilkår eller rammebetingelser endrer seg.', img: 'digital-suverenitet-1', type: 'Artikkel', tags: 'suverenitet radgivning', u: B + '/bouvet-deler/digital-suverenitet-kan-virksomheten-din-fortsette-a-styre-sin-egen-utvikling' },
  { t: 'Digital suverenitet i praksis: Slik kommer virksomheten i gang', d: 'En konkret prosess i syv steg som viser hva som bør kartlegges, hvem som bør involveres og hvilke spørsmål som bør stilles – med sjekkliste og fem grep.', img: 'digital-suverenitet-2', type: 'Guide', tags: 'suverenitet radgivning', u: B + '/bouvet-deler/digital-suverenitet-i-praksis-slik-kommer-virksomheten-i-gang' },
  { t: 'Gir du egentlig gode kundeopplevelser til alle dine gjester?', d: 'Synlighet hos søkemotorene og gode annonser var nok før. Nå endrer måten kundene finner og bruker deg på seg.', img: 'kundeopplevelse', type: 'Artikkel', a: 'Christer Grønnslett', tags: 'design ai', u: B + '/bouvet-deler/gir-du-egentlig-gode-kundeopplevelser-til-alle-dine-gjester' },
  { t: 'Bak gode produkter står sterke team', d: 'Gode produkter skapes når mennesker med ulik kompetanse forstår problemet, jobber mot en felles retning og finner ut hva som faktisk skaper verdi.', img: 'sterke-team', type: 'Artikkel', a: 'Linda Solberg Brattli', tags: 'ledelse', u: B + '/bouvet-deler/bak-gode-produkter-star-sterke-team' },
  { t: 'Fra CMS til KI-agenter på Opticon 2026', d: 'Hvordan vil kunstig intelligens endre måten vi jobber med nettsteder, innhold og digitale kundeopplevelser? Rapport fra London.', img: 'opticon-london', type: 'Artikkel', a: 'Nikhil André Luthra', tags: 'ai cms', u: B + '/bouvet-deler/fra-cms-til-ki-agenter-opticon-2026' },
  { t: 'Et rammeverk for deg som skal jobbe med digital suverenitet', d: 'Vi går gjennom Bouvets rammeverk – utviklet over tid og i dialog med flere kunder – for et felles språk på tvers av fagområder.', img: 'podcast-bobler-1', type: 'Podcast', tags: 'podcast suverenitet', u: B + '/podcasts/et-rammeverk-for-deg-som-skal-jobbe-med-digital-suverenitet' },
  { t: 'AI-kostnader i Databricks: slik får du kontroll med Unity Gateway', d: 'Forbruket måles i tokens, deler av regningen kommer fra eksterne leverandører, og agenter kan skape mye forbruk på kort tid.', img: 'databricks', type: 'Artikkel', a: 'Andrey Kuznetsov', tags: 'ai data', u: B + '/bouvet-deler/ai-kostnader-i-databricks-slik-far-du-kontroll-med-unity-gateway' },
  { t: 'KI i offentlig sektor 2026 – oppsummert', d: 'For over tre år siden tok vi initiativet til en egen KI-konferanse for offentlig sektor. Her er det viktigste fra årets utgave.', img: 'ki-offentlig', type: 'Artikkel', a: 'Simen Sommerfeldt', tags: 'ai', u: B + '/bouvet-deler/ki-i-offentlig-sektor-2026-oppsummert' },
  { t: 'Copilot er i ferd med å bli en applikasjonsplattform', d: 'Hva om alle i virksomheten kunne bygge apper, og IT fortsatt hadde full kontroll? Om Copilot Managed Runtime.', img: 'trygg-havn', type: 'Artikkel', a: 'Arild Aarnes', tags: 'ai arbeidsplass', u: B + '/bouvet-deler/copilot-er-i-ferd-med-a-bli-en-applikasjonsplattform' },
  { t: 'Kunnskapsbrønnen: Én kilde til kunnskap for mennesker og AI', d: 'Når både mennesker og AI skal ta beslutninger, må kunnskapsgrunnlaget være tilgjengelig og anvendbart i praksis.', img: 'agents-md', type: 'Artikkel', a: 'Linda Solberg Brattli', tags: 'ai data', u: B + '/bouvet-deler/kunnskapsbronnen-en-kilde-til-kunnskap-for-mennesker-og-ai' },
  { t: 'AI i praksis – Agents.md', d: 'Tidligere AI-løse tjenester som søk, bildegenerering og chatbot har fått kraftig fart. Slik bruker vi Agents.md i hverdagen.', img: 'ai-brain', type: 'Artikkel', a: 'Andreas Aursand', tags: 'ai', u: B + '/bouvet-deler/ai-i-praksis-agents.md' },
  { t: 'Bouvets agentiske verdireise: fra AI-eksperimenter til målbar virksomhetsverdi', d: 'Fra mange lokale AI-initiativer til koordinert virksomhetsutvikling der mennesker, AI og data utvikles som én transformasjon.', img: 'agentreisen', type: 'Artikkel', a: 'Jochen Müller', tags: 'ai radgivning', u: B + '/bouvet-deler/bouvets-agentiske-verdireise-fra-ai-eksperimenter-til-malbar-virksomhetsverdi' },
  { t: '8 områder der AI kan styrke sikkerhetsstyringen', d: 'Det interessante er ikke bare hva som kan automatiseres, men hvor teknologien faktisk kan gjøre sikkerhetsarbeidet bedre.', img: 'sikkerhet-ai-2', type: 'Artikkel', tags: 'sikkerhet ai', u: B + '/bouvet-deler/8-omr%C3%A5der-der-ai-kan-styrke-sikkerhetsstyringen' },
  { t: 'Hvordan bruke AI i sikkerhetsstyring uten å miste kontrollen', d: 'AI kan være et av de viktigste verktøyene for risikostyring og etterlevelse – men krever tydelige rammer.', img: 'sikkerhet-ai-3', type: 'Artikkel', tags: 'sikkerhet ai', u: B + '/bouvet-deler/hvordan-bruke-ai-i-sikkerhetsstyring-uten-a-miste-kontrollen' },
  { t: 'AI som beslutningsstøtte, ikke beslutningstaker', d: 'AI kan analysere, finne mønstre og foreslå tiltak. Men den kan ikke overta ansvaret for virksomhetens sikkerhet.', img: 'sikkerhet-ai-1', type: 'Artikkel', tags: 'sikkerhet ai', u: B + '/bouvet-deler/ai-som-beslutningsst%C3%B8tte-ikke-beslutningstaker' },
  { t: 'UDI – digital transformasjon i stor skala og med store konsekvenser', d: 'Hvordan utlendingsforvaltningen jobber for en rettferdig og effektiv saksbehandling gjennom digitalisering.', img: 'podcast-bobler-2', type: 'Podcast', tags: 'podcast systemutvikling', u: B + '/podcasts/udi-digital-transformasjon-i-stor-skala-og-med-store-konsekvenser' },
  { t: 'Vi hacket med vilje – OWASP Juice Shop CTF hos Bouvet', d: 'Det hjelper å forstå hvordan sårbarheter oppstår og kan utnyttes. Denne uka samlet vi utviklere til Capture the Flag.', img: 'owasp-ctf', type: 'Artikkel', tags: 'sikkerhet systemutvikling', u: B + '/bouvet-deler/vi-hacket-med-vilje-owasp-juice-shop-ctf-hos-bouvet' },
  { t: 'Slik kan Sanity Content Agent gjøre redaktørhverdagen enklere', d: 'KI i CMS handler ofte om generiske assistenter. Sanity sin Content Agent kjenner innholdsmodellen din.', img: 'sanity-agent', type: 'Artikkel', a: 'Sigurd Kvamme', tags: 'cms ai', u: B + '/bouvet-deler/slik-kan-sanity-content-agent-gjore-redaktorhverdagen-enklere' },
  { t: 'Optimizely CMS 13 gir flere arkitekturvalg', d: 'Samlet CMS, innholdsplattform for separate nettsteder og apper, eller en kombinasjon – arkitekturvalget blir tydeligere.', img: 'cms-arkitektur', type: 'Artikkel', tags: 'cms systemutvikling', u: B + '/bouvet-deler/optimizely-cms-13-gir-flere-arkitekturvalg' },
  { t: 'Når ulike fagmiljøer møtes, blir løsningene bedre', d: 'Hvordan bygger man en dataplattform som gjør komplekse data lettere å forstå og bruke i innovative prosjekter?', img: 'tverrfaglig-team', type: 'Artikkel', tags: 'data ledelse', u: B + '/bouvet-deler/nar-ulike-fagmiljoer-motes-blir-losningene-bedre' },
  { t: 'Perfekt pasning – ledelse hvor vi spiller hverandre gode', d: 'Team hvor samarbeidet flyter og folk tør å si det som må sies. Hva er det som skiller dem fra resten?', img: 'perfekt-pasning', type: 'Artikkel', a: 'Linda Solberg Brattli', tags: 'ledelse', u: B + '/bouvet-deler/perfekt-pasning' },
  { t: 'Slik ble Stavanger kommune årets KI-kommune', d: 'Bak prisen ligger en politisk forankret strategi og langsiktig arbeid med data og kompetanse.', img: 'podcast-stavanger', type: 'Podcast', tags: 'podcast ai', u: B + '/podcasts/slik-ble-stavanger-kommune-%C3%A5rets-ki-kommune' },
];

export const FILTERS = [
  ['all', 'Alle'], ['ai', 'Kunstig intelligens'], ['suverenitet', 'Digital suverenitet'], ['sikkerhet', 'Sikkerhet'],
  ['podcast', 'Podcast'], ['cms', 'CMS'], ['ledelse', 'Ledelse'], ['data', 'Data'], ['design', 'Design'],
];

export const EVENTS = [
  { day: '25', mon: 'nov', t: 'Fra data til forretningsverdi', place: 'Ålesund · Dampsentralen', cat: 'Frokostseminar' },
  { day: '03', mon: 'des', t: 'Hvordan modernisere komplekse systemer som ikke kan stoppe?', place: 'Oslo', cat: 'Frokostseminar' },
  { day: '08', mon: 'des', t: 'Hjerterom: Når KI møter sensitive data', place: 'Bergen', cat: 'Frokostseminar' },
  { day: '10', mon: 'des', t: 'Teknologi og trender som vil prege 2027', place: 'Stavanger', cat: 'Frokostseminar' },
  { day: '15', mon: 'des', t: 'Trender for 2027', place: 'Kristiansand · Kjøita 6', cat: 'Frokostseminar' },
];

export const COURSES = [
  { day: '25', mon: 'nov', t: 'Fra data til forretningsverdi', place: 'Ålesund', cat: 'Frokostseminar' },
  { day: '26', mon: 'nov', t: 'Produktledelse – produktutvikling i praksis', place: 'Trondheim', cat: 'Smidig' },
  { day: '26', mon: 'nov', t: 'Produktledelse – produktutvikling i praksis', place: 'Oslo', cat: 'Smidig' },
];

export const PACKAGES = [
  { icon: 'team', t: 'Bedriftsinterne kurs', d: 'Felles kunnskap øker teamets effektivitet.', img: 'kurs-team' },
  { icon: 'spark', t: 'Bouvet kurs anbefaler', d: 'Våre mest populære kurs, håndplukket av instruktørene.', img: 'kurs-samtale' },
  { icon: 'loop', t: 'Smidig metodikk og tankegang', d: 'Kurs i smidige metoder for team og ledere.', img: 'kurs-postit' },
  { icon: 'certificate', t: 'Sertifiseringskurs i smidig', d: 'Sertifiseringer for smidig transformasjon.', img: 'kurs-eksamen' },
  { icon: 'layers', t: 'Kurs for utviklere og arkitekter', d: 'Arkitektur, kode og moderne utviklingspraksis.', img: 'kurs-utviklere' },
  { icon: 'rocket', t: 'Fremtidens teknologier', d: 'AI, data og ny teknologi – fra idé til praksis.', img: 'kurs-hololens' },
];

export const JOBS = [
  { t: 'Erfaren UX-/produktdesigner til Bouvet Drammen', place: 'Drammen', cat: 'Design', icon: 'design' },
  { t: 'Erfaren konsulent innen Information Management', place: 'Stavanger', cat: 'Rådgivning', icon: 'strategy' },
  { t: 'Erfarne .NET-utviklere til vårt kontor i Sandvika', place: 'Sandvika', cat: 'Utvikling', icon: 'code' },
  { t: 'Erfarne Javautviklere til vårt kontor i Sandvika', place: 'Sandvika', cat: 'Utvikling', icon: 'code' },
  { t: 'Erfarne testledere til vårt Oslo-kontor', place: 'Oslo', cat: 'Kvalitet', icon: 'check' },
];

export const NEWS = [
  { t: 'Bouvet valgt som leverandør for modernisering av viktig NATO-system', d: 'Ny rammeavtale med NATOs Joint Warfare Centre om støtte, videreutvikling og modernisering av kommando- og kontrollsystemet NEC CCIS.', img: 'news-nato', u: B + '/nyheter/bouvet-valgt-som-leverandor-for-modernisering-av-viktig-nato-system' },
  { t: 'Vekst i antall ansatte, økt bruk av AI og nye kontrakter', d: 'Driftsinntekter på 865,4 MNOK i tredje kvartal 2026. EBIT ble 80,5 MNOK.', img: 'news-q3', u: B + '/nyheter/vekst-i-antall-ansatte-okt-bruk-av-ai-og-nye-kontrakter' },
  { t: 'Sokkeldirektoratet velger Bouvet til utviklingen av Faktavarehus 2.0', d: 'Oppdraget skal modernisere direktoratets sentrale dataplattform og bidra til mer effektiv forvaltning og analyse.', img: 'news-sokkel', u: B + '/nyheter/sokkeldirektoratet-velger-bouvet-til-utviklingen-av-faktavarehus-2.0' },
];

// lat/lon of each office (approximate city centre)
export const OFFICES = [
  ['Arendal', 'Frolandsveien 6, 4847 Arendal', 58.46, 8.77],
  ['Bergen', 'Solheimsgaten 15, 5058 Bergen', 60.39, 5.32],
  ['Drammen', 'Doktor Hansteins gate 13, 3044 Drammen', 59.74, 10.2],
  ['Førde', 'Elvevegen 13, 6800 Førde', 61.45, 5.85],
  ['Grenland', 'Hydrovegen 55, 3936 Porsgrunn', 59.14, 9.66],
  ['Haugesund', 'Diktervegen 8, 5538 Haugesund', 59.41, 5.27],
  ['Innlandet', 'Løvstadvegen 7, 2312 Ottestad', 60.79, 11.07],
  ['Kongsberg', 'Nymoens Torg 6, 3611 Kongsberg', 59.67, 9.65],
  ['Kristiansand', 'Kjøita 6, 4630 Kristiansand', 58.15, 7.99],
  ['Oslo', 'Sørkedalsveien 8, 0369 Oslo', 59.94, 10.7],
  ['Sandvika', 'Malmskriverveien 18, 1337 Sandvika', 59.89, 10.52],
  ['Stavanger', 'Laberget 28, 4020 Stavanger', 58.97, 5.73],
  ['Stockholm', 'Mäster Samuelsgatan 42, 111 57 Stockholm', 59.33, 18.07],
  ['Tromsø', 'Kirkegata 1, 9008 Tromsø', 69.65, 18.96],
  ['Trondheim', 'Professor Brochs gate 14, 7030 Trondheim', 63.43, 10.39],
  ['Vestfold', 'Fokserødveien 12, 3241 Sandefjord', 59.13, 10.22],
  ['Ålesund', 'Keiser Wilhelms g. 25, 6003 Ålesund', 62.47, 6.15],
];

export const SEARCH_INDEX = [
  { g: 'Sider', t: 'Vi jobber med', d: 'Ni kompetanseområder', u: '/vi-jobber-med', i: 'layers' },
  { g: 'Sider', t: 'Bli en av oss', d: 'Karriere og ledige stillinger', u: '/bli-en-av-oss', i: 'briefcase' },
  { g: 'Sider', t: 'Bouvet deler', d: 'Artikler, podcast og arrangementer', u: '/bouvet-deler', i: 'article' },
  { g: 'Sider', t: 'Investor', d: 'Nøkkeltall, aksje og rapporter', u: '/investor', i: 'trend' },
  { g: 'Sider', t: 'Kurs', d: 'Kurs, seminarer og sertifisering', u: '/kurs', i: 'presentation' },
  { g: 'Sider', t: 'Om oss', d: 'Visjon, verdier og kontorer', u: '/om-bouvet', i: 'compass' },
  { g: 'Sider', t: 'Design system', d: 'Farger, typografi, ikoner og komponenter', u: '/design-system', i: 'design' },
  ...SERVICES.map(s => ({ g: 'Tjenester', t: s.title, d: s.desc.slice(0, 70) + '…', u: '/vi-jobber-med#' + s.id, i: s.icon })),
  ...POSTS.map(p => ({ g: 'Bouvet deler', t: p.t, d: p.type + (p.a ? ' · ' + p.a : ''), u: p.u, i: p.type === 'Podcast' ? 'podcast' : 'article' })),
  ...EVENTS.map(e => ({ g: 'Arrangementer', t: e.t, d: `${e.day}. ${e.mon} · ${e.place}`, u: '/kurs#kommende', i: 'coffee' })),
  ...JOBS.map(j => ({ g: 'Ledige stillinger', t: j.t, d: j.place, u: '/bli-en-av-oss#stillinger', i: 'briefcase' })),
  ...OFFICES.map(o => ({ g: 'Kontorer', t: 'Bouvet ' + o[0], d: o[1], u: '/om-bouvet#kontorer', i: 'pin' })),
];
