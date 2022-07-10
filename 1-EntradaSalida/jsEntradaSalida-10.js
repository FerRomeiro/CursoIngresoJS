//Alumno: Fernando Romero Montero
//Div: J
function mostrarAumento()
{
  /*let sueldo;
  let descuento;
  let resultado;
  sueldo = parseInt(document.getElementById('txtIdImporte').value);
  descuento = sueldo * 25 / 100;
  resultado = sueldo - descuento;
  document.getElementById('txtIdResultado').value = resultado;
*/
  let numeroUno; // sueldo
  let numeroDos; // descuento
  let numeroTres; // resultado

  numeroUno = parseInt(document.getElementById('txtIdImporte').value);
  numeroDos = prompt('ingrese el valor del descuento');
  
  numeroTres = numeroUno * (numeroDos/100);
  numeroTres = numeroUno - numeroDos;
  document.getElementById('txtIdResultado').value = numeroTres;

  

}

