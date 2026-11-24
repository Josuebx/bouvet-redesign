import { mkdirSync, writeFileSync, cpSync, rmSync } from 'node:fs';
import { page } from './src/layout.mjs';
import home from './src/pages/home.mjs';
import services from './src/pages/services.mjs';
import careers from './src/pages/careers.mjs';
import blog from './src/pages/blog.mjs';
import investor from './src/pages/investor.mjs';
import courses from './src/pages/courses.mjs';
import about from './src/pages/about.mjs';
import ds from './src/pages/design-system.mjs';

rmSync('dist', { recursive: true, force: true });
mkdirSync('dist', { recursive: true });
cpSync('assets', 'dist/assets', { recursive: true });
for (const p of [home, services, careers, blog, investor, courses, about, ds]) {
  writeFileSync(`dist/${p.file}.html`, page(p));
  console.log('✓', p.file);
}
writeFileSync('dist/404.html', page({ slug: '404', title: 'Siden finnes ikke – Bouvet', desc: '', body: `<section class="section"><div class="wrap" style="text-align:center"><p class="display">404</p><p class="lead" style="margin:1rem auto 2rem">Vi fant ikke siden du lette etter.</p><a class="btn" href="/">Til forsiden</a></div></section>` }));
