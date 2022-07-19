/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave = "utn750";
	
	
	clave = prompt('INGRESE LA CLAVE');
	while( clave != "utn750" ){	   

		   clave = prompt('INGRESE NUEVAMENTE LA CLAVE');

	}
	alert('CLAVE CORRECTA');
}
