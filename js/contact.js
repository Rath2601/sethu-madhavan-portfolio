/* ============================================================
   CONTACT.JS — Floating button + modal contact form.
   ------------------------------------------------------------
   Sends messages with EmailJS. NO BACKEND REQUIRED.

   ★ HOW TO WIRE UP EMAILJS ★
   1. Sign up at https://www.emailjs.com (free tier is fine).
   2. Add an email service (Gmail, Outlook, etc.).
        ⇒ note your SERVICE ID
   3. Create an email template with these variable names:
        {{from_name}} {{from_email}} {{from_phone}} {{message}}
        ⇒ note your TEMPLATE ID
   4. From Account → API Keys, copy your PUBLIC KEY.
   5. Paste those three values into EMAILJS_CONFIG below.
   6. That's it — submissions will arrive in your inbox.
   ============================================================ */

const EMAILJS_CONFIG = {
  publicKey:  'YOUR_PUBLIC_KEY_HERE',   // ← STEP 4 value
  serviceId:  'YOUR_SERVICE_ID_HERE',   // ← STEP 2 value
  templateId: 'YOUR_TEMPLATE_ID_HERE'   // ← STEP 3 value
};

document.addEventListener('DOMContentLoaded', () => {
  initEmailJS();
  setupModal();
  setupForm();
});

/* ---- 1. Initialise EmailJS once the SDK is on the page ---- */
function initEmailJS() {
  if (typeof emailjs === 'undefined') {
    console.warn('[Contact] EmailJS SDK not loaded. Did you include the <script> tag?');
    return;
  }
  try {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  } catch (err) {
    console.warn('[Contact] EmailJS init failed:', err);
  }
}

/* ---- 2. Open / close the contact modal ---- */
function setupModal() {
  const fab     = document.querySelector('.contact-fab');
  const modal   = document.querySelector('.contact-modal');
  const close   = document.querySelector('.contact-modal .close');

  if (!fab || !modal) return;

  fab.addEventListener('click', () => modal.classList.add('is-open'));
  close?.addEventListener('click', () => modal.classList.remove('is-open'));

  // Click outside the card to close.
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('is-open');
  });

  // Esc key closes.
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') modal.classList.remove('is-open');
  });
}

/* ---- 3. Form submit → EmailJS send ---- */
function setupForm() {
  const form   = document.querySelector('.contact-form');
  const status = document.querySelector('.form-status');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    setStatus(status, 'Sending…', '');

    // Quick guard: if the placeholder values are still here, warn.
    if (EMAILJS_CONFIG.publicKey.startsWith('YOUR_')) {
      setStatus(
        status,
        'Contact form not configured yet. See README for EmailJS setup.',
        'error'
      );
      return;
    }

    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        form
      );
      setStatus(status, 'Message sent — thank you. I\'ll be in touch soon.', 'success');
      form.reset();
    } catch (err) {
      console.error('[Contact] send failed:', err);
      setStatus(status, 'Something went wrong. Please email me directly.', 'error');
    }
  });
}

function setStatus(node, message, kind) {
  if (!node) return;
  node.textContent = message;
  node.className = 'form-status ' + (kind || '');
}
