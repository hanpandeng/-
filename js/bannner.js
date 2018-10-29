$(function () {
    //banner图编辑显示
    $(".banner_children").mouseenter(function () {
        $(this).children(".banner_slide").fadeIn();
    });
    $(".banner_children").mouseleave(function () {
        $(this).children(".banner_slide").fadeOut();
    });
})