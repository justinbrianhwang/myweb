// ===== Shared Sidebar Component =====
// Detects if we're in a subpage (pages/) or root
const isSubpage = window.location.pathname.includes('/pages/');
const basePath = isSubpage ? '../' : '';

function createSidebar() {
  // Hamburger button
  const hamburger = document.createElement('button');
  hamburger.className = 'hamburger visible';
  hamburger.id = 'hamburger';
  hamburger.setAttribute('aria-label', 'Toggle menu');
  hamburger.innerHTML = '<span></span><span></span><span></span>';

  // Overlay
  const overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  overlay.id = 'sidebarOverlay';

  // Sidebar
  const sidebar = document.createElement('nav');
  sidebar.className = 'sidebar';
  sidebar.id = 'sidebar';
  sidebar.innerHTML = `
    <div class="sidebar-header">
      <div class="sidebar-avatar">
        <img src="${basePath}assets/favicon.png" alt="Sunjun Hwang" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="avatar-fallback"><i class="fas fa-user"></i></div>
      </div>
    </div>
    <ul class="sidebar-menu">
      <li><a href="${basePath}index.html" class="menu-item"><span class="menu-color color-home"></span>HOME</a></li>
      <li class="has-submenu">
        <button class="menu-item submenu-toggle">
          <span><span class="menu-color color-about"></span>About Me</span>
          <i class="fas fa-chevron-down"></i>
        </button>
        <ul class="submenu">
          <li><a href="${basePath}pages/people.html">The people who made me</a></li>
          <li><a href="${basePath}pages/photos.html">Photos</a></li>
          <li><a href="${basePath}pages/schedule.html">Schedule</a></li>
        </ul>
      </li>
      <li><a href="${basePath}pages/pupil.html" class="menu-item"><span class="menu-color color-about"></span>Pupil</a></li>
      <li><a href="https://www.sjhwangcv.com" target="_blank" class="menu-item"><span class="menu-color color-cv"></span>CV</a></li>
      <li><a href="https://www.sjhwangresearch.com" target="_blank" class="menu-item"><span class="menu-color color-research"></span>Research</a></li>
      <li><a href="${basePath}pages/skills.html" class="menu-item"><span class="menu-color color-skills"></span>Skills & Tools & Education</a></li>
      <li><a href="${basePath}pages/experience.html" class="menu-item"><span class="menu-color color-exp"></span>Experience</a></li>
      <li class="has-submenu">
        <button class="menu-item submenu-toggle">
          <span><span class="menu-color color-contact"></span>Contact</span>
          <i class="fas fa-chevron-down"></i>
        </button>
        <ul class="submenu">
          <li><a href="https://scholar.google.com/citations?user=6X2EVE0AAAAJ" target="_blank">Google Scholar</a></li>
          <li><a href="https://github.com/justinbrianhwang" target="_blank">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/sunjunhwang/" target="_blank">LinkedIn</a></li>
          <li><a href="https://www.youtube.com/@sjquantumprof" target="_blank">YouTube</a></li>
          <li><a href="https://www.instagram.com/jun_bri0123/" target="_blank">Instagram</a></li>
          <li><a href="https://orcid.org/0009-0007-5173-2876" target="_blank">ORCID</a></li>
          <li><a href="https://blog.naver.com/sjhwang__" target="_blank">Naver Blog</a></li>
          <li><a href="https://www.sjhwangresearch.com" target="_blank">Current Research</a></li>
        </ul>
      </li>
    </ul>
  `;

  document.body.prepend(sidebar);
  document.body.prepend(overlay);
  document.body.prepend(hamburger);

  // Toggle logic
  function toggleSidebar() {
    hamburger.classList.toggle('active');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
  }

  hamburger.addEventListener('click', toggleSidebar);
  overlay.addEventListener('click', toggleSidebar);

  // Close sidebar on link click
  sidebar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (sidebar.classList.contains('active')) {
        toggleSidebar();
      }
    });
  });

  // Submenu toggles
  sidebar.querySelectorAll('.submenu-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      toggle.nextElementSibling.classList.toggle('active');
    });
  });
}

document.addEventListener('DOMContentLoaded', createSidebar);
