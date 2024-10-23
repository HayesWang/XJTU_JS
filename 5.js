//Write a program that asks the users two rational numbers and prints their sum.
const readline = require('readline-sync');
let rl1 = readline.question("Enter a rational number: ");
let rl2 = readline.question("Enter another rational number: ");
console.log("The sum of " + rl1 + " and " + rl2 + " is " + (Number(rl1) + Number(rl2)));