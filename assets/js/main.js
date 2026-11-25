/* Bouvet v4 — interaction layer. No dependencies.
   Motion policy: only text enters (words slide up, lines fade up), once. Everything else is static + hover. */
(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* ---------- fixed header state */
  const hdr = $('.hdr');
  const onScroll = () => hdr?.classList.toggle('is-scrolled', scrollY > 8);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* ---------- language menu */
  $$('.lang').forEach(l => {
    const b = $('.lang__btn', l);
    b.addEventListener('click', e => { e.stopPropagation(); l.classList.toggle('is-open'); b.setAttribute('aria-expanded', l.classList.contains('is-open')); });
    document.addEventListener('click', () => { l.classList.remove('is-open'); b.setAttribute('aria-expanded', 'false'); });
  });

  /* ---------- mobile menu */
  const mnav = $('.mnav'), burger = $('.burger');
  const setNav = open => {
    mnav.classList.toggle('is-open', open); document.body.classList.toggle('modal-open', open);
    burger?.setAttribute('aria-expanded', open);
    if (burger) burger.innerHTML = `<svg class="ic" aria-hidden="true"><use href="#i-${open ? 'close' : 'menu'}"/></svg>`;
  };
  $$('[data-mnav]').forEach(b => b.addEventListener('click', () => setNav(!mnav.classList.contains('is-open'))));

  /* ---------- split headline words */
  $$('[data-split]').forEach(el => {
    let wi = 0;
    const walk = node => [...node.childNodes].forEach(n => {
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
    walk(el); el.classList.add('split-words');
  });

  /* ---------- reveal text on view */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in'); io.unobserve(e.target);
  }), { threshold: .2, rootMargin: '0px 0px -40px 0px' });
  $$('.rv, .split-words').forEach(el => io.observe(el));

  /* ---------- static donuts */
  $$('.donut .val').forEach(c => { const r = +c.getAttribute('r'), L = 2 * Math.PI * r, v = +c.dataset.v; c.style.strokeDasharray = `${L * v / 100} ${L}`; });

  /* ---------- project slider */
  $$('[data-slider]').forEach(s => {
    const slides = $$('.slide', s), cur = $('[data-cur]', s);
    const [hp, hc, hn] = [$('.slider__heads [data-prev]', s), $('.slider__heads .is-cur', s), $('.slider__heads [data-next]', s)];
    let i = 0;
    const label = sl => `${sl.dataset.sub},<br>${sl.dataset.head}`;
    const go = n => {
      i = (n + slides.length) % slides.length;
      slides.forEach((sl, k) => sl.classList.toggle('is-active', k === i));
      cur.textContent = String(i + 1).padStart(2, '0');
      const p = slides[(i - 1 + slides.length) % slides.length], nx = slides[(i + 1) % slides.length];
      hp.innerHTML = label(p); hc.innerHTML = label(slides[i]); hn.innerHTML = label(nx);
    };
    $$('[data-prev]', s).forEach(b => b.addEventListener('click', () => go(i - 1)));
    $$('[data-next]', s).forEach(b => b.addEventListener('click', () => go(i + 1)));
    s.addEventListener('keydown', e => { if (e.key === 'ArrowRight') go(i + 1); if (e.key === 'ArrowLeft') go(i - 1); });
    go(0);
  });

  /* ---------- tabs (investor + contact form) */
  $$('[role="tablist"]').forEach(list => {
    const tabs = $$('[role="tab"]', list);
    let ind = null;
    if (list.classList.contains('tabs')) { ind = document.createElement('span'); ind.className = 'tabs__ind'; list.prepend(ind); }
    const select = (t, focus) => {
      tabs.forEach(x => { const on = x === t; x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1; const p = document.getElementById(x.getAttribute('aria-controls')); if (p) p.hidden = !on; });
      if (ind) { ind.style.left = t.offsetLeft + 'px'; ind.style.width = t.offsetWidth + 'px'; }
      if (focus) t.focus();
      $$('.rv:not(.in), .split-words:not(.in)', document.getElementById(t.getAttribute('aria-controls'))).forEach(el => el.classList.add('in'));
    };
    tabs.forEach((t, k) => {
      t.addEventListener('click', () => select(t));
      t.addEventListener('keydown', e => { const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (d) select(tabs[(k + d + tabs.length) % tabs.length], true); });
    });
    const init = () => select(tabs.find(t => t.getAttribute('aria-selected') === 'true') || tabs[0]);
    requestAnimationFrame(init); addEventListener('resize', init);
  });

  /* ---------- filter chips + load more (blog) */
  $$('[data-filter-group]').forEach(group => {
    const target = $(group.dataset.filterGroup), more = $('[data-more]');
    const apply = f => {
      $$('[data-tags]', target).forEach(card => card.classList.toggle('is-hidden', !(f === 'all' || card.dataset.tags.split(' ').includes(f))));
      if (f !== 'all') { target.classList.remove('is-hidden-more'); more?.setAttribute('hidden', ''); }
    };
    $$('.chip', group).forEach(chip => chip.addEventListener('click', () => {
      $$('.chip', group).forEach(c => c.setAttribute('aria-pressed', c === chip)); apply(chip.dataset.filter);
    }));
  });
  $$('[data-more]').forEach(b => b.addEventListener('click', () => { $(b.dataset.more).classList.remove('is-hidden-more'); b.hidden = true; }));

  /* ---------- modals */
  let lastFocus = null;
  const openModal = (id, data = {}) => {
    const m = document.getElementById(id); if (!m) return;
    lastFocus = document.activeElement; m.classList.remove('is-done');
    $$('[data-fill]', m).forEach(el => { const k = el.dataset.fill; if (data[k]) { if ('value' in el && el.tagName !== 'SPAN' && el.tagName !== 'B') el.value = data[k]; else el.textContent = data[k]; } });
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
    if (t) { e.preventDefault(); if (mnav?.classList.contains('is-open')) setNav(false); openModal(t.dataset.modal, { ...t.dataset }); return; }
    if (e.target.closest('[data-close]')) closeModal(e.target.closest('.modal'));
  });
  document.addEventListener('keydown', e => {
    const open = $('.modal.is-open');
    if (e.key === 'Escape') { if (open) closeModal(open); else if (mnav?.classList.contains('is-open')) setNav(false); }
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openModal('m-search'); }
    if (e.key === 'Tab' && open) {
      const f = $$('a[href], button:not([disabled]), input:not([type=hidden]), select, textarea', open).filter(x => x.offsetParent !== null);
      if (!f.length) return; const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ---------- forms */
  const validate = f => {
    let ok = true;
    $$('.field', f).forEach(fl => {
      const el = $('input, select, textarea', fl); if (!el) return;
      let bad = el.required && (el.type === 'checkbox' ? !el.checked : !el.value.trim());
      if (!bad && el.type === 'email' && el.value) bad = !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(el.value);
      if (!bad && el.type === 'tel' && el.value) bad = !/^[+\d][\d\s-]{6,}$/.test(el.value);
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
        else { f.reset(); toast(f.dataset.success || 'Takk – vi har mottatt meldingen.'); }
      }, 800);
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
  function toast(msg) { toastEl.innerHTML = `<svg class="ic" aria-hidden="true"><use href="#i-check"/></svg>${msg}`; toastEl.classList.add('is-on'); clearTimeout(toast.t); toast.t = setTimeout(() => toastEl.classList.remove('is-on'), 3000); }
  $$('[data-copy]').forEach(el => el.addEventListener('click', () => { navigator.clipboard?.writeText(el.dataset.copy); toast(`Kopiert: ${el.dataset.copy}`); }));

  /* ---------- ⌘K search */
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
      res.forEach((r, i) => { if (r.g !== g) { g = r.g; html += `<div class="cmd__group">${g}</div>`; } html += `<a class="cmd__item" role="option" href="${r.u}" data-i="${i}"><span class="ci"><svg class="ic"><use href="#i-${r.i}"/></svg></span><span><b>${r.t}</b>${r.d ? `<small>${r.d}</small>` : ''}</span></a>`; });
      list.innerHTML = html; items = $$('.cmd__item', list); sel = 0; mark();
    };
    const mark = () => items.forEach((it, i) => { it.setAttribute('aria-selected', i === sel); if (i === sel) it.scrollIntoView({ block: 'nearest' }); });
    inp.addEventListener('input', render);
    inp.addEventListener('keydown', e => {
      if (e.key === 'ArrowDown') { e.preventDefault(); sel = Math.min(items.length - 1, sel + 1); mark(); }
      if (e.key === 'ArrowUp') { e.preventDefault(); sel = Math.max(0, sel - 1); mark(); }
      if (e.key === 'Enter' && items[sel]) { e.preventDefault(); location.href = items[sel].href; }
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

  /* ---------- scroll-spy for sticky indexes */
  const spy = (links, cls = 'is-active') => {
    if (!links.length) return;
    const ob = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) links.forEach(a => a.classList.toggle(cls, a.hash === '#' + e.target.id)); }), { rootMargin: '-35% 0px -60% 0px' });
    links.forEach(a => { const t = document.querySelector(a.hash); if (t) ob.observe(t); });
  };
  spy($$('.sidx__nav a'));
  spy($$('.ds-nav a'));
})();
