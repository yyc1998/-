// $('.wchat').hover(function(){
// 		$('.wem1').stop().fadeIn();
// 	},function(){
// 		$('.wem1').stop().fadeOut();
// 	});
// 	// 底部微博二维码
// 	$('.weibo').hover(function(){
// 		$('.wem2').stop().fadeIn();
// 	},function(){
// 		$('.wem2').stop().fadeOut();
// 	});
/*PC悬浮*/
$('.sidetop').hide();
$('.sideewm').hover(function() {
	$('.ewBox').stop().fadeIn();
}, function() {
	$('.ewBox').stop().fadeOut();
});

$('.sideetel').hover(function() {
	$(this).children('.telBox').stop().fadeIn();
}, function() {
	$(this).children('.telBox').stop().fadeOut();
});
$(window).scroll(function() {
	if ($(window).scrollTop() < 100) {
		$('.sidetop').hide();
	} else {
		$('.sidetop').show();
	}

});

function goTop() {
	$('html,body').animate({
		'scrollTop': 0
	}, 600); //滚回顶部的时间，越小滚的速度越快~
}
$(window).scroll(function() {
	if ($(window).scrollTop() < 100) {
		$('.sidetop').hide();
	} else {
		$('.sidetop').show();
	}

});

/*结束*/




$('#moar').click(function() {
	var section = document.createElement('section');
	section.className = 'section--purple wow fadeInDown';
	$(this).parentNode.insertBefore(section, this);
})



$(".icons li").mouseover(function() {
	$(this).addClass("active");
});
$(".icons li").mouseleave(function() {
	$(this).removeClass("active")
});
$(".icons .up").click(function() {
	$('html,body').animate({
		'scrollTop': 0
	}, 600); //滚回顶部的时间，越小滚的速度越快~
});
$(".switch").click(function() {

	if ($(this).hasClass("off")) {
		$(this).removeClass("off");
		$(".icons").removeClass("close");
	} else {
		$(this).addClass("off");
		$(".icons").addClass("close");
	}
})

bddh = setInterval(function() {
	if ($('.lxb-hide-btn').length) {
		$('.lxb-hide-btn').click()
		console.log('111')
		clearInterval(bddh)
	}
}, 100)
