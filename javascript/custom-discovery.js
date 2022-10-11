$(document).ready(function () {
  $("ul.navbar-nav > li > a").click(
    function (e) {
      $("ul.navbar-nav > li").removeClass(
        "active");
      $("ul.navbar-nav > li > a").css(
        "color", "");

      $(this).addClass("active##");
      $(this).css("color", "#FF6000");
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
breakpoints: {
      300: {
          slidesPerView:3,
          spaceBetween: 100,
      },
      1400: {
          slidesPerView: 3,
          spaceBetween: 30,
      }
  }
});

//DROP DOWN
$(document).ready(function () {
  //Show and remove Dropdown
  $(document).on('click', '.theSORT__item', function () {
    $('.theSORT__item').not(this).removeClass('show');
    $(this).toggleClass('show');
  });
  $(document).on('click', function (e) {
    if (!$(e.target).closest('.theSORT__item').length)
      $('.theSORT__item').removeClass('show');
  });

  // REPLACE VALUE FOR FIELD
  let options = $('.theSORT__item .dropdown-content span');
  options.click(function (e) {
    let selectedOption = e.target;
    let selected = $(this).parent().siblings('h4');
    selected.html(selectedOption.outerHTML);
    selected.addClass('active');
  });
});