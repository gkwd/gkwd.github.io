const menu = document.querySelectorAll("ul li");
const lis = document.querySelectorAll("li");
[...menu].forEach(nav_item =>
  nav_item.addEventListener("click", function() {
    [...lis].forEach(li => li.classList.remove("active"));
    nav_item.classList.add("active");
  })
);
