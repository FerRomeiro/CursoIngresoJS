// Alumno: Fernando Romero Montero
// Div: J

function mostrar()
{
 let mes;
 let mensaje;
 mes = document.getElementById('txtIdMes').value

 if( mes == "Febrero" ){
     mensaje = "Tiene 28 dias";
 }else if( mes == "Enero" || mes == "Marzo" ){
     mensaje = "Tiene 31 dias";
 }else if( mes == "Mayo" || mes == "Junio" ){
     mensaje = "Tiene 31 dias";
 }else if( mes == "Octubre" || mes == "Diciembre" ){
     mensaje = "Tiene 31 dias";
 }else{
	 mensaje = "Tiene 30 dias";
 }
 alert(mensaje);












}







	/*
 let mes;
 mes = document.getElementById('txtIdMes').value;
 switch(mes){
	case "Abril":
	case "Junio":
	case "Septiembre":
	case "Noviembre":
		alert('Estos meses tienen 30 dias');
		break;
	case "Febrero":
		alert('Este mes tiene 29 dias');
		break;
	default:
		alert('Estos meses tienen 31 dias');
 }	


*/
