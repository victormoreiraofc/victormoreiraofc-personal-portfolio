export function initLoader() {
  window.addEventListener('load', () => {
    const loader = document.getElementById('l-loading-screen');

    setTimeout(() => {
      loader.classList.add('loader-hidden');

      setTimeout(() => {
        loader.style.display = 'none';
      }, 600);
    }, 1500);
  });
}