// Alumno: Fernando Romero Montero
// Div: J 

function comenzar()
{
	let numero;
  let numeroSecreto;
  let intentos;

  let maximo = 2; 
  let minimo = 1;

  numero = parseInt(document.getElementById('txtIdNumero').value);
  intentos = document.getElementById('txtIdIntentos').value;

  numeroSecreto = Math.round( Math.random() * (maximo - minimo) + minimo);
  
  switch( numeroSecreto ){
          case 1:
            if(numero==numeroSecreto){
              alert('ES EL GANADOR EN 1 INTENTO');
          
            }
            break;
          default:
            alert('NO');

            
          
  }


}

function verificar()
{
	
  


}

/*
numero = document.getElementById('txtIdNumero').value;

  numeroSecreto = Math.round( Math.random() * (maximo - minimo) + minimo);
  if( numero == numeroSecreto){
      alert('ES EL GANADOR');
  }
  else{
    alert('NO ES EL GANADOR Y LE FALTA ');
  }
  */


