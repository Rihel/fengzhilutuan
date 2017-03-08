'use strict';

$('.wp-inner').fullpage({
	page: '.page',
	change: function change() {},
	beforeChange: function beforeChange(e) {
		console.log(e.next, e.cur);
	},
	afterChange: function afterChange() {},
	orientationchange: function orientationchange() {}
});