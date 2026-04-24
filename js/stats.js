// IntersectionObserver: KPI counters + generic reveal-on-scroll
(function () {
  const counters = document.querySelectorAll('[data-counter]');

  const animate = (el) => {
    const target = parseFloat(el.dataset.counter);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = 1400;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      el.textContent = prefix + Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  if ('IntersectionObserver' in window && counters.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animate(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach((c) => io.observe(c));
  }

  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const revealIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            revealIO.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px 60px 0px' }
    );
    reveals.forEach((el) => revealIO.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('in'));
  }

  // Optional slider arrow controls
  document.querySelectorAll('[data-scroll-target]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = document.querySelector(btn.dataset.scrollTarget);
      if (!target) return;
      const dir = btn.dataset.scrollDir === 'prev' ? -1 : 1;
      target.scrollBy({ left: dir * target.clientWidth * 0.85, behavior: 'smooth' });
    });
  });
})();
