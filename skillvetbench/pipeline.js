/* ============================================================
   SkillVetBench — pipeline animation controller
   A skill packet auto-loops through the two vetting stages.
   ============================================================ */
(function () {
  const shell = document.getElementById('pipeline');
  if (!shell) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const stations = ['input', 's1', 's2', 'out'].map(k => shell.querySelector(`[data-st="${k}"]`));
  const packet = shell.querySelector('.pl-packet');
  const flow = shell.querySelector('.pl-flow');
  const caps = [...shell.querySelectorAll('.cap')];
  const phaseLabel = shell.querySelector('.pl-phase b');

  const labels = {
    input: 'Candidate skill ingested',
    s1: 'Stage 1 · Semantic analysis',
    s2: 'Stage 2 · Sandbox execution',
    out: 'Verdict · verified malicious'
  };

  // center of a station's inner card, relative to the shell
  function centerOf(st) {
    const inner = st.querySelector('.station-inner');
    const a = inner.getBoundingClientRect();
    const b = shell.getBoundingClientRect();
    return { x: a.left - b.left + a.width / 2, y: a.top - b.top + a.height / 2 };
  }

  function placePacket(st, animate) {
    const c = centerOf(st);
    if (!animate) {
      const prev = packet.style.transition;
      packet.style.transition = 'none';
      packet.style.transform = `translate(${c.x}px, ${c.y}px) translate(-50%, -50%)`;
      packet.getBoundingClientRect();
      packet.style.transition = prev;
    } else {
      packet.style.transform = `translate(${c.x}px, ${c.y}px) translate(-50%, -50%)`;
    }
  }

  function setActive(idx) {
    stations.forEach((st, i) => {
      st.classList.toggle('is-active', i === idx);
      st.classList.toggle('is-done', i < idx);
    });
    caps.forEach((c, i) => c.classList.toggle('is-active', i === idx));
    const key = ['input', 's1', 's2', 'out'][idx];
    if (phaseLabel) phaseLabel.textContent = labels[key];
  }

  function flowDot(fromSt, toSt, dur) {
    const a = centerOf(fromSt), b = centerOf(toSt);
    const dot = document.createElement('span');
    dot.className = 'flow-dot';
    flow.appendChild(dot);
    const anim = dot.animate(
      [
        { transform: `translate(${a.x}px, ${a.y}px) translate(-50%,-50%)`, opacity: 0 },
        { opacity: 1, offset: 0.15 },
        { opacity: 1, offset: 0.85 },
        { transform: `translate(${b.x}px, ${b.y}px) translate(-50%,-50%)`, opacity: 0 }
      ],
      { duration: dur, easing: 'cubic-bezier(.5,0,.3,1)' }
    );
    anim.onfinish = () => dot.remove();
  }

  // ---- static end-state when animation won't run (frozen clock / reduced motion / print) ----
  function staticState() {
    stations.forEach((st, i) => st.classList.add(i < 3 ? 'is-done' : 'is-active'));
    caps.forEach(c => c.classList.add('is-active'));
    packet.style.display = 'none';
    if (phaseLabel) phaseLabel.textContent = labels.out;
  }

  // ---- timeline ----
  let token = 0;
  const wait = (ms) => new Promise(r => setTimeout(r, ms));

  async function run() {
    const me = ++token;
    const alive = () => me === token;

    // reset
    stations.forEach(st => st.classList.remove('is-active', 'is-done'));
    caps.forEach(c => c.classList.remove('is-active'));
    packet.className = 'pl-packet';
    placePacket(stations[0], false);
    await wait(60); if (!alive()) return;

    // input
    packet.classList.add('show');
    setActive(0);
    await wait(1400); if (!alive()) return;

    // → stage 1
    flowDot(stations[0], stations[1], 950);
    placePacket(stations[1], true);
    await wait(620); if (!alive()) return;
    setActive(1);
    await wait(1500); if (!alive()) return;
    packet.classList.add('tint-amber'); // suspicious
    await wait(1800); if (!alive()) return;

    // → stage 2
    flowDot(stations[1], stations[2], 950);
    placePacket(stations[2], true);
    await wait(620); if (!alive()) return;
    setActive(2);
    await wait(2600); if (!alive()) return;
    packet.classList.remove('tint-amber');
    packet.classList.add('tint-red'); // escalated malicious
    await wait(1500); if (!alive()) return;

    // → output
    flowDot(stations[2], stations[3], 950);
    placePacket(stations[3], true);
    await wait(640); if (!alive()) return;
    setActive(3);
    await wait(3200); if (!alive()) return;

    // fade & loop
    packet.classList.remove('show');
    await wait(900); if (!alive()) return;
    run();
  }

  // keep packet aligned on resize
  let rAF;
  window.addEventListener('resize', () => {
    cancelAnimationFrame(rAF);
    rAF = requestAnimationFrame(() => {
      const activeIdx = stations.findIndex(s => s.classList.contains('is-active'));
      if (activeIdx >= 0) placePacket(stations[activeIdx], false);
    });
  });

  const replay = shell.querySelector('.pl-replay');
  if (replay) replay.addEventListener('click', () => run());

  // Decide static vs animated by probing the real animation clock.
  function decideAnim(cb) {
    if (reduce) return cb(false);
    const a0 = document.timeline ? (document.timeline.currentTime || 0) : 0;
    setTimeout(() => {
      const a1 = document.timeline ? (document.timeline.currentTime || 0) : 0;
      cb(a1 - a0 > 0);
    }, 220);
  }

  function boot() {
    decideAnim(function (ok) {
      if (!ok) { document.documentElement.classList.remove('anim'); staticState(); return; }
      document.documentElement.classList.add('anim');
      placePacket(stations[0], false);
      run();
    });
  }
  if (document.readyState === 'complete') boot();
  else window.addEventListener('load', boot);
})();
