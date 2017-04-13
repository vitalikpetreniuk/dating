$(function(){
	$('#blurSlider').slider();

	$('#edit .buttons.top button').on('click', function(){
		$('#edit .buttons.top button').removeClass('active');
		$(this).addClass('active');
		$('.buttons.bottom').hide();
		$('.buttons.on-active').show();
		if($(this).hasClass('blur')) {
			$('#blurSlider').show();
		}
		else {
			$('#blurSlider').hide();
		}
	});

	$('#edit .buttons.on-active button').on('click', function(){
		$('#edit .buttons.top button').removeClass('active');
		$('#edit .buttons.bottom').show();
		$('#edit .buttons.on-active').hide();
		$('#blurSlider').hide();
	});
});