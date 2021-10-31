function doFirst(){
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d');

	canvas.font="bold 22px Tahoma";
	canvas.textAlign="start";
	canvas.fillText("start", 10,30);
//Translate
	canvas.translate(100,150);//this takes 2 parameters x and y ....move 100px right and 150px down
	canvas.fillText("after translate",0,0);
//Rotate
	canvas.rotate(1);
	canvas.fillText("after rotate",0,0);
//Scale
	canvas.scale(1.5,4);
	canvas.fillText("after scale",0,20);

}
window.addEventListener('load', doFirst, false); 