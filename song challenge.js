// var count = 100;

// function beer() {
//   while (count >= 1) {
//     console.log(
//       count +
//         "bottles of beer on the wall, " +
//         count +
//         " bottles of beer.\n" +
//         "Take one down and pass it around, "
//     );
//     count--;
//     console.log(count + " " + "bottles of beer on the wall.\n")
//   }

// }
// beer();

var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    }
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.\n");
}



