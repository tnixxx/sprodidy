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
    infinite: true,
    centerMode: true,
    easing: "ease",
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    speed: 10000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    swipe: true,
    draggable: true,
  });
});

$(document).ready(function () {
  $(".slider__streaming").slick({
    autoplay: true,

    rtl: true,
    arrows: false,
    infinite: true,
    easing: "ease",
    slidesToShow: 16,
    slidesToScroll: 1,
    centerMode: true,
    cssEase: "linear",
    swipe: true,
    draggable: true,
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   document.addEventListener("hide.bs.modal", function (event) {
//     if (document.activeElement) {
//       document.activeElement.blur();
//     }
//   });
// });

// let mode = "artists";
// const artistsBtn = document.getElementById("artists");
// const companiesBtn = document.getElementById("companies");

// function () {

// }

// function format(formatMode) {
//   switch (formatMode) {
//     case "artists":
//       return console.log("test1");
//     case "companies":
//       return console.log("test2");
//     default:
//       return console.log("ничего test1");
//   }
// }

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
