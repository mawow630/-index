/**
 * Created by Administrator on 2016/9/7.
 */
/**
 * Created by Administrator on 2016/8/19.
 */
$(document).ready(function () {
    waterfall();
    var data={
        "data":[
            {"src":"P_00.jpg"},
            {"src":"P_01.jpg"},
            {"src":"P_02.jpg"},
            {"src":"P_03.jpg"},
            {"src":"P_04.jpg"},
            {"src":"P_05.jpg"},
            {"src":"P_06.jpg"},
            {"src":"P_07.jpg"},
            {"src":"P_08.jpg"},
            {"src":"P_09.jpg"},
            {"src":"P_010.jpg"},
            {"src":"P_011.jpg"},
            {"src":"P_012.jpg"},
            {"src":"P_013.jpg"},
            {"src":"P_014.jpg"}]
    };

    $(window).on("scroll",function () {
        if(checkScroll()){
            $.each(data.data,function (index,value) {
                var divNode=$("<div>").addClass("item").appendTo("#content");
                var divChildNode=$("<div>").addClass("style").appendTo(divNode);
                $("<img>").attr("src","imgs/"+value.src).appendTo(divChildNode);
                waterfall();
            })
        }
    });
});

function waterfall() {
    var heightArr=new Array;
    var $items=$("#content > div");
    var itemWidth=$items.eq(0).outerWidth();
    var documentWidth=$(document).width();
    var cols=Math.floor(documentWidth/itemWidth);
    $("#content").width(cols*itemWidth).css("margin","0 auto");
    $items.each(function (index,value) {

        if(index<cols){
            heightArr[index]=$(value).outerHeight();
        }else{
            var minHeight=Math.min.apply(null,heightArr);
            var minIndex=$.inArray(minHeight,heightArr);
            $(value).css({
                "position":"absolute",
                "top":minHeight,
                "left":$items[minIndex].offsetLeft
            });
            // 高度的最小值加上当前元素的高度,要用outerHeight，就是现在添加元素后的高度
            heightArr[minIndex]+=$items.eq(index).outerHeight();
            // 慎用
            // console.log($items[minIndex].offsetLeft);
        }
    });
}

function checkScroll() {
    var $lastItem=$("#content>div").last();
    var lastItem=$lastItem[0];
    var lastItemHeight=$lastItem.offset().top+Math.floor($lastItem.outerHeight()/2);
    var scrollTop=$(window).scrollTop();
    var documentHeight=$(window).height();
    return (documentHeight+scrollTop>lastItemHeight)?true:false;
}