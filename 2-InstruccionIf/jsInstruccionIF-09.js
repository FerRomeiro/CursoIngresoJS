// Alumno: Fernando Romero Montero
// Div: J
function mostrar()
{
let numero;
let maximo = 10;
let minimo = 1;

numero = Math.round( Math.random() * (maximo - minimo) + minimo);
alert(numero); // NO OLVIDARSE EL ALERT QUE ES LO QUE MUESTRA AL FINAL EL NUMERO SINO 
               // NO VA A MOSTRAR NADA. 
}
// numero = Math.Floor(Math.random() * (maximo - minimo) + minimo);
// ACA USAMOS EL FLOOR PORQUE REDONDEA PARA ABAJO Y EL ROUND PARA ARRIBA. 