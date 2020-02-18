function mostrar()
{

    var edad;
    var estadoCivil;
    var soltero;
    edad=document.getElementById("edad").value;
    edad=parseInt(edad);
    estadoCivil = document.getElementById("estadoCivil").value;
    soltero=document.getElementById("Soltero");
    
    console.log(estadoCivil);
    console.log(edad);
    if (edad<18 != soltero) {
        alert("Es muy pequeño para no ser soltero");
    }
//tomo la edad  

	


}//FIN DE LA FUNCIÓN