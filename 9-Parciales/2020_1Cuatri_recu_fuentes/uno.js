
function mostrar()
{
	let contador = 0;
	let tipoProducto;
	let precio;
	let cantidadUnidades;
	let bandera = 0;
	let alcoholMasBarato;
	let unidadesAlcohol = 0;
	let fabricanteAlcohol;
	let banderaTipo = 0;


	while(contador < 5){
		//TIPO DE PRODUCTO	
		  tipoProducto=prompt('INGRESE PRODUCTO (alcohol, barbijo o jabon');
		  while(tipoProducto != "alcohol" && tipoProducto != "barbijo" && tipoProducto != "jabon"){
			    tipoProducto=prompt('ERROR, INGRESE PRODUCTO CORRECTO');
		  }
		// EL PRECIO 
		  precio=prompt('INGRESE PRECIO ENTRE 100 Y 300');
		  precio=parseInt(precio);

		  while(precio < 100 || precio > 300){
			    precio=prompt('ERROR, INGRESE UN PRECIO ENTRE 100 Y 300');
				precio=parseInt(precio);
		  }
		// CANTIDAD DE UNIDADES 
		  cantidadUnidades = prompt('INGRESE LA CANTIDAD DE UNIDADES ENTRE 1 Y 1000');
		  cantidadUnidades=parseInt(cantidadUnidades);

		  while(cantidadUnidades < 1 || cantidadUnidades > 1000){
			    cantidadUnidades=prompt('ERROR, DEBE SER ENTRE 0 Y 1000 UNIDADES');
				cantidadUnidades=parseInt(cantidadUnidades);
		  }
		// MARCA Y FABRICANTE
		  marca=prompt('INGRESE LA MARCA');

		  fabricante=prompt('INGRESE EL FABRICANTE');

		//a) Del amás barato de los alcohol, la cantidad de unidades y el fabricnte
		
		if(tipoProducto=="alcohol"){

			if( precio < alcoholMasBarato || bandera == 0){
				alcoholMasBarato = precio;
				unidadesAlcohol = cantidadUnidades;
				fabricanteAlcohol = fabricante;
				bandera = 1;
			}			
	    }
		//b) Del tipo con mas unidades, el promedio por compra

		





		contador = contador + 1;

	}

	document.write('ALCOHOL MAS BARATO ' + alcoholMasBarato + '<br>');
	document.write('UNIDADES DE ALCOHOL ' + unidadesAlcohol + '<br>');
	document.write('EL FABRICANTE DEL ALCOHOL MAS BARATO ' + fabricanteAlcohol + '<br>');


}
