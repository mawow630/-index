/**
 * Created by Administrator on 2016/8/31.
 */
$(window).ready(function () {
    $("#navLogin").on("click", function (event) {
        event.preventDefault();
        $("#login").slideToggle(400);
    });
    $("#exit").on("click", function () {
        $("#login").slideUp(400);
    });
    $("#loginBtn").on("click", function (event) {
        event.preventDefault();
        alert("敬请期待")
    });

    // $("#logo").on("mousedown",mouseDown(event))
    $("#logo").on("mousedown", function (event) {
        var login = $("#login")[0];
        // 鼠标在弹窗内点击时的坐标=鼠标坐标-登录弹窗offset
        var layerX = event.clientX - login.offsetLeft;
        var layerY = event.clientY - login.offsetTop;
        // 窗口大小
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();
        // 最大移动距离=窗口大小-弹窗大小
        var maxWidth = windowWidth - login.offsetWidth;
        var maxHeight = windowHeight - login.offsetHeight;

        $(document).on("mousemove", function (event) {
            // 拖曳距离=鼠标坐标-鼠标在弹窗内点击时的坐标
            var X = event.clientX - layerX;
            var Y = event.clientY - layerY;
            // 限制弹窗的最大拖曳距离
            if (X < 0) {
                X = 0;
            } else if (X > maxWidth) {
                X = maxWidth;
            }
            if (Y < 43) {
                Y = 43;
            } else if (Y > maxHeight - 35) {
                Y = maxHeight - 35;
            }
            $("#login").css({
                "left": X + "px",
                "top": Y + "px"
            })
        });

        $(document).on("mouseup", function () {
            $(document).off("mousemove");
            $(document).off("mouseup")
        })

    })
});

// function mouseDown(event) {
//     var layerX=event.clientX-$("#login")[0].offsetLeft;
//     var layerY=event.clientY-$("#login")[0].offsetTop;
//     $(document).on("mousemove",function (event) {
//         $("#login").css({
//             // 鼠标坐标-登录弹窗offset坐标=鼠标在弹窗内的坐标
//             "left":event.clientX-layerX+"px",
//             "top":event.clientY-layerY+"px"
//         })
//     });
// }