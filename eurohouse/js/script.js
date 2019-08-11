function openTab(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabs");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("big_tabs_item");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openTabContent(evt, Name) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabs_content" and hide them
  tabcontent = document.getElementsByClassName("tabs_content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tabs" and remove the class "active"
  tablinks = document.getElementsByClassName("tabs_item");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", " ");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(Name).style.display = "flex";
  evt.currentTarget.className += " active";
}


$('.gallery_box').owlCarousel({
  margin: 10,
  responsiveClass:true,
  nav: true,
  navText: ['<i class="fas fa-arrow-circle-left"></i>','<i class="fas fa-arrow-circle-right"></i>'],
  responsive:{
      320:{
          items:1,
          loop:true,
          nav: true
      },
      768:{
          items:2,
          loop:true,
          nav: true,
          dots: true,
      },
      1000:{
          items:4,
          nav: true,
          dots: false,
          loop: true,
      }
  }
})