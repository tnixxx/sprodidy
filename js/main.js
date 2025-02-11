function slowScroll(id) {
  var offset = 0;
  $("html, body").animate(
    {
      scrollTop: $(id).offset().top - offset,
    },
    1000
  );
  return false;
}

$(document).ready(function () {
  $(".slider__partners").slick({
    arrows: false,
    // draggable: false,
    infinite: true,
    centerMode: true,
    // easing: "ease",
    slidesToShow: 5,
    slidesToScroll: 0,
    speed: 10000,
    // autoplay: true,
    // autoplaySpeed: 0,
    cssEase: "linear",
    // swipe: true,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 4,
        },
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          speed: 100000,
        },
        breakpoint: 800,
        settings: {
          speed: 100000,
          slidesToShow: 1,
        },
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

let mode = "artists";

const artistsBtn = document.getElementById("artists");
const companiesBtn = document.getElementById("companies");

const artistsList = document.querySelector(".artists__list");
const companiesList = document.querySelector(".companies__list");
artistsBtn.onclick = function () {
  artistsList.style.display = "flex";
  companiesList.style.display = "none";
};

companiesBtn.onclick = function () {
  artistsList.style.display = "none";
  companiesList.style.display = "flex";
};

$(document).ready(function () {
  var w_height = $(this).height();
  var slide_width = $(".performance-title").width();
  var slide_left = slide_width / w_height;
  var slide_right = slide_width / w_height;
  $(window).scroll(function (e) {
    var f_left = slide_left * $(this).scrollTop() * -1;
    $(".performance-title").css({ left: f_left });
  });
  $(window).scroll(function (e) {
    var f_right = slide_right * $(this).scrollTop() * -1;
    $(".performance-title-r").css({ right: f_right });
  });
});
