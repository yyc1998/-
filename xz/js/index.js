function WeiXin() {
	var ua = window.navigator.userAgent.toLowerCase();
	if (ua.match(/MicroMessenger/i) == 'micromessenger') {
		return true;
	} else {
		return false;
	}
}
// 直接调用即可
if (WeiXin()) {
	// document.getElementById("btn").onclick = function() {
	// 	//根据id获取超链接,设置href属性
	// 	var aObj = document.getElementById("ak");
	// 	aObj.href = "http://www.sougou.com";
	// };
	// alert("1")
} else {
	window.location = "llqxz.html";
}
