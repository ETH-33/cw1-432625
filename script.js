let searchForm = document.querySelector('.search-form');
let navbar = document.querySelector('nav');

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
}

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
}

window.onscroll = () => {
  searchForm.classList.remove('active');
  navbar.classList.remove('active');
}

let filterBtn = document.querySelectorAll('.filter-buttons .buttons');
let filterItem = document.querySelectorAll('.products .box-container .box');

// Add your additional JavaScript logic here
var homeSwiper = new Swiper(".home-slider", {
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  var featuredSwiper = new Swiper(".featured-slider", {
    centeredSlides: true,
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
  
  var reviewSwiper = new Swiper(".review-slide", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
    },
  });
  
  var blogsSwiper = new Swiper(".blogs-slider", {
    centeredSlides: true,
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });
  