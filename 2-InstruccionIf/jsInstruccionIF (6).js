function mostrar()
{
    var edad;
    edad= document.getElementById("edad").value;
    edad=parseInt(edad);

    if(edad>17) {
        alert("mayor");
    }
    else
    {
        if(edad<18 && edad>12)
        {
            alert("adolescente");

        }else     
        
        {
            alert("menor");   
    }

    }

    
//tomo la edad  




}//FIN DE LA FUNCIÓN