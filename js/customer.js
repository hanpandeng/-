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

})