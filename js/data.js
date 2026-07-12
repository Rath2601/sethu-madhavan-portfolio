/* ============================================================
   DATA FILE — All works for the portfolio live here.
   ------------------------------------------------------------
   To add or edit a work, just update the arrays below.
   The site will pick up the changes automatically.

   Each work needs:
     slug    — a unique URL-friendly id (lowercase, dashes only)
     title, genre, logline, summary, status

   Optional fields:
     poster  — custom card image (overrides the placeholder)
     hero    — custom banner image on the detail page
     gallery — array of behind-the-scenes images, e.g.
               [{ src: "images/foo.jpg", caption: "On set" }, ...]
     notes   — extra paragraph(s) shown on the detail page

   If you don't provide poster/hero/gallery, the site automatically
   generates lavender-toned placeholder images from picsum.photos
   based on the slug — replace later with your real photos.
   ============================================================ */

window.PORTFOLIO_DATA = {
  // --- Writer profile (edit your details here) -------------
  profile: {
    name: "Sedhu Mathavan R S",
    /* Hero stage photo. The inline <script> in index.html applies this
       value to #hero-portrait-img, which is why a stale value here used
       to override whatever was set in the HTML directly. */
    portrait: "images/sedhu-hero.webp",
    portraitFallback: "images/sedhu-hero.webp",
    email: "writterrs07@gmail.com",
    phone: "+91 63854 42474",
    location: "Chennai · India",
    quote: "Where character drives the plot, and the plot drives everything else."
  },

  // --- Accolades shown on home page -----------------------
  // Grouped into Non-Fiction and Fiction. Every festival entry is its
  // own card. Each item:
  //   work     — title of the work (or its form, if untitled)
  //   meta     — "Form · Role"
  //   festival — "Festival (edition) — Position"
  //   note     — optional extra line
  accolades: [
    {
      category: "Non-Fiction",
      items: [
        {
          icon: "🎬",
          work: "Jatra Pala",
          meta: "Documentary · Screenwriter",
          festival: "37th Kolkata Intl Film Festival — Competition"
        },
        {
          icon: "🎬",
          work: "Jatra Pala",
          meta: "Documentary · Screenwriter",
          festival: "16th Jaipur Intl Film Festival — Competition"
        },
        {
          icon: "🎬",
          work: "Jatra Pala",
          meta: "Documentary · Screenwriter",
          festival: "9th Intl Folklore Film Festival (IFFF) — Competition"
        },
        {
          icon: "🎬",
          work: "Jatra Pala",
          meta: "Documentary · Screenwriter",
          festival: "19th Mumbai Intl Film Festival — Competition"
        }
      ]
    },
    {
      category: "Fiction",
      items: [
        {
          icon: "🏆",
          work: "Web Series",
          meta: "Web Series · Screenwriter",
          festival: "SWA Script Lab & Pitch Fest 2025 — Selected · Stage 1"
        },
        {
          icon: "🎭",
          work: "What's in a Name",
          meta: "Short Film · Actor (Protagonist)",
          festival: "17th IDSFFK Kerala — Official Selection"
        },
        {
          icon: "🎬",
          work: "Lipi",
          meta: "Mise-en-scène · Chief Assistant Director",
          festival: "35th Kolkata Intl Film Festival — Screened",
          note: "& many other international film festivals"
        }
      ]
    }
  ],

  // --- Works grouped by category --------------------------
  works: {
    screenplay: [
      {
        slug: "im-on-rag",
        title: "I'm On Rag",
        genre: "Short Film · Drama",
        logline: "A 13-year-old girl bunks school with her boyfriend — and gets her first period at the worst possible moment.",
        summary: "Pallavi (13) bunks school with her boyfriend, but when she unexpectedly gets her first period, she cleverly covers up the truth and makes her parents believe she was in school all along.",
        status: "Completed",
        poster: "images/works/iamonrag.png",
        hero:   "images/works/iamonrag.png",
        notes: "A coming-of-age short about secrets, shame, and the small heroisms of teenage girlhood."
      },
      {
        slug: "shadow-of-pride",
        title: "Shadow of Pride",
        genre: "Short Film · Drama",
        logline: "At night, a mother and father are obligated to kill their daughter in the name of caste honour.",
        summary: "A devastating short on caste violence — about the parents who carry out a so-called honour killing, and the impossible space they're forced to occupy between love and lineage.",
        status: "Completed",
        poster: "images/works/shadow-of-pride.png",
        hero:   "images/works/shadow-of-pride.png"
      },
      {
        slug: "shit-show",
        title: "Shit Show",
        genre: "Short Film · Meta-Comedy",
        logline: "The actor didn't show up on day two. So the script was rewritten in fifteen minutes.",
        summary: "(REAL INCIDENT) The actor didn't come to the second day shoot. The whole short film was written in 15 minutes. It's a META MOVIE — it starts with CUT and ends with ACTION.",
        status: "Completed",
        poster: "images/works/shit-show.jpeg",
        hero:   "images/works/shit-show.jpeg",
        notes: "Born from a production disaster. A film about making a film about not being able to make a film."
      },
      {
        slug: "blind-spot",
        title: "Blind Spot",
        genre: "Web Series · Drama",
        logline: "A first-year IIT student accidentally blinds a police constable — and the lives of both unravel from there.",
        summary: "An innocent first-year IIT engineering student accidentally blinds a police constable aspiring to be an IPS officer. Through this life-altering incident, he discovers the complexities of the world and learns profound lessons from his diverse classmates about choices and consequences.",
        status: "SWA Script Lab 2025 · Stage-I",
        poster: "images/works/blind-spot.png",
        hero:   "images/works/blind-spot.png"
      },
      {
        slug: "town-ship",
        title: "Town Ship",
        genre: "Mini Web Series · Thriller",
        logline: "A dream job in a remote township turns into a fight for justice when Pallavi uncovers the truth behind her company.",
        summary: "A dream job in a remote township turns into a fight for justice when Pallavi uncovers the brutal truth behind her company.",
        status: "In Development",
        poster: "images/works/township.png",
        hero:   "images/works/township.png"
      },
      {
        slug: "battalion",
        title: "Battalion (Padai)",
        genre: "Animation Short Film",
        logline: "After his father is killed for entering forbidden streets, a child returns — this time with newfound strength.",
        summary: "When his father is brutally killed for entering the streets, a child returns to those same streets, this time with newfound strength.",
        status: "Completed",
        poster: "images/works/battalion.jpg",
        hero:   "images/works/battalion.jpg",
        notes: "Made as part of the 72-hour PK Rosy Filmmaking Challenge 2025, organised by SRFTI."
      }
    ],

    director: [
      {
        slug: "im-on-rag-director",
        title: "I'm On Rag",
        genre: "Short Film · Drama",
        logline: "A 13-year-old girl bunks school with her boyfriend — and gets her first period at the worst possible moment.",
        summary: "Directed and written by Sedhu. A coming-of-age short on secrets, shame, and how children carry their first adult moments alone.",
        status: "Completed",
        poster: "images/works/iamonrag.png",
        hero:   "images/works/iamonrag.png"
      },
      {
        slug: "velicham",
        title: "Velicham",
        genre: "Short Film",
        logline: "A short film by Sedhu Mathavan R S — directed and production designed.",
        summary: "Velicham (வெளிச்சம் — \"light\") is a short film directed and production designed by Sedhu. A quiet, image-led piece on the spaces between people.",
        status: "Completed",
        poster: "images/works/velicham.jpeg",
        hero:   "images/works/velicham.jpeg"
      },
      {
        slug: "lipi",
        title: "Lipi (Mise-en-Scène)",
        genre: "Feature · Chief AD",
        logline: "Worked as Chief Assistant Director on Lipi — a film that's travelled to several international festivals.",
        summary: "Served as Chief Assistant Director (Mise-en-Scène) on Lipi. The film has screened at the 31st Kolkata International Film Festival and many other international festivals.",
        status: "Released · Festival Run",
        poster: "images/works/lipi.jpeg",
        hero:   "images/works/lipi.jpeg"
      }
    ],

    productionDesigner: [
      {
        slug: "velicham-pd",
        title: "Velicham",
        genre: "Short Film",
        logline: "Production designed and directed — building the world the script lives in.",
        summary: "Production design for Velicham — a quiet image-led short. Designed and dressed every frame to keep the story leaning on space and silence rather than dialogue.",
        status: "Completed",
        poster: "images/works/velicham.jpeg",
        hero:   "images/works/velicham.jpeg"
      }
    ],

    actor: [
      {
        slug: "whats-in-a-name",
        title: "What's In A Name",
        genre: "Short Film · Lead Role",
        logline: "Played the protagonist in a short that travelled to the 17th IDSFFK Kerala.",
        summary: "Lead role in 'What's In A Name'. The film was officially selected at the 17th International Documentary and Short Film Festival of Kerala (IDSFFK).",
        status: "IDSFFK Selection",
        poster: "images/works/whats-in-a-name.jpg",
        hero:   "images/works/whats-in-a-name.jpg",
        notes: "Carried the film as the protagonist — a quiet performance built around small gestures and longer silences."
      },
      {
        slug: "seed",
        title: "Seed",
        genre: "Short Film · Acting",
        logline: "An acting credit in 'Seed' — a small role with a long sit in memory.",
        summary: "Featured as an actor in 'Seed'. Watch a clip on Instagram: https://www.instagram.com/p/DIg0Qp8S61o/",
        status: "Released",
        poster: "images/works/whats-in-a-name.jpg",
        hero:   "images/works/whats-in-a-name.jpg"
      }
    ],

    photographer: [
      {
        slug: "frames",
        title: "Frames",
        genre: "Photography",
        logline: "An ongoing series — quiet portraits, found light, and the small moments between scenes.",
        summary: "An ongoing collection of stills — production stills, on-set portraits, and personal photography taken between (and sometimes during) film projects.",
        status: "Ongoing",
        poster: "images/works/photo-portrait.jpeg",
        hero:   "images/works/photo-portrait.jpeg"
      }
    ]
  }
};

/* ============================================================
   IMAGE HELPERS — used by carousel.js, work.js, work-detail.js
   ------------------------------------------------------------
   If a work doesn't define its own poster/hero/gallery, these
   functions build placeholder URLs from picsum.photos using the
   slug as a seed (so the same work always gets the same images).

   To use REAL photos for a work, drop them into images/ and add
   to that work in data.js, e.g.:
     poster: "images/last-monsoon-poster.jpg",
     hero:   "images/last-monsoon-banner.jpg",
     gallery: [
       { src: "images/last-monsoon-bts1.jpg", caption: "On set" },
       ...
     ]
   ============================================================ */
/* Resolve a relative image path so it works whether the current page
   lives at the project root (e.g. index.html) or inside /pages/ (e.g.
   work-detail.html). For absolute / external URLs we leave them alone.
   This keeps data.js clean — paths there just say "images/works/foo.png". */
function resolveAssetPath(p) {
  if (!p) return p;
  // Absolute URLs (http://, https://, //, data:) and explicit ../ paths pass through.
  if (/^([a-z]+:)?\/\//i.test(p) || p.startsWith('data:') || p.startsWith('../') || p.startsWith('/')) {
    return p;
  }
  // If we're inside /pages/, the page is one folder deep — prepend ../
  try {
    if (typeof window !== 'undefined' && window.location.pathname.includes('/pages/')) {
      return '../' + p;
    }
  } catch (_) { /* no-op */ }
  return p;
}

window.PORTFOLIO_IMG = {
  poster: (work) =>
    resolveAssetPath(work.poster) || `https://picsum.photos/seed/${work.slug}/600/800`,
  hero: (work) =>
    resolveAssetPath(work.hero)   || `https://picsum.photos/seed/${work.slug}-hero/1600/900`,
  gallery: (work) =>
    (work.gallery
      ? work.gallery.map(g => ({ ...g, src: resolveAssetPath(g.src) }))
      : [1, 2, 3, 4].map(i => ({
          src: `https://picsum.photos/seed/${work.slug}-bts-${i}/900/700`,
          caption: ["Behind the scenes", "On location", "First read-through", "Final shot"][i - 1]
        })))
};

/* Expose the resolver so other scripts (e.g. main.js handling the hero
   portrait) can use the same logic. */
window.PORTFOLIO_RESOLVE = resolveAssetPath;

/* ============================================================
   STATUS HELPERS — shared by work.js and the In-Progress page.
   A work counts as "in progress" if its status mentions active
   development ("In Development", "Ongoing", "In Progress",
   script-lab stages, etc.). Everything else is treated as
   Completed / Released / Other.
   ============================================================ */
window.PORTFOLIO_STATUS = {
  isInProgress(work) {
    return /(in\s*development|in\s*progress|ongoing|stage)/i.test(work?.status || '');
  },
  /* All in-progress works across every category, each tagged with its
     category key so cards can link to the right detail page. */
  allInProgress() {
    const all = window.PORTFOLIO_DATA?.works || {};
    const out = [];
    // De-dupe by title: the same work can appear under several categories
    // (e.g. writer + director credits). First occurrence wins.
    const seen = new Set();
    Object.keys(all).forEach(cat => {
      (all[cat] || []).forEach(w => {
        if (!this.isInProgress(w)) return;
        const key = (w.title || w.slug).toLowerCase();
        if (seen.has(key)) return;
        seen.add(key);
        out.push({ ...w, _category: cat });
      });
    });
    return out;
  }
};
