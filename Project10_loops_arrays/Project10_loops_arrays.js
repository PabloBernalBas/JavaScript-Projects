function Call_Loop() {
    var Digit = "";
    var x = 10;
    while (x > -1) {
        Digit += "<br>" + x;
        x--
    }
    document.getElementById("Call_Loop").innerHTML= Digit;
}