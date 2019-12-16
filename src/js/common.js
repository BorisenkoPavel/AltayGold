$(document).ready(function () {
	
	new WOW().init();

	svg4everybody({});

	$('.hamburger').on('click', function(){
		$('.hamburger').toggleClass('is-active')
		$('.menu').toggleClass('is-active')
	})
	Modernizr.on('webp', function(result) {
		if (result) {
			// supported
		} else {
			// not-supported
		}
	});

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 200,
    to: 500,
	});
	
	$(".go-top").on("click", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body, html').animate({
			scrollTop: top
		}, 350);
	});
	
	$('.section-hits-title').children('h1').on('click',function(){
		if ($(this).hasClass('not-active')) {
		$('.section-hits-title').children('h1').toggleClass('not-active')
		$('.swiper-container.card-list').toggleClass('not-active')
	}
	})

	var cardsSlider = new Swiper('.swiper-container.card-list', {
		observer: true,
		observeParents: true,
		// autoplay: true,
		slidesPerView: 4,
		speed: 400,
		spaceBetween: 30,
		navigation: {
			nextEl: '.swiper-button-next.card-list-next',
			prevEl: '.swiper-button-prev.card-list-prev',
		},
		breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 2,
			},
			500: {
				slidesPerView: 1,
			},
		},
});

var categorySlider = undefined;
function initSwiper() {
    var screenWidth = $(window).width();
    if(screenWidth < 992 && categorySlider == undefined) {    
				$('.swiper-container.category-slider').children('.swiper-wrapper').removeClass('row')  
        categorySlider = new Swiper('.swiper-container.category-slider', {            
            spaceBetween: 0,
						freeMode: true,
						speed: 400,
						grabCursor: true,
						navigation: {
							nextEl: '.swiper-button-next.category-next',
							prevEl: '.swiper-button-prev.category-prev',
						},
        });
    } else if (screenWidth > 991 && categorySlider != undefined) {
				$('.swiper-container.category-slider').children('.swiper-wrapper').addClass('row')  
        categorySlider.destroy();
        categorySlider = undefined;
        jQuery('.swiper-wrapper').removeAttr('style');
        jQuery('.swiper-slide').removeAttr('style');
		}
		
}


//Swiper plugin initialization
initSwiper();

//Swiper plugin initialization on window resize
$(window).on('resize', function(){
    initSwiper();        
});

	var partnersSlider = new Swiper('.swiper-container.partners-list', {
		// autoplay: true,
		slidesPerView: 4,
		speed: 400,
		grabCursor: true,
		spaceBetween: 30,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next.partners-list-next',
			prevEl: '.swiper-button-prev.partners-list-prev',
		},
		breakpoints: {
			992: {
				slidesPerView: 3,
				centeredSlides: false,
			},
			576: {
				slidesPerView: 2,
				centeredSlides: false,
			},
		},
});
	var reviewsSlider = new Swiper('.swiper-container.reviews-list', {
		// autoplay: true,
		slidesPerView: 3,
		loop: true,
		speed: 400,
		grabCursor: true,
		spaceBetween: 120,
		centeredSlides: true,
		navigation: {
			nextEl: '.swiper-button-next.reviews-list-next',
			prevEl: '.swiper-button-prev.reviews-list-prev',
		},
		breakpoints: {
			992: {
				slidesPerView: 2,
				centeredSlides: false,
			},
			768: {
				slidesPerView: 1,
			},
		},
});

	var imagesSlider= new Swiper('.swiper-container.gallery-img', {
		// autoplay: true,
		effect: 'flip',
		speed: 400,
		grabCursor: true,
		navigation: {
			nextEl: '.swiper-button-next.gallery-img-next',
			prevEl: '.swiper-button-prev.gallery-img-prev',
		},
});
	var bannerSlider= new Swiper('.swiper-container.banner-slider', {
		effect: 'fade',
		// autoplay: true,
		speed: 0,
		grabCursor: true,
		slideActiveClass: 'swiper-slide-active animated',
		navigation: {
			nextEl: '.swiper-button-next.banner-next',
			prevEl: '.swiper-button-prev.banner-prev',
		},
});

	$( "#city" ).selectmenu();

	$( "#sort" ).selectmenu();

	$( "#cons" ).selectmenu();

	$( "#color" ).selectmenu();



	// var header = $('.header-mobile'),
	// scrollPrev = 0;
	
	// $(window).scroll(function() {
	// 	var scrolled = $(window).scrollTop();
	
	// 	if ( scrolled > $('.section-halls').offset().top && scrolled > scrollPrev || scrolled < 500) {
	// 		header.removeClass('fixed');
	// 		$('.go-top').addClass('fixed');
	// 	} else {
	// 		header.addClass('fixed');
	// 	}
	// 	if (scrolled < 500) {
	// 		$('.go-top').removeClass('fixed');
	// 	}
	// 	scrollPrev = scrolled;
	// });




})