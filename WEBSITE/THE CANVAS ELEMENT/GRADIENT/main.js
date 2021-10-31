function doFirst(){
	var x = document.getElementById('canvas'); 
	canvas = x.getContext('2d');//Any time make a refrence to the canvas,you need to specify this is a 2d 
	/*canvas.strokeStyle="red";
	canvas.strokeRect(10,10,100,200);//(10, 10)this tells it where to start,200 - this means the how big the rectangle should be
	//canvas.fillStyle="blue";//this will fill the canvas with blue
	//canvas.fillRect(10,10,100,200);//this draws a rectangle with some colours in it
	//canvas.clearRect(20,20,50,90);// this like an eraser */

	//making the gradient
	var g = canvas.createLinearGradient(0,0,100,100);
	g.addColorStop(.0,"blue");
	g.addColorStop(1,"red");

	//adding the gradient as a colour
	canvas.fillStyle = g;
	canvas.fillRect(0,0,100,100); 


}
window.addEventListener('load',doFirst,false); 