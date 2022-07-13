// Alumno: Fernando Romero Montero
// Div: J
function CalcularPrecio () 
{
    const lamparas = 35;
    let cantidadLamparas;
    let precioDescuento;
    let precioFinal;
    let precioNormal;
    let marca;
    let mensaje;
    let ingresosBrutos;
    let precioConIngresosBrutos;

     cantidadLamparas = document.getElementById('txtIdCantidad').value;
     precioConDescuento = document.getElementById('txtIdprecioDescuento').value;
     marca = document.getElementById('Marca').value;
     
     if( cantidadLamparas >= 6 ){
         descuento = 50;
         mensaje = 'Descuento del 50%';
     }
     else if( cantidadLamparas == 5 ){
          if( marca == 'ArgentinaLuz' ){
              descuento = 40;
              mensaje = 'Descuento del 40%';
          }
          else{
              descuento = 30;
              mensaje = 'Descuento del 30%';
          }
     }
     else if( cantidadLamparas == 4 ){
          if( marca == 'ArgentinaLuz' || marca == 'FelipeLamparas' ){
              descuento = 25;
              mensaje = 'Descuento del 25%';
          }
          else{
              descuento = 20;
              mensaje = 'Descuento del 20%';
          }
     }
     else if( cantidadLamparas == 3 ){ 
          if( marca == "ArgentinaLuz" ){
              descuento = 15;
              mensaje = 'Descuento del 15%';
            }
     else if( marca == 'FelipeLamparas' ){
              descuento = 10;
              mensaje = 'Descuento del 10%'
          }
          else{
            descuento = 5;
            mensaje = 'Descuento del 5%';
          }
     }
     else{
        descuento = 0;
        mensaje = 'Descuento igual a 0%'
     }

     
     precioDescuento = (((cantidadLamparas*lamparas)*descuento)/100);
     precioNormal = (cantidadLamparas*lamparas);
     precioFinal = precioNormal - precioDescuento;
     if( precioFinal > 120){
         ingresosBrutos = ((precioFinal*10)/100);
         precioConIngresosBrutos = (precioFinal + ingresosBrutos);
         alert('PAGO ' + precioConIngresosBrutos + '$ SIENDO ' + ingresosBrutos + '$ EL IMPUESTO QUE SE PAGO');
     }
     
     alert(mensaje);   
     document.getElementById('txtIdprecioDescuento').value = precioFinal;

    }
/*    
const lamparas = 35;
let cantidad;
let marca;
let precioFinal;
let precioConIngresosBrutos;

cantidad = parseInt(document.getElementById('txtIdCantidad').value);

precioDescuento = document.getElementById('txtIdprecioDescuento').value;
marca = document.getElementById('Marca').value;

switch( cantidad ){
        case 1:
        case 2:
            precioFinal = (cantidad*lamparas);
            alert(precioFinal);
            break;
        case 3:
            if( marca == "ArgentinaLuz"){
                precioFinal = (lamparas*cantidad)-(((cantidad*lamparas)*15)/100);
                alert(precioFinal);
            }
            else if( marca == "FelipeLamparas" ){
                precioFinal = (cantidad*lamparas)-(((cantidad*lamparas)*10)/100);
                alert(precioFinal);
            }
            else{
                precioFinal = (cantidad*lamparas)-(((cantidad*lamparas)*5)/100);
                alert(precioFinal);
            }
            break;
        case 4:
            if( marca == "ArgentinaLuz" || marca == "FelipeLamparas" ){
                precioFinal = (lamparas*cantidad)-(((cantidad*lamparas)*25)/100);
                alert(precioFinal);
            }
            else{
                precioFinal = (lamparas*cantidad)-(((cantidad*lamparas)*20)/100);
                alert(precioFinal);
            }
            
            break;
        case 5:
            if( marca == "ArgentinaLuz" ){
                precioFinal = (lamparas*cantidad)-(((cantidad*lamparas)*40)/100);
                alert(precioFinal);
            }
            else{
                precioFinal = (cantidad*lamparas)-(((cantidad*lamparas)*30)/100);
                alert(precioFinal);
            }
            break;
        default:
            precioFinal = (lamparas*cantidad)-(((cantidad*lamparas)*50)/100);
                alert('descuento del 50%');

        
            

}

    if( precioFinal > 120 ){
        precioConIngresosBrutos = precioFinal + ((precioFinal*10)/100);
        alert('Le vamos a sumar 10% de ingresos brutos TOTAL ' +  precioConIngresosBrutos);

    }



*/

/*

switch (marca){
    case "ArgentinaLuz":
        if( cantidad == 5){
        precioFinal = (cantidad*lamparas)-(((cantidad*lamparas)*40)/100);
        alert(precioFinal);
        }
    case "ArgentinaLuz":
    case "FelipeLamparas":
        if( cantidad == 4 ){
        precioFinal = (cantidad*lamparas)-(((cantidad*lamparas)*25)/100);
        alert(precioFinal);
        
    }
    
    case "ArgentinaLuz":
        if( cantidad == 3 ){
        precioFinal = (cantidad*lamparas)-(((cantidad*lamparas)*15)/100);
        alert(precioFinal);
        }
    case "FelipeLamparas":
        if( cantidad == 3){
        precioFinal = (cantidad*lamparas)-(((cantidad*lamparas)*10)/100);
        alert(precioFinal);
        }
  
        */



/*
switch( marca ){
        case "ArgentinaLuz":
        case "FelipeLamparas":
        case "JeLuz":
        case "HazIluminacion":
        case "Osram":
             if( cantidad >= 6 ){
                 precioFinal = (lamparas*cantidad)/2;
                 alert(precioFinal + "UNO");
             }
                 
         

        case "ArgentinaLuz":
        if( cantidad == 5 ){
            precioFinal = ((cantidad*40)/100)*lamparas; 
            alert(precioFinal + "TRES");
         }
         else{
            precioFinal = ((cantidad*30)/100)*lamparas;
            alert(precioFinal + "CUATRO");
         }


      



}
*/


