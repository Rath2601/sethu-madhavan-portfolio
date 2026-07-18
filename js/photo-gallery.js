/* ============================================================
   PHOTO-GALLERY.JS — Photography grid + fullscreen lightbox.
   ------------------------------------------------------------
   Used only on pages that contain:  <div id="photo-grid">
   Data comes from PORTFOLIO_DATA.photography in data.js.

   Behavior:
     • Photos render in a responsive masonry-style grid.
     • Click / tap a photo  → opens it fullscreen (lightbox).
     • Click the photo again in fullscreen → opens its Instagram
       link (per-photo `instagram` field, or the profile URL).
     • Close with the × button, the backdrop, or the Esc key.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('photo-grid');
  if (!grid) return; // Not on a gallery page — do nothing.

  const data = window.PORTFOLIO_DATA?.photography;
  const photos = data?.photos || [];
  if (!photos.length) {
    grid.innerHTML = '<p style="text-align:center;">No photographs yet — check back soon.</p>';
    return;
  }

  const resolve = window.PORTFOLIO_RESOLVE || (p => p);

  /* ---------- Render the grid ----------
     Masonry via flex columns. Photos are dealt round-robin into the
     columns (photo 1 → col 1, photo 2 → col 2, ...) so the data.js
     order reads LEFT-TO-RIGHT across the top, not down each column. */
  const itemHTML = (p, i) => `
    <figure class="photo-item" style="animation-delay:${(i * 0.06).toFixed(2)}s;">
      <button type="button" class="photo-btn" data-index="${i}"
              aria-label="View photo fullscreen: ${escapeAttr(p.alt || 'photograph')}">
        <img src="${escapeAttr(resolve(p.src))}" alt="${escapeAttr(p.alt || 'Photograph')}" loading="lazy" />
        <span class="photo-hint" aria-hidden="true">⤢</span>
      </button>
    </figure>
  `;

  function colCount() {
    const w = window.innerWidth || 1200;
    return w <= 580 ? 1 : w <= 900 ? 2 : 3;
  }

  function renderGrid() {
    const cols = colCount();
    if (String(cols) === grid.dataset.cols) return; // No layout change.
    grid.dataset.cols = String(cols);
    grid.innerHTML = '';
    const colEls = [];
    for (let c = 0; c < cols; c++) {
      const col = document.createElement('div');
      col.className = 'photo-col';
      colEls.push(col);
      grid.appendChild(col);
    }
    photos.forEach((p, i) => {
      colEls[i % cols].insertAdjacentHTML('beforeend', itemHTML(p, i));
    });
  }

  renderGrid();
  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(renderGrid, 150);
  });

  /* ---------- Build the lightbox once ---------- */
  const lb = document.createElement('div');
  lb.className = 'photo-lightbox';
  lb.hidden = true;
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-modal', 'true');
  lb.setAttribute('aria-label', 'Photo fullscreen view');
  lb.innerHTML = `
    <button type="button" class="lb-close" aria-label="Close fullscreen">&times;</button>
    <img class="lb-img" src="" alt="" />
    <p class="lb-hint">Tap the photo again to view it on Instagram&nbsp;&#8599;</p>
  `;
  document.body.appendChild(lb);

  const lbImg = lb.querySelector('.lb-img');
  let current = -1;
  let closeTimer = null;

  function openLightbox(i) {
    const p = photos[i];
    if (!p) return;
    clearTimeout(closeTimer);
    current = i;
    lbImg.src = resolve(p.src);
    lbImg.alt = p.alt || 'Photograph';
    lb.hidden = false;
    (window.requestAnimationFrame || (fn => setTimeout(fn, 0)))(() => lb.classList.add('open'));
    document.body.style.overflow = 'hidden'; // Lock page scroll behind the lightbox.
  }

  function closeLightbox() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
    current = -1;
    closeTimer = setTimeout(() => { lb.hidden = true; lbImg.src = ''; }, 250);
  }

  /* Grid click → open fullscreen */
  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('.photo-btn');
    if (btn) openLightbox(Number(btn.dataset.index));
  });

  /* Fullscreen photo click → open Instagram in a new tab */
  lbImg.addEventListener('click', (e) => {
    e.stopPropagation();
    const p = photos[current] || {};
    const url = p.instagram || data.instagram;
    if (url) window.open(url, '_blank', 'noopener');
  });

  /* Backdrop / × → close */
  lb.addEventListener('click', (e) => {
    if (!e.target.closest('.lb-img')) closeLightbox();
  });

  /* Esc → close */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lb.hidden) closeLightbox();
  });

  function escapeAttr(str) {
    return String(str || '').replace(/[&<>"']/g, ch => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[ch]);
  }
});
