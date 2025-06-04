$('.burger').on('click', function(){
    $('.nav_bar').addClass('animated fadeInRight');
    $('.nav_bar').css('display', 'block');
    $('.nav_bar').css('right', '0');
    $( ".burger" ).hide();
    $( ".cross" ).show();
});
$('.cross').on('click', function(){
    $('.nav_bar').css('display', 'none');
    $( ".burger" ).show();
    $( ".cross" ).hide();
});
var doc = $(document).width();

if(doc <= 767){
    $('.bar_item').on('click', function(){
        $('.nav_bar').css('display', 'none');
        $( ".burger" ).show();
        $( ".cross" ).hide();
    })
}

jQuery(document).ready(function(){
    $('.g_item').addClass('hidden').viewportChecker({
    classToAdd: 'myvisible animated zoomIn',
    classToRemove: 'hidden',
    offset: 100,    
    });
});

$(document).ready(function(){
    $('.bar_item, .f_item').on('click', 'a', function(event){
        event.preventDefault();

        var id = $(this).attr('href')

        var top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1500);
    });
});