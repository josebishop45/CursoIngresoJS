function mostrar()
{
  var respuesta;
  var edad;
  var nombre;
  var pasaje;
  do{
      do{
          edad=prompt("ingrese edad");
          edad=parseInt(edad);
      }while(isNaN(edad) || edad<18);
      do{
          sexo=prompt("ingrese sexo");
      }while(sexo!="f" || sexo!="m");
      do{
          pasaje=prompt("ingrese pasaje")
      }while(pasaje!= "urbano" && pasaje!= "nacional" && pasaje!= "internacional");
      respuesta=confirm("desea continuar?");
    } while(respuesta);


}