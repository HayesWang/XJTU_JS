/*
9. Multi Echo
Write a program that asks the user for a number and prints it out. The program then
asks for another number and prints it out. This process continues until the user writes
“end”.
 */
const readline = require('readline-sync');
while (true) {
    let rl = readline.question("Enter a number: ");
    if (rl === "end") {
        break;
    }
    console.log(rl);
}