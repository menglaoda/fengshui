var app = angular.module("myApp",["ngRoute"]);
//点击改变导航栏样式
app.directive("myList",function(){
	return {
		link:function(scope,element,attrs,rootScope){
			element.on("click",function(){
				//清除背景
				element.parent().parent().children().children().removeClass("back");
				//添加背景
				element.addClass("back");
				//切换大的背景图
				if(document.body.offsetWidth>415){
					if(this.getAttribute("id")=="btnlist"){
						document.querySelector(".bjimg").style.background = "url(img/timg1.png) no-repeat #1d1916";
						document.querySelector(".bjimg").style.backgroundSize="100% 100%";					
					}else{
						document.querySelector(".bjimg").style.background = "url(img/timg.png) no-repeat #1d1916";
						document.querySelector(".bjimg").style.backgroundSize="100% 100%";
					}
				}
			})
		}
	}
});
//点击相册小图片
app.directive("myImg",function(){
	return {
		link:function(scope,element,attrs,rootScope){
			element.on("click",function(){
				//切换大图
				console.log(this.getAttribute("src"));
				var heyingbox = document.querySelector(".heyingbox");
         		var oimg = heyingbox.querySelector(".oimg");
         		var heyinglist = document.querySelector(".heyinglist");
                var heyinglist_img = heyinglist.querySelectorAll("img");         		
         		oimg.src=this.getAttribute("src");
         		for(var i=0;i<heyinglist_img.length;i++){
         			heyinglist_img[i].style.border="solid 1px white";
         		}
         		this.style.border= "solid 1px red";
			})
		}
	}
});
//点击相册上一页按钮
var s=0;//按钮变量
app.directive("myBtnup",function(){
	return {		
		link:function(scope,element,attrs,rootScope){			
			element.on("click",function(){
				var heyinglist = document.querySelector(".heyinglist");
				var btnbox = document.querySelector(".btnbox");
				var heyinglist_img = heyinglist.querySelectorAll("img");
			    if(s>0){
			    	 s--;
			    	 console.log(s);
			    	 heyinglist.style.left=660*-s+"px";
			    }
			})
		}
	}
});
//点击相册下一页按钮
app.directive("myBtnnext",function(){
	return {		
		link:function(scope,element,attrs,rootScope){
			element.on("click",function(){
				var heyinglist = document.querySelector(".heyinglist");
				var btnbox = document.querySelector(".btnbox");
				var heyinglist_img = heyinglist.querySelectorAll("img");
			    if(s<2){
			    	s++;
			    	 console.log(s);
			    	 heyinglist.style.left=660*-s+"px";
			    }
			})
		}
	}
});
//video标签展示按钮控件
app.directive("myVide",function(){
	return {		
		link:function(scope,element,attrs,rootScope){
			element.on("mouseover",function(){
                element.attr("controls","controls");
			})
			element.on("mouseout",function(){
                element.removeAttr("controls");
			})
			element.on("click",function(){
                document.querySelector(".vide").play();
                
			})
		}
	}
});
//配置路由
app.config([
	"$routeProvider",
	function($routeProvider){
		$routeProvider.when("/home",{
			templateUrl:"html/home.html"
		})
		.when("/list",{
			templateUrl:"html/list.html"
		})
		.when("/jieda",{
			templateUrl:"html/jieda.html"
		})
		.when("/pingjia",{
			templateUrl:"html/pingjia.html"
		})
		.when("/heying",{
			templateUrl:"html/heying.html"
		})
		.when("/meiti",{
			templateUrl:"html/meiti.html"
		})
		.when("/hezuo",{
			templateUrl:"html/hezuo.html"
		})
		//不合符时跳转到该页面
		.otherwise(
			{redirectTo:"/home"}
		)
	}
])			