$(document).ready(function(){
	$(".container").click(function() {
		$(this).removeClass('unactive');
		$(".container").not(this).addClass('active');
	});
});
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash;
	    var $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing');
	});

});