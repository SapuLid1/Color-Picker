function myColor(){
    var red =parseInt(document.getElementById('red').value);
    var green =parseInt(document.getElementById('green').value);
    var blue =parseInt(document.getElementById('blue').value);
    document.getElementById('rgbCode').innerHTML = "rgb(" + red + " ," + green + " ," + blue + " )";
    var hexRed = red.toString(16);
    var hexGreen = green.toString(16);
    var hexBlue = blue.toString(16); 
    if(red < 17){
        hexRed ="0" + hexRed;
    }
    if(green < 17){
        hexGreen ="0" + hexGreen;
    }
    if(blue < 17){
        hexBlue ="0" + hexBlue;
    }
    document.getElementById('hexCode').innerHTML = "#" + hexRed + + hexGreen + + hexBlue;
    document.body.style.backgroundColor = "rgb(" + red + " ," + green + " ," + blue + " )";
    
}