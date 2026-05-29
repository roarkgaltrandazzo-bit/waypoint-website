const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();

// Force every home/logo link to the stable new homepage route.
document.querySelectorAll('a[href="/"], a[href="/index.html"], a[href="index.html"], a[href="https://waypointmissionpartners.com"], a[href="https://waypointmissionpartners.com/"], a[href="https://www.waypointmissionpartners.com"], a[href="https://www.waypointmissionpartners.com/"]').forEach((link) => {
  link.setAttribute('href', '/home/');
});

document.querySelectorAll('a[href="/index.html#proof"], a[href="index.html#proof"], a[href="#proof"], a[href="/proof.html"]').forEach((link) => {
  link.setAttribute('href', '/proof/');
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

const sarinaHeadshotData = 'data:image/jpeg;base64,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';

document.querySelectorAll('.headshot-wrap img, img[src*="Randazzo_Sarina"], img[src*="Sarina_Randazzo_Headshot"]').forEach((img) => {
  img.src = sarinaHeadshotData;
  img.removeAttribute('srcset');
  img.style.objectFit = 'cover';
  img.style.objectPosition = 'center top';
});

// Remove broken SVG-wrapped photo panels from request pages and replace with reliable native content.
document.querySelectorAll('img[src*="/assets/photos/"]').forEach((img) => {
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
