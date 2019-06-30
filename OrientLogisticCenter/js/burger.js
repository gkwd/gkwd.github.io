const burger = document.getElementById('burger');
const nav = document.querySelector('.navigation')

burger.addEventListener('click', function(){
  burger.classList.toggle('avtive');
  nav.classList.toggle('avtive_mobile_nav');
})


const lang = document.getElementById('language');
const drop = document.getElementById('lang1');
lang.addEventListener('click', function(){
  drop.classList.toggle('active_drop');
  // drop.style.transform = 'scaleY(1)'
})