
    $('.burger').on('click', function(){
        $('.navBar').addClass('animated fadeInLeft');
        $('.navBar').css('display', 'flex');
        $( ".burger" ).hide();
        $( ".cross" ).show();
    });
    $('.cross').on('click', function(){
        $('.navBar').css('display', 'none');
        $( ".burger" ).show();
        $( ".cross" ).hide();
    });


    jQuery(document).ready(function(){
        $('.news_block').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        classToRemove: 'hidden',
        offset: 100,    
        });
    });

    jQuery(document).ready(function(){
        $('.about_text').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated zoomIn',
        classToRemove: 'hidden',
        offset: 300,    
        });
    });

    $(document).ready(function(){
        $('.NavBar_nav, .footer_list').on('click', 'a', function(event){
            event.preventDefault();

            var id = $(this).attr('href')

            var top = $(id).offset().top;

            $('body,html').animate({scrollTop: top}, 1500);
        });
    });
function initMap(){
    var opt ={
        center: {lat: 41.308463, lng: 69.241546},
        zoom: 15
    }
    var map = new google.maps.Map(document.getElementById('map'), opt);
    
    var marker = new google.map.Marker({
        position: {lat: 41.308463, lng:69.241546},
        map: map,
        title: "hover me"
    })
}