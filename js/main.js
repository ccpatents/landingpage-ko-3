var video1;
var video2;
var video3;
var video4;
var video5;
var video6;

AOS.init({
	duration: 800,
	easing: 'slide',
	once: true
});

jQuery(document).ready(function ($) {
	"use strict";

	var siteMenuClone = function () {

		$('.js-clone-nav').each(function () {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function () {

			var counter = 0;
			$('.site-mobile-menu .has-children').each(function () {
				var $this = $(this);

				$this.prepend('<span class="arrow-collapse collapsed">');

				$this.find('.arrow-collapse').attr({
					'data-toggle': 'collapse',
					'data-target': '#collapseItem' + counter,
				});

				$this.find('> ul').attr({
					'class': 'collapse',
					'id': 'collapseItem' + counter,
				});

				counter++;

			});

		}, 1000);

		$('body').on('click', '.arrow-collapse', function (e) {
			var $this = $(this);
			if ($this.closest('li').find('.collapse').hasClass('show')) {
				$this.removeClass('active');
			} else {
				$this.addClass('active');
			}
			e.preventDefault();

		});

		$(window).resize(function () {
			var $this = $(this),
				w = $this.width();

			if (w > 768) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function (e) {
			var $this = $(this);
			e.preventDefault();

			if ($('body').hasClass('offcanvas-menu')) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		})

		// click outisde offcanvas
		$(document).mouseup(function (e) {
			var container = $(".site-mobile-menu");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		});
	};
	siteMenuClone();

	var siteCarousel = function () {
		if ($('.nonloop-block-13').length > 0) {
			$('.nonloop-block-13').owlCarousel({
				center: false,
				items: 1,
				loop: true,
				stagePadding: 30,
				margin: 20,
				autoplay: true,
				smartSpeed: 2000,
				nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
				responsive: {
					768: {
						margin: 30,
						items: 2
					},
					1000: {
						margin: 30,
						items: 3
					},
				}
			});
		}

		if ($('.nonloop-block-14').length > 0) {
			$('.nonloop-block-14').owlCarousel({
				center: false,
				items: 1,
				loop: true,
				stagePadding: 30,
				margin: 20,
				autoplay: true,
				smartSpeed: 2000,
				nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
				responsive: {
					768: {
						margin: 30,
						items: 2
					},
					1000: {
						margin: 30,
						items: 3
					},
					1200: {
						margin: 30,
						items: 4
					}
				}
			});
		}


	};
	siteCarousel();

	var siteStellar = function () {
		$(window).stellar({
			responsive: false,
			parallaxBackgrounds: true,
			parallaxElements: true,
			horizontalScrolling: false,
			hideDistantElements: false,
			scrollProperty: 'scroll'
		});
	};
	siteStellar();


	var siteSticky = function () {
		$(".js-sticky-header").sticky({
			topSpacing: 0
		});
	};
	siteSticky();

	// navigation
	var OnePageNavigation = function () {
		var navToggler = $('.site-menu-toggle');
		$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a, a.js-scroll-trigger[href*='#']:not([href='#'])", function (e) {
			e.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				'scrollTop': $(hash).offset().top
			}, 600, 'easeInOutCirc', function () {
				window.location.hash = hash;
			});

		});
	};
	OnePageNavigation();

	var siteScroll = function () {
		$(window).scroll(function () {

			var st = $(this).scrollTop();

			if (st > 100) {
				$('.js-sticky-header').addClass('shrink');
			} else {
				$('.js-sticky-header').removeClass('shrink');
			}

		})

	};
	siteScroll();

	var tag = document.createElement('script');

	$(function () {
		$("#bgndVideo").YTPlayer();
	});

	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag
		.parentNode
		.insertBefore(tag, firstScriptTag);

	$('.close-modal').click(function () {
		modal_close();
	});

	setTimeout(function () {
		$("#bgndVideo").YTPlayer();
	}, 2000);
});

function onYouTubeIframeAPIReady() {
	video1 = new YT.Player('video1', {
		width: '100%',
		videoId: 'hJuHVgCmoSw',
		events: {
			'onStateChange': onPlayerStateChange
		}
	});

	video2 = new YT.Player('video2', {
		width: '100%',
		videoId: 'sTUkary3hFw',
		events: {
			'onStateChange': onPlayerStateChange
		}
	});

	video3 = new YT.Player('video3', {
		width: '100%',
		videoId: 'BpVwH1zmVSI',
		events: {
			'onStateChange': onPlayerStateChange
		}
	});

	video4 = new YT.Player('video4', {
		width: '100%',
		videoId: 'H3Ex52Rmbtk',
		events: {
			'onStateChange': onPlayerStateChange
		}
	});

	video5 = new YT.Player('video5', {
		width: '100%',
		videoId: 'nQnzZKfBa9o',
		events: {
			'onStateChange': onPlayerStateChange
		}
	});

	video6 = new YT.Player('video6', {
		width: '100%',
		videoId: 'ZSdsWVqKleA',
		events: {
			'onStateChange': onPlayerStateChange
		}
	});
}

function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.ENDED) {
		event.target.stopVideo();
	}
}

function modal_close() {
	if (video1 !== null && video1 !== undefined) {
		video1.pauseVideo();
	}
	if (video2 !== null && video2 !== undefined) {
		video2.pauseVideo();
	}
	if (video3 !== null && video3 !== undefined) {
		video3.pauseVideo();
	}
	if (video4 !== null && video4 !== undefined) {
		video4.pauseVideo();
	}
	if (video5 !== null && video5 !== undefined) {
		video5.pauseVideo();
	}
	if (video6 !== null && video6 !== undefined) {
		video6.pauseVideo();
	}
}