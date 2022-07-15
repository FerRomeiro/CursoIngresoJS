// Alumno: Fernando Romero Monter
// Div: J
function mostrar()
{
 let mes;
 let mensaje; 
 mes = document.getElementById('txtIdMes').value
 if( mes == "Enero" ){
     mensaje = "que comiences bien el año";
 }else if( mes == "Marzo" ){
     mensaje = "Clases";
 }else if( mes == "Julio" ){
     mensaje = "vacas";
 }else if( mes == "Diciembre" ){
     mensaje = "Fiestas ";
 }
 else{
	 mensaje = "";
 }
 
 
 alert(mensaje);

}







	/*
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
 */
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
