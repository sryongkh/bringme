// AOS
AOS.init({
  // disable: function () {
  //   let width = 768;
  //   return window.innerWidth > width;
  // },
});

// Burger menus
document.addEventListener("DOMContentLoaded", function () {
  // open
  const burger = document.querySelectorAll(".navbar-burger");
  const menu = document.querySelectorAll(".navbar-menu");

  if (burger.length && menu.length) {
    for (var i = 0; i < burger.length; i++) {
      burger[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  // close
  const close = document.querySelectorAll(".navbar-close");
  const backdrop = document.querySelectorAll(".navbar-backdrop");

  if (close.length) {
    for (var i = 0; i < close.length; i++) {
      close[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  if (backdrop.length) {
    for (var i = 0; i < backdrop.length; i++) {
      backdrop[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }
});
//Slick
$(document).ready(function () {
  $(".my-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    speed: 300,
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

//Circular loop
const container_1 = document.querySelector(".container-1");
const container_2 = document.querySelector(".container-2");
const container_3 = document.querySelector(".container-3");
const circle_1 = document.querySelector(".circle-1");
const circle_2 = document.querySelector(".circle-2");
const circle_3 = document.querySelector(".circle-3");

let rotation_1 = new TimelineMax({
  repeat: -1,
})
  // .addPause(2)
  .to(circle_1, 1, { scale: 0.5 }, 0)
  .to(container_1, 3, { rotation: 60, transformOrigin: "center center" }, 1)
  .to(circle_1, 3, { rotation: -60, transformOrigin: "center center" }, 1)
  .to(circle_1, 1, { scale: 1 }, 2)
  // .addPause(2)
  .to(circle_1, 1, { scale: 0.5 }, 10)
  .to(container_1, 3, { rotation: 200, transformOrigin: "center center" }, 11)
  .to(
    circle_1,
    3,
    { rotation: -200, transformOrigin: "center center", scale: 1 },
    11
  )
  .to(circle_1, 1, { scale: 1 }, 12)
  // .addPause(2)
  .to(circle_1, 1, { scale: 0.5 }, 20)
  .to(container_1, 3, { rotation: 360, transformOrigin: "center center" }, 21)
  .to(
    circle_1,
    3,
    { rotation: -360, transformOrigin: "center center", scale: 1 },
    21
  )
  .to(circle_1, 1, { scale: 1 }, 22);

let rotation_2 = new TimelineMax({
  repeat: -1,
})
  // .addPause(2)
  .to(circle_2, 1, { scale: 0.5 }, 0)
  .to(container_2, 3, { rotation: 125, transformOrigin: "center center" }, 1)
  .to(circle_2, 3, { rotation: -125, transformOrigin: "center center" }, 1)
  .to(circle_2, 1, { scale: 1 }, 2)
  // .addPause(2)
  .to(circle_2, 1, { scale: 0.5 }, 10)
  .to(container_2, 3, { rotation: 295, transformOrigin: "center center" }, 11)
  .to(circle_2, 3, { rotation: -295, transformOrigin: "center center" }, 11)
  .to(circle_2, 1, { scale: 1 }, 12)
  // .addPause(2)
  .to(circle_2, 1, { scale: 0.5 }, 20)
  .to(container_2, 3, { rotation: 360, transformOrigin: "center center" }, 21)
  .to(circle_2, 3, { rotation: -360, transformOrigin: "center center" }, 21)
  .to(circle_2, 1, { scale: 1 }, 22);

let rotation_3 = new TimelineMax({
  repeat: -1,
})
  // .addPause(2)
  .to(circle_3, 1, { scale: 0.5 }, 0)
  .to(container_3, 3, { rotation: 175, transformOrigin: "center center" }, 1)
  .to(circle_3, 3, { rotation: -175, transformOrigin: "center center" }, 1)
  .to(circle_3, 1, { scale: 1 }, 2)
  // .addPause(2)
  .to(circle_3, 1, { scale: 0.5 }, 10)
  .to(container_3, 3, { rotation: 230, transformOrigin: "center center" }, 11)
  .to(circle_3, 3, { rotation: -230, transformOrigin: "center center" }, 11)
  .to(circle_3, 1, { scale: 1 }, 12)
  // .addPause(2)
  .to(circle_3, 1, { scale: 0.5 }, 20)
  .to(container_3, 3, { rotation: 360, transformOrigin: "center center" }, 21)
  .to(circle_3, 3, { rotation: -360, transformOrigin: "center center" }, 21)
  .to(circle_3, 1, { scale: 1 }, 22);
