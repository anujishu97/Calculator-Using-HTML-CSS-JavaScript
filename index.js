

function add_num()
{
	//document.getElementById("res").innerHTML=plus;
	var num1=document.getElementById("num1").value;
var num2=document.getElementById("num2").value;
	if(num1=="" && num2=="")
	{
		document.getElementById("res").innerHTML="Please enter the value";
	}
	else{
		num1=parseFloat(num1);
		num2=parseFloat(num2);
		document.getElementById("res").innerHTML="Addition is-"+(num1+num2);
	}
}


function subs_num(){
	var num1=document.getElementById("num1").value;
var num2=document.getElementById("num2").value;
	if(num1=="" && num2=="")
	{
		document.getElementById("res").innerHTML="Please enter the value";
	}
	else{
		num1=parseFloat(num1);
		num2=parseFloat(num2);
		document.getElementById("res").innerHTML="Substraction is="+(num1-num2);
	}
}
function multi_num(){
	var num1=document.getElementById("num1").value;
var num2=document.getElementById("num2").value;
	if(num1=="" && num2=="")
	{
		document.getElementById("res").innerHTML="Please enter the value";
	}
	else{
		num1=parseFloat(num1);
		num2=parseFloat(num2);
		document.getElementById("res").innerHTML="Multiplication is="+(num1*num2);
	}
}
function divi_num(){
	var num1=document.getElementById("num1").value;
var num2=document.getElementById("num2").value;
	if(num1=="" && num2=="")
	{
		document.getElementById("res").innerHTML="Please enter the value";
	}
	else{
		num1=parseFloat(num1);
		num2=parseFloat(num2);
		document.getElementById("res").innerHTML="Division is="+(num1/num2).toFixed(2);
	}
}


function clr_num(){
	document.getElementById("num1").value="";
	document.getElementById("num2").value="";
	document.getElementById("res").innerHTML=""
}