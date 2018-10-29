$(function () {

    //下拉列表
    $("input[name='one']").click(function () {
        $(this).parent().siblings().slideDown().parents(".opt_select").siblings().find(".input-group_box").slideUp();
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

    var $tgaUpload = $('#goodsUpload_three').diyUpload({
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
        fileNumLimit: 6,
    });

    //删除小程序标签
    $(document).on('click', '.remove', function () {
        $(this).parent().remove();
    });

    //标签背景色
    var background = ["#23aaff", "#00f0a4", "#ffd200", "#ff3560", "#b257ff", "#00deff", "#ff903e", "#ff4dba", "#6876ff", "#02d0ff"];

    function back() {
        let $add = $(".add_to");
        for (let i = 0; i < $add.length; i++) {
            $add.eq(i).children("input").css("background", background[i]);
        }
    }

    //添加小程序标签
    $(".append").click(function () {
        let length = $(".add_to").length;
        if (length < 10) {
            $(".add_box").append(` <div class="add_to">
                <input type="text" maxlength="4">
                <img src="img/case/cha2.png" alt="" srcset="" class="remove">
            </div>`)
        } else {
            alert("最多只能添加10个案例标签！")
        }
        back();
        console.log("添加完成")
    });

    //评分
    $(".rating-stars").ratingStars();

    //历史纪录
    function brg() {
        let $bg = $(".record_main").children();
        for (let i = 0; i < $bg.length; i++) {
            $bg.eq(i).children("span").css("background", background[i]);
        }
    };
    $(".history").click(function () {
        $("html").css("overflow","hidden");
        $(".record_box").show();
        brg();
        console.log("历史纪录打开");
    });

    //历史纪录隐藏
    $(".record header img").click(function () {
        $("html").css("overflow","initial");
        $(".record_box").hide();
    });

    //历史纪录多选
    var arr = [
        "img/case/weixuanzhong.png",
        "img/case/xuanzhong.png",
    ];
    $(document).on('click', '.record_main aside img', function () {
        if ($(this).attr("src") == arr[0]) {
            $(this).attr("src", arr[1])
        } else {
            $(this).attr("src", arr[0])
        }
        console.log("多选完成");
    });


})