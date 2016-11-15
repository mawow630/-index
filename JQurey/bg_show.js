/**
 * Created by Administrator on 2016/8/31.
 */
$(window).ready(function () {
    $("#inputText").on("focus", function () {
        $(".bg-black").fadeIn(260);
    });
    $("#inputText").on("blur", function () {
        $(".bg-black").fadeOut(260);
    })
})

var currentIndex = 0;
function changeBg() {
    var bgImgs = ["imgs/bgimg_01.jpg", "imgs/bgimg_02.jpg", "imgs/bgimg_03.jpg", "imgs/bgimg_04.jpg", "imgs/bgimg_05.jpg"];
    var obj = document.getElementById("content");
    $(obj).fadeOut(1000, function () {
        obj.style.backgroundImage = "url(" + bgImgs[currentIndex] + ")";
        $(obj).fadeIn(1000)
    });
    if (currentIndex == bgImgs.length-1) {
        currentIndex = 0
    }else {
        currentIndex += 1;
    }
}
setInterval("changeBg()", 6000);