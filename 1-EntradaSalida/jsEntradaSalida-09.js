//Alumno: Fernando Romero Montero
//Div: J
function mostrarAumento()
{
  /*
  let num1;
  let aumento;
  let num2;
  
  num1 = parseInt(document.getElementById('txtIdSueldo').value);
  aumento = num1 * 10 / 100;
  num2 = num1 + aumento;
  document.getElementById('txtIdResultado').value = num2;
  */
  let numeroUno; //sueldo
  let numeroDos; // resultado
  let numeroTres; // porcentaje

  numeroUno = parseInt(document.getElementById('txtIdSueldo').value);
  numeroTres = prompt('ingrese porcentaje');
  //num3 = parseInt(num3);
  numeroDos = numeroUno * numeroTres / 100;
  numeroDos = numeroUno + numeroDos;
  
  document.getElementById('txtIdResultado').value = numeroDos;
  
   
} 
