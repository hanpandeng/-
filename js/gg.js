 $(function () {

     //二级下拉菜单
     $(".content").click(function () {
         $(".options").stop().slideUp();
         $(this).siblings(".options").stop().slideToggle();
         console.log("over");
     });

     //用户名字数限制
     function words(cname, wordlength) {
         let count = $(cname),
             clength = count.text();
         if (clength.length > wordlength) {
             count.text(clength.slice(0, wordlength) + "...")
         }
         console.log("首次进入限制用户名字数显示完成")
     }
     words(".count", 9);

     //遮罩层显示
     $(".register").click(function () {
        $("html").css("overflow","hidden");
         $(".shade").fadeIn();
         console.info("遮罩层显示完成");
     });
     //遮罩层取消
     $(".unselect").click(function () {
        $("html").css("overflow","initial");
         $(".shade").fadeOut();
         console.info("遮罩层取消完成");
     })



     //个人中心
     $(".log_out").click(function () {
         $(".quit_box").fadeToggle();
     });

    

 })