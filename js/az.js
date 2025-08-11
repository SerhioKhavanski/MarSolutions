  function getZoomFactor() {
    const ow = window.outerWidth;
    const iw = window.innerWidth;
    return ow && iw ? ow / iw : 1 / (window.devicePixelRatio || 1);
  }
      const BASE_ZOOM = 1;
  

  function applyAntiZoom() {
    const currentZoom = getZoomFactor();
    const scale = BASE_ZOOM / currentZoom;
    document.documentElement.style.setProperty('--az', scale);
  }

  window.addEventListener('load', applyAntiZoom);
  window.addEventListener('resize', applyAntiZoom);

  let lastZoom = getZoomFactor();
  setInterval(() => {
    const z = getZoomFactor();
    if (Math.abs(z - lastZoom) > 0.001) {
      lastZoom = z;
      applyAntiZoom();
    }
  }, 250);