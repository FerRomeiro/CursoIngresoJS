/*
 ALUMNO: FERNANDO ROMERO MONTERO
 DIV: "J"
*/
function mostrar()
{
    let notas;
    let sexo;
    let contador = 0;
    let notasTotales = 0;
    let notaMinima;
    let bandera = 0;
    let sexoPersona;
    let cantidadVarones = 0;

    
    while(contador < 5){
    contador = contador + 1;




        
    //notas
    notas=prompt('INGRESE LA NOTA DEL ALUMNO');
    notas=parseInt(notas);
    while(notas<-1 || notas>10){
          notas=prompt('NOTA INVALIDA, INGRESE UNA NOTA ENTRE 0 Y 10');

             
    }    
    
    //SEXO
    sexo=prompt('INGRESE SEXO CORRESPONDIENTE f/m');
    while(sexo != "f" && sexo != "m"){
          sexo=prompt('SEXO INVALIDO, INGRESE EL QUE CORRESPONDE f/m');
    }
    
    
    //PROMEDIO DE NOTAS
    notasTotales = notasTotales + notas; // ACUMULADOR DE NOTAS DENTRO DE WHILE Y CALCULOS FUERA DEL WHILE
    
    //NOTA MINIMA y sexo de esa persona
    if(bandera == 0){
       notaMinima = notas; 
       bandera = 1;
    }
    
    if(notas<notaMinima){
       notaMinima = notas;
       sexoPersona = sexo;     
    }else{
        sexoPersona = sexo;
    }
    
    //CANTIDAD DE VARONES Q SU NOTA SEA MAYOR O IGUAL A 6
    if(sexo == "m" && notas >= 6 ){
       cantidadVarones = cantidadVarones + 1;
    }

    /*
    if(sexo == "f" ){  // TENER EN CUENTA Q ESTO FUNCIONA PARA DARLE UN SEXO A UN NUMERO
        notas = notas;
 
     }
    */
        
    }


    
    // PROMEDIO NOTAS TOTALES
    notasTotales = notasTotales/5;
    
    alert('PROMEDIO DE NOTAS TOTALES ES ' + notasTotales);
    
    
   
    alert('La nota mas baja es ' + notaMinima + ' y el sexo de esa persona es ' + sexoPersona);
    
    alert('La cantidad de varones que sacaron una nota mayor o igual a 6 son ' + cantidadVarones);

}
