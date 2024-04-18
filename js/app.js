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

document.addEventListener("DOMContentLoaded", function() {
  const openBtn = document.getElementById('contactBtn');
  const closeBtn = document.getElementById('closeBtn');
  const popup = document.getElementById('popupForm');

  openBtn.addEventListener('click', function() {
    popup.style.display = 'block';
  });

  closeBtn.addEventListener('click', function() {
    popup.style.display = 'none';
  });
});

$(document).ready(function() {
  $('#os-phrases > h2 > span, #os-phrases > h3 > span').lettering(); // Apply lettering to each letter in spans of h2 and h3
});
