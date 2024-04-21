function dia_de_hoy(){
    var time = new Date();

    document.write(time.toDateString());
}

/*La sentencia que ejecuta la funcion se escribe en la etiqueta del HTML*/
/*Eventos mas importantes en Java Script:

    _onblur      = Deseleccionar elemento                                  --> <button>, <input>, <label>, <select>, <textarea>, <body>
    _onchange    = Deseleccionar un elemento que se ha modificado          --> <input>, <select>, <textarea>
    _onclick     = pinchar y soltar el raton                               --> Todos los elementos
    _ondblclick  = Pinchar dos veces seguidas con el raton                 --> Todos los elementos
    _onfocus     = Seleccionar un elemento                                 --> <button>, <input>, <label>, <select>, <textarea>, <body>
    _onkeydown   = Pulsar una tecla sin soltar                             --> Elementos de formulario y <body>
    _onkeypress  = Pulsar una tecla                                        --> Elementos de formulario y <body>
    _onkeyup     = Soltar una tecla pulsada                                --> Elementos de formulario y <body>

    _onload      = La pagina se ha cargado completamente                   --> <body>
    _onmousedown = Pulsa (sin soltar) un boton del raton                   --> Todos los elementos
    _onmouseup   = Soltar el boton que estaba pulsando el raton            --> Todos los elementos
    _onmousemove = mover el raton                                          --> Todos los elementos
    _onmouseout  = El raton "sale" del elemento (pasa por encima de otro elemento)  --> Todos los elementos
    _onmouseover = El raton "entra" en el elemento (pasa por encima del elemento)   --> Todos los elementos
    _onreset     = Inicializar el formulario (borrar todos los datos)      --> <form>
    _onresize    = Se ha modificado el tamaño de la ventana del navegador  --> <body>
*/





/*En la etiqueta del HTML esta escrita la sentencia que  llama a esta funcion*/
function aviso(){
    alert("Esta foto es un caballo")
}
/*function cambiar_foto(){
    $("#caballo1").replaceWith("<div id='caballoo1'><p>Foto cambiada</p></div>");
}*/



/*
var caballos_img = document.querySelectorAll("#imagenes_caballos img"); //Cada vez que seleccionamos un elemtto de ".imagenes_caballos" se agrega a la lista de "caballos_img"
for(let i=0; i<caballos_img.length; i++){
    caballos_img[i].addEventListener("click", cambiarFoto, false);
}
*/ //Esta parte esta documentada ya que la escribi en el HTML parte HEAD

function cambiarFoto(num){
    if(num.target==caballo1){//el target te devuelve la posicion del elemento en el array
        $("#caballo1").replaceWith("<div id='caballo1' class='caballoo1'><p>Foto cambiada</p></div>");
    }
    if(num.target==caballo2){
        $("#caballo2").replaceWith("<div id='caballo2' class='caballoo2'><p>Foto cambiada</p></div>");
    }
    if(num.target==caballo3){
        $("#caballo3").replaceWith("<div id='caballo3' class='caballoo3'><p>Foto cambiada</p></div>");
    }
    if(num.target==caballo4){
        $("#caballo4").replaceWith("<div id='caballo4' class='caballoo4'><p>Foto cambiada</p></div>");
    }
    if(num.target==caballo5){
        $("#caballo5").replaceWith("<div id='caballo5' class='caballoo5'><p>Foto cambiada</p></div>");
    }
}
