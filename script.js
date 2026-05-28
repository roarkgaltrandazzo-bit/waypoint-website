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
