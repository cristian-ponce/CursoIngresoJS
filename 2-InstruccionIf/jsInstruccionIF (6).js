function mostrar()
{
//tomo la edad  
var edad;


edad=parseInt(document.getElementById("edad").value);


if( edad >= 18 )
{
    alert("es mayor de edad");

}





else if  (edad <= 13)
{
    alert("es un niño ");

}




else
{


alert("es adolescente");
}
}//FIN DE LA FUNCIÓN