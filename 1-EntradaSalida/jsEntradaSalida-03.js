/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombreIngresado;
	nombreIngresado=txtIdNombre.value;
	alert(nombreIngresado); 
	txtIdNombre.value = "";
}
/* let nombre;
   nombre = document.getelementById("txtIdNombre").value;
   alert(nombre); */
// document.getElementById("txtIdNombre").value = ""; PARA QUE LA CAJA DE TEXTO APAREZCA EN BLANCO 

