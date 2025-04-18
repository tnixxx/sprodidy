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
    // autoplay: true,
    arrows: false,
    infinite: true,
    draggable: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

// let mode = "artists";

// const artistsBtn = document.getElementById("artists");
// const companiesBtn = document.getElementById("companies");

// const artistsList = document.querySelector(".artists__list");
// const companiesList = document.querySelector(".companies__list");
// artistsBtn.onclick = function () {
//   artistsList.style.display = "flex";
//   companiesList.style.display = "none";
// };

// companiesBtn.onclick = function () {
//   artistsList.style.display = "none";
//   companiesList.style.display = "flex";
// };

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
