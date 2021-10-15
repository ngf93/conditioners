/* загрузка файла  - отображение названия загружаемого файла в поле ввода */
$(document).ready( function() {
    $(".file-upload input[type=file]").change(function(){
         var filename = $(this).val().replace(/.*\\/, "");
         $(this).parents(".file-upload").prev(".filename").val(filename);
    });
});

$(document).ready(function () {
    var mySwiper = new Swiper ('.swiper_products', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 15,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        575: {
          slidesPerView: 1
        },
        767: {
          slidesPerView: 2
        },
        991: {
          slidesPerView: 2
        },
      }
    });

    var mySwiper_2 = new Swiper ('.swiper_products_4', {
      loop: true,
      slidesPerView: 4,
      spaceBetween: 15,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        575: {
          slidesPerView: 1
        },
        767: {
          slidesPerView: 2
        },
        991: {
          slidesPerView: 3
        },
      }
    });

    var mySwiper_3 = new Swiper ('.swiper_news', {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        767: {
          slidesPerView: 1
        },
      }
    });

    var mySwiper_4 = new Swiper ('.swiper_reviews', {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        767: {
          slidesPerView: 1
        },
      }
    });
});

/* всплывающие подсказки */
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

/* плавный скролл к якорю */
$(document).ready(function() {
  $("a.scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
});

/* Текущий год */
$(document).ready( function() {
  var now = new Date();
  var cur_year = now.getFullYear();
  $("#year").html(cur_year);
});

$(function () {
   $('.show_hidden').on('click', function() {
    if ($(this).html()=="Загрузить далее") {
      $(".hidden_objects").show(200);
      $(this).html("Скрыть");
    } else {
      $(".hidden_objects").hide(100);
      $(this).html("Загрузить далее");
    }
  });
});

$(function () {
   $('.show_full_height').on('click', function() {
    $(".reviews_box_wrap").addClass("full_height");
  });
});