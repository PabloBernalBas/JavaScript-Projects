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
