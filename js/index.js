$(function () {
    //时间下边框
    $(".time_box li").click(function () {
        $(".time_box li").removeClass("li_border");
        $(this).addClass("li_border");
    });

    //浏览量显示限制
    function astrict(kind, text) {
        let cla = $(".quantity_children");
        for (let a = 0; a < cla.length; a++) {
            if (cla.eq(a).children(kind).text().length > text) {
                cla.eq(a).children(kind).text(cla.eq(a).children(kind).text().slice(0, text) + "...")
            }
        }
        console.log("浏览量字数限制完成");
    }
    astrict(".quantity_top", 8);


    //日历
    //不要动下面注释的代码 ---2018-10-17  @han
    /*$('#ca').calendar({
        width: 320,
        height: 320,
        data: [{
                date: '2015/12/24',
                value: 'Christmas Eve'
            },
            {
                date: '2015/12/25',
                value: 'Merry Christmas'
            },
            {
                date: '2016/01/01',
                value: 'Happy New Year'
            }
        ],
        onSelected: function (view, date, data) {
            console.log('view:' + view)
            alert('date:' + date)
            console.log('data:' + (data || 'None'));
        }
    });*/

    $('#dd').calendar({
        trigger: '#dt',
        zIndex: 999,
        format: 'yyyy-mm-dd',
        onSelected: function (view, date, data) {
            console.log('event: onSelected')
        },
        onClose: function (view, date, data) {
            console.log('event: onClose')
            console.log('view:' + view)
            console.log('date:' + date)
            console.log('data:' + (data || 'None'));
        }
    });


})