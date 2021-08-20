let fullPrice = 0
//总价
function priceWhole(){
	$('.shops-car-body li p.one input').change(function () {
		if ($(this).is(':checked')) {
			fullPrice = +$('.shops-car-body p.five input').val() *
				+$('.shops-car-body p.fore .price-one').text()

			//获取选中的标签的内容
			// console.log(+$('.shops-car-body p.fore .price-one').text())
		}
	})
	$('.price-full').text(fullPrice)
}


$('.shops-car-body p.five .add-num').click(function(){
	let goodsSum = +$(this).siblings('input').val()
	goodsSum++
	$(this).siblings('input').val(goodsSum)
	priceWhole()
		//获取选中的标签的内容
		// console.log(+$('.shops-car-body p.fore .price-one').text())
})
$('.shops-car-body p.five .reduce-num').click(function(){
	let goodsSum = +$(this).siblings('input').val()
	if (goodsSum <= 1) return
	goodsSum--
	$(this).siblings('input').val(goodsSum)
	priceWhole()
})



	// console.log($(this).is(':checked'))
	//获取复选框选中状态
	// console.log(fullPrice)











