// Alumno: Fernando Romero Montero
// Curso: J

function mostrar()
{
  let edad;
  let mensaje;

  edad = document.getElementById('txtIdEdad').value;
  if( edad > 18 ){
      mensaje = "MAYOR DE EDAD";
  }else if( edad > 12 && edad < 18){
      mensaje = "ADOLESCENTE";
  }else{
	  mensaje = "ES NIÑO";
  }

 


  alert(mensaje);
 










}



/*	
	let edad;
	edad = parseInt(document.getElementById('txtIdEdad').value);
	
	
    if( !( edad <= 13 || edad >= 17)){
        alert('Adolescente')
	}
    else if( edad > 18){
			alert('Adulto');
		}
	else if( edad > 65){
			alert('Anciano');             // FORMA RESUMIDA DE LO DE ABAJO
		}                                 // PARA EL IF ELSE Y NO SEA ENGORROSO
		else{
			alert('Niña');
		}
	}
document.getElementById('txtIdEdad').value = "";
*/ 
 /*
    if( !( edad <= 13 || edad >= 17)){
        alert('Adolescente')
	}
    else{
		if( edad > 18){
			alert('Adulto');
		}
		else{
	    if ( edad > 65){
			alert('Anciano');
		}
	else{
		alert('Niña');
	}
	}
*/	
/*
	if( edad > 18 ){
		alert('ERES MAYOR DE EDAD');
	}
	if( edad >= 13){
		if( edad <= 18){
			alert('ERES UN ADOLESCENTE');
		}
	}
	else{
         alert('eres un niño')
	}
	document.getElementById('txtIdEdad').value = "";
*/
/*
let edad;
let mensaje;
	edad = parseInt(document.getElementById('txtIdEdad').value);
	
	
    if( !( edad <= 13 || edad >= 17)){
        mensaje = 'Adolescente';
	}
    else if( edad > 18){
	    mensaje = 'Adulto';
		}
	else if( edad > 65){
		mensaje = 'Anciano'            
		}                                 
		else{
		mensaje = 'Niña'
		}
	alert(mensaje);  // document.write(mensaje);
	*/