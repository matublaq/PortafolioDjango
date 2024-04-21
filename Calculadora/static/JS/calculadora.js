var cuerpo = document.getElementById("calculadora");
cuerpo.style.borderRadius = "10px";

/*-----color fondo-----*/
/*var colorCont5 = prompt("¿Que color quiere para el fondo del contenedor 5? (Azul/Verde/Violeta/Rosa)");*/

var colorCont5 = "rgba(90, 90, 90, 0.807)";

colorCont5 = colorCont5.toLowerCase();
if(colorCont5=="azul"){
    colorCont5 = "blue";
}
else if(colorCont5=="verde"){
    colorCont5 = "green";
}
else if(colorCont5=="violeta"){
    colorCont5 = "violet";
}
else if(colorCont5=="rosa"){
    colorCont5 = "pink";
}
else if(colorCont5=="gris"){
    colorCont5 = "rgba(90, 90, 90, 0.807)";
}
else{
    /*alert("El color no esta disponible");*/
}
cuerpo.style.background = colorCont5;
/*----------------*/

/*---------- calculadora ----------*/
function init(){
    //Variables
    var resultado = document.getElementById("resultado");
    var openp = document.getElementById("open(");
    var closep = document.getElementById("close)");
    var del = document.getElementById("del");
    var zero = document.getElementById("zero");
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var four = document.getElementById("four");
    var five = document.getElementById("five");
    var six = document.getElementById("six");
    var seven = document.getElementById("seven");
    var eight = document.getElementById("eight");
    var nine = document.getElementById("nine");
    var div = document.getElementById("div");
    var mult = document.getElementById("mult");
    var less = document.getElementById("less");
    var plus = document.getElementById("plus");
    var reset = document.getElementById("reset");
    var point = document.getElementById("point");
    var equal = document.getElementById("equal");

    //Events
    var numeros = [];
    openp.onclick = function(e){
        numeros.push("(");
        resultado.textContent = numeros.join("");
    }
    closep.onclick = function(e){
        numeros.push(")");
        resultado.textContent = numeros.join("");
    }
    del.onclick = function(e){
        if((numeros.length == 1)||(numeros.length == 0)){
            numeros = [];
            resultado.textContent = 0;
        }
        else{
            numeros.pop();
            resultado.textContent = numeros.join("");
        }
        
    }

    zero.onclick = function(e){
        if(!isNaN(numeros[numeros.length-1])){
            numeros[numeros.length-1] = numeros[numeros.length-1]*10 + 0;
            resultado.textContent = numeros.join("");
        }
        else{
            //numeros.push(0);
            resultado.textContent = numeros.join("");
        }
    }
    one.onclick = function(e){
        if(!isNaN(numeros[numeros.length-1])){
            numeros[numeros.length-1] = numeros[numeros.length-1]*10 + 1;
            resultado.textContent = numeros.join("");
        }
        else{
            numeros.push(1);
            resultado.textContent = numeros.join("");
        }
    }
    two.onclick = function(e){
        if(!isNaN(numeros[numeros.length-1])){
            numeros[numeros.length-1] = numeros[numeros.length-1]*10 + 2;
            resultado.textContent = numeros.join("");
        }
        else{
            numeros.push(2);
            resultado.textContent = numeros.join("");
        }
    }
    three.onclick = function(e){
        if(!isNaN(numeros[numeros.length-1])){
            numeros[numeros.length-1] = numeros[numeros.length-1]*10 + 3;
            resultado.textContent = numeros.join("");
        }
        else{
            numeros.push(3);
            resultado.textContent = numeros.join("");
        }
    }
    four.onclick = function(e){
        if(!isNaN(numeros[numeros.length-1])){
            numeros[numeros.length-1] = numeros[numeros.length-1]*10 + 4;
            resultado.textContent = numeros.join("");
        }
        else{
            numeros.push(4);
            resultado.textContent = numeros.join("");
        }
    }
    five.onclick = function(e){
        if(!isNaN(numeros[numeros.length-1])){
            numeros[numeros.length-1] = numeros[numeros.length-1]*10 + 5;
            resultado.textContent = numeros.join("");
        }
        else{
            numeros.push(5);
            resultado.textContent = numeros.join("");
        }
    }
    six.onclick = function(e){
        if(!isNaN(numeros[numeros.length-1])){
            numeros[numeros.length-1] = numeros[numeros.length-1]*10 + 6;
            resultado.textContent = numeros.join("");
        }
        else{
            numeros.push(6);
            resultado.textContent = numeros.join("");
        }
    }
    seven.onclick = function(e){
        if(!isNaN(numeros[numeros.length-1])){
            numeros[numeros.length-1] = numeros[numeros.length-1]*10 + 7;
            resultado.textContent = numeros.join("");
        }
        else{
            numeros.push(7);
            resultado.textContent = numeros.join("");
        }
    }
    eight.onclick = function(e){
        if(!isNaN(numeros[numeros.length-1])){
            numeros[numeros.length-1] = numeros[numeros.length-1]*10 + 8;
            resultado.textContent = numeros.join("");
        }
        else{
            numeros.push(8);
            resultado.textContent = numeros.join("");
        }
    }
    nine.onclick = function(e){
        if(!isNaN(numeros[numeros.length-1])){
            numeros[numeros.length-1] = numeros[numeros.length-1]*10 + 9;
            resultado.textContent = numeros.join("");
        }
        else{
            numeros.push(9);
            resultado.textContent = numeros.join("");
        }
    }

    div.onclick = function(e){
        numeros.push("/");
        resultado.textContent = numeros.join("");
    }
    mult.onclick = function(e){
        numeros.push("*");
        resultado.textContent = numeros.join("");
    }
    less.onclick = function(e){
        numeros.push("-");
        resultado.textContent = numeros.join("");
    }
    plus.onclick = function(e){
        numeros.push("+");
        resultado.textContent = numeros.join("");
    }
    point.onclick = function(e){
        numeros.push(".");
        resultado.textContent = numeros.join("");
    }
    reset.onclick = function(e){
        numeros = [];
        resultado.textContent = 0;
    }

    equal.onclick = function(e){
        //resultado.textContent = numeros.join(",");
        resultado.textContent = cuenta(numeros).join(",");
    }


    /*---------- Cuenta ----------*/
    function cuenta(numeros){
        
        /*---------- Primero separamos en terminos ----------*/
        let separador = [];
        let terminos = [];
        for(let i=0; i<numeros.length; i++){
            let var1 = numeros[i];
            switch(var1){
                case "+":
                    separador.push(i);
                    separador[i] = "suma";
                    break
                case "-":
                    separador.push(i);
                    separador[i] = "resta";
                    break
                case "(":
                    separador.push(i);
                    separador[i] = "open";
                    break
                case ")":
                    separador.push(i);
                    separador[i] = "close";
                    break
                case ".":
                    separador.push(i);
                    separador[i] = "point";
            }
        }
        /*---------- ----------------------------- ----------*/

        //numeros = ["*", "Aun", "no", "esta", "programado", "*"];
        return separador;
    }
    /*---------- ------ ----------*/
}
/*---------- ----------- ----------*/