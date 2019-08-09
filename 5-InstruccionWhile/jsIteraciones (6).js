function mostrar()
{
var i=0;
var suma =0;
var promedio ;
var num;




while (i < 5 )
{
  num=parseInt(prompt('ingrese numero :'));
  suma+=num;
  promedio= suma / 5;


  i ++
	
}

document.getElementById('suma').value= suma
document.getElementById('promedio').value= promedio
}//FIN DE LA FUNCIÓN