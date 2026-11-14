// ===== Intro handwriting splash (once per session) =====
(function initIntro() {
  const intro = document.getElementById('intro');
  if (!intro) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (sessionStorage.getItem('introSeen') || reduceMotion) {
    intro.classList.add('hidden');   // lets theme.js reveal its toggle
    intro.remove();
    return;
  }

  const ham = document.getElementById('hamburger');
  if (ham) ham.classList.remove('visible');

  const lines = document.querySelectorAll('.intro-line');
  document.body.classList.add('intro-active');

  lines.forEach(line => {
    const length = line.getComputedTextLength();
    line.style.strokeDasharray = length;
    line.style.strokeDashoffset = length;
  });

  [0, 400, 800, 1200].forEach((delay, i) => {
    setTimeout(() => {
      const line = lines[i];
      if (!line) return;
      line.classList.add('animate');
      line.style.animationDuration = `${Math.max(0.5, Math.min(0.9, line.getComputedTextLength() / 500))}s`;
    }, delay);
  });

  setTimeout(() => lines.forEach(line => line.classList.add('fill-in')), 1800);

  setTimeout(() => {
    intro.classList.add('hidden');
    document.body.classList.remove('intro-active');
    sessionStorage.setItem('introSeen', 'true');
    if (ham) ham.classList.add('visible');
  }, 2600);
})();

// ===== Scroll reveal =====
(function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { els.forEach(el => el.classList.add('visible')); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); io.unobserve(entry.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
})();

// ===== News: one collapsible block per year; the current year starts open =====
(function initYearAccordion() {
  const timeline = document.querySelector('.timeline');
  if (!timeline) return;
  const currentYear = String(new Date().getFullYear());

  const hasCurrentYear = Array.from(timeline.querySelectorAll('.year-toggle'))
    .some(t => t.dataset.year === currentYear);
  if (!hasCurrentYear) {
    const wrap = document.createElement('div');
    wrap.className = 'timeline-year';
    wrap.innerHTML = `
      <button class="year-toggle" data-year="${currentYear}" aria-expanded="false">
        <span>${currentYear}</span>
        <i class="fas fa-chevron-down" aria-hidden="true"></i>
      </button>
      <div class="year-content">
        <div class="timeline-item">
          <div class="timeline-meta"><span class="timeline-date">${currentYear}</span></div>
          <div class="timeline-text"><p class="news-venue">Nothing yet this year.</p></div>
        </div>
      </div>`;
    timeline.prepend(wrap);
  }

  const setOpen = (toggle, open) => {
    toggle.classList.toggle('active', open);
    toggle.nextElementSibling.classList.toggle('active', open);
    toggle.setAttribute('aria-expanded', String(open));
  };

  timeline.querySelectorAll('.year-toggle').forEach(toggle => {
    const n = toggle.nextElementSibling.querySelectorAll('.news-title').length;
    if (n) toggle.querySelector('span').insertAdjacentHTML('afterend', `<span class="year-count">${n} ${n === 1 ? 'paper' : 'papers'}</span>`);
    setOpen(toggle, toggle.dataset.year === currentYear);
    toggle.addEventListener('click', () => setOpen(toggle, !toggle.classList.contains('active')));
  });
})();

// ===== In-page anchors =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});
