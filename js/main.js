/* ============================================================
   MAIN.JS — Site-wide behaviors that apply on every page.
   ------------------------------------------------------------
   • Mobile nav toggle
   • Dropdown toggle on mobile
   • Smooth-scroll for in-page anchors
   • Reveal-on-scroll animations
   • Header hide-on-scroll-down (NEW)
   • Layered parallax on the hero (NEW, home page only)
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  setupMobileNav();
  setupSmoothScroll();
  setupRevealOnScroll();
  setupHeaderScrollBehavior();
  setupHeroParallax();
  setupScrollLayers();
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

/* ---- 4. Header hide-on-scroll-down / show-on-scroll-up ----
   Slides the sticky nav out of view when the user scrolls DOWN past a
   small threshold, and slides it back in the moment they scroll UP.
   Uses requestAnimationFrame to coalesce scroll events so this stays
   cheap even on long pages and slower devices. */
function setupHeaderScrollBehavior() {
  const nav = document.querySelector('.site-nav');
  if (!nav) return;

  const SHOW_AT_TOP_THRESHOLD = 8;     // scrolled less than this → always show
  const HIDE_AFTER            = 80;    // start hiding only after scrolling 80px
  const DELTA_THRESHOLD       = 6;     // ignore tiny scroll jitters

  let lastY    = window.scrollY || 0;
  let ticking  = false;

  function update() {
    const y     = window.scrollY || 0;
    const delta = y - lastY;

    // Always reveal the nav near the top of the page.
    if (y <= SHOW_AT_TOP_THRESHOLD) {
      nav.classList.remove('is-hidden');
      nav.classList.remove('is-scrolled');
    } else {
      nav.classList.add('is-scrolled');

      // Hide on scroll-down (after a small buffer), show on scroll-up.
      if (y > HIDE_AFTER && delta > DELTA_THRESHOLD) {
        nav.classList.add('is-hidden');
      } else if (delta < -DELTA_THRESHOLD) {
        nav.classList.remove('is-hidden');
      }
    }

    // If a mobile menu is open, never hide the nav — the open menu lives
    // inside it and would disappear together.
    const menu = document.querySelector('.nav-menu');
    if (menu && menu.classList.contains('is-open')) {
      nav.classList.remove('is-hidden');
    }

    lastY = y;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
}

/* ---- 5. Hero parallax (home page only) ----
   Updates the CSS variable --hero-parallax on the .hero element so the
   foreground gently drifts as the user scrolls. The background image
   keeps its own Ken-Burns drift independently — together they give a
   layered, parallax-style depth without scroll-jacking. */
function setupHeroParallax() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  // Skip entirely for users who prefer reduced motion.
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduce && reduce.matches) return;

  hero.classList.add('has-parallax');

  const MAX_PARALLAX = 60;  // px — keep it small so layout never jumps
  let ticking = false;

  function update() {
    const rect      = hero.getBoundingClientRect();
    const heroH     = rect.height || 1;
    // Progress: 0 at the top, 1 when the hero has fully scrolled past.
    const progress  = Math.min(1, Math.max(0, -rect.top / heroH));
    const offset    = progress * MAX_PARALLAX;
    hero.style.setProperty('--hero-parallax', offset.toFixed(2));
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  // Set an initial value so first paint matches the page's scroll position.
  update();
}

/* ---- 6. Scroll-linked layered transforms ----
   Any element with the class .scroll-layer gets a CSS variable
   --scroll-progress (0..1) updated as it moves through the viewport.
   The CSS uses this to shift the layer a few pixels — adds a subtle
   "settling into place" feel as content enters view. Cheap to run:
   computation is O(elements) and only on scroll, frame-throttled. */
function setupScrollLayers() {
  const layers = document.querySelectorAll('.scroll-layer');
  if (!layers.length) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduce && reduce.matches) return;

  let ticking = false;

  function update() {
    const vh = window.innerHeight || 1;
    layers.forEach(el => {
      const rect = el.getBoundingClientRect();
      // Progress: 0 when fully below the fold, 1 when its top reaches center.
      const raw = (vh - rect.top) / (vh + rect.height);
      const progress = Math.min(1, Math.max(0, raw));
      el.style.setProperty('--scroll-progress', progress.toFixed(3));
    });
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  update();
}
