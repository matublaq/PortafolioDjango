var PersonasID = [];
/*
PersonasID.push(prompt("Ingrese un DNI: "));
PersonasID.push(prompt("Ingrese un DNI: "));
*/
document.write(PersonasID.join(" - "), "<br>", "Hay ", PersonasID.length, " personas. <br>");
PersonasID.pop();
document.write("(Borramos 1) <br> Ahora hay ", PersonasID.length, " personas. <br>", PersonasID);
