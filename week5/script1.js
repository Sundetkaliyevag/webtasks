function f(){
	 let s11=document.getElementById("s11").value;
	 let s12=document.getElementById("s12").value;
	 let s13=document.getElementById("s13").value;
	 let s21=document.getElementById("s21").value;
	 let s22=document.getElementById("s22").value;
	 let s23=document.getElementById("s23").value;
	 let s31=document.getElementById("s31").value;
	 let s32=document.getElementById("s32").value;
	 let s33=document.getElementById("s33").value;
	 let sum=(s11*s22*s33)+(s12*s23*s31)+(s13*s21*s32)-((s13*s22*s31)+(s11*s23*s32)+(s12*s21*s33));

	 document.getElementById("result").firstChild.nodeValue=sum;
	}
	document.querySelector("#determinant").addEventListener("click",f)


