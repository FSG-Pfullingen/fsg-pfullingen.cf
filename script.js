$(document).ready(function() {

  // slide down off-canvas panel
  $('.ion-ios-more-outline').click(function() {
    $('.more-options').animate({
      top: "0px"
    }, 800, 'easeOutExpo');
  });

  // slide panel back off-canvas
  $('.ion-close-round').click(function() {
    $('.more-options').animate({
      top: "-76px"
    }, 100);
  });

  //calc window height so hero is always the same size unless height in less than 605px
  var heroHeight = $(window).height();
  if (heroHeight < 605) {
    $(".hero").css("height", 605);
  } else {
    $(".hero").css("height", heroHeight);
  }

  //Calc margin-top for hero tagline
  var marginTop = $(window).height() / 2.5
  $(".hero-title").css("margin-top", marginTop);

  // fade the magic mouse on scroll
  $(window).scroll(function() {
    $(".magic-mouse").css("opacity", 1 - $(window).scrollTop() / 600);
  });

  var heroBase = $('.hero').offset().top + heroHeight

  // add nav background on scroll 
  $(window).on('scroll', function() {
    stop = Math.round($(window).scrollTop());
    if (stop > heroBase) {
      $('.navbar-fixed-top').addClass('past-hero');
      $(".ion-ios-more-outline").css("color", "#F35A43");
      $(".ion-compass").css("color", "#F35A43");
      $(".navbar-fixed-top").css("background", "#FFF");

    } else {
      $('.navbar-fixed-top').removeClass('past-hero');
      $(".ion-ios-more-outline").css("color", "#fff");
      $(".ion-compass").css("color", "#fff");
      $(".navbar-fixed-top").css("background", "transparent");
    }

  });
    
  
});

