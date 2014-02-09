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
    var $window = $(window);

    //make the holders 100% height to the viewport
    $('.slide, .diag-overlay').css('height', $window.height());

    //configure the parallax effect
    $window.bind('scroll', function() {
        parallaxScroll();
    });

    function parallaxScroll() {
        var scrolledY = $window.scrollTop();
        $('.first-slide').css('background-position', 'center ' + ((scrolledY * 0.3)) + 'px');
    }

    $('.team-member').hover(function() {

        // console.log($(this).find('img').attr('class'));
        $('.teamHover').prependTo($(this).find('img').parent()).show();
        // $(this)
        //     .find('img')
        //     .parent()
        //     .prependTo('.teamHover')
        //     .show('slow');

    }, function() {
        $(this).find('.teamHover').remove();
    });
});