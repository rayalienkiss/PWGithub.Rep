// JavaScript Document
$('.ddw').val(0);
$('.ddw2').val(0);
setTimeout(function(){
$('.num').eq(0).find('p').stop().animate({'top':'50%'},500)
	},500);

// 新页脚
var newFooter = $('.new-footer'), ftHeight = 0, ftHidden = true, scrollArrow = newFooter.find('.new-footer-arrow');
var showFooter = {
	show: function(){
		newFooter.animate({'bottom': 0}, 300);
		ftHidden = !1;
		scrollArrow.hide();
	},
	hide: function(){
		$('.ddw2').val(1);
		newFooter.animate({'bottom': -ftHeight+'px'}, 300, function(){
			$('.ddw2').val(0);
			scrollArrow.show();
		});
		ftHidden = !0;
	}
};
	
$(function(){
	$('.num_box').mousewheel(function(event, delta) {
		var aaaa=$('.ddw2').val();
		if (aaaa == 1){
			return;	
		}
		qpgd(delta);
	});

	ftHeight = newFooter.outerHeight();
	newFooter.css('bottom', -ftHeight+'px')


	var fadeDown = (function fadeDown(){
		scrollArrow.animate({ top: '-80px', opacity: 0.2}, 1000, function(){
			$(this).animate({ top: '-90px', opacity: 1}, 1000, function(){
				fadeDown();
			});
		});
	})();

	scrollArrow.on('click', function(){
		showFooter.show();
	});
});
function qpgd(a){
	var z =$('.ddw').val();
    b = parseInt(z);
	c = $('.num').length;
if(a<0){
	if(-b==c-1){
		showFooter.show();
		return;
	}
	b-=1;
	$('.ddw2').val(1);
	}else if(a>0){
		if(!ftHidden) {
			showFooter.hide();
			return;
		}
		if(-b==0){
			return;
		}
		b+=1;
		$('.ddw2').val(1);
	}
//if(-b==0){
//$('.num').eq(1).find('p').animate({'top':'0'},500);
//setTimeout(function(){
//$('.num').eq(0).find('p').animate({'top':'50%'},500);
//	},1600);
//	}else if(-b==1){
//$('.num').eq(0).find('p').animate({'top':'0'},500);
//$('.num').eq(2).find('p').animate({'top':'0'},500);
//setTimeout(function(){
//$('.num').eq(1).find('p').animate({'top':'50%'},500);
//	},1600);
//		}else if(-b==2){
//$('.num').eq(1).find('p').animate({'top':'0'},500);
//$('.num').eq(3).find('p').animate({'top':'0'},500);
//setTimeout(function(){
//$('.num').eq(2).find('p').animate({'top':'50%'},500);
//	},1600);
//		}else if(-b==3){
//$('.num').eq(2).find('p').animate({'top':'0'},500);
//$('.num').eq(4).find('p').animate({'top':'0'},500);
//setTimeout(function(){
//$('.num').eq(3).find('p').animate({'top':'50%'},500);
//	},1600);
//		}
//		else if(-b==4){
//$('.num').eq(3).find('p').animate({'top':'0'},500);
//$('.num').eq(5).find('p').animate({'top':'0'},500);
//setTimeout(function(){
//$('.num').eq(4).find('p').animate({'top':'50%'},500);
//	},1600);
//		}
//		else if(-b==5){
//$('.num').eq(4).find('p').animate({'top':'0'},500);
//setTimeout(function(){
//$('.num').eq(5).find('p').animate({'top':'50%'},500);
//	},1600);
//		}	
		
$('.ddw').val(b);
$('.fixed_r li').eq(-b).addClass('on').siblings('li').removeClass('on');
var single_hh = $(window).height();
click_hh =-single_hh*b;
$('.num_box').animate({'bottom': click_hh},1000);
setTimeout(function(){
	$('.ddw2').val(0);
	},1400);
}
	$('.fixed_r li').eq(0).addClass('on');
	$('.fixed_r li').click(function(){
		var b = $(this).index();
		$(this).addClass('on').siblings('li').removeClass('on');
		$('.ddw').val(-b);


/*---------------------*/
if(b==0){
$('.num').eq(1).find('p').animate({'top':'0'},500);
setTimeout(function(){
$('.num').eq(0).find('p').animate({'top':'50%'},500);
	},1600);
	}else if(b==1){
$('.num').eq(0).find('p').animate({'top':'0'},500);
$('.num').eq(2).find('p').animate({'top':'0'},500);
setTimeout(function(){
$('.num').eq(1).find('p').animate({'top':'50%'},500);
	},1600);
		}else if(b==2){
$('.num').eq(1).find('p').animate({'top':'0'},500);
$('.num').eq(3).find('p').animate({'top':'0'},500);
setTimeout(function(){
$('.num').eq(2).find('p').animate({'top':'50%'},500);
	},1600);
		}else if(b==3){
$('.num').eq(2).find('p').animate({'top':'0'},500);
$('.num').eq(4).find('p').animate({'top':'0'},500);
setTimeout(function(){
$('.num').eq(3).find('p').animate({'top':'50%'},500);
	},1600);
		}
		else if(b==4){
$('.num').eq(3).find('p').animate({'top':'0'},500);
$('.num').eq(5).find('p').animate({'top':'0'},500);
setTimeout(function(){
$('.num').eq(4).find('p').animate({'top':'50%'},500);
	},1600);
		}
		else if(-b==5){
$('.num').eq(4).find('p').animate({'top':'0'},500);
setTimeout(function(){
$('.num').eq(5).find('p').animate({'top':'50%'},500);
	},1600);
		}	
/*---------------------*/

var single_hh = $(window).height();
click_hh =single_hh*b;
$('.num_box').animate({'bottom': click_hh},1000);
		})
function quanp(){
var single_hh = $(window).height();
var single_ww = $(window).width();
$('.num').height(single_hh);
$('.num li').width(single_ww);
}
quanp();
$(window).resize(function(){
	if (typeof indexSlides != 'undefined' && indexSlides.reformat) 
		indexSlides.reformat();
		quanp();
});