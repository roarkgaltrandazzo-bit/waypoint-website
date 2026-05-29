const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();

const sarinaHeadshotPath = '/ChatGPT%20Image%20May%2029,%202026,%2008_45_26%20AM.png?v=sarina-exact-headshot-1';
const advancementRhythmPath = '/WMP%20Advancement%20Rhythm.png?v=hero-rhythm-aboutus-2';

document.querySelectorAll('a[href="/"], a[href="/index.html"], a[href="index.html"], a[href="https://waypointmissionpartners.com"], a[href="https://waypointmissionpartners.com/"], a[href="https://www.waypointmissionpartners.com"], a[href="https://www.waypointmissionpartners.com/"]').forEach((link) => {
  link.setAttribute('href', '/home/');
});

document.querySelectorAll('a[href="/index.html#proof"], a[href="index.html#proof"], a[href="#proof"], a[href="/proof.html"]').forEach((link) => {
  link.setAttribute('href', '/proof/');
});

// Keep the nav label consistent across every page, including older cached pages.
document.querySelectorAll('a, .footer-links a, .mobile-nav-panel a').forEach((link) => {
  if (link.textContent.trim() === 'About Sarina') {
    link.textContent = 'About Us';
  }
});

if ((window.location.pathname === '/' || window.location.pathname.endsWith('/index.html')) && window.location.hash === '#proof') {
  window.location.replace('/proof/');
}

if (window.location.pathname.endsWith('/index.html') && !window.location.hash) {
  window.location.replace('/home/');
}

document.querySelectorAll('.mobile-nav-panel a').forEach((link) => {
  link.addEventListener('click', () => {
    const details = document.querySelector('.mobile-menu');
    if (details) details.removeAttribute('open');
  });
});

// Single source of truth for Sarina photos.
document.querySelectorAll('.headshot-wrap img, img[src*="Randazzo_Sarina"], img[src*="Sarina_Randazzo_Headshot"], img[src*="sarina-randazzo-headshot"], img[src*="ChatGPT%20Image%20May%2029"], img[src*="ChatGPT Image May 29"], img[alt*="Sarina Randazzo"]').forEach((img) => {
  img.src = sarinaHeadshotPath;
  img.removeAttribute('srcset');
  img.style.objectFit = 'cover';
  img.style.objectPosition = 'center top';
});

// Replace any legacy homepage hero rhythm panel with the finished visual.
if (document.body && document.querySelector('.hero .hero-grid')) {
  document.querySelectorAll('.hero .process-panel').forEach((panel) => {
    panel.outerHTML = `<div class="hero-visual"><img src="${advancementRhythmPath}" alt="Waypoint Advancement Rhythm: Cultivation, Solicitation, and Stewardship" /></div>`;
  });
}

// Remove broken SVG-wrapped photo panels from request pages and replace with reliable native content.
document.querySelectorAll('img[src*="/assets/photos/team-discussion-photo.svg"]').forEach((img) => {
  const panel = img.closest('.photo-panel');
  if (panel) {
    panel.outerHTML = '<div class="card"><span class="label">Waypoint resource</span><h3>Practical tools for advancement work</h3><p>This request page gives your organization a specific guide without forcing visitors back through the general assessment flow.</p><ul class="check-list"><li>Simple capture form</li><li>Resource-specific follow-up</li><li>Clear next step after submission</li></ul></div>';
  }
});

function replaceBrokenGraphics() {
  const processMarkup = `
    <div class="process-panel" aria-label="Advancement rhythm">
      <h3>Advancement rhythm</h3>
      <div class="process-step"><strong>Cultivation</strong><span>Build trust before the ask.</span></div>
      <div class="process-arrow">↓</div>
      <div class="process-step"><strong>Solicitation</strong><span>Make the right ask at the right time.</span></div>
      <div class="process-arrow">↓</div>
      <div class="process-step"><strong>Stewardship</strong><span>Show donors what happened because they gave.</span></div>
    </div>`;

  document.querySelectorAll('img[src$="/assets/advancement-cycle.svg"], img[src="/assets/advancement-cycle.svg"]').forEach((img) => {
    const wrapper = img.closest('.hero-visual, .visual-panel, .mockup-panel') || img;
    wrapper.outerHTML = processMarkup;
  });
}

function stabilizeAssessmentLayout() {
  if (!document.getElementById('readinessForm')) return;
  const style = document.createElement('style');
  style.textContent = `
    .assessment-layout { width: min(980px, calc(100% - 48px)) !important; margin: 0 auto !important; }
    .question-card { box-sizing: border-box !important; width: 100% !important; }
    .question-title { display: block !important; width: 100% !important; margin: 0 0 18px !important; padding: 0 !important; line-height: 1.3 !important; }
    .scale-options, .choice-list { display: grid !important; grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 12px !important; width: 100% !important; }
    .scale-options label, .choice-list label { min-height: 56px !important; align-items: center !important; padding: 14px 16px !important; line-height: 1.25 !important; white-space: normal !important; }
    .contact-grid { display: grid !important; grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 16px !important; }
    @media (max-width: 980px) { .assessment-intro-grid, .scale-options, .choice-list, .contact-grid { grid-template-columns: 1fr !important; } }
  `;
  document.head.appendChild(style);
}

replaceBrokenGraphics();
stabilizeAssessmentLayout();
