// 图片瀑布流JS
// 

window.onload = function() {
	imgLocation("content", "list");

	//模拟json数据
	var imgData = {
		"data": [{
			"src": "1.jpg"
		}, {
			"src": "2.jpg"
		}, {
			"src": "3.jpg"
		}, {
			"src": "4.jpg"
		}, {
			"src": "5.jpg"
		}, {
			"src": "6.jpg"
		}, {
			"src": "7.jpg"
		}, {
			"src": "8.jpg"
		}, {
			"src": "9.jpg"
		}, {
			"src": "10.jpg"
		}, {
			"src": "11.jpg"
		}]
	}

	window.onscroll = function() {
		if (checkFlag()) {
			// 遍历数据，并且创建图片元素进行加载
			for (var i = 0; i < imgData.data.length; i++) {
				var oimgsrc = "image/" + imgData.data[i].src;
				var listCon = $("#content").append("<div class='list'>" + "<div class='imgBox'>" + "<img src= " + oimgsrc + ">" +
					"</div>" + "</div>");
			}
			imgLocation("content", "list"); //对加载的图片排位
		}
	}
}

// 检测页面滚动加载数据
function checkFlag() {
	var Boxparent = $("#content");
	var clist = getChildElemant(Boxparent, "list");
	var lastBoxHeight = clist[clist.length - 1].offsetTop;
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	var pageHeight = document.documentElement.clientHeight || document.body.clientHeight;
	// console.log(lastBoxHeight,scrollTop,pageHeight);
	if (lastBoxHeight < scrollTop + pageHeight) {
		return true;
	}
}

// 对图片重新排位
function imgLocation(parent, clsName) {
	// 将parent下面的content全部取出
	var clist = getChildElemant(parent, clsName);
	// console.log(clist);
	var imgwidth = clist[0].offsetWidth;
	var cols = Math.floor(document.documentElement.clientWidth / imgwidth);
	var cparentWidth = imgwidth * cols + "px";
	$("#content").css({
		"width": cparentWidth,
		"margin": "0 auto"
	})

	var BoxheightArr = [];
	for (var i = 0; i < clist.length; i++) {
		if (i < cols) {
			BoxheightArr[i] = clist[i].offsetHeight; //offsetheight:获取对象相对于版面或由父坐标 offsetParent 属性指定的父坐标的高度
			//console.log(BoxheightArr[i]);
		} else {
			var minheight = Math.min.apply(null, BoxheightArr); //找到一排中高度最小的
			var minIndex = getminheightLocation(BoxheightArr, minheight);
			//console.log(minheight);
			clist[i].style.position = "absolute";
			clist[i].style.top = minheight + "px";
			clist[i].style.left = clist[minIndex].offsetLeft + "px";
			BoxheightArr[minIndex] = BoxheightArr[minIndex] + clist[i].offsetHeight; //重新存放数组的高度
		}
	}
}

// 计算一排中最小的高度在数组中是第几个
function getminheightLocation(BoxheightArr, minheight) {
	for (var i in BoxheightArr) {
		if (BoxheightArr[i] == minheight) {
			return i;
		}
	}
}

//寻找parent下的所有的className,返回一个className的数组
function getChildElemant(parent, clsName) {
	var contentArr = [];
	var allcontent = $("#content").children();
	for (var i = 0; i < allcontent.length; i++) {
		if (allcontent[i].className == clsName) {
			contentArr.push(allcontent[i]); //传入数组
		}
	}
	return contentArr; //返回数组 
}
