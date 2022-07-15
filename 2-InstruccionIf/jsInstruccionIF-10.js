// Alumno: Fernando Romero Montero
// Div: J
function mostrar()
{
 let nota;
 let mensaje;
 let maximo = 10;
 let minimo = 1;
 
 nota = Math.round( Math.random() * (maximo - minimo) + minimo);
 
 
 if( nota == 9 || nota == 10 ){
     mensaje =  " EXCELENTE";
 }else if( nota > 4 ){
     mensaje =  " aprobo";
 }else{
	 mensaje =  " la prox sera";
 }
 alert(nota + mensaje);











}















	/*
     let nota;
	 let maximo = 10;
	 let minimo = 1;

	 nota = Math.round(Math.random() * (maximo-minimo) + minimo);
     
	 
	 if( nota >= 9 ){
        alert( nota +  ' EXCELENTE');
	 }
	 else if( nota < 4 ){
		alert(nota + ' Desaprobado');
	 }
     else{
		alert( nota + ' Aprobado'); //PREGUNTA AL PROFE PORQUE NO DA CON ALT 96 
	 }

	 
	 */
