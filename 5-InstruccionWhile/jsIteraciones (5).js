function mostrar()
{
var sexo ; 

sexo=prompt(" ingrese f o m");



while( sexo != 'f' && sexo != 'm' && sexo != 'M' && sexo !='F' ) {
     
    alert('el sexo indicado es incorrecto');
    sexo =prompt('ingrese f o m ');




}
document.getElementById("Sexo").value= sexo ;


}//FIN DE LA FUNCIÓN