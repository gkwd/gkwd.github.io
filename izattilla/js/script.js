const sliderWrapper = document.querySelector('.slider_list')
const sliderItems = document.getElementsByClassName('slider_item')
let slideNow = 1;
let translateWidth = 0;
const sliderViewport = document.querySelector('.slider_viewport');
const viewportWidth = parseFloat(getComputedStyle(sliderViewport).width);
const slideCount = sliderItems.length;

const desc = document.getElementById('description')
const descWrapper = document.querySelector('.desc_slide')
const descViewport = document.getElementById('dV')
const descViewportHeight = parseFloat(getComputedStyle(descViewport).height)
let descTranslateHeight = 0;

// let description = document.getElementById('description');
let btnPrev = document.getElementById('prev');
let btnNext = document.getElementById('next');

function nextBtn() {
  if (slideNow == slideCount || slideNow <= 0 || slideNow >= slideCount) {
    sliderWrapper.style.transform = 'translate(0,0)';
    descWrapper.style.transform = 'translate(0,0)';
    slideNow = 1;
  } else {
    translateWidth = -viewportWidth * slideNow;
    descTranslateHeight = -descViewportHeight * slideNow;
    sliderWrapper.style.transform = 'translate(' + translateWidth + 'px,0)';
    descWrapper.style.transform = 'translate(0,' + descTranslateHeight + 'px)';
    slideNow++;
  }
}

function prevBtn() {
  if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
    translateWidth = -viewportWidth * (slideCount - 1);
    descTranslateHeight = -descViewportHeight * (slideCount - 1);
    sliderWrapper.style.transform = 'translate(' + translateWidth + 'px, 0)';
    descWrapper.style.transform = 'translate(0,' + descTranslateHeight + 'px)';
    slideNow = slideCount

  } else {
    translateWidth = -viewportWidth * (slideNow - 2);
    descTranslateHeight = -descViewportHeight * (slideNow - 2);
    sliderWrapper.style.transform = 'translate(' + translateWidth + 'px, 0)';
    descWrapper.style.transform = 'translate(0,' + descTranslateHeight + 'px)';
    slideNow--;
  }
}
btnPrev.addEventListener('click', prevBtn)

btnNext.addEventListener('click', nextBtn)



const extra = document.getElementById('extra')
const menu = document.getElementById('menu')
const nav = document.querySelector('.nav')
const contact = document.querySelector('.extra_contact');
let contact_style = getComputedStyle(contact)
let nav_style = getComputedStyle(nav)

extra.addEventListener('click', function(){
  const rightOffset = parseFloat(contact_style.right);
  console.log(contact.right)
  if(rightOffset == -280){
    extra.style.right = '280px'
    contact.style.right = 0;
    contact.style.zIndex = 151;
  }
  else{
    contact.style.right = '-280px';
    extra.style.right = '0'
    contact.style.zIndex = 100;
  }
})

menu.addEventListener('click', function(){
  const rightOffset = parseFloat(nav_style.right);
  console.log(nav.right)
  if(rightOffset == -280){
    menu.style.right = '280px'
    nav.style.right = 0;
    nav.style.zIndex = 151;
  }
  else{
    nav.style.right = '-280px';
    menu.style.right = '0'
    nav.style.zIndex = 100;
  }
})