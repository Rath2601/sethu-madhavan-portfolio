/* ============================================================
   WORK-DETAIL.JS — Fills the individual work detail page.
   ------------------------------------------------------------
   The detail page is generic. It reads the category and slug
   from the URL, looks up the work in data.js, and renders:
     • Hero banner (image + title + genre + status)
     • Logline as a centered quote
     • Summary
     • Optional "production notes" pull-quote
     • CTA back to the category + a contact prompt

   The "Behind the Scenes" gallery section was removed per design.
   The image-helper API still exposes a gallery() function for
   pages that want to render their own gallery in future.

   URL format:  pages/work-detail.html?cat=screenplay&slug=the-last-monsoon
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const params  = new URLSearchParams(window.location.search);
  const cat     = params.get('cat');
  const slug    = params.get('slug');
  const root    = document.getElementById('detail-root');
  if (!root) return;

  const works = (window.PORTFOLIO_DATA?.works || {})[cat] || [];
  const work  = works.find(w => w.slug === slug);

  // Friendly "not found" state.
  if (!work) {
    root.innerHTML = `
      <section class="container" style="padding:6rem 1.5rem;text-align:center;">
        <h1 style="margin-bottom:1rem;">Project not found</h1>
        <p>That work doesn't exist (yet) in our catalogue.</p>
        <p style="margin-top:2rem;">
          <a class="btn" href="../work.html">Back to all work</a>
        </p>
      </section>
    `;
    document.title = "Not found — Sedhu Mathavan R S";
    return;
  }

  // Update the document title for nicer browser tabs and SEO.
  document.title = `${work.title} — Sedhu Mathavan R S`;

  // Build all the visual sections.
  // Note: the Behind-the-Scenes gallery has been removed per design.
  const heroImg = window.PORTFOLIO_IMG.hero(work);
  const categoryPage = `work-${slugifyCat(cat)}.html`;
  const categoryLabel = humanLabel(cat);

  root.innerHTML = `
    <a class="detail-back" href="${categoryPage}">← Back to ${categoryLabel}</a>

    <header class="detail-hero reveal" style="background-image:url('${heroImg}');">
      <div class="titleblock">
        <span class="status-pill">${escapeHTML(work.status)}</span>
        <h1>${escapeHTML(work.title)}</h1>
        <div class="genre">${escapeHTML(work.genre)}</div>
      </div>
    </header>

    <section class="detail-body reveal">
      <p class="logline">${escapeHTML(work.logline)}</p>
      <p class="summary">${escapeHTML(work.summary)}</p>
      ${work.notes ? `<aside class="notes">${escapeHTML(work.notes)}</aside>` : ''}

      <div class="detail-cta">
        <p>Interested in this project, or something like it?</p>
        <a class="btn" href="#" onclick="document.querySelector('.contact-fab')?.click(); return false;">
          Reach out
        </a>
      </div>
    </section>
  `;

  // Re-attach reveal-on-scroll for the freshly-injected nodes.
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    root.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  } else {
    root.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
  }
});

/* "productionDesigner" → "production-designer" — matches page filenames. */
function slugifyCat(camel) {
  return String(camel || '').replace(/([A-Z])/g, '-$1').toLowerCase();
}

/* Friendly labels for the back-link */
function humanLabel(cat) {
  return ({
    screenplay:         'Screenplay Writer',
    director:           'Director',
    productionDesigner: 'Asst. Production Designer',
    actor:              'Actor',
    photographer:       'Photographer'
  })[cat] || 'Work';
}

function escapeHTML(str) {
  return String(str || '').replace(/[&<>"']/g, ch => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  })[ch]);
}
