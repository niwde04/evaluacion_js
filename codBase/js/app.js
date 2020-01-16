
    function calculadora(){

    var a =0;
    var b =0;
    var c =0;
    var flag = 0;
    var operacion;

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
     
                document.getElementById("1").onmousedown = function()  {mouseDown(1)};
                document.getElementById("1").onmouseup = function() {mouseUp(1)};
    
                document.getElementById("2").onmousedown = function()  {mouseDown(2)};
                document.getElementById("2").onmouseup = function() {mouseUp(2)};
    
                document.getElementById("3").onmousedown = function()  {mouseDown(3)};
                document.getElementById("3").onmouseup = function() {mouseUp(3)};
    
                document.getElementById("4").onmousedown = function()  {mouseDown(4)};
                document.getElementById("4").onmouseup = function() {mouseUp(4)};
    
                document.getElementById("5").onmousedown = function()  {mouseDown(5)};
                document.getElementById("5").onmouseup = function() {mouseUp(5)};
    
                document.getElementById("6").onmousedown = function()  {mouseDown(6)};
                document.getElementById("6").onmouseup = function() {mouseUp(6)};
    
                document.getElementById("7").onmousedown = function()  {mouseDown(7)};
                document.getElementById("7").onmouseup = function() {mouseUp(7)};
    
                document.getElementById("8").onmousedown = function()  {mouseDown(8)};
                document.getElementById("8").onmouseup = function() {mouseUp(8)};
    
                document.getElementById("9").onmousedown = function()  {mouseDown(9)};
                document.getElementById("9").onmouseup = function() {mouseUp(9)};
    
                document.getElementById("0").onmousedown = function()  {mouseDown(0)};
                document.getElementById("0").onmouseup = function() {mouseUp(0)};
    
                document.getElementById("on").onmousedown = function()  {mouseDown("on")};
                document.getElementById("on").onmouseup = function() {mouseUp("on")};
    
                document.getElementById("sign").onmousedown = function()  {mouseDown("sign")};
                document.getElementById("sign").onmouseup = function() {mouseUp("sign")};
    
                document.getElementById("raiz").onmousedown = function()  {mouseDown("raiz")};
                document.getElementById("raiz").onmouseup = function() {mouseUp("raiz")};
    
                document.getElementById("dividido").onmousedown = function()  {mouseDown("dividido")};
                document.getElementById("dividido").onmouseup = function() {mouseUp("dividido")};
    
                document.getElementById("por").onmousedown = function()  {mouseDown("por")};
                document.getElementById("por").onmouseup = function() {mouseUp("por")};
    
                document.getElementById("menos").onmousedown = function()  {mouseDown("menos")};
                document.getElementById("menos").onmouseup = function() {mouseUp("menos")};
    
                document.getElementById("igual").onmousedown = function()  {mouseDown("igual")};
                document.getElementById("igual").onmouseup = function() {mouseUp("igual")};
    
                document.getElementById("mas").onmousedown = function()  {mouseDown("mas")};
                document.getElementById("mas").onmouseup = function() {mouseUp("mas")};
    
                document.getElementById("punto").onmousedown = function()  {mouseDown("punto")};
                document.getElementById("punto").onmouseup = function() {mouseUp("punto")};
    
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
                    var n = display.textContent.indexOf(".")
    
                    if (n== -1){
                        
                        if  (display.textContent.length <8 ) {
                        
                            display.textContent =  "0.";
                                
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
            
            // Cambiar tamaño de botones
            
            function mouseDown(a) {
                document.getElementById(a).style.transform = "scale(0.90)";
            }
            
            function mouseUp(a) {
                document.getElementById(a).style.transform = "scale(1)";
            }
            
            
            
            
        
        
    }
    
    