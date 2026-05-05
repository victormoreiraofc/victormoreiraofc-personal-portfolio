export function initCarousel() {
  const track = document.querySelector('.c-skill-bar__list');

  const originalItems = Array.from(track.querySelectorAll('.c-skill-bar__item'));

  originalItems.forEach(item => {
    const clone = item.cloneNode(true);
    track.appendChild(clone);
  });

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const halfWidth = track.scrollWidth / 2;

      const style = document.createElement('style');
      style.textContent = `
        @keyframes carousel-scroll {
          from { transform: translateX(0px); }
          to   { transform: translateX(-${halfWidth}px); }
        }
      `;
      document.head.appendChild(style);

      track.style.animation = 'carousel-scroll 20s linear infinite';
    });
  });
}