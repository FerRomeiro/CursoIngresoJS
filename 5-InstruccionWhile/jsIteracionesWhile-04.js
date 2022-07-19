/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
  let numero;
  

  numero = prompt('INGRESE UN NUMERO ENTRE 0 Y 9');
  numero = parseInt(numero);
  
  while( numero > 9 || numero < 0 ){
         numero = prompt('INGRESE OTRO NUMERO');
		 numero = parseInt(numero);
  }
  document.getElementById('txtIdNumero').value = numero;	
}