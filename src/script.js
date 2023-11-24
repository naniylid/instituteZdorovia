import "./css/style.css";
import "./css/mobile.css";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "@babel/polyfill";
import "./babel.js";

("use strict");
//Lazy loading
const lazyImages = document.querySelectorAll("img[data-src]");
const windowHeight = document.documentElement.clientHeight;

let lazyImagesPositions = [];
if (lazyImages.length > 0) {
  lazyImages.forEach((img) => {
    if (img.dataset.src) {
      lazyImagesPositions.push(
        img.getBoundingClientRect().top + pageYOffset + img.clientHeight
      );
    }
  });

  lazyScrollCheck(); // Вызываем после добавления позиций
}

window.addEventListener("scroll", lazyScroll);

function lazyScroll() {
  if (document.querySelectorAll("img[data-src]").length > 0) {
    lazyScrollCheck();
  }
}

function lazyScrollCheck() {
  lazyImagesPositions.forEach((item, index) => {
    if (pageYOffset + windowHeight > item) {
      if (lazyImages[index].dataset.src) {
        lazyImages[index].src = lazyImages[index].dataset.src;
        lazyImages[index].removeAttribute("data-src");
      }
      // Используем splice для удаления элемента из массива
      lazyImagesPositions.splice(index, 1);
    }
  });
}

//Встроенный слайдер Swiper
var swiper = new Swiper(".mySwiper", {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoHeight: true,
  zoom: {
    maxRatio: 5,
  },
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
