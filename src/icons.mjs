// Bouvet icon set — 24×24 grid, 1.75 stroke, round caps/joins, 2px optical padding.
// Grouped by the section of the site where each icon lives.
export const ICON_GROUPS = [
  {
    id: 'ui', name: 'Grensesnitt & navigasjon', desc: 'Handlinger, retning og status. Brukes i knapper, lenker, skjema og meny.',
    icons: {
      'arrow-right': '<path d="M5 12h14M13 6l6 6-6 6"/>',
      'arrow-up-right': '<path d="M7 17 17 7M8 7h9v9"/>',
      'arrow-left': '<path d="M19 12H5M11 18l-6-6 6-6"/>',
      'chevron-down': '<path d="m6 9 6 6 6-6"/>',
      'search': '<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/>',
      'menu': '<path d="M4 7h16M4 12h16M4 17h10"/>',
      'close': '<path d="M6 6l12 12M18 6 6 18"/>',
      'plus': '<path d="M12 5v14M5 12h14"/>',
      'check': '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
      'globe': '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.5 2.6 3.5 5.4 3.5 8.5s-1 5.9-3.5 8.5c-2.5-2.6-3.5-5.4-3.5-8.5s1-5.9 3.5-8.5Z"/>',
      'user': '<circle cx="12" cy="8.5" r="3.8"/><path d="M4.5 20c1.2-3.6 4-5.5 7.5-5.5s6.3 1.9 7.5 5.5"/>',
      'external': '<path d="M14 4h6v6M20 4l-8.5 8.5M18 14v4.5A1.5 1.5 0 0 1 16.5 20h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H10"/>',
      'download': '<path d="M12 4v11M7 10.5l5 5 5-5M5 20h14"/>',
      'filter': '<path d="M4 6h16M7 12h10M10 18h4"/>',
      'pin': '<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z"/><circle cx="12" cy="10" r="2.4"/>',
      'mail': '<rect x="3.5" y="5.5" width="17" height="13" rx="2"/><path d="m4 7 8 6 8-6"/>',
      'phone': '<path d="M6.5 4h3l1.5 4-2 1.3a10 10 0 0 0 5.7 5.7L16 13l4 1.5v3A2 2 0 0 1 17.8 19.5 15.5 15.5 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z"/>',
      'clock': '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
      'play': '<circle cx="12" cy="12" r="8.5"/><path d="m10 8.8 5 3.2-5 3.2Z"/>',
      'alert': '<path d="M12 4 21 19.5H3Z"/><path d="M12 10v4M12 16.8v.2"/>',
      'command': '<path d="M9 9V6.5A2.5 2.5 0 1 0 6.5 9H9Zm0 0h6m-6 0v6m6-6V6.5A2.5 2.5 0 1 1 17.5 9H15Zm0 0v6m0 0h-6m6 0v2.5a2.5 2.5 0 1 0 2.5-2.5H15Zm-6 0v2.5A2.5 2.5 0 1 1 6.5 15H9Z"/>',
    },
  },
  {
    id: 'services', name: 'Vi jobber med', desc: 'Ett ikon per kompetanseområde. Brukes på tjenestekort, filtre og prosjekter.',
    icons: {
      'strategy': '<circle cx="12" cy="12" r="8.5"/><path d="m15.5 8.5-2 5-5 2 2-5Z"/>',
      'code': '<path d="m8.5 8-4 4 4 4M15.5 8l4 4-4 4M13.5 5.5l-3 13"/>',
      'data': '<path d="M4 20h16"/><rect x="5.5" y="12" width="3" height="5.5" rx=".8"/><rect x="10.5" y="8" width="3" height="9.5" rx=".8"/><rect x="15.5" y="4.5" width="3" height="13" rx=".8"/>',
      'ai': '<path d="M12 3.5c.7 3.9 2.6 5.8 6.5 6.5-3.9.7-5.8 2.6-6.5 6.5-.7-3.9-2.6-5.8-6.5-6.5 3.9-.7 5.8-2.6 6.5-6.5Z"/><path d="M18.5 15.5c.3 1.6 1 2.3 2.5 2.5-1.5.2-2.2.9-2.5 2.5-.3-1.6-1-2.3-2.5-2.5 1.5-.2 2.2-.9 2.5-2.5Z"/>',
      'workplace': '<rect x="3.5" y="4.5" width="17" height="11" rx="1.8"/><path d="M9 19.5h6M12 15.5v4"/><path d="M8 10h3M13 10h3"/>',
      'design': '<path d="m12 3.5 6 6-7.5 10.5L4 21l1-6.5Z"/><circle cx="12" cy="11.5" r="1.6"/><path d="m4.5 20.5 6.3-7.8"/>',
      'cloud': '<path d="M7 18.5a4.5 4.5 0 0 1-.4-9 6 6 0 0 1 11.4 1.6A3.8 3.8 0 0 1 17.5 18.5Z"/>',
      'industry': '<path d="M3.5 20V10l5 3.2V10l5 3.2V6.5h4V20Z"/><path d="M3.5 20h17M7 17h1.5M11 17h1.5M15 17h1.5"/>',
      'security': '<path d="M12 3.5 19 6v5.5c0 4.4-3 7.8-7 9-4-1.2-7-4.6-7-9V6Z"/><path d="m8.8 12 2.2 2.2 4.3-4.4"/>',
    },
  },
  {
    id: 'career', name: 'Bli en av oss', desc: 'Karriere, kultur og betingelser.',
    icons: {
      'briefcase': '<rect x="3.5" y="7" width="17" height="12" rx="2"/><path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3.5 12.5h17"/>',
      'graduation': '<path d="m2.5 9.5 9.5-4.5 9.5 4.5-9.5 4.5Z"/><path d="M6.5 11.5v4.3c1.5 1.5 3.4 2.2 5.5 2.2s4-.7 5.5-2.2v-4.3M21.5 9.5v5"/>',
      'growth': '<path d="M12 20v-8"/><path d="M12 12c0-4 2.5-6.5 7-6.5 0 4.2-2.6 6.5-7 6.5ZM12 14.5c0-3-2-5-5.5-5 0 3.3 2 5 5.5 5Z"/>',
      'heart': '<path d="M12 19.5s-7.5-4.4-7.5-10A4.2 4.2 0 0 1 12 7a4.2 4.2 0 0 1 7.5 2.5c0 5.6-7.5 10-7.5 10Z"/>',
      'anchor': '<circle cx="12" cy="5.5" r="2"/><path d="M12 7.5V20M8 11h8M4.5 13.5c.5 3.8 3.5 6.5 7.5 6.5s7-2.7 7.5-6.5"/>',
      'shuffle': '<path d="M4 7h3.5c4.5 0 4.5 10 9 10H20M4 17h3.5c1.6 0 2.6-1.3 3.4-3M13.1 10c.8-1.7 1.8-3 3.4-3H20M17.5 4.5 20 7l-2.5 2.5M17.5 14.5 20 17l-2.5 2.5"/>',
      'gift': '<rect x="4" y="9" width="16" height="4" rx="1"/><path d="M5.5 13v7h13v-7M12 9v11M12 9c-1-3-4.5-4.2-5.2-2.4C6.2 8.2 8.6 9 12 9Zm0 0c1-3 4.5-4.2 5.2-2.4.6 1.6-1.8 2.4-5.2 2.4Z"/>',
      'eye': '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="3"/>',
    },
  },
  {
    id: 'share', name: 'Bouvet deler', desc: 'Innholdstyper i bloggen, podcast og arrangementer.',
    icons: {
      'article': '<rect x="4.5" y="3.5" width="15" height="17" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>',
      'podcast': '<rect x="9" y="3.5" width="6" height="10" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5v3"/>',
      'megaphone': '<path d="M4 10v4h3l8 4.5v-13L7 10Z"/><path d="M18 9.5a3.5 3.5 0 0 1 0 5M7 14l1.2 5H10"/>',
      'newsletter': '<path d="M5 4.5h14v15H5Z"/><path d="M8.5 8.5h7M8.5 12h7"/><circle cx="9.5" cy="16" r="1"/><circle cx="12" cy="16" r="1"/><circle cx="14.5" cy="16" r="1"/>',
      'bubble': '<path d="M12 4a8 8 0 0 0-7.1 11.7L4 20l4.3-.9A8 8 0 1 0 12 4Z"/>',
      'calendar': '<rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
    },
  },
  {
    id: 'courses', name: 'Kurs', desc: 'Kurskategorier, formater og påmelding.',
    icons: {
      'presentation': '<rect x="3.5" y="4" width="17" height="11" rx="1.5"/><path d="M12 15v3M8 21l4-3 4 3M7.5 11.5l2.5-2.5 2 2 4-4"/>',
      'coffee': '<path d="M4.5 9h12v5.5a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5Z"/><path d="M16.5 10.5h1.5a2.5 2.5 0 0 1 0 5h-1.8M8.5 3.5c-.6.9.6 1.6 0 2.5M12.5 3.5c-.6.9.6 1.6 0 2.5"/>',
      'moon': '<path d="M19.5 14.5A7.5 7.5 0 0 1 9.5 4.5a7.5 7.5 0 1 0 10 10Z"/>',
      'certificate': '<rect x="3.5" y="4" width="17" height="12" rx="1.5"/><path d="M7.5 8h9M7.5 11.5h5"/><circle cx="16" cy="15" r="2.5"/><path d="m14.6 17.2-.8 3.3 2.2-1 2.2 1-.8-3.3"/>',
      'team': '<circle cx="9" cy="8.5" r="3"/><path d="M3.5 19c.8-3 2.8-4.7 5.5-4.7s4.7 1.7 5.5 4.7"/><circle cx="16.5" cy="9.5" r="2.4"/><path d="M15.6 14.4c2.3.1 4 1.6 4.9 4.1"/>',
      'rocket': '<path d="M12.5 15.5 8.5 11.5C10 6.5 13.6 3.8 20 4c.2 6.4-2.5 10-7.5 11.5Z"/><circle cx="15" cy="9" r="1.6"/><path d="M8.5 11.5 5 11l2.5-3.5h3.5M12.5 15.5 13 19l3.5-2.5v-3.5M6.5 15.5c-1.5.5-2 2-2 4 2 0 3.5-.5 4-2"/>',
      'layers': '<path d="m12 4 8.5 4.5L12 13 3.5 8.5Z"/><path d="m3.5 12.5 8.5 4.5 8.5-4.5M3.5 16l8.5 4.5 8.5-4.5"/>',
      'loop': '<path d="M17 7.5A7 7 0 0 0 5.2 10M7 16.5A7 7 0 0 0 18.8 14"/><path d="M17.5 3.5V8h-4.5M6.5 20.5V16H11"/>',
    },
  },
  {
    id: 'investor', name: 'Investor', desc: 'Finansielle nøkkeltall, aksje og rapportering.',
    icons: {
      'trend': '<path d="M3.5 17.5 9 12l3.5 3.5 8-8"/><path d="M15 7.5h5.5V13"/>',
      'pie': '<path d="M12 3.5v8.5h8.5A8.5 8.5 0 1 1 12 3.5Z"/><path d="M15 3.8A8.5 8.5 0 0 1 20.2 9H15Z"/>',
      'coins': '<ellipse cx="9" cy="7" rx="5.5" ry="2.5"/><path d="M3.5 7v4c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5V7"/><path d="M9.5 15.6c.9 1.1 3 1.9 5.5 1.9 3 0 5.5-1.1 5.5-2.5v-4c0-1.3-2-2.3-4.7-2.5M20.5 15v4c0 1.4-2.5 2.5-5.5 2.5s-5.5-1.1-5.5-2.5v-1.5"/>',
      'report': '<path d="M14 3.5H6.5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V9Z"/><path d="M14 3.5V9h5.5M8.5 17v-3M12 17v-5M15.5 17v-2"/>',
      'bell': '<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15Z"/><path d="M10 20.5a2.2 2.2 0 0 0 4 0"/>',
      'building': '<rect x="5" y="3.5" width="14" height="17" rx="1.5"/><path d="M9 7.5h2M13 7.5h2M9 11h2M13 11h2M9 14.5h2M13 14.5h2M10.5 20.5v-2.5h3v2.5"/>',
      'scale': '<path d="M12 4v16M7 20h10M5 7h14"/><path d="m5 7-2.5 6a2.8 2.8 0 0 0 5 0Zm14 0-2.5 6a2.8 2.8 0 0 0 5 0Z"/>',
    },
  },
  {
    id: 'about', name: 'Om oss', desc: 'Verdier, visjon, bærekraft og kontorer.',
    icons: {
      'compass': '<circle cx="12" cy="12" r="8.5"/><path d="M12 3.5v2M12 18.5v2M3.5 12h2M18.5 12h2"/><path d="m14.5 9.5-1.5 3.5-3.5 1.5 1.5-3.5Z"/>',
      'handshake': '<path d="m2.5 11 3.5-4 4 1.2L12.5 7 18 7l3.5 4"/><path d="m21.5 11-4 4.5-1.5-1M2.5 11l6 6.5 1.5-1.2 1.5 1.2 1.5-1.2 1.5 1.2 2-2.2M10 8.2 7.8 11a1.5 1.5 0 0 0 2.2 2l2.5-2.5 4.5 4.5"/>',
      'leaf': '<path d="M5 19C4 11 9 5 19.5 4.5 20 15 14 20 6 19Z"/><path d="M5 19c3-5 6-8 10.5-10.5"/>',
      'office': '<path d="M3.5 20.5h17M5.5 20.5V8.5l6.5-4 6.5 4v12"/><path d="M9.5 20.5v-4h5v4M9 11h1.5M13.5 11H15"/>',
      'spark': '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>',
      'map': '<path d="m3.5 6.5 5.5-2 6 2 5.5-2v13l-5.5 2-6-2-5.5 2Z"/><path d="M9 4.5v13M15 6.5v13"/>',
    },
  },
  {
    id: 'social', name: 'Sosiale medier', desc: 'Følg Bouvet. Alltid med tekstetikett eller aria-label.',
    icons: {
      'linkedin': '<rect x="3.5" y="3.5" width="17" height="17" rx="3"/><path d="M8 10.5V16M8 7.6v.1M11.5 16v-5.5M11.5 13c0-1.6 1-2.6 2.4-2.6s2.1.9 2.1 2.6V16"/>',
      'facebook': '<circle cx="12" cy="12" r="8.5"/><path d="M13.2 20.5V13h2.3l.4-2.6h-2.7V8.9c0-.8.3-1.3 1.4-1.3h1.4V5.3a17 17 0 0 0-2-.1c-2 0-3.3 1.2-3.3 3.4v1.8H8.4V13h2.3v7.5"/>',
      'instagram': '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="3.8"/><path d="M17 7v.1"/>',
      'youtube': '<rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="m10 9 5 3-5 3Z"/>',
    },
  },
];

export const ICONS = Object.assign({}, ...ICON_GROUPS.map(g => g.icons));

export function sprite() {
  return `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>${
    Object.entries(ICONS).map(([k, v]) => `<symbol id="i-${k}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${v}</symbol>`).join('')
  }</defs></svg>`;
}

export const ic = (name, cls = '') => `<svg class="ic ${cls}" aria-hidden="true"><use href="#i-${name}"/></svg>`;
