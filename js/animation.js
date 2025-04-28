const track = document.querySelector('.carousel-track');
const indicators = document.querySelectorAll('.carousel-indicator');
const slides = document.querySelectorAll('.carousel-slide');

let currentIndex = 0;

function goToSlide(index) {
  indicators.forEach(ind => ind.classList.remove('active'));
  indicators[index].classList.add('active');
  track.style.transform = 'translateX(' + (-index * 100) + '%)';
}

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentIndex = index;
    goToSlide(currentIndex);
  });
});

// Timer para passar automaticamente
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  goToSlide(currentIndex);
}, 5000); // Troca a cada 3 segundos