("use strict");
//Слайдер
// Получаем все элементы слайдера
const sliderContainers = document.querySelectorAll(".slider-container");

// Перебираем все контейнеры слайдера
sliderContainers.forEach((sliderContainer) => {
  // Получаем элементы слайдера для текущего контейнера
  const slider = sliderContainer.querySelector(".slider");
  const prevButton = sliderContainer.querySelector(".prev-button");
  const nextButton = sliderContainer.querySelector(".next-button");
  const slides = Array.from(slider.children);
  const slideCount = slides.length;
  let slideIndex = 0;

  // Устанавливаем обработчики событий для кнопок текущего слайдера
  prevButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);

  // Функции для показа предыдущего и следующего слайда для текущего слайдера
  function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
  }

  function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
  }

  // Функция для обновления отображения слайдера для текущего слайдера
  function updateSlider() {
    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });
  }

  // Инициализация слайдера для текущего слайдера
  updateSlider();
});

//Блок Программа курса, всплывающий текст через +
function windowPlus() {
  const headings = document.querySelectorAll("h3");

  Array.prototype.forEach.call(headings, (h) => {
    let btn = h.querySelector("button");
    let target = h.nextElementSibling;

    btn.onclick = () => {
      let expanded = btn.getAttribute("aria-expanded") === "true";

      if (expanded) {
        btn.textContent = "+"; // Изменяем текст кнопки на "+" при разворачивании
        btn.style.fontSize = "4vw";
      } else {
        btn.textContent = "✖"; // Возвращаем текст кнопки на "✖" при сворачивании
        btn.style.fontSize = "2vw";
      }

      btn.setAttribute("aria-expanded", !expanded);
      target.hidden = expanded;
    };
  });
}
windowPlus();
