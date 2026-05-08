/* ============================================================
   CAROUSEL.JS — Builds the bento-style work section on home page.
   ------------------------------------------------------------
   Page markup (see index.html) declares four cards:
     <a class="bento-card" href="pages/work-screenplay.html">
       <div class="bento-marquee" data-bento data-category="screenplay"></div>
       <div class="bento-label">…</div>
     </a>
     ...

   This script:
     • Finds every element with [data-bento].
     • Pulls the matching category's works from data.js.
     • Renders ONLY the poster images (no titles inside the
       marquee — the card label below the images shows the
       category name).
     • Duplicates the row of images once so the CSS marquee
       can loop seamlessly (translateX: 0 → -50%).
     • Alternates direction every other card.
     • The whole card is already an <a> wrapper, so clicking
       anywhere navigates to that category page — no extra
       click handler needed here.
   ============================================================ */

/* The marquee animates from translateX(0) → translateX(-50%). For that loop
   to look seamless the rendered tile row needs to be at least 2× the card's
   visible width — otherwise there's a visible gap between repeats and, for
   very sparse categories (1 image), nothing actually scrolls.

   MIN_TILES_PER_HALF guarantees we always have enough tiles in *one* half of
   the duplicated track to fill the widest card. We then duplicate that half
   to make the seamless loop. */
const MIN_TILES_PER_HALF = 8;

document.addEventListener('DOMContentLoaded', () => {
  const marquees = document.querySelectorAll('[data-bento]');
  marquees.forEach((el, index) => buildBentoMarquee(el, index));
});

function buildBentoMarquee(container, index) {
  const category = container.dataset.category;
  const works = (window.PORTFOLIO_DATA?.works || {})[category] || [];

  // Alternate direction: even index = default (R→L), odd = reverse (L→R).
  if (index % 2 === 1) container.classList.add('reverse');

  if (!works.length) {
    container.innerHTML = '';
    return;
  }

  // Repeat the works list until we have at least MIN_TILES_PER_HALF tiles.
  // For dense categories (Screenplay = 6 works) this is a no-op; for sparse
  // ones (Asst. Production Designer = 1 work, Photographer = 1 work) it
  // ensures the marquee actually scrolls and visually fills the card.
  const padded = [];
  while (padded.length < MIN_TILES_PER_HALF) {
    padded.push(...works);
  }

  // Build one row of <div class="bento-img">…</div> tiles.
  const tilesHTML = padded.map(w => {
    const url = window.PORTFOLIO_IMG.poster(w);
    return `<div class="bento-img" style="background-image:url('${url}');"></div>`;
  }).join('');

  // Duplicate the row so the marquee animation loops without a visible jump.
  container.innerHTML = `<div class="bento-track">${tilesHTML}${tilesHTML}</div>`;
}
