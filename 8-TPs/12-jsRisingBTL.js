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
 	let edadIngresada;
	let respuesta = 'y';
	let sexo;
	let estadoCivil;

	while(respuesta == 'y'){
          edadIngresada = prompt('ingrese edad entre 18 y 90 años inclusive');
		  edadIngresada = parseInt(edadIngresada);

		  while(edadIngresada < 17 || edadIngresada > 90){
                edadIngresada = prompt('ERROR, ingrese edad nuevamente'); // se tiene q parsear nuevamente el error recordar
				edadIngresada = parseInt(edadIngresada);
		  }

		  sexo = prompt('ingrese sexo m/f');

		  while(sexo != "f" && sexo != "m"){
			sexo = prompt('INGRESE SEXO VALIDO');
	      }

		  estadoCivil = prompt('Ingrese estado civil (soltero, casado, divorciado y viudo');

		  while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil && "divorciado" && estadoCivil != "viudo" ){
                estadoCivil = prompt('Ingrese un estado civil valido');
		  }

		  document.getElementById('txtIdEstadoCivil').value = estadoCivil;
		  document.getElementById('txtIdSexo').value = sexo;
		  document.getElementById('txtIdEdad').value = edadIngresada;

		  respuesta = prompt('quiere ingresar otro dato y/n');
	}


}
