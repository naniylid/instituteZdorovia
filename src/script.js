import "./css/style.css";
import "./css/mobile.css";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "./babel.js";

("use strict");
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

//Увеличение фото при нажатии
document.querySelectorAll("#zoom img").forEach((img) => {
  img.onclick = () => {
    document.querySelector(".popup").style.display = "block";
    document.querySelector(".popup img").src = img.getAttribute("src");
  };
});
document.querySelector(".popup span").onclick = () => {
  document.querySelector(".popup").style.display = "none";
};

//Скрыть/показать текст в нижнем блоке
document.querySelector(".read-more").onclick = () => {
  document.querySelector(".open-text").style.display = "block";
};

document.querySelector(".hide-text").onclick = () => {
  const readMoreElement = document.querySelector(".read-more");
  readMoreElement.scrollIntoView({
    behavior: "auto",
    block: "start",
  });

  // Скрытие текста
  document.querySelector(".open-text").style.display = "none";
};
