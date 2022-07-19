/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numero = 0;
	let ventana = 0;
	let suma;
	let promedio;

	suma = document.getElementById('txtIdSuma').value;
	promedio = document.getElementById('txtIdPromedio').value;

	while( ventana >= 0 || ventana == "si" ){
		   ventana = ventana + 1;
           ventana = prompt('INGRESE UN NUMERO');
		   ventana = parseInt(ventana);
		   ventana = prompt('QUIERE INGRESAR OTRO NUMERO??');
           numero = numero + 1; 
	}
	document.getElementById('txtIdSuma').value = suma;

}