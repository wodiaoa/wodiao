$("#exzoom").exzoom({
	autoPlay:false,
});


let value = $('.quantity input').val()
$('.quantity .up-arrow').click(function(){
	value++;
	$(this).siblings('input').val(value)
})
$('.quantity .down-arrow').click(function(){
	if (value <=1 ) return;
	value--;
	$(this).siblings('input').val(value)
})
$('.color-class-right span').click(function (){
	$(this).addClass('span-select').siblings('span').removeClass('span-select')
})
$('.stages-right span').click(function (){
	$(this).addClass('stages-span-active').siblings('span').removeClass('stages-span-active')
})
$('.by span').click(function (){
	if($(this).index() === 1){
		location.href = './购物车.html'
	}
})
$('.comment-menu-top span').click(function (){
	$(this).addClass('span-comment-active').siblings('span').removeClass('span-comment-active')
		.closest('.comment-menu-top').closest('.comment-menu').find('.comment-cont-foot').eq($(this).index())
		.addClass('comment-cont-active').siblings('.comment-cont-foot').removeClass('comment-cont-active')
})












