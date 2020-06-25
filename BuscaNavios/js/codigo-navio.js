let slideIndex = 1; 

function goToNextSlide() {
  let slidesWrapper = document.getElementsByClassName("slide");
  slideIndex += 1;

  if (slideIndex > slidesWrapper.length) {
    slideIndex = 1
  }

  showSlides(slidesWrapper);
}

function goToPreviousSlide() {
  let slidesWrapper = document.getElementsByClassName("slide");
  slideIndex -= 1;

  if (slideIndex < 1) {
    slideIndex = slidesWrapper.length;
  }

  showSlides(slidesWrapper);
}

function showSlides(slidesWrapper) {  
  for (let i = 0; i < slidesWrapper.length; i++) {
    slidesWrapper[i].setAttribute('class', 'slide hidden');
  }

  slidesWrapper[slideIndex-1].setAttribute('class', 'slide active');
}