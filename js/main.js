const myChannelSlider = new Swiper('.channel-slider', {
  // Optional parameters
 
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
      slidesPerView: 6
    },

    1600: {
      slidesPerView: 5
    },

     1300: {
      slidesPerView: 6
    },

    1100: {
      slidesPerView: 5
    },

     800: {
      slidesPerView: 6
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },

 
});

const recommendedSlider = new Swiper('.recommended-slider', {
  
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1600: {
      slidesPerView: 3
    },

    1100: {
      slidesPerView: 2
    }
  },

   // Navigation arrows
  navigation: {
    nextEl: '.recommended-button-next',
    prevEl: '.recommended-button-prev',
  },

})

const recommendedChannelSlider = new Swiper('.recommended-slider', {
  
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
      slidesPerView: 6
    },

    1600: {
      slidesPerView: 5
    },

    1300: {
      slidesPerView: 6
    },

    1100: {
      slidesPerView: 5
    },

    800: {
      slidesPerView: 6
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.recommendedChannel-button-next',
    prevEl: '.recommendedChannel-button-prev',
  },

});

const searchBtn = document.querySelector('.mobile-search');
const mobileSearch = document.querySelector('.input-group');
searchBtn.addEventListener('click', () => {
  mobileSearch.classList.toggle('is-open')

});

if (document.documentElement.scrollWidth <= 640) {
  myChannelSlider.destroy();
  recommendedSlider.destroy();
  recommendedChannelSlider.destroy();

}
