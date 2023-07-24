/*
   JQuery es una libreria de JavaScript que nos ayuda en la creación de tareas 
frecuentes a la hora de programar en JS como por ejemplo: 
    _Seleccionar elementos
    _Agregar nuevo contenido
    _Ocultar y mostrar elementos de una web
    _Validación de formularios
    _Efectos visuales vistosos

   2 formas de usar JQuery:
    _Enlazar con un servidor que tenga JQuery
        _.Microsoft
            .<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.11.1.js"></script>
        
        _.JQuery
            .<script src="http://code.jquery.com/jquery-1-11-1-js"></script>

        _.Google
            .<script src="http://ajax.googleapis.com/ajax/libs/jquery/11.1.1/jquery.min.js"></script>

    _Descargar tu propia copia de JQuery
*/
/*
var mensaje = document.getElementById("mensaje_buenas").value;
var mensaje = $("#mensaje_buenas").value:;
    //Estas dos directivas son igual lo unico que la primera es JS y la segunda es con la libreria jQuery
*/

function validacion(){
    var n_usuario = document.getElementById("usuario").value;
    if(n_usuario==""){
        $("#contenedor7 #usuario").after("Rellenar el campo");
    }
}

//var z = document.getElementById("cerrar");
//z.addEventListener("click", cerrar_banner, false); //Si se hace un "click" se ejecuta la funcion "cerrar_publicidad"
function cerrar_banner(){
    $("#banner").remove();
}