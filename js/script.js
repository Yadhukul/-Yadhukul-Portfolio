/*!
 * Generated using the Bootstrap Customizer (<none>)
 * Config saved to config.json and <none>
 */

 (function($) {

  "use strict";

  // ------------------------------------------------------------------------------ //
  // get path relative to javascript
  // ------------------------------------------------------------------------------ //
 
 $(document).ready(function(){
      
	$('.service-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      dots: true,
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
          }
        }
      ]
    });

      
	$('.testimonial-slider').slick({
          autoplay: false,
          autoplaySpeed: 4000,
          fade: true,
          prevArrow: $('.prev'),
          nextArrow: $('.next'),
	});

});



// Menu toggle functionality
$(document).on('click touchstart', function (e){
  var x = document.getElementById("navigation");
  var barIcon = e.target.closest('.bar-icon');
  var column = e.target.closest('.column');
  
  // If clicking on a project column, don't toggle menu
  if (column) {
    return;
  }
  
  // If clicking on menu icon, toggle menu
  if (barIcon) {
    if (x.className === "top-menu") {
      x.className = "top-menu menu-bar";
    } else {
      x.className = "top-menu";
    }
    return;
  }
  
  // If menu is open and clicking outside, close it
  if (x.className === "top-menu menu-bar") {
    x.className = "top-menu";
  }
});

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
});



})(jQuery);