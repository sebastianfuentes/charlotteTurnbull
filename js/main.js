$(document).ready(function(){
	// toggle all containers but this one
	// $(".container").click(function() {
	// 	$(this).removeClass('unactive');
	// 	$(".container").not(this).addClass('active');
	// });
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash;
	    var $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing');
	});
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