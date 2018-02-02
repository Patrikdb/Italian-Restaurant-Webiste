
// LOADER

window.onload = function(){
document.getElementById('ld-bg').style.display = "none";
  document.getElementsByTagName("BODY")[0].style.overflow = "scroll";

  animate();
}







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

// Changing the defaults
window.sr = ScrollReveal({ reset: true });

sr.reveal('.foo', { duration: 1500 });
sr.reveal('.bar', { duration: 1000 });
sr.reveal('.one', { duration: 1000 });
sr.reveal('.two', { duration: 1500 });
sr.reveal('.three', { duration: 2000 });
sr.reveal('.four', { duration: 2500 });
sr.reveal('.one', { duration: 1000 });
sr.reveal('.one', { duration: 1000 });
sr.reveal('.one', { duration: 1000 });
sr.reveal('.one', { duration: 1000 });
sr.reveal('.one', { duration: 1000 });

function animate(){

var CSStransforms = anime({
  targets: '#project1',
  translateX:{ value: [-1500, 0], duration: 2000, delay: 0, elasticity: 400 },
    scale: {
    value: [0.5, 1],
    duration: 1600,
    delay: -200,
    easing: 'easeInOutQuart'
  },
  rotate: {
    delay: -200,
    value: 360,
    duration: 800,
    easing: 'easeInOutSine'
  },
  duration: 4000
});

var CSStransforms = anime({
  targets: '#project2',
  delay: 200,
  translateX:{ value: [-1500, 0], duration: 3000, delay: 600, elasticity: 400 },

    scale: {
    value: [0.5, 1],
    duration: 1600,
    delay: 1000,
    easing: 'easeInOutQuart'
  },
  rotate: {
    delay: 600,
    value: 360,
    duration: 1000,
    easing: 'easeInOutSine'
  },
  duration: 4000
});

var CSStransforms = anime({
  targets: '#project3',
  translateX:{ value: [-1500, 0], duration: 2000, delay: 200, elasticity: 0 },

    scale: {
    value: [0.5, 1],
    duration: 1600,
    delay: 1000,
    easing: 'easeInOutQuart'
  },
  rotate: {
    delay: 200,
    value: 360,
    duration: 1000,
    easing: 'easeInOutSine'
  },
  duration: 4000
});

var CSStransforms = anime({
  targets: '#project4',
  translateX:{ value: [-1500, 0], duration: 3000, delay: 800, elasticity: 0 },

    scale: {
    value: [0.5, 1],
    duration: 1600,
    delay: 1000,
    easing: 'easeInOutQuart'
  },
  rotate: {
    delay: 1000,
    value: 360,
    duration: 600,
    easing: 'easeInOutSine'
  },
  duration: 4000
});
}
