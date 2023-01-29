function Call_Loop() {
    var Digit = "";
    var x = 10;
    while (x > -1) {
        Digit += "<br>" + x;
        x--
    }
    document.getElementById("Call_Loop").innerHTML= Digit;
}

document.write("<br>")
document.write("<br>")

var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var len = txt.length;
document.write(len)

document.write("<br>")

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length;  Y++) {
        Content += Instruments[Y]+ "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}