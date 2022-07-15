// Alumno: Fernando Romero Montero
// Div: J
function mostrar()
{
  let edad;
  let mensaje;

  edad = document.getElementById('txtIdEdad').value;

  if( edad > 17 ){
	  mensaje = "Mayor de edad";
  }
  else{
	  mensaje = "";
  }
  alert(mensaje);






















/*	
	let edad;
	edad = parseInt(document.getElementById('txtIdEdad').value);

	if( edad > 18){
       alert('Es mayor de edad');
	}

*/
}