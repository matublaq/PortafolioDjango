/*alert("Hola mundo, te saludo desde el archivo externo");*/

document.write("Hola, todo bien?<br>");


var nombre = "Roberto";
var num1 = 12;
var num2 = 2.3;
document.write(nombre, " ", num1 + num2, "<br>");

var nombre = "Matias", apellido = "Blaquier";
console.log(nombre, " ", apellido);

var meses = ["Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre", "Enero", "Febrero", "marzo", "Abril", "Mayo", "Junio"];
document.write(meses.join(" - "), "<br>");

var meses = new Array("Enero", "Febrebo", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
document.write(meses.join(" _ "), "<br>");

document.write("<br>", "<p>El primer mes es <strong>", meses[0], "</strong></p>");

/*
alert(meses.length); //Cantidad de elementos dentro del array
*/