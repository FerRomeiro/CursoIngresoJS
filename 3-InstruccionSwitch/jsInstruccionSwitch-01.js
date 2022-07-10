// Alumno: Fernando Romero Monter
// Div: J
function mostrar()
{
   let mes;
   mes = document.getElementById('txtIdMes').value; 
   // let mes = document.getElementById('txtIdMes').value;
 switch(mes){
	case "Enero":
		alert('que comiences bien el año');
		break;
	case "Julio":
		alert('se viene las vacas');
		break;
	case "Diciembre":
		alert('FIN DE AÑO');
		break;
 } 
 
   /* 
   switch (mes){
	      case "Enero":
		  alert('que comiences bien el año');
          break;
		}
	switch (mes){
		   case "Julio":
			alert('Se viene las vacas');
			break;
	}
	switch (mes){
		case "Diciembre":
			alert('Felices Fiestas');
			break;
	}
*/
}