function mostrar()
{

	var contador=0;
	var numMax;
	var numMin;
	var primeraVez=true;	

	
// declarar variables
	
	var respuesta=true;

	while(respuesta)
	{ 
		var numero=NaN;

		while(isNaN(numero)){
			numero=prompt("Ingrese un numero");
			numero=parseInt(numero);
		 if(primeraVez) {
			primeraVez=false;

			numMax=numero;
			numMin=numero;
		} else {
			if(numero>numMax) {
				numMax=numero;
			} if(numero<numMin) {
				numMin=numero;
			}
		}
	}

	document.getElementById("maximo").value=numMax;
	document.getElementById("minimo").value=numMin;

		respuesta=confirm("Desea continuar?");
	}





}//FIN DE LA FUNCIÓN