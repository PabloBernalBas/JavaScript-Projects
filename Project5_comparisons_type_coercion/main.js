document.write(typeof "Word");

document.write("<br>");

document.write(2E310);

function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}

function my_Function1() {
    document.getElementById("Test").innerHTML = isNaN('Is this True');
}

function my_Function2() {
    document.getElementById("Test").innerHTML = isNaN('34');
}

