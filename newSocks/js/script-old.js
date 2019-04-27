var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var slideInterval = 3000;
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function () {
    //
    //
    //  АвтоПереключение
    //
    //
    //
    // var switchInterval = setInterval(nextSlide, slideInterval);

    // $('#viewport').hover(function() {
    //     clearInterval(switchInterval);
    // }, function() {
    //     switchInterval = setInterval(nextSlide, slideInterval);
    // });

    $('#next-btn').click(function () {
        nextSlide();
        
    });

    $('#prev-btn').click(function () {
        prevSlide();
    });

    $('.slide-nav-btn').click(function () {
        navBtnId = $(this).index();
        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').height() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(0,' + translateWidth + 'px)'
            });
            slideNow = navBtnId + 1;
        }
    });
});
if(navBtnId = $(this).index()){
    $('.slide-nav-btn').css('background-color', '#fff');
}


function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').height() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(0,' + translateWidth + 'px)'
        });
        slideNow++;
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').height() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(0,' + translateWidth + 'px)'
        });

        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').height() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(0,' + translateWidth + 'px)'
        });
        slideNow--;
    }
}



$('.myTooltip').on('click', function(){
    // $('.myTooltip_desc').addClass('visible');
    // $('.myTooltip_desc').removeClass('hidden');
    $('.myTooltip_desc').css({
        'visibility': 'visible',
        'opacity': '1',
        'width': '200px'
    })
    $('.bgimage').css('display', 'flex');
})
$('.bgimage').on('click', function(){
    // $('.myTooltip_desc').removeClass('visible');
    // $('.myTooltip_desc').addClass('hidden');
    $('.myTooltip_desc').css({
        'visibility': 'hidden',
        'opacity': '0'
    })
    $('.bgimage').css('display', 'none');
})
$('.close_btn').on('click', function(){
    // $('.myTooltip_desc').removeClass('visible');
    // $('.myTooltip_desc').addClass('hidden');
    $('.myTooltip_desc').css({
        'visibility': 'hidden',
        'opacity': '0'
    })
    $('.bgimage').css('display', 'none');
})
$('.dropdown').on('click', function(){
    $('.dropdown_list').css('height', '100px');
    $('.dropdown_list').css('display', 'block');
  })


$('#men').ready().addClass('active').css('display', 'flex');

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "flex";
    evt.currentTarget.className += " active";
  }
  $('.nav_bar_logo span').on('click', function(){
       location.href = 'index.html';
  })
  
  $('.burger').on('click', function(){
    $('.nav_mobile').css('display', 'block');
    $('.burger').hide();
    $('.cross').show();
  })
  $('.cross').on('click', function(){
    $('.nav_mobile').css('display', 'none');
    $('.burger').show();
    $('.cross').hide();
  })