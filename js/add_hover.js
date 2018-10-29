$(function () {

    //下拉列表
    $("input[name='one']").click(function () {
        $(this).parent().siblings().children(".one_select").slideDown();
        event.stopPropagation();
        console.log("下拉1完成");
    });

    $(".one_select li").click(function () {
        $(this).parent().siblings().slideUp();
        $(this).parent().siblings(".two_select").slideDown();
        $(this).addClass("li_click").children().addClass("i_click").parent().siblings().removeClass("li_click").children().removeClass("i_click");
        event.stopPropagation();
        console.log("下拉2完成");
    });

    $(".two_select li").click(function () {
        $(this).parent().siblings(".three_select").slideDown();
        $(this).addClass("li_click").children().addClass("i_click").parent().siblings().removeClass("li_click").children().removeClass("i_click");
        event.stopPropagation();
        console.log("下拉3完成");
    });

    //选择
    $(".three_select li").click(function () {
        $(this).parents(".select_box").siblings().children("input").val($(this).text());
        $(this).parent().slideUp().siblings().slideUp();
        $(".select_box li").removeClass("li_click").children().removeClass("i_click");
        event.stopPropagation();
        console.log("选择完成");
    });

    //阻止冒泡事件
    $(document).click(function (event) {
        $(".select_box").children().slideUp();
        event.stopPropagation();
        console.log("阻止冒泡事件完成");
    });

    //删除
    $(document).on('click', '.delete', function () {
        $(this).parents(".table_children_header").remove();
        console.log("删除案例完成")
    });

    //上下架
    var arr = [
        "img/case/shangjia.png",
        "img/case/xiajia.png",
    ];
    $(document).on('click', '.shelf', function () {
        if ($(this).attr("src") == arr[0]) {
            $(this).attr("src", arr[1])
        } else {
            $(this).attr("src", arr[0])
        }
        console.log("上下架完成");
    });

    //返回
    $(".reset").click(function () {
        window.open("hover.html", "_self");
    })

})