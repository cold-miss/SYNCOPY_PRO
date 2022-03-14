// swiper js

const swiper1 = new Swiper('.slider1', {
    // Optional parameters
    autoplay: {
        delay:5000,
    },
    speed: 2000, // 전환효과시간
    direction: 'horizontal',
    effect: 'fade',
    loop: true,
  
    // If we need pagination
    // 하단 버튼 UI
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

  });