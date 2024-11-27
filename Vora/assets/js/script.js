

/**
 * SLIDER
 */

const sliders = document.querySelectorAll("[data-slider]");

const initSlider = function(currentSlider) {

  const sldierContainer = currentSlider.querySelector("[data-slider-container]");
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

  let currentSlidePos = 0;

  const moveSliderItem = function () {
    sldierContainer.style.transform = `translateX(-${sldierContainer.children[currentSlidePos].offsetLeft}px)`;
  }

  /**
   * NEXT SLIDE
   */

  const slideNext = function () {
    const slideEnd = currentSlidePos >= sldierContainer.childElementCount - 1;

    if (slideEnd) {
      currentSlidePos = 0;
    } else {
      currentSlidePos++;
    }

    moveSliderItem();
  }

  sliderNextBtn.addEventListener("click", slideNext);

  /**
   * PREVIOUS SLIDE
   */

   const slidePrev = function () {

    if (currentSlidePos <= 0) {
      currentSlidePos = sldierContainer.childElementCount - 1;
    } else {
      currentSlidePos--;
    }

    moveSliderItem();
  }

  sliderPrevBtn.addEventListener("click", slidePrev);

  const dontHaveExtraItem = sldierContainer.childElementCount <= 1;
  if (dontHaveExtraItem) {
    sliderNextBtn.style.display = "none";
    sliderPrevBtn.style.display = "none";
  }

}

for (let i = 0, len = sliders.length; i < len; i++) { initSlider(sliders[i]); }

const swiper = new Swiper(".swiper", {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centerSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      depth: 250,
      modifier: 1,
      scale: 0.75,
      slideShadows: false,
      stretch: -100,
    },
  
    pagination: {
      el: ".swiper-pagination",
    },
  });


const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};


ScrollReveal().reveal(".hh", {
  ...scrollRevealOption,
  origin: "right",
  delay: 500  ,
});

ScrollReveal().reveal(".hero .hero-content-text h1", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".about__container .about__content h2", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".section__title", {
  ...scrollRevealOption,
  origin: "bottom",
});

ScrollReveal().reveal(".navbar", {
  ...scrollRevealOption,
  origin: "top",
});

ScrollReveal().reveal(".about__container .about__image", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".hh2", {
  ...scrollRevealOption,
  origin: "left",
  delay: 800 ,
});

ScrollReveal().reveal(".hh3", {
  ...scrollRevealOption,
  origin: "left",
  delay: 1100 ,
});

ScrollReveal().reveal(".contactForm form", {
  ...scrollRevealOption,
  origin: "left",
  delay: 1300 ,
});

ScrollReveal().reveal(".contactForm .img-container-contact", {
  ...scrollRevealOption,
  origin: "right",
  delay: 1300 ,
});

ScrollReveal().reveal(".contact .contactMethod", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 1400 ,
});

ScrollReveal().reveal("footer", {
  ...scrollRevealOption,
  origin: "bottom",
});
