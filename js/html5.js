

$(function(){
	$('.menuTo1').on('click', function(){
		$('.menu1').slideToggle('300', function(){
			if($(this).css('display') === 'none') {
				$(this).removeAttr('style');
			}
		});
	});
	$('.header').load('header.html'); // загрузку HTML кода из файла header.html  
});
