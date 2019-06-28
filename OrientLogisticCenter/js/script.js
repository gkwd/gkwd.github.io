const sliderWrapper = document.querySelector('.slider_list')
const sliderItems = document.getElementsByClassName('slider_item')
let slideNow = 1;
let translateWidth = 0;
const sliderViewport = document.querySelector('.slider_viewport');
const viewportWidth = parseFloat(getComputedStyle(sliderViewport).width);
const slideCount = sliderItems.length;

let btnPrev = document.getElementById('prev');
let btnNext = document.getElementById('next');

function nextBtn() {
  if (slideNow == slideCount || slideNow <= 0 || slideNow >= slideCount) {
    sliderWrapper.style.transform = 'translate(0,0)';
    slideNow = 1;
  } else {
    translateWidth = -viewportWidth * slideNow;
    sliderWrapper.style.transform = 'translate(' + translateWidth + 'px,0)';
    slideNow++;
  }
}

function prevBtn() {
  if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
    translateWidth = -viewportWidth * (slideCount - 1);
    sliderWrapper.style.transform = 'translate(' + translateWidth + 'px, 0)';
    slideNow = slideCount

  } else {
    translateWidth = -viewportWidth * (slideNow - 2);
    sliderWrapper.style.transform = 'translate(' + translateWidth + 'px, 0)';
    slideNow--;
  }
}
// btnPrev.addEventListener('click', prevBtn)

// btnNext.addEventListener('click', nextBtn)

