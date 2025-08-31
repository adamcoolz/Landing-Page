(function ($) {
  "use strict";

  ///////////////////////////////////////////////////////
  // Preloader

  $(window).on('load', () => {
    $('.preloader').fadeOut("slow");
  })

  // Preloader End


  // Menu
  jQuery(document).ready(function () {
    jQuery('header .mainmenu').meanmenu({
      meanScreenWidth: "1199",
    });
  });


  document.querySelectorAll('.menu-anim > li > a').forEach(button => button.innerHTML = '<div class="menu-text"><span>' + button.textContent.split('').join('</span><span>') + '</span></div>');

  setTimeout(() => {
    var menu_text = document.querySelectorAll(".menu-text span");
    menu_text.forEach((item) => {
      var font_sizes = window.getComputedStyle(item, null);
      let font_size = font_sizes.getPropertyValue("font-size");
      let size_in_number = parseInt(font_size.replace("px", ""), 10);
      let new_size = parseInt(size_in_number / 3, 10);
      new_size = new_size + "px";
      if (item.innerHTML === " ") {
        item.style.width = new_size;
      }
    });
  }, 1000);

  // Menu End


  ///////////////////////////////////////////////////////
  // Sticky Menu
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 150) {
      $(".menu-area").addClass("sticky");
    } else {
      $(".menu-area").removeClass("sticky");
    }
  });
  // Sticky Menu End

  $('.popup-youtube').magnificPopup({
    type: 'iframe'
  });


  /* init swipper slider */
  var swiper = new Swiper(".blog_thumb__slider", {
    spaceBetween: 0,
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: ".blog-button-next",
      prevEl: ".blog-button-prev",
    },
    pagination: false
  });

  // Magnific Popup gallery End


  /* Brand */

  var brand_slider = new Swiper('.brand-slide-wrap', {
    spaceBetween: 100,
    centeredSlides: true,
    speed: 5000,
    autoplay: {
      delay: 1,
    },
    loop: true,
    slidesPerView: 'auto',
    allowTouchMove: false,
    disableOnInteraction: true,
    breakpoints: {
      320: {
        spaceBetween: 50,
      },
      992: {
        spaceBetween: 70,
      }
    },
  });

  /* Brand End */




  ///////////////////////////////////////////////////////
  // Bottom to top start
  $(document).ready(function () {
    $(window).on('scroll', (function () {
      if ($(this).scrollTop() > 100) {
        $('#scroll-top').fadeIn();
      } else {
        $('#scroll-top').fadeOut();
      }
    }));
    $('#scroll-top').on('click', function () {
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
    });
  });
  // Bottom to top End



  window.onload = function () {

    // Custom Cursor
    const cursor = document.querySelector('.cursor');

    if (cursor) {
      const editCursor = e => {
        const { clientX: x, clientY: y } = e;
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
      };
      window.addEventListener('mousemove', editCursor);

      document.querySelectorAll("a, .cursor-pointer").forEach(item => {
        item.addEventListener('mouseover', () => {
          cursor.classList.add('cursor-active');
        });

        item.addEventListener('mouseout', () => {
          cursor.classList.remove('cursor-active');
        });
      });
    }
  };
  
}(jQuery)); 