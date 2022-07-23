/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{

	let numero;
	let numeroNegativo;
	let SumaDeNumerosNegativos = 0;
	let contadorDeNumerosNegativos = 0;
	let promedioTotalNumerosNegativos;
	let numeroPositivo;
	let SumaDeNumerosPositivos = 0;
	let contadorDeNumerosPositivos = 0;
	let promedioTotalNumerosPositivos;
	let cantidadDeCeros = 0;
	let cantidadDeNumerosPares = 0;
	let diferencia;
	let resto;
	let respuesta = 'y';
	

    while( respuesta == 'y' ){
           numero = prompt('INGRESE UN NUMERO POSITIVO O NEGATIVO');
		   numero = parseInt(numero);

           //cantidad de numeros pares
		   resto = numero%2;
		   if( resto == 0 ){
               cantidadDeNumerosPares = cantidadDeNumerosPares + 1;
		   }


           // suma, promedio y contador de negativos 
		   if ( numero < 0 ){
                numeroNegativo = numero;
				SumaDeNumerosNegativos = SumaDeNumerosNegativos + numeroNegativo;
				contadorDeNumerosNegativos = contadorDeNumerosNegativos + 1;
				promedioTotalNumerosNegativos = SumaDeNumerosNegativos/contadorDeNumerosNegativos;
		   }
		   else{
			    if( numero > 0 ){ // suma, promedio y contador de positivos
                    numeroPositivo = numero;
					SumaDeNumerosPositivos = SumaDeNumerosPositivos + numeroPositivo;
					contadorDeNumerosPositivos = contadorDeNumerosPositivos + 1;
					promedioTotalNumerosPositivos = SumaDeNumerosPositivos/contadorDeNumerosPositivos;

				}else{ // cantidad de ceros
					cantidadDeCeros = cantidadDeCeros + 1;
				}
		   }

		   
		   //diferencia entre positivos y negativos
		   diferencia = (SumaDeNumerosPositivos-SumaDeNumerosNegativos);


		   respuesta = prompt('QUIERE INGRESAR OTRO NUMERO??? y/n');
	}
	    alert('CANTIDAD DE NUMEROS PARES ' + cantidadDeNumerosPares)
	    alert('CANTIDAD DE CEROS ' + cantidadDeCeros);
		alert('La suma total de numeros negativos es ' + SumaDeNumerosNegativos + ' y la cantidad total de numeros negativos es ' + contadorDeNumerosNegativos + ' PROMEDIO DE NUMEROS NEGATIVOS ' + promedioTotalNumerosNegativos);
		alert('La suma total de numeros positivos es ' + SumaDeNumerosPositivos + ' y la cantidad total de numeros positivos es ' + contadorDeNumerosPositivos + ' PROMEDIO DE NUMEROS POSITIVOS ' + promedioTotalNumerosPositivos);
		alert('DIFERENCIA ENTRE POSITIVOS Y NEGATIVOS ES ' + diferencia);
}
	
/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
/*
function mostrar()
{

	let numeroIngresado;
	let pregunta;
	let sumaNegativos;
	let sumaPositivos;
	let contadorPositivo;
	let contadorNegativo;
	let contadorDeCeros;
	let resto;
	let contadorDeNumerosPares;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;
	

	sumaNegativos = 0;
	sumaPositivos = 0;
	contadorNegativo = 0;
	contadorPositivo= 0;
	contadorDeCeros = 0;
	contadorDeNumerosPares = 0;
	

	pregunta = "si";
	
	while(pregunta == "si"){

		numeroIngresado = prompt("Ingrese un nro");
		numeroIngresado = parseInt(numeroIngresado);
		
		if(numeroIngresado < 0){

			sumaNegativos = numeroIngresado + sumaNegativos;
			contadorNegativo = contadorNegativo + 1;

		}
		else
		{
			if(numeroIngresado > 0)
			{
				sumaPositivos = numeroIngresado + sumaPositivos;
				contadorPositivo = contadorPositivo + 1;

			}
			else
			{
				contadorDeCeros = contadorDeCeros + 1;
			}
		}
		resto = numeroIngresado % 2;

		if(resto == 0)
		{
			contadorDeNumerosPares = contadorDeNumerosPares + 1;
		}
		
		pregunta = prompt("Desea seguir ingresando nros si/no");
	}
	if(contadorPositivo == 0)
	{
		document.write("No se puede promediar los postivos <br>");
	}
	else
	{
		promedioPositivos = sumaPositivos / contadorPositivo;
		document.write("El promedio de los positivos es: " + promedioPositivos + "<br>");
	}
	if(contadorNegativo == 0)
	{
		document.write("No se puede promediar los negativos <br>");
	}
	else
	{
		promedioNegativos = sumaNegativos / contadorNegativo;
		document.write("El promedio de los negativos es: " + promedioNegativos + "<br>");
	}
	diferencia = sumaPositivos - sumaNegativos;
	document.write("La diferencia entre positivos y negatisvos es: "+ diferencia + "<br>");

	
	*/

	/*document.write(contadorPositivo); 
	document.write(contadorNegativo);
	document.write(contadorDeCeros);*/
