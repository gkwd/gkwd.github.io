const buttons = document.querySelectorAll(".choose-auth");
console.log(buttons);
const body = document.body;
const forms = ["oneid", "reg", "login"];
let curForm;

for (let index = 0; index < buttons.length; index++) {
  buttons[index].addEventListener("click", () => {
    for (let y = 0; y < buttons.length; y++) {
      buttons[y].classList.remove("active");
    }
    buttons[index].classList.add("active");

    // body.setAttribute("form-name", forms[index]);
    
      if (curForm != undefined || curForm != null) {
        curForm.style.display = "none";
      }  
      curForm = document.getElementById(forms[index]);
      curForm.style.display = "flex";
    // }
  });
}