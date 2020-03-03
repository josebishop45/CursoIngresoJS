function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;
	respuesta=true;
	while(respuesta) {
	
		var numero= NaN;
		
		while(isNaN(numero)){
			numero =prompt("Ingrese un numero");
			numero=parseInt(numero);
				
		}
		
		contador++;
		acumulador +=numero;	
	
	respuesta=confirm("Desea continuar?");
			
		
		console.log(numero);
		
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN