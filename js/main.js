/* ============================================================
   MAIN.JS — Site-wide behaviors that apply on every page.
   ------------------------------------------------------------
   • Mobile nav toggle
   • Dropdown toggle on mobile
   • Smooth-scroll for in-page anchors
   • Reveal-on-scroll animations
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  setupMobileNav();
  setupSmoothScroll();
  setupRevealOnScroll();
});

/* ---- 1. Mobile navigation toggle ---- */
function setupMobileNav() {
  const toggle  = document.querySelector('.nav-toggle');
  const menu    = document.querySelector('.nav-menu');
  const dropdown = document.querySelector('.nav-dropdown');

  if (toggle && menu) {
    toggle.addEventListener('click', () => menu.classList.toggle('is-open'));
  }

  // On small screens, tap the Work item to open its sub-menu.
  if (dropdown) {
    const dropToggle = dropdown.querySelector('.dropdown-toggle');
    if (dropToggle) {
      dropToggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          dropdown.classList.toggle('is-open');
        }
      });
    }
  }
}

/* ---- 2. Smooth scroll for #anchor links ---- */
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId.length < 2) return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ---- 3. Reveal-on-scroll using IntersectionObserver ---- */
function setupRevealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length || !('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));
}
