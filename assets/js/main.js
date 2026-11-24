/* Bouvet — interaction layer. No dependencies. */
(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  requestAnimationFrame(() => document.body.classList.add('is-loaded'));

  /* ---------- header: scrolled state, hide on scroll down, progress bar */
  const header = $('.site-header');
  const bar = $('.scroll-bar');
  let lastY = 0;
  const onScroll = () => {
    const y = scrollY;
    header?.classList.toggle('is-scrolled', y > 10);
    header?.classList.toggle('is-hidden', y > 400 && y > lastY && !document.body.classList.contains('modal-open'));
    lastY = y;
    const h = document.documentElement.scrollHeight - innerHeight;
    if (bar) bar.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
  };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* ---------- nav hover pill */
  const links = $('.nav__links');
  if (links) {
    const pill = document.createElement('span'); pill.className = 'nav__pill'; links.prepend(pill);
    const move = a => { pill.style.left = a.offsetLeft + 'px'; pill.style.width = a.offsetWidth + 'px'; pill.style.opacity = 1; $$('a', links).forEach(x => x.classList.toggle('is-hover', x === a)); };
    $$('a', links).forEach(a => { a.addEventListener('mouseenter', () => move(a)); a.addEventListener('focus', () => move(a)); });
    links.addEventListener('mouseleave', () => { pill.style.opacity = 0; $$('a', links).forEach(x => x.classList.remove('is-hover')); });
  }

  /* ---------- language menu */
  $$('.lang').forEach(l => {
    const b = $('.lang__btn', l);
    b.addEventListener('click', e => { e.stopPropagation(); l.classList.toggle('is-open'); b.setAttribute('aria-expanded', l.classList.contains('is-open')); });
    document.addEventListener('click', () => { l.classList.remove('is-open'); b.setAttribute('aria-expanded', 'false'); });
  });

  /* ---------- mobile menu */
  const mnav = $('.mnav');
  $$('[data-mnav]').forEach(b => b.addEventListener('click', () => {
    const open = !mnav.classList.contains('is-open');
    mnav.classList.toggle('is-open', open); document.body.classList.toggle('modal-open', open);
    $$('.mnav__link', mnav).forEach((a, i) => a.style.transitionDelay = open ? `${150 + i * 50}ms` : '0ms');
    if (open) $('.mnav__close', mnav).focus();
  }));

  /* ---------- split words for headline reveal */
  $$('[data-split]').forEach(el => {
    let wi = 0;
    const walk = node => {
      [...node.childNodes].forEach(n => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(t => {
            if (!t) return;
            if (/^\s+$/.test(t)) { frag.append(' '); return; }
            const w = document.createElement('span'); w.className = 'w';
            const i = document.createElement('span'); i.textContent = t; i.style.setProperty('--wi', wi++);
            w.append(i); frag.append(w);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1) walk(n);
      });
    };
    walk(el); el.classList.add('split-words');
  });

  /* ---------- reveal on view */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in'); io.unobserve(e.target);
    if (e.target.matches('[data-count]')) count(e.target);
    if (e.target.matches('.donut')) donut(e.target);
  }), { threshold: .15, rootMargin: '0px 0px -40px 0px' });
  $$('.rv, .rv-scale, .split-words, [data-count], .donut, .scribble, .chart').forEach(el => io.observe(el));
  $$('[data-stagger]').forEach(g => [...g.children].forEach((c, i) => { c.classList.add('rv'); c.style.setProperty('--i', i % 6); io.observe(c); }));

  function count(el) {
    const to = parseFloat(el.dataset.count), dec = (el.dataset.count.split('.')[1] || '').length;
    const pre = el.dataset.pre || '', suf = el.dataset.suf || '';
    const fmt = v => pre + v.toLocaleString('nb-NO', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + suf;
    if (reduce) { el.textContent = fmt(to); return; }
    const t0 = performance.now(), d = 1600;
    const tick = t => { const p = Math.min(1, (t - t0) / d), e = 1 - Math.pow(1 - p, 4); el.textContent = fmt(to * e); if (p < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  }
  function donut(svg) {
    $$('.val', svg).forEach(c => { const r = +c.getAttribute('r'), L = 2 * Math.PI * r, v = +c.dataset.v; c.style.strokeDasharray = `${L * v / 100} ${L}`; });
  }

  /* ---------- button fill origin follows pointer */
  $$('.btn').forEach(b => b.addEventListener('pointerenter', e => {
    const r = b.getBoundingClientRect(); b.style.setProperty('--mx', `${e.clientX - r.left}px`); b.style.setProperty('--my', `${e.clientY - r.top}px`);
  }));

  /* ---------- magnetic elements */
  if (!reduce && matchMedia('(hover: hover)').matches) {
    $$('[data-magnetic]').forEach(el => {
      el.addEventListener('pointermove', e => { const r = el.getBoundingClientRect(); el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .25}px, ${(e.clientY - r.top - r.height / 2) * .35}px)`; });
      el.addEventListener('pointerleave', () => el.style.transform = '');
    });
    // hero parallax
    const media = $('.hero__media');
    if (media) addEventListener('pointermove', e => {
      const x = e.clientX / innerWidth - .5, y = e.clientY / innerHeight - .5;
      media.style.transform = `translate(${x * -14}px, ${y * -10}px)`;
      const ring = $('.hero__ring'); if (ring) ring.style.transform = `translate(${x * 18}px, ${y * 18}px)`;
    });
    // cursor
    const cur = document.createElement('div'); cur.className = 'cursor'; document.body.append(cur);
    let cx = 0, cy = 0, tx = 0, ty = 0;
    addEventListener('pointermove', e => { tx = e.clientX; ty = e.clientY; cur.classList.add('is-on'); });
    document.addEventListener('pointerleave', () => cur.classList.remove('is-on'));
    const loop = () => { cx += (tx - cx) * .2; cy += (ty - cy) * .2; cur.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`; requestAnimationFrame(loop); };
    loop();
    document.addEventListener('pointerover', e => cur.classList.toggle('is-big', !!e.target.closest('.mcard, .svc, [data-cursor]')));
  }

  /* ---------- horizontal scrollers */
  $$('[data-hscroll]').forEach(wrap => {
    const sc = $('.hscroll', wrap), prog = $('.progress span', wrap);
    const upd = () => { const max = sc.scrollWidth - sc.clientWidth; const p = max > 0 ? sc.scrollLeft / max : 0; if (prog) { prog.style.width = `${Math.max(12, sc.clientWidth / sc.scrollWidth * 100)}%`; prog.style.transform = `translateX(${p * (100 / (parseFloat(prog.style.width) / 100) - 100)}%)`; } };
    sc.addEventListener('scroll', upd, { passive: true }); addEventListener('resize', upd); upd();
    $$('[data-dir]', wrap).forEach(b => b.addEventListener('click', () => sc.scrollBy({ left: (+b.dataset.dir) * sc.clientWidth * .8, behavior: 'smooth' })));
    let down = false, sx = 0, sl = 0, moved = false;
    sc.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse') return; down = true; moved = false; sx = e.clientX; sl = sc.scrollLeft; });
    addEventListener('pointermove', e => { if (!down) return; const dx = e.clientX - sx; if (Math.abs(dx) > 5) { moved = true; sc.classList.add('is-drag'); } sc.scrollLeft = sl - dx; });
    addEventListener('pointerup', () => { down = false; setTimeout(() => sc.classList.remove('is-drag'), 0); });
    sc.addEventListener('click', e => { if (moved) e.preventDefault(); }, true);
  });

  /* ---------- tabs with sliding indicator */
  $$('[role="tablist"]').forEach(list => {
    const ind = document.createElement('span'); ind.className = 'tabs__ind'; list.prepend(ind);
    const tabs = $$('[role="tab"]', list);
    const select = (t, focus) => {
      tabs.forEach(x => { const on = x === t; x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1; const p = document.getElementById(x.getAttribute('aria-controls')); if (p) p.hidden = !on; });
      ind.style.left = t.offsetLeft + 'px'; ind.style.width = t.offsetWidth + 'px';
      if (focus) t.focus();
      $$('.chart, [data-count], .donut', document.getElementById(t.getAttribute('aria-controls'))).forEach(el => { el.classList.add('in'); if (el.matches('[data-count]')) count(el); if (el.matches('.donut')) donut(el); });
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => select(t));
      t.addEventListener('keydown', e => { const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (d) select(tabs[(i + d + tabs.length) % tabs.length], true); });
    });
    const init = tabs.find(t => t.getAttribute('aria-selected') === 'true') || tabs[0];
    requestAnimationFrame(() => select(init)); addEventListener('resize', () => select(tabs.find(t => t.getAttribute('aria-selected') === 'true')));
  });

  /* ---------- filter chips (blog) */
  $$('[data-filter-group]').forEach(group => {
    const target = $(group.dataset.filterGroup);
    $$('.chip', group).forEach(chip => chip.addEventListener('click', () => {
      $$('.chip', group).forEach(c => c.setAttribute('aria-pressed', c === chip));
      const f = chip.dataset.filter;
      $$('[data-tags]', target).forEach((card, i) => {
        const show = f === 'all' || card.dataset.tags.split(' ').includes(f);
        card.classList.toggle('is-hidden', !show);
        if (show) { card.classList.remove('is-entering', 'rv'); card.classList.add('in'); void card.offsetWidth; card.style.animationDelay = `${(i % 6) * 50}ms`; card.classList.add('is-entering'); }
      });
    }));
  });

  /* ---------- modals (popup + blurred backdrop) */
  let lastFocus = null;
  const openModal = (id, data = {}) => {
    const m = document.getElementById(id); if (!m) return;
    lastFocus = document.activeElement;
    m.classList.remove('is-done');
    $$('[data-fill]', m).forEach(el => { const k = el.dataset.fill; if (data[k]) { if ('value' in el && el.tagName !== 'SPAN') el.value = data[k]; else el.textContent = data[k]; } });
    m.classList.add('is-open'); m.setAttribute('aria-hidden', 'false'); document.body.classList.add('modal-open');
    setTimeout(() => ($('input:not([type=hidden]), select, textarea', m) || $('.modal__close', m))?.focus(), 80);
  };
  const closeModal = m => {
    m.classList.remove('is-open'); m.setAttribute('aria-hidden', 'true');
    if (!$('.modal.is-open') && !mnav?.classList.contains('is-open')) document.body.classList.remove('modal-open');
    lastFocus?.focus?.();
  };
  document.addEventListener('click', e => {
    const t = e.target.closest('[data-modal]');
    if (t) { e.preventDefault(); if (mnav?.classList.contains('is-open')) $('[data-mnav]', mnav).click(); openModal(t.dataset.modal, { ...t.dataset }); return; }
    if (e.target.closest('[data-close]')) closeModal(e.target.closest('.modal'));
  });
  document.addEventListener('keydown', e => {
    const open = $('.modal.is-open');
    if (e.key === 'Escape') { if (open) closeModal(open); else if (mnav?.classList.contains('is-open')) $('[data-mnav]', mnav).click(); }
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openModal('m-search'); }
    if (e.key === 'Tab' && open) { // focus trap
      const f = $$('a[href], button:not([disabled]), input:not([type=hidden]), select, textarea', open).filter(x => x.offsetParent !== null);
      if (!f.length) return; const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ---------- form validation + success feedback */
  const validate = f => {
    let ok = true;
    $$('.field', f).forEach(fl => {
      const el = $('input, select, textarea', fl); if (!el) return;
      let bad = el.required && !el.value.trim();
      if (!bad && el.type === 'email' && el.value) bad = !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(el.value);
      if (!bad && el.type === 'tel' && el.value) bad = !/^[+\d][\d\s-]{6,}$/.test(el.value);
      if (!bad && el.type === 'checkbox' && el.required) bad = !el.checked;
      fl.classList.toggle('is-invalid', bad); el.setAttribute('aria-invalid', bad);
      if (bad && ok) { el.focus(); ok = false; }
    });
    return ok;
  };
  $$('form[data-form]').forEach(f => {
    f.noValidate = true;
    $$('input, select, textarea', f).forEach(el => el.addEventListener('input', () => el.closest('.field')?.classList.remove('is-invalid')));
    f.addEventListener('submit', e => {
      e.preventDefault(); if (!validate(f)) return;
      const btn = $('[type=submit]', f); btn.classList.add('is-loading');
      setTimeout(() => {
        btn.classList.remove('is-loading');
        const m = f.closest('.modal');
        if (m) { m.classList.add('is-done'); f.reset(); $('.success .btn', m)?.focus(); }
        else { f.reset(); toast(f.dataset.success || 'Takk! Du er nå påmeldt nyhetsbrevet.'); }
      }, 900);
    });
  });
  $$('.drop').forEach(d => {
    const inp = $('input', d), lab = $('.drop__name', d);
    inp.addEventListener('change', () => lab.textContent = inp.files[0]?.name || 'Ingen fil valgt');
    ['dragover', 'dragenter'].forEach(ev => d.addEventListener(ev, e => { e.preventDefault(); d.classList.add('is-over'); }));
    ['dragleave', 'drop'].forEach(ev => d.addEventListener(ev, e => { e.preventDefault(); d.classList.remove('is-over'); }));
    d.addEventListener('drop', e => { if (e.dataTransfer.files[0]) { inp.files = e.dataTransfer.files; lab.textContent = e.dataTransfer.files[0].name; } });
  });

  /* ---------- toast */
  const toastEl = document.createElement('div'); toastEl.className = 'toast'; toastEl.setAttribute('role', 'status'); document.body.append(toastEl);
  function toast(msg) { toastEl.innerHTML = `<svg class="ic" aria-hidden="true"><use href="#i-check"/></svg>${msg}`; toastEl.classList.add('is-on'); clearTimeout(toast.t); toast.t = setTimeout(() => toastEl.classList.remove('is-on'), 2600); }
  $$('[data-copy]').forEach(el => el.addEventListener('click', () => { navigator.clipboard?.writeText(el.dataset.copy); toast(`Kopiert: ${el.dataset.copy}`); }));

  /* ---------- command-palette search (⌘K) */
  const sm = $('#m-search');
  if (sm && window.SEARCH_INDEX) {
    const inp = $('input', sm), list = $('.cmd__list', sm);
    let sel = 0, items = [];
    const norm = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    const render = () => {
      const q = norm(inp.value.trim());
      const res = window.SEARCH_INDEX.filter(r => !q || norm(r.t + ' ' + (r.d || '') + ' ' + r.g).includes(q)).slice(0, q ? 30 : 9);
      if (!res.length) { list.innerHTML = `<div class="cmd__empty">Ingen treff for «${inp.value}». Prøv «AI», «kurs» eller «Bergen».</div>`; items = []; return; }
      let html = '', g = '';
      res.forEach((r, i) => { if (r.g !== g) { g = r.g; html += `<div class="cmd__group">${g}</div>`; } html += `<a class="cmd__item" role="option" href="${r.u}" data-i="${i}"><span class="card__icon"><svg class="ic"><use href="#i-${r.i}"/></svg></span><span><b>${r.t}</b>${r.d ? `<small>${r.d}</small>` : ''}</span></a>`; });
      list.innerHTML = html; items = $$('.cmd__item', list); sel = 0; mark();
    };
    const mark = () => items.forEach((it, i) => { it.setAttribute('aria-selected', i === sel); if (i === sel) it.scrollIntoView({ block: 'nearest' }); });
    inp.addEventListener('input', render);
    inp.addEventListener('keydown', e => {
      if (e.key === 'ArrowDown') { e.preventDefault(); sel = Math.min(items.length - 1, sel + 1); mark(); }
      if (e.key === 'ArrowUp') { e.preventDefault(); sel = Math.max(0, sel - 1); mark(); }
      if (e.key === 'Enter' && items[sel]) { e.preventDefault(); items[sel].click(); location.href = items[sel].href; }
    });
    list.addEventListener('click', () => closeModal(sm));
    render();
  }

  /* ---------- offices map ↔ list */
  $$('[data-city]').forEach(el => {
    const on = v => $$(`[data-city="${el.dataset.city}"]`).forEach(x => x.classList.toggle('is-active', v));
    el.addEventListener('mouseenter', () => on(true)); el.addEventListener('mouseleave', () => on(false));
    el.addEventListener('focus', () => on(true)); el.addEventListener('blur', () => on(false));
  });

  /* ---------- design-system scrollspy */
  const dsLinks = $$('.ds-nav a');
  if (dsLinks.length) {
    const spy = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) dsLinks.forEach(a => a.classList.toggle('is-active', a.hash === '#' + e.target.id)); }), { rootMargin: '-40% 0px -55% 0px' });
    $$('.ds-sec').forEach(s => spy.observe(s));
  }
})();
