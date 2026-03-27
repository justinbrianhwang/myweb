// ===== Shared Footer Component =====
(function createFooter() {
  const footers = document.querySelectorAll('.footer');
  const footerHTML = `
    <div class="social-links">
      <a href="https://scholar.google.com/citations?user=6X2EVE0AAAAJ" target="_blank" aria-label="Google Scholar"><i class="fas fa-graduation-cap"></i></a>
      <a href="https://github.com/justinbrianhwang" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
      <a href="https://www.linkedin.com/in/sunjunhwang/" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
      <a href="https://www.instagram.com/jun_bri0123/" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
      <a href="mailto:sunjun7559@gmail.com" aria-label="Email"><i class="fas fa-envelope"></i></a>
      <a href="https://www.youtube.com/@sjquantumprof" target="_blank" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
      <a href="https://orcid.org/0009-0007-5173-2876" target="_blank" aria-label="ORCID"><i class="fab fa-orcid"></i></a>
    </div>
    <p>&copy; 2026 Sunjun Hwang. All Rights Reserved.</p>
  `;
  footers.forEach(f => { f.innerHTML = footerHTML; });
})();
