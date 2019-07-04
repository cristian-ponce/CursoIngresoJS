/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    
    
    
    
    //calculo simpre las variables que se necesita
    var sueldo;
    var aumento;
    var nuevosueldo;



// pido la informacion del casillero con la informacion     
 sueldo=parseFloat(document.getElementById("sueldo").value);



 //calculo el porcen. del aumento 
aumento= sueldo * 0.10;



nuevosueldo= sueldo + aumento;


// pido el permiso para usar el casillero de resultado para mostrar el nuevo suledo 
document.getElementById("resultado").value=nuevosueldo;

}
