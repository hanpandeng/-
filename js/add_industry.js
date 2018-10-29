$(function () {

    //下拉列表
    $("input[name='one']").click(function () {
        $(this).parent().siblings().slideDown();
        event.stopPropagation();
        console.log("下拉完成")
    });

    //选择
    $(document).on('click', '.input-group_box li', function () {
        let text = $(this).text();
        $(this).parent().siblings().children("input").val(text);
        $(this).parent().slideUp();
        console.log("选择完成");
    });

     //阻止冒泡事件
     $(document).click(function (event) {
        $(".input-group_box").slideUp();
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
})