function mostrar()
{

    var edad;
    var estadoCivil;
    edad=document.getElementById("edad").value;
    edad=parseInt(edad);
    estadoCivil= document.getElementById("estadoCivil").value;
        
    console.log(estadoCivil);
    console.log(edad);
    if (edad<18 && estadoCivil != "Soltero") {

    } else {
        if(estadoCivil=="Soltero" && edad>17){
            alert("Es soltero y no es menor");
        }
      }
 //tomo la edad  

	


}//FIN DE LA FUNCIÓN