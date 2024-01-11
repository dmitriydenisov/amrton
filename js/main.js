const swiper = new Swiper(".swiper", {
  //   autoplay: true,
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
      //   autoplay: false,
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
