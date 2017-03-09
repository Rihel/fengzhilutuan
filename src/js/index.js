'use strict';

$(function () {

	$('.wp-inner').fullpage({
		page: '.page',
		change: function change(e) {},
		beforeChange: function beforeChange(e) {
			$('.page').eq(e.cur).find('.items').removeClass('active');
		},
		afterChange: function afterChange(e) {
			$('.page').eq(e.cur).find('.items').addClass('active');
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
});