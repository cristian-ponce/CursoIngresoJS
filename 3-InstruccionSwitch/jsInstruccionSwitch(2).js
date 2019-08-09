function mostrar()
{
//tomo la edad  
var mes;

mes = document.getElementById('mes').value;

switch(mes){
    case 'Julio':
    case 'Agosto':
         alert('abrigate hace frio');
    break;
    case'Enero':
    case'Febrero':
    case 'Marzo':
    case' Abril':
    case'Mayo':
    case'Junio':
         alert('falta para el invierno');
    break;

    default:
        alert('ya pasamos el frio, ahora viene el calor');
        break;


}





}//FIN DE LA FUNCIÓN