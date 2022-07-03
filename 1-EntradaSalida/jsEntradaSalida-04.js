/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre;
	nombre = prompt('ingrese nombre');
	document.getElementById("txtIdNombre").value = nombre; 
	//EL VALOR DE LA CAJA DE TEXTO txtIdNombre(value) ES LO QUE VOY A TENER EN ESA VARIABLE
	// QUE ESE VALOR SERIA LO QUE PONGA EN PROMPT QUE PERTENECE A LA VARIABLE nombre
}

