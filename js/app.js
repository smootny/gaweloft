
  document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
  const mainContainer = document.querySelector('.container');
  const captions = document.querySelectorAll('.os-phrases h2');
  let animationTriggered = false; // Flag to check if animation has been triggered
  const firstSlideGradient = document.querySelector('.gradient');
let gradientHidden = false;


  function showSlide(index) {
    slides[currentSlide].removeAttribute('data-active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].setAttribute('data-active', 'true');
    if (!animationTriggered) {
      triggerCaptionsAnimation()
      hideGradient();
      animationTriggered = true; // Set the flag as true after first trigger
    }
  }

  function hideGradient() {
    if (!gradientHidden && firstSlideGradient) {
      firstSlideGradient.style.opacity = '0';
      firstSlideGradient.style.transition = 'opacity 1s ease-in-out';
      firstSlideGradient.addEventListener('transitionend', function() {
        this.style.display = 'none';
      });
      gradientHidden = true;
    }
  }

  function triggerCaptionsAnimation() {
    if (!animationTriggered) {
      captions.forEach((caption, index) => {
        const fadeDirection = index % 2 === 0 ? 'fade-out-right' : 'fade-out-left';
        caption.classList.add(fadeDirection);
        caption.addEventListener('animationend', function() {
          this.style.display = 'none';
        });
      });
      animationTriggered = true;
    }
  }

document.querySelector("[data-carousel-button='prev']").addEventListener("click", () => {
  showSlide(currentSlide - 1)
  ;
});

document.querySelector("[data-carousel-button='next']").addEventListener("click", () => {
  showSlide(currentSlide + 1)
  ;
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
      triggerCaptionsAnimation();
      hideGradient();
    }

  });
});

  const openBtn = document.getElementById('contactBtn');
  const closeBtn = document.getElementById('closeBtn');
  const popup = document.getElementById('popupForm');
  const imagePopup = document.getElementById('imagePopup');
  const popupImage = document.getElementById('popupImage');
  const imageCloseBtn = document.getElementById('imageCloseBtn');
  const sendBtn = document.getElementById('send');

  openBtn.addEventListener('click', () => {
    popup.style.display = 'block';
    if (!animationTriggered) {
      triggerCaptionsAnimation()
      hideGradient();
    }
  });

  closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
  });

    sendBtn.addEventListener('click', (event) => {
      event.preventDefault();

      let allFilled = true;
      document.querySelectorAll('form [required]').forEach(input => {
        if (!input.value.trim()) allFilled = false;
      });

      if (allFilled) {
        document.querySelector('form').submit();
        setTimeout(() => {
          popup.style.display = 'none';
        }, 2000);
      } else {
        alert("Proszę uzupełnić reszte pól.");
      }
    });


  mainContainer.addEventListener('scroll', () => {
    if (!animationTriggered) {
      triggerCaptionsAnimation();
      hideGradient();
    }
  });

  document.querySelectorAll('.picture-container img, .picture-container-two img, .picture-container-three img').forEach(image => {
    image.addEventListener('click', () => {
      popupImage.src = image.src;
      imagePopup.style.display = 'block';
    });
  });

  imageCloseBtn.addEventListener('click', () => {
    imagePopup.style.display = 'none';
  });
});

