/*
6. Leap year
Write a program that asks the user for a year, and prints whether it is a leap year.
A year is a leap (or bissextile) year if one of the following conditions holds:
the year is divisible by 400,
the year is divisible by 4 and not by 100
Examples: 2000 and 2020 were leap years, but 1900 was not
 */
const readline = require('readline-sync');
let rl = readline.question("Enter a year: ");
if (rl % 400 === 0 || (rl % 4 === 0 && rl % 100 !== 0)) {
    console.log(rl + " is a leap year.");
}
else {
    console.log(rl + " is not a leap year.");
}