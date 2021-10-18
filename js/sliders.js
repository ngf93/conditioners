const swiper1 = new Swiper('.swiper_products', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 5,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
    }
  });
  
  const swiper2 = new Swiper('.swiper_news', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
    }
  });