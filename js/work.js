/* ============================================================
   WORK.JS — Renders the 3-column card grid on a category page.
   ------------------------------------------------------------
   Each category page only needs an empty container with:
     <div id="work-grid" data-category="screenplay"></div>
   This script reads the category and fills it from data.js.

   Card behavior:
     • Default state: poster image only (image-first, clean).
     • On hover (desktop): overlay slides up showing title +
       genre + a short "gist" (the logline).
     • On touch devices: overlay is shown subtly so users can
       still see what each card represents.
     • Click anywhere on a card → opens its individual detail
       page at: pages/work-detail.html?cat=...&slug=...
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('work-grid');
  if (!grid) return;

  const category = grid.dataset.category;
  const works = (window.PORTFOLIO_DATA?.works || {})[category] || [];

  if (!works.length) {
    grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;">No works listed yet.</p>';
    return;
  }

  grid.innerHTML = works.map((w, i) => cardTemplate(w, category, i)).join('');

  // Make every card clickable (the <a> wrapping handles this; this is a
  // safety net in case a child element swallows the event).
  grid.querySelectorAll('.work-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // If the user clicked an inner <a> the browser handles it; do nothing.
      if (e.target.closest('a') !== card) return;
    });
  });
});

function cardTemplate(work, category, index) {
  const poster = window.PORTFOLIO_IMG.poster(work);
  const detailHref = `work-detail.html?cat=${encodeURIComponent(category)}&slug=${encodeURIComponent(work.slug)}`;
  // Stagger the fade-up animation for a subtle cascade.
  const delay = (index * 0.08).toFixed(2);

  return `
    <a href="${detailHref}" class="work-card" style="animation-delay:${delay}s;"
       aria-label="Open ${escapeHTML(work.title)}">
      <div class="poster" style="background-image:url('${poster}');"></div>
      <span class="status-pill">${escapeHTML(work.status)}</span>
      <div class="overlay">
        <h3>${escapeHTML(work.title)}</h3>
        <div class="genre">${escapeHTML(work.genre)}</div>
        <p class="gist">${escapeHTML(work.logline)}</p>
      </div>
    </a>
  `;
}

function escapeHTML(str) {
  return String(str || '').replace(/[&<>"']/g, ch => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  })[ch]);
}
