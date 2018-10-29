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

    //二级类目加减算法
    function slide() {
        $(".Category").find(".reduce").css("display", "block");
        $(".Category").find(".add_to").css("display", "none");
        $(".Category").last().find(".add_to").css("display", "block").siblings(".reduce").css("display", "none");
        console.log("二级类目算法完成")
    }
    slide();
    //添加二级类目
    $(document).on('click', '.add_to', function () {
        $(".two_Category_box").append(`<section class="Category">
        <div class="input-group">
            <div class="input-group-addon">二级类目：</div>
            <input type="text" class="form-control" id="" placeholder="请填写二级类目名称">
        </div>
        <div class="input-group">
            <div class="input-group-addon">二级类目链接：</div>
            <input type="text" class="form-control" id="" placeholder="请填写二级类目链接地址">
        </div>
        <div class="aas">
            <img src="img/select/jia.png" alt="" srcset="" class="add_to">
            <img src="img/select/jian.png" alt="" srcset="" class="reduce">
        </div>
    </section>`);
        slide();
        console.log("添加二级类目完成");
    });

    //删除二级类目
    $(document).on('click', '.reduce', function () {
        $(this).parents(".Category").remove();
    })




})