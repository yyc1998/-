// 轮播图左侧菜单
$('.cate-item').hover(function() {
	$(this).children('.cate-more').show();
}, function() {
	$(this).children('.cate-more').hide();
});

// 头部浮动
jQuery(".weixinMaina").hover(function() {
	jQuery(".weixinBota").css("display", "block");
}, function() {
	jQuery(".weixinBota").css("display", "none");
});
jQuery(".so_li").hover(function() {
	jQuery(".selectbox-wrapper").css("display", "block");
}, function() {
	jQuery(".selectbox-wrapper").css("display", "none");
});
var goNav1 = jQuery("#floatSearch");
var sct1 = 270;

function heartBeat1() {
	try {
		((document.documentElement.scrollTop + document.body.scrollTop) > sct1) ? goNav1.fadeIn(): goNav1.fadeOut();
	} catch (e) {}
}

function callback1() {
	try {
		((document.documentElement.scrollTop + document.body.scrollTop) > sct1) ? goNav1.fadeIn(): goNav1.fadeOut();
		window.setInterval("heartBeat1()", 1);
	} catch (e) {}
}
callback1();

//页面滚动,back出现
function backTop() {
	if ($(window).scrollTop() > 200) {
		$(".backTop").fadeIn();
	} else {
		$(".backTop").fadeOut();
	};
};
backTop(); //默认执行
$(window).scroll(backTop);

//回到顶部
$(".backTop,#backTop").click(function() {
	$('body,html').animate({
		scrollTop: 0
	}, 1000);
	return false;
});


$('.drop-down').hover(function() {
	$(this).children('.drop-down-con').fadeToggle()
}, function() {
	$(this).children('.drop-down-con').fadeToggle()
});


jQuery(function() {
	jQuery(".r_soo").mouseover(function() {
		jQuery(this).addClass('r_s').siblings().removeClass('');
		jQuery('.r_soo .r_so').show();
	}).mouseout(function() {
		jQuery('.r_soo .r_so').hide();
	});
})


jQuery(".qq-join").hover(function() {
		jQuery(".qr-code-h").css("display", "block");
	},
	function() {
		jQuery(".qr-code-h").css("display", "none");
	});




//大幻灯下的推荐滚动产品
(function($) {
	$.fn.changeImg = function(options) {
		var defalutes = {
			'boxWidth': 800,
			'changeLen': 5,
			'changeSpend': 300,
			'autoChange': true,
			'changeHandle': true,
			'autoTime': 5000
		};
		var ops = $.extend(defalutes, options),
			$that = $(this);
		var $changeBox = $that.find(".focus-img-con"),
			$changeUl = $changeBox.find("ul"),
			$changeLi = $changeBox.find("li"),
			$changePrev = '',
			$changeNext = '',
			_len = $changeLi.length,
			_timer = '';
		$changeBox.width(ops.boxWidth);
		if (ops.changeHandle) {
			$changePrev = $that.find(".prev2");
			$changeNext = $that.find(".next2");
		};
		var oWidth = $changeLi.eq(0).outerWidth(),
			bWidth = oWidth * _len,
			_handle = true;
		$changeUl.width(bWidth);
		$changePrev.on("click", function() {
			if (_handle) {
				_handle = false;
				clearInterval(_timer);
				$changeUl.css('right', 'auto');
				for (var i = 0; i < ops.changeLen; i++) {
					var _li = $changeUl.find("li").eq(i).clone(true);
					$changeUl.append(_li);
				};
				$changeUl.stop().animate({
					'left': -oWidth * ops.changeLen
				}, 300, function() {
					for (var i = 0; i < ops.changeLen; i++) {
						$changeUl.find("li").eq(0).remove();
					};
					$changeUl.css('left', 0);
					_handle = true;
				});
				autoPlay();
			};
		});
		var _len1 = _len - 1;
		$changeNext.on("click", function() {
			$changeUl.css('right', 0);
			if (_handle) {
				_handle = false;
				clearInterval(_timer);
				$changeUl.css('left', 'auto');
				for (var i = 0; i < ops.changeLen; i++) {
					var $_li = $changeUl.find("li").eq(_len1).clone(true);
					$changeUl.prepend($_li);
				};
				$changeUl.stop().animate({
					'right': -oWidth * (_len - ops.changeLen)
				}, 300, function() {
					for (var i = 0; i < ops.changeLen; i++) {
						$changeUl.find("li").eq(_len).remove();
					};
					_handle = true;
				});
				autoPlay();
			};
		});

		function autoPlay() {
			if (ops.autoChange) {
				_timer = setInterval(function() {
					$changePrev.click();
				}, ops.autoTime)
			}
		}
		autoPlay();
		return this;
	}
})(jQuery);






// 楼层部分

var ary = location.href.split("&");
jQuery(".txtMarquee-top").slide({
	mainCell: ".bd ul",
	autoPlay: true,
	effect: ary[1],
	vis: 1,
	interTime: ary[3],
	opp: ary[4],
	pnLoop: ary[5],
	trigger: ary[6],
	mouseOverStop: ary[7]
});


var ary = location.href.split("&");
jQuery(".slideBox").slide({
	mainCell: ".bd ul",
	effect: ary[1],
	autoPlay: true,
	trigger: ary[3],
	easing: ary[4],
	delayTime: ary[5],
	mouseOverStop: ary[6],
	pnLoop: ary[7]
});


var ary = location.href.split("&");
jQuery(".txtScroll-top").slide({
	titCell: ".hd ul",
	mainCell: ".bd ul",
	autoPage: true,
	effect: "top",
	autoPlay: true,
	vis: 6
});



var ary = location.href.split("&");
jQuery(".txtScroll-left").slide({
	titCell: ".hd ul",
	mainCell: ".bd ul",
	autoPage: true,
	effect: "left",
	autoPlay: true,
	scroll: 2,
	vis: 2,
	mouseOverStop: false
});


// 产品推荐部分

var ary = location.href.split("&");
jQuery(".slideTxtBox3").slide({
	effect: ary[1],
	autoPlay: ary[2],
	trigger: ary[3],
	easing: ary[4],
	delayTime: ary[5],
	pnLoop: ary[6]
});


var T = document.getElementById("mrb-box");
var X = document.getElementById("catname");
var W = document.getElementById("mrb-b");
T.addEventListener("mouseenter", function(event) {
	X.style.display = "block";
	W.style.display = "none;"
}, false);
T.addEventListener("mouseleave", function(event) {
	X.style.display = "none";
	W.style.display = "block"
}, false);


jQuery(".slideTxtBox2").slide({});

// 百度
var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol +
	"hm.baidu.com/h.js%3Fa630f96b6a9dd549675d26373853f7f1' type='text/javascript'%3E%3C/script%3E"));




var ary = location.href.split("&");
jQuery(".sBox").slide({
	mainCell: ".bd ul",
	autoPlay: true
});


// lbt			 
jQuery(".slideBoxlb").slide({
	mainCell: ".bd ul",
	autoPlay: true
});
// xlb
jQuery(".picScroll-left").slide({
	titCell: ".hd ul",
	mainCell: ".bd ul",
	autoPage: true,
	effect: "left",
	autoPlay: true,
	vis: 4
});
// lbt右
jQuery(".xub-news").slide({});

// 友情链接

var ary = location.href.split("&");
jQuery(".slideTxtBox").slide({
	effect: ary[1],
	autoPlay: ary[2],
	trigger: ary[3],
	easing: ary[4],
	delayTime: ary[5],
	pnLoop: ary[6]
});

// 查找
jQuery(".txtMarquee-left").slide({
	mainCell: ".bd ul",
	autoPlay: true,
	effect: "leftMarquee",
	vis: 2,
	interTime: 50
});
