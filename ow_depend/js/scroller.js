(function( $ ){

    $.fn.scroller = function(option) {
        var _this = this,        //solution-scroll-pages-wrap
            _listBox = _this.find("ul"),   //ul
            _listItem = _listBox.find("li"),  //li
            _titleBox = $(option.currContent).find(option.titleBox),   //标题 ul
            listWidth = _listItem.width(),   //li宽度
            listLen = _listItem.length;  //li长度

        _listBox.width(listWidth * listLen+"px");          //ul
        _listBox.find("li").width(listWidth+"px"); //li
        //_listBox.data("index","0");

        for(var i=0;i<=(listLen-1);i++){
            var left = -(i * listWidth);
            _listItem.eq(i).data("scrollLeft",left);
        }

        var prev = _this.find(option.prev),
            next = _this.find(option.next);

        $(prev).bind("click",function(){
            var currIdx = Number(_listBox.data("index"));
            //console.log(currIdx);
            if((currIdx-1) < 0){
                var scroll_left = _listItem.last().data("scrollLeft"),
                    lastIdx = listLen-1;
                _listBox.animate({left:scroll_left+"px"});
                _listBox.data("index",lastIdx);
                $(option.currContent).find("li").find("a").removeClass("active");
                $(option.currContent).find("li:eq("+lastIdx+")").find("a").addClass("active");
                //console.log("prev  <0==="+Number(_listBox.data("index")));
            }else{
                currIdx = currIdx-1;
                var eq = currIdx,
                    prevLeft = _listItem.eq(eq).data("scrollLeft");
                _listBox.data("index",currIdx);
                _listBox.animate({left:prevLeft+"px"});
                $(option.currContent).find("li").find("a").removeClass("active");
                $(option.currContent).find("li:eq("+currIdx+")").find("a").addClass("active");
                //console.log("prev  >=0==="+Number(_listBox.data("index")));
            }
        });

        $(next).bind("click",function(){
            var currIdx = Number(_listBox.data("index"));
            //console.log(currIdx);
            if((currIdx+1) < listLen){
                currIdx = currIdx+1;
                var eq = currIdx,
                    nextRight = _listItem.eq(eq).data("scrollLeft");
                _listBox.data("index",currIdx);
                _listBox.animate({left:nextRight+"px"});
                $(option.currContent).find("li").find("a").removeClass("active");
                $(option.currContent).find("li:eq("+currIdx+")").find("a").addClass("active");
                //console.log("next  <len==="+Number(_listBox.data("index")));
            }else{
                var scroll_left = _listItem.first().data("scrollLeft");
                _listBox.animate({left:scroll_left+"px"});
                _listBox.data("index","0");
                $(option.currContent).find("li").find("a").removeClass("active");
                $(option.currContent).find("li:eq(0)").find("a").addClass("active");
                //console.log("next  >=len==="+Number(_listBox.data("index")));
            }
        });

        $(_titleBox).find("li").bind("click",function(){
            var currIdx = $(this).index(),
                scrollPos = _listItem.eq(currIdx).data("scrollLeft");
            _listBox.animate({left:scrollPos+"px"});
            _listBox.data("index",currIdx);
            $(option.currContent).find("li").find("a").removeClass("active");
            $(option.currContent).find("li:eq("+currIdx+")").find("a").addClass("active");
        });

    };

})(jQuery);