function dofirst(){
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d');

	//Drawing The Shape
	canvas.beginPath();
	canvas.moveTo(50,50,50);
	canvas.lineTo(70,250);
	canvas.lineTo(200,100);
	canvas.closePath();//this means draw a line back to the starting point
	canvas.stroke()

}
window.addEventListener('load', dofirst, false);