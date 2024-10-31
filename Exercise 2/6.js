/*
6. Translation
Write a program that allows the users to translate english words to italian. The
program should first ask for an english word, return the translated word and ask for a
new word. If the users writes “*” the program should terminate.
At the beginning the program should be able to translate the words “cat” (“gatto”),
“sea” (“mare”) and “cloud” (“nuvola”). If the user prompts different words the
program should ask the user for the translation, that should be stored for future
queries.
 */
const readline = require('readline-sync');
let dict = {
    'cat': 'gatto',
    'sea': 'mare',
    'cloud': 'nuvola'
};
while(true) {
    let rl = readline.question('Enter an english word: ');
    if (rl === '*') {
        break;
    }
    if (rl in dict) {
        console.log(dict[rl]);
    } else {
        let rl2 = readline.question('Enter the translation of the word: ');
        dict[rl] = rl2;
    }
}