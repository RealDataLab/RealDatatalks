// Sticky header transition + mobile menu toggle
(function () {
  const header = document.querySelector('[data-sticky]');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 40) header.classList.add('header-scrolled');
      else header.classList.remove('header-scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-mobile-menu]');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Year in footer
  const y = document.querySelectorAll('[data-year]');
  y.forEach((el) => (el.textContent = new Date().getFullYear()));

  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); observer.unobserve(e.target); }
      }),
      { threshold: 0.05, rootMargin: '0px 0px 60px 0px' }
    );
    reveals.forEach((el) => observer.observe(el));
  }
})();
