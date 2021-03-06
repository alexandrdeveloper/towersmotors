$(function() {

	
	$(window).ready(function(){		
		if ($(this).innerWidth() < 767) {
			$('.numbered-list, .team-list, .brand-container, .dillers-container, .video-feedbacks, .screenshot, .footer-brands, .footer-services').jScrollPane({
				horizontalArrowPositions: true
			});
		} else {
			return false;
		}
	});

	
	

	$('.input-phone').inputmask("+ 7 (999) 999 - 99 - 99");

	let appealSlider = $('.appeal-slider');
	let dillersSlider = $('.dillers-slider');
	let videoFeedbacks = $('.video-feedbacks__slider');
	let screenshotFeedback = $('.screenshot-feedback__slider');
	let imageSlider = $('.image-slider__slider');

	appealSlider.slick({
		slidesToShow: 1,
		prevArrow: $('.appeal .slider-arrow_prev'),
		nextArrow: $('.appeal .slider-arrow_next'),
		dots: true 
	});	

	dillersSlider.slick({
		slidesToShow: 3,
		centerMode: true,
		centerPadding: '10px',
		prevArrow: $('.dillers .slider-arrow_prev'),
		nextArrow: $('.dillers .slider-arrow_next'),
		dots: true,
		responsive: [{
			breakpoint: 767,
			settings: "unslick",
		}]
	});
	$(window).resize(function(){		
		dillersSlider.slick('resize');
	});

	videoFeedbacks.slick({
		slidesToShow: 2,
		prevArrow: $('.video-feedbacks .slider-arrow_prev'),
		nextArrow: $('.video-feedbacks .slider-arrow_next'),
		dots: true,
		responsive: [{
			breakpoint: 767,
			settings: "unslick",
		}]
	});
	$(window).resize(function(){		
		videoFeedbacks.slick('resize');
	});

	screenshotFeedback.slick({
		slidesToShow: 4,
		prevArrow: $('.screenshot-feedback .slider-arrow_prev'),
		nextArrow: $('.screenshot-feedback .slider-arrow_next'),
		dots: true,
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
			}
		},{
			breakpoint: 767,
			settings: "unslick",
		}]
	});
	$(window).resize(function(){		
		screenshotFeedback.slick('resize');
	});

	imageSlider.slick({
		slidesToShow: 1,
		prevArrow: $('.image-slider .slider-arrow_prev'),
		nextArrow: $('.image-slider .slider-arrow_next'),
		dots: true,

	});
	$(window).resize(function(){		
		imageSlider.slick('resize');
	});

	let vacanciesSlider = $('.vacancies-list');

	vacanciesSlider.slick({
		slidesToShow: 1,
		prevArrow: $('.vacancies-content .slider-arrow_prev'),
		nextArrow: $('.vacancies-content .slider-arrow_next'),
		dots: true,
	});
	$(window).resize(function(){		
		vacanciesSlider.slick('resize');
	});

	$('div.tab-controls__list').on('click', '.tab-controls__toggle:not(.tab-controls__toggle_active)', function() {
		$(this)
		  .addClass('tab-controls__toggle_active').siblings().removeClass('tab-controls__toggle_active')
		  .closest('.tab-controls').closest('.workers-tab').find('.tab-content').find('.workers-tab__item').removeClass('workers-tab__item_active').eq($(this).index()).addClass('workers-tab__item_active');
	  });

	$('.contacts-tab__controls').on('click', '.theme-toggle:not(.theme-toggle_active)', function() {
		$(this)
		  .addClass('theme-toggle_active').siblings().removeClass('theme-toggle_active')
		  .closest('.contacts-tab__controls').next('.contacts-tab__content').find('.contacts-tab__item').removeClass('contacts-tab__item_active').eq($(this).index()).addClass('contacts-tab__item_active');
	});

	$('.theme-tab__controls').on('click', '.theme-toggle:not(.theme-toggle_active)', function() {
		$(this)
		  .addClass('theme-toggle_active').siblings().removeClass('theme-toggle_active')
		  .closest('.theme-tab__controls').next('.theme-tab__content').find('.theme-tab__item').removeClass('theme-tab__item_active').eq($(this).index()).addClass('theme-tab__item_active');
	});


	$('.menu-toggle').on('click', function(e){
		e.preventDefault();
		$('.header-top').addClass('header-top_mobile-visible');
		$('.menu-close').fadeIn(300);
		$(this).fadeOut(300);
	});

	$('.menu-close').on('click', function(e){
		e.preventDefault();
		$(this).fadeOut(300);
		$('.header-top').removeClass('header-top_mobile-visible');
		$('.menu-toggle').fadeIn(300);
	});

	$('.submenu>a').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('opened');
		$('.submenu-list').slideToggle();

	});

	$('.gallery-popup').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});

	
	var elem = $('.quiz'),
		pos = elem.offset(), 
		elem_left = pos.left,
		elem_top = pos.top, 
		elem_width = elem.width(),
		elem_height = elem.height(),
		x_center, 
		y_center;
	
	$('.quiz').mousemove(function(e){    
	
		x_center = ( elem_width / 2 ) - ( e.pageX - elem_left );
		y_center = ( elem_height / 2 ) - ( e.pageY - elem_top );
	
		$('.mouse-parallax').each(function(){
		var speed = $(this).attr('data-speed'),  
			xPos = Math.round(x_center/50*speed),
			yPos = Math.round(y_center/60*speed); 
	
		if (yPos < 0)
			yPos = -2*speed;
	
		$(this).css('transform', 'translate3d('+xPos+'px, '+yPos+'px, 0px)');
			});
		});

		
		
		
		
		


	

});




