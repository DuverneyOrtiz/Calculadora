var Calculadora={
	valor1:"",
	valor2:"",
	sumar:function(){			
			return this.valor1+this.valor2;

	},
	restar:function(){
		return this.valor1-this.valor2;
	},
	multiplicacion:function(){
		return this.valor1*this.valor2;
	},
	division:function(){
		resultado=this.valor1/this.valor2;
		return resultado.toString().substr(0,8)
	}
}

var on=document.getElementById("on");
var cero=document.getElementById("0");
var uno=document.getElementById("1");
var dos=document.getElementById("2");
var tres=document.getElementById("3");
var cuatro=document.getElementById("4");
var cinco=document.getElementById("5");
var seis=document.getElementById("6");
var siete=document.getElementById("7");
var ocho=document.getElementById("8");
var nueve=document.getElementById("9");
var punto=document.getElementById("punto");
var sign=document.getElementById("sign");
var mas=document.getElementById("mas");
var menos=document.getElementById("menos");
var igual=document.getElementById("igual");
var por=document.getElementById("por");
var dividido=document.getElementById("dividido");

var display=document.getElementById("display");
var Num="";
var clear=0;
var puntobool=true;


function concatenar(numero){
	Num=Num.toString();
	if(Num.length<8){
		if(clear==0){
			Num=numero.toString();		
		}else{
			Num+=numero.toString();
		}
		display.innerHTML=Num;	
		clear=1;
	}	
}

function validarCero(){
	if(Number(display.innerHTML)!=0){return true;}
	else{return false;}
}


cero.addEventListener("click", function(){

	if(validarCero()){
		concatenar("0");
	}
	
});

punto.addEventListener("click", function(){
	if(puntobool){
		caracter=".";
		if(Number(display.innerHTML)==0){
			caracter="0.";
		}
		concatenar(caracter);
		puntobool=false;
	}
});

sign.addEventListener("click", function(){
	Num=Number(display.innerHTML)*(-1);
	display.innerHTML=Num;	
});

on.addEventListener("click", function(){
	display.innerHTML="0";
	clear=0;
	puntobool=true;
	Num="";
});

uno.addEventListener("click", function(){
	concatenar("1");
});

dos.addEventListener("click", function(){
	concatenar("2");
});

tres.addEventListener("click", function(){
	concatenar("3");
});


cuatro.addEventListener("click", function(){
	concatenar("4");
});

cinco.addEventListener("click", function(){
	concatenar("5");
});

seis.addEventListener("click", function(){
	concatenar("6");
});

siete.addEventListener("click", function(){
	concatenar("7");
});

ocho.addEventListener("click", function(){
	concatenar("8");
});

nueve.addEventListener("click", function(){
	concatenar("9");
});


var operacion=0;
var Numero1=0;
var Numero2=0;
var secuenciaIgual=true;


igual.addEventListener("click", function(){


	var Numero2=Number(display.innerHTML);
	Calculadora.valor1=Numero1;
	Calculadora.valor2=Numero2;	
	
	switch(operacion){
		case 1:{	
				
			display.innerHTML=Calculadora.sumar();
			if(secuenciaIgual){
				Numero1=Numero2;
				secuenciaIgual=false;
			}		
		}break;
		case 2:{

			if(secuenciaIgual){
				sustraendo=Numero2;
				minuendo=Numero1;
				secuenciaIgual=false;
			}
			Calculadora.valor2=sustraendo;
			Calculadora.valor1=minuendo;

			display.innerHTML=Calculadora.restar();
			minuendo=Number(display.innerHTML);
			
		}break;
		case 3:{
			
			display.innerHTML=Calculadora.multiplicacion();
			if(secuenciaIgual){
				Numero1=Numero2;
				secuenciaIgual=false;
			}
		}break;
		case 4:{
			if(secuenciaIgual){
				divisor=Numero2;				
				secuenciaIgual=false;
			}
			
			Calculadora.valor2=divisor;
			display.innerHTML=Calculadora.division();
			Numero1=Number(display.innerHTML);
			
		}break;
	}

	

});


function inicializarvariables(){
	Numero1=Number(display.innerHTML);
	display.innerHTML="";
	Num="";
	secuenciaIgual=true;
}

mas.addEventListener("click", function(){
	operacion=1;
	inicializarvariables();
	
});

menos.addEventListener("click", function(){
	operacion=2;
	inicializarvariables();
});

por.addEventListener("click", function(){
	operacion=3;
	inicializarvariables();
});

dividido.addEventListener("click", function(){
	operacion=4;
	inicializarvariables();
});

