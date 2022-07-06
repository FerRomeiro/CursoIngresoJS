function mostrar()
{
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
}