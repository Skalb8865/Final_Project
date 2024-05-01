// Mobile Navbar JS Start
var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn')
var closeBtn = document.querySelector('.close-btn')

menuBtn.addEventListener("click", () => {
  menu.classList.add('active');
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove('active');
});

// Mobile Navbar JS End

// Swiper Cards JS Start
let swiperCards = new Swiper('.card_content', {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

// Changes the amount of cards on the page depending on the size of the webpage
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    }
  },
});

// Swiper Cards JS End