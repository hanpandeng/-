$(function () {
    //编辑
    $(".editor").on('click', function () {
        $(".reply , .password_reply").hide().siblings().show().parent().siblings("input").attr("readonly", "readonly");
        $(this).hide().siblings().show().parent().siblings("input").removeAttr("readonly").focus();
    });

    $(".reply").on('click', function () {
        $(this).hide().siblings().show().parent().siblings("input").attr("readonly", "readonly");
    });

    // 密码
    $(".password_editor").on('click', function () {
        $(".reply , .password_reply").hide().siblings().show().parent().siblings("input").attr("readonly", "readonly");
        $(this).hide().siblings().show().parent().siblings("input").removeAttr("readonly").focus().parent().siblings().show().children("input").removeAttr("readonly").siblings().children(".password_editor").hide().siblings().show();
    });
    //确认密码
    $(".password_reply").on('click', function () {
        $(this).hide().siblings().show().parent().siblings("input").attr("readonly", "readonly");
    });

    //头像上传
    $(".img_box").mouseenter(function () {
        $(".img_icon").fadeIn();
    });

    $(".img_box").mouseleave(function () {
        $(".img_icon").fadeOut();
    });

    $(".img_box").click(function () {
        $(".upload_shade").fadeIn();
    });

    $(".cancel").click(function () {
        $(this).parents(".upload_shade").fadeOut();
    })


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