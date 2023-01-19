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