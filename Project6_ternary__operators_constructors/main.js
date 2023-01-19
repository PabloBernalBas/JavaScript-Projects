function Age_Function() {
    var Vote, Can_vote;
    Vote = document.getElementById("Vote").value;
    Can_vote = (Vote < 18) ? "You are not old enough":"You are old enough"
    document.getElementById("Age").innerHTML=Can_vote + ".";
}


