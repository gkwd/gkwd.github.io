// $('.big_slider').owlCarousel({
//     margin: 10,
//     responsiveClass:true,
//     items: 1,
//     nav: true,
//     loop: true,
//     dots: false,
//   })
//   $('.tiny_slider').owlCarousel({
//     margin: 10,
//     responsiveClass:true,
//     loop: true,
//     responsive:{
//         480:{
//             items: 2,
//             nav: true,
//             dots: true,
//         },
//         768:{
//             items:4,
//             nav: true,
//             dots: true,
//         },

//     }
//   })


  
$('.big_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    draggable: true,
    dots: false,
    infinite: true,
    fade: true,
    asNavFor: '.tiny_slider',
   });

   $('.tiny_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    asNavFor: '.big_slider',
    dots: false,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ],
   });