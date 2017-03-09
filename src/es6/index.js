$('.wp-inner').fullpage({
	page: '.page',
	change: function (e) {

	},
	beforeChange: function (e) {
		$('.page').eq(e.cur).find('.animated').removeClass('active');
	},
	afterChange: function (e) {
		$('.page').eq(e.cur).find('.animated').addClass('active');
		if(Number(e.cur)===3){
			$('.gonextpage').addClass('active');
			$('.gonextpage').data('dir','movePrev');
		}else {
			$('.gonextpage').removeClass('active');
			$('.gonextpage').data('dir','moveNext');
		}
	},
	orientationchange: function () {}
});
$('.page').on('change',function(){

});


$('.gonextpage').on('click', function (e) {
	e.preventDefault();
	$.fn.fullpage[$(this).data('dir')](true);
});