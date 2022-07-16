// Alumno: Fernando Romero Montero
// Div: J

function mostrar()
{
	let estacion = document.getElementById('txtIdEstacion').value;
	let destino = document.getElementById('txtIdDestino').value;
	let mensaje;
	const PASAJE = 15000;
	let precioFinal;
	let porcentaje;
	let precioNormal;
                      //PARA UNIFICAR EL SWITCH LO HACES EN EL DEFAULT SUMANDO OTRO case 
	switch(estacion){
	      case "Invierno":
          switch(destino){
                 case "Bariloche":
				 porcentaje = 20;
				 mensaje = "Aumento del 20%";
				 break;
				 case "Cordoba":
				 porcentaje = -10;
				 mensaje = "Descuento del 10%";
				 break;
				 case "Cataratas":
				 porcentaje = -10;
				 mensaje = "Descuento del 10%";
				 break;
				 case "Mar del plata":
				 porcentaje = -20;
				 mensaje = "Descuento del 20%";	 
				 break;
				 default:  
		         }

                 case "Verano":
                 switch(destino){
                 case "Bariloche":
	             porcentaje = -20;
	             mensaje = "Descuento del 20%";
	             break;
	             case "Cataratas":
	             porcentaje = 10;
	             mensaje = "Aumento del 10%";
	             break;
	             case "Cordoba":
	             porcentaje = 10;
	             mensaje = "Aumento del 10%";
	             break;
                 case "Mar del plata":
	             porcentaje = 20;
	             mensaje = "Aumento del 20%"
                 } 
                 case "Otoño":
				 case "Primavera":
				 switch( destino ){
                         case "Bariloche":
					     porcentaje = 10;
						 mensaje = "Aumento del 10%";
						 break;
						 case "Cataratas":
						 porcentaje = 10;
						 mensaje = "Aumento del 10%";
						 break;
						 case "Cordoba":
						 porcentaje = 0;
						 mensaje = "Sin descuento";
						 case "Mar del plata":
						 porcentaje = 10;
						 mensaje = "Aumento del 10%";
				 }
		         }
	precioNormal = (PASAJE*porcentaje)/100;
	precioFinal = PASAJE + precioNormal;
	alert(mensaje);
	alert(precioFinal + '$');
	/*
  let estacion = document.getElementById('txtIdEstacion').value;
  let destino = document.getElementById('txtIdDestino').value;
  let mensaje;
  const PASAJE = 15000;
  let precioFinal;
  let porcentaje;
  let precioNormal;

  if( estacion == "Invierno" && destino == "Bariloche"){
      porcentaje = 10;
	  mensaje = "Aumento del 20%";
  } 
  else{
	  if( estacion == "Invierno" && destino == "Cataratas"){
	  porcentaje = -10;
	  mensaje = "Descuento del 10%";
	  }else{
		if( estacion == "Invierno" && destino == "Cordoba" ){
            porcentaje = -10;
			mensaje = "Descuento del 10%";
		}else{
		   if(estacion == "Invierno" && destino == "Mar del plata"){
			  porcentaje = -20;
			  mensaje = "Descuento del 20%";
		   }else{
			    if( estacion == "Verano" && destino == "Bariloche"){
					porcentaje = -20;
					mensaje = "Descuento del 20%";
				}else{
					 if( estacion == "Verano" && destino == "Cataratas" ){
						 porcentaje = 10;
						 mensaje = "Aumento del 10%";
					 }else{
						  if( estacion == "Verano" && destino == "Mar del plata" ){
                              porcentaje = 20;
							  mensaje = "Aumento del 20%";
						  }else{
							   if( estacion == "Verano" && destino == "Cordoba" ){
                                   porcentaje = 10;
								   mensaje = "Aumento del 10%";
							   }else{
								    if( estacion == "Otoño" || estacion == "Primavera" ){
                                        if( destino == "Bariloche" || destino == "Cataratas" || destino == "Mar del plata" ){
                                            porcentaje = 10;
											mensaje = "Aumento del 10%";
										}else{
											if( destino == "Cordoba")
											porcentaje = 0;
											mensaje = "Sin descuento putazo";
										}
									}
							   }
						  }
					 }
				}
		   }
	  }
  }   
 
 precioNormal = (PASAJE*porcentaje)/100;
 precioFinal = PASAJE + precioNormal;
 alert(mensaje);
 alert(precioFinal);






*/



  }








	/*
   let estacion;
   let destino;
   let precioFinal;
   const viaje = 15000;
   let porcentaje;
   let mensaje;


   estacion = document.getElementById('txtIdEstacion').value;
   destino = document.getElementById('txtIdDestino').value;
   
   if( estacion == 'Invierno' ){
       if( destino == 'Bariloche' ){
           porcentaje = 20;
	   }
       else if( destino == 'Cordoba' || destino == "Cataratas" ){
           porcentaje = -10;
	   }
	   else{
		   porcentaje = -20;
	   }
	}
    if( estacion == "Verano" ){
        if( destino == "Bariloche" ){
            porcentaje = -20;
		}
		else if( destino == "Cataratas" || destino == "Cordoba" ){
            porcentaje = 10;
		}
		else{
			porcentaje = 20;
		}
	}
	if( estacion == "Otoño" || estacion == "Primavera" ){
        if( destino == "Bariloche")
		    porcentaje = 10;
		else if( destino == "Cataratas" || destino == "Mar del plata" ){
            porcentaje = 10;
		}
		else{
			porcentaje = 0;
		}
	}
	
   precioFinal = viaje + ((viaje*porcentaje)/100);
   mensaje = 'Precio final es con un porcentaje del ' + porcentaje + '% es ' + precioFinal + '$';
   alert(mensaje);









*/








	/*
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
*/

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
		/*
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
*/

		
  







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

