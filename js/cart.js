$(function () {
    /* 
      1 计算数量
      2 计算小计金额
      3 计算选中商品的总数量 
    */

    //增加数量
    $(".add-num").click(function () {
        //获取文本框中的值(数量)
        let num = $(this).siblings("input").val();
        //递增
        // num = window.parseInt(num) + 1;
        // num++  // 可以进行类型转换
        // ++num //可以进行类型转换
        num++;
        //把值赋回页面
        $(this).prev().val(num);
        // console.log(num);
        //获取单价
        //let price = $(this).closest("p.five").siblings("p.fore").find(".price-one").text();
        //计算小计金额
        //let subtotal = num * price;
        //把金额显示在页面上
        //$(this).closest("li").siblings(".list_sum").find("span").text(subtotal.toFixed(2));
        // console.log("单价", price, "小计", subtotal);
        //计算选中商品的数量和金额
        calcCountPrice()

    })
    //减少数量
    $(".reduce-num").click(function () {
        //获取文本框中的值(数量)
        let num = $(this).siblings("input").val();
        //递减  
        num--;
        if (num < 1) {
            num = 1;
        }
        //把值赋回页面
        $(this).next().val(num);
        // console.log(num);

        //获取单价
        let price = $(this).closest("p.five").siblings("p.fore").find(".price-one").text();
        //计算小计金额
        let subtotal = num * price;
        //把金额显示在页面上
        //$(this).closest("li").siblings(".list_sum").find("span").text(subtotal.toFixed(2));
        // console.log("单价", price, "小计", subtotal);
        //计算选中商品的数量和金额
        calcCountPrice()
    })
    // 单选框的点击事件[点击事件或者改变事件都可以]
    /* 
       思路：
          当事件发生后：
              1 获取选中的商品，遍历每个商品取出对应的数量进行累加。 
              2 获取选中子项目的个数，以及子项目的总个数，
                比较两个数量，如果相等就全选，否则就取消全选
    */
    $("p.one input").click(function () {
        // $(this).prop("checked")
        isAllSelect();
        //    计算选中商品的数量和金额
        calcCountPrice()
    })
    /* 是否全选 */
    function isAllSelect() {
        // 1获取选中子项目的个数
        let selNum = $("p.one input:checked").length;
        //2 子项目的总个数
        let count = $("p.one input").length;
        //console.log("选中的个数", selNum, "总数", count);
        if (selNum === count) {
            $(".all_check").prop("checked", true);
        } else {
            $(".all_check").prop("checked", false);
        }
    }
    /*
      顶部的全选框:
      用自己的状态决定子项目的状态 
     */
    $(".all_check").click(function () {
        //获取自己的状态
        let bool = $(this).prop("checked");
        // console.log(bool);
        //把自己的状态赋给子项目
        $("p.one input").prop("checked", bool);
        // 计算选中商品的数量和金额
        calcCountPrice()

    })

    /* 删除所有选中商品
      思路：
       1 找到所有的选中商品，调用 remove()方法
       2  取消全选
    */
    /*$(".delallsel").click(function () {
        // alert(666)
        if (window.confirm("确定要删除吗？")) {
            $(".son_check:checked").closest("ul").remove();
            // 计算选中商品的数量和金额
            calcCountPrice()
            //取消全选
            //获取内容区域的子元素，
            let len = $(".order_content").children().length;
            // 如果没有子元素，就取消全选。
            if (len === 0) {
                $(".all_check").prop("checked", false);
            }

        }

        console.log($(".order_content").children().length);
    })*/

    /* 删除当前行
       思路： 
        1  向上查找，找到ul ，直接删除。
        2  计算选中商品的数量和金额
        3  是否全选
    */
    $(".delbtn").click(function () {
        if (window.confirm("确定要删除吗？")) {

            $(this).closest("li").remove();
            //计算选中商品的数量和金额
            calcCountPrice();
            //是否全选
            isAllSelect();
            //获取内容区域的子元素，
            let len = $(".shops-car-body").children().length;
            // 如果没有子元素，就取消全选。
            if (len === 0) {
                $(".all_check").prop("checked", false);
            }
            $('.quanbu').text(len)


        }
    })
    let len = $(".shops-car-body").children().length;
    $('.quanbu').text(len)

    /* 计算选中商品的数量和金额 */
    function calcCountPrice() {
        let count = 0;//总的选中的商品数量
        let total = 0.00;//总金额
        // 1 获取选中的商品
        $("p.one input:checked").each(function (i, v) {
            // console.log(i, v, this);
            //1 计算数量 
            //取出对应的数量
            let num = $(v).parent().siblings("p.five").find("input").val();
            count += window.parseInt(num);
            // console.log("取出对应的数量", num,"总数",count);、
            //2 计算总金额
            let subTotal = (+$(this).parent().siblings("p.fore").find(".price-one").text()) * (+$(v).parent().siblings("p.five").find("input").val());
            // console.log("小计金额:",subTotal);
            // console.log(subTotal);
            total = subTotal;
        })
        //把数量显示在页面上
        $(".shops-car-head-menu p.fr .num-full").text(count)
        //把总金额显示在页面上
        $(".price-full").text(total)
    }
})