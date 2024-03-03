const hambugerElement = document.querySelector(".hambuger");
const linkItems = document.querySelector(".link__items");
const closeBtn = document.querySelector(".close");
const allLinks = document.querySelectorAll(".nav__links");

const video = document.querySelector(".video-01");
const playBtn = document.querySelector(".play__btn");
const videoContent = document.querySelector(".video__play__btn");
// playBtn.style.background = "url(images/play-circle.svg) no-repeat";

const openNav = () => {
  linkItems.style.top = "0";
};

const closeNav = () => {
  linkItems.style.top = "-100%";
};

allLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeNav();
  });
});
hambugerElement.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);

function playPause() {
  if (video.paused) {
    video.play();
    playBtn.style.background =
      "url(images/pause-circle.svg) no-repeat center #f7c35f";
    videoContent.style.display = "none";
  } else {
    video.pause();
    playBtn.style.background =
      "url(images/play-circle.svg) no-repeat center #f7c35f";
    videoContent.style.display = "none";
  }
}

/* ========= SWIPER JS =========== */

// let swiper = new Swiper(".swiper", {
//   // Optional parameters
//   // direction: "vertical",
//   loop: true,
//   grabCursor: true,
//   scrollbars: true,

//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// });

let swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: "vertical",
  loop: true,
  // effect: 'fade',
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
