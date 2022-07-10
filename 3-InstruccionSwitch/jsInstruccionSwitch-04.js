// Alumno: Fernando Romero Montero
// Div: J

function mostrar()
{
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



}