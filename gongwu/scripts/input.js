/**
 * Created by dell on 2017/4/24.
 */
$(function () {
//     $(".jnBrandList li").each(function () {  //以后用作给图片加放大镜
//         var $img=$(this).find("img");
//         var img_w=$img.width();
//         var img_h=$img.height();
//         var spanHtml='<span style="position:absolute;top:0;left:5px;width:'+img_w+'px;height:'+img_h+'px;" class="imageMask" ></span>';
//         $(spanHtml).appendTo(this);
//     });
// });
// $(".jnBrandList ").delegate(".imageMask","hover",function () {
//     $(this).toggleClass("imageOver")
// });
    $("#inputSearch").focus(function () {   //搜索功能
        $(this).addClass("focus");
        if ($(this).val() === this.defaultValue) {
            $(this).val("");
        }
    }).blur(function () {
        $(this).remove("focus");
        if ($(this).val() === '') {
            $(this).val(this.defaultValue)
        }
    }).keyup(function (e) {
        if (e.which === 13) {
            alert('回车提交表单')
        }
    });
    $(".mainNav li").hover(function () {   //导航功能
        $(this).find(".jnNav").show();
    }, function () {
        $(this).find('.jnNav').hide()
    });
    $(".jnCatainfo .promoted").append('<s class="hot"></s>');
    var index = -1;
    var x = 10;
    var y = 20;
    $("a .tooltip").mouseover(function (e) {    //当鼠标划过超链接时，内容高亮显示
        this.myTitle = this.title;
        this.title = "";
        var tooptip = "<div id='tooltip'>" + this.myTitle + "</div>";
        $("body").append(tooptip);
        $("#tooltip").css({
            "top": (e.pageY + y) + "px",
            "left": (e.pageX + x) + "px"
        }).show("fast")
    }).mouseout(function () {
        this.title = this.myTitle;
        $("#tooltip").remove();
    }).mousemove(function (e) {
        $("#tooltip").css({
            "top": (e.pageY + y) + "px",
            "left": (e.pageX + x) + "px"
        });
    });
    $(".jnBrandTab  li a").click(function () {
        $(this).parent().addClass("chos").siblings().remove("chos");
        var idx = $(".jnBrandTab li a").index(this);
        showBrandList(idx);
        return false;
    }).eq(0).click();
    function showBrandList(index) {
        var $rollobj = $("#jnBrandList");
        var rollWidth = $rollobj.find("li").outerWidth();
        rollWidth = rollWidth * 4;
        $rollobj.stop(true, false).animate({left: -rollWidth * index}, 1000)
    }

    $(".jnImageroll div a ").mousemove(function () {//鼠标箭头划过广告文字时显示对应图片
        index = $(".jnImageroll div a   ").index(this);
        showImg(index)
    }).mouseleave(setInterval(function () {   //鼠标箭头离开广告文字时，广告图片自动播放
        index++;
        if (index === 5) {
            index = 0;
        }
        showImg(index);
    }, 4000)).eq(0).mouseover();

}); function showImg() {
    var $rollobj = $("#jnImageroll");
    var $rolllist = $rollobj.find("div a");
    var newhref = $rolllist.eq(index).attr("href");
    $("#JS_imgWrap").attr("href", newhref).find("img").eq(index).stop(true, true).fadeIn().siblings().fadeOut();
    $rolllist.removeClass("chos").css("opacity", "0.7").eq(index).addClass("chos").css("opacity", "1");

}

