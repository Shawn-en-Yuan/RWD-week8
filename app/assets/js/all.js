$(function() {
  console.log('Hello Bootstrap5');
});
var courseSwiper = new Swiper(".course-swiper ", {
  slidesPerView: "1.5",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var customerSwiper = new Swiper(".customer-swiper", {
  slidesPerView: 2,
  grid: {
    rows: 2,
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

