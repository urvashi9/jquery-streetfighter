$(document).ready(function(){
	$('.ryu').mouseenter(function(){
		//alert('mouse entered .ryu div');

		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function(){
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function(){
		
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate({
			'left':'1117px'
		}
		,500,
		function(){
			$(this).hide();
			$(this).css('left','603px')
		});
	})
	.mouseup(function(){
		console.log('mouseup');
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	})
	$(document).on("keydown",function(e){
		var code = e.keyCode;
		if (code == 88){
			// alert('x key pressed');
			// console.log('keydown');
			$('.ryu-still').hide();
	    	$('.ryu-cool').show();
		}
	})
	$(document).on("keyup",function(e){
		var pressed= e.keyCode;
		if(pressed == 88){
			$('.ryu-still').show();
			$('.ryu-cool').hide();
		}
	})
});
function playHadouken(){
	$('#hadouken-sound')[0].volume=0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}