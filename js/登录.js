$(".login-sub").click(function () {
	$(this).addClass("login-sub-display-none").siblings('.login-sub')
		.removeClass("login-sub-display-none")
	$(this).siblings('.login-box-body').eq($(this).index())
		.addClass('login-box-display-none').siblings('.login-box-body')
		.removeClass('login-box-display-none')
})
$('.login-menu-span').click(function () {
	$(this).addClass('login-box-menu-span-active').siblings('.login-menu-span')
		.removeClass('login-box-menu-span-active').closest('.login-box-menu')
		.siblings('.login-content').eq($(this).index()).removeClass('login-content-display-none')
		.siblings('.login-content').addClass('login-content-display-none')

})