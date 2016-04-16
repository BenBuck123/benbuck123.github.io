$(document).ready(function() {
	$(window).scroll(function(event) {
		var y = $(this).scrollTop();

		if (y >= 100) {
			$('.icons').addClass('animate fadeInLeft')
		}
		if (y >= 100) {
			$('.icons1').addClass('animate fadeInUp')
		}
		if (y >= 100) {
			$('.icons2').addClass('animate fadeInRight')
		}
		if (y >= 2533) {
			$('.excuse').addClass('animate fadeInRight')
		}
	});



});