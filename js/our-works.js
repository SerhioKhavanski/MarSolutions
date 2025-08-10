
const works = document.querySelectorAll('.our-works-work');
const prevBtn = document.getElementById('prev-trigger');
const nextBtn = document.getElementById('next-trigger');
const counterWrapper = document.getElementById('counter-wrapper');
let currentIndex = 0;

function updateGallery() {
  works.forEach((work, i) => {
    work.classList.toggle('active', i === currentIndex);
  });

  prevBtn.classList.toggle('trigger-secondary', currentIndex === 0);
  nextBtn.classList.toggle('trigger-secondary', currentIndex === works.length - 1);

  counterWrapper.innerHTML = '';
  works.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'our-works-counter';
    if (i !== currentIndex) dot.classList.add('counter-secondary');
    counterWrapper.appendChild(dot);
  });
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateGallery();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < works.length - 1) {
    currentIndex++;
    updateGallery();
  }
});

updateGallery();