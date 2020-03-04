$(function() {
	//绑定滚动条事件 
	//绑定滚动条事件 
	$(window).bind("scroll", function() {
		var sTop = $(window).scrollTop();
		var sTop = parseInt(sTop);
		if (sTop >= 320) {
			if (!$(".title").is(":visible")) {
				try {
					$(".title").slideDown();
				} catch (e) {
					$(".title").show();
				}
			}
		} else {
			if ($(".title").is(":visible")) {
				try {
					$(".title").slideUp();
				} catch (e) {
					$(".title").hide();
				}
			}
		}
	});
})

// $('html, body').animate({
// 	scrollTop: $('#shangpin').offset().top
// }, 1000)
// $('html, body').animate({
// 	scrollTop: $('#pingjia').offset().top
// }, 1000)
// $('html, body').animate({
// 	scrollTop: $('#dianpu').offset().top
// }, 1000)
// $('html, body').animate({
// 	scrollTop: $('#xiangqing').offset().top
// }, 1000)
// $('html, body').animate({
// 	scrollTop: $('#tuijian').offset().top
// }, 1000)
