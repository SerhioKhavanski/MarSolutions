// document.addEventListener("DOMContentLoaded", () => {
//   const track = document.querySelector('.clients-logo-track');

//   const wrapperWidth = document.querySelector('.clients-logo-wrapper').offsetWidth;

//   let totalWidth = track.scrollWidth;
//   while (totalWidth < wrapperWidth * 2) {
//     const clone = track.cloneNode(true);
//     track.parentNode.appendChild(clone);
//     totalWidth += clone.scrollWidth;
//   }

//   let pos = 0;
//   function animate() {
//     pos -= 1; 
//     if (Math.abs(pos) >= track.scrollWidth) {
//       pos = 0; 
//     }
//     track.style.transform = `translateX(${pos}px)`;
//     requestAnimationFrame(animate);
//   }

//   animate();
// });