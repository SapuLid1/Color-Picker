function myColor() {
    const red = parseInt(document.getElementById('red').value);
    const green = parseInt(document.getElementById('green').value);
    const blue = parseInt(document.getElementById('blue').value);
    document.getElementById('rgbCode').innerHTML = "rgb(" + red + " ," + green + " ," + blue + " )";
    const hexRed = red.toString(16);
    const hexGreen = green.toString(16);
    const hexBlue = blue.toString(16);
    if (red < 10) {
        hexRed = "0" + hexRed;
    }
    if (green < 10) {
        hexGreen = "0" + hexGreen;
    }
    if (blue < 10) {
        hexBlue = "0" + hexBlue;
    }
    document.getElementById('hexCode').innerHTML = "#" + hexRed + hexGreen + hexBlue;
    document.body.style.backgroundColor = "rgb(" + red + " ," + green + " ," + blue + " )";

}