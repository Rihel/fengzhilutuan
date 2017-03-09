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
		},
		orientationchange: function orientationchange() {}
	});
	$('.page').on('change', function () {});
});