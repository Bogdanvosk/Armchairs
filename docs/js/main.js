'use strict';

$(function () {
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
				$(this).addClass('fadeInRight');
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

		$('.adress-wrapper').each(function () {
			var elPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (elPos < topOfWindow + 500) {
				$(this).addClass('fadeInRight');
			}
		})


	})


});

// Get the modal
var modal = document.getElementById('myModal');
// Get the button that opens the modal
var btn = document.getElementById('myBtn');
// Get the <span> element that closes the modal
var span = document.getElementById('close');
// Get the modal response
var modalResponse = document.getElementById('myModalResponse');
// Get the button that opens modal response
var closeFormBtn = document.getElementById('closeFormBtn');
// Get the button that closes the modal Response
var closeResponse = document.getElementById('closeResponse');



// When the user clicks on the button, open the modal
btn.onclick = function () {
	modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
	modal.style.display = 'none';
}

window.onclick = function (event) {
	if (event.target === modal) {
		modal.style.display = 'none';
	}
}

closeResponse.onclick = function () {
	modalResponse.style.display = 'none';
}

window.onclick = function (event) {
	if (event.target === modalResponse) {
		modalResponse.style.display = 'none';
	}
}

// When the user clicks on button in first modal, open modal response
closeFormBtn.onclick = function () {
	modal.style.display = 'none';
	modalResponse.style.display = 'block';
}

