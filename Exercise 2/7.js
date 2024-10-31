/*
7. Mix Strings
Write a program that asks the user for two strings and prints the array of pairs
composed by one letter of each string in order. If one of the strings is longer than the
other, use symbol “?” for the missing letters of the shorter string.
e.g.,
input “cat”, “dog” prints ['c', 'd'], ['a', 'o'], ['t', 'g']
input “cat”, “ocean” prints ['c', 'o'], ['a', 'c'], ['t', 'e'], ['?', 'a'], ['?', 'n']
input “stars”, “men” prints ['s', 'm'], ['t', 'e'], ['a', 'n'], ['r', '?'], ['s', '?']
*/
const readline = require('readline-sync');
let rl1 = readline.question("Enter the first string: ");
let rl2 = readline.question("Enter the second string: ");
let res = [];
let maxLength = Math.max(rl1.length, rl2.length);
for(let i = 0; i < maxLength; i++) {
    let char1 = i < rl1.length ? rl1[i] : '?';
    let char2 = i < rl2.length ? rl2[i] : '?';
    res.push([char1, char2]);
}
console.log(res);