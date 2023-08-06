(function () {
  "use strict";

  const get = (target) => document.querySelector(target);
  const getAll = (target) => document.querySelectorAll(target);

  const $imgItems = getAll(".grid-img-item");
  const $buttons = getAll(".grid-button");

  /*
  display: block/hidden or z-index:99 / 1
  */
  const onEnterButton = (e) => {
    const buttonNum = e.target.dataset.num;
    $imgItems.forEach((item) => {
      const imgNum = item.dataset.num;
      if (buttonNum === imgNum) {
        item.style.display = "block";
      } else item.style.display = "none";
    });
  };

  const onEnterImg = (e) => {
    const imgNum = e.target.dataset.num;
    $buttons.forEach((button) => {
      const buttonNum = button.dataset.num;
      if (imgNum === buttonNum) {
        button.classList.add("hover");
      }
    });
  };

  const onLeaveImg = (e) => {
    const imgNum = e.target.dataset.num;
    $buttons.forEach((button) => {
      const buttonNum = button.dataset.num;
      if (imgNum === buttonNum) {
        button.classList.remove("hover");
      }
    });
  };

  window.addEventListener("DOMContentLoaded", () => {
    $buttons.forEach((button) => {
      button.addEventListener("mouseenter", onEnterButton);
    });
    $imgItems.forEach((img) => {
      img.addEventListener("mouseenter", onEnterImg);
      img.addEventListener("mouseleave", onLeaveImg);
    });
  });
})();
