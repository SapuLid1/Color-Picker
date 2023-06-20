function myColor(){
    var red =document.getElementById('red').value;
    var green =document.getElementById('green').value;
    var blue =document.getElementById('blue').value;
    document.getElementById('rgbCode').innerHTML = "rgb(" +red+ " ," +green+ " ," +blue+ " )";
   
    document.getElementById('hexCode').innerHTML = "#" +hexRed+ +hexGreen+ +hexBlue;
    document.body.style.backgroundColor = "rgb(" +red+ " ," +green+ " ," +blue+ " )";
    
}