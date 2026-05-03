# Sethu Madhavan R S — Portfolio Website

A clean, cinematic portfolio for a screenwriter / director / production designer / actor.
Built with **plain HTML, CSS, and JavaScript** — no build tools, no frameworks. Just open the files in a browser.

---

## 1. How to Run It Locally

You have two easy options:

**Option A — Double-click `index.html`.**
That's it. Everything will work, except the contact form (which needs a few minutes of setup, see Step 4).

**Option B — Run a tiny local server (recommended).**
Some browsers block fonts/scripts when opening files directly. To run a quick server:

```bash
# Python 3 (already installed on most computers)
cd sethu-mathavan-portfolio
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

---

## 2. Folder Structure

```
sethu-mathavan-portfolio/
├── index.html                  ← Home page
├── about.html                  ← About page (typewriter style)
├── work.html                   ← Work overview (4 categories)
├── pages/
│   ├── work-screenplay.html
│   ├── work-director.html
│   ├── work-production-designer.html
│   └── work-actor.html
├── css/
│   └── styles.css              ← All styling lives here
├── js/
│   ├── data.js                 ← All works + profile info (edit this!)
│   ├── main.js                 ← Navigation, smooth-scroll, animations
│   ├── carousel.js             ← Home page rotating carousels
│   ├── work.js                 ← Card grids on category pages
│   └── contact.js              ← Floating button + EmailJS form
├── images/                     ← Drop project images here
└── README.md
```

---

## 3. Editing Content (The Easy Part)

All copy and project data lives in **`js/data.js`**. Open that one file and you can change:

- The writer's name, tagline, email, phone, location, and quote.
- The list of accolades shown on the home page.
- Every work, in every category — title, genre, logline, summary, status.

You don't have to touch any HTML to add a new project. Just append a new entry to the right list (`screenplay`, `director`, `productionDesigner`, or `actor`) and save. Refresh the browser and your changes appear.

To restyle the site (colors, spacing, fonts), open **`css/styles.css`** and edit the variables at the top under `:root`. That section is comment-labelled and changing one value updates every screen.

---

## 4. Set Up the Contact Form (EmailJS)

The contact form is wired to **EmailJS**, which lets you receive form submissions in your own inbox without running any server. Setup takes about 5 minutes.

### Step-by-step

1. Create a free account at <https://www.emailjs.com>.
2. **Add an email service** (Gmail, Outlook, Yahoo, etc.).
   When done, EmailJS will show you a **Service ID** — copy it.
3. **Create an email template** with these four variable names:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{from_phone}}`
   - `{{message}}`

   A simple template body might be:
   ```
   New message from {{from_name}} ({{from_email}})
   Phone: {{from_phone}}

   {{message}}
   ```
   Save it. EmailJS will give you a **Template ID** — copy it.
4. Go to **Account → API Keys** in the EmailJS dashboard and copy your **Public Key**.
5. Open **`js/contact.js`** and paste the three values into the `EMAILJS_CONFIG` block near the top:

   ```js
   const EMAILJS_CONFIG = {
     publicKey:  'paste_your_public_key_here',
     serviceId:  'paste_your_service_id_here',
     templateId: 'paste_your_template_id_here'
   };
   ```
6. Save and refresh the site. Click the floating ✉ button and send a test message — it should arrive in the email account you connected in step 2.

> The EmailJS SDK is already loaded via a `<script>` tag on every page (from a CDN). You don't need to install anything.

### Troubleshooting

- **Form says "Contact form not configured yet"** — you forgot to replace the `YOUR_…_HERE` placeholders in `js/contact.js`.
- **Form fails with a 4xx error** — double-check that the template field names exactly match `{{from_name}}`, `{{from_email}}`, `{{from_phone}}`, `{{message}}`.
- **Emails go to spam** — that's normal until you've sent a few. Mark one as "not spam" and Gmail/Outlook will learn.

---

## 4b. Hero Background Video — Swapping It Out

The hero section plays a looping background video from `videos/hero-bg.mp4`. To replace it with a different clip:

1. Drop your new video into `videos/`. Keep it short (under 30s), muted-friendly, and ideally under a few MB so the page loads quickly.
2. Either rename your file to `hero-bg.mp4` (overwriting the old one), or update the `<source src="videos/...">` line inside `index.html`.
3. The hero already adds a soft lavender overlay so any video underneath stays subtle. If your video is very bright or busy, increase the overlay opacity by editing `.hero-bg-overlay` in `css/styles.css` (raise the `0.78` / `0.86` values closer to `0.92`).
4. Users who turn on "reduced motion" in their OS will automatically see a static gradient instead of the video — no extra work required.

## 5. Hero Portrait — Adding Your Own Photo

The site ships with a placeholder portrait at `images/portrait.svg`. To use a real photo:

1. Drop your photo into the `images/` folder, e.g. `images/portrait.jpg`.
2. Open `js/data.js` and update the `portrait` field inside `profile`:
   ```js
   portrait: "images/portrait.jpg",
   ```
3. Save and refresh.

For best results use a portrait-orientation photo (taller than wide, around 800×1000 px works great). The CSS automatically rounds and shadows it.

## 6. Project Posters & Behind-the-Scenes Galleries

Every work in `js/data.js` automatically gets placeholder images from picsum.photos (a free random-photo service) seeded on the work's `slug`, so the same project always shows the same images. To use your own photos:

1. Drop your images into the `images/` folder.
2. In `js/data.js`, on any work, add the optional fields:
   ```js
   {
     slug: "the-last-monsoon",
     title: "The Last Monsoon",
     // ... existing fields ...

     poster: "../images/last-monsoon-poster.jpg",  // shown on cards & carousels
     hero:   "../images/last-monsoon-banner.jpg",  // big banner on the detail page
     gallery: [
       { src: "../images/last-monsoon-bts1.jpg", caption: "On location in Pondicherry" },
       { src: "../images/last-monsoon-bts2.jpg", caption: "First read-through" },
       { src: "../images/last-monsoon-bts3.jpg", caption: "Director's monitor" }
     ]
   }
   ```
3. **Note about paths:** because the detail page lives in `/pages/`, image paths there start with `../images/`. The home page carousels are in the root, but the helper functions in `data.js` handle URL generation either way — explicit URLs you provide must include the `../` prefix because the dynamic detail page is one folder deep.

If you don't add `poster`, `hero`, or `gallery`, the picsum placeholders are used automatically.

## 7. Individual Work Pages

Every work has its own detail page automatically. The URL looks like:

```
pages/work-detail.html?cat=screenplay&slug=the-last-monsoon
```

You don't need to create a new HTML file per project. The single file `pages/work-detail.html` reads the `cat` and `slug` from the URL and pulls the matching work from `js/data.js`. To add a new project, you literally only edit `js/data.js`.

---

## 8. Deployment

Any static host will work. The simplest options:

- **Netlify** — drag the folder onto <https://app.netlify.com/drop>.
- **Vercel** — `vercel deploy` from the folder.
- **GitHub Pages** — push the folder to a repo and enable Pages in settings.
- **Your own hosting** — upload all files to your web root via FTP. No server-side code needed.

---

## 9. Fonts and Theme

- Headings use **Cinzel** (elegant cinematic serif).
- Body text uses **Cormorant Garamond** (book-style serif).
- The About page uses **Courier Prime** (typewriter feel).

All three are loaded for free from Google Fonts. To swap a font, change the `<link>` URLs in each HTML file's `<head>` and update the `--font-…` variables at the top of `css/styles.css`.

---

## 10. Credits

Code, copy, and design scaffolded for Sethu Madhavan R S.
Free to extend, restyle, and rewrite.
