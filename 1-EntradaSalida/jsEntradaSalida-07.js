/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/

// Alumno: Fernado Romero 
// Division: J

function sumar()
{	
 let num1;
 let num2;
 let resultado;
 num1 = parseInt(document.getElementById('txtIdNumeroUno').value);
 num2 = parseInt(document.getElementById('txtIdNumeroDos').value);
 resultado = num1 + num2;
 alert('La suma es ' + resultado);	
}

function restar()
{
 num1=parseInt(document.getElementById('txtIdNumeroUno').value);
 num2=parseInt(document.getElementById('txtIdNumeroDos').value);
 resultado= num1 - num2;
 alert('La resta es ' + resultado);
}

function multiplicar()
{ 
  num1 = parseInt(document.getElementById('txtIdNumeroUno').value);
  num2 = parseInt(document.getElementById('txtIdNumeroDos').value);
  resultado = num1 * num2;
  //alert('La multiplicacion es ' + resultado);
  alert(`El resultado de la multiplicacion es ${resultado}`);
}

function dividir()
{
	num1 = parseInt(document.getElementById('txtIdNumeroUno').value);
	num2 = parseInt(document.getElementById('txtIdNumeroDos').value);
	resultado = num1 / num2;
	alert(`La division es ${resultado}`);
}

