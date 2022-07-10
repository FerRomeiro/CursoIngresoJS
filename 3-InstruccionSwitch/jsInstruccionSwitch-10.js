// Alumno: Fernando  Romero Montero
// Div: J


function mostrar()
{
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
	        

}