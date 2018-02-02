// ----- NAV -----
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

// NAVBAR SHOW
$(document).ready(function(){
  $(".menu-icon").on("click", function(){
    $("nav ul").toggleClass("showing");
  });
});

// NAVBAR SCROLL
$(window).on("scroll", function() {
  if($(window).scrollTop()){
    $('nav').addClass('black');
  } else{
    $('nav').removeClass('black');
  }
})
