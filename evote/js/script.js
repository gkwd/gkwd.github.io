function showSection(evt, sectionId) {
  let i, tabSection, tabBtn;

  tabSection = document.getElementsByClassName("content-list");
  for (i = 0; i < tabSection.length; i++) {
    tabSection[i].style.display = "none";
  }

  tabBtn = document.getElementsByClassName("tab-btn");
  for (i = 0; i < tabBtn.length; i++) {
    tabBtn[i].classList.remove("active");
  }

  document.getElementById(sectionId).style.display = "block";
  evt.currentTarget.className += " active";
}

const burger = document.getElementById("burger");
const nav = document.querySelector("nav");

burger?.addEventListener("click", function () {
  burger.classList.toggle("active_burger");
  nav.classList.toggle("open");
});
