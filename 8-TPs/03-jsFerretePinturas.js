// Alumno: Fernando Romero Montero
// Div: J
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
	let numeroUno;
    let numeroDos;
    numeroUno = parseInt(document.getElementById('txtIdTemperatura').value);
    numeroDos = (numeroUno * 9/5) + 32;
    alert(numeroUno + ' centigrados son ' + numeroDos);
    document.getElementById('txtIdTemperatura').value = "";  
 //console.log("")sirve para poner un mensaje en la consola del navegador 
}
