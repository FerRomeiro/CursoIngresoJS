// Alumno: Fernando Romero Montero
// Div: J
function mostrar()
{

	let edad;
	edad = Parseint(document.getElementById('txtIdEdad').value);
	if( edad < 13 || edad >= 18){
        
          alert('NO es un adolescente');
		
	}
	else{
		alert('ES ADOLESCENTE');
	}
	/*
	let edad;
	edad = parseInt(document.getElementById('txtIdEdad').value);
	if(!( edad < 18 )){
          alert('no es adolescente');
	}
	*/
	
//   RECORDAR QUE EL || (OR) EN if SE PUEDE USAR PARA QUE CUMPLA UNA DE LAS 2
//  CONDICIONES Y ASI ENTRA AL ALERT SINO NO ENTRA
//  Y EL && TIENE QUE CUMPLIS LAS 2 CONDICIONES PARA ENTRAR AL ALERT
// Y EL !(||) ES EL CONTRADICTORIO 



	/*
	let edad;
	edad = parseInt(document.getElementById('txtIdEdad').value);
	if( edad > 13){
		if ( edad <= 18){
			alert('ERES UN ADOLESCENTE');
		}
	}
	else{
		alert('NO SOS UN ADOLESCENTE');
	}
	document.getElementById('txtIdEdad').value = "";
    */
   /*
    let edad;
	edad = parseInt(document.getElementById('txtIdEdad').value);
    if( edad > 13 && edad <= 18){
        alert('Es un adolescente');
	}
	else{
		alert('NO ES ADOLESCENTE');
	}
	*/
    /*
	let edad;
	edad = parseInt(document.getElementById('txtIdEdad').value);

	if( !( edad >= 13 || edad < 18)){
        alert('Es adolescente');
	}
    else{
		alert('NO ES ADOLESCENTE');
	}
*/
}

