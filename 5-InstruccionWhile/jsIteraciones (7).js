function mostrar() // wahit ( do whait)
{
    var i=0;
    var acumulador =0;
    var respuesta='s';
    var num;
    
    
do {

num=parseInt(prompt('ingrese un numero '));


while(isNaN (num))
{
     alert('usted no ingreso un numero');
     num=parseInt ( prompt('ingrese un numero'));

}
respuesta= prompt('¿quiere ingresas otro numero?').toLowerCase();

acumulador += num;
i++
}
while(respuesta =='s');





document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value= acumulador/i;











}//FIN DE LA FUNCIÓN