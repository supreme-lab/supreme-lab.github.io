/* ============================================================
   SkillVetBench — scroll reveals + results bar fills
   Robust against frozen animation clocks (hidden iframes,
   some print/preview contexts): if the timeline doesn't
   advance, we drop .anim and show everything instantly.
   ============================================================ */
(function () {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveals = [...document.querySelectorAll('.reveal')];
  const fills = [...document.querySelectorAll('.prim-fill')];

  function showAllStatic() {
    document.documentElement.classList.remove('anim');
    fills.forEach(f => f.style.width = (f.dataset.w || 0) + '%');
  }

  // Decide whether real animation will run: not reduced-motion AND the
  // document timeline actually advances over a short window.
  function decideAnim(cb) {
    if (reduce) return cb(false);
    const a0 = document.timeline ? (document.timeline.currentTime || 0) : 0;
    setTimeout(() => {
      const a1 = document.timeline ? (document.timeline.currentTime || 0) : 0;
      cb(a1 - a0 > 0);
    }, 200);
  }

  decideAnim(function (ok) {
    if (!ok) { showAllStatic(); return; }
    document.documentElement.classList.add('anim');

    const vh = () => window.innerHeight || document.documentElement.clientHeight;
    function check() {
      const h = vh();
      reveals.forEach(el => {
        if (el.classList.contains('in')) return;
        const r = el.getBoundingClientRect();
        if (r.top < h * 0.92 && r.bottom > 0) {
          const sibs = [...el.parentElement.querySelectorAll(':scope > .reveal')];
          const delay = Math.min(Math.max(sibs.indexOf(el), 0), 5) * 65;
          setTimeout(() => el.classList.add('in'), delay);
        }
      });
      const prim = document.querySelector('.primitives');
      if (prim && !prim.dataset.filled) {
        const r = prim.getBoundingClientRect();
        if (r.top < h * 0.78 && r.bottom > 0) {
          prim.dataset.filled = '1';
          fills.forEach(f => f.style.width = (f.dataset.w || 0) + '%');
        }
      }
    }
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    check();
    // safety nets
    setTimeout(check, 300);
    setTimeout(() => {
      reveals.forEach(el => el.classList.add('in'));
      fills.forEach(f => { if (!f.style.width) f.style.width = (f.dataset.w || 0) + '%'; });
    }, 3500);
  });
})();
