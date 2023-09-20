const slides = document.querySelectorAll('.slide');

const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const moveToSlide = function (slide) {
  slides.forEach(
    (s, index) => (s.style.transform = `translateX(${(index - slide) * 100}%)`)
    //1 - -100%, 2 - 0%, 3 - 100%, 4 - 200%
  );
};

moveToSlide(0);
const nextSlide = function () {
  if (currentSlide === slidesNumber - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  moveToSlide(currentSlide);
  activateCurrentDot(currentSlide);
};

const previousSlide = function () {
  if (currentSlide === 0) {
    currentSlide = slidesNumber - 1;
  } else {
    currentSlide--;
  }
  moveToSlide(currentSlide);
  activateCurrentDot(currentSlide);
};

btnRight.addEventListener('click', nextSlide);

btnLeft.addEventListener('click', previousSlide);

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') previousSlide();
});
