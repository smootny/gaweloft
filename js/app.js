document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;  // Assuming the first slide should be shown first

  function showSlide(index) {
    slides[currentSlide].removeAttribute('data-active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].setAttribute('data-active', 'true');
  }

  document.querySelector("[data-carousel-button='prev']").addEventListener("click", () => {
    showSlide(currentSlide - 1);
  });

  document.querySelector("[data-carousel-button='next']").addEventListener("click", () => {
    showSlide(currentSlide + 1);
  });
});
