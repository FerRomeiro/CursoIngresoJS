/*
ALUMNO: Fernando ROMERO MONTERO
DIV: J
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let numero;
	let numeroMaximo;
	let numeroMinimo;
	let bandera = 0;
	let respuesta = 'y';


	while( respuesta == 'y' ){
           numero = prompt('INGRESE UN NUMERO');
		   numero = parseInt(numero);
		   
		   if( bandera == 0){
			   numeroMaximo = numero;
			   numeroMinimo = numero;
			   bandera = 1;
		   }
			if( numero > numeroMaximo ){
                    numeroMaximo = numero;
				}
				else{
					if(numero < numeroMinimo){
                       numeroMinimo = numero;
					}
				}
		



		   respuesta = prompt('QUIERE INGRESAR OTRO NUMERO y/n');
	}
        document.getElementById('txtIdMaximo').value = numeroMaximo;
		document.getElementById('txtIdMinimo').value = numeroMinimo;   
	
	
}
/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
/*
function mostrar()
{   
    let numero;
    let numeroMaximo;
    let numeroMinimo;
    let respuesta = 'y';
    //let bandera = 0; 
    // PUEDO HACERLO CON CONTADOR O BANDERA PERO PREFIERO CON CONTADOR 
    let contador = 0;

    while( respuesta == 'y' ){
           numero = prompt('INGRESE NUMERO');
           numero = parseInt(numero);

           if( contador == 0 ){
               numeroMaximo = numero;
               numeroMinimo = numero;

               contador = contador + 1;
           }
           else{
                if( numero > numeroMaximo ){
                    numeroMaximo = numero
                }
                else{
                    if( numero < numeroMinimo ){
                        numeroMinimo = numero;
                    }
                }

                
           }    

           respuesta = prompt('QUIERE INGRESAR OTRO NUMERO y/n');
    }
    document.getElementById('txtIdMaximo').value = numeroMaximo;
    document.getElementById('txtIdMinimo').value = numeroMinimo;
    

}
*/