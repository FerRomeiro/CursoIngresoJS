/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numero1;
	let numero2;
	let resultado;


	numero1 = document.getElementById('txtIdNumeroUno').value;
	numero2 = document.getElementById('txtIdNumeroDos').value;
	
	//PARSEINT sirve para tranformar una cadena a numero, en este caso
	//transforme el numero que escribo en la caja de texto a numero real por eso el ""

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2); 
    /*RECORDAR QUE ES COMO UNA RECETA DE COCINA Y SE EJECUTA EN ORDEN LOS CODIGOS 
	QUE VAYA A COLOCAR POR ESO FIJARSE BIEN EL ORDEN DE LAS COSAS AL ESCRIBIR*/
    //PARSEFLOAT PERMITE ADEMAS DEL NUMERO DEL 0 A 9 PERMITE LOS PUNTOS COMO 3.14
	resultado = numero1 + numero2;
	
	alert('la suma es '  +  resultado );

	// alert(`la suma es ${resultado}`)
}
 /* let num2
    let num3
	let resultado

	num2 = ParseInt(document.getElementById('txtIdNumeroUno').value);
	num3 = ParseInt(document.getElementById('txtIdNumeroDos').value);
	resultado = num2 + num3
	alert('la suma es ' + resultado)
	*/
