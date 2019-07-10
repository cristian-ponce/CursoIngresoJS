function mostrar()
{
//tomo la edad  
var edad;
var estado;

edad=document.getElementById("edad").value;

estado=documnet.getElementById("estadoCivil").value;
	

if(!(edad >18    &&     estado == casado && estado == divorciado))
{

    alert("es muy pequeño para no ser soltero");
}
}//FIN DE LA FUNCIÓN