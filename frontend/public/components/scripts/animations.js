document.addEventListener('DOMContentLoaded', function() {
  const targets = document.querySelectorAll('section, h1, h2, p, form, .c-skill-card, .c-project-list--right, .c-project-list--left, .c-experience-list');

  targets.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
  });

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      } else {
        e.target.style.transition = 'none';
        e.target.style.opacity = '0';
        e.target.style.transform = 'translateY(20px)';
      }
    });
  }, { threshold: 0.1 });

  targets.forEach(el => obs.observe(el));
});