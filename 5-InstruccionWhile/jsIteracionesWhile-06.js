function mostrar()
{
	let numero;
	let ventana;
    let promedio;
	let suma;
    
	promedio = document.getElementById('txtIdPromedio').value;
	suma = document.getElementById('txtIdSuma').value;
    
	while( ventana < 6 ){
           numero = prompt('INGRESE UN NUMERO ' + ventana);
           numero = parseInt(numero);
		   suma = suma + numero;
		   document.getElementById('txtIdSuma').value = suma;
	}
	
}