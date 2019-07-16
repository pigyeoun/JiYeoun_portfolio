$(document).ready(function() {
  var didScroll;
  var lastScrollTop = 0;
  var delta = 3;
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
    $(bt[3]).click(function() {
        position = $(".con4").offset();
        $("html").stop().animate({scrollTop:position.top - 80},500);
      });

    //

    $(".top_bt_test").click(function() {
      $("html").stop().animate({scrollTop:0},500);
    });

    //

    $(window).on("load",function(){
      $(".page_loader").addClass("complete");
    });

});
