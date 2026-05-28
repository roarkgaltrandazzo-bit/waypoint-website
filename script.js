const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();

// Keep old explicit homepage links from acting like a separate stale route.
document.querySelectorAll('a[href="/index.html"], a[href="index.html"]').forEach((link) => {
  link.setAttribute('href', '/');
});

// Retire the old homepage proof anchor. Any leftover proof link should now
// load the standalone proof page instead of pulling visitors into the old
// one-page navigation flow.
document.querySelectorAll('a[href="/index.html#proof"], a[href="index.html#proof"], a[href="#proof"], a[href="/proof.html"]').forEach((link) => {
  link.setAttribute('href', '/proof/');
});

if (window.location.pathname.endsWith('/index.html') && window.location.hash === '#proof') {
  window.location.replace('/proof/');
}

document.querySelectorAll('.mobile-nav-panel a').forEach((link) => {
  link.addEventListener('click', () => {
    const details = document.querySelector('.mobile-menu');
    if (details) details.removeAttribute('open');
  });
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

  const artifactMarkup = `
    <div class="mockup-panel">
      <div class="artifact-board" aria-label="Waypoint deliverable previews">
        <div class="artifact-preview"><strong>Stewardship Calendar</strong><span>30-day follow-up rhythm after gifts, campaigns, and events.</span></div>
        <div class="artifact-preview"><strong>Board Role Guide</strong><span>Clear roles for introductions, thank-you touches, sponsor support, and follow-up.</span></div>
        <div class="artifact-preview"><strong>Event Follow-Up</strong><span>Practical sequence for attendees, sponsors, donors, board members, and families.</span></div>
        <div class="artifact-preview"><strong>Donor Rhythm</strong><span>A repeatable communication cadence between asks.</span></div>
      </div>
    </div>`;

  const toolkitMarkup = `
    <div class="mockup-panel toolkit">
      <div class="artifact-board" aria-label="Waypoint resource toolkit">
        <div class="artifact-preview"><strong>Self-Check</strong><span>Readiness diagnostic for advancement structure.</span></div>
        <div class="artifact-preview"><strong>Framework</strong><span>Guide to cultivation, solicitation, stewardship, and annual rhythm.</span></div>
        <div class="artifact-preview"><strong>Post-Event</strong><span>30-day stewardship calendar after a major event.</span></div>
        <div class="artifact-preview"><strong>Board Guide</strong><span>Role clarity for board advancement support.</span></div>
      </div>
    </div>`;

  document.querySelectorAll('img[src$="/assets/advancement-cycle.svg"], img[src="/assets/advancement-cycle.svg"]').forEach((img) => {
    const wrapper = img.closest('.hero-visual, .visual-panel, .mockup-panel') || img;
    wrapper.outerHTML = processMarkup;
  });

  document.querySelectorAll('img[src$="/assets/proof-artifacts.svg"], img[src="/assets/proof-artifacts.svg"]').forEach((img) => {
    const wrapper = img.closest('.mockup-panel, .visual-panel') || img;
    wrapper.outerHTML = artifactMarkup;
  });

  document.querySelectorAll('img[src$="/assets/resource-mockups.svg"], img[src="/assets/resource-mockups.svg"], img[src$="/assets/resource-toolkit-with-logos.svg"], img[src="/assets/resource-toolkit-with-logos.svg"]').forEach((img) => {
    const wrapper = img.closest('.mockup-panel, .visual-panel') || img;
    wrapper.outerHTML = toolkitMarkup;
  });
}

function stabilizeAssessmentLayout() {
  if (!document.getElementById('readinessForm')) return;

  const style = document.createElement('style');
  style.textContent = `
    .assessment-hero { padding: 72px 0 54px !important; }
    .assessment-hero .container { max-width: 980px !important; }
    .assessment-logo { width: min(260px, 62vw) !important; height: auto !important; margin-bottom: 24px !important; }
    .assessment-wrap { padding: 54px 0 84px !important; }
    .assessment-layout { width: min(980px, calc(100% - 48px)) !important; margin: 0 auto !important; }
    .assessment-card { box-sizing: border-box !important; }
    .question-block { box-sizing: border-box !important; width: 100% !important; margin: 0 0 18px !important; padding: 30px 28px 28px !important; border: 0 !important; border-radius: 26px !important; background: var(--white) !important; box-shadow: 0 0 0 1px var(--rule), 0 10px 26px rgba(12, 34, 60, .06) !important; min-inline-size: 0 !important; }
    fieldset.question-block { min-inline-size: 0 !important; }
    .question-block legend { display: block !important; float: left !important; box-sizing: border-box !important; width: 100% !important; max-width: 100% !important; padding: 0 !important; margin: 0 0 18px !important; color: var(--navy-deep) !important; font-size: 20px !important; line-height: 1.3 !important; font-weight: 900 !important; white-space: normal !important; }
    .question-block legend + .scale-options, .question-block legend + .choice-list { clear: both !important; }
    .scale-options { display: grid !important; grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 12px !important; width: 100% !important; }
    .scale-options label, .choice-list label { min-height: 56px !important; align-items: center !important; padding: 14px 16px !important; line-height: 1.25 !important; white-space: normal !important; }
    .choice-list { clear: both !important; display: grid !important; grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 12px !important; width: 100% !important; }
    .contact-grid { display: grid !important; grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 16px !important; }
    .transition-box h2 { font-size: clamp(30px, 4vw, 42px) !important; line-height: 1.05 !important; }
    @media (max-width: 980px) {
      .assessment-shell, .assessment-intro-grid, .scale-options, .choice-list, .contact-grid { grid-template-columns: 1fr !important; }
      .assessment-sidebar { position: static !important; }
    }
  `;
  document.head.appendChild(style);
}

replaceBrokenGraphics();
stabilizeAssessmentLayout();
