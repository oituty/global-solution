// Slide com navegação de pontos
let slideIndex = 1;

changeSlideIndex(slideIndex);

function currentSlide(slideIndex) {
  changeSlideIndex(slideIndex = slideIndex);
}

function changeSlideIndex(newSlideIndex) {
  let currentSlideIndex;
  let currentDotIndex;

  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  if (newSlideIndex > slides.length) {
    slideIndex = 1
  }
  if (newSlideIndex < 1) {
    slideIndex = slides.length
  }
  for (currentSlideIndex = 0; currentSlideIndex < slides.length; currentSlideIndex++) {
    slides[currentSlideIndex].className = slides[currentSlideIndex].className.replace(" active", "");
      slides[newSlideIndex - 1].className = slides[newSlideIndex - 1].className.replace(" hide", "");

  }
  for (currentDotIndex = 0; currentDotIndex < dots.length; currentDotIndex++) {
    dots[currentDotIndex].className = dots[currentDotIndex].className.replace(" active", "");
  }
  
  dots[newSlideIndex - 1].className += " active";
  slides[newSlideIndex - 1].className += " active";
}