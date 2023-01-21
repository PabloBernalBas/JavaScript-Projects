function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age > 17) ? "You can Vote":"You can't Vote"; 
    document.getElementById("Vote").innerHTML = Can_vote + ".";
}