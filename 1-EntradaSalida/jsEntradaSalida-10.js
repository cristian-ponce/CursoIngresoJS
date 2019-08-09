/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

    var precio ;
    var Descuento;
    var preciodesc;

    precio=parseInt(document.getElementById('importe').value);

    descuento=precio *.25;

    preciodesc= precio - descuento;

document.getElementById('resultado').value=preciodesc;



}
