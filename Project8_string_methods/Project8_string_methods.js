function full_Sentence() {
    var part_1 = "I have "
    var part_2 = "made this "
    var part_3 = "function "
    var part_4 = "to get all "
    var part_5 = "sentence together."
    var whole_sentence  = part_1.concat(part_2, part_3, part_4, part_5);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "I have made this function to get all sentence together.";
    var Section = Sentence.slice(17,25);
    document.getElementById("Slice").innerHTML = Section;
}

let Sentence = 