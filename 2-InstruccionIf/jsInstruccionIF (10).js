function mostrar()
{
	var notaRandom;
	var numMax;
	var numMin;

	numMax = 11;
	numMin = 1;

notaRandom = Math.floor (Math.random() * (numMax - numMin)) + numMin;
console.log(notaRandom);
if (notaRandom > 8) {
	alert("Excelente " + notaRandom);
	} else {
		if (notaRandom > 4) {
			alert("aprobo "+notaRandom);
		} else {
			alert("Vamos, la proxima se puede "+notaRandom);
		}


	}
	

	//Genero el número RANDOM entre 1 y 10 
	

}//FIN DE LA FUNCIÓN
//w3s random 