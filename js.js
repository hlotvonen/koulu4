jQuery(function( $ ){

//list items to be 100% of browser width & height
var H = $(window).height();
var W = $(window).width();
$('li').css('width', W + 'px');
$('li').css('height', H + 'px');

// disable mouse scroll & mouse middle button scroll
$("li").bind("mousewheel", function() { return false; });
$('li').mousedown(function(e){if(e.button==1)return false});

// enable localscroll plugin
$.localScroll({ hash:true, axis:'xy' });

// position list items
$('#a1').css({top : '0px', left : '0px' });
$('#a2').css({top : H + 'px'});
$('#a3').css({top : H + 'px', left : W +'px' });
$('#a8').css({top : H*2 + 'px'});
$('#a5').css({top : H*1 + 'px', left : W*2 + 'px' });
$('#a14').css({top : H*1 + 'px', left : W*3 + 'px' });
$('#a7').css({top : H*1 + 'px', left : W*4 + 'px' });
$('#a4').css({top : H*1 + 'px', left : W*5 + 'px' });
$('#a33').css({top : H*1 + 'px', left : W*6 + 'px' });
$('#a10').css({top : H*1 + 'px', left : W*7 + 'px' });
$('#a11').css({top : H*2 + 'px', left : W*1 + 'px' });
$('#a19').css({top : H*2 + 'px', left : W*2 + 'px' });
$('#a13').css({top : H*2 + 'px', left : W*3 + 'px' });
$('#a26').css({top : H*2 + 'px', left : W*4 + 'px' });
$('#a15').css({top : H*2 + 'px', left : W*5 + 'px' });
$('#a24').css({top : H*2 + 'px', left : W*6 + 'px' });
$('#a17').css({top : H*2 + 'px', left : W*7 + 'px' });
$('#a47').css({top : H*3 + 'px', left : W*1 + 'px' });
$('#a12').css({top : H*3 + 'px', left : W*2 + 'px' });
$('#a20').css({top : H*3 + 'px', left : W*3 + 'px' });
$('#a43').css({top : H*3 + 'px', left : W*4 + 'px' });
$('#a57').css({top : H*3 + 'px', left : W*5 + 'px' });
$('#a23').css({top : H*3 + 'px', left : W*6 + 'px' });
$('#a16').css({top : H*3 + 'px', left : W*7 + 'px' });
$('#a25').css({top : H*4 + 'px', left : W*1 + 'px' });
$('#a6').css({top : H*4 + 'px', left : W*2 + 'px' });
$('#a27').css({top : H*4 + 'px', left : W*3 + 'px' });
$('#a38').css({top : H*4 + 'px', left : W*4 + 'px' });
$('#a30').css({top : H*4 + 'px', left : W*5 + 'px' });
$('#a49').css({top : H*4 + 'px', left : W*6 + 'px' });
$('#a40').css({top : H*4 + 'px', left : W*7 + 'px' });
$('#a9').css({top : H*5 + 'px', left : W*1 + 'px' });
$('#a34').css({top : H*5 + 'px', left : W*2 + 'px' });
$('#a35').css({top : H*5 + 'px', left : W*3 + 'px' });
$('#a36').css({top : H*5 + 'px', left : W*4 + 'px' });
$('#a37').css({top : H*5 + 'px', left : W*5 + 'px' });
$('#a29').css({top : H*5 + 'px', left : W*6 + 'px' });
$('#a39').css({top : H*5 + 'px', left : W*7 + 'px' });
$('#a32').css({top : H*6 + 'px', left : W*1 + 'px' });
$('#a50').css({top : H*6 + 'px', left : W*2 + 'px' });
$('#a42').css({top : H*6 + 'px', left : W*3 + 'px' });
$('#a21').css({top : H*6 + 'px', left : W*4 + 'px' });
$('#a54').css({top : H*6 + 'px', left : W*5 + 'px' });
$('#a52').css({top : H*6 + 'px', left : W*6 + 'px' });
$('#a46').css({top : H*6 + 'px', left : W*7 + 'px' });
$('#a18').css({top : H*7 + 'px', left : W*1 + 'px' });
$('#a48').css({top : H*7 + 'px', left : W*2 + 'px' });
$('#a31').css({top : H*7 + 'px', left : W*3 + 'px' });
$('#a41').css({top : H*7 + 'px', left : W*4 + 'px' });
$('#a51').css({top : H*7 + 'px', left : W*5 + 'px' });
$('#a53').css({top : H*7 + 'px', left : W*6 + 'px' });
$('#a44').css({top : H*8 + 'px', left : W*7 + 'px' });
$('#a56').css({top : H*8 + 'px', left : W*1 + 'px' });
$('#a22').css({top : H*8 + 'px', left : W*2 + 'px' });
$('#a58').css({top : H*8 + 'px', left : W*3 + 'px' });
$('#a59').css({top : H*8 + 'px', left : W*4 + 'px' });
$('#a60').css({top : H*9 + 'px', left : W*3 + 'px' });
$('#a28').css({top : H*8 + 'px', left : W*5 + 'px' });
$('#a55').css({top : H*8 + 'px', left : W*6 + 'px' });
$('#a71').css({top : H*9 + 'px', left : W*2 + 'px' });
$('#a72').css({top : H*9 + 'px', left : W*4 + 'px' });
$('#a666').css({top : H*10 + 'px', left : W*6 + 'px' });
});



/* ************************************
list items to be 100% of browser width & height with window resize
************************************ */
$(window).resize(function() {
    var H = $(window).height();
	var W = $(window).width();
	$('li').css('width', W + 'px');
	$('li').css('height', H + 'px');
});
