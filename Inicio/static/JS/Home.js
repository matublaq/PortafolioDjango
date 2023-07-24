function imgDimension() {
    var imagen = document.getElementById('imgMe');
    var imgWidth = imagen.width;
    var imgHeight = imagen.height;
    
    console.log('Width ' + imgWidth + 'px');
    console.log('Height ' + imgHeight + 'px');
    document.write(imgWidth + "x" + imgHeight);
}