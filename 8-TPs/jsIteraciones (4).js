function mostrar()
{
    var num;
    num=parseInt(prompt('ingrese un numero entre 0 y 9 '));

    while(num <0 || num > 9) {
    num=parseInt(promt("numero incorrecto .\nvuelva a ingresar un numero"));    
    
    }
    document.getElementById("Numero").value = num;

}//FIN DE LA FUNCIÓN