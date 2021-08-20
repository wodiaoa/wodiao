



let login = document.querySelector('#login')//登录
let enroll = document.querySelector("#enroll")//注册
let search = document.querySelector('#search')//获取搜索按钮

search.addEventListener('mouseover',function () {
	this.style.backgroundColor = 'skyblue'
})
search.addEventListener('mouseout',function () {
	this.style.backgroundColor = '#feb80f'
})

//点击登录跳转到登录页面

//点击注册跳转到注册页面


//倒计时

function shijian(){
	let downTime = new Date()
	let end = new Date('2021-9-20 00:00:00')
	let jishi = end.getTime() - downTime.getTime()
	$("#our").text(Math.floor(jishi/1000/60/60))
	$("#minutes").text(Math.floor(jishi/1000/60%60))
	$("#sec").text(Math.floor(jishi/1000%60))
}
shijian()
time_out = setInterval(shijian,1000)






//轮播图
//文档加载事件
$(function () {
	function lunBo (ele, boxh, photow, photoh, isshow, isshowbtn, controltop, controlsw, controlsh, radius){
		$(ele).sliderbox({
			boxh: boxh,//盒子的高度
			w: photow,//图片的宽度
			h: photoh,//图片的高度
			isShow: isshow||true,//是否显示控制器
			isShowBtn: isshowbtn||false,//是否显示左右按钮
			controltop: controltop||10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW: controlsw||40,//控制按钮宽度
			controlsH: controlsh||15,//控制按钮高度
			radius: radius||0//控制按钮圆角度数
		});
	}
	lunBo('#slider', 450, 970, 450, true, false, )
	lunBo('.slider1', 300, 455, 300, true, false, )
	// lunBo('#banner-slider', 285, 960, 285, true, false)
})


$('.close-menu li').mouseover(function (){
	$(this).addClass('close-active').siblings('').removeClass('close-active');
	$(this).closest('.close').find('.code-list').eq($(this).index()).addClass('on').siblings().removeClass('on')
})
$(window).scroll(function () {
	let top = $('html,body').scrollTop()
	if(top > 600){
		$('#gotop').css("display","block")
	}else{
		$('#gotop').css("display","none")
	}
})
$('#floor-out .floor-index').click(function (){
	let index = $(this).index()
	let out_side = $('.floor').eq(index).offset().top
	$("html,body").animate(
		{scrollTop: out_side}, 1000
	)
})
$('#gotop').click(function (){
	$("html,body").animate({
		scrollTop: 0
	}, 700);
})





