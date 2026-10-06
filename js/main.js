/**
 * Breeze Restaurant & Lounge (Kaduna)
 * Fast, lightweight interactive behaviors & Theme Management
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Current Year in Footer
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Light / Dark Theme Management
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn, .theme-drawer-btn');
  const navLinks = document.querySelector('.nav-links');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  
  function getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') || 'dark';
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('breeze_theme', theme);
    } catch (e) {
      // localStorage may be disabled in private browsing
    }
  }

  themeToggleBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const current = getCurrentTheme();
      const next = current === 'dark' ? 'light' : 'dark';
      setTheme(next);

      // If user clicked the theme switch inside the mobile drawer, close the drawer
      if (btn.classList.contains('theme-drawer-btn') && navLinks) {
        navLinks.classList.remove('nav-links-open');
        if (mobileMenuBtn) {
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

  // Listen for system theme changes if user hasn't chosen a preference
  if (window.matchMedia) {
    const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    colorSchemeQuery.addEventListener('change', (e) => {
      try {
        const saved = localStorage.getItem('breeze_theme');
        if (!saved) {
          setTheme(e.matches ? 'dark' : 'light');
        }
      } catch (err) {}
    });
  }

  // 3. Mobile Navigation Drawer Toggle
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
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

    // Close menu if clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        if (navLinks.classList.contains('nav-links-open')) {
          navLinks.classList.remove('nav-links-open');
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
      }
    });
  }

  // 4. Smooth Anchor Scrolling Offset for Sticky Header
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerHeight = document.querySelector('.site-header')?.offsetHeight || 64;
        const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight - 12;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
