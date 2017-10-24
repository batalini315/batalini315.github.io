    $(document).ready(function(){
		var now = new Date();
		var num = Number(now.getMonth())+1;
		if(num<10) num= '0'+num;
		var dat= now.getDate()+'.'+num+'.'+now.getFullYear();
		$('.data').html('только по '+dat);
//alert( dat );

        //Скрыть PopUp при загрузке страницы    
        PopUpHide();
		var slideid= Number($('#slide_index').html());
		$('.right-st').click(function() {
			slideid= Number($('#slide_index').html());
			if(slideid< 9) {
				var slideid2=slideid+1;
				$('#slide_index').html(slideid+1);
				$('.slide1 .imd-th').html('<img src="'+comment.image[slideid]+'">');
				$('.slide1 .img-text').html(comment.text[slideid]);
				$('.slide1 .slide-name').html(comment.name[slideid]);
				$('.slide1 .slide-taun').html(comment.taun[slideid]);
				
				
				$('.slide2 .imd-th').html('<img src="'+comment.image[slideid2]+'">');
				$('.slide2 .img-text').html(comment.text[slideid2]);
				$('.slide2 .slide-name').html(comment.name[slideid2]);
				$('.slide2 .slide-taun').html(comment.taun[slideid2]);
			}
		})
		$('.left-st').click(function() {
			slideid= Number($('#slide_index').html());
			if(slideid > 1) {
				
				
				$('#slide_index').html(slideid-1);
				slideid = slideid-2;
				var slideid2=slideid+1;
				$('.slide1 .imd-th').html('<img src="'+comment.image[slideid]+'">');
				$('.slide1 .img-text').html(comment.text[slideid]);
				$('.slide1 .slide-taun').html(comment.name[slideid]);
				$('.slide1 .slide-taun').html(comment.taun[slideid]);
				
				
				$('.slide2 .imd-th').html('<img src="'+comment.image[slideid2]+'">');
				$('.slide2 .img-text').html(comment.text[slideid2]);
				$('.slide2 .slide-taun').html(comment.name[slideid2]);
				$('.slide2 .slide-taun').html(comment.taun[slideid2]);
			}
			
		})
		
		
		$('#prev-btn').click(function() {
        prevSlide2();
		});
		$('#next-btn').click(function() {
        prevSlide2();
		});
		
		$('#ener').click(function(){$('.as1').empty();}); // удаление содержимого .as1
	
	
    });
    //Функция отображения PopUp
    function PopUpShow(){
        $("#popup").show();
    }
    //Функция скрытия PopUp
    function PopUpHide(){
        $("#popup").hide();
    }

function wiev_potap(str){	
	$('#popup').fadeIn(1200); // плавно открываем
	$('.b-popup-content').html(str);
	$('#popup').fadeOut(1900); // скрыли
}

function read_word(myform_name){
   var name=$(' [name=\'name\']').val().trim();    
    var mail=$(' [name=\'email\']').val().trim();
    var error='';
	var str='';
	if(name != undefined) {
		if(name.length <3 || name.length >20 ){error+='Нет имени<br>';}
		else {str+='name='+name;}
	}
       
	if(mail != undefined){
        if(!mail.match(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i)) error+='Введите mail<br>';
        else  { if(str) {str+='&mail='+ mail;} else str+='  mail='+ mail; }
    }
	if(error != '') {              
			  wiev_potap(error);			
    } else {
		//goMail(str); 
		wiev_potap('Ваша заявка успешно отправлена! <br>'+str);		
	}
}



var comment = {	
image: ["image/img-1.jpg","image/img-2.jpg","image/img-1.jpg","image/img-2.jpg","image/img-1.jpg","image/img-2.jpg","image/img-1.jpg","image/img-2.jpg","image/img-1.jpg","image/img-2.jpg"],
	text: ["1 Никогда не готовила ничего сложнее отварных макарон. Теперь готовлю, как шеф-повар модного ресторана! Все безумно вкусно и полезно. И тающие килограммы в качестве бонуса. Разве не прекрасно? ",
	"2 Не думала, что в моем возрасте смогу выглядеть как девчонка. Всю жизнь была пышкой, а тут такая красота – сама на себя не налюбуюсь. Мой случай – подтверждение того, что после 40 жизнь только начинается. Мила Гриценко – мой герой.",
	"3 Никогда не готовила ничего сложнее отварных макарон. Теперь готовлю, как шеф-повар модного ресторана! Все безумно вкусно и полезно. И тающие килограммы в качестве бонуса. Разве не прекрасно? ",
	"4 Не думала, что в моем возрасте смогу выглядеть как девчонка. Всю жизнь была пышкой, а тут такая красота – сама на себя не налюбуюсь. Мой случай – подтверждение того, что после 40 жизнь только начинается. Мила Гриценко – мой герой.",
	"5 Никогда не готовила ничего сложнее отварных макарон. Теперь готовлю, как шеф-повар модного ресторана! Все безумно вкусно и полезно. И тающие килограммы в качестве бонуса. Разве не прекрасно? ",
	"6 Не думала, что в моем возрасте смогу выглядеть как девчонка. Всю жизнь была пышкой, а тут такая красота – сама на себя не налюбуюсь. Мой случай – подтверждение того, что после 40 жизнь только начинается. Мила Гриценко – мой герой.","7 Никогда не готовила ничего сложнее отварных макарон. Теперь готовлю, как шеф-повар модного ресторана! Все безумно вкусно и полезно. И тающие килограммы в качестве бонуса. Разве не прекрасно? ",
	 "8 Не думала, что в моем возрасте смогу выглядеть как девчонка. Всю жизнь была пышкой, а тут такая красота – сама на себя не налюбуюсь. Мой случай – подтверждение того, что после 40 жизнь только начинается. Мила Гриценко – мой герой.",
	 "9 Никогда не готовила ничего сложнее отварных макарон. Теперь готовлю, как шеф-повар модного ресторана! Все безумно вкусно и полезно. И тающие килограммы в качестве бонуса. Разве не прекрасно? ", 
	 "10 Не думала, что в моем возрасте смогу выглядеть как девчонка. Всю жизнь была пышкой, а тут такая красота – сама на себя не налюбуюсь. Мой случай – подтверждение того, что после 40 жизнь только начинается. Мила Гриценко – мой герой."],
	name: ["Марта, 28 лет","Марина, 40 лет","Марта, 29 лет","Марина, 40 лет","Марта, 25 лет","Марина, 40 лет","Марта, 24 лет","Марина, 40 лет","Марта, 23 лет","Марина, 40 лет"],
	taun: ["Мачулищи1","Гомель1","Мачулищи2","Гомель2","Мачулищи3","Гомель3","Мачулищи4","Гомель4","Мачулищи5","Гомель5"]
}



