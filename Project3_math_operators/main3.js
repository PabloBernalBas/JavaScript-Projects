function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = " " + addition;
}

function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("Math").innerHTML = " " + subtraction;
}

function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Math").innerHTML = " " + simple_Math;
}

function division() {
    var simple_Math = 48 / 6;
    document.getElementById("Math").innerHTML = " " + simple_Math;
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = " " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = " " + simple_Math;
}

function increment(){
    var X = 5;
    X++;
    document.write(X);
}

function decrement(){
    var Y = 5;
    Y--;
    document.write(Y);
}




window.alert(Math.random().toFixed(4) * 100)
