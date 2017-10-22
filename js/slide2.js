
 var slideCount;
 var translateWidth = 0;
var slideInterval = 2000;
var slideNow = 1;


function prevSlide2(){
	
	slideCount = $('#slidewrapper').children().length;
	prevSlide();
};
	function prevSlide() {
		
		if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
			translateWidth = -$('#viewport').width() * (slideCount - 1);
			$('#slidewrapper').css({
				'transform': 'translate(' + translateWidth + 'px, 0)',
				'-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
				'-ms-transform': 'translate(' + translateWidth + 'px, 0)',
			});
			slideNow = slideCount;
		} else {
			translateWidth = -$('#viewport').width() * (slideNow - 2);
			$('#slidewrapper').css({
				'transform': 'translate(' + translateWidth + 'px, 0)',
				'-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
				'-ms-transform': 'translate(' + translateWidth + 'px, 0)',
			});
			slideNow--;
		}
	};
	function nextSlide2(){
	
	slideCount = $('#slidewrapper').children().length;
	nextSlide();
};
	function nextSlide() {
		
		if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
			translateWidth = -$('#viewport').width() * (slideCount + 1);
			$('#slidewrapper').css({
				'transform': 'translate(' - translateWidth + 'px, 0)',
				'-webkit-transform': 'translate(' - translateWidth + 'px, 0)',
				'-ms-transform': 'translate(' - translateWidth + 'px, 0)',
			});
			slideNow = 0;
		} else {
			translateWidth = -$('#viewport').width() * (slideNow + 2);
			$('#slidewrapper').css({
				'transform': 'translate(' - translateWidth + 'px, 0)',
				'-webkit-transform': 'translate(' - translateWidth + 'px, 0)',
				'-ms-transform': 'translate(' - translateWidth + 'px, 0)',
			});
			slideNow++;
		}
	};