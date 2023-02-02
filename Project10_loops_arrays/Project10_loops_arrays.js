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

document.write("<br>")

function Array_Function () {
    var Season_Pictures  = [];
    Season_Pictures[0] = "spring";
    Season_Pictures[1] = "summer";
    Season_Pictures[2] = "autumn";
    Season_Pictures[3] = "winter";
    document.getElementById("Array").innerHTML = "In this picture, the season is " + Season_Pictures[1] + ".";
}

document.write("<br>")

function constant_function() {
    const Musical_Instrument = {type: "violin", brand:"Stradivarius", color:"blue"};
    Musical_Instrument.color = "Oak";
    Musical_Instrument.price = "£15000";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type +  " was " + Musical_Instrument.price;
}

document.write("<br>")

var my_name = "Mr Anderson";
document.write(my_name)
	{
  let my_name = ", AKA 'Neo'.";
	document.write(my_name)
  }

