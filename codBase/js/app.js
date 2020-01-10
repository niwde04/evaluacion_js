var a =0;
var b =0;
var c =0;
var flag = 0;
var operacion;


function init(){

    var  cero =document.getElementById('0');
    var  uno =document.getElementById('1');
    var  dos =document.getElementById('2');
    var  tres =document.getElementById('3');
    var  cuatro =document.getElementById('4');
    var  cinco =document.getElementById('5');
    var  seis =document.getElementById('6');
    var  siete =document.getElementById('7');
    var  ocho  =document.getElementById('8');
    var  nueve =document.getElementById('9');
    var  resta =document.getElementById('menos');
    var  multiplicacion =document.getElementById('por');
    var  division =document.getElementById('dividido');
    var  igual =document.getElementById('igual');
    var  punto =document.getElementById('punto');
    var  on =document.getElementById('on');
    var  signo =document.getElementById('sign');
    var  suma =document.getElementById('mas');
    var  root =document.getElementById('raiz');
    //eventos click

        uno.onclick = function(e){
           
            if (display.textContent=='0'){
                display.textContent = '';
            }
            if  (display.textContent.length <8){
            display.textContent = display.textContent + "1";
            } 
        }

        dos.onclick = function(e){
           
            if (display.textContent=='0'){
                display.textContent = '';
            }
            if  (display.textContent.length <8){
            display.textContent = display.textContent + "2";
            }

            
        }
        tres.onclick = function(e){
           
            if (display.textContent=='0'){
                display.textContent = '';
            }
            if  (display.textContent.length <8){
            display.textContent = display.textContent + "3";
            }

            
        }
        cuatro.onclick = function(e){
           
            if (display.textContent=='0'){
                display.textContent = '';
            }
            if  (display.textContent.length <8){
            display.textContent = display.textContent + "4";
            }

            
        }
        cinco.onclick = function(e){
           
            if (display.textContent=='0'){
                display.textContent = '';
            }
            if  (display.textContent.length <8){
            display.textContent = display.textContent + "5";
            }

            
        }
        seis.onclick = function(e){
           
            if (display.textContent=='0'){
                display.textContent = '';
            }
            if  (display.textContent.length <8){
            display.textContent = display.textContent + "6";
            }

            
        }
        siete.onclick = function(e){
           
            if (display.textContent=='0'){
                display.textContent = '';
            }
            if  (display.textContent.length <8){
            display.textContent = display.textContent + "7";
            }

            
        }
        ocho.onclick = function(e){
           
            if (display.textContent=='0'){
                display.textContent = '';
            }
            if  (display.textContent.length <8){
            display.textContent = display.textContent + "8";
            }

            
        }
        nueve.onclick = function(e){
           
            if (display.textContent=='0'){
                display.textContent = '';
            }
            if  (display.textContent.length <8){
            display.textContent = display.textContent + "9";
            }

            
        }
        cero.onclick = function(e){
           
            if (display.textContent=='0'){
                display.textContent = '';
            }
            if  (display.textContent.length <8){
            display.textContent = display.textContent + "0";
            }

            
        }

        igual.onclick = function(e){
            b = display.textContent;
            
            resolver();

            if (flag == 0){
                    flag=1;
                    c=b;
            }

            
        }
      

        punto.onclick = function(e){

            
                    console.log(display.textContent.indexOf("."));
                    
                    var n = display.textContent.indexOf(".")

                if (n== -1){
                    
                    if  (display.textContent.length <8 ) {
                    
                        display.textContent = display.textContent + ".";
                            
                }
            }
        }



        on.onclick = function(e){
           
         
            resetear();
            display.textContent =   0;
          
        }

        sign.onclick = function(e){
           
            display.textContent =   display.textContent * -1;
          
        }

        suma.onclick = function(e){
            a = display.textContent;
            flag=0;
            operacion = "+";
            limpiar();
        }

        resta.onclick = function(e){
            a = display.textContent;
            flag=0;
            operacion = "-";
            limpiar();
        }

        multiplicacion.onclick = function(e){
            a = display.textContent;
            flag=0;
            operacion = "*";
            limpiar();
        }

        division.onclick = function(e){
            a = display.textContent;
            flag=0;
            operacion = "/";
            limpiar();
        }
      
        root.onclick = function(e){
                       
          a=  display.textContent = Math.sqrt( parseFloat(display.textContent));
            display.textContent= a.toString().substring(0,8);
            
        }

    

}


function resolver(){
    var res = 0;
    switch(operacion){
      case "+":
          if (flag==1){
            res = parseFloat(c) + parseFloat(b);
            break;}
            
            else
            {
            res = parseFloat(a) + parseFloat(b);
            break;
        }

          
       
      case "-":
        if (flag==1){
            res = parseFloat(b) - parseFloat(c);
            break;}
            
            else
            {
            res = parseFloat(a) - parseFloat(b);
            break;
        }
      case "*":
        if (flag==1){
            res = parseFloat(c) * parseFloat(b);
            break;}
            
            else
            {
            res = parseFloat(a) * parseFloat(b);
            break;
        }
      case "/":
        if (flag==1){
            res = parseFloat(b) / parseFloat(c);
            break;}
            
            else
            {
            res = parseFloat(a) / parseFloat(b);
            break;
        }
   }
    
    display.textContent = res.toString().substring(0,8);

}


function limpiar()
{
    display.textContent = "";
}

function resetear(){
  
  a = 0;
  b = 0;
  operacion = "";
  display.textContent = "";
  flag=0

}


