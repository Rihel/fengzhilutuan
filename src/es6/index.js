$(function(){

	$('.wp-inner').fullpage({
		page: '.page',
		change: function (e) {

		},
		beforeChange: function (e) {
			$('.page').eq(e.cur).find('.items').removeClass('active');
		},
		afterChange: function (e) {
			$('.page').eq(e.cur).find('.items').addClass('active');
		},
		orientationchange: function () {}
	});
	$('.page').on('change',function(){

	})
})
    