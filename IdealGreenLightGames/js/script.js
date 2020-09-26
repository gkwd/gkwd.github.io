window.addEventListener("load", function () {
    let tech = document.getElementById("tech-name");
    let activeOwl; // = document.querySelector(".owl-item.active.center div");
    // console.log(document.querySelector(".owl-item.active.center"));

    // tech.innerText = activeOwl ? activeOwl.dataset.text : " ";
    $("#tech-carousel").owlCarousel({
      loop: true,
      nav: false,
      dots: false,
      margin: 5,
      lazyLoad: true,
      center: true,
      callback: true,
      onInitialized: (e) => {
        // console.log(activeOwl.dataset.text);
        activeOwl = document.querySelector(".owl-item.active.center div");
        tech.innerText = activeOwl ? activeOwl.dataset.text : " ";
      },
      onTranslated: (e) => {
        // console.log(activeOwl.dataset.text);
        activeOwl = document.querySelector(".owl-item.active.center div");
        tech.innerText = activeOwl ? activeOwl.dataset.text : " ";
      },
      responsive: {
        0: {
          items: 2,
        },
        480: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });
  });