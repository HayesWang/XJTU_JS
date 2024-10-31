/*
5. Occurrences
an: 1, apple: 2, An: 1, is: 1
1) Write a program that asks the user for a sentence and prints out the number of
occurrences of each word (in any order).
e.g.,: input “An apple is an apple”, prints 2) Do the same but considering case unsensitive words
e.g.,: input “An apple is an apple”, prints an: 2, apple: 2, is: 1
 */
const readline = require('readline-sync');
rl = readline.question('Enter a sentence: ').split(' ');
let dict = {};
for(let i=0; i<rl.length; i++){
    if(rl[i] in dict){
        dict[rl[i]]++;
    } else {
        dict[rl[i]] = 1;
    }
}
console.log(dict);