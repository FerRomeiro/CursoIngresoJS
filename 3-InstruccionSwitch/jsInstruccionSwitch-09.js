// Alumno: Fernando Romero Montero
// Div: J

function mostrar()
{
	let estacion;
	let destino;
	const precioViaje = 15000;
	let precioFinal;
	let precioFinalPorcentaje;
	
	estacion = document.getElementById('txtIdEstacion').value;
	destino = document.getElementById('txtIdDestino').value;
    
	switch(estacion){
		case "Invierno":
			if( destino == "Bariloche" ){
                precioFinal = (precioViaje*20)/100;
				precioFinalPorcentaje = precioViaje + precioFinal;
				alert('El precio del viaje es ' + precioFinalPorcentaje + '$');
            break;
			}
			
		case "Invierno":
			if( destino == "Cataratas" || destino == "Cordoba"){
                precioFinal = (precioViaje*10)/100;
				precioFinalPorcentaje = precioViaje - precioFinal;
				alert('EL precio del viaje es ' + precioFinalPorcentaje + '$');
				 // NO OLVIDARSE DE QUEBRAR PORQUE SINO APARECE TODOS LOS ALERTS
			break;	// EN ESTE CASO SE QUIEBRA DENTRO DE LAS LLAVES DE IF pero puede ser afuera
			}
			
		case "Invierno":
			if( destino == "Mar del plata"){
				precioFinal = (precioViaje*20)/100;
				precioFinalPorcentaje = precioViaje - precioFinal;
				alert('El precio del viaje es ' + precioFinalPorcentaje + '$');
				break;
			}
		case "Verano":
			if( destino == "Bariloche"){
				precioFinal = (precioViaje*20)/100;
				precioFinalPorcentaje = precioViaje - precioFinal;
				alert('El precio del viaje es ' + precioFinalPorcentaje + '$');
				break;
			}
		case "Verano":
			if( destino == "Cataratas" || destino == "Cordoba"){
				precioFinal = (precioViaje*10)/100;
				precioFinalPorcentaje = precioViaje + precioFinal;
				alert('EL precio del viaje es ' + precioFinalPorcentaje + '$');
				break;
			}	
		case "Verano":
			if( destino == "Mar del plata"){
				precioFinal = (precioViaje*20)/100;
				precioFinalPorcentaje = precioViaje + precioFinal;
				alert('El precio del viaje es ' + precioFinalPorcentaje + '$');
				break;
			}	


		/*	
		case "Otoño":
		case "Primavera":
			if( destino == "Bariloche" ){
				precioFinal = (precioViaje*10)/100;
				precioFinalPorcentaje = precioViaje + precioFinal;
				alert('EL precio del viaje es ' + precioFinalPorcentaje + '$');
				break;
			}
		case "Otoño":
		case "Primavera":
			if( destino == "Cataratas" || destino == "Mar del plata"){
				precioFinal = (precioViaje*10)/100;
				precioFinalPorcentaje = precioViaje + precioFinal;
				alert('EL precio del viaje es ' + precioFinalPorcentaje + '$');
			}
			else{
				alert('Cordoba ' + precioViaje);
				break;
			}	
		*/
		case "Otoño":
		case "Primavera":
			if( destino == "Bariloche" || destino == "Cataratas" ){
				precioFinal = (precioViaje*10)/100;
				precioFinalPorcentaje = precioViaje + precioFinal;
				alert('EL precio del viaje es ' + precioFinalPorcentaje + '$');
			}	
			else if( destino == "Mar del plata" ){
				precioFinal = (precioViaje*10)/100;
				precioFinalPorcentaje = precioViaje + precioFinal;
				alert('EL precio del viaje es ' + precioFinalPorcentaje + '$');
			}
			else{
				alert('CORDOBA NO TIENE DESCUENTO ' + precioViaje + '$');
			}


		
}  







	/*
	if( destino == "Bariloche" && estacion == "Invierno" ){
        precioFinal = (precioViaje * 20) / 100;
			precioFinalPorcentaje = precioFinal + precioViaje;
			alert('Su precio es ' + precioFinalPorcentaje + '$');  
	}
    */
/*
	switch( estacion ){
           case "Invierno":
			precioFinal = (precioViaje * 20) / 100;
			precioFinalAumento = precioFinal + precioViaje;
			alert('Su precio es ' + precioFinalAumento + '$');

	}
	
*/

}