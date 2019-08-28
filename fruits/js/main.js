$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous slide" tabindex="0" role="button"><i class="fas fa-arrow-circle-left"></i></button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next slide" tabindex="0" role="button"><i class="fas fa-arrow-circle-right"></i></button>',
    fade: false,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
  });
  

  $('.open_menu').on('click', function(){
    $(this).toggleClass('active');
    $('.nav_list').toggleClass('visible');
  })

  window.addEventListener('scroll', function(event) {
    var depth, i, layer, layers, len, movement, topDistance, translate3d;
    topDistance = this.pageYOffset;
    layers = document.querySelectorAll("[data-type='parallax']");
    for (i = 0, len = layers.length; i < len; i++) {
      layer = layers[i];
      depth = layer.getAttribute('data-depth');
      movement = -(topDistance * depth);
      translate3d = 'translate3d(0, ' + movement + 'px, 0)';
      layer.style['-webkit-transform'] = translate3d;
      layer.style['-moz-transform'] = translate3d;
      layer.style['-ms-transform'] = translate3d;
      layer.style['-o-transform'] = translate3d;
      layer.style.transform = translate3d;
    }
  });
// window.addEventListener('scroll', function(e){
//   var yDis = window.pageYOffset;
// querySelectorAll()
//   var layers = document.getElementsByClassName('pl_bg');

//   for (let layer of Array.from(layers)){
//     var d = layer.
//     const depth = layer.getAttribute('data-depth');
//     let movement = (-topDistance * depth);
//     const translate3d = 'translate3d(0, ' + movement 'px, 0')' ;
//     layer.style['-webkit-transform'] = translate3d;
//     layer.style['-moz-transform'] = translate3d;
//     layer.style['-ms-transform'] = translate3d;
//     layer.style['-o-transform'] = translate3d;
//     layer.style.transform = translate3d;
//   } 
// })
  // window.addEventListener 'scroll', (event) ->
  // topDistance = @pageYOffset 
  // layers = document.querySelectorAll("[data-type='parallax']")
  
  // for layer in layers
  //   depth = layer.getAttribute('data-depth')
  //   movement = -(topDistance * depth)
  //   translate3d = 'translate3d(0, ' + movement + 'px, 0)'
  //   layer.style['-webkit-transform'] = translate3d
  //   layer.style['-moz-transform'] = translate3d
  //   layer.style['-ms-transform'] = translate3d
  //   layer.style['-o-transform'] = translate3d
  //   layer.style.transform = translate3d
  // return