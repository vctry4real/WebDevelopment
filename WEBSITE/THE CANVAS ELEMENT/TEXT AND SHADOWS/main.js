function doFirst(){
	x = document.getElementById('canvas');
	canvas = x.getContext('2d');

//this should come first before the text, font , etc
	canvas.shadowOffsetX = 4;
	canvas.shadowOffsetY = 4;
	canvas.shadowBlur = 6;
	canvas.shadowColor = 'rgba(0,0,255,.5)'; 

//the text
	canvas.font="bold 33px Tahoma";
	canvas.textAlign="end";
	canvas.fillText("myNameIsVictory",300,100 )

}
window.addEventListener('load', doFirst, false);