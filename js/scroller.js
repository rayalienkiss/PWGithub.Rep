(function( $ ){

    $.fn.scroller = function(option) {
        var _this = $(this),        //solution-scroll-pages-wrap
            _listBox = _this.find("ul"),   //ul
            _listItem = _listBox.find("li"),  //li
            _titleBox = $(option.currContent).find(option.titleBox),   //标题 ul
            listWidth = _listItem.width(),   //li宽度
            listLen = _listItem.length;  //li长度

        _listBox.width(listWidth * listLen+"px");          //ul
        _listBox.find("li").width(listWidth+"px"); //li
        _listBox.data("liIdx","0");

        for(var i=0;i<=(listLen-1);i++){
            var left = -(i * listWidth);
            _listItem.eq(i).data("scrollLeft",left);
        }

        var prev = _this.find(option.prev),
            next = _this.find(option.next);

        $(prev).bind("click",function(){
            var currIdx = Number(_listBox.data("liIdx"));
            if((currIdx-1) < 0){
                var scroll_left = _listItem.last().data("scrollLeft"),
                    lastIdx = listLen-1;
                _listBox.animate({left:scroll_left+"px"});
                _listBox.data("liIdx",lastIdx);
                $(option.currContent).find("li").find("a").removeClass("active");
                $(option.currContent).find("li:eq("+lastIdx+")").find("a").addClass("active");
            }else{
                currIdx = currIdx-1;
                var eq = currIdx,
                    prevLeft = _listItem.eq(eq).data("scrollLeft");
                _listBox.data("liIdx",currIdx);
                _listBox.animate({left:prevLeft+"px"});
                $(option.currContent).find("li").find("a").removeClass("active");
                $(option.currContent).find("li:eq("+currIdx+")").find("a").addClass("active");
            }
        });

        $(next).on("click",function(){
            var currIdx = Number(_listBox.data("liIdx"));
            if((currIdx+1) < listLen){
                currIdx = currIdx+1;
                var eq = currIdx,
                    nextRight = _listItem.eq(eq).data("scrollLeft");
                _listBox.data("liIdx",currIdx);
                _listBox.animate({left:nextRight+"px"});
                $(option.currContent).find("li").find("a").removeClass("active");
                $(option.currContent).find("li:eq("+currIdx+")").find("a").addClass("active");
            }else{
                var scroll_left = _listItem.first().data("scrollLeft");
                _listBox.animate({left:scroll_left+"px"});
                _listBox.data("liIdx","0");
                $(option.currContent).find("li").find("a").removeClass("active");
                $(option.currContent).find("li:eq(0)").find("a").addClass("active");
            }
        });

        $(_titleBox).find("li").on("click",function(){
            var currIdx = $(this).index(),
                scrollPos = _listItem.eq(currIdx).data("scrollLeft");
            _listBox.animate({left:scrollPos+"px"});
            _listBox.data("liIdx",currIdx);
            $(option.currContent).find("li").find("a").removeClass("active");
            $(option.currContent).find("li:eq("+currIdx+")").find("a").addClass("active");
        });

    };

})(jQuery);