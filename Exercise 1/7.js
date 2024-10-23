/*
7. Odd or Even
Write a program that asks the user for an integer and prints:
 if is odd, and
 if is even.
Hint: use the integer reminder operator % (e.g., 5 % 2 == 1 , 4 % 2 == 0 ).
 */

const readline = require('readline-sync');
let rl = readline.question("Enter an integer number: ");
if (rl % 2 === 0) {
    console.log(rl + " is even.");
}else {
    console.log(rl + " is odd.");
}