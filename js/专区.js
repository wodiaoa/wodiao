
//手风琴页面
$(".hot-sale-body-right-list li").mouseover(function (){
	$(this).find('p').addClass('hot-sale-body-right-li-active')
		.closest('li').siblings('li').find('p')
		.removeClass('hot-sale-body-right-li-active')
	$(this).find('.hot-sale-body-right-list-strong').addClass("hot-sale-body-right-list-strong-active")
		.closest('li').siblings('li').find('.hot-sale-body-right-list-strong')
		.removeClass('hot-sale-body-right-list-strong-active')
})
//手风琴选项卡
$(".hot-sale-body-right-title").mouseover(function (){
	$(this).addClass('hot-sale-body-right-title-active').siblings('.hot-sale-body-right-title')
		.removeClass('hot-sale-body-right-title-active')
	$(this).closest('.hot-sale-body-right').find('ul').eq($(this).index()).addClass('hot-sale-body-right-list-date').siblings('ul')
		.removeClass('hot-sale-body-right-list-date')
})