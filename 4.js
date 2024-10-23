//Write a program that asks the user for an integer number and prints its successor
const readline = require('readline-sync');
let rl = readline.question("Enter an integer number: ");
console.log("The successor of " + rl + " is " + (Number(rl) + 1));