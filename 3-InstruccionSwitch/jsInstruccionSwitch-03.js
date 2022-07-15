// Alumno: Fernando Romero Montero
// Div: j

function mostrar()
{

 let mes;
 let mensaje;
 mes = document.getElementById('txtIdMes').value;

 if( mes == "Febrero" ){
     mensaje = "Este mes tiene 28 dias";
 }else if( mes == "Enero" || mes == "Marzo"){
     mensaje = "Este mes tiene 31 dias";
 }else if( mes == "Mayo" || mes == "Julio" ){
     mensaje = "este mes tiene 31 dias";
 }else if( mes == "Octubre" || mes == "Diciembre" ){
     mensaje = "Este mes tiene 31 dias";
 }else{
	 mensaje = "Este mes tiene 30 dias";
 }
 alert(mensaje);




















}
	/*
 let mes = document.getElementById('txtIdMes').value;
 switch(mes){
	case "Febrero":
		alert('Este mes no tiene mas de 29 dias');
		break;
    default:
		alert('Este mes tiene 30 o mas dias');
*/



		/*
	case "Enero":
	case "Marzo":
	case "Abril":
	case "Junio":
	case "Julio":
	case "Agosto":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
		alert('Este mes tiene 30 o mas dias');
		break;
		*/
 
 
