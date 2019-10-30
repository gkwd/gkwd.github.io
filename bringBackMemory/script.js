let btn = document.getElementById("read_more");


btn.addEventListener("click", function() {
  this.classList.toggle("active");
  
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