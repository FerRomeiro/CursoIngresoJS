// Alumno: Fernando Romero Montero
// Div: J

function mostrar()
{

	let edad;
edad = parseInt(document.getElementById('txtIdEdad').value);

if (edad == 15){ //PREGUNTAR PORQUE CON SOLO UN = TAMBIEN FUNCIONA
	alert('NIÑA BONITA');
}

document.getElementById('txtIdEdad').value = "";

}
