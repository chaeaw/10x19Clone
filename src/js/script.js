(function () {
  "use strict";

  const get = (target) => document.querySelector(target);
  const getAll = (target) => document.querySelectorAll(target);

  const $imgItems = getAll(".grid-img-item");
  const $buttons = getAll(".grid-button");

  // button mouseover & img view
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

  // grid-banner text flow
  const $bannerTextBox = get(".grid__banner-box");
  const $bannerText = get(".grid__banner-text");

  const counterFn = () => {
    const textWidth = $bannerText.offsetWidth;
    let cnt = 0;

    const $newText = document.createElement("div");
    $newText.classList.add("grid__banner-text");
    $newText.innerText =
      "Thirty-four artists visually interpret and countdown their favorite albums of 2019.";

    setInterval(() => {
      cnt++;
      $bannerTextBox.style.transform = `translateX(-${cnt}px)`;

      if (cnt > textWidth + 50) {
        cnt = 20;
        $bannerTextBox.removeChild($bannerTextBox.firstElementChild);
        $bannerTextBox.appendChild($newText);
      }
    }, 20);
  };

  window.addEventListener("DOMContentLoaded", () => {
    $buttons.forEach((button) => {
      button.addEventListener("mouseenter", onEnterButton);
    });

    $imgItems.forEach((img) => {
      img.addEventListener("mouseenter", onEnterImg);
      img.addEventListener("mouseleave", onLeaveImg);
    });

    counterFn();
  });
})();
