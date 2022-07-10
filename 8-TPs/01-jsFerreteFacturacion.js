// Alumno: Fernando Romero Montero
// Div: J
function Sumar () 
{
 let numeroUno;
 let numeroDos;
 let numeroTres;
 let resultado;
 numeroUno = parseInt(document.getElementById('txtIdPrecioUno').value);
 numeroDos = parseInt(document.getElementById('txtIdPrecioDos').value);
 numeroTres = parseInt(document.getElementById('txtIdPrecioTres').value);
 resultado = numeroUno + numeroDos + numeroTres;
 alert('La suma de los 3 productos es igual ' + resultado);
 document.getElementById('txtIdPrecioUno').value="";
 document.getElementById('txtIdPrecioDos').value="";
 document.getElementById('txtIdPrecioTres').value="";
}
function Promedio () 
{
  let numeroCuatro;
  let numeroCinco;
  let numeroSeis;
  let promedio;
  numeroCuatro = parseInt(document.getElementById('txtIdPrecioUno').value);
  numeroCinco = parseInt(document.getElementById('txtIdPrecioDos').value);
  numeroSeis = parseInt(document.getElementById('txtIdPrecioTres').value);
  promedio = (numeroCuatro + numeroCinco + numeroSeis) / 3;
  alert('El promedio de los 3 productos es ' + promedio);
  document.getElementById('txtIdPrecioUno').value = "";
  document.getElementById('txtIdPrecioDos').value="";
  document.getElementById('txtIdPrecioTres').value="";

	
}
function PrecioFinal () 
{
  let numeroSiete;
  let numeroOcho;
  let numeroNueve;
  let iva
  let precioFinal;
  numeroSiete = parseInt(document.getElementById('txtIdPrecioUno').value);
  numeroOcho = parseInt(document.getElementById('txtIdPrecioDos').value);
  numeroNueve = parseInt(document.getElementById('txtIdPrecioTres').value);
  iva = (numeroSiete * 0.21) + (numeroOcho * 0.21) + (numeroNueve * 0.21);
  precioFinal = (numeroSiete + numeroOcho + numeroNueve) + iva;
  alert('El precio final mas IVA ses ' + precioFinal);


}