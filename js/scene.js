$(function () {

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

    //应用场景修改
    $(document).on('click', '.edit', function () {
        $(".modify_box").show();
    });

    //应用场景修改取消
    $(".cancel").click(function () {
        $(".modify_box").hide();
    })
})