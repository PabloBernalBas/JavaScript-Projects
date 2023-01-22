//Global variable

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
  console.log("Hello " + y);
}
function Add_var2() {
    console.log(y + "Hello.")
}

Add_var1();//x it is define (example from Scope but using string) It shouldn't work
Add_var2();

//ID Attribute and onclick

function get_Date() {
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

//IF and Else 

function checkTime() {
    var currentTime = new Date().getHours();
    var greeting;
    var timeOfDay;
    if (currentTime < 12) {
        greeting = "Good morning";
        timeOfDay = "morning";
    } else if (currentTime < 18) {
        greeting = "Good afternoon";
        timeOfDay = "afternoon";
    } else {
        greeting = "Good evening";
        timeOfDay = "evening";
    }
    var image;
    if(timeOfDay=="morning"){
        image = "./photo-1.jpg"
    } else if(timeOfDay=="afternoon"){
        image = "./photo-3.jpg"
    } else {
        image = "./photo-2.jpg"
    }
    document.getElementById("greeting").innerHTML = greeting;
    document.getElementById("image").src = image;
}