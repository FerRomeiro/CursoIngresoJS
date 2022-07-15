// Alumno: Fernando Romero Montero
// Div: J 
function mostrar()
{
  let edad;
  let mensaje;

  edad = document.getElementById('txtIdEdad').value;

  if( edad > 12 && edad < 18 ){ // RECORDAR EL OPERADOR LOGICO || ES SI ES O ES, NO CIERRA. EL OTRO OPERADOR LOGICO ES && Y ES SI ES Y ES, ESTE SI CIERRA
      mensaje = "Adolescente";
  }
  else{
	  mensaje = "No sos adolescente";
  }

  alert(mensaje);





















	/*
	let edad;
	edad = parseInt(document.getElementById('txtIdEdad').value);
    if( edad >=13 ){
		
		if( edad <= 17){
			alert('sos adolescente');
		}

	}
    else{
		alert('no lo sos');
	}
	
	document.getElementById('txtIdEdad').value = ""
	
	*/ 
	/*
    let edad;
	edad = parseInt(document.getElementById('txtIdEdad').value);
	if( !(edad < 13 || edad > 17)){
         alert('ADOLESCENTE');
	} 
	*/
    /*
	let edad; 
	edad = parseInt(document.getElementById('txtIdEdad').value);
	if( edad>=13 && edad<=17 ){
		alert('Adolescente');
	}
	else{
		alert('no es adolescente');
	}
	*/
	// ESTO ES DE NOVATO 
	/*if( edad > 13){
      alert('eres adolescente');
	}
	if( edad <= 17){
		alert('eres adolescete');
	}
*/


}