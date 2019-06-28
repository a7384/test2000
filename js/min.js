$(document).ready(function(){
	$("html").niceScroll({
		cursorwidth:8,
		cursorborder:0,
		cursorcolor:'#0097E0',
	});
	$('.counter').countUp({
    time: 5000
});

});
$(document).ready(function(){
    $('#bar1').barfiller({	barColor: "green",duration:2000 });
    $('#bar2').barfiller({	barColor: "blue",duration:2000 });
    $('#bar3').barfiller({	barColor: "yellow",duration:2000 });
    $('#bar4').barfiller({	barColor: "red",duration:2000 });
    $('#bar5').barfiller({	barColor: "purple",duration:2000 });
});