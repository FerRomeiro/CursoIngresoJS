function mostrar()
{
    let numero;
    let letra; 
    let respuesta = 'y';
    let numeroPares = 0;
    let resto;
    let numeroImpares = 0;
    let cantidadDeCeros = 0;
    let promedioPositivos = 0;
    let acumuladorPositivos = 0;
    let TotalPositivos;
    let totalNegativo = 0;
    let bandera = 0;
    let letraMinima;
    let letraMaxima;
    /*
    PARA QUE INGRESE SOLO UNA LETRA DE LA A A LA Z
    letra = prompt('ingrse una letra');
    letra=letra.tolowercase();
    while( letra.lenght != 1){
            LETRA = PROMPT('INGRESE UNA LETRA');
            LETRA =LETRA.LOWERCASE();
    }
*/

    while(respuesta == 'y'){

        
        letra = prompt('INGRESE UNA LETRA(d, z, g, a, b, k)');
        while(letra != 'a' && letra != 'd' && letra != 'z' && letra != 'b' && letra != 'k' && letra != 'g'){
              letra=prompt('INGRESE UNA LETRA VALIDA');
        }
        
          numero = prompt('INGRESE UN NUMERO DE -100 A LA 100');         
          numero = parseInt(numero);
          while(numero < -100 || numero > 100){
                numero=prompt('ERROR, INGRESE UN NUMERO VALIDO ENTRE -100 Y 100');

                numero=parseInt(numero);
          }



        //CANTIDAD DE NUMEROS PARES Y IMPARES
        resto = (numero%2);
        //resto = parseInt(resto);
        if(resto == 0){
           numeroPares = numeroPares + 1;
        }
        else
        {
          numeroImpares = numeroImpares + 1;
        }   

        //CANTIDAD DE CEROS, PROMEDIO POSITIVOS,  SUMA DE NEGATIVOS
        if(numero == 0){
            cantidadDeCeros = cantidadDeCeros + 1;
         }
         else
         {
            if(numero>0)
            {
                promedioPositivos = promedioPositivos + 1;
                acumuladorPositivos = acumuladorPositivos + numero;
                TotalPositivos = acumuladorPositivos/promedioPositivos; // POR AFUERA DEL BUCLE SE HACE EL PROMEDIO
            }
            else
            {
                
                
                   totalNegativo = totalNegativo + numero;
                
            }
         }
         // NUMERO Y LETRA DEL MAXIMO Y MINIMO CON SUS LETRAS   

         while(bandera == 0){           // VA CON IF SIEMPRE LAS BANDERAS 
               numeroMaximo = numero;
               numeroMinimo = numero;

               bandera = 1;
               
         }
         if(numero<numeroMinimo){
            numeroMinimo = numero;
            letraMinima = letra;
         }
         else{
            numeroMaximo = numero;
            letraMaxima = letra;
         }
         /* 
         if(bandera == 0){
            numeroMaximo = numero;
               numeroMinimo = numero;

               bandera = 1;
         }
         else{
             if(numero<numeroMinimo){
             numeroMinimo = numero;
                letraMinima = letra;
         }
            else{
            if(numero>numeroMaximo){  
            numeroMaximo = numero;
            letraMaxima = letra;
            }
         }
         */

        /*
        if(numero>numeroMaximo || banderaMaxima == 0 ){}
        if(numero<numeroMinimo || banderaMinima == 0){}
        */

          
        
        respuesta = prompt('QUIERE INGRESAR OTROS DATOS ?? y/n');
    }

    document.write("(" + letra + "," + numero + ")" + "<br>"); //DOCUMENTE WRITE VA SIN = RECORDALOOOOOOOOOOOOOOADSSADASDASDOSAODSODSAODASOSDAO
    document.write('LA CANTIDAD DE CEROS SON ' + cantidadDeCeros + '<br>');
    document.write(`LOS NUMEROS PARES SON ${numeroPares} Y NUMERO IMPARES ES IGUAL A ${numeroImpares}<br>`);
    document.write('PROMEDIO DE LOS NUMEROS POSITIVOS ES IGUAL A ' + TotalPositivos + '<br>');
    document.write(`LA SUMA DE LOS NEGATIVOS ES IGUAL A ${totalNegativo}<br>`);
    document.write('EL NUMERO MAXIMO ES ' + numeroMaximo + ' EL NUMERO MINIMO ES ' + numeroMinimo + '<br>');
    document.write('LA LETRA DEL NUMERO MAS BAJO ES ' + letraMinima + '<br>');
    document.write('LA LETRA DEL NUMERO MAS GRANDE ES ' + letraMaxima + '<br>');    

}
