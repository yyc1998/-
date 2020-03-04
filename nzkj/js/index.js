function ChangeDiv(divId, divName, zDivCount) {
	for (i = 0; i <= zDivCount; i++) {
		document.getElementById(divName + i).style.display = "none";
	}
	document.getElementById(divName + divId).style.display = "block";
}


function Change(divId, divName, zDivCount) {
	for (i = 0; i <= zDivCount; i++) {
		document.getElementById(divName + i).style.display = "none";
	}
	document.getElementById(divName + divId).style.display = "block";
}


var A = document.getElementById("cpjj-box");
var B = document.getElementById("jj1");
B.addEventListener("mouseenter", function(event) {
	A.style.backgroundImage = 'url(img/cpjj-1.jpg)';
}, false);
var C = document.getElementById("jj2");
C.addEventListener("mouseenter", function(event) {
	A.style.backgroundImage = 'url(img/cpjj-2.jpg)';
}, false);
var D = document.getElementById("jj3");
D.addEventListener("mouseenter", function(event) {
	A.style.backgroundImage = 'url(img/cpjj-3.jpg)';
}, false);
var E = document.getElementById("jj4");
E.addEventListener("mouseenter", function(event) {
	A.style.backgroundImage = 'url(img/cpjj-4.jpg)';
}, false);


var T = document.getElementById("jj1");
var X = document.getElementById("box_hidden1");
T.addEventListener("mouseenter", function(event) {
	X.style.display = "block";
}, false);
var T = document.getElementById("jj1");
var U = document.getElementById("box_hidden1");
T.addEventListener("mouseout", function(event) {
	U.style.display = "none";
}, false);
var T = document.getElementById("jj2");
var W = document.getElementById("box_hidden2");
T.addEventListener("mouseenter", function(event) {
	W.style.display = "block";
}, false);
var T = document.getElementById("jj2");
var I = document.getElementById("box_hidden2");
T.addEventListener("mouseout", function(event) {
	I.style.display = "none";
}, false);
var T = document.getElementById("jj3");
var Y = document.getElementById("box_hidden3");
T.addEventListener("mouseenter", function(event) {
	Y.style.display = "block";
}, false);
var T = document.getElementById("jj3");
var O = document.getElementById("box_hidden3");
T.addEventListener("mouseout", function(event) {
	O.style.display = "none";
}, false);
var T = document.getElementById("jj4");
var Z = document.getElementById("box_hidden4");
T.addEventListener("mouseenter", function(event) {
	Z.style.display = "block";
}, false);
var T = document.getElementById("jj4");
var P = document.getElementById("box_hidden4");
T.addEventListener("mouseout", function(event) {
	P.style.display = "none";
}, false);


layui.use(['carousel', 'form'], function() {
	var carousel = layui.carousel,
		form = layui.form;

	//常规轮播
	carousel.render({
		elem: '#test1',
		arrow: 'always'
	});

	//改变下时间间隔、动画类型、高度
	carousel.render({
		elem: '#test2',
		interval: 1800,
		anim: 'fade',
		height: '120px'
	});

	//设定各种参数
	var ins3 = carousel.render({
		elem: '#test3'
	});
	//图片轮播
	carousel.render({
		elem: '#test10',
		width: '778px',
		height: '440px',
		interval: 5000
	});

	//事件
	carousel.on('change(test4)', function(res) {
		console.log(res)
	});

	var $ = layui.$,
		active = {
			set: function(othis) {
				var THIS = 'layui-bg-normal',
					key = othis.data('key'),
					options = {};

				othis.css('background-color', '#5FB878').siblings().removeAttr('style');
				options[key] = othis.data('value');
				ins3.reload(options);
			}
		};

	//监听开关
	form.on('switch(autoplay)', function() {
		ins3.reload({
			autoplay: this.checked
		});
	});

	$('.demoSet').on('keyup', function() {
		var value = this.value,
			options = {};
		if (!/^\d+$/.test(value)) return;

		options[this.name] = value;
		ins3.reload(options);
	});

	//其它示例
	$('.demoTest .layui-btn').on('click', function() {
		var othis = $(this),
			type = othis.data('type');
		active[type] ? active[type].call(this, othis) : '';
	});
});
