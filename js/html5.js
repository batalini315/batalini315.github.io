

$(function(){
	$('.menuTo1').on('click', function(){
		$('.menu1').slideToggle('300', function(){
			if($(this).css('display') === 'none') {
				$(this).removeAttr('style');
			}
		});
	});
	  
});
