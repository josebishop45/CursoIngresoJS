/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	

   var numeroUno;
   var numeroDos;
   var resultado;

   numeroUno = document.getElementById("numeroUno").value;
   numeroDos = document.getElementById("numeroDos").value;

   numeroUno = parseInt(numeroUno);
   numeroDos = parseInt(numeroDos);

   resultado = numeroUno + numeroDos;

   alert("La suma es " + resultado);


	
}

function restar()
{

    numeroUno = document.getElementById("numeroUno").value;
   numeroDos = document.getElementById("numeroDos").value;

   numeroUno = parseInt(numeroUno);
   numeroDos = parseInt(numeroDos);

   resultado = numeroUno - numeroDos;

   alert("La resta es " + resultado);

   

    
	
}

function multiplicar()
{ 

    numeroUno = document.getElementById("numeroUno").value;
   numeroDos = document.getElementById("numeroDos").value;

   numeroUno = parseInt(numeroUno);
   numeroDos = parseInt(numeroDos);

   resultado = numeroUno * numeroDos;

   alert("La multiplicacion es " + resultado);
	
}

function dividir()
{

    numeroUno = document.getElementById("numeroUno").value;
   numeroDos = document.getElementById("numeroDos").value;

   numeroUno = parseInt(numeroUno);
   numeroDos = parseInt(numeroDos);

   resultado = numeroUno / numeroDos;

   alert("La division es " + resultado);
	
}

