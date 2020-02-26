function mostrar()
{

	//var contador=0;
	var numMax;
	var numMin;
	var primeraVez=true;//la bandera sirve para saber si es la primera vez q ingreso

	
	// declarar variables
	
	var respuesta=true;

	while(respuesta)
	{ 
		var numero=NaN;

		while(isNaN(numero)) //while(isNan(numero) || (numero<1 || numero>10)) Es para validar si es un numero o no, y si esta entre el 1 y 10
		{
			numero=prompt("Ingrese un numero");
			numero=parseInt(numero);
			if(primeraVez)
				{
					primeraVez=false;

					numMax=numero;
					numMin=numero;
				}else 
					{
		
						if(numero>numMax) 
						{					//ORDENAR LOS CODIGOS PARA MAS FACIL LECTURA  
							numMax=numero;

						}if(numero<numMin)
						{
							numMin=numero;
						}	
					}		
		}

		document.getElementById("maximo").value=numMax;//se le asigna a este componente el valor del maximo
		document.getElementById("minimo").value=numMin;//se le asigna a este componente el valor del minimo 

		respuesta=confirm("Desea continuar?");
	}





}//FIN DE LA FUNCIÓN
//la bandera sirve para saber si es la primera vez q ingreso
//para usar el contador en el ejercicio me tiene q dar un contador 