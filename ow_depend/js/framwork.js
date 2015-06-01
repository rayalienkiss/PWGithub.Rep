//µÇÂ½×¢²áµ¯´°
$("#Show_pSignIn").bind("click", function (event) {
    $("#pSignUp").hide();
    $("#pSignIn").show();
});
$("#Show_pSignUp").bind("click", function (event) {
    $("#pSignUp").show();
    $("#pSignIn").hide();
});

//µÇÂ½×¢²áµ¯´°
$("#signClose").bind("click", function (event) {
    $(".popwin-bg").hide();
});
$("#signOpen").bind("click", function (event) {
    $(".popwin-bg").show();
});

//ÐÐÒµ½â¾ö·½°¸½»»¥
var curr_id;
$(function () {
    $(".item").click(function () {
        curr_id = $(this).attr("id");
        var idx = $(this).index(),
            left = $(this).position().left;
        $(".solution-nav-lv2").eq(idx).css({
            width: "138px",
            left: left + "px",
            display: "block"
        }).animate({
            left: "0"
        }).animate({
            width: "100%",
            padding: "0 138px"
        });

        $(".item").fadeOut();
        $(".solution-banner-wrap").attr("class", "solution-banner-wrap " + curr_id + "-bg");
        $("#" + curr_id + "scroll").css({ display: "block" });
        var $currScroll = $("#" + curr_id + "scroll"),
            prev = $currScroll.find(".left"),
            next = $currScroll.find(".right");
        $currScroll.scroller({
            currContent: "#" + curr_id + "Content",
            titleBox: ".boxtwo",
            prev: prev,
            next: next
        });
    });

});

function getOut(element) {
    var left = $(element).parent().data("left");
    $(element).parent().animate({
        width: "138px",
        padding: "0"
    }).animate({
        left: left
    }).fadeOut();

    $(".solution-scroll-pages-wrap").css({ display: "none" });
    $(".solution-banner-wrap").attr("class", "solution-banner-wrap index");
    $(".item").delay(500).fadeIn();
    $(".left").unbind("click");
    $(".right").unbind("click");
}