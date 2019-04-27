// var slideNow = 1;
// var slideCount = $('#slidewrapper').children().length;
// var slideInterval = 3000;
// var navBtnId = 0;
// var translateWidth = 0;

// $('#next-btn').click(function () {
//     nextSlide();
    
// });

// $('#prev-btn').click(function () {
//     prevSlide();
// });

// $('.slide-nav-btn').click(function () {
//     navBtnId = $(this).index();
//     if (navBtnId + 1 != slideNow) {
//         translateWidth = -$('#viewport').height() * (navBtnId);
//         $('#slidewrapper').css({
//             'transform': 'translate(0,' + translateWidth + 'px)'
//         });
//         slideNow = navBtnId + 1;
//     }
// });

// if(navBtnId = $(this).index()){
// $('.slide-nav-btn').css('background-color', '#fff');
// }


// function nextSlide() {
// if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
//     $('#slidewrapper').css('transform', 'translate(0, 0)');
//     slideNow = 1;
// } else {
//     translateWidth = -$('#viewport').height() * (slideNow);
//     $('#slidewrapper').css({
//         'transform': 'translate(0,' + translateWidth + 'px)'
//     });
//     slideNow++;
// }
// }

// function prevSlide() {
// if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
//     translateWidth = -$('#viewport').height() * (slideCount - 1);
//     $('#slidewrapper').css({
//         'transform': 'translate(0,' + translateWidth + 'px)'
//     });

//     slideNow = slideCount;
// } else {
//     translateWidth = -$('#viewport').height() * (slideNow - 2);
//     $('#slidewrapper').css({
//         'transform': 'translate(0,' + translateWidth + 'px)'
//     });
//     slideNow--;
// }
// }

$('.slider_block').slick({
    vertical: true,
    autoplay: false,
    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous slide" tabindex="0" role="button"></button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next slide" tabindex="0" role="button"></button>',
    dots: true,
    speed: 500,
    useTransform: true,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    // adaptiveHeight: true,
    // variableWidth: true,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
});