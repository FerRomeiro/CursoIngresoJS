/*
ALUMNO: FERNANDO ROMERO MONTERO
DIV: J
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero;
	let numerosPositivos = 0;
	let numeroNegativos = 1;
	let ventana = 'y';
	let bandera = 0;



	while( ventana == 'y' ){
           numero = prompt('INGRESE UN NUMERO POSITIVO O NEGATIVO');
		   numero = parseInt(numero); 
           ventana = prompt('QUIERE INGRESAR OTRO NUMERO y/n');
		   
		   if ( numero >= 0 ){
                numerosPositivos = numerosPositivos + numero;
		   }
		   else{
			    bandera = 1;
			    numeroNegativos = numeroNegativos * numero;
		   }
	}

	if( bandera == 0 ){
        numeroNegativos = 0;
	}
	document.getElementById('txtIdProducto').value = numeroNegativos;
	document.getElementById('txtIdSuma').value = numerosPositivos;
			


	// OPCION MAS LARGA
	/*
	        if( bandera == 0 ){
                document.getElementById('txtIdProducto').value = 0;
			}
			else{
				document.getElementById('txtIdProducto').value = numeroNegativos;
			}
            document.getElementById('txtIdSuma').value = numerosPositivos;
			*/
			
}