document.addEventListener("DOMContentLoaded", () => {
  const reviews = document.querySelectorAll('.review');
  const prevBtn = document.getElementById('review-prev');
  const nextBtn = document.getElementById('review-next');
  const counterWrapper = document.getElementById('review-counter');

  let currentIndex = 0;
  const visibleCount = 3;

  function updateGallery() {
    reviews.forEach((review, i) => {
      review.classList.toggle('active', i >= currentIndex && i < currentIndex + visibleCount);
    });

    prevBtn.classList.toggle('trigger-secondary', currentIndex === 0);
    nextBtn.classList.toggle('trigger-secondary', currentIndex + visibleCount >= reviews.length);

    counterWrapper.innerHTML = '';
    const totalPages = Math.ceil(reviews.length / visibleCount);
    const currentPage = Math.floor(currentIndex / visibleCount);

    for (let i = 0; i < totalPages; i++) {
      const dot = document.createElement('div');
      dot.className = 'our-works-counter';
      if (i !== currentPage) dot.classList.add('counter-secondary');
      counterWrapper.appendChild(dot);
    }
  }

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex -= visibleCount;
      updateGallery();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex + visibleCount < reviews.length) {
      currentIndex += visibleCount;
      updateGallery();
    }
  });

  updateGallery();
});