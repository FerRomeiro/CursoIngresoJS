/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
 let num1;
 let num2;
 let num3;
 let resultado;
 num1 = parseInt(document.getElementById('txtIdPrecioUno').value);
 num2 = parseInt(document.getElementById('txtIdPrecioDos').value);
 num3 = parseInt(document.getElementById('txtIdPrecioTres').value);
 resultado = num1 + num2 + num3;
 alert('La suma de los 3 productos es igual ' + resultado);
 document.getElementById('txtIdPrecioUno').value="";
 document.getElementById('txtIdPrecioDos').value="";
 document.getElementById('txtIdPrecioTres').value="";
}
function Promedio () 
{
  let num4;
  let num5;
  let num6;
  let promedio;
  num4 = parseInt(document.getElementById('txtIdPrecioUno').value);
  num5 = parseInt(document.getElementById('txtIdPrecioDos').value);
  num6 = parseInt(document.getElementById('txtIdPrecioTres').value);
  promedio = (num4 + num5 + num6) / 3;
  alert('El promedio de los 3 productos es ' + promedio);
  document.getElementById('txtIdPrecioUno').value = "";
  document.getElementById('txtIdPrecioDos').value="";
  document.getElementById('txtIdPrecioTres').value="";

	
}
function PrecioFinal () 
{
  let num7;
  let num8;
  let num9;
  let iva
  let precioFinal;
  num7 = parseInt(document.getElementById('txtIdPrecioUno').value);
  num8 = parseInt(document.getElementById('txtIdPrecioDos').value);
  num9 = parseInt(document.getElementById('txtIdPrecioTres').value);
  iva = (num7 * 0.21) + (num8 * 0.21) + (num9 * 0.21);
  precioFinal = (num7 + num8 + num9) + iva;
  alert('El precio final mas IVA es ' + precioFinal);


}