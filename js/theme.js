// ===== Theme Toggle (Dark / Light) =====
(function initTheme() {
  const saved = localStorage.getItem('theme');
  const systemLight = window.matchMedia('(prefers-color-scheme: light)').matches;

  // Determine initial theme
  let current;
  if (saved) {
    current = saved;
  } else {
    current = systemLight ? 'light' : 'dark';
  }

  applyTheme(current);

  // Create toggle button
  const btn = document.createElement('button');
  btn.className = 'theme-toggle visible';
  btn.setAttribute('aria-label', 'Toggle dark/light mode');
  btn.innerHTML = `
    <i class="fas fa-sun icon-sun"></i>
    <i class="fas fa-moon icon-moon"></i>
  `;
  document.body.prepend(btn);

  btn.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    applyTheme(next);
    localStorage.setItem('theme', next);

    // Update particle color if available
    if (typeof pc !== 'undefined') {
      pc = getComputedStyle(document.documentElement).getPropertyValue('--particle-color').trim();
    }
  });

  // If intro is playing, hide toggle until intro ends
  const intro = document.getElementById('intro');
  if (intro && !sessionStorage.getItem('introSeen')) {
    btn.classList.remove('visible');
    const observer = new MutationObserver(() => {
      if (intro.classList.contains('hidden')) {
        btn.classList.add('visible');
        observer.disconnect();
      }
    });
    observer.observe(intro, { attributes: true, attributeFilter: ['class'] });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    // Toggle light-adjust class on body for box-shadow adjustments
    if (theme === 'light') {
      document.body.classList.add('light-adjust');
    } else {
      document.body.classList.remove('light-adjust');
    }
  }
})();
