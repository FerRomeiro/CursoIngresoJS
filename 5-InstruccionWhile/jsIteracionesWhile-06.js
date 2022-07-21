/*
ALUMNO: FERNANDO ROMERO
DIV: J
*/


function mostrar()
{
	let numero;
	let ventana = 0;
    let promedio;
	let suma;
    
	promedio = document.getElementById('txtIdPromedio').value;
	suma = document.getElementById('txtIdSuma').value;
    
	while( ventana < 5 ){
		   ventana = ventana + 1;
           numero = prompt('INGRESE UN NUMERO ' + ventana);
           numero = parseInt(numero);
		   suma = suma + numero;

	}
	suma = numero + numero + numero + numero + numero;
	promedio = (numero + numero + numero + numero + numero)/5;
	document.getElementById('txtIdSuma').value = suma;
	document.getElementById('txtIdPromedio').value = promedio;
}