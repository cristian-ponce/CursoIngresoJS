function mostrar()
{
//tomo la edad  

var edad;

edad=parseInt(document.getElementById('edad').value);

if (edad>17 )
{
    alert('usted es mayor de edad');
}else if (edad >12 && edad< 18)
{
    alert('ustede es adolescente ');
}else
{
    alert('usted es niño');
}



}//FIN DE LA FUNCIÓN