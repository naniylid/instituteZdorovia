import "./css/style.css";
import "./css/mobile.css";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "@babel/polyfill";
import "./babel.js";

("use strict");
//Lazy loading
const hs = window.innerHeight;

function LazyShowImages() {
  const sp = window.scrollY + hs;
  const elements = document.getElementsByClassName("lazy");

  Array.from(elements).forEach((e) => {
    const elementTop = e.offsetTop;
    const elementBottom = elementTop + e.clientHeight;

    if (sp > elementTop && sp < elementBottom) {
      e.setAttribute("src", e.getAttribute("data-src"));
      e.classList.remove("lazy");
    }
  });
}

window.addEventListener("scroll", LazyShowImages);

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
