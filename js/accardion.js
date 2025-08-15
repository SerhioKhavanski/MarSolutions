document.querySelectorAll('.versions-accardion img').forEach(arrow => {
  arrow.addEventListener('click', e => {
    e.stopPropagation();
    const wrapper = arrow.closest('.versions-accardion-wrapper');
    const info = wrapper.querySelector('.versions-aacardion-info');

    arrow.classList.toggle('open');
    info.classList.toggle('open');
  });
});
