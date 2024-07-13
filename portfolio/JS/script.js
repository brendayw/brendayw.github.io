document.addEventListener('DOMContentLoaded', function() {

  var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  
});
/*
document.addEventListener('DOMContentLoaded', function() {
  var kiduSwiper = new Swiper('.kidu-carousel', {
      // Configuración para el carrusel de Kidu Dental S.A.
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      autoplay: {
          delay: 3000,
          disableOnInteraction: false,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
  });

  var olympiaSwiper = new Swiper('.olympia-carousel', {
      // Configuración para el carrusel de Olympia
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      autoplay: {
          delay: 3000,
          disableOnInteraction: false,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
  });
});*/
