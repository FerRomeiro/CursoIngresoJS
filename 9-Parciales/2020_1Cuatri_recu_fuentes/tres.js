function mostrar()
{
	let nombre;
	let nacionalidad;
	let edad;
	let sexo;
	let estadoCivil;
	let tCorporal;
	let respuesta = true;
	let tMasAlta = 0;
	let temperaturaAlta;
	let personaConTmasAlta;
	let acumuladorSoltero = 0;
	let acumuladorMujeresSolterasViudas = 0;
	let contadorPersonasTerceraEdad = 0;
	let contadorMujeresCasadas = 0;
	let edadMujeresCasadas = 0;
	let promedioEdadMujeresCasadas;




	while(respuesta==true){

	nombre=prompt('INGRESE SU NOMBRE');

	nacionalidad=prompt('INGRESE SU NACIONALIDAD');
	
	edad=prompt('INGRESE EDAD');
	edad=parseInt(edad);

	sexo=prompt('INGRESE SEXO f/m');
	sexo=sexo.toLowerCase();

	while(sexo!="f" && sexo!="m"){
		  sexo=prompt('SEXO INCORRECTO f/m');
		  sexo=sexo.toLowerCase();
	}

	estadoCivil=prompt('INGRESE ESTADO CIVIL soltero, casado o viudo');

	while(estadoCivil!="soltero" && estadoCivil!="casado" && estadoCivil !="viudo"){
		  estadoCivil=prompt('INGRESE UN ESTADO CIVIL VALIDO');
	}
	
	tCorporal=prompt('INGRESE TEMPERATURA CORPORAL');
	tCorporal=parseInt(tCorporal);

	if(tCorporal>temperaturaAlta || tMasAlta == 0){
		temperaturaAlta = tCorporal;
		personaConTmasAlta = nombre;
		tMasAlta = 1;
	}

	if(edad>17 && estadoCivil == "soltero"){
	   acumuladorSoltero = acumuladorSoltero + 1;
	}

	if(sexo=="f" && estadoCivil=="soltero" || estadoCivil=="viudo"){
	   acumuladorMujeresSolterasViudas = acumuladorMujeresSolterasViudas + 1;

	}

	if(edad>60 && tCorporal >38){
	   contadorPersonasTerceraEdad = contadorPersonasTerceraEdad + 1;
	}

	if(sexo=="f" && estadoCivil == "casado"){
	   contadorMujeresCasadas = contadorMujeresCasadas + 1;
	   edadMujeresCasadas = edadMujeresCasadas + edad;
	}


		  respuesta=confirm('QUIERE INGRESAR A OTRA PERSONA??');
	}
	promedioEdadMujeresCasadas=(edadMujeresCasadas/contadorMujeresCasadas);

	document.write('LA CANTIDAD DE MUJERES CASADAS SON ' + contadorMujeresCasadas + ' Y EL PROMEDIO DE EDAD ES ' + promedioEdadMujeresCasadas + '<br>');
	document.write('LA CANTIDAD DE PERSONAS DE LA TERCERA EDAD CON MAS DE 38° DE TEMPERATURA SON ' + contadorPersonasTerceraEdad + '<br>');
	document.write('LA CANTIDAD DE MUJERES SOLTERAS O VIUDAS SON ' + acumuladorMujeresSolterasViudas + '<br>');
	document.write('LA CANTIDAD DE PERSONAS MAYORES A 17 Y SOLTEROS SON ' + acumuladorSoltero + '<br>');
	document.write('LA PERSONA CON LA TEMPERATURA MAS ALTA ES ' + personaConTmasAlta + ' CON ' + temperaturaAlta + '°' + '<br>');
}
