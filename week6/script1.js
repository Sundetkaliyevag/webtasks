function f(e){
	let text=e.currentTarget.parentNode;
	text.style.setProperty("text-decoration","line-through");
}

let buttons=document.querySelectorAll("#tasks button");
for(let button of buttons){
	button.addEventListener("click",f)
}