$('.shop-car').click(function (){
	location.href = './购物车.html'
})
$("#login").click(function (){
	location.href = './登录.html'
})
$('.logo').click(
	function (){
		location.href = './index.html'
	}
)
function goZhuanQu(element){
	element.click(function (){
		location.href = './专区.html'
	})
}
goZhuanQu($('#banner a'))
goZhuanQu($('#poster img'))
goZhuanQu($('#everyday a'))
goZhuanQu($('.coat a'))
goZhuanQu($('.bannerPpt a'))
goZhuanQu($('.head-menu span'))
function goXiangQing(element){
	element.click(function (){
		location.href = './商品详情.html'
	})
}
goXiangQing($('.banner-text-top a'))
goXiangQing($('.hot-sale a'))

function goShopCar(element){
	element.click(function (){
		location.href = './购物车.html'
	})
}







