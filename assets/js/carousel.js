/* -- Carousel Navigation -- */

// let activeIndex = 0;

// const slides = 9;
const slides = document.querySelectorAll("article");
// const slides1 = document.querySelectorAll("#north-west article");
// const slides2 = document.querySelectorAll("#downtown article");


const handleLeftClick = (activeIndex) => {
  let nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;
  activeIndex === 0 ? nextIndex = 2 : null
  activeIndex === 3 ? nextIndex = 5 : null
  activeIndex === 6 ? nextIndex = 8 : null
  
  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
        nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
        
  currentSlide.dataset.status = "after";
  
  nextSlide.dataset.status = "becoming-active-from-before";
  
  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
}

const handleRightClick = (activeIndex) => {
  let nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;
  activeIndex === 2 ? nextIndex = 0 : null
  activeIndex === 5 ? nextIndex = 3 : nextIndex
  activeIndex === 8 ? nextIndex = 6 : null
  
  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
        nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
  currentSlide.dataset.status = "before";
  
  nextSlide.dataset.status = "becoming-active-from-after";
  
  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextSlide.dataset.index;
  });
}

/* -- Mobile Nav Toggle -- */

const nav = document.querySelector("nav");

const handleNavToggle = () => {  
  nav.dataset.transitionable = "true";
  
  nav.dataset.toggled = nav.dataset.toggled === "true" ? "false" : "true";
}

window.matchMedia("(max-width: 800px)").onchange = e => {
  nav.dataset.transitionable = "false";

  nav.dataset.toggled = "false";
};