/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
   let sexo;

   sexo = prompt('INGRESE SEXO');

   while( sexo != "f" && sexo != "m"  ){ // FIJARSE CON EL OPERADOR CONDICIONAL
          sexo = prompt('INGRESE NUEVAMENTE SEXO');
   }

   document.getElementById('txtIdSexo').value = sexo;
}