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

  // click menu button
  // menu button 클릭하면 bg가 덮어지고 밑에서 텍스트가 올라옴
  // bg 크기 늘리기 & 텍스트 translateY or margin-bottom 이용
  const $thanks = get(".thanks");
  const $menu = get(".main__grid-menu");
  const $menuButton = get(".main__grid-menu a");
  const $thanksBg = get(".thanks__bg");
  const $thanksClose = get(".thanks__close");
  const $thanksLogo = get(".thanks__logo");
  const $thanksCon = get(".thanks__con");

  const bodyWidth = document.body.offsetWidth;
  const bodyHeight = document.body.offsetHeight;
  const buttonWidth = $menuButton.offsetWidth;
  const buttonHeight = $menuButton.offsetHeight;
  let menuWidth = $menu.offsetWidth;
  let menuHeight = $menu.offsetHeight;

  $thanksClose.style.width = menuWidth + "px";
  $thanksClose.style.height = menuHeight + "px";
  $thanksLogo.style.width = menuWidth + "px";
  $thanksLogo.style.height = menuHeight + "px";

  const coverBg = () => {
    let bgWidth = (buttonWidth / bodyWidth) * 100;
    let bgHeight = (buttonHeight / bodyHeight) * 100;
    const fillBg = setInterval(() => {
      bgWidth++;
      bgHeight++;
      $thanksBg.style.width = `${bgWidth}%`;
      $thanksBg.style.height = `${bgHeight}%`;
      if (bgWidth > 100 && bgHeight > 100) {
        clearInterval(fillBg);
      }
    }, 1);
  };

  const uncoverBg = () => {
    let bgWidth = 100;
    let bgHeight = 100;
    const disappearBg = setInterval(() => {
      bgWidth--;
      bgHeight--;
      $thanksBg.style.width = `${bgWidth}%`;
      $thanksBg.style.height = `${bgHeight}%`;
      if (
        bgWidth < (buttonWidth / bodyWidth) * 100 ||
        bgHeight < (buttonHeight / bodyHeight) * 100
      ) {
        clearInterval(disappearBg);
      }
    }, 1);
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
  $menuButton.addEventListener("click", () => {
    $thanks.classList.add("active");
    coverBg();
  });
  $thanksClose.addEventListener("click", () => {
    $thanks.classList.remove("active");
    uncoverBg();
  });
  window.addEventListener("resize", () => {
    setTimeout(function () {
      menuWidth = $menu.offsetWidth;
      menuHeight = $menu.offsetHeight;

      console.log("resize event!");
      $thanksClose.style.width = menuWidth + "px";
      $thanksClose.style.height = menuHeight + "px";
      $thanksLogo.style.width = menuWidth + "px";
      $thanksLogo.style.height = menuHeight + "px";
    }, 500);
  });
})();
