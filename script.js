const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();

// Retire the old homepage proof anchor. Any leftover link to /index.html#proof
// should now load the standalone proof page instead of pulling visitors back
// into the old one-page navigation flow.
document.querySelectorAll('a[href="/index.html#proof"], a[href="index.html#proof"], a[href="#proof"]').forEach((link) => {
  link.setAttribute('href', '/proof.html');
});

if (window.location.pathname.endsWith('/index.html') && window.location.hash === '#proof') {
  window.location.replace('/proof.html');
}

document.querySelectorAll('.mobile-nav-panel a').forEach((link) => {
  link.addEventListener('click', () => {
    const details = document.querySelector('.mobile-menu');
    if (details) details.removeAttribute('open');
  });
});
