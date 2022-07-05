/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
// case sensitivy
// came case
function Rectangulo () 
{
 let largo;
 let ancho;
 let resultado;
 largo = parseInt(document.getElementById('txtIdLargo').value);
 ancho = parseInt(document.getElementById('txtIdAncho').value);
 resultado = ((largo * 2) + (ancho * 2)) * 3;
 alert('La cantidad de metros de alambre que se debe comprar son ' + resultado + ' m');
 document.getElementById('txtIdLargo').value;
 document.getElementById('txtIdAncho').value;
}
function Circulo () 
{
 	let radio;
    let m;
    radio = parseInt(document.getElementById('txtIdRadio').value);
    m = radio * 3;
    alert('Los metros de alambre que se deben comprar son ' + m); 
    document.getElementById('txtIdRadio').value = "";
}
function Materiales () 
{
 let num1;
 let num2;
 let num3;
 let num4;
 let num5;

 num1 = parseInt(document.getElementById('txtIdLargo').value);
 num2 = parseInt(document.getElementById('txtIdAncho').value);
 num3 = num1 + num2;
 num4 = num3 * 2; // bolsas de cemento
 num5 = num3 * 3; // bolsas de cal
 alert('Para el contrapiso voy a necesitar ' + num4 + ' bolsas de cemento y ' + num5 + ' bolsas de cal');
document.getElementById('txtIdLargo').value = "";
document.getElementById('txtIdAncho').value = "";

}