function f(obj){
	 var img =document.getElementsByTagName("img")[0].src = obj.target.src;
	 
}


document.body.addEventListener('click', f);

