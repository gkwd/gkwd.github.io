let btn = document.getElementById("read_more");

btn.addEventListener("click", function() {
  let content = document.querySelector("p.hidden_text");

  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    btn.innerText = "Читать дальше";
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    btn.innerText = "Скрыть";
  }
});

function showTableTab(tab) {
  let service = document.getElementsByClassName("service");
  for (let i = 0; i < service.length; i++) {
    service[i].style.display = "none";
  }
  document.getElementById(tab).style.display = "flex";
}

let showHiddenBlock = document.getElementsByClassName("disappearing_button");

for (let i = 0; i < showHiddenBlock.length; i++) {
  showHiddenBlock[i].addEventListener("click", function() {

    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
    
    this.classList.toggle("active");
  });

}
