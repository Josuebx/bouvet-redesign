// Thin-line glyphs (1px, non-scaling) — decorative marks for tiles and steps.
// Drawn on a 56×56 grid with an open centre, after the reference's crosshair marks.
const L = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;
const ray = (deg, r1 = 9, r2 = 27) => {
  const a = deg * Math.PI / 180, c = 28;
  const f = v => +v.toFixed(2);
  return L(f(c + Math.cos(a) * r1), f(c + Math.sin(a) * r1), f(c + Math.cos(a) * r2), f(c + Math.sin(a) * r2));
};
const rays = (degs, r1, r2) => degs.map(d => ray(d, r1, r2)).join('');

export const GLYPHS = {
  cross: rays([0, 90, 180, 270], 8, 27),
  ex: rays([45, 135, 225, 315], 9, 30),
  burst: rays([0, 45, 90, 135, 180, 225, 270, 315], 9, 27),
  aster: rays([30, 90, 150, 210, 270, 330], 7, 26),
  ring: '<circle cx="28" cy="28" r="18"/>' + rays([0, 90, 180, 270], 22, 28),
  frame: '<rect x="8" y="8" width="40" height="40"/><rect x="18" y="18" width="20" height="20"/>',
  grid: L(28, 4, 28, 52) + L(4, 28, 52, 28) + '<rect x="4" y="4" width="48" height="48"/>',
  steps: L(4, 16, 36, 16) + L(12, 28, 44, 28) + L(20, 40, 52, 40),
  diag: L(6, 50, 50, 6) + L(6, 36, 36, 6) + L(20, 50, 50, 20),
  arc: '<path d="M6 44a22 22 0 0 1 44 0"/>' + L(6, 50, 50, 50),
  diamond: '<path d="M28 4 52 28 28 52 4 28Z"/>' + L(28, 20, 28, 36),
  dots: [10, 28, 46].flatMap(x => [10, 28, 46].map(y => `<circle cx="${x}" cy="${y}" r="1.6"/>`)).join(''),
  wave: '<path d="M4 34c8-14 16-14 24 0s16 14 24 0"/>' + L(4, 22, 52, 22),
  target: '<circle cx="28" cy="28" r="22"/><circle cx="28" cy="28" r="10"/>',
};
export const GLYPH_NAMES = Object.keys(GLYPHS);
export const glyph = (name, cls = '') => `<svg class="glyph ${cls}" viewBox="0 0 56 56" aria-hidden="true">${GLYPHS[name] || GLYPHS.cross}</svg>`;
export const glyphAt = (i, cls = '') => glyph(GLYPH_NAMES[i % GLYPH_NAMES.length], cls);
