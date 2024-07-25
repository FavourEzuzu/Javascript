// //  Math.random() for randomization

// var n = Math.random();
// n = Math.floor(n*18) + 1;
// console.log(n);

//  create a love app




var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1; //add 1 to make it a range of 1 to 100

if (loveScore >= 70) {
    console.log( "Your love score is "+ loveScore+" Your love is like kanye love for kanye");
}else {
    console.log("Your love score is "+ loveScore +"%");
}