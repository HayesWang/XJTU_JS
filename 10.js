/*
10. Multi Sum
Write a program that asks the user for several numbers, one at a time, until the user
writes "end". The program then prints the sum of the input numbers.
 */
const readline = require('readline-sync');
let sum = 0;
while (true) {
    let rl = readline.question("Enter a number: ");
    if (rl === "end") {
        break;
    }
    sum += Number(rl);
}
console.log("The sum of the numbers is " + sum);