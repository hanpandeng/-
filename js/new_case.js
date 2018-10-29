$(function () {
    //日历
    $("#time").shijian();

    //多选
    var arr = [
        "img/case/weixuanzhong.png",
        "img/case/xuanzhong.png",
    ];
    $(document).on('click', '.selectbox', function () {
        if ($(this).attr("src") == arr[0]) {
            $(this).attr("src", arr[1])
        } else {
            $(this).attr("src", arr[0])
        }
        console.log("多选完成");
    });

    var index = 0;
    $(".select_all").click(function () {
        index++;
        if (index % 2) {
            $(".selectbox").attr("src", arr[1]);
        } else {
            $(".selectbox").attr("src", arr[0]);
        }

        console.log("全选完成");
    });

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
    
    //添加案例
    $(".add_case").click(function(){
        window.open("add_new_case.html","_self");
    })

})