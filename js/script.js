import Swiper, { Navigation, Pagination } from 'swiper';

if (document.documentElement.clientWidth < 768){
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    direction:"horizontal",
    simulateTouch: true,
    touchRatio: 1,
    touchAngel: 45,
    grabCursor: true,
    slidesPerView: 1.1,

    modules: [Navigation, Pagination],
  });}

  
