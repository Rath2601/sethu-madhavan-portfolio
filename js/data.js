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
    name: "Sethu Madhavan R S",
    portrait: "images/image.jpg", // your real photo (jpg/png)
    portraitFallback: "images/image.jpg", // shown if the jpg is missing
    email: "hello@sethumadhavan.com",
    phone: "+91 98765 43210",
    location: "Chennai · India",
    quote: "Every great film is just a script that refused to stay on the page."
  },

  // --- Accolades shown on home page -----------------------
  accolades: [
    { icon: "🏆", title: "Best Original Screenplay",       subtitle: "Indie Cinema Awards · 2024" },
    { icon: "🎬", title: "Official Selection",             subtitle: "Mumbai International Film Fest · 2023" },
    { icon: "✒️", title: "Featured Voice in Storytelling", subtitle: "South Asian Writers Forum · 2023" },
    { icon: "🌟", title: "Top 10 Emerging Writers",        subtitle: "FilmCraft Magazine · 2022" }
  ],

  // --- Works grouped by category --------------------------
  works: {
    screenplay: [
      {
        slug: "the-last-monsoon",
        title: "The Last Monsoon",
        genre: "Drama · Romance",
        logline: "A meteorologist and a poet meet during the final rain Chennai will ever see.",
        summary: "Set in a near-future where climate has rewritten the calendar, two strangers find unexpected kinship — and one impossible promise — under the city's last storm.",
        status: "Completed",
        notes: "Written across eighteen months in 2023. The first draft was a 130-page sprawl; the shooting draft is a tighter 102. Influences include Kieslowski, early Mira Nair, and a particularly stubborn Chennai monsoon in 2017."
      },
      {
        slug: "office-hours",
        title: "Office Hours",
        genre: "Comedy",
        logline: "An IT support engineer accidentally becomes the company's unofficial therapist.",
        summary: "A workplace comedy about over-sharing colleagues, broken printers, and the strange wisdom you can find in a 4 PM coffee break.",
        status: "Completed",
        notes: "A love letter to the small humanity of large open-plan offices. Currently in the development pipeline at a major streaming platform."
      },
      {
        slug: "project-karuvel",
        title: "Project Karuvel",
        genre: "Thriller · Mystery",
        logline: "A retired detective is pulled back when his own old case files start solving themselves.",
        summary: "A taut, atmospheric thriller exploring memory, guilt, and the small towns that quietly keep their secrets.",
        status: "In Development"
      },
      {
        slug: "dosa-for-two",
        title: "Dosa for Two",
        genre: "Romantic Comedy",
        logline: "A food critic with no taste falls for the chef whose food he cannot describe.",
        summary: "A warm, breezy rom-com about pretending you know what you're doing — at love, at work, at brunch.",
        status: "Optioned"
      },
      {
        slug: "the-quiet-river",
        title: "The Quiet River",
        genre: "Drama",
        logline: "Three sisters return home to scatter their father's ashes and end up scattering everything else.",
        summary: "An intimate family drama spanning four days, two old wounds, and one very stubborn grandmother.",
        status: "Completed"
      },
      {
        slug: "signal-lost",
        title: "Signal Lost",
        genre: "Sci-Fi",
        logline: "A radio operator on a remote island starts receiving messages from the day before tomorrow.",
        summary: "A lo-fi sci-fi feature about loneliness, second chances, and the noise we mistake for meaning.",
        status: "In Development"
      }
    ],

    director: [
      {
        slug: "tea-by-the-window",
        title: "Tea by the Window",
        genre: "Short Film · Drama",
        logline: "Four strangers, one small café, one very bad afternoon.",
        summary: "Directed in a single continuous take, this short captures the quiet collapse and small mercy that strangers can offer each other.",
        status: "Completed",
        notes: "Shot in three days at an actual café in Mylapore. The single-take structure meant 22 rehearsals before the first roll."
      },
      {
        slug: "carbon-copy",
        title: "Carbon Copy",
        genre: "Short Film · Comedy",
        logline: "A photocopy machine begins printing the future. Nobody believes the intern.",
        summary: "A six-minute office comedy with sharp pacing and one excellent close-up of an HP LaserJet.",
        status: "Completed"
      },
      {
        slug: "postcards-home",
        title: "Postcards Home",
        genre: "Documentary · Short",
        logline: "Three migrant workers describe the city they've never been allowed to call home.",
        summary: "A tender documentary short, observational and unhurried, made during evenings off in 2023.",
        status: "Completed"
      },
      {
        slug: "untitled-feature-1",
        title: "Untitled Feature #1",
        genre: "Drama",
        logline: "A widowed Bharatanatyam teacher takes on her most reluctant student: her own son.",
        summary: "First feature in development. Currently in pre-production with location scouts in Madurai.",
        status: "In Development"
      }
    ],

    productionDesigner: [
      {
        slug: "house-of-almonds",
        title: "House of Almonds",
        genre: "Period Drama",
        logline: "A 1940s family home becomes the silent witness to four generations.",
        summary: "Production designed an 11-room set built across two soundstages. Won 'Best Art Direction' at SAIFF 2023.",
        status: "Released"
      },
      {
        slug: "late-bloom",
        title: "Late Bloom",
        genre: "Indie Drama",
        logline: "A single block in old Madras, recreated in painstaking detail.",
        summary: "Designed a fully practical street set including working storefronts, hand-painted signage, and period-accurate vehicles.",
        status: "Released"
      },
      {
        slug: "glasshouse",
        title: "Glasshouse",
        genre: "Sci-Fi",
        logline: "A near-future apartment that quietly rearranges itself when its occupants aren't looking.",
        summary: "Lead designer for a single-location sci-fi exploring intimacy, surveillance, and very tasteful furniture.",
        status: "Post-Production"
      }
    ],

    actor: [
      {
        slug: "tea-by-the-window-actor",
        title: "Tea by the Window",
        genre: "Short Film",
        logline: "Played 'The Stranger', a man who arrives twenty minutes too late.",
        summary: "Lead role in a self-directed short — a quiet, weight-of-a-thousand-words performance.",
        status: "Completed"
      },
      {
        slug: "half-light",
        title: "Half-Light",
        genre: "Web Series",
        logline: "Recurring role as 'Vishnu', the cynical newsroom editor with a soft spot for terrible interns.",
        summary: "Appeared in eight episodes of an acclaimed long-form drama. Streaming on a major OTT platform.",
        status: "Released"
      },
      {
        slug: "the-wrong-wedding",
        title: "The Wrong Wedding",
        genre: "Feature · Comedy",
        logline: "Played 'Cousin Mani', who shows up to the wrong wedding and stays for the food.",
        summary: "Supporting role in a 2024 ensemble comedy. Critics noted the performance was 'small, sharp, and very funny'.",
        status: "Released"
      },
      {
        slug: "voiceover-audible-originals",
        title: "Voiceover · Audible Originals",
        genre: "Audio Drama",
        logline: "Lead narrator for a six-part Tamil-English audio thriller.",
        summary: "Recorded over 14 hours of dramatic narration. Available on Audible.",
        status: "Released"
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
window.PORTFOLIO_IMG = {
  poster: (work) =>
    work.poster || `https://picsum.photos/seed/${work.slug}/600/800`,
  hero: (work) =>
    work.hero   || `https://picsum.photos/seed/${work.slug}-hero/1600/900`,
  gallery: (work) =>
    work.gallery || [1, 2, 3, 4].map(i => ({
      src: `https://picsum.photos/seed/${work.slug}-bts-${i}/900/700`,
      caption: ["Behind the scenes", "On location", "First read-through", "Final shot"][i - 1]
    }))
};
