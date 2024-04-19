// document.addEventListener("DOMContentLoaded", function() {
//   const slides = document.querySelectorAll(".slide");
//   let currentSlide = 0;  // Assuming the first slide should be shown first
//
//   function showSlide(index) {
//     slides[currentSlide].removeAttribute('data-active');
//     currentSlide = (index + slides.length) % slides.length;
//     slides[currentSlide].setAttribute('data-active', 'true');
//   }
//
//   document.querySelector("[data-carousel-button='prev']").addEventListener("click", () => {
//     showSlide(currentSlide - 1);
//   });
//
//   document.querySelector("[data-carousel-button='next']").addEventListener("click", () => {
//     showSlide(currentSlide + 1);
//   });
// });
//
// document.addEventListener("DOMContentLoaded", function() {
//   const openBtn = document.getElementById('contactBtn');
//   const closeBtn = document.getElementById('closeBtn');
//   const popup = document.getElementById('popupForm');
//
//   openBtn.addEventListener('click', function() {
//     popup.style.display = 'block';
//   });
//
//   closeBtn.addEventListener('click', function() {
//     popup.style.display = 'none';
//   });
// });
//
// document.addEventListener("DOMContentLoaded", function() {
//   const mainContainer = document.querySelector('.kontenerek');
//   const captions = document.querySelectorAll('.os-phrases h2');
//
//   function handleScrollAnimations() {
//     // Detect if the scroll is past half of the first section
//     const triggerHeight = window.innerHeight / 2;
//     captions.forEach((caption, index) => {
//       const fadeDirection = index % 2 === 0 ? 'fade-out-right' : 'fade-out-left';
//       if (mainContainer.scrollTop > triggerHeight) {
//         caption.classList.add(fadeDirection);
//       } else {
//         caption.classList.remove('fade-out-left', 'fade-out-right');
//         caption.style.animation = ''; // Reset animation to allow it to be triggered again
//       }
//     });
//   }
//
//   mainContainer.addEventListener('scroll', handleScrollAnimations);
//
//   // Reset animations on navigation or carousel control clicks
//   document.querySelectorAll('nav a, .carousel-button').forEach(control => {
//     control.addEventListener('click', () => {
//       captions.forEach(caption => {
//         caption.classList.remove('fade-out-left', 'fade-out-right');
//         caption.style.animation = ''; // Reset animation to re-trigger it
//         setTimeout(() => { // Timeout to ensure animation restarts
//           handleScrollAnimations();
//         }, 50);
//       });
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
  const mainContainer = document.querySelector('.kontenerek');
  const captions = document.querySelectorAll('.os-phrases h2');
  let animationTriggered = false; // Flag to check if animation has been triggered

  function showSlide(index) {
    slides[currentSlide].removeAttribute('data-active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].setAttribute('data-active', 'true');
    if (!animationTriggered) {
      triggerCaptionsAnimation();
      animationTriggered = true; // Set the flag as true after first trigger
    }
  }

  function triggerCaptionsAnimation() {
    if (!animationTriggered) { // Only run if animation hasn't been triggered
      captions.forEach((caption, index) => {
        const fadeDirection = index % 2 === 0 ? 'fade-out-right' : 'fade-out-left';
        caption.classList.add(fadeDirection);
        // Hide the caption after animation
        caption.addEventListener('animationend', () => caption.style.display = 'none');
      });
      animationTriggered = true; // Ensure animation doesn't trigger again
    }
  }

  document.querySelector("[data-carousel-button='prev']").addEventListener("click", () => {
    showSlide(currentSlide - 1);
  });

  document.querySelector("[data-carousel-button='next']").addEventListener("click", () => {
    showSlide(currentSlide + 1);
  });

  document.querySelectorAll('nav a, .carousel-button').forEach(control => {
    control.addEventListener('click', () => {
      if (!animationTriggered) {
        triggerCaptionsAnimation();
      }
    });
  });

  const openBtn = document.getElementById('contactBtn');
  const closeBtn = document.getElementById('closeBtn');
  const popup = document.getElementById('popupForm');

  openBtn.addEventListener('click', () => {
    popup.style.display = 'block';
    if (!animationTriggered) {
      triggerCaptionsAnimation();
    }
  });

  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    if (!animationTriggered) {
      triggerCaptionsAnimation();
    }
  });

  mainContainer.addEventListener('scroll', () => {
    if (!animationTriggered) {
      triggerCaptionsAnimation();
    }
  });
});

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
