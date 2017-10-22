
prevSlide2(){
	alert('sl2');
}
/*
function prevSlide(){
	alert('pref2");
}
$.ajax({
    url: '/ajax/example.html',             // указываем URL и
    dataType : "json",                     // тип загружаемых данных
    success: function (data, textStatus) { // вешаем свой обработчик на функцию success
        $.each(data, function(i, val) {    // обрабатываем полученные данные
            
        });
    }               
});
---------------------------------------------------------------------
<?xml version="1.0" encoding="UTF-8"?>
<note>
    <to>Tove</to>
    <from>Jani</from>
    <heading>Reminder</heading>
    <body>Don't forget me this weekend!</body>
</note>

    $('#example-3').click(function(){                  // вешаем на клик по элементу с id = example-3
        $.post('ajax/example.xml', {}, function(xml){  // загрузку XML из файла example.xml   
            $('#example-3').html('');
            $(xml).find('note').each(function(){       // заполняем DOM элемент данными из XML
                $('#example-3').append('To: '   + $(this).find('to').text() + '<br/>')
                               .append('From: ' + $(this).find('from').text() + '<br/>')
                               .append('<b>'    + $(this).find('heading').text() + '</b><br/>')
                               .append(           $(this).find('body').text() + '<br/>');
            });
        }, 'xml');                                     // указываем явно тип данных
    })
	
-----------------------------------------------------------------------------------------------	
jQuery.getScript

jQuery.getScript данная функция загружает и выполняет локальный JavaScript. Может принимать следующие параметры:

    url запрашиваемого скрипта
    callback функция, которой будет скормлен результат (необязательный параметр)

JavaScript:
	
$(document).ready(function(){                          // по завершению загрузки страницы
    $('#example-5').click(function(){                  // вешаем на клик по элементу с id = example-5
        $.getScript('ajax/example.js', function(){     // загрузку JavaScript'а из файла example.js 
            testAjax();                                // выполняем загруженный JavaScript
        });                
    })
});

Файл example.js:
	
function testAjax() {
    $('#example-5').html('Test completed');  // изменяем элемент с id = example-5
}
------------------------------------------------------------------------------
	//var slideNow = 1;
alret('dfdf');
/*
var slideCount = $('#slidewrapper').children().length();
var translateWidth = 0;
var slideInterval = 2000;

function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
};

	
	
    setInterval(nextSlide, slideInterval);
	$('#next-btn').click(function() {
	alert('next');
       // nextSlide();
    });

    $('#prev-btn').click(function() {
		alert('prev');
       // prevSlide();
		});


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
	*/

