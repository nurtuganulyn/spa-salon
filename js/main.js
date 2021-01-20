$(".callback-form__tel").mask("+7(999) 999-99-99");

var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    
    loop: true,
    spaceBetween: 80,
  
    // If we need pagination
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var sandwich = function sandwich() {
    var sandwichButton = document.querySelector('.sandwich__open-btn');
    var sandwichClose = document.querySelector('.sandwich__close-btn');
    var menu = document.querySelector('.sandwich__content');
    sandwichButton.addEventListener('click', function () {
      menu.classList.add('sandwich__content--opened');
    });
    sandwichClose.addEventListener('click', function () {
      menu.classList.remove('sandwich__content--opened');
    });
  };

  sandwich();