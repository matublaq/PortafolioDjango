function timer(){
    var tiempo = new Date();
    var hr = tiempo.getHours();
    var min = tiempo.getMinutes();
    var sec = tiempo.getSeconds();
        
    var time = setTimeout(function(){ timer()}, 1000);
}