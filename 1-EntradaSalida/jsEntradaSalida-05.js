/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre 
	let edad
	nombre = document.getElementById('txtIdNombre').value; 
	edad = document.getElementById('txtIdEdad').value;
	//alert(" usted se llama " + nombre + " y tiene " + edad + " años");
    alert(`Usted se llama ${nombre} y se llama ${edad}`); // alt + 96 ``````
} 
// alert(nombre) MUESTRA EL VALOR DE LA VARIABLE
// alert("hola") MUESTRA EL TEXTO QUE ESCRIBI 
// alert(`usted se llama ${nombre} y se llama ${edad}`); COMBINA AMBAS FORMAS 
