//  create a function below this line

function bmiCalc(weight, height) {
    console.log("Your weight is " + weight + " kg");
    console.log("Your height is " + height + " m");
    var BMI = (weight)/(height*height);
    return BMI;
}

var bmi = bmiCalc(65, 1.8);
console.log(bmi);


/* if my weight is 65kg and my height is 1.8m, I should be able to call
function like  this:
    var bmi = bmiCalc(65, 1.8);

    bmi should equal around 20 in this case.

*/