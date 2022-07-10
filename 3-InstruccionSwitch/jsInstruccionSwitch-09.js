// Alumno: Fernando Romero Montero
// Div: J

function mostrar()
{
	let estacion;
	let destino;
	let precioViaje = 15000;
	let precioFinal;
	let precioFinalPorcentaje;
	
	estacion = document.getElementById('txtIdEstacion').value;
	destino = document.getElementById('txtIdDestino').value;
    precioViaje = parseInt(precioViaje);

	if( destino == "Bariloche" && estacion == "Invierno" ){
        precioFinal = (precioViaje * 20) / 100;
			precioFinalPorcentaje = precioFinal + precioViaje;
			alert('Su precio es ' + precioFinalPorcentaje + '$');  
	}
    switch( estacion ){
            case "Invierno":
			    if( destino == "Cordoba" && destino == "Cataratas")
				precioFinal = (precioViaje * 10) / 100;
				precioFinalPorcentaje = precioViaje - precioFinal;
				alert('Su precio es ' + precioFinalPorcentaje + '$'); 
					
	}
/*
	switch( estacion ){
           case "Invierno":
			precioFinal = (precioViaje * 20) / 100;
			precioFinalAumento = precioFinal + precioViaje;
			alert('Su precio es ' + precioFinalAumento + '$');

	}
	
*/

}