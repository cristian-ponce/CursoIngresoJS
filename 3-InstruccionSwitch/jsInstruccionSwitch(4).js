function mostrar()
{
//tomo la edad  

var mes= document.getElementById('mes').value;

switch(mes){
    case 'Febre':
        alert('tiene 28 días.');
        break;
    case 'Abril':
    case 'Junio':
    case 'Septiembre':
    case'Noviembre':
        alert('tiene 30 días');
    break;
    default:
        alert('tiene 31 dias');
    break;
    }


}//FIN DE LA FUNCIÓN