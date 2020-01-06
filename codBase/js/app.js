

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
        on.onclick = function(e){
           
           
            display.textContent =  "0";
            

            
        }


    
     






}