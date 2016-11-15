/**
 * Created by Administrator on 2016/9/7.
 */
/**
 * Created by Administrator on 2016/8/17.
 */
// 照片瀑布流
window.onload = function () {
    // 这么写无法动态获得最后一个元素的最大高度
    // var returnJson = waterfall("content", "item");
    waterfall("content","item");
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
    window.onscroll = function () {
        // var Boolean = checkscroll(returnJson["maxHeight"], returnJson["lastItem"]);
        ;
        // 判断是否加载
        console.log(data.data.length);
        if (checkscroll()) {
            for(var i=0;i<data.data.length;i++){
                // 动态添加节点
                var parent=document.getElementById("content");
                var divNode=document.createElement("div");
                divNode.className="item";
                var divChildNode=document.createElement("div");
                divChildNode.className="style";
                var imgNode=document.createElement("img");
                imgNode.src="imgs/"+data.data[i].src;
                divChildNode.appendChild(imgNode);
                divNode.appendChild(divChildNode);
                parent.appendChild(divNode);
            }
            waterfall("content", "item");
            console.log("1");
        }
    };
};

function waterfall(parentNode, nodeClsName) {
    var oParent = document.getElementById(parentNode);
    var items = getByClass(oParent, nodeClsName);
    // 计算列数
    var itemWidth = items[0].offsetWidth;
    // 为什么？
    var windowWidth = document.documentElement.clientWidth || document.body.clientWidth;

    var cols = Math.floor(windowWidth / itemWidth);
    // 设置宽度才能使页面居中
    oParent.style.cssText = "width:" + itemWidth * cols + "px;margin:0 auto";

    var heightArray = new Array();
    for (var i = 0; i < items.length; i++) {
        if (i < cols) {
            heightArray.push(items[i].offsetHeight);
        } else {
            var minHeight = Math.min.apply(null, heightArray);
            var index = getMinHeightIndex(heightArray, minHeight);
            // 修改需要重新定位的图片的CSS定位属性
            items[i].style.position = "absolute";
            items[i].style.top = minHeight + "px";
            // items[i].style.left=itemWidth*index+"px";
            items[i].style.left = items[index].offsetLeft + "px";
            // 修改高度数组的值，产生新的最小值
            heightArray[index] += items[i].offsetHeight;
        }
    }
    // // 求出最大高度和最后一个图片元素，并返回
    // var maxHeight = Math.max.apply(null, heightArray);
    // var lastItem = items[items.length - 1];
    // var json = {
    //     "maxHeight": maxHeight,
    //     "lastItem": lastItem
    // };
    // return json;

}

// 判断是否成立加载条件
function checkscroll() {
    var oParent=document.getElementById("content");
    var items=getByClass(oParent,"item");

    var lastItemHeight = items[items.length-1].offsetTop + Math.floor(items[items.length-1].offsetHeight / 2);
    // 标准模式下使用documentElement文档对象来获取scrollTop
    // 混杂模式下使用body对象来获取scrollTop
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var height = document.documentElement.clientHeight || document.body.clientHeight;
    // 判断最后一个图片的总高度小于页面可视高度和滚动高度
    //height+scrollTop>=lastItemHeight
    if (height + scrollTop > lastItemHeight) {
        return true;
    } else {
        return false;
    }
}

// IE8不支持getElementsByClassName
function getByClass(parent, clsName) {
    var childArray = new Array();
    var childNode = parent.getElementsByTagName("*");
    for (var i = 0; i < childNode.length; i++) {
        if (childNode[i].className == clsName) {
            childArray.push(childNode[i])
        }
    }
    return childArray;
}

// 获取最小高度对象的索引
function getMinHeightIndex(array, val) {
    for (var i in array) {
        if (array[i] == val) {
            return i;
        }
    }
}