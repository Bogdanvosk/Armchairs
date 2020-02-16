$(function(){
	$(window).scroll(function () {

		$('.benefits-title').each(function () {
			var elPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (elPos < topOfWindow + 500) {
				$(this).addClass('fadeInLeft');
			}
		})

		$('.benefits-item').each(function () {
			var elPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (elPos < topOfWindow + 500) {
				$(this).addClass('fadeInLeft');
			}
		})

		$('section').each(function () {
			var elPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (elPos < topOfWindow + 500) {
				$(this).addClass('fadeInLeft');
			}
		})

		$('.discount-wrapper').each(function () {
			var elPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (elPos < topOfWindow + 500) {
				$(this).addClass('jackInTheBox');
			}
		})

		$('.advantages-column').each(function () {
			var elPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (elPos < topOfWindow + 500) {
				$(this).addClass('jackInTheBox');
			}
		})


		$('.advantages-column-lines').each(function () {
			var elPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (elPos < topOfWindow + 500) {
				$(this).addClass('jackInTheBox');
			}
		})

		$('.deliver-wrapper').each(function () {
			var elPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (elPos < topOfWindow + 500) {
				$(this).addClass('fadeInLeft');
			}
		})

		$('.difference').each(function () {
			var elPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (elPos < topOfWindow + 500) {
				$(this).addClass('jackInTheBox');
			}
		})



	})

});