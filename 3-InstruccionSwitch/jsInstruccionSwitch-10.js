// Alumno: Fernando  Romero Montero
// Div: J


function mostrar()
{
	let estacion;
	let destino;
	let mensaje;
	destino =  document.getElementById('txtIdDestino').value;
	estacion = document.getElementById('txtIdEstacion').value;
    
if( estacion == "Invierno" && destino == "Bariloche" ){
    mensaje = "Se viaja";
}else{
	if( estacion == "Invierno" && destino != "Bariloche"){
		mensaje = "no se viaja";
	}else{
		if( estacion == "Verano" && destino == "Mar del plata" || destino == "Cataratas"){
			mensaje = "se viaja solo a estos dos";
		}else{
			if( estacion == "Verano" && destino == "Cordoba" || destino == "Bariloche" ){
                mensaje = "no se viajaaa";
			}else{
				if( estacion == "Otoño" && destino == "Cordoba" || destino == "Bariloche" || destino == "Mar del plata" || destino == "Cataratas" ){
                    mensaje = "SE VIAJA";
				}else{
					if( estacion == "Primavera" && destino != "Bariloche" ){
                        mensaje = "solo no se viaja a bariloche";
					}else{
						mensaje = "se viaja excepto a bariloche";
					}
				}
			}
		}
	} 
}
	alert(mensaje);

/*
	let estacion;
	let destino;
	let mensaje;
	destino =  document.getElementById('txtIdDestino').value;
	estacion = document.getElementById('txtIdEstacion').value;
   
	switch(estacion){
		   case "Invierno":
		   switch(destino){
		   case "Bariloche":
		   mensaje = "Se viaja";
		   break;
		   default:
		   mensaje = "No se viaja";
		   }default:
		           case "Verano":
		           switch(destino){
                   case "Bariloche":
				   case "Cordoba":
				   mensaje = "No se viaja";
				   break;
				   default:
				          mensaje = "Se viaja";
		        }         case "Otoño":
		                  switch(destino){
                          case "Bariloche":
				          case "Mar del plata":
				          case "Cataratas":
				          case "Cordoba":
				          mensaje = "Se viaja a todos lados";
				          default:
				                  case "Primavera":
				                  switch(destino){
				                  case "Bariloche":
				                  mensaje = "no se viaja";
				                  break;
				                  default:
				                  mensaje = "se viajaaaa";	
				            }
                         
				   
			}
		}				
	

	alert(mensaje);


		

*/

	}







	/*
 let estacion;
 let destino;
 let mensaje;
 destino =  document.getElementById('txtIdDestino').value;
 estacion = document.getElementById('txtIdEstacion').value;

 if( estacion == "Invierno" && destino == "Bariloche" ){
     mensaje = "Se viaja";
 }else{
	 mensaje = "no se viaja";
 }
 if( estacion == "Verano" ){
     if( destino == "Cataratas" || destino == "Mar del plata" ){
     mensaje = "Se viaja";
	 }else{
		mensaje = "no se viaja";
	 }
 }
 if( estacion == "Otoño" ){
     mensaje = "Si viaja a todos lados";
 }
 if( estacion === "Primavera" ){
     if( destino == "Mar del plata" || destino == "Cataratas" ){
         mensaje = "Se viajaaaa";
	 }else if( destino == "Cordoba" ){
         mensaje = "Se viaja";
	 }else{
		 mensaje = "no se viaja"
	 }
 }
 alert(mensaje);







*/




	/*
	let estacion;
	let destino;


	estacion = document.getElementById('txtIdEstacion').value;
	destino = document.getElementById('txtIdDestino').value;

	switch( estacion ){
		    case "Invierno":
				if( destino == "Bariloche" ){
					alert('SE VIAJA');
				}
				else{
					alert('NO SE VIAJA');
				}
			break;
			case "Verano":
				if( destino == "Cataratas" || destino == "Mar del plata"){
					alert('SE VIAJA');
				}
				else{
					alert('NO SE VIAJA PAPU');
				}	
			break;
			case "Otoño":
				alert('SE VIAJA A TODOS LADOS');
			break;
			case "Primavera":
				if(!( destino != "Bariloche"))
				alert('no se viaja');
				else{
					alert('SE VIAJA CTM');
				}	
			break;
	}
	        

}*/