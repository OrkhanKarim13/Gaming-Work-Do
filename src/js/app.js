
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: false,
    centeredSlides: true,
    slidesPerView: "auto",
    autoplay: {
      delay: 1000,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 50,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });