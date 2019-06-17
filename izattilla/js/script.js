let sliderWrapper = document.querySelector('.slider_list')
let sliderItems = document.getElementsByClassName('slider_item')
let slideNow = 1;
let translateWidth = 0;
let sliderViewport = document.querySelector('.slider_viewport');
let viewportWidth = parseFloat(getComputedStyle(sliderViewport).width);
let slideCount = sliderItems.length;

let desc = document.getElementById('description')
let descWrapper = document.querySelector('.desc_slide')
let descViewport = document.getElementById('dV')
let descViewportHeight = parseFloat(getComputedStyle(descViewport).height)
let descTranslateHeight = 0;

// let description = document.getElementById('description');
let btnPrev = document.getElementById('prev');
let btnNext = document.getElementById('next');

function nextBtn(){
    if(slideNow == slideCount || slideNow <= 0 || slideNow >= slideCount){
        sliderWrapper.style.transform = 'translate(0,0)';
        descWrapper.style.transform = 'translate(0,0)';
        slideNow = 1;
      }
      else{
        translateWidth = -viewportWidth * slideNow;
        descTranslateHeight = -descViewportHeight * slideNow;
        sliderWrapper.style.transform = 'translate('+ translateWidth + 'px,0)';
        descWrapper.style.transform = 'translate(0,'+ descTranslateHeight +'px)';
        slideNow++;
      }
}
function prevBtn(){
    if(slideNow == 1 || slideNow <= 0 || slideNow > slideCount){
        translateWidth = -viewportWidth * (slideCount - 1);
        descTranslateHeight = -descViewportHeight * (slideCount - 1);
        sliderWrapper.style.transform = 'translate('+ translateWidth +'px, 0)';
        descWrapper.style.transform = 'translate(0,'+ descTranslateHeight +'px)';
        slideNow = slideCount

      }
      else{
        translateWidth = -viewportWidth * (slideNow - 2);
        descTranslateHeight = -descViewportHeight * (slideNow - 2);
        sliderWrapper.style.transform = 'translate('+ translateWidth +'px, 0)';
        descWrapper.style.transform = 'translate(0,'+ descTranslateHeight +'px)';
        slideNow--;
        console.log(slideNow)
      }
}
btnPrev.addEventListener('click', prevBtn)

btnNext.addEventListener('click', nextBtn)





