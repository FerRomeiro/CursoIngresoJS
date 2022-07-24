/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	/*
 	let edadIngresada;
	let respuesta = 'y';
	let sexo;
	let estadoCivil;
	let sueldoBruto;
	let numeroLegajo;
	let nacionalidad;

	while(respuesta == 'y'){
          edadIngresada = prompt('ingrese edad entre 18 y 90 años inclusive');
		  edadIngresada = parseInt(edadIngresada);
		  // EDAD				
		  while(edadIngresada < 18 || edadIngresada > 90){
                edadIngresada = prompt('ERROR, ingrese edad nuevamente'); // se tiene q parsear nuevamente el error recordar
				edadIngresada = parseInt(edadIngresada);
		  }
		  //SEXO
		  sexo = prompt('ingrese sexo m/f');
		  
		  while(sexo != "f" && sexo != "m"){
			sexo = prompt('INGRESE SEXO VALIDO');
	      }
		  //ESTADO CIVIL
		  estadoCivil = prompt('Ingrese estado civil (soltero, casado, divorciado y viudo');

		  while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil && "divorciado" && estadoCivil != "viudo" ){
                estadoCivil = prompt('Ingrese un estado civil valido');
		  }
		  ///SUELDO BRUTO
		  sueldoBruto = prompt('Ingrese el sueldo correspondiente no menor a 8000');

		  while(sueldoBruto<8000){
				sueldoBruto = prompt('ERROR, INGRESE UN VALOR NO MENOR A 8000');
				sueldoBruto = parseInt(sueldoBruto);
		  }
		  // numero de legajo
		  numeroLegajo = prompt('INGRESE NUMERO DE LEGAJO ENTRE 1000 Y 9999');

		  while(numeroLegajo<1000 || numeroLegajo>9999){
			    numeroLegajo = prompt('NUMERO DE LEGAJO INVALIDO, INGRESE NUEVAMENTE');
				numeroLegajo = parseInt(numeroLegajo);
		  }
		  //NACIONALIDAD	
		  nacionalidad = prompt('INGRESE NACIONALIDAD CORRESPONDIENTE');

		  while(nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N"){
			    nacionalidad = prompt('ERROR, INGRESE NACIONALIDAD CORRESPONDIENTE');
				
		  }

		  document.getElementById('txtIdNacionalidad').value = nacionalidad;
		  document.getElementById('txtIdLegajo').value = numeroLegajo;
		  document.getElementById('txtIdSueldo').value = sueldoBruto;
		  document.getElementById('txtIdEstadoCivil').value = estadoCivil;
		  document.getElementById('txtIdSexo').value = sexo;
		  document.getElementById('txtIdEdad').value = edadIngresada;

		  respuesta = prompt('quiere ingresar otro dato y/n');
	}


}


/*
TP 12 BIS: Teniendo en cuenta lo realizado en el TP 12, 
ahora se solicita el ingreso de 10 personas para el censo realizando 
las validaciones necesarias. Ademas se debe informar el promedio de edades 
de las personas de sexo femenino.
*/

	let edadIngresada;	
	let sexo;
	let estadoCivil;
	let sueldoBruto;
	let numeroLegajo;
	let nacionalidad;
	let personas = 0;
	let sexoF = 0;
	let edadTotalF = 0;
	let promedioF;

	while(personas<10){

		edadIngresada = prompt('INGRESE EDAD DE 18 A 90 AÑOS');
		edadIngresada = parseInt(edadIngresada);
		while(edadIngresada<18 || edadIngresada>90){
              edadIngresada=prompt('ERROR, INGRESE UNA EDAD CORRECTA');
			  edadIngresada=parseInt(edadIngresada);
		}
		sexo = prompt('INGRESA UN SEXO f/m')
		while(sexo != "f" && sexo != "m"){
              sexo = prompt('ERROR, INGRESE SEXO CORRECTO');			  
		}
		
		estadoCivil = prompt('INGRESE ESTADO CIVIL')
		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo" && estadoCivil != "divorciado"){
			  estadoCivil = prompt('INGRESE ESTADO CIVIL CORRECTO');
		}
		sueldoBruto = prompt('INGRESE SUELDO BRUTO NO MENOR A 8000')
		sueldoBruto = parseInt(sueldoBruto);
		while(sueldoBruto<8000){
              sueldoBruto = prompt('INGRESE SUELDO BRUTO MENOR A 8000');
		}
		numeroLegajo = prompt('INGRESE NUMERO DE LEGAJO');
		numeroLegajo = parseInt(numeroLegajo);
		while(numeroLegajo<1000 || numeroLegajo>9999){
              numeroLegajo=prompt('INGRESE NUMERO DE LEGAJO CORRECTO');
		}
		nacionalidad = prompt('INGRESE NACIONALIDAD');
		while(nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N"){
			  nacionalidad=prompt('INGRESE NACIONALIDAD CORRECTA A, E O N')
		}
		
		//promedio de edad se sexo F
		if(sexo == "f"){
           sexoF = sexoF + 1
		   edadTotalF = edadTotalF + edadIngresada;
		   promedioF = edadTotalF/sexoF;
		}

		  
          personas = personas + 1;
		  
		  

	}
		  document.getElementById('txtIdNacionalidad').value = nacionalidad;
		  document.getElementById('txtIdLegajo').value = numeroLegajo;
		  document.getElementById('txtIdSueldo').value = sueldoBruto;
		  document.getElementById('txtIdEstadoCivil').value = estadoCivil;	
		  document.getElementById('txtIdEdad').value = edadIngresada;
		  document.getElementById('txtIdSexo').value = sexo;
		  

	alert('promedio de edades femeninas es ' + promedioF);
    


		  /*
		  //ESTADO CIVIL
		  estadoCivil = prompt('Ingrese estado civil (soltero, casado, divorciado y viudo');

		  while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil && "divorciado" && estadoCivil != "viudo" ){
                estadoCivil = prompt('Ingrese un estado civil valido');
		  }
		  ///SUELDO BRUTO
		  sueldoBruto = prompt('Ingrese el sueldo correspondiente no menor a 8000');

		  while(sueldoBruto<8000){
				sueldoBruto = prompt('ERROR, INGRESE UN VALOR NO MENOR A 8000');
				sueldoBruto = parseInt(sueldoBruto);
		  }
		  // numero de legajo
		  numeroLegajo = prompt('INGRESE NUMERO DE LEGAJO ENTRE 1000 Y 9999');

		  while(numeroLegajo<1000 || numeroLegajo>9999){
			    numeroLegajo = prompt('NUMERO DE LEGAJO INVALIDO, INGRESE NUEVAMENTE');
				numeroLegajo = parseInt(numeroLegajo);
		  }
		  //NACIONALIDAD	
		  nacionalidad = prompt('INGRESE NACIONALIDAD CORRESPONDIENTE');

		  while(nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N"){
			    nacionalidad = prompt('ERROR, INGRESE NACIONALIDAD CORRESPONDIENTE');
				
		  }

		

		  //respuesta = prompt('quiere ingresar otro dato y/n');


		contador = contador + 1;
		}

		


		document.getElementById('txtIdNacionalidad').value = nacionalidad;
		document.getElementById('txtIdLegajo').value = numeroLegajo;
		document.getElementById('txtIdSueldo').value = sueldoBruto;
		document.getElementById('txtIdEstadoCivil').value = estadoCivil;
		document.getElementById('txtIdSexo').value = sexo;
		document.getElementById('txtIdEdad').value = edadIngresada;


		

		  
		contador = alert('LLEGO AL LIMITE DE PERSONAS');

		



	
	


}
*/
}




  


