function getStuff(){
	//document.querySelector('#tuna').onclick=talk; //this is used to select only one item with an "id = tuna" and also classes too ".bucky for example"
	var list = document.querySelectorAll('#tuna');
	//list[1].onclick=talk;//this is going to print the list item with index 1, that has an id = 'tuna'
	for(var i=0; i<list.length;i++){
		list[i].onclick=talk;
		//querySelector all is used when you want to reference bunch of stuffs on your page
	}
}
function talk(){
	alert('yoyoma!!');
}
window.onload=getStuff; //this means that whenever our html page loads, call the "getstuff" function