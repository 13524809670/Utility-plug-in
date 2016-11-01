//页面加载完后触发
window.onload=function(){
	var obtn =document.getElementById('btn');//获取元素并命名
	var timer = null;//定时器
	var isTop = true;
	var clientHeight= document.documentElement.clientHeight;//可视区高度

	//滚动条滚动时触发
	window.onscroll= function(){
		//获取滚动条距离顶部的距离
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;
		
		//弹出可 获取可是视区的高度
		//alert();

		
		//第一屏可视区隐藏返回顶部图标
		if(osTop >= clientHeight){
			obtn.style.display="block";
		}

		//超过第一屏可视区高度显示返回顶部图标
		else{
			obtn.style.display= "none";
		}



		if(!isTop){
			clearInterval(timer);
		}
		isTop = false;

	}

	obtn.onclick= function(){

		//设置定时器
		timer = setInterval(function(){

			//获取滚动条距离顶部的距离
			var osTop = document.documentElement.scrollTop || document.body.scrollTop;

			//滚动速度
			var ispeed = Math.floor(-osTop / 6);

			//使用定时器不断地减少滚动的高度
			//滚动条距离顶部的高度 - 速度 = 滚动距离
			document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;

			isTop = true;

			//滚动条距离顶部的高度 - 速度 = 滚动距离
			console.log(osTop - ispeed);

			//清除定时器
			if(osTop==0){
				clearInterval(timer);
			}
		},30);
	};
}