function updateScale() {
  // Вычисляем реальный zoom (приблизительно)
  const zoomFactor = window.outerWidth / window.innerWidth;

  // Компенсируем zoom обратным scale
  document.querySelectorAll('.our-works-gallery-trigger,.review-trigger').forEach(el => {
    el.style.transform = `scale(${1 / zoomFactor})`;
  });
}

window.addEventListener('resize', updateScale);
window.addEventListener('load', updateScale);
