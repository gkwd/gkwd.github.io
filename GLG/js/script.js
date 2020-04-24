document.addEventListener("DOMContentLoaded", () => {
  var backToTop = document.getElementById("back-to-top");

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

  // var color = '#'+ Math.round(0xffffff * Math.random()).toString(16);

  // make position sensitive to size and document's width
  // var posx = (Math.random() * (document.width - divsize)).toFixed();
  // var posy = (Math.random() * (document.height - divsize)).toFixed();

  const lines = document.getElementById("lines");

  for (let index = 0; index < 11; index++) {
    var divsize = (Math.random() * 100 + 50).toFixed();
    var posx = (Math.random() * (document.body.clientWidth  - divsize)).toFixed();
    console.table(divsize, posx);
    console.log(document.body.clientWidth);
    
    let expPos = document.body.clientWidth * (0.1 * index);
    const line = document.createElement("div");
    line.classList.add("line");
    line.style.position = 'absolute';
    line.style.left = expPos + 'px';

    lines.appendChild(line);
    console.log(line);
  }
});
