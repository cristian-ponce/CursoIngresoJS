/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     var cantidad;
     var preciofinal;
     var descuento;
     var marca;
     var impuesto;
     var precio = 35 ;
     var preciocondescuento;
     var flag=0 


     cantidad=parseInt(document.getElementById('Cantidad').value);
     marca=document.getElementById('Marca').value;
     
     switch(cantidad){
          
     case 1:
     case 2:
          descuento =0;
     break;
     
     case 3:
          if (marca == 'Argentinaluz' ){

               descuento= .15;
          }
          else if (marca == 'FelipeLamparas')
          {
                
               descuento= .10;

          }
          else
          {
               descuento = .5 ;
     
     
          }
     break;

     case 4:

          if (marca == 'ArgentinaLuz'|| marca == 'FlipeLamparas')
          {
               descuento= .25;
          }
          else
          {

               descuento = .20;
     
          }
     break;

     case 5:
          if(marca == 'ArgentinaLuz') 
          {

               descuento= .40;
          }
          else 
          {
               descuento =.30;
     
          }
     break;

     default:
               
          descuento = .50;
     
     break;
     
     
     } 
     descuento = precio * descuento;
     preciocondescuento= precio-descuento;
     preciofinal = preciocondescuento * cantidad;
     
     
     
     if (preciofinal > 120)
     {
          impuesto= precio*.1;

     precio += impuesto
     flag=1
     }

     
     document.getElementById('precioDescuento').value= preciocondescuento;
alert( 'pagara : $'+ preciofinal);
if (flag == 1);
{
     alert ('usted pago : $ ' + impuesto+'de ingresos brutos');

}







}
