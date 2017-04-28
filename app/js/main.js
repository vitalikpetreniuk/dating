$(function(){
	$('#blurSlider').slider({
		range: "min",
		min: 1,
		max: 100,
	});
	$('#blurSlider').slider('value',50);

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
		$('#edit .save-btn').text('DONE');
	});

	$('#edit .save-btn').on('click',function(){

		if($(this).text() == "DONE" && !$(this).hasClass('saved')) {
			$(this).text('SAVE');
			$('#blurSlider').hide();
			$('#edit .buttons.top button').removeClass('active');
		}
		else {
			$('.buttons.top,.done-btn').addClass('saved');
			$(this).addClass('saved');
			$(this).text('DONE');
			$('#edit .info-message').text('Your photo successfully uploaded.');
		}
	});

	$('#edit .buttons.on-active button').on('click', function(){
		$('#edit .buttons.top button').removeClass('active');
		$('#edit .buttons.bottom').show();
		$('#edit .buttons.on-active').hide();
		$('#blurSlider').hide();
	});

	 var planHeights = [];

    $('.select-plan').on('click',function(){
        $('.select-plan').text('select');
        $('.plan').removeClass('selected');
       $(this).closest('.plan').toggleClass('selected');
       if($(this).text()=='selected') {
           $(this).text('select');
       }
       else {
           $(this).text('selected');
       }
    });

    for(var i = 0; i < $('.plan').length; i++) {
        planHeights.push($('.plan').eq(i).outerHeight());
    }

    console.log(planHeights);

    $('.plan').css('height', Math.max.apply(null, planHeights));

    $('.plan .select-plan').css({position: 'absolute', transform: 'translateX(-50%)'});

});

// $(window).on('load resize', function(){
// 	$('.main-page .second-block .item').each(function(){
//   		var itemHeights = [];
//   		itemHeights.push($(this).find('.image').outerHeight());
//   		itemHeights.push($(this).find('.text').outerHeight());
//   		$(this).find('.text,.image').css('height', Math.max.apply(null,itemHeights));
//     });
// });