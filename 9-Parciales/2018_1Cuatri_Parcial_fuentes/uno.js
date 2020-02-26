
function mostrar()
{
    var ancho;
    var largo;
    var perimetro;
    while(isNaN(ancho)){
         ancho=prompt("Ingrese ancho");
			ancho=parseInt(ancho);
    }
    while(isNaN(largo)) {
         largo=prompt("Ingrese largo");
			largo=parseInt(largo);
     }

              	
     
		 perimetro=(largo+ancho)*2;
        alert("el perimetro es "+ perimetro);
    
}	     

    


