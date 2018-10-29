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


    //上传图片
    var $tgaUpload = $('#goodsUpload').diyUpload({
        url: '/uploadFilePath',
        success: function (data) {},
        error: function (err) {},
        buttonText: '',
        accept: {
            title: "Images",
            extensions: 'gif,jpg,jpeg,bmp,png'
        },
        thumb: {
            width: 120,
            height: 120,
            quality: 100,
            allowMagnify: true,
            crop: true,
            type: "image/jpeg",
        },
        fileNumLimit: 1,
    });

    var $tgaUpload = $('#goodsUpload_two').diyUpload({
        url: '/uploadFilePath',
        success: function (data) {},
        error: function (err) {},
        buttonText: '',
        accept: {
            title: "Images",
            extensions: 'gif,jpg,jpeg,bmp,png'
        },
        thumb: {
            width: 120,
            height: 120,
            quality: 100,
            allowMagnify: true,
            crop: true,
            type: "image/jpeg",
        },
        fileNumLimit: 1,
    });
})