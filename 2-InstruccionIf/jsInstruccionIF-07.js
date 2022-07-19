// Alumno: Fernando Romero Monter
// Div: J
/*e ejercicio debe tener un solo alert escrito en el código
SI SI , uno solo.
La palabra alert escrita una sola vez.
Si si nuevamente , una sola vez en todo su código
Ejercicio 07 BIS V1 (Realizar en los archivos  del ejercicio 07 del IF)
Si es menor de 13 , mostrar el mensaje “feliz día”.
Si es adolescente el mensaje es “usted es adolescente”
Si tiene 17 años además mostrar el mensaje “último año!!!”
Si es mayor de edad mostrar el mensaje “tenes edad de laburar”.
Si tiene 33 años , además mostrar el mensaje “como cristo”
Si tiene más de 60 años, además mostrar el mensaje “A jubilarse”.
Si tiene 88, además mostrar el mensaje “lindo número''
Si la edad es par , además mostrar , “sos par!!”*/

function mostrar()
{
	let edad;
	let mensaje;
	let resto;
	
	edad = document.getElementById('txtIdEdad').value;
   //estadoCivil = document.getElementById('estadoCivil').value;
	if( edad < 14 ) {
		mensaje = "feliz dia";
	}
	if( edad > 12 && edad < 18 ){
		mensaje = "Es adolescente";
	}
	if( edad == 17 ){
		mensaje = mensaje + " y es tu ultimo año";
	}
	if( edad > 17 ){
        mensaje = "Tenes edad para laburar";
	}
	if( edad == 33 ){
        mensaje = mensaje + " Como cristo";
	}
	if( edad > 60 ){
        mensaje = "A jubilarse";
	}
	if( edad == 88 ){
        mensaje = mensaje + " Lindo numero"
	}
	resto = (edad%2);
	if( resto == 0 ){
        mensaje = mensaje + " Y tu numero es par";
	}else{
		mensaje = mensaje + " Y tu numero es IMPAR";
	}


	alert(mensaje);





}
	/*
  let edad;
  let mensaje;
  let resto;
  
  edad = document.getElementById('txtIdEdad').value;
 //estadoCivil = document.getElementById('estadoCivil').value;
  if( edad < 13 ){  
      mensaje = " Feliz dia";
  }
  else{
	if( edad >= 13 && edad < 18){
        mensaje = " Usted es adolescente";
	if( edad == 17 ){
		mensaje = mensaje + " Y es su ultimo año";
	}	
	}else{
		if( edad > 17 && edad < 60){
            mensaje = " Tenes edad para laburar";
			if( edad == 33 ){
                mensaje = mensaje + " Como cristo";
			}
		}else{
			 if( edad > 60 ){
                 mensaje = " A jubilarse";
				if( edad == 88 ){
                    mensaje = mensaje + " Lindo numero";
				}
			 }
		}
	}
  } 
  resto = (edad % 2); // EL % SE USA PARA EL RESTO CALCULAR RESTO DE UNA OPERACION 
                      // EL / SE USO SOLO PARA DIVIDIR PERO DE AHI SALE EL RESULTADO NO EL RESTO
  
  if( resto == 0 ){
      mensaje = mensaje + " Ademas sos numero par";
  }else{
	  mensaje = mensaje + " Ademas su numero es impar";
  }


alert(mensaje);

*/
















/*
 let edad;
 let estadoCivil;
 let mensaje;

 edad = document.getElementById('txtIdEdad').value;
 estadoCivil = document.getElementById('estadoCivil').value;
 if( edad < 18 && estadoCivil != "Soltero"){
     mensaje = "ES PEKE PA NO SER SOLTERO";
 }
 else{
	 mensaje = "";
 }
alert(mensaje);
*/


















	/*
	let edad;
	let estadoCivil;
	edad = parseInt(document.getElementById('txtIdEdad').value);
	estadoCivil = document.getElementById('estadoCivil').value; 

 
    if( !( edad > 18 || estadoCivil == "Soltero")){
		alert('es muy pequeño para NO estar soltero');
	}

*/
/*
	if( edad < 18 && estadoCivil != "Soltero" ){
        alert('es muy pequeño para NO estar soltero');
	}
*/	



/*
let numeroUno;
let numeroDos;
let numeroTres;

if (  ){

}
*/