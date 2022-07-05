/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
  let num1;
  let aumento;
  let num2;
  
  num1 = parseInt(document.getElementById('txtIdSueldo').value);
  aumento = num1 * 10 / 100;
  num2 = num1 + aumento;
  document.getElementById('txtIdResultado').value = num2;
  
} 