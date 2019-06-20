$(document).ready(function() {
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('header').outerHeight();
  $(window).scroll(function(event){
    didScroll = true;
  });

  setInterval(function() {
    if (didScroll) {
      hasScrolled(); didScroll = false; }
    }, 250);

    function hasScrolled() {
      var st= $ (this).scrollTop();

      if (Math.abs(lastScrollTop - st)<= delta)
        return;

        if (st>lastScrollTop && st > navbarHeight) {
          $("header").removeClass("nav_down").addClass("nav_up");
        }
        else {
          if (st+$(window).height()<$(document).height()) {
            $("header").removeClass("nav_up").addClass("nav_down");
          }
        }
        lastScrollTop = st;
    }

    //

    var bt = document.getElementsByClassName('header_bt');
    var position;

    $(bt[0]).click(function() {
        position = $(".con2").offset();
        $("html").stop().animate({scrollTop:position.top - 80},500);
      });

    //

    $(".new_window_close").click(function() {
      $(".new_window").fadeOut(300);
    });

    $(".con2_1").click(function() {$(".con2_art1").fadeIn(300);});
    $(".con2_2").click(function() {$(".con2_art2").fadeIn(300);});
    $(".con2_3").click(function() {$(".con2_art3").fadeIn(300);});
    $(".con2_4").click(function() {$(".con2_art4").fadeIn(300);});

    //

    $(".top_bt_test").click(function() {
      $("html").stop().animate({scrollTop:0},500);
    });
});
