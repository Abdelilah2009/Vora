
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

  /**
   *  ANIMATION
   */

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


  /**
   * DARK MODE
   */


  let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})


  /**
   * CURSOR
   */


  

/**
 * add event on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * Custom cursor
 */

const cursors = document.querySelectorAll("[data-cursor]");
const hoveredElements = [...document.querySelectorAll("button"), ...document.querySelectorAll("a")];

window.addEventListener("mousemove", function (event) {

  const posX = event.clientX;
  const posY = event.clientY;

  /** cursor dot position */
  cursors[0].style.left = `${posX}px`;
  cursors[0].style.top = `${posY}px`;

  /** cursor outline position */
  setTimeout(function () {
    cursors[1].style.left = `${posX}px`;
    cursors[1].style.top = `${posY}px`;
  }, 80);

});

/** add hovered class when mouseover on hoverElements */
addEventOnElements(hoveredElements, "mouseover", function () {
  for (let i = 0, len = cursors.length; i < len; i++) {
    cursors[i].classList.add("hovered");
  }
});

/** remove hovered class when mouseout on hoverElements */
addEventOnElements(hoveredElements, "mouseout", function () {
  for (let i = 0, len = cursors.length; i < len; i++) {
    cursors[i].classList.remove("hovered");
  }
});

