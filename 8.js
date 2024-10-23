/*
8. Pow
Write a program that asks the users two numbers and and prints without using
operator ** or any built-in functions.
 */

const readline = require('readline-sync');
let rl1 = readline.question("Enter a number: ");
let rl2 = readline.question("Enter another number: ");
rl1=Number(rl1);
rl2=Number(rl2);
result = 1;
for (let i = 0; i < rl2; i++) {
    //console.log(i);
    result *= rl1;
    //console.log(result);
}
console.log(result);