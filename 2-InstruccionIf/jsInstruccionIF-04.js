// Alumno: Fernando Romero Montero
// Div: J 
function mostrar()
{
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
    let edad;
	edad = parseInt(document.getElementById('txtIdEdad').value);
	if( !(edad < 13 || edad > 17)){
         alert('ADOLESCENTE');
	} 
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