let countries = ["Kazakhstan","Russia","England","France"];
let cities_by_country = {"Kazakhstan":["Almaty","Astana","Karagandy"],"Russia":["Moscow","Saint-Petersburg","Kazan"],"England":["London","Manchester","Liverpool"],"France":["Paris","Lyon","Marseille"]};

/* Write your code here */
for(let country of countries){
	let selCount=document.createElement("option");
	selCount.textContent=country;
	document.querySelector("#countries").appendChild(selCount);}


function f(){
	let sel=document.querySelectorAll("#cities option")
	for(let i of sel){
		i.remove();}


	for(let country in cities_by_country){
		let cont=document.querySelector("#countries").value;
		
		if(cont==country){
			
			for(let city of cities_by_country[cont]){
				let city1=document.createElement("option");
				city1.textContent=city;
				document.querySelector("#cities").appendChild(city1);}


		}


	}
}
document.querySelector("#countries").addEventListener("change",f)