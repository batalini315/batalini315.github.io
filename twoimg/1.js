document.getElementById("myslide").onmousemove = function(event){
	var x= event.offsetX;// относительно родителя
	document.getElementById("two").style.width= x + 'px';
}
// function sdvig(x){
	 
	// document.getElementById("two").style.width;
	//if(x< '105px'){
		// alert(x);
	//	setInterval(sdvig,50);
	//}
// }
//document.getElementById("myslide").onmouseout= function(event){sdvig(event.offsetX);};
function userProgress(time){
	var start=0;
	var time  = time*10;
	var progrEl= document.getElementById("user-progress");
	var progrTest= document.getElementById("test-progress");
	var intrv=setInterval(
	function(){
		if(start>100){
			clearInterval(intrv);
		} else {
			progrEl.value=start;
			progrTest.value=start/2;
			start++;
		}
		
		
	},time);
}
userProgress(8);
var blockimg=document.getElementById("mutyimg");
blockimg.onclick= function(event){
	console.log(event);
	if(event.target.tagName =="IMG"){
		
		event.target.classList.add('border');
	}
}