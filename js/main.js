'use strict';

// Timer active Sale
function timer() {
  var hour = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '00:00:00';
  if (typeof hour === 'number' && hour > 0) {
    var updateTimer = function updateTimer() {
      var hours = Math.floor(milliseconds / (1000 * 60 * 60));
      var minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
      var addZero = function addZero(n) {
        return String(n).padStart(2, '0');
      };
      value = ''.concat(addZero(hours), ':').concat(addZero(minutes), ':').concat(addZero(seconds));
      if (timerEl && time) time.textContent = value;
      milliseconds -= 1000;
      if (milliseconds === 0) clearInterval(_timer);
    };
    var value = hour;
    var milliseconds = hour * 60 * 60 * 1000;
    var timerEl = document.getElementById('timer');
    var time = timerEl.querySelector('.hero__timer--time');
    var _timer = setInterval(updateTimer, 1000);
  }
  return;
}
timer(5);

// Change price Sale
function sale(oldPrice, newPrice) {
  var saleEl = document.getElementById('sale');
  if (saleEl) {
    var oldEl = saleEl.querySelector('.hero__sale--old');
    var newEl = saleEl.querySelector('.hero__sale--new');
    if (oldEl && newEl) {
      if (oldPrice && newPrice) {
        oldEl.textContent = oldPrice;
        newEl.textContent = newPrice;
      } else {
        oldEl.textContent = '';
        newEl.textContent = '';
      }
    }
  }
  return [oldPrice, newPrice];
}
sale('R 250.00', 'R 160.00');

// Swiper Slider
var swiperProducts = new Swiper('.products__slider', {
  speed: 800,
  loop: true,
  spaceBetween: '1.5%',
  autoplay: true,
  on: {
    slideChange: function slideChange(swiper) {
      $('[data-tab]').each(function (index) {
        $(this).removeClass('active');
        if (index === swiper.realIndex) $(this).addClass('active');
      });
    },
  },
});

// Toggle Tabs Slider
$('[data-tab]').each(function (index) {
  $(this).on('click', function () {
    $('[data-tab]').each(function () {
      $(this).removeClass('active');
    });
    $(this).addClass('active');
    swiperProducts.slideTo(index);
  });
});

// Custom Select (JQuery-UI)
$(function () {
  $('#color').selectmenu();
  $('#size').selectmenu();
});

//# sourceMappingURL=main.js.map
