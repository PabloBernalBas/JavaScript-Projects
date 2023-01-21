//Global 

var x = "hello";

function global() {
    console.log(x);
}

global(); // hello

// Local variable

var a = "hello";

function local() {
    let b = "World"
    console.log(a + b); //give result
}

local();
console.log(a + b); // error



function Add_var1() {
	var y = "World"; //maybe should use different variable??
  console.log("Hello" + y);
}
function Add_var2() {
    console.log(y + "Hello.")
}

Add_var1();//x it is define (example from Scope but using string) It shouldn't work
Add_var2();



function checkTime() {
    var currentTime = new Date().getHours();
    if (currentTime < 12) {
        console.log("Good morning!");
        document.getElementById("Greeting").innerHTML = "Have a good day.";
    } else if (currentTime < 18) {
        console.log("Good afternoon!");
        document.getElementById("Greeting").innerHTML = "Enjoy your afternoon.";
    } else {
        console.log("Good evening!");
        document.getElementById("Greeting").innerHTML = "How was your day?.";
    }
}
