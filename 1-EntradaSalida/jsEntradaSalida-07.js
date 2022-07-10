
// Alumno: Fernado Romero 
// Division: J

function sumar()
{	
 let numeroUno;
 let numeroDos;
 let resultado;
 numeroUno = parseInt(document.getElementById('txtIdNumeroUno').value);
 numeroDos = parseInt(document.getElementById('txtIdNumeroDos').value);
 resultado = numeroUno + numeroDos;
 alert('La suma es ' + resultado);	
}

function restar()
{
 numeroUno=parseInt(document.getElementById('txtIdNumeroUno').value);
 numeroDos=parseInt(document.getElementById('txtIdNumeroDos').value);
 resultado= numeroUno - numeroDos;
 alert('La resta es ' + resultado);
}

function multiplicar()
{ 
  numeroUno = parseInt(document.getElementById('txtIdNumeroUno').value);
  numeroDos = parseInt(document.getElementById('txtIdNumeroDos').value);
  resultado = numeroUno * numeroDos;
  //alert('La multiplicacion es ' + resultado);
  alert(`El resultado de la multiplicacion es ${resultado}`);
}

function dividir()
{
	numeroUno = parseInt(document.getElementById('txtIdNumeroUno').value);
	numeroDos = parseInt(document.getElementById('txtIdNumeroDos').value);
	resultado = numeroUno / numeroDos;
	alert(`La division es ${resultado}`);
}

