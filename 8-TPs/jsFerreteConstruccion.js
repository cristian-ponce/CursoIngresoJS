/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var ancho;
var largo;
var resultado;
var alambre;
ancho= parseInt(document.getElementById("Ancho").value);
largo= parseInt(document.getElementById("Largo").value);
resultado= (largo + ancho) *2;
alambre = resultado * 3
alert(" cantidad de alambre es  " + alambre  );
}
function Circulo () 
{
var radio; 
var resultad;
var perimetro;
var alambre;
perimetro =2*Math.PI*radio;
	alert('el total de almbre es :' + alambre);
}
function Materiales () 
{
var ancho;
var largo;
var superficie; 
var cal;
var cemento;

ancho= parseInt(document.getElementById("Ancho").value);
largo= parseInt(document.getElementById("Largo").value);
 
superficie= ancho *largo;

cal= superficie* 3;
cemento =superficie *2;

alert(" la cantida de cemento es "+ cemento + "\n cantidad de cal es" + cal );

	
}