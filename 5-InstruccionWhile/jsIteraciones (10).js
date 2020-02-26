function mostrar()
{

	var contador=0;
	var acumuladorSuma=0;
	var acumuladorResta=0;
	var sumaPositivos;
	var cantidadPositivos;
	var cantidadNegativos;
	var cantidadCeros;
	var cantidadPares=0;
	var cantidadImpares=0;
	var contadorPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	//declarar contadores y variables 
	
	var respuesta="true";

	do { 
		do {
			numero=prompt("ingrese un numero");
			numero=parseInt(numero);

		}while(isNaN(numero));
		if(numero<0){
			acumuladorResta += numero;
			cantidadImpares+=1
		} else if (numero>0){
			//punto 2
			acumuladorSuma= acumuladorSuma+numero;
			cantidadPositivos++;
		} else {
			cantidadCeros=cantidadCeros+1;
		} if (numero%2 ==0) {
			cantidadPares++;
		}
		respuesta=confirm("desea continuar?");
	} while(respuesta);//tomar numeros hasta q el usuario quiera
	if (cantidadNegativos != 0) {
		promedioPositivos=acumuladorSuma/cantidadPositivos;
		
	} else {
		promedioPositivos =0;
	} if (cantidadNegativos) {

	}
	
	diferencia=acumuladorSuma-acumuladorResta;

	document.write("7- Promedio +:"+promedioPositivos+ "<br>");
	document.write("8- Promedio +:"+promedioNegativos+ "<br>");
	document.write("9- diferencia  +:"+promedioPositivos+ "<br>");


}//FIN DE LA FUNCIÓN
// salto de linea + "<br >"
//mostrar por document.write