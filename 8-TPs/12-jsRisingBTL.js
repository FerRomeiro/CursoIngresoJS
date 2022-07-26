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
{ // promedio de los sueldos de varones argentinos y nacionalizados tmb sexo y estado civil del que mas gana y del que menos gana
	let edadIngresada;	
	let sexo;
	let estadoCivil;
	let sueldoBruto;
	let numeroLegajo;
	let nacionalidad;
	let respuesta = true;
	let contadorArgentinos = 0;
	let contadorNacionalizados = 0;
	let sueldoVaronesArgentinos = 0;
	let promedioVaronesArgentinos;
	let sueldoVaronesNacionalizados = 0;
	let promedioVaronesNacionalizados;
	let banderaSueldoMaximo = 0;
	let sueldoBrutoMaximo;
	let banderaSueldoMinimo = 0;
	let sueldoBrutoMinimo;
	let estadoCivilMayor;
	let estadoCivilMenor;
	

	while(respuesta == true){
		//edad
		edadIngresada=prompt('INGRESE LA EDAD ENTRE 18 Y 90 AÑOS');
		edadIngresada=parseInt(edadIngresada);

		while(edadIngresada < 18 || edadIngresada > 90){
			  edadIngresada=prompt('ERROR, INGRESE EDAD CORRECTA');
			  edadIngresada=parseInt(edadIngresada);
		}
		// sexo
		sexo=prompt('INGRESE SEXO f/m');
		sexo=sexo.toLowerCase();

		while(sexo != "f" && sexo != "m"){
			sexo=prompt('INGRESE SEXO CORRECTO f/m');

		}
		// estado civil
		estadoCivil=prompt('INGRESE ESTADO CIVIL (soltero,casado,viudo,divorciado)');
		
		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo" && estadoCivil != "divorciado"){
			  estadoCivil=prompt('INGRESE ESTADO CIVIL CORRECTO');
		}
		//sueldo bruto
		sueldoBruto=prompt('INGRESE SUELDO BRUTO NO MENOR A 8000$');
		sueldoBruto=parseInt(sueldoBruto);

		while(sueldoBruto < 8000){
			  sueldoBruto=prompt('DEBE SER MAYOR A 8000$');
			  sueldoBruto=parseInt(sueldoBruto);
		}
		// numero de legajo
		numeroLegajo=prompt('INGRESE NUMERO DE LEGAJO');
		numeroLegajo=parseInt(numeroLegajo);

		while(numeroLegajo < 1000 || numeroLegajo > 9999){
			  numeroLegajo=prompt('INGRESE LEGAJO CORRESPONDIENTE');
			  numeroLegajo=parseInt(numeroLegajo);
		}
		//nacionalidad
		nacionalidad=prompt('INGRESE NACIONALIDAD a, e O n');
		nacionalidad=nacionalidad.toLowerCase();

		while(nacionalidad != "a" && nacionalidad != "e" && nacionalidad != "n"){
			 nacionalidad=prompt('INGRESE NACIONALIDAD CORRESPONDIENTE');
		}
		// contador de varones argentinos
		if(nacionalidad == "a" && sexo == "m"){
		   contadorArgentinos = contadorArgentinos + 1;
		   sueldoVaronesArgentinos = sueldoVaronesArgentinos + sueldoBruto; // sueldoVaronesARgentinos += sueldobruto
		}
		// contador de varones nacionalizados
		if(nacionalidad == "n" && sexo == "m"){
		   contadorNacionalizados = contadorNacionalizados + 1;
		   sueldoVaronesNacionalizados = sueldoVaronesNacionalizados + sueldoBruto;
		}

		// estado civil del que mas gana y menos gana
		if(banderaSueldoMaximo == 0 || sueldoBruto>sueldoBrutoMaximo){
		   sueldoBrutoMaximo = sueldoBruto;	
		   estadoCivilMayor = estadoCivil;
		   banderaSueldoMaximo = 1;
		}
		if(banderaSueldoMinimo == 0 || sueldoBruto<sueldoBrutoMinimo){
		   sueldoBrutoMinimo = sueldoBruto;
		   estadoCivilMenor = estadoCivil;
		   banderaSueldoMinimo = 1;
		}


		respuesta = confirm('QUIERE INGRESAR A OTRA PERSONA ?? ');
	}




	promedioVaronesArgentinos=(sueldoVaronesArgentinos/contadorArgentinos);
	promedioVaronesNacionalizados=(sueldoVaronesNacionalizados/contadorNacionalizados);

	document.write('EL ESTADO CIVIL DEL SUELDO MAS BAJO ES ' + estadoCivilMenor + '<br>');
	document.write('EL ESTADO CIVIL DEL QUE MAS GANA ES ' + estadoCivilMayor + '<br>');
	document.write('PROMEDIO DE SUELDO DE VARONES ARGENTINOS ES ' + promedioVaronesArgentinos +'<br>');
	document.write('PROMEDIO DE SUELDO DE VARONES NACIONALIZADOS ES ' + promedioVaronesNacionalizados + '<br>');

	document.getElementById('txtIdNacionalidad').value = nacionalidad;
	document.getElementById('txtIdLegajo').value = numeroLegajo;
	document.getElementById('txtIdSueldo').value = sueldoBruto;
	document.getElementById('txtIdEstadoCivil').value = estadoCivil;
	document.getElementById('txtIdSexo').value = sexo;
	document.getElementById('txtIdEdad').value = edadIngresada;
	//document.write('EDAD INGRESADA ES ' + edadIngresada);


















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
/*
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
    
*/

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




  


