$('.slider_block').slick({
    vertical: true,
    autoplay: false,
    infinite: false,
    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous slide" tabindex="0" role="button"><i class="fas fa-chevron-up"></i></button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next slide" tabindex="0" role="button"><i class="fas fa-chevron-down"></i></button>',
    dots: true,
    speed: 500,
    useTransform: true,
    cssEase: 'linear',
    slidesToShow: 1,
    draggable: true,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            prevArrow: '',
            nextArrow: '',
            // vertical: false,
            draggable:false,
          }
        }
      ]
});


$('.open_menu').on('click', function(){
    $(this).toggleClass('active');
    $('.nav_list').toggleClass('visible');
})