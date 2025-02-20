
import './_vendor';
// import './_functions';
// import './_components';



const menuButton = document.querySelector('.header-menu');
const menu = document.querySelector('.nav');
const closeMenuButton = document.querySelector('.nav-close');
const featuresController = document.querySelector('.features-controller');
const featuresDisplayContainer = document.querySelector('.features-displays');
const optionsSliderImages = document.querySelectorAll('.options-image');



const handleTabs = (
  controllerContainer,
  displayContainer,
  buttonActiveClassList = "features-controller__button--selected",
  displayActiveClassList = "fade-in"
) => {
  const controllers = Array.from(controllerContainer.children);
  const displays = Array.from(displayContainer.children);

  controllers.forEach((button, i) => {
    button.addEventListener("click", () => {
      controllers.forEach(button => button.classList.remove(buttonActiveClassList));
      button.classList.add(buttonActiveClassList);

      displays.forEach(display => display.classList.remove(displayActiveClassList));
      displays[i].classList.add(displayActiveClassList);
    });
  });
};


window.addEventListener("load", () => {
  featuresController && handleTabs(featuresController, featuresDisplayContainer)
})

const menuHandler = () => {
  menuButton.classList.toggle('header-menu--active');
  if (menuButton.classList.contains('header-menu--active')) {
    menu.classList.add('nav--active')
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden'
  } else {
    menu.classList.remove('nav--active')
    document.documentElement.style.overflow = '';
    document.body.style.overflow = ''
  }
}

if (menuButton) {
  menuButton.addEventListener('click', menuHandler);

  closeMenuButton.addEventListener('click', () => {
    menuButton.classList.remove('header-menu--active');
    menu.classList.remove('nav--active')
    document.documentElement.style.overflow = '';
    document.body.style.overflow = ''
  })
}


if (Swiper) {
  const swiper = new Swiper(".slider", {
    spaceBetween: 16,
    slidesPerView: 3,
    breakpoints: {
      768: {
        slidesPerView: 4,
      }
    },
    direction: "vertical",
    navigation: {
      nextEl: ".options-vertical__button--next",
      prevEl: ".options-vertical__button--prev",
    }
  })

  swiper.on("slideChange", () => {
    const {activeIndex} = swiper;
    optionsSliderImages.forEach(image => image.classList.remove("fade-in"))
    optionsSliderImages[activeIndex].classList.add("fade-in");
  })
  swiper.on("click", (e) => {
    const clickedSlideIndex = e.clickedIndex;

    optionsSliderImages.forEach(image => image.classList.remove("fade-in"))
    optionsSliderImages[clickedSlideIndex].classList.add("fade-in");
  })
}

