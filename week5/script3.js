function f(){
		var table = document.getElementById('students');
		if(document.getElementById("name").value==""){
			document.getElementById("name").style.border = "5px solid red";

		}else if(document.getElementById("surname").value==""){
			document.getElementById("surname").style.border = "5px solid red";	
		
		}else if(document.getElementById("faculty").value=="-1"){
			document.getElementById("faculty").style.border="5px solid red";
		}else{
			var newRow   = table.insertRow();
			
			var Cell1  = newRow.insertCell(0);
			var Cell2  = newRow.insertCell(1);
			var Cell3  = newRow.insertCell(2);
			var name  = document.createTextNode(document.getElementById("name").value);
			var surname  = document.createTextNode(document.getElementById("surname").value);
			var faculty  = document.createTextNode(document.getElementById("faculty").value);
			Cell1.appendChild(name);
			Cell2.appendChild(surname);	
			Cell3.appendChild(faculty);		
		}
}



var button=document.getElementById("addStudent")
button.addEventListener("click", f);
