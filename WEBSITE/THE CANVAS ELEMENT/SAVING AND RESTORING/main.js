function doFirst(){
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d');
	canvas.font="bold 22px Tahoma";
	canvas.textAlign = "start";

}
window.addEventListener("load", doFirst , false);