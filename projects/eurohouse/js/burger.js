const burger = document.getElementById('burger');
const nav = document.querySelector('.nav_bar')

burger.addEventListener('click', function(){
  burger.classList.toggle('active_burger');
  nav.classList.toggle('avtive_mobile_nav');
})