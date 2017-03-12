'use strict';

$('.wp-inner').fullpage({
	page: '.page',
	change: function change(e) {},
	beforeChange: function beforeChange(e) {
		$('.page').eq(e.cur).find('.animated').removeClass('active');
	},
	afterChange: function afterChange(e) {
		$('.page').eq(e.cur).find('.animated').addClass('active');
		if (Number(e.cur) === 3) {
			$('.gonextpage').addClass('active');
			$('.gonextpage').data('dir', 'movePrev');
		} else {
			$('.gonextpage').removeClass('active');
			$('.gonextpage').data('dir', 'moveNext');
		}
	},
	orientationchange: function orientationchange() {}
});
$('.page').on('change', function () {});

$('.gonextpage').on('click', function (e) {
	e.preventDefault();
	$.fn.fullpage[$(this).data('dir')](true);
});

$(document).ready(function () {
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		slidesPerView: 3,
		paginationClickable: true,
		spaceBetween: 0,
		freeMode: true,
		lazyLoading: true
	});
	var wq = new Swiper('.wq', {
		freeMode: false,
		lazyLoading: true
	});
	$('.tab li').on('click', function () {
		$('.views').find('.item').hide();
		$('.views').find('.item').eq($(this).index()).show();
	});
});