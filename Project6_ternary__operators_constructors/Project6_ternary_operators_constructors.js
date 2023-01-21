var up = document.getElementById('UP');
var down = document.getElementById('DOWN'); 
    up.innerHTML = "Click on the button, to call nested function.";    
        function fun1(a) {
        fun = function fun2(b) {
            return a + b;
        }
        return fun;
        }
    function Nested_Function() {
            down.innerHTML = fun1("This is ")("the result.");
        }

document.write("<br>")

function Worker (Name, Age, Sex, Position) {
    this.Worker_Name = Name;
    this.Worker_Age = Age;
    this.Worker_Sex = Sex;
    this.Worker_Position = Position
    }
    var worker1 = new Worker ("Juan", 23, "Male", "HR");
    var worker2 = new Worker ("Sara", 32, "Female", "Admin");
    var worker3 = new Worker ("Luis", 27, "Male", "Finance");
function myFunction() {
    document.getElementById("New_and_This").innerHTML = "This is " + worker1.Worker_Name + ", " + worker1.Worker_Age + " years old," + " this employee works in " + worker1.Worker_Position + ".";
}    

document.write("<br>")

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age > 17) ? "You can Vote":"You can't Vote"; 
    document.getElementById("Vote").innerHTML = Can_vote + ".";
}