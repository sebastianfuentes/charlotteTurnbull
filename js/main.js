(function($) {

	skel.breakpoints({
		wide: '(max-width: 1680px)',
		normal: '(max-width: 1280px)',
		narrow: '(max-width: 980px)',
		narrower: '(max-width: 840px)',
		mobile: '(max-width: 736px)',
		mobilep: '(max-width: 480px)'
	});

	$(function() {
		var	$window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$banner = $('#banner');

		// Prioritize "important" elements on narrower.
		// 	skel.on('+narrower -narrower', function() {
		// 		$.prioritize(
		// 			'.important\\28 narrower\\29',
		// 			skel.breakpoint('narrower').active
		// 		);
		// 	});
		// // Off-Canvas Navigation.

			// Navigation Button.
				$(
					'<div id="navButton">' +
						'<a href="#navPanel" class="toggle"></a>' +
					'</div>'
				)
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						'<nav>' +
							$('#nav').navList() +
						'</nav>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'navPanel-visible'
					});

			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#navButton, #navPanel, #page-wrapper')
						.css('transition', 'none');

		// Header.
		// If the header is using "alt" styling and #banner is present, use scrollwatch
		// to revert it back to normal styling once the user scrolls past the banner.
		// Note: This is disabled on mobile devices.
			if (!skel.vars.mobile
			&&	$header.hasClass('alt')
			&&	$banner.length > 0) {

				$window.on('load', function() {

					$banner.scrollwatch({
						delay:		0,
						range:		0.5,
						anchor:		'top',
						on:			function() { $header.addClass('alt reveal'); },
						off:		function() { $header.removeClass('alt'); }
					});

				});

			}

	});

})(jQuery);
$(document).ready(function(){
	// toggle all containers but this one
	// $(".container").click(function() {
	// 	$(this).removeClass('unactive');
	// 	$(".container").not(this).addClass('active');
	// });
	$('a[href^="#"].self').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash;
	    var $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing');
	});
	$("#fullpage").mouseover(function(){
		$(".submenu").slideUp(300, function(){$(this).toggleClass("active")});
	});
	$("section").mouseover(function(){
		$(".submenu").slideUp(300, function(){$(this).toggleClass("active")});
	});
	$("#services").mouseenter(function(){
		$(".submenu").slideDown(300, function(){$(this).toggleClass("active")});
	});
	// $("#navButton").on("click", function(event) {
	// 	$("#page-wrapper").css("display","block")
	// 	console.log('testtest');
	// });
	// $("body").on("tap", function(){
	// 	if ($("body").hasClass('navPanel-visible')) {
	// 		console.log('test');
	// 	}
	// 	console.log('test');
	// });
	// $("#page-wrapper").on("click", initial);
	// function initial(){
	// 	setTimeout(function(){
	// 		$("#page-wrapper").css("display","initial")
	// 	}, 300)
	// }
	// if ($("section").length > 2) {
	// 	$("#page-wrapper").css("height","200%")
	// }
	// $(".intro").appear();
	// $('.intro').on('disappear', function() {
	// 	$(".header ul").addClass("sectionated")
	// 	console.log("sectionated");
	// });
	// $('.intro').on('appear', function() {
	// 	$(".header ul").removeClass("sectionated")
	// 	console.log("desectionated");
	// });
});
$(document).ready(function(){
	$('#fullpage').fullpage({
		  scrollingSpeed: 1000,
		  autoScrolling: true,
		  sectionsColor : ['#000'],
		  paddingTop: '0',
		  keyboardScrolling: true,
	      anchors:['scketch']
	});
});