
$('.wp-inner').fullpage({
	page: '.page',
	change: function () {},
	beforeChange: function (e) {
		console.log(e.next,e.cur);
	},
	afterChange: function () {},
	orientationchange: function () {}
});
    