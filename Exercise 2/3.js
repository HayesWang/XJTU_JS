/*
3. Palindrome
Create a program that asks for the user a string and prints “Yes” if it is palindrome
“No” otherwise.
e.g.,
input “anna” prints “Yes”
input “yes” prints “No”
Hint: strings are arrays
 */
const readline = require('readline-sync');
rl = readline.question('Enter a string: ');
for(let i=0; i<rl.length/2; i++){
    if(rl[i] !== rl[rl.length-1-i]){
        console.log('No');
        return;
    }
}
console.log('Yes');