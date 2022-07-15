// Alumno: Fernando Romero Montero
// Div: J

function mostrar()
{
 let edad;
 let mensaje;

 edad = document.getElementById('txtIdEdad').value;

 if( edad == 15){
	 mensaje = "niña bonita";
 }
 else{
     mensaje = "";
 }
 alert(mensaje);




















/*
	let edad;
edad = parseInt(document.getElementById('txtIdEdad').value);

if (edad == 15){ //PREGUNTAR PORQUE CON SOLO UN = TAMBIEN FUNCIONA
	alert('NIÑA BONITA');
}

document.getElementById('txtIdEdad').value = "";
*/
}
