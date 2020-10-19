const buttons = document.querySelectorAll(".choose-auth");
console.log(buttons);
// const forms = {
//     oneid: 'oneid',
//     registration: 'reg',
//     login: 'login'
// }
const body = document.body;
const forms = ["oneid", "reg", "login"];
let curForm;

for (let index = 0; index < buttons.length; index++) {
  buttons[index].addEventListener("click", () => {
    for (let y = 0; y < buttons.length; y++) {
      buttons[y].classList.remove("active");
    }
    buttons[index].classList.add("active");

    body.setAttribute("form-name", forms[index]);
    if (curForm != undefined || curForm != null) {
      curForm.style.display = "none";
    } else {
      curForm = document.getElementById(forms[index]);
    }

    if (curForm !== undefined || curForm !== null) {
      curForm.style.display = "flex";
    }
  });
}

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
