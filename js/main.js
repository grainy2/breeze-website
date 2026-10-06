/**
 * Breeze Restaurant & Lounge (Kaduna)
 * Fast, lightweight interactive behaviors
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Current Year in Footer
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Mobile Nav Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      navLinks.classList.toggle('nav-links-open');
    });

    // Close menu when clicking any nav link
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('nav-links-open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 3. Smooth Anchor Scrolling Offset for Sticky Header
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerHeight = document.querySelector('.site-header')?.offsetHeight || 72;
        const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight - 16;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
