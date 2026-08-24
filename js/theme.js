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

// ===== Shared footer social bar (injected on any footer that lacks one) =====
(function initFooterSocial() {
  const links = `
    <div class="social-links">
      <a href="https://scholar.google.com/citations?user=6X2EVE0AAAAJ" target="_blank" aria-label="Google Scholar"><i class="fas fa-graduation-cap"></i></a>
      <a href="https://github.com/justinbrianhwang" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
      <a href="https://www.linkedin.com/in/sunjunhwang/" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
      <a href="https://www.instagram.com/jun_bri0123/" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
      <a href="mailto:sunjun7559@gmail.com" aria-label="Email"><i class="fas fa-envelope"></i></a>
      <a href="https://www.youtube.com/@sjquantumprof" target="_blank" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
      <a href="https://medium.com/@sunjun7559" target="_blank" aria-label="Medium"><i class="fab fa-medium"></i></a>
      <a href="https://orcid.org/0009-0007-5173-2876" target="_blank" aria-label="ORCID"><i class="fab fa-orcid"></i></a>
    </div>`;
  const inject = () => {
    document.querySelectorAll('.footer').forEach(f => {
      if (!f.querySelector('.social-links')) f.insertAdjacentHTML('afterbegin', links);
    });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject);
  else inject();
})();
