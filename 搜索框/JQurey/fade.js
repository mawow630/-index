/**
 * Created by Administrator on 2016/8/30.
 */
$(window).ready(function () {
    var timer;
    $("#offc").on("mouseover",function () {
        clearTimeout(timer);
        timer=setTimeout("$('#officeShow').show()",200)
        
    });
    $("#offc").on("mouseleave",function () {
        clearTimeout(timer);
        timer=setTimeout("$('#officeShow').hide()",200)
    });

    // 使用定时，清除定时
    // var timer;
    // $("#offc").hover(function () {
    //     clearTimeout(timer);
    //     timer=setTimeout(function () {
    //         $("#officeShow").show()
    //     },200);
    // },
    // function () {
    //     clearTimeout(timer);
    //     timer=setTimeout(function () {
    //         $("#officeShow").hide()
    //     },200);
    // })
});