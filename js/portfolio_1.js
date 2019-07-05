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
        position = $(".con1").offset();
        $("html").stop().animate({scrollTop:position.top - 80},500);
      });
    $(bt[1]).click(function() {
      position = $(".con2").offset();
      $("html").stop().animate({scrollTop:position.top - 80},500);
    });
    $(bt[2]).click(function() {
        position = $(".con3").offset();
        $("html").stop().animate({scrollTop:position.top - 80},500);
      });

    //

    $(".new_window_close").click(function() {
      $(".new_window").fadeOut(300);
    });

    $(".con1_1").click(function() {$(".con1_project1").fadeIn(300);});
    $(".con1_2").click(function() {$(".con1_project2").fadeIn(300);});

    $(".con2_1").click(function() {$(".con2_copypage1").fadeIn(300);});

    $(".con3_1").click(function() {$(".con3_animation1").fadeIn(300);});
    $(".con3_2").click(function() {$(".con3_animation2").fadeIn(300);});
    $(".con3_3").click(function() {$(".con3_animation3").fadeIn(300);});
    $(".con3_4").click(function() {$(".con3_animation4").fadeIn(300);});
    $(".con3_5").click(function() {$(".con3_animation5").fadeIn(300);});
    $(".con3_6").click(function() {$(".con3_animation6").fadeIn(300);});
    $(".con3_7").click(function() {$(".con3_animation7").fadeIn(300);});
    $(".con3_8").click(function() {$(".con3_animation8").fadeIn(300);});

    //

    $(".top_bt_test").click(function() {
      $("html").stop().animate({scrollTop:0},500);
    });
});
