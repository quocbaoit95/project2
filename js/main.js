$(document).ready(function(){
	var headerHeight = $('#header').outerHeight();
	$(window).scroll(function(){
		if($(window).scrollTop() > headerHeight){
			$('#header').addClass('fixed');
		}else{
			$('#header').removeClass('fixed');	
		}	
	});
	$(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#back-top').stop().fadeIn(100);
        } else {
            $('#back-top').stop().fadeOut(100);
        }
    });
	$('#back-top').click(function(){
		$("html, body").animate({scrollTop: 0}, 800);
	});
});