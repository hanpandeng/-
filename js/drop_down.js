$(function () {

    //查看二级类目
    $(document).on("click", ".children_slide", function () {
        $(this).parents(".table_main").siblings().slideToggle();
        $(this).children().toggleClass("rotate");
    })
})