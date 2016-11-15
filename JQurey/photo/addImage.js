/**
 * Created by Administrator on 2016/8/16.
 */
$(document).ready(function () {
    for(var i=0;i<20;i++){
        var imgs=$("<div class='item'><div class='style'><img src='imgs/P_0"+i+".jpg' alt=''></div></div>");
        $("#content").append(imgs)
    }
});