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
    rows: 1,
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var teacherSwiper = new Swiper(".teacher-swiper", {
  slidesPerView: "2",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var courseRecommendSwiper = new Swiper(".course-recommend-swiper", {
  slidesPerView: "1.5",
  spaceBetween: 30,
  breakpoints: { 
   //當寬度小於等於480
    768: { 
      slidesPerView: 3,
      spaceBetween: 30
    },
    //當寬度小於等於640
    992: {
      slidesPerView: 4,
      spaceBetween: 30
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
