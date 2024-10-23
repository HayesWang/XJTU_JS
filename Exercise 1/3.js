//Write a program that asks the user for her/his name and prints “Hello <user’s name>”
const readline = require('readline-sync');
let rl = readline.question("What is your name?");
console.log("Hello " + rl);

