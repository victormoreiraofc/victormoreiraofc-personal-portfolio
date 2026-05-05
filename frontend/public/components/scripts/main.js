import { initLoader }   from './modules/loader.js';
import { initCarousel } from './modules/carousel.js';
import { initNavbar }   from './modules/navbar.js';

document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initCarousel();
  initNavbar();
});