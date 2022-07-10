// Alumno: Fernando Romero Montero
// Div: J

function mostrar()
{
   let edad;
   let estado;
   edad = parseInt(document.getElementById('txtIdEdad').value);
   estado = document.getElementById('estadoCivil').value;
 /*
   if ( estado == 'Soltero' && !( edad < 18 ) ){ // QUE EL ESTADO SEA IGUAL A SOLTERO Y QUE NO SEA MENOR A 18 ASI SE LEE
         alert('Es soltero y no es menor'); 
   }// !(edad<18) Y QUE NO SEA MENOR A 18, ESTA CONDICION TAMBIEN SE DEBE CUMPLIR PARA ENTRAR AL ALERT
*/
   if ( !( edad < 18 || estado != "Soltero")){ // OTRA FORMA DE HACERLO 
	   alert('Es soltero y no es menor');      // AMBAS CONDICIONES DEBEN SER FALSAS PARA ENTRAR
	                                          // AL ALERT Y PRESTAR ATENCION QUE VA ENCERRADO EN 
											  // EL MISMO PARENTESIS
   }

/* LA FORMA EN LA QUE LA HICE
   if( edad > 18 && estado == 'Soltero'){
	  
        alert('Es soltero y no es menor');
	   
   }
*/

}