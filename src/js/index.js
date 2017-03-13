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
		var i = $(this).index();
		$('.views').find('.item').hide();
		$('.views').find('.item').eq(i).show();
		if (i === 1) {
			$(this).parent().addClass('done');
		} else {
			$(this).parent().removeClass('done');
		}
	});

	var i = 0;

	function qiehuan() {
		$('.imgs').find('img').removeClass('active');
		$('.imgs').find('img').eq(i).addClass('active');
	}

	$('.prex').click(function () {
		if (i <= 0) {
			i = 4;
			qiehuan();
		} else {
			i--;
			qiehuan();
		}
	});
	$('.next').click(function () {
		if (i >= 4) {
			i = 0;
			qiehuan();
		} else {
			i++;
			qiehuan();
		}
	});

	$('.libaooff').click(function (e) {
		$('.mark').show();
		$('.libaobox').show();
	});
	$('.libaobox .close').click(function (e) {
		$('.libaobox').hide();
		$('.mark').hide();
	});

	$('.yuyue').click(function (e) {
		$('.mark').show();
		$('#yuyuebox').show();
	});
	$('#yuyuebox .close').click(function (e) {
		$('#yuyuebox').hide();
		$('.mark').hide();
	});

	$('#yuyue').click(function (event) {
		event.preventDefault();
		$(this).parent().hide();
		$('#surebox').show();
	});
	$('#surebox .close').click(function () {
		$(this).parent().hide();
		$('.mark').hide();
	});

	$('.zhaohuan').click(function (event) {
		$('.zhaohuanbox').show();
		$('.mark').show();
	});
	$('.zhaohuanbox .close').click(function () {
		$(this).parent().hide();
		$('.mark').hide();
	});
});