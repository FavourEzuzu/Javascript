// FizzBuzz using For Loop

var output = [];

function fizzBuzz() {
  //using loops to run the fizzbuzz program a 100x
  for (var count = 1; count < 101; count++) {
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
  }
  console.log(output);
}
fizzBuzz();
