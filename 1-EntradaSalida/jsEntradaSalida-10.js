/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
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
  let num1; // sueldo
  let num2; // descuento
  let num3; // resultado

  num1 = parseInt(document.getElementById('txtIdImporte').value);
  num2 = prompt('ingrese el valor del descuento');
  num3 = num1 * num2/100;
  document.getElementById('txtIdResultado').value = num3;

  

}

