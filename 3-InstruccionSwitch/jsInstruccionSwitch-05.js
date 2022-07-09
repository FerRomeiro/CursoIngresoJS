function mostrar()
{
 let hora;
 hora = document.getElementById('txtIdHora').value;
 hora = parseInt(hora);
 // PARSEAMOS LA HORA PORQUE VA A SER UN DATO NUMERO Y EN EL CASO DE USAR SWITCH
 // ES DE TRIPLE === OSEA QUE ES MUCHO MAS RESTRICTIVO QUE OTRAS FUNCIONES,
 // EN ESTE CASO TIENE QUE SER DEL MISMO TIPO EL DATO
 // POR ESO PARSEAMOS LA HORA YA QUE EN CASI CONTRARIO DEBERIAMOS PONER EL NUMERO 
 // ENTRE COMILLAS
 switch(hora){
	case 7:
	case 8:
	case 9:
	case 10:
	case 11:
		alert('Es de mañana');
	break;
 default:
	     alert('No es de mañana');
  /*
  let hora;
  hora = document.getElementById('txtIdHora').value;
  switch(hora){
	case "7":
	case "8":
	case "9":
	case "10":
	case "11":
		alert('Es de mañana');
	break;
	default:
		alert('no es de mañana);
  }

*/
 }
	
	



}