$('.nav_menu').click(function() {
	if ($(this).hasClass('ak')) {
		$(this).removeClass('ak');
		$('.yl-MenuCon').css('height', 0);
	} else {
		$(this).addClass('ak');
		$('.yl-MenuCon').css('height', '287');
	}
});

var ckwid = $(window).width();

if (ckwid < 992) {
	$('.new .service_top05_a a').attr('href', 'javascript:void(0)');
}
var aa = true;
if (ckwid < 768) {
	setInterval(function() {
		if (aa) {
			$('.app-develop-box .wow:last-child').css('display', 'block');
			$('.app-develop-box .wow:first-child').css('display', 'none')
			aa = false;
		} else {
			$('.app-develop-box .wow:first-child').css('display', 'block');
			$('.app-develop-box .wow:last-child').css('display', 'none');
			aa = true;
		}

	}, 3000);
}
$(function() {
	var chs = $('.new_content').children();
	$(chs).css('text-indent', '32px');
	for (var i = 0; i < chs.length; i++) {
		if ($(chs[i]).find('img').attr('src') != null && $(chs[i]).find('img').attr('src') != "") {
			$(chs[i]).css('text-indent', '0');
		} else if ($(chs[i]).find('a').attr('href') != null && $(chs[i]).find('a').attr('href') != "") {
			$(chs[i]).children('a').html($(chs[i]).children('a').text().trim());
		} else {
			$(chs[i]).html($(chs[i]).text().trim());
		}
	}

	setTimeout(function() {
		$('.service-page>div').css('opacity', 1);
	}, 200);

	setTimeout(function() {
		$('.service-page>section').css('opacity', 1);
	}, 200);

})
