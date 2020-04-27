function fadeOut(time, target) {
  var fadeTarget = document.querySelector(target);
  var fadeEffect = setInterval(function () {
    if (!fadeTarget.style.opacity) {
      fadeTarget.style.opacity = 1;
    }
    if (fadeTarget.style.opacity > 0) {
      fadeTarget.style.opacity -= 0.01;
      console.log(fadeTarget.style.opacity);
      
    } else {
      console.log(fadeTarget.style.opacity + "removing");
      clearInterval(fadeEffect);
      fadeTarget.remove();
    }
  }, time);
}
window.addEventListener("load", () => {
  fadeOut(10, ".loader_inner");
  fadeOut(10, ".loader");
  // console.log(document.baseURI);

  const backToTop = document.getElementById("back-to-top");

  window.addEventListener("scroll", (e) => {
    if (window.scrollY > 300) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  });

  backToTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  });

  const burgerBlock = document.getElementById("burger");
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav");

  burgerBlock.addEventListener("click", function () {
    burger.classList.toggle("active_burger");
    nav.classList.toggle("avtive_mobile_nav");
  });

  const lines = document.getElementById("lines");

  for (let index = 0; index < 25; index++) {
    // var divsize = (Math.random() * 100 + 50).toFixed();
    // var posx = (Math.random() * (document.body.clientWidth  - divsize)).toFixed();

    let expPos = document.body.clientWidth * (0.1 * index);
    const line = document.createElement("div");
    line.classList.add("line");
    line.style.position = "absolute";
    line.style.left = expPos + "px";

    lines.appendChild(line);
  }

  const input = document.getElementById("e-mail");
  const textArea = document.getElementById("textarea");
  textArea.style.transform = "scale(0, 0)";
  console.log(input);

  input.addEventListener("input", (e) => {
    let val = input.value.trim();
    if (val != "") {
      textArea.style.transform = "scale(1, 1)";
    } else {
      textArea.value = null;
      textArea.style.transform = "scale(0, 0)";
    }
  });

  document.querySelector(".logo_block img").addEventListener("click", () => {
    let theme = document.body.getAttribute("data-theme");
    console.log(theme);

    let imgLogo = document.querySelectorAll("img.logo");
    console.log(imgLogo);

    document.body.setAttribute(
      "data-theme",
      theme == "dark" ? "light" : "dark"
    );

    if (theme == "dark") {
      for (let index = 0; index < imgLogo.length; index++) {
        imgLogo[index].setAttribute("src", "./assets/img/Logo-inverted.png");
      }
    } else {
      for (let index = 0; index < imgLogo.length; index++) {
        imgLogo[index].setAttribute("src", "./assets/img/Logo_Block.png");
      }
    }
  });
});
