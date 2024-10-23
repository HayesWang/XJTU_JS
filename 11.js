/*
11. Middle Word
Create a program that asks the user for a sentence (i.e., space-separated words) and
prints the word in the middle.
e.g.,
input “What we think we become”, prints “think”
input “His name is Adam” prints “name”
Hint: if s is a string, you can use s.split(" ") to split it into an array of words.
 */

const readline = require('readline-sync');
let rl = readline.question("Enter a sentence: ");
let len = rl.split(" ").length;
//console.log(len);
let middle = Math.floor(len / 2 + len % 2);
//console.log(middle);
console.log(rl.split(" ")[middle-1]);