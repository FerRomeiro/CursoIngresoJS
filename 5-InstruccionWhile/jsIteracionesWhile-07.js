/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{

	let numero;
	let ventana = 'y';
	let promedioSuma;
	let suma = 0;
	let acumuladorNumeros = 0;
	let contador = 0;



    
    while( ventana == 'y' ){
	numero = prompt('INGRESE UN NUMERO');
	numero = parseInt(numero);
	acumuladorNumeros = acumuladorNumeros + numero;
	ventana = prompt('QUERES INGRESAR OTRO NUMERO?? y/n');
	contador = contador + 1;
	

	}
    
	suma = suma + acumuladorNumeros;
	if( acumuladorNumeros > 0 ){
        promedioSuma = acumuladorNumeros/contador;
	}else{
		promedioSuma = 0;
	}

    document.getElementById('txtIdSuma').value = suma;
    document.getElementById('txtIdPromedio').value = promedioSuma;
















	/*
	let numero
	let ventana = 'y';
	let suma = 0;
	let promedio = 0;
	let promedioTotal;
    let sumaTotal;
	
    

	while( ventana == 'y' ){
           numero = prompt('INGRESE UN NUMERO');
		   numero = parseInt(numero);
		   ventana = prompt('QUIERE INGRESAR OTRO NUMERO???');
		   suma = suma + numero;
		   promedio = promedio + 1;

	}
    promedioTotal = suma / promedio;
	sumaTotal = suma + numero;

	document.getElementById('txtIdPromedio').value = promedioTotal;
	document.getElementById('txtIdSuma').value = sumaTotal;

*/


/*
	while( ventana >= 0 || ventana == "si" ){
		   ventana = ventana + 1;
           ventana = prompt('INGRESE UN NUMERO');
		   ventana = parseInt(ventana);
		   ventana = prompt('QUIERE INGRESAR OTRO NUMERO??');
           numero = numero + 1; 
	}
	document.getElementById('txtIdSuma').value = suma;
	*/

}