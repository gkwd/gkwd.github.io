$('.open_menu').on('click', function(){
  $(this).toggleClass('active');
  $('.nav_list').toggleClass('visible');
})

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

function openCity(event, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tab_content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tab_links");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active_border", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "flex";
  event.currentTarget.className += " active_border";
}


