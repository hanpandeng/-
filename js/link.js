$(function () {
    //日历
    $("#time").shijian();

    //重置
    $(".reset").click(function () {
        $("#name").val("");
        $("#Category").val("");
        $("#time").val("");
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

    //编辑
    $(document).on('click', '.edit', function () {
        $(".confirm_box").hide().siblings("img").show().parent().siblings("input").attr("readonly", "readonly").css("color", "#333");
        $(this).parents("li").siblings("input").removeAttr("readonly").css("color", "#f14141");
        $(this).parent().children().hide();
        $(this).siblings(".confirm_box").show();
        console.log("编辑完成");
    });

    //取消修改
    $(document).on('click', '.cancel', function () {
        $(this).parents("li").siblings("input").attr("readonly", "readonly").css("color", "#333");
        $(this).parent().hide().siblings("img").show();
        console.log("取消完成");
    });

    //确认修改
    $(document).on('click', '.confirm', function () {
        $(this).parents("li").siblings("input").attr("readonly", "readonly").css("color", "#333");
        $(this).parent().hide().siblings("img").show();
        console.log("确认修改完成");
    });
})