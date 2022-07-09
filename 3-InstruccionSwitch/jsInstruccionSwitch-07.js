function mostrar()
{
let destino;
destino = document.getElementById('txtIdDestino').value;
/*
switch(destino){
       case "Mar del plata":
		alert('norte');
		break;
		case "Bariloche":
		alert('Sur');
		break;
		case "Cataratas":
		alert('Este');
		break;
		case "Ushuaia":
		alert('Oeste');
		break;
}
*/
if( destino == "Mar del plata" ){
    alert('Norte');
}
else if ( destino == "Bariloche"){
    alert('Sur');
}
else if( destino == "Cataratas" ){
    alert('Este');
}
else{
	alert('Oeste');
}

}
