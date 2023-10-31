'use strict';
//Встроенный слайдер Swiper
var swiper = new Swiper('.mySwiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoHeight: true,
  zoom: {
    maxRatio: 5,
  },
});

//Блок Программа курса, всплывающий текст через +
function windowPlus() {
  const headings = document.querySelectorAll('h3');

  Array.prototype.forEach.call(headings, h => {
    let btn = h.querySelector('button');
    let target = h.nextElementSibling;

    btn.onclick = () => {
      let expanded = btn.getAttribute('aria-expanded') === 'true';

      if (expanded) {
        btn.textContent = '+'; // Изменяем текст кнопки на "+" при разворачивании
        btn.style.fontSize = '4vw';
      } else {
        btn.textContent = '✖'; // Возвращаем текст кнопки на "✖" при сворачивании
        btn.style.fontSize = '3vw';
      }

      btn.setAttribute('aria-expanded', !expanded);
      target.hidden = expanded;
    };
  });
}

windowPlus();
