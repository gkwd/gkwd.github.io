const burger = document.getElementById('burger');
const nav = document.querySelector('.navigation')

burger.addEventListener('click', function(){
  burger.classList.toggle('avtive');
  nav.classList.toggle('avtive_mobile_nav');

})