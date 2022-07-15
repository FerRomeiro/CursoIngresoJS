// Alumno: Fernando Romero Montero
// Div: J

function mostrar()
{
  let destino;
  let mensaje; 

  destino = document.getElementById('txtIdDestino').value
  if( destino == "Bariloche" || destino == "Ushuaia" ){
      mensaje = "FRIO";
  }else{
	  mensaje = "CALOR";
  }
  alert(mensaje);





















}

	/*
	let destino;
	destino = document.getElementById('txtIdDestino').value;
switch( destino ){
       case "Bariloche":
	   case "Ushuaia":
		alert("HACE FRIO");
		break;   // NO OLVIDARSE DE ROMPER SINO LEE LOS 2 ALERTS
default:  
	alert("HACE CALOR");
}
*/


// ESTRUCTURA DEL SWITCH CON DEFAULT:       
// switch(){
// case " ":
// case " ":
// ej: alert("");
// break;
// default{
//	               }
//  }