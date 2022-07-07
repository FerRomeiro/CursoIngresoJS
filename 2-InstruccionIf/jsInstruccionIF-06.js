function mostrar()
{
	let edad;
	edad = parseInt(document.getElementById('txtIdEdad').value);
		
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
}