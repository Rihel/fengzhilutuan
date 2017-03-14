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

$('.gonextpage').on('click', function (e) {
	e.preventDefault();
	$.fn.fullpage[$(this).data('dir')](true);
});

$(document).ready(function () {

	$('.tab li').on('click', function () {
		var i = $(this).index();
		$('.views').find('.item').hide();
		$('.views').find('.item').eq(i).show();
		if (i === 1) {
			$(this).parent().addClass('done');
			var wq = new Swiper('.wq');
		} else {
			$(this).parent().removeClass('done');
			var swiper = new Swiper('.sz', {
				pagination: '.swiper-pagination',
				slidesPerView: 3,
				paginationClickable: true,
				spaceBetween: 0,
				freeMode: true,
				lazyLoading: true
			});
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

	$('.page1 .btn').click(function () {
		$('#yuyuebox').show();
		$('.mark').show();
	});

	$('.close').click(function () {
		$(this).parent().hide();
		$('.mark').hide();
	});

	$('#yuyue').click(function () {
		$(this).parent().hide();
		$('#surebox').show();
	});

	$('#sureyuyue').click(function () {
		$(this).parent().hide();
		$('.mark').hide();
	});

	$('.libao li').click(function () {
		$('#libao').show();
		$('.mark').show();
	});

	$('.baoxiang li').click(function () {
		$('#friend').show();
		$('.mark').show();
	});
	$('.page2 .btn').click(function () {
		$('.zhaohuanbox').show();
		$('.mark').show();
	});
});