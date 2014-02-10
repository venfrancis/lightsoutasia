$(window).load(function() {
    // // Method posted by Chris Coyer of CSS Tricks
    // // for perfect full page background image
    // // http://css-tricks.com/perfect-full-page-background-image
    // var theWindow        = $(window),
    //     $bg              = $("#bg"),
    //     aspectRatio      = $bg.width() / $bg.height();
    // function resizeBg() {
    // 	if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
    // 	    $bg
    // 	    	.removeClass()
    // 	    	.addClass('bgheight');
    // 	} else {
    // 	    $bg
    // 	    	.removeClass()
    // 	    	.addClass('bgwidth');
    // 	}
    // }
    // theWindow.resize(resizeBg).trigger("resize");

    // declare our variables
    var $window = $(window),
        $document = $(document);

    //make the holders 100% height to the viewport
    $('.slide, .diag-overlay').css('height', $window.height());

    //configure the parallax effect
    $window.bind('scroll', function() {
        parallaxScroll();
    });

    function parallaxScroll() {
        var scrolledY = $window.scrollTop();
        $('.first-slide, .slide-small').css('background-position-y',  ((scrolledY * 0.3)) + 'px');
    }

    $('.slider').bxSlider({
      auto: true,
      pager:false,
      controls: false,
      speed: 1500,
      adaptiveHeight: true,
      pause: 5000
    });

    $(document).ready(
      function() { 
        $("html").niceScroll({
            cursorcolor:"#D86548", 
            autohidemode : "false", 
            cursorwidth : "5",
            zindex :"10",
            cursorborder:"1px solid #EBA18F"
        });
      }
    );
});