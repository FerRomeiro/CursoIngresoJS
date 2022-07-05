/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let centigrados;
    let fahrenheit;
  
    fahrenheit = parseInt(document.getElementById('txtIdTemperatura').value);
    centigrados = (fahrenheit - 32) * 5/9;
    alert(`${fahrenheit} fahrenhei son ${centigrados} centigrado`);
    document.getElementById('txtIdTemperatura').value = "";

}

function CentigradosFahrenheit () 
{
	let num1;
    let num2;
    num1 = parseInt(document.getElementById('txtIdTemperatura').value);
    num2 = (num1 * 9/5) + 32;
    alert(num1 + ' centigrados son ' + num2);
    document.getElementById('txtIdTemperatura').value = "";  
 //console.log("")sirve para poner un mensaje en la consola del navegador 
}
