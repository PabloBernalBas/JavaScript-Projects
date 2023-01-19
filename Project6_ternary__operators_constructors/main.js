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