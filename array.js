// var guestList = ["Angela", "Jack", "Paz", "James", "Lara", "Jason"];
// console.log(guestList[0]);

// var guestName = prompt("What is your name?");
// guestList.includes(guestName);

//  FizzBuzz using while loop

var output = [];
var count = 1;

function fizzBuzz() {
  //using loops to run the fizzbuzz program a 100x
  while (count <= 100) {
    //  lines to determine if the number in the array is divisible by 3 0r 5 or both
    if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } else {
      output.push(count);
    }
    //  line to add 1 to the count variable when fizzBuzz is run
    count++;
  }
  console.log(output);
}
fizzBuzz();