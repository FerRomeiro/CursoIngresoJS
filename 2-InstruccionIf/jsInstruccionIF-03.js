// Alumno: Fernando Romero Montero
// Div: J
function mostrar()
{
  let edad;
  let mensaje;

  edad = document.getElementById('txtIdEdad').value;

  if( edad > 17 ){
      mensaje = "Mayor edad";
  }
  else{
	  mensaje = "Menor de edad";
  }

  alert(mensaje);










}







/*


let edad;
edad = parseInt(document.getElementById('txtIdEdad').value);
if( edad >= 18){
   alert('Sos mayor de edad');
}
else{
	alert('Sos menor de edad');
}






}
*/
/* OTRA FORMA DE HACERLO 
{
	let edad
	edad = parseInt(document.getElementById('txtIdEdad').value);
	if( edad < 18){
       alert('es menor de edad');
	}
	else{
		alert('es mayor de edad');
	}
}
 
/*
ESTO SE PODRIA HACER PERO ESTA MAL
if( edad > 18){
	alert('INFORMADO');

}
if( edad < 18){
  alert('ES MENOR DE !8');
}
document.getElementById('txtIdEdad').value = '';
} */