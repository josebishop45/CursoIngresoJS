/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/



   
    var primerPrecio;
    var segundoPrecio;
    var tercerPrecio;
    var resultado;

function Sumar () 
{

   

    primerPrecio = document.getElementById("PrecioUno").value;
    primerPrecio = parseInt(primerPrecio);

    segundoPrecio = document.getElementById("PrecioDos").value;
    segundoPrecio = parseInt(segundoPrecio);

    tercerPrecio = document.getElementById("PrecioTres").value;
    tercerPrecio = parseInt(tercerPrecio);

    resultado = primerPrecio + segundoPrecio + tercerPrecio;

    alert("la suma es " + resultado);

	
}
function Promedio () 
{

    primerPrecio = document.getElementById("PrecioUno").value;
    primerPrecio = parseInt(primerPrecio);

    segundoPrecio = document.getElementById("PrecioDos").value;
    segundoPrecio = parseInt(segundoPrecio);

    tercerPrecio = document.getElementById("PrecioTres").value;
    tercerPrecio = parseInt(tercerPrecio);

    resultado = (primerPrecio + segundoPrecio + tercerPrecio) / 3;

    alert("el promedio es " + resultado);
	
}
function PrecioFinal () 
{

    primerPrecio = document.getElementById("PrecioUno").value;
    primerPrecio = parseInt(primerPrecio);

    segundoPrecio = document.getElementById("PrecioDos").value;
    segundoPrecio = parseInt(segundoPrecio);

    tercerPrecio = document.getElementById("PrecioTres").value;
    tercerPrecio = parseInt(tercerPrecio);

    resultado = (primerPrecio + segundoPrecio + tercerPrecio)*1.21;

    alert("el precio final es " + resultado);
	
}