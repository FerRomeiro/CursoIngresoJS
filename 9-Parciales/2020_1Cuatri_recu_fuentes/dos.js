function mostrar()
{
  let tipo;
  let bolsas;
  let precioPorBolsa;
  let respuesta = true;
  let descuento;
  let precioTotalBolsasDescuento;
  let totalPagar;
  let bandera = 0;
  let bolsasMax;
  let tipoMax;
  let banderaDelTipoMasCaro = 0;
  let totalMax;
  let tipoMasCaro;

  while(respuesta==true){
  //tipo
  tipo=prompt('INGRESE EL TIPO DE BOLSA "arena" "cal" "cemento"');
  tipo=tipo.toLowerCase();
  while(tipo != "arena" && tipo != "cal" && tipo != "cemento"){
        tipo=prompt('ERROR, INGRESE OTRO DATO');
        tipo=tipo.toLowerCase();
  }
  //cantidad bolsas
  bolsas=prompt('INGRESE CANTIDAD DE BOLSAS');
  bolsas=parseInt(bolsas);
  
  //precio por bolsa
  precioPorBolsa=prompt('INGRESE PRECIO POR BOLSA');
  precioPorBolsa=parseInt(precioPorBolsa);
  while(precioPorBolsa<1){
        precioPorBolsa=prompt('ERROR, INGRESO DATO CORRECTO');
        precioPorBolsa=parseInt(precioPorBolsa);
  }

  /*
  //Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
  if(bolsas > 10){     
     descuento=15;
  }
      
  //Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
  if(bolsas > 30){
     descuento=25;
  }
  // a) El importe total a pagar , bruto sin descuento y...
  if(bolsas<=10){
     descuento = 0;
  }   
  */
  // ASI HICE LOS 3 PUNTOS DE ARRIBA SIN UN IF SEPARADO.
  if(bolsas>10 && bolsas<31){
     descuento=15;
  }
  else{
       if(bolsas>30){
          descuento=25;
       }else{
         descuento = 0;
       }
  }





   

  // d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
    if(bolsas>bolsasMax || bandera== 0){     
       bolsasMax = bolsas;
       tipoMax = tipo;
       bandera = 1;

    }

    



    // f) El tipo mas caro
      if(banderaDelTipoMasCaro == 0 || precioPorBolsa>totalMax ){
      totalMax = precioPorBolsa;
      tipoMasCaro = tipo;
   }



    respuesta=confirm('QUIERE INGRESAR MAS DATOS');
  }

  if(bolsas>10){
  precioTotalBolsasDescuento=((bolsas*precioPorBolsa)*descuento)/100;
  totalPagar=precioTotalBolsasDescuento;
  }
  else{
      totalPagar=(bolsas*precioPorBolsa);
  }

  

  document.write('EL TIPO MAS CARO ES ' + tipoMasCaro + ' CON UN TOTAL DE ' + totalPagar + '$' + '<br>');
  document.write('EL TIPO DE BOLSAS CON CANTIDAD ES ' + tipoMax + ' CON UN TOTAL DE ' + bolsasMax + '<br>');
  document.write('TOTAL A PAGAR CON DESCUENTO DEL ' + descuento + '% ES ' + totalPagar + '$' + '<br>');
}
