/**
 * Created by Administrator on 2016/8/26.
 */
$(window).ready(function () {
    $("#inputText").on("keyup focus",function () {
        var $this=$(this);
        var inputVal=$this.val();
        
        $.ajax({
            type:"GET",
            url:'http://sg1.api.bing.com/qsonhs.aspx?type=cb&cb=callback&q='+inputVal,
            dataType:"jsonp",
            jsonp:'cb',
            success:function (d) {
                var resultVal=d.AS.Results[0].Suggests;
                var html="";
                $(resultVal).each(function (index,value) {
                    html+="<li>"+resultVal[index].Txt+"</li>"
                });
                $("#scroll").html("<ul>"+html+"</ul>");

                $("#scroll").show().css({
                    top:$("#form").offset().top+$("#inputText").outerHeight(),
                    // left:$("#inputText").offset().left-5,
                    left:$("#form").offset().left,
                    position:"absolute"
                });
            },
            error:function () {}
        });
        
    });

    $(document).on("click",function () {
        $("#scroll").hide();
    });

    $("#scroll").on("keydown","input",function(event) {
        if (event.keyCode == 13) {
            var keyword = $("#inputText").val();
            window.location.href = "http://cn.bing.com/search?q=" + keyword;
        }else {
            return false;
        }
    });

    $("#inputImg").on("click",function () {
        var keyword = $("#inputText").val();
        window.location.href = "http://cn.bing.com/search?q="+keyword;
    });

    $("#scroll").on("click","li",function () {
        var keyword=$(this).text();
        window.location.href="http://cn.bing.com/search?q="+keyword;
    })
});