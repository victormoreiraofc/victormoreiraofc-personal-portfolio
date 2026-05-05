export function initNavbar() {

  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('nav-menu');
  const navLinks  = document.querySelectorAll('.c-navbar__link');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-open');
    navMenu.classList.toggle('is-open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('is-open');
      navMenu.classList.remove('is-open');
    });
  });
}