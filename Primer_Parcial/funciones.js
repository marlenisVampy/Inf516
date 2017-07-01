function convertImprFraction()
	{
		
		enter1 = document.getElementById("entero1_id").value;
		nume1 = document.getElementById("numerador1_id").value;
		deno1 = document.getElementById("denominador1_id").value;
		document.getElementById("conNumerador1_id").innerHTML = (enter1 * deno1 + parseInt(nume1));
		document.getElementById("conDenominador1_id").innerHTML = deno1;
		 
	    enter2 = document.getElementById("entero2_id").value;
		nume2 = document.getElementById("numerador2_id").value;
		deno2 = document.getElementById("denominador2_id").value;
		document.getElementById("conNumerador2_id").innerHTML = (enter2 * deno2 + parseInt(nume2));
		document.getElementById("conDenominador2_id").innerHTML = deno2;
		

	}

	function cleanFields(){
	var elements = document.getElementsByTagName("input");
	for (var ii=0; ii < elements.length; ii++) {
	if (elements[ii].type == "text") {
		elements[ii].value = "";
		}
		}
		
		document.getElementById("conNumerador1_id").innerHTML="";
		document.getElementById("conDenominador1_id").innerHTML="";
		document.getElementById("conNumerador2_id").innerHTML="";
		document.getElementById("conDenominador2_id").innerHTML="";
	}

	function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);

function verifyCedula(argument)
   {
      var numCedula = formulario.numCedula.value;
     var temp ;
   var digit = 0;
   var totalSumElement = 0;
   //declarando el vector e inicializandolo.
      var vctInit =[1,2,1,2,1,2,1,2,1,2,1];
      var modulo = 0;
      var multElement = 0;

      var Vectcedula = numCedula.split("");
      num = Vectcedula.length;

      if(numCedula.length == 11)
      {
        //Obtenemos el dígito digitoVerificador
    var digitoVerificador = parseInt(numCedula[numCedula.length - 1]);

        
        for(var i=0;i<Vectcedula.length -1;i++)
         {
		 /*Multiplique por los factores 1,2,1,2,1,2,1,2,1,2 respectivamente cada posición 
		 de los primeros diez números de la cedula, empezando desde el primer dígito
		 del extremo izquierdo.*/
            multElement =  parseInt(vctInit[i] * Vectcedula[i]);
            
			/*Acumule los dígitos de cada producto. Si algún digito dio un valor por 
			encima de 9, entonces reste 9 a dicho valor. */
			
             if(multElement > 9)    
             {
                multElement = multElement - 9;    
             }
           /*Sume los productos acumulados.*/
           totalSumElement = totalSumElement + multElement;

         }
         
        }
         temp = totalSumElement;

          // alert(totalSumElement);
           while((totalSumElement % 10)!= 0)
          {
             //alert("Im in");
             totalSumElement++;
              modulo = totalSumElement % 10;
              //alert(modulo);
          }

          digit = totalSumElement - temp;
          //alert(digit);

         if(digit == digitoVerificador)
         {
         alert("La cedula es valida ");
          return true;
          }
            else
          {
          alert("La cedula no valida ");
            return false;
          }
          
        
     }

     function Contadordor() {
  //palabras
  textoArea = document.getElementById("texto").value;
  numeroCaracteres = textoArea.length;
  inicioBlanco = /^ /
  finBlanco = / $/
  variosBlancos = /[ ]+/g 
  textoArea = textoArea.replace(inicioBlanco,"");
  textoArea = textoArea.replace(finBlanco,"");
  textoArea = textoArea.replace(variosBlancos," ");
 
  textoAreaDividido = textoArea.split(" ");
  numeroPalabras = textoAreaDividido.length;
  
  //vocales
  textoArea = document.getElementById("texto").value;
  count= re => (textoArea.match(re) || []).length;
  vocales= count(/[aeiou]/ig),
  NoVocales = count(/[bcdfghjklmnpqrstvxzwy" "()]/ig)
     
  alert ("Cantidad de Caracteres: "+numeroCaracteres+"\n" + "Cantidad de Palabras:  "+ numeroPalabras+"\n" + "Cantidad de Vocales: "+vocales+"\n"+ "Cantidad de no Vocales: "+NoVocales );
 }
 
