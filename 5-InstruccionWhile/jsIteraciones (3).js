function mostrar()
{

var clave = prompt("ingrese el número clave.");
var contador=0;
clave=clave.toLocaleLowerCase();
    while(clave!="utn750") 
    {
       contador++;
       if(contador==3) {
        break;
       }
        clave = prompt("Error, reingrese su clave!");
        //clave=clave.toLocaleLowerCase()
    }
    if(clave == "utn750"){
        alert("Bienvenido");
    } else {
        alert("Maximos intentos ingresados");
    }
    
}//FIN DE LA FUNCIÓN
//clave=clave.toLocaleLowerCase() para pasar a minuscula 
