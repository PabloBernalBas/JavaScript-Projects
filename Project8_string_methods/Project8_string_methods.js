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

document.write("<br>")

var Phrase = "I have made this function to get all sentence together."
document.write(Phrase.toUpperCase());

document.write("<br>")

var text = "I have made this function to get all sentence together."
var position = text.search("sentence");
document.getElementById("search").innerHTML = position;

document.write("<br>")

function string_Method() {
    var x = 214;
    document.getElementById("Number_to_String").innerHTML = x.toString();
}

document.write("<br>")

function precision_Method() {
    var x = 2145.21655886321189;
    document.getElementById("Precision").innerHTML = x.toPrecision(6);
}