$(function () {
    //日历
    $("#time").shijian();

    //重置
    $(".reset").click(function () {
        $("#name").val("");
        $("#Category").val("");
        $("#time").val("");
    });

    //查看二级类目
    $(document).on("click", ".children_slide", function () {
        $(this).parents(".table_children_header").siblings().slideToggle();
        $(this).toggleClass("rotate");
    });

    //编辑
    $(document).on('click', '.edit', function () {
        $(".confirm_box").hide().siblings("img").show().parent().siblings("input").attr("readonly", "readonly");
        $(this).parents("li").siblings("input").removeAttr("readonly").focus();
        $(this).parent().children().hide();
        $(this).siblings(".confirm_box").show();
        console.log("编辑完成");
    });

    //取消修改
    $(document).on('click', '.cancel', function () {
        $(this).parents("li").siblings("input").attr("readonly", "readonly");
        $(this).parent().hide().siblings("img").show();
        console.log("取消完成");
    });

    //确认修改
    $(document).on('click', '.confirm', function () {
        $(this).parents("li").siblings("input").attr("readonly", "readonly");
        $(this).parent().hide().siblings("img").show();
        console.log("确认修改完成");
    });
})