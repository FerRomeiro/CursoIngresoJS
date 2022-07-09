function mostrar()
{
	let hora;
	hora=parseInt(document.getElementById('txtIdHora').value);
/*
	switch(hora){
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert('Es de mañana');
			break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			alert('Es de tarde');
			break;
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			alert('Es de noche');
		    break;
		default:
			alert('la hora no existe');
	
*/
/*
		if ( !( hora <= 7 || hora >= 11)  ){
		    alert('Es de mañana');
		}
		else if (!( hora < 11 || hora > 19)){
			alert('ES DE TARDE');
		}
		else if (!( hora < 24)){
		    alert('NO EXISTE ESA HORA');
		}
		else{
			alert('ES DE NOCHE');
		}
*/
		if( hora >= 7 && hora <= 11 ){
             alert('Es de mañana');
		}
		else if ( hora > 11 && hora < 18 ){
             alert('Es de tarde');
		}
		else if( hora > 24 ){
             alert('LA HORA NO EXISTE');
		}
		else{
			alert('Es de noche');
		}
	}
//if es de doble == 

// ESTE ES EL METODO CONTRADICTORIO
// FIJARSE QUE CUANDO USO EL if(!(||)){ }
// SIEMPRE SE USA EL || 

// ESTE ES EL METODO QUE NO ES CONTRADICTORIO
// FIJARSE QUE CUANDO USO EL if(&&){ } 
// SIEMPRE SE USA EL &&

