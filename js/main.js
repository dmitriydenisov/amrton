const swiper = new Swiper(".swiper", {
  slidesPerView: 1.1,
  spaceBetween: 5,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  breakpoints: {
    566: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    880: {
      slidesPerView: 3,
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});
