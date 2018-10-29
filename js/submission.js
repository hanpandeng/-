$(function () {
    //日历
    $("#time").shijian();

    //重置
    $(".reset").click(function () {
        $("input[name]").val("");
    });

    //删除
    $(document).on('click', '.delete', function () {
        $(this).parents(".table_children_header").remove();
        console.log("删除案例完成")
    });

})