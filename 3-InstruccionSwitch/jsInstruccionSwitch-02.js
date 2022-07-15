// Alumno: Fernando Romero Montero
// Div: J

function mostrar()
{
 let mes; 
 let mensaje;

 mes = document.getElementById('txtIdMes').value

 if( mes == "Enero" || mes == "Febrero" ){
     mensaje = "Falta pa invierno";
 }else if( mes == "Febrero" || mes == "Marzo" ){
     mensaje = "Falta pa invierno";
 }else if( mes == "Abril" || mes == "Mayo"){
     mensaje = "Falta pa invierno";
 }else if( mes == "Junio" ){
     mensaje = "Falta pa invierno";
 }else if( mes == "Julio" || mes == "Agosto" ){
     mensaje = "Abrigate que hace frio";
 }else{
	 mensaje = "Ya pasamos el frio";
 }
 alert(mensaje);















}
	/*
 let mes = document.getElementById('txtIdMes').value;
 switch(mes){
	case "Enero":
	case "Febrero":
	case "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":
		alert('Falta para Invierno');
		break;
	case "Julio":
	case "Agosto":
		alert('Estamos en invierno');
		break;
	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
		alert('Ya pasamos Invierno');
		break;
 }
 
*/

