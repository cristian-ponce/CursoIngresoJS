function mostrar()
{
//tomo la edad  

var mes = document.getElementById('mes').value;

switch(mes){
    case 'Febrero':
        alert('este mes no tiene mas de 29 días.');
        break;
    default:
        alert('este mes tiene 30 días o mas días.');
        break;
        
}



}//FIN DE LA FUNCIÓN